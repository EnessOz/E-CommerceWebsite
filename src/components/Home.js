import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../counterSlice";

export const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true);

  const dataRedux = useSelector((state) => state.products)
  const home = dataRedux.productList
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % home.length
      )
    }, 1500)

    return () => clearInterval(interval)
  }, [home])

  useEffect(() => {
    if (home.length > 0) {
      setIsLoading(false);
    }
  }, [home])

  return (
    <div className='homePage'>
      <h1>Home Page</h1>
      <h2>Products</h2>
      <div className='homeImgGrid'>
        {isLoading ? (
          <div className='loading'></div>
        ) : (
          home.length > 0 && (
            <div className='homeImgItem' key={home[currentImageIndex].id}>
              <img src={home[currentImageIndex].image} alt="" />
            </div>
          )
        )}
      </div>
    </div>
  )
}
