import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";


export default function CoursePage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProducts(); // dışarıdaki fonksiyon
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
        return (
            <div className="text-center">
               <div className="spinner-border" role="status">
                    <span className="visually-hidden">Yükleniyor...</span>
                </div>
                <p>Yükleniyor...</p>
            </div>
        );
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <div>
            <div className="col-lg-12">
                <h1>Ürünler</h1>
                <p>Burada ürünlerinizi listeleyebilirsiniz.</p>
                <p>Ürünleri sepete ekleyebilirsiniz.</p>
                <div className="row g-3">
                    {/* Ürünleri listele */}
                    {/* Bootstrap grid sistemi ile 4'lü kolonlar */}
                    {products.map((product) => (
                        <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
                            <div className="card border-primary mb-3">
                                <div className="card-header">{product.category}</div>
                                {/* Ürün resmi */}
                                <div className="row justify-content-center">
                                    <div className="col-6">
                                        <img src={product.image} alt={product.title} width={100} height={100} className="card-img-top" />
                                    </div>
                                </div>
                                {/* Ürün başlığı ve açıklaması */}
                                {/* Ürün fiyatı */}
                                {/* Sepete ekle butonu */}
                                
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{
                                        product.description.length > 50
                                            ? product.description.substring(0, 50) + "..."
                                            : product.description
                                    }</p>
                                    <p className="card-text">${product.price}</p>
                                    <Link to={`/course/${product.id}`} className="btn btn-outline-primary btn-sm">
                                        Detaya Git
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// 🔽 Servis fonksiyonu (saf veri getirici)
export async function getProducts() {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
}
