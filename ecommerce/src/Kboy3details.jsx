import React, { useState ,useEffect} from 'react'
import './Kboy3details.css'
import BackButton from './BackButton'
import Footer from './Footer'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Kboy3details = ({add}) => {

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
        id:"kb31",
        text: "kids boys kurta set",
        rating:3.8,
        reviews:"(383 views)" ,
        price:1549,

        colors: {
            
                  darkblue: [
                    "/kboy31blue-1.png",
                    "/kboy31blue-2.png",
                    "/kboy31blue-3.png",
                 ],

                  brown: [
                    "/kboy31brown-1.png",
                    "/kboy31brown-2.png",
                    "/kboy31brown-3.png",
                 ]
        },

        fabric: "cotton silk ",
        fit: "regular fit",
        pattern: "solid / printed / embroidery",
        waist: " elastic waist",
        length: "knee length",
        occasion: "festive wear / traditional wear"
      
      },
      {
        id:"kb32",
        text: "kids boys checked t-shirt with inner tee set",
        rating:4.6,
        reviews:"(488 views)" ,
        price:650,
        colors: {
            
                  red: [
                    "/kboy32red-1.png",
                    "/kboy32red-2.png",
                    "/kboy32red-3.png",
                 ],

                  blue: [
                    "/kboy32blue-1.png",
                    "/kboy32blue-2.png",
                    "/kboy32blue-3.png",
                 ]
             
        },


        fabric: " cotton blend",
        fit: "regular fit",
        pattern: "checked / solid inner tee",
        waist: "elastic waist",
        length: "hip length (t-shirt) / inner tee short length",
        occasion: "casual wear / daily wear "
      
      },

        {
        id:"kb33",
        text: "kids boys full length trouser",
        rating:4.5,
        reviews:"(482 views)" ,
        price:589,
       colors: {
            
              lightyellow: [
                    "/kboy33yellow-1.png",
                    "/kboy33yellow-2.png",
                    "/kboy33yellow-3.png",
                 ],
                black: [
                   "/kboy33black-1.png",
                    "/kboy33black-2.png",
                    "/kboy33black-3.png",
                 ]
             
        },

       fabric: " cotton blend ",
       fit: "regular fit",
       pattern: "solid ",
       waist: "button closure ",
       length: "full length",
       occasion: " school wear / formal wear"
              
      },
      {

       id:"kb34",
        text: "kids boys printed shirt",
        rating:4.5,
        reviews:"(560 views)" ,
        price:649,
        colors: {
            
               lightblue: [
                    "/kboy34blue-1.png",
                    "/kboy34blue-2.png",
                    "/kboy34blue-3.png",
                 ],
              lightgreen: [
                    "/kboy34green-1.png",
                    "/kboy34green-2.png",
                    "/kboy34green-3.png",
                 ]
              
             
        },


      fabric: "cotton blend",
      fit: "regular fit",
      pattern: "all over print ",
      waist: "not applicable",
      length: "hip length",
      occasion: "casual wear / daily wear"
      
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
    <div className="kboy3details-outer">
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
              <p><span>length  : </span>{product.length}</p>
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

export default Kboy3details
