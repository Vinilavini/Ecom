import React, { useState ,useEffect} from 'react'
import './Kgirl1details.css'
import BackButton from './BackButton'
import Footer from './Footer'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Kgirl1details = ({add}) => {

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
        id:"kg11",
        text: "kids girls cotton printed frock",
        rating:4.8,
        reviews:"(483 views)" ,
        price:399,

        colors: {
            
                  lightgreen: [
                    "/kgirl11green-1.png",
                    "/kgirl11green-2.png",
                    "/kgirl11green-3.png",
                 ],

                  violet: [
                    "/kgirl11violet-1.png",
                    "/kgirl11violet-2.png",
                    "/kgirl11violet-3.png",
                 ]
        },

        fabric: "cotton",
        fit: " A-line",
        pattern: "printed ",
        waist: "elastic waist",
        length: "knee length",
        occasion: "daily wear / summer wear / play wear"
      
      },
      {
        id:"kg12",
        text: "kids girls sweatshirt & pant set",
        rating:4.2,
        reviews:"(438 views)" ,
        price:750,
        colors: {
            
                  lightgreen: [
                    "/kgirl12green-1.png",
                    "/kgirl12green-2.png",
                    "/kgirl12green-3.png",
                 ],

                  grey: [
                    "/kgirl12grey-1.png",
                    "/kgirl12grey-2.png",
                    "/kgirl12grey-3.png",
                 ]
             
        },


        fabric: " cotton blend",
        fit: "regular fit",
        pattern: "solid ",
        waist: "elastic waist",
        length: "full length",
        occasion: "winter wear / daily wear"
      
      },

        {
        id:"kg13",
        text: "kids girls V-cut swimsuit",
        rating:4.5,
        reviews:"(482 views)" ,
        price:249,
       colors: {
            
              pink: [
                    "/kgirl13pink-1.png",
                    "/kgirl13pink-2.png",
                    "/kgirl13pink-3.png",
                 ],

                lightblue: [
                    "/kgirl13blue-1.png",
                    "/kgirl13blue-2.png",
                    "/kgirl13blue-3.png",
                 ]
        },

       fabric: "nylon",
       fit: "body fit ",
       pattern: " printed ",
       waist: "elastic waist",
       length: " hip coverage",
       occasion: "swimming wear / beach wear"
              
      },
      {

       id:"kg14",
       text: "kids girls embroidered top",
        rating:4.3,
        reviews:"(460 views)" ,
        price:369,
        colors: {
            
               white: [
                    "/kgirl14white-1.png",
                    "/kgirl14white-2.png",
                    "/kgirl14white-3.png",
                 ],
              lightgreen: [
                    "/kgirl14green-1.png",
                    "/kgirl14green-2.png",
                    "/kgirl14green-3.png",
                 ]
              
             
        },


      fabric: "cotton ",
      fit: "regular fit",
      pattern: "floral embroidery ",
      waist: " straight fit",
      length: " hip length",
      occasion: " casual wear "
      
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
    <div className="kgirl1details-outer">
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

export default Kgirl1details
