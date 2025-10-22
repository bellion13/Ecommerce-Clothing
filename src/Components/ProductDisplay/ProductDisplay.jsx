import React from 'react'
import './ProductDisplay.css'
import star_icon from '../../Assets/star_icon.png'
import star_dull_icon from '../../Assets/star_dull_icon.png'
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext/CartContext';
const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(CartContext);
    return (
        <div className='productdisplay'>
            <div className='productdisplay__left'>
                <div className="productdisplay__img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay__img-main">
                    <img src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay__right">
                <h1>{product.name}</h1>
                <div className="productdisplay__right-rating">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(123)</p>
                </div>
                <div className="productdisplay__right-price">
                    <div className='productdisplay__price-new'>${product.new_price}</div>
                    <div className='productdisplay__price-old'>${product.old_price}</div>
                </div>
                <div className="productdisplay__right-description">
                    <p>{product.description}</p>
                </div>
                <div className="productdisplay__right-size">
                    <h3>Size</h3>
                    <div className="productdisplay__right-size-list">
                        {product.size.map((size, index) => (
                            <div key={index} className="productdisplay__right-size-item">{size}</div>
                        ))}
                    </div>
                </div>
               <button
              className='productdisplay__right-add-btn'
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
                <p className='productdisplay__right-category'>
                    Category: <span>{product.category}</span>
                </p>
                <p className='productdisplay__right-category'>
                    Tags: <span>{product.tags.join(", ")}</span>
                </p>
            </div>
        </div>
    )
}

export default ProductDisplay