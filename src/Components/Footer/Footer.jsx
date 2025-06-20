import React from 'react'
import './Footer.css'
import footer_logo from "../../Assets/logo_big.png"
import instagram from "../../Assets/instagram_icon.png"
import pintester from "../../Assets/pintester_icon.png"
import whatsapp from "../../Assets/whatsapp_icon.png"
const Footer = () => {
    return (
        <div className='container'>
            <div className='footer'>
                <div className='footer__logo'>
                    <img src={footer_logo} alt='logo' />
                    <p>SHOPBER</p>
                </div>
                <ul className='footer__links'>
                    <li>Company</li>
                    <li>Products</li>
                    <li>Offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className='footer__socials'>
                    <div className='footer__icons-container'>
                        <img src={instagram} alt="" />
                    </div>
                    <div className='footer__icons-container'>
                        <img src={pintester} alt="" />
                    </div>
                    <div className='footer__icons-container'>
                        <img src={whatsapp} alt="" />
                    </div>
                </div>
                <div className='footer__copyright'>
                <hr />
                    <p>Copyright © 2025 Shopber.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer