import React, { useState } from 'react'
import './Mshirtdetails.css'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Mshirtdetails = ({add}) => {

      const { id } =useParams()

      const[index,setindex]=useState(0)
      const[size,setsize]=useState("")
      const[added,setadded]=useState(false)
      const[qty,setqty]=useState(1)
      const[selectedcolor,setselectedcolor]=useState("grey")

      const navigate=useNavigate()

      const handlecart=()=>{

        if(!size){
          alert("please select size")
          return
        }


        if(!added){
          setadded(true)
          setqty(1)
          add({
            ...product,
            size,
            qty
          })
        }  else  {
          navigate("/cart")
        }
      }

      const sizes=["S","M","L" ,"XL"]

      const products=[
       {
        id:"ms1",
        images:[ "/mshirt1.png", "/mshirt2.png", "/mshirt3.png" ],
        text:"men slim fit cotton shirt",
        rating:4.2,
        reviews:"(282 views)" ,
        price:545,

        colors: {
            
                 grey: [
                    "/mshirt1grey-1.png",
                    "/mshirt1grey-2.png",
                    "/mshirt1grey-3.png"
                 ],
                 green: [
                   "/mshirt1green-1.png",
                   "/mshirt1green-2.png",
                   "/mshirt1green-3.png"
                 ],
                 brown: [
                   "/mshirt1brown-1.png",
                   "/mshirt1brown-2.png",
                   "/mshirt1brown-3.png"
                 ]
             
        },

        fabric:"100% cotton",
        fit:"slim fit",
        sleeve:"half sleeve",
        pattern:"solid",
        occasion:"casual wear"
      
      },
      {
        id:"ms2",
        images:[ "/mshirt2.png", "/mshirt3.png", "/mshirt4.png" ],
        text:"cotton blend formal shirt for men",
        rating:4.5,
        reviews:"(488 views)" ,
        price:799,
        clr:"pink",
        bg:" rgb(226, 154, 167)",

        fabric:"cotton blend",
        fit:"regular fit",
        sleeve:"full sleeve",
        pattern:"solid",
        occasion:"formal wear"
      
      },

        {
        id:"ms3",
        images:[ "/mshirt3.png", "/mshirt4.png", "/mshirt1.png" ],
        text:"men cotton blend checked shirt",
        rating:4.6,
        reviews:"(382 views)" ,
        price:799,
       clr:"white- blue",
       bg:"linear-gradient(to right,rgb(105, 105, 211),white)",

      fabric:"cotton blend",
      fit:"regular fit",
      sleeve:"full sleeve",
      pattern:"checked",
      occasion:"casual wear"
      
      },
      {

       id:"ms4",
        images:[ "/mshirt4.png", "/mshirt1.png", "/mshirt2.png" ],
        text:"cotton slim fit casual shirt for men",
        rating:3.7,
        reviews:"(390 views)" ,
        price:799,
        clr:"blue",
        bg:"rgb(67, 67, 168)",

        fabric:"cotton",
        fit:"slim fit",
        sleeve:"full sleeve",
        pattern:"solid",
        occasion:"casual wear"
      
      }
    
    ]

    const product = products.find((item) => item.id === id)

    if (!product) {
  return <h2>Product not found</h2>
}   

 const currentImages = product.colors
  ? product.colors[selectedcolor] || Object.values(product.colors)[0] : product.images || []

  return (
    <>
    <div className="mshirtdetails-outer">
        <div className="left">
          <div className="small">
            {currentImages.map((img,i)=>
              <img 
              key={i}
              src={img}
              onClick={()=> setindex(i)}
              className={index === i  ?  "active"  :  ""} 
              
              />
            
            )}
             
          </div>
          <div className="main">
             <img src={currentImages[index]}  alt="" />
          </div>
        </div>
        <div className="right">
            <h1>{product.text}</h1>
            <div className="reviews">
             {[...Array(5)].map((_, i)=>(
            <span key={i}
              className={`star ${i < Math.floor(product.rating) ? "gold" : "white"}`}
             >
                ★
             </span>
             ))}
              <span>{product.rating}</span>
              <span>{product.reviews}</span>
            </div>
            <h2>₹{product.price}</h2>
            
            <div className="details">
              <h4>product details</h4>
              <p><span>fabric  :</span>{product.fabric}</p>
              <p><span>fit  :</span>{product.fit}</p>
              <p><span>sleeve  :</span>{product.sleeve}</p>
              <p><span>pattern  :</span>{product.pattern}</p>
              <p><span>occasion  :</span>{product.occasion}</p>
            </div>
           <h3> <span>selected color : </span>{selectedcolor}</h3>
          
          <div className="color-container">
            
            {Object.keys(product.colors || {}).map((clr,i)=>(
             <div 
              key={i}
              className={`clr ${ selectedcolor === clr   ?  "active"   :  ""}`}
              style={{backgroundColor:clr}}
              onClick={()=> {
                setselectedcolor(clr )
                setindex(0)
              
              }}
              >
              
             </div>
           ))}
          </div>
           
           
           
            <h4>size chart</h4>
            <div className="sizes">
              {sizes.map((s,i)=>
              <button
                key={i}
                onClick={()=>setsize(s)}
                className={size === s  ? "active" : ""}
              >
                  {s}
              </button>
              
              )}
            </div>

          

              {added && (
                <div className="quantity">
                  <p>qty : {qty}</p>
                   <div className="qty">
                    <button id="b3" onClick={()=> setqty(qty+1)}>+</button>
                    <button id='b4'>{qty}</button>
                    <button id="b5" onClick={()=> qty > 1 && setqty(qty -1)}>-</button>
                   </div>
                  
                </div>
              )}

                <div className="btns">
              
              <button id='b1' onClick={handlecart}>{added ?  "go to cart"   :  "  add to cart"}</button>
              
              <NavLink to='/checkout'>
                  <button id='b2'>buy now</button>
              </NavLink>
              
            </div>
        </div>
    </div>
    </>
  )
}

export default Mshirtdetails
