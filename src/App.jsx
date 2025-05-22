import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import MainLayout from './pages/layout/MainLayout';
import ProductPage from './pages/product_pages/ProductPage';
import ProductDetailPage from './pages/product_pages/ProductDetail';




function App() {

  return (
    <> 
      <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
      </Routes>
    </MainLayout>
    </>
    
  )
}

export default App
