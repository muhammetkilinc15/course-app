import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://fakestoreapi.com/";

axios.interceptors.response.use(
    (response) => {
        console.log("Sucesss", response);
        if (response.status === 200) {
            toast.success("İşlem başarılı.");
        }
        return response;
    },
    (error) => {
        const { response } = error;

        const { status } = response;
        switch (status) {
            case 400:
                toast.error("Geçersiz istek");
                break;
            case 404:
                toast.error("İstek yapılan kaynak bulunamadı.");
                break;
            case 500:
                toast.error("Sunucu hatası oluştu.");
                break;
            default:
                toast.error("Beklenmeyen bir hata oluştu.");
        }
        return Promise.reject(error);
    }
);

const methods = {
    get: (url) => axios.get(url).then((response) => response.data), // ✅ parantez değişti
    post: (url, data) => axios.post(url, data).then((response) => response.data),
    put: (url, data) => axios.put(url, data).then((response) => response.data),
    delete: (url) => axios.delete(url).then((response) => response.data),
};

const products = {
    list: () => methods.get("products"),
    detail: (id) => methods.get(`products/${id}`),
};

const requests = {
    products,
};

export default requests;