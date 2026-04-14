import React, { useState ,useEffect} from 'react'
import './Wfrockdetails.css'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Wfrockdetails = ({add}) => {

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
        id:"wf1",
       text: "women long embroidered frock",
        rating:4.9,
        reviews:"(523 views)" ,
        price:2500,

        colors: {
            
                 skyblue: [
                    "/wfrock1blue-1.png",
                    "/wfrock1blue-2.png",
                    "/wfrock1blue-3.png"
                 ],
                 pink: [
                   "/wfrock1pink-1.png",
                    "/wfrock1pink-2.png",
                    "/wfrock1pink-3.png"
                 ],
                 violet: [
                    "/wfrock1violet-1.png",
                    "/wfrock1violet-2.png",
                    "/wfrock1violet-3.png"
                 ]
             
        },

        fabric: " net",
        fit: "fit & flare ",
        pattern: " floral embroidery / sequins work",
        neck: "round neck ",
        sleeve: " full sleeve",
        length: "full length ",
        occasion: "party wear / festive wear / wedding wear"
      
      },
      {
        id:"wf2",
        text: "women long net frock",
        rating:4.6,
        reviews:"(488 views)" ,
        price:2900,
        colors: {
            
                 red: [
                    "/wfrock2red-1.png",
                    "/wfrock2red-2.png",
                    "/wfrock2red-3.png"
                 ],
                 violet: [
                   "/wfrock2violet-1.png",
                   "/wfrock2violet-2.png",
                    "/wfrock2violet-3.png"
                 ],
                 pink: [
                   "/wfrock2pink-1.png",
                   "/wfrock2pink-2.png",
                    "/wfrock2pink-3.png"
                 ]
             
        },


        fabric: "soft net with inner lining",
        fit: " A-line",
        pattern: "solid ",
        neck: " boat neck",
        sleeve: " full sleeve",
        length: "full length ",
        occasion: "party wear / festive wear"
      
      },

        {
        id:"wf3",
        text: "women velvet embroidered frock",
        rating:4.5,
        reviews:"(482 views)" ,
        price:2350,
       colors: {
            
              darkblue: [
                   "/wfrock3blue-1.png",
                   "/wfrock3blue-2.png",
                    "/wfrock3blue-3.png"
                 ],
              darkgreen: [
                   "/wfrock3green-1.png",
                   "/wfrock3green-2.png",
                    "/wfrock3green-3.png"
                 ],
              brown: [
                   "/wfrock3brown-1.png",
                   "/wfrock3brown-2.png",
                    "/wfrock3brown-3.png"
                 ]
             
        },

        fabric: "soft velvet with inner lining",
        fit: " slim fit ",
        pattern: " floral embroidery ",
        neck: " closed neck",
        sleeve: "full sleeve ",
        length: "full length ",
        occasion: "party wear / wedding wear / festive wear"
              
      },
      {

       id:"wf4",
        text: "women short net frock",
        rating:5,
        reviews:"(760 views)" ,
        price:1999,
        colors: {
            
               lightblue: [
                   "/wfrock4blue-1.png",
                   "/wfrock4blue-2.png",
                    "/wfrock4blue-3.png"
                 ],
              yellow: [
                   "/wfrock4yellow-1.png",
                   "/wfrock4yellow-2.png",
                    "/wfrock4yellow-3.png"
                 ],
              pink: [
                   "/wfrock4pink-1.png",
                   "/wfrock4pink-2.png",
                    "/wfrock4pink-3.png"
                 ]
             
        },


       fabric: "soft net with inner lining",
       fit: "fit & flare ",
       pattern: " floral embroidery",
       neck: " V-neck",
       sleeve: " short sleeve",
       length: "ankle length",
       occasion: "party wear / birthday wear"
      
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
    <div className="wfrockdetails-outer">
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
              <p><span>neck  : </span>{product.neck}</p>
              <p><span>length  : </span>{product.length}</p>
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

export default Wfrockdetails
