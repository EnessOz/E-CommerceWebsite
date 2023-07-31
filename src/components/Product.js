import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, men, woman, children, addCard, removeCard, removeAll } from '../counterSlice';

export const Product = () => {

  const [loading, setLoading] = useState(true);
  const dataRedux = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch]);


  return (
    <>
      <div className="productContainer">
        <button onClick={() => dispatch(men())}>Men</button>
        <button onClick={() => dispatch(woman())}>Woman</button>
        <button onClick={() => dispatch(children())}>Children</button>
        <div>
          {loading ? (
            <div className='loading'></div>
          ) : dataRedux.filteredList.length === 0 ? (
            <div>Please Select a Category</div>
          ) : (
            dataRedux.filteredList.map((item) => (
              <div className="productMain" key={item.id}>
                <NavLink className="NavLink" to={`/product/${item.id}`}>
                  {item.title}
                </NavLink>
                <div className="productImage">
                  <img className='image' src={item.image} alt={item.title} />
                  <div className="priceOverlay">
                    {item.price} $
                    <button className='addBtn' onClick={() => dispatch(addCard(item.id))}>+</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className='selectedProductsWrapper'>
          <h2>Shopping Cart</h2>
          <button onClick={() => dispatch(removeAll())}>Remove All</button>
          {dataRedux.cardList.map((selected) => (
            <div className='selectedProducts' key={selected.id}>
              <div>{selected.title}</div>
              <div>{selected.price} $</div>
              <img src={selected.image} alt={selected.title} />
              <button className='deleteBtn' onClick={() => dispatch(removeCard(selected.id))}>Delete</button>
            </div>
          ))}
          <h3 className="totalPrice">Total Price: {dataRedux.totalPrice.toFixed(2)} $</h3>
          <NavLink to="/payment">Pay</NavLink>
        </div>
      </div>
    </>
  );
};
