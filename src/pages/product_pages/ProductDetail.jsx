import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Alert
} from "@mui/material";
import LoadingComponent from "../../components/Loading";
import requests from "../../api/apiClient";

export default function ProductDetailPage() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await requests.products.detail(productId);
                setProduct(data);
            } catch (err) {
                setError("Ürün alınırken bir hata oluştu.");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [productId]);

    const handleAddToCart = () => {
        console.log("Ürün sepete eklendi:", product);
        alert("Ürün sepete eklendi!");
    };

    if (loading) {
        return <LoadingComponent message="Ürün yükleniyor..." />;
    }

    if (error) {
        return (
            <Box mt={4}>
                <Alert severity="error">{error}</Alert>
            </Box>
        );
    }

    if (!product) {
        return (
            <Box mt={4} textAlign="center">
                <Typography variant="h6" color="text.secondary">
                    Ürün bulunamadı.
                </Typography>
            </Box>
        );
    }

    return (
        <Box display="flex" justifyContent="center" mt={4}>
            <Card sx={{ width: 600, boxShadow: 3 }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={product.image}
                    alt={product.title}
                    sx={{ objectFit: "contain", backgroundColor: "#f5f5f5", padding: 2 }}
                />
                <CardContent>
                    <Typography variant="h5" fontWeight={600} gutterBottom>
                        {product.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" gutterBottom>
                        {product.description}
                    </Typography>
                    <Typography variant="h6" color="primary" gutterBottom>
                        ${product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Kategori: {product.category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Rating: {product.rating?.rate} ⭐ ({product.rating?.count} yorum)
                    </Typography>

                    <Box mt={2}>
                        <Button variant="contained" color="primary" onClick={handleAddToCart}>
                            Sepete Ekle
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
