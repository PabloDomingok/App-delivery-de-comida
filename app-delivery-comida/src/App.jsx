import React, { useState } from 'react';
import Navbar from './components/Nabvar/Navbar'; // Asumiendo la ruta correcta al componente Navbar
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'; // Asumiendo la ruta correcta al componente Home
import Cart from './pages/Cart/Cart'; // Asumiendo la ruta correcta al componente Cart
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup';

const App = () => {

  const [showLogin,setShowLogin] =useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer/>
    </>
    
  );
}

export default App;

