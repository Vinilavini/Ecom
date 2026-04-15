import React, { useState ,useEffect} from 'react'
import './Kgirl2details.css'
import BackButton from './BackButton'
import Footer from './Footer'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Kgirl2details = ({add}) => {

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
        id:"kg21",
        text: "kids girls sleeveless jumpsuit",
        rating:4.3,
        reviews:"(433 views)" ,
        price:499,

        colors: {
            
                  pink: [
                    "/kgirl21pink-1.png",
                    "/kgirl21pink-2.png",
                    "/kgirl21pink-3.png",
                 ],

                  lightgreen: [
                    "/kgirl21green-1.png",
                    "/kgirl21green-2.png",
                    "/kgirl21green-3.png",
                 ]
        },

        fabric: "cotton ",
        fit: " relaxed fit",
        pattern: " floral print",
        waist: "elastic waist ",
        length: "full length ",
        occasion: "casual wear "
      
      },
      {
        id:"kg22",
        text: "kids cotton denim jeans",
        rating:4.8,
        reviews:"(488 views)" ,
        price:790,
        colors: {
            
                  darkblue: [
                    "/kgirl22blue-1.png",
                    "/kgirl22blue-2.png",
                    "/kgirl22blue-3.png",
                 ],

                  grey: [
                    "/kgirl22grey-1.png",
                    "/kgirl22grey-2.png",
                    "/kgirl22grey-3.png",
                 ]
             
        },


        fabric: "cotton denim ",
        fit: "regular fit ",
        pattern: "solid ",
        waist: "elastic waist ",
        length: "full length",
        occasion: "casual wear "
      
      },

        {
        id:"kg23",
        text: "kids girls lehenga choli set",
        rating:4.5,
        reviews:"(482 views)" ,
        price:1299,
       colors: {
            
              pink: [
                    "/kgirl23pink-1.png",
                    "/kgirl23pink-2.png",
                    "/kgirl23pink-3.png",
                 ],

                skyblue: [
                    "/kgirl23blue-1.png",
                    "/kgirl23blue-2.png",
                    "/kgirl23blue-3.png",
                 ]
        },

       fabric: " net ",
       fit: "regular fit",
       pattern: "embroidery ",
       waist: "elastic waist ",
       length: "full length ",
       occasion: "festive wear "
              
      },
      {

       id:"kg24",
       text: "kids printed night suit",
        rating:4.3,
        reviews:"(460 views)" ,
        price:469,
        colors: {
            
               skyblue: [
                    "/kgirl24blue-1.png",
                    "/kgirl24blue-2.png",
                    "/kgirl24blue-3.png",
                 ],
              pink: [
                    "/kgirl24pink-1.png",
                    "/kgirl24pink-2.png",
                    "/kgirl24pink-3.png",
                 ]
              
             
        },


      fabric: "cotton blend",
      fit: "regular fit",
      pattern: "printed ",
      waist: "elastic waist",
      length: "full length",
      occasion: "night wear "
      
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
    <div className="kgirl2details-outer">
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

export default Kgirl2details
