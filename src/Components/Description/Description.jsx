import React from 'react'
import './Description.css'
const Description = (props) => {
    const { product } = props;
  return (
    <div className='description'>
        <h2 className='description-title'>Description</h2>
        <p className='description-content'>
            {product.description}
        </p>
    </div>
  )
}

export default Description