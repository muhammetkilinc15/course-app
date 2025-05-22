import { Box, Container, Typography, Divider } from "@mui/material";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#1976d2',
                color: 'white',
                paddingY: 3,
                marginTop: 'auto',
                borderTop: '1px solid #ccc',
            }}
        >
            <Container maxWidth="lg">
                <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', marginBottom: 2 }} />
                <Typography variant="body1" align="center">
                    © {new Date().getFullYear()} Mstore. All rights reserved.
                </Typography>
                <Typography variant="body2" align="center" sx={{ opacity: 0.7 }}>
                    Built with Material UI by Mr. MsoftwareEngineer
                </Typography>
            </Container>
        </Box>
    );
}
