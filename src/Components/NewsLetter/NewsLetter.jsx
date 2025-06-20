import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
    return (
        <div className='container'>
            <div className='newsLetter'>
                <h1>Get Exclusive Ofeers On Your Email</h1>
                <p>Subscribe to our newletter and stay updated</p>
                <div className='input-newsletter'>
                    <input type="email" placeholder='Enter your email' />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter