import React, { useState ,useEffect} from 'react'
import './Kboy1details.css'
import BackButton from './BackButton'
import Footer from './Footer'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Kboy1details = ({add}) => {

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

      const sizes=["S","M","L","XL"]

      const products=[
       {
        id:"kb11",
        text: "kids boys casual shirt & shorts set",
        rating:4.4,
        reviews:"(423 views)" ,
        price:699,

        colors: {
            
                 grey: [
                    "/kboy11grey-1.png",
                    "/kboy11grey-2.png",
                    "/kboy11grey-3.png",
                 ],
                 black: [
                   "/kboy11black-1.png",
                    "/kboy11black-2.png",
                    "/kboy11black-3.png",
                 ],
             
        },

        top_fabric: "cotton",
        bottom_fabric: " cotton blend",
        fit: "regular fit",
        pattern: "solid",
        neck: "shirt collar",
        waist: "elastic waist ",
        occasion: "casual wear / daily wear / school wear"
      
      },
      {
        id:"kb12",
        text: "kids boys festive t-shirt & shorts set",
        rating:3.6,
        reviews:"(388 views)" ,
        price:1250,
        colors: {
            
                 lightgreen: [
                    "/kboy12green-1.png",
                    "/kboy12green-2.png",
                    "/kboy12green-3.png",
                 ],
                 grey: [
                   "/kboy12grey-1.png",
                    "/kboy12grey-2.png",
                    "/kboy12grey-3.png",
                 ]
             
        },


        top_fabric: "cotton / cotton blend with premium finish",
        bottom_fabric: " soft cotton",
        fit: "regular fit",
        pattern: " festive design",
        neck: "shirt collor",
        waist: "elastic waist",
        occasion: "festive wear / party wear"
      
      },

        {
        id:"kb13",
        text: "kids boys ethnic wear set",
        rating:3.5,
        reviews:"(282 views)" ,
        price:1599,
       colors: {
            
              brown: [
                    "/kboy13brown-1.png",
                    "/kboy13brown-2.png",
                    "/kboy13brown-3.png",
                 ],
                black: [
                   "/kboy13black-1.png",
                    "/kboy13black-2.png",
                    "/kboy13black-3.png",
                 ]
             
        },

       top_fabric: " cotton silk",
       bottom_fabric: "cotton ",
       fit: "regular fit",
       pattern: " solid with design work",
       neck: "mandarin collar",
       waist: " drawstring",
       occasion: " traditional wear / wedding wear"
              
      },
      {

       id:"kb14",
        text: "kids boys printed shirt & shorts set",
        rating:4.5,
        reviews:"(560 views)" ,
        price:549,
        colors: {
            
               brown: [
                    "/kboy14brown-1.png",
                    "/kboy14brown-2.png",
                    "/kboy14brown-3.png",
                 ],
              darkblue: [
                    "/kboy14blue-1.png",
                    "/kboy14blue-2.png",
                    "/kboy14blue-3.png",
                 ]
              
             
        },


      top_fabric: "cotton blend",
      bottom_fabric: "soft cotton blend",
      fit: "regular fit",
      pattern: " cartoon print",
      neck: "round neck",
      waist: "elastic waist ",
      occasion: " daily wear / play wear"
      
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
    <BackButton/>
    <div className="kboy1details-outer">
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
              <p><span>top_fabric  : </span>{product.top_fabric}</p>
              <p><span>bottom_fabric  : </span>{product.bottom_fabric}</p>
              <p><span>fit  : </span>{product.fit}</p>
              <p><span>neck  : </span>{product.neck}</p>
              <p><span>pattern  : </span>{product.pattern}</p>
              <p><span>waist  : </span>{product.waist}</p>
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
    <Footer/>
    </>
  )
}

export default Kboy1details
