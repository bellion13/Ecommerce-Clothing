import React from 'react'
import './Cart.css'
import { useContext } from 'react';
import cart_cross_icon from '@/Assets/cart_cross_icon.png'
import { CartContext } from '../../Context/CartContext/CartContext';
const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
  return (
    <div className='container' >
      <div className="cart">
        <div className="cart__list">
          <div className="cart__list-header">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />
          {cartItems.map(product => (
            <div className="cart__list-item" key={product.id}>
              <img src={product.image} alt={product.name} />
              <p className='cart__list-item--name'>{product.name}</p>
              <p>${product.new_price}</p>
              <div className="cart__quantity">
                <button onClick={() => decreaseQuantity(product.id)}>-</button>
                <p>{product.cart_quantity}</p>
                <button onClick={() => increaseQuantity(product.id)}>+</button>
              </div>
              <p className='clprimary'>${(product.new_price * product.cart_quantity)}</p>
              <img
                src={cart_cross_icon}
                alt="Remove"
                onClick={() => removeFromCart(product.id)}
              />
            </div>
          ))}
        </div>
        <div className="cart__total">
        
          <div className='cart__total-left' >
            <div className="cart__total-title">
              <h2>Cart Totals</h2>
            </div>
            <div className="cart__total-subtotal">
              <div>Subtotal</div>
              <div className="cart__total-amount">
                <div className='clprimary'>${cartItems.reduce((acc, item) => acc + (item.new_price * item.cart_quantity), 0)}</div>
              </div>
            </div>
            <hr />
            <div className="cart__total-shipping">
              <div>Shipping Free</div>
              <div className="cart__total-free">
                <div>Free</div>
              </div>
            </div>
            <hr />
            <div className="cart__total-sum">
              <div>Total  </div>
              <div className="cart__total-sum-amount">
                <div className='clprimary'>${cartItems.reduce((acc, item) => acc + (item.new_price * item.cart_quantity), 0)}</div>
              </div>
            </div>
          </div>
          <div className='cart__total-right'>
            <div className="cart__total-promo">
              If you have a promo code, enter it here
            </div>
            <div className="cart__total-promo-input">
              <input type="text" placeholder='Enter promo code' />
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart