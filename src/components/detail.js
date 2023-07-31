import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../counterSlice';

export const Detail = () => {
  const { userId } = useParams();
  

  const dataRedux = useSelector((state) => state.products)
  const detailData= dataRedux.productList
  const dispatch = useDispatch()



  useEffect(() => {
    dispatch(getProducts())


  }, [dispatch])
  const selectedProduct = detailData.find(product => product.id === Number(userId));

  return (
    <div>
      <h1>User ID: {userId}</h1>
      {selectedProduct && (
        <div className='detailProdcut'>
          <div>{selectedProduct.title}</div>
          <img src={selectedProduct.image} alt={selectedProduct.title}></img>
          <div>{selectedProduct.price} $</div>
        </div>
      )}
    </div>
  );
};
