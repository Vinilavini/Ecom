import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <h2>Boutique</h2>

        <div className="inner">
            <span>
                <NavLink to='/men'>men</NavLink>
            </span>
            <span>
                <NavLink to='/women'>women</NavLink>
            </span>
            <span>
                <NavLink to='/kids'>kids</NavLink>
            </span>

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
