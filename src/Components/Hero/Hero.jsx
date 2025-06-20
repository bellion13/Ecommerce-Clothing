import React from 'react'
import hero_img from '../../Assets/hero_image.png'
import hand_icon from '../../Assets/hand_icon.png'
import arrow_icon from '../../Assets/arrow.png'
import './Hero.css'
const Hero = () => {
    return (
        <div className='hero'>
            <div className='container hero__container'>
                <div className='hero__left'>
                    <h2>NEEW ARRIVALS ONLY</h2>
                    <div className='hero__left__text'>
                        <div className='hero__left__hand-icon'>
                            <p>New</p>
                            <img src={hand_icon} alt="Hand Icon" />

                        </div>
                        <p>collection</p>
                        <p>for everyone</p>
                    </div>
                    <div className='hero__left__btn'>
                        <div>Latest Collection</div>
                        <img src={arrow_icon} alt="Arrow Icon" />
                    </div>
                </div>
                <div className='hero__right'>
                    <img src={hero_img} alt="Hero" />
                </div>
            </div>

        </div>
    )
}

export default Hero