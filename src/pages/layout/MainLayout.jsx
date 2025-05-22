import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Container } from "@mui/material";
import { ToastContainer } from "react-toastify";

export default function MainLayout({children}) {
  return (
    <>
      <ToastContainer position="top-right" 
        autoClose={3000} 
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <Header />
      <Container maxWidth="lg" sx={{ marginTop: 2, minHeight: '80vh' }}>
        {children}
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
