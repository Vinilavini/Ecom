import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <h2>boutique</h2>

        <div className="inner">

            <div className="menu">
            <NavLink to='/men'>men</NavLink>
            <div className="dropdown">
              <NavLink to="/men/mshirt">shirt</NavLink>
              <NavLink to="/men/mpant">pant</NavLink>
              <NavLink to="/men/mtshirt">t-shirt</NavLink>
            </div>
          </div>


             <div className="menu">
              <NavLink to='/women'>women</NavLink>
              <div className="dropdown">
                <NavLink to="/women/wsaree">saree</NavLink>
                <NavLink to="/women/wtops">tops</NavLink>
                <NavLink to="/women/wfrock">frock</NavLink>
              </div>
            </div>
          
            <div className="menu">
              <NavLink to='/kids'>kids</NavLink>
              <div className="dropdown">
                <NavLink to="/kids/kboy1">boys 0-4</NavLink>
                <NavLink to="/kids/kboy2">boys 4-8</NavLink>
                <NavLink to="/kids/kboy3">boys 9-14</NavLink>
                <NavLink to="/kids/kgirl1">girls 0-4</NavLink>
                <NavLink to="/kids/kgirl2">girls 4-8</NavLink>
                <NavLink to="/kids/kgirl3">girls 9-14</NavLink>
              </div>
            </div>

        </div>

        <h3>
            <span>
                <NavLink to='/cart'>cart</NavLink>
            </span>
        </h3>
      </div>
    </>
  )
}

export default Navbar
