import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import CoursePage from './pages/Course';
import Header from './pages/layout/Header';
import Footer from './pages/layout/Footer';
import MainLayout from './pages/layout/MainLayout';


function App() {

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/course" element={<CoursePage />} />
      </Routes>
    </MainLayout>
  )
}

export default App
