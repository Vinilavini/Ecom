import React from 'react'
import './Success.css'
import { NavLink } from 'react-router-dom'

const Success = () => {
  return (
    <div className="success-page">

      <div className="success-card">

        <div className="icon">🎉</div>

        <h1>Order Placed Successfully</h1>

        <p>Thank you for your purchase</p>
        <p>Your order will be delivered soon 🚚</p>

        <NavLink to="/">
          <button>Continue Shopping</button>
        </NavLink>

      </div>

    </div>
  )
}

export default Success