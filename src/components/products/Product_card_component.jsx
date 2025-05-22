import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Button,
    Rating,
    Stack
} from "@mui/material";
import { Link } from "react-router-dom";

export default function ProductCardComponent({ product }) {
    return (
        <Box display="flex" justifyContent="center">
            <Card
                sx={{
                    width: 300,
                    height: 480,
                    margin: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: 3,
                    borderRadius: 2
                }}
            >
                <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.title}
                    sx={{
                        height: 200,
                        objectFit: "contain",
                        padding: 1,
                        backgroundColor: "#f5f5f5"
                    }}
                />
                <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                            fontWeight: "bold",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                        }}
                    >
                        {product.title}
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            color: "text.secondary",
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical"
                        }}
                    >
                        {product.description}
                    </Typography>

                    <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 600, marginTop: 1 }}
                    >
                        ${product.price}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        Category: {product.category}
                    </Typography>

                    <Stack direction="row" alignItems="center" spacing={1} mt={1}>
                        <Rating
                            name="read-only"
                            value={product.rating?.rate || 0}
                            precision={0.5}
                            readOnly
                            size="small"
                        />
                        <Typography variant="body2" color="text.secondary">
                            ({product.rating?.count || 0} reviews)
                        </Typography>
                    </Stack>

                    <Box mt="auto" pt={2}>
                        <Button
                            component={Link}
                            to={`/products/${product.id}`}
                            variant="outlined"
                            fullWidth
                            size="small"
                            sx={{ textTransform: "none" }}
                        >
                            Detaylara Git
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
