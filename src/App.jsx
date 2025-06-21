import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './Components/Header/Header'
import Category from './Pages/Category/Category';
import Shop from './Pages/Shop/Shop';
import Detail from './Pages/Detail/Detail';
import Cart from './Pages/Cart/Cart';
import Login from './Pages/Login/Login';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/mens" element={<Category/>} />
          <Route path="/womens" element={<Category/>} />
          <Route path="/kids" element={<Category/>} />
          <Route path="/detail" element={<Detail/>}>
            <Route path=":detailId" element={<Detail />} />
          </Route>
          <Route path="/login" element={<Login/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        <Footer />
      

      </BrowserRouter>
    </div>
  );
}

export default App
