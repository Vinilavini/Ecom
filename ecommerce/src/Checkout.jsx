import React,{useState} from 'react'
import './Checkout.css'
import { useNavigate } from 'react-router-dom'

const Checkout = ({ cart , setcart}) => {

  const [address,setaddress]=useState({
    name:"",
    phone:"",
    pincode:"",
    city:"",
    fullAddress:""
  })
  const[error,seterror]=useState({})

  const navigate=useNavigate()

  const handleorder = ()=>{

   let newError = {}

   if(!address.name){
      newError.name = true
   }

   if(address.phone.length !== 10){
      newError.phone = true
   }

   if(address.pincode.length !== 6){
      newError.pincode = true
   }

   if(!address.city){
      newError.city = true
   }

   if(!address.fullAddress){
      newError.fullAddress = true
   }

   seterror(newError)

   if(Object.keys(newError).length > 0) return

   setcart([])
   navigate("/success")
}

  const total = cart.reduce((sum,item)=> sum + (item.price * item.qty),0)

  return (
    <>
     <div className="checkout-outer">

        <h1>order summary</h1>

        <div className="left">
              <h2>delivery address</h2>

              <input type="text" 
                     className={error.name ? "error" : ""}
                     placeholder='full name' 
                     value={address.name}  
                     onChange={(e)=> setaddress({...address,name:e.target.value})}
              />
              <input type="text" 
                     className={error.phone ? "error" : ""}
                     placeholder='mobile number'
                     value={address.phone}
                     onChange={(e)=>setaddress({...address,phone:e.target.value})}
              />
              <input type="text" 
                     className={error.pincode ? "error" : ""}
                     placeholder='pincode'
                     value={address.pincode}
                     onChange={(e)=>setaddress({...address,pincode:e.target.value})}
              />
              <input type="text" 
                     className={error.city ? "error" : ""}
                     placeholder='city'
                     value={address.city}
                     onChange={(e)=>setaddress({...address,city:e.target.value})}
              />
              <textarea placeholder='full address'
                        className={error.fullAddress ? "error" : ""}
                        value={address.fullAddress}
                        onChange={(e)=>setaddress({...address,fullAddress:e.target.value})}  
              />
        </div>

        <div className="right">
         
         <h2>cart items</h2>

        {cart.map((item)=>
        <div className="inner" key={item.id + item.selectedColor + item.size}>
           <img src={item.images?.[0] || item.image} alt="" />
      
           <div className="details">
             <p>{item.text}</p>
             <span>qty:{item.qty}</span>
             <h4>price:₹{item.price}</h4>
           </div>
        </div>
      )}

        <div className="total">

         <div className="row">
           <span>subtotal</span>
           <span>₹{total}</span>
         </div>

         <div className="row">
          <span>delivery</span>
          <span>Free</span>
         </div>

         <div className="row">
          <span>discount</span>
          <span>₹0</span>
         </div>

  

         <div className="row grand">
          <span>total</span>
          <span>₹{total}</span>
         </div>

         <button onClick={handleorder}>place order</button>

       </div>
           
       </div>

     </div> 
    </>
  )
}

export default Checkout
