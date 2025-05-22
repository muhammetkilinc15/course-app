import { Grid } from "@mui/material";
import ProductCardComponent from "./Product_card_component";

export default function ProductListComponent({ products }) {
    if (!products || products.length === 0) {
        return <p>No products available</p>;
    }

    return (
        <Grid container spacing={2}>
            {products.map((product) => (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
                    <ProductCardComponent product={product} />
                </Grid>
            ))}
        </Grid>
    );
}
