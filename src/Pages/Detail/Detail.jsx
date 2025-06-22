
import React from 'react';
import { useParams } from 'react-router-dom';
import all_product from '../../Assets/all_product'
import Breacdcrum from '../../Components/Breacdcrum/Breacdcrum';
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay';
import Description from '../../Components/Description/Description';
import RalateProduct from '../../Components/RalateProduct/RalateProduct';

const Detail = () => {
  const { detailId } = useParams();
  const product = all_product.find((item) => item.id === Number(detailId));
  if (!product) {
    return <div>Sản phẩm không tồn tại</div>;
  }
  return (
    <div className='container'>
      <div className='detail'>
        <Breacdcrum product={product} />
        <ProductDisplay product={product} />
        <Description product={product} />
        <RalateProduct />
      </div>
    </div>
  );
};

export default Detail;
