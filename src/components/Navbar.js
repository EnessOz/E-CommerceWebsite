import React from 'react';
import { NavLink } from "react-router-dom";
import "./Comp.css";
export const Navbar = () => {

  return (
    <nav className='links'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/product">Products</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/offers">Offers</NavLink>
      <NavLink to="/github">Github</NavLink>
      <NavLink to="/info">Information</NavLink>
    </nav>
  )
}
