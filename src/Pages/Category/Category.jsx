import React from 'react'
import './Category.css'
import { useState } from 'react'
import all_product from "../../Assets/all_product"
import dropdown_icon from "../../Assets/dropdown_icon.png"
import Item from '../../Components/Item/Item'

const Category = (props) => {
  // Lọc sản phẩm theo category từ props
  const filteredProducts = all_product.filter(
    (item) => item.category === props.category
  );
  // Số lượng sản phẩm hiển thị
  const [visibleCount, setVisibleCount] = useState(8); // 👈 Mặc định hiện 8

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4); // 👈 Mỗi lần load thêm 4
  };
  return (
    <div className='container'>
      <div className='category'>
        <img className='category__img' src={props.banner} alt="" />
        <div className='category__indexSort'>
          <p>
            <span>
              Show 1-{filteredProducts.length}
            </span>
            &nbsp;out of {filteredProducts.length} results
          </p>
          <div className='category__sort'>
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>
        <div className='category__products'>
          {filteredProducts.slice(0, visibleCount).map((item, i) => (
            <Item
              key={i}
              id={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
              category={item.category}
            />
          ))}
        </div>
        {visibleCount < filteredProducts.length && (
          <div className="category__loadmore">
            <button onClick={handleLoadMore}>Load more</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Category
