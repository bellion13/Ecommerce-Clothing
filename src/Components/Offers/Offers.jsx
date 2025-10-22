import React from 'react'
import './Offers.css'
import exclusive_image from '../../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='container'>
        <div className='offers'>
            <div className='offers__left'>
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div className='offers__right'>
                <img src={exclusive_image} alt="Exclusive Offers" />
            </div>
        </div>
    </div>
  )
}

export default Offers