import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import CoursePage from './pages/product_list';
import MainLayout from './pages/layout/MainLayout';
import CourseDetail from './pages/product_detail';


function App() {

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/course/" element={<CoursePage />} />
        <Route path="/course/:courseId" element={<CourseDetail />} />
      </Routes>
    </MainLayout>
  )
}

export default App
