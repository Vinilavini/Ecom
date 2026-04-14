import React, { useState ,useEffect} from 'react'
import './Mtshirtdetails.css'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Mtshirtdetails = ({add}) => {

      const { id } =useParams()

      const[index,setindex]=useState(0)
      const[size,setsize]=useState("")
      const[added,setadded]=useState(false)
      const[qty,setqty]=useState(1)
      const[selectedcolor,setselectedcolor]=useState("")

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
      qty:1,
      selectedColor: selectedcolor,
      image: currentImages[index]
    })
  } else {
    navigate("/cart")
  }
}

      const sizes=["S","M","L" ,"XL"]

      const products=[
       {
        id:"mt1",
        text: "men solid cotton t-shirt",
        rating:4.2,
        reviews:"(323 views)" ,
        price:499,

        colors: {
            
                 yellow: [
                    "/mtshirt1yellow-1.png",
                    "/mtshirt1yellow-2.png",
                    "/mtshirt1yellow-3.png"
                 ],
                 lightgreen: [
                   "/mtshirt1green-1.png",
                    "/mtshirt1green-2.png",
                    "/mtshirt1green-3.png"
                 ],
                 darkviolet: [
                   "/mtshirt1violet-1.png",
                    "/mtshirt1violet-2.png",
                    "/mtshirt1violet-3.png"
                 ]
             
        },

        fabric: "100% breathable cotton",
        fit: "regular fit",
        sleeve: "half sleeve",
        pattern: "solid",
        occasion: "daily wear / casual wear"
      
      },
      {
        id:"mt2",
        text: "men solid polo neck cotton t-shirt",
        rating:3.7,
        reviews:"(288 views)" ,
        price:379,
        colors: {
            
                 darkred: [
                    "/mtshirt2red-1.png",
                    "/mtshirt2red-2.png",
                    "/mtshirt2red-3.png"
                 ],
                 pink: [
                   "/mtshirt2pink-1.png",
                    "/mtshirt2pink-2.png",
                    "/mtshirt2pink-3.png"
                 ],
                 grey: [
                   "/mtshirt2grey-1.png",
                    "/mtshirt2grey-2.png",
                    "/mtshirt2grey-3.png"
                 ]
             
        },


        fabric: "100% premium breathable cotton",
        fit: "regular fit",
        sleeve: "half sleeve",
        pattern: "solid",
        occasion: "casual wear / office wear"
      
      },

        {
        id:"mt3",
        text: "men printed cotton t-shirt",
        rating:4.3,
        reviews:"(382 views)" ,
        price:430,
       colors: {
            
               black: [
                    "/mtshirt3black-1.png",
                    "/mtshirt3black-2.png",
                    "/mtshirt3black-3.png"
                 ],
                 white: [
                   "/mtshirt3white-1.png",
                    "/mtshirt3white-2.png",
                    "/mtshirt3white-3.png"
                 ],
                 blue: [
                   "/mtshirt3blue-1.png",
                    "/mtshirt3blue-2.png",
                    "/mtshirt3blue-3.png"
                 ]
             
        },

        fabric: "100% premium breathable cotton",
        fit: "regular fit",
        sleeve: "half sleeve",
        pattern: "printed",
        occasion: "casual wear / daily wear"
              
      },
      {

       id:"mt4",
        text: "men solid full sleeve cotton t-shirt",
        rating:4.7,
        reviews:"(390 views)" ,
        price:549,
        colors: {
            
                 pink: [
                    "/mtshirt4pink-1.png",
                    "/mtshirt4pink-2.png",
                    "/mtshirt4pink-3.png"
                 ],
                 darkviolet: [
                   "/mtshirt4violet-1.png",
                    "/mtshirt4violet-2.png",
                    "/mtshirt4violet-3.png"
                 ],
                 brown: [
                   "/mtshirt4brown-1.png",
                    "/mtshirt4brown-2.png",
                    "/mtshirt4brown-3.png"
                 ]
             
        },


        fabric: "100% soft breathable cotton",
        fit: "regular fit",
        sleeve: "full sleeve",
        pattern: "solid",
        occasion: "casual wear / daily wear / light winter wear"
      
      }
    
    ]

    const product = products.find((item) => item.id === id)

useEffect(()=>{
  if(product?.colors){
    const firstColor = Object.keys(product.colors)[0]
    setselectedcolor(firstColor)
    setindex(0)
  }
}, [id])  // ✅ only re-runs when the product page changes

useEffect(()=>{
  setindex(0)
},[selectedcolor])

    if (!product) {
  return <h2>Product not found</h2>
}   

const currentImages = selectedcolor && product.colors[selectedcolor]
  ? product.colors[selectedcolor]
  : Object.values(product.colors)[0]

  return (
    <>
    <div className="mtshirtdetails-outer">
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
             <img 
              key={selectedcolor + index}
             src={currentImages[index]}  
             alt=""
             />
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
              <p><span>fabric  : </span>{product.fabric}</p>
              <p><span>fit  : </span>{product.fit}</p>
              <p><span>sleeve  : </span>{product.sleeve}</p>
              <p><span>pattern  : </span>{product.pattern}</p>
              <p><span>occasion  : </span>{product.occasion}</p>
            </div>
           <h3> <span>selected color : </span>{selectedcolor}</h3>
          
          <div className="color-container">
            
            {Object.keys(product.colors || {}).map((clr)=>(
              <div 
                key={clr}
                className={`clr ${ selectedcolor === clr ? "active" : ""}`}
                style={{backgroundColor: clr}}
                onClick={()=>{
                console.log("clicked", clr)
                  setselectedcolor(clr)
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

export default Mtshirtdetails
