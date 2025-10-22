import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import cart from '../../Assets/cart_icon.png';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext/CartContext';
import './Header.css';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const location = useLocation();

  const getActiveMenu = () => {
    if (location.pathname === '/') return 'shop';
    if (location.pathname.includes('mens')) return 'mens';
    if (location.pathname.includes('women')) return 'women';
    if (location.pathname.includes('kids')) return 'kids';
    return '';
  };

  const activeMenu = getActiveMenu();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.cart_quantity, 0);

  return (
    <div className="header container">
      <div className="header__logo">
        <Link to="/">
          {activeMenu === 'shop' && <hr />}
          <img src={logo} alt="Logo" />
          <p>SHOPBER</p>
        </Link>
      </div>
      <div className="header__nav">
        <ul>
          <li><Link to="/">Shop</Link>{activeMenu === "shop" && <hr />}</li>
          <li><Link to="/mens">Men</Link>{activeMenu === "mens" && <hr />}</li>
          <li><Link to="/women">Women</Link>{activeMenu === "women" && <hr />}</li>
          <li><Link to="/kids">Kids</Link>{activeMenu === "kids" && <hr />}</li>
        </ul>
      </div>
      <div className='header__login-cart'>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart} alt="Cart" /></Link>
        <span className='cart__count'>{totalQuantity}</span>
      </div>
    </div>
  );
};

export default Header;
