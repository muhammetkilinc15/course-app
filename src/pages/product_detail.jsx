import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function CourseDetail() {
    const { courseId } = useParams(); // URL'den id'yi al
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProduct(courseId); // dışarıdaki fonksiyon
                setProduct(data);
            } catch (err) {
                setError("Ürün alınırken bir hata oluştu.");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [courseId]);
    return (
        <div className="col-lg-12">
            <h1>Ürün Detayı</h1>
            <p>Burada ürün detayını görebilirsiniz.</p>
            <p>Ürünü sepete ekleyebilirsiniz.</p>
            {loading && (
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Yükleniyor...</span>
                    </div>
                    <p>Yükleniyor...</p>
                </div>
            )}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {product && (
                <div className="card border-primary mb-3">
                    <div className="card-header">{product.category}</div>
                    {/* Ürün resmi */}
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <img src={product.image} alt={product.title}  className="card-img-top" />
                        </div>
                    </div>
                    {/* Ürün başlığı ve açıklaması */}
                    {/* Ürün fiyatı */}
                    {/* Sepete ekle butonu */}
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">Fiyat: {product.price} $</p>
                        <button type="button" className="btn btn-primary">Sepete Ekle</button>
                    </div>
                </div>
            )}
        </div>
    );
    
}

export async function getProduct(id) {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
}