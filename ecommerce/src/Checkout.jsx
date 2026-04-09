import React from 'react'
import './Checkout.css'
import { NavLink } from 'react-router-dom'

const Checkout = ({ cart }) => {

    
    

  

  return (
    <>
     <div className="checkout-outer">

        <h1>order summary</h1>

        <div className="left">
              <h2>delivery address</h2>

              <input type="text" placeholder='full name'/>
              <input type="text" placeholder='mobile number'/>
              <input type="text" placeholder='pincode'/>
              <input type="text" placeholder='city'/>
              <textarea placeholder='full address'></textarea>
        </div>

        <div className="right">
         
         <h2>cart items</h2>

         {cart.map((item)=>
            <div className="inner" key={item.id}>
               <img src={item.images[0]} alt="" />

               <div className="details">
                 <p>{item.text}</p>
                 <span>qty:{item.qty}</span>
               </div>
            </div>
        )}
           
        </div>

     </div> 
    </>
  )
}

export default Checkout
