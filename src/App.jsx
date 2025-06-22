import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './Components/Header/Header'
import Category from './Pages/Category/Category';
import Shop from './Pages/Shop/Shop';
import Detail from './Pages/Detail/Detail';
import Cart from './Pages/Cart/Cart';
import LoginSignup from './Pages/LoginSignup/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from "./Assets/banner_mens.png";
import women_banner from "./Assets/banner_women.png";
import kid_banner from "./Assets/banner_kids.png";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<Category banner={men_banner} category="Men" />} />
          <Route path="/womens" element={<Category banner={women_banner} category="Women" />} />
          <Route path="/kids" element={<Category banner={kid_banner} category="Kid" />} />
          <Route path="/detail/:detailId" element={<Detail />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
