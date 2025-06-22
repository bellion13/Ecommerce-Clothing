import React from 'react'
import data_product from '../../Assets/data'
import Item from '../../Components/Item/Item'
import './RalateProduct.css'
const RalateProduct = () => {
    return (
        <div className='ralate-product'>
            <h1 className='ralate-product-title'>Related Products</h1>
            <hr />
            <div className='ralate-product-list'>
                {data_product.map((item, i) => {
                    return <Item 
                    key={i} 
                    id={item.id} 
                    name={item.name} 
                    image={item.image} 
                    new_price={item.new_price} 
                    old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default RalateProduct