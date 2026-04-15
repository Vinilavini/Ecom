import React from 'react'
import './Cart.css';
import BackButton from './BackButton';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

const Cart = ({cart,increment,decrement,remove}) => {

    const totalprice=cart.reduce((sum,item)=> sum + (item.qty * item.price),0)

    const shipping=0;
    const platform =7;
    const total=totalprice+ shipping+platform;
  return (
    <>
    <BackButton/>
      <div className="cart-outer">

         {cart.length === 0  ?  (
            <h1>Your cart is empty</h1>
            
            
        )   :   (
           <>
            <h1>your cart page</h1>

        <div className="left">
        {cart.map((item)=>
         <div className="box" key={item.id}>

          <div className="left-part">
               <img src={item.colors[item.selectedColor][0]} alt="" />
               <div className="qty">
                   <button onClick={()=>decrement(item.id)}>-</button>
                   <span>{item.qty}</span>
                   <button onClick={()=>increment(item.id)}>+</button>
               </div>
          </div>
          <div className="right-part">
            <h2>{item.text}</h2>

            <div className="reviews">
             {[...Array(5)].map((_, i) => (
              <span
                 key={i}
                 className={i < Math.floor(item.rating) ? "gold" : "white"}
              >
                ★
              </span>
            ))}
           <span className="rating-text">
            {item.rating} {item.reviews}
           </span>
          </div>
           <h3>size:{item.size}</h3>
           <h4>₹{item.price}</h4>
           <p>qty: {item.qty}</p>
           <p>color: {item.selectedColor || item.clr}</p>
           <button className='remove' onClick={()=>remove(item.id)}>remove</button>
          </div> 
           
        </div>

        )}
       
        <NavLink to='/'>continue shopping</NavLink>
        </div>

         <div className="right">
           <h1>summary</h1>
           <h3>
            <span>price</span>
            <span>₹{totalprice}</span>
           </h3>

            <h3>
            <span>shipping</span>
            <span>free</span>
           </h3>

            <h3>
            <span>platform fees</span>
            <span>₹{platform}</span>
           </h3>

            <h2>
            <span>total</span>
            <span>₹{total}</span>
           </h2>
           
           <NavLink to='/checkout'>
              <button>place order</button>

           </NavLink>
           
          
        </div>
        </>
        )}
      </div>
      <Footer/>
    </>
  )
}

export default Cart
