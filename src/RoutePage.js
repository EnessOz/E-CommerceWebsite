import React from 'react'
import { Route, Routes } from "react-router-dom"
import { Contact } from './components/Contact';
import { Product } from './components/Product';
import { Offers } from './components/Offers';
import { Information } from './components/Information';
import { Github } from './components/Github';
import { Home } from './components/Home';
import { Detail } from './components/detail';
import { Payment } from './components/payment';


export const RoutePage = () => {
  return (
    <div className='routePages'>
      <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/info' element={<Information />} />
        <Route path='/github' element={<Github />} />
        <Route path='/' element={<Home />} />
        <Route path='/payment' element={<Payment/>}></Route>
        <Route path='/product/:userId' element={<Detail/>}></Route>
      </Routes>
    </div>
  )
}
