import React, { useState ,useEffect} from 'react'
import './Kgirl3details.css'
import BackButton from './BackButton'
import Footer from './Footer'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Kgirl3details = ({add}) => {

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
        id:"kg31",
        text: "kids embroidered set",
        rating:5,
        reviews:"(633 views)" ,
        price:1599,

        colors: {
            
                  darkblue: [
                    "/kgirl31blue-1.png",
                    "/kgirl31blue-2.png",
                    "/kgirl31blue-3.png",
                 ],

                  brown: [
                    "/kgirl31brown-1.png",
                    "/kgirl31brown-2.png",
                    "/kgirl31brown-3.png",
                 ]
        },

       fabric: " silk blend ",
       fit: "regular fit",
       pattern: " sequins work",
       waist: "elastic waist ",
       length: " full length",
       occasion: "festive wear"
      
      },
      {
        id:"kg32",
        text: "kids girls denim skirt",
        rating:4.8,
        reviews:"(488 views)" ,
        price:690,
        colors: {
            
                  darkblue: [
                    "/kgirl32blue-1.png",
                    "/kgirl32blue-2.png",
                    "/kgirl32blue-3.png",
                 ],

                  black: [
                    "/kgirl32black-1.png",
                    "/kgirl32black-2.png",
                    "/kgirl32black-3.png",
                 ]
             
        },

         fabric: "denim ",
         fit: " A-line",
         pattern: "solid ",
         waist: "button closure ",
         length: " above knee length",
         occasion: "casual wear "
      
      },

        {
        id:"kg33",
        text: "kids girls crop top",
        rating:4.5,
        reviews:"(482 views)" ,
        price:359,
       colors: {
            
              black: [
                    "/kgirl33black-1.png",
                    "/kgirl33black-2.png",
                    "/kgirl33black-3.png",
                 ],

                red: [
                    "/kgirl33red-1.png",
                    "/kgirl33red-2.png",
                    "/kgirl33red-3.png",
                 ]
        },

       fabric: "cotton ",
       fit: "regular fit ",
       pattern: "solid  ",
       waist: " straight fit",
       length: "crop length",
       occasion: "casual wear "
              
      },
      {

       id:"kg34",
       text: "kids girls frock with belt",
        rating:4.3,
        reviews:"(460 views)" ,
        price:799,
        colors: {
            
               red: [
                    "/kgirl34red-1.png",
                    "/kgirl34red-2.png",
                    "/kgirl34red-3.png",
                 ],
              pink: [
                    "/kgirl34pink-1.png",
                    "/kgirl34pink-2.png",
                    "/kgirl34pink-3.png",
                 ]
              
             
        },


      fabric: " cotton-blend ",
      fit: " fit & flare",
      pattern: " solid",
      waist: " adjustable belt ",
      length: "knee length ",
      occasion: "party wear "
      
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
    <div className="kgirl3details-outer">
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

export default Kgirl3details
