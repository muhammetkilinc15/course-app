import { useEffect, useState } from "react";
import ProductListComponent from "../../components/products/Product_list_component";
import LoadingComponent from "../../components/Loading";
import requests from "../../api/apiClient";


export default function ProductPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await requests.products.list(); 
                setProducts(data);
            } catch (err) {
                setError("Ürünler alınırken bir hata oluştu.");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading)
        return <LoadingComponent message="Ürünler yükleniyor..." />;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <div>
            <div className="col-sm-12 col-md-12 col-lg-12">
                <ProductListComponent products={products} />
            </div>
        </div>
    );
}
