import React from 'react'
import arrow_icon from '../../Assets/breadcrum_arrow.png'
import './Breacdcrum.css'
const Breacdcrum = (props) => {
    const { product } = props;
    return (
        <div className='breacdcrum'>
            SHOP
            <img src={arrow_icon} alt="" />
            {product.category}
            <img src={arrow_icon} alt="" />
            {product.name}
        </div>
    )
}

export default Breacdcrum