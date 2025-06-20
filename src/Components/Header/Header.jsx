import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/logo.png'
import cart from '../../Assets/cart_icon.png'
import './Header.css'
const Header = () => {
    const [menu, setMenu] = useState("shop");
    return (
        <>
            <div className="header container">
                <div className="header__logo">
                    <Link
                        to="/"
                        onClick={() => { setMenu("shop") }}>{menu === "shop" ? <hr /> : <></>}
                        <img src={logo} alt="Logo" />
                        <p>SHOPBER</p>
                    </Link>
                </div>
                <div className="header__nav">
                    <ul>
                        <li onClick={() => { setMenu("shop") }}><Link to="/">Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                        <li onClick={() => { setMenu("mens") }}><Link to="/mens">Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
                        <li onClick={() => { setMenu("womens") }}><Link to="/womens">Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
                        <li onClick={() => { setMenu("kids") }}><Link to="/kids">Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
                    </ul>
                </div>
                <div className='header__login-cart'>

                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                    <Link to="/cart">

                        <img src={cart} alt="Cart" />
                    </Link>
                    <span className='cart__count'>0</span>
                </div>
            </div>
        </>
    )
}

export default Header