import React, { useState ,useEffect} from 'react'
import './Wtopsdetails.css'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Wtopsdetails = ({add}) => {

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
        id:"wt1",
        text: "women net sleeveless crop top",
        rating:3.9,
        reviews:"(323 views)" ,
        price:399,

        colors: {
            
                 pink: [
                    "/wtops1pink-1.png",
                    "/wtops1pink-2.png",
                    "/wtops1pink-3.png",
                 ],
                 lightyellow: [
                   "/wtops1yellow-1.png",
                    "/wtops1yellow-2.png",
                    "/wtops1yellow-3.png",
                 ],
                 violet: [
                    "/wtops1violet-1.png",
                    "/wtops1violet-2.png",
                    "/wtops1violet-3.png",
                 ]
             
        },

        fabric: "soft net / mesh",
        fit: "regular fit",
        pattern: "embroidered / solid",
        neck: "round neck",
        sleeve: "sleeveless",
        length: "crop length",
        occasion: "party wear / casual wear"
      
      },
      {
        id:"wt2",
        text: "women embroidered frill sleeve top",
        rating:4.7,
        reviews:"(488 views)" ,
        price:550,
        colors: {
            
                 black: [
                    "/wtops2black-1.png",
                   "/wtops2black-2.png",
                    "/wtops2black-3.png"
                 ],
                 yellow: [
                   "/wtops2yellow-1.png",
                   "/wtops2yellow-2.png",
                    "/wtops2yellow-3.png"
                 ],
                 grey: [
                   "/wtops2grey-1.png",
                   "/wtops2grey-2.png",
                    "/wtops2grey-3.png"
                 ]
             
        },


        fabric: "net with embroidery work",
        fit: "regular fit",
        pattern: "embroidered",
        neck: "round neck",
        sleeve: "short frill sleeve",
        length: "regular length",
        occasion: "party wear / festive wear"
      
      },

        {
        id:"wt3",
        text: "women square neck casual top",
        rating:4.5,
        reviews:"(482 views)" ,
        price:350,
       colors: {
            
              red: [
                    "/wtops3red-1.png",
                   "/wtops3red-2.png",
                    "/wtops3red-3.png"
                 ],
              violet: [
                   "/wtops3violet-1.png",
                   "/wtops3violet-2.png",
                    "/wtops3violet-3.png"
                 ],
              brown: [
                   "/wtops3brown-1.png",
                   "/wtops3brown-2.png",
                    "/wtops3brown-3.png"
                 ]
             
        },

        fabric: "lightweight fabric",
        fit: "regular fit",
        pattern: "solid",
        neck: "square neck",
        sleeve: "half sleeve",
        length: "hip length",
        occasion: "daily wear / outing"
              
      },
      {

       id:"wt4",
        text: "women cotton peplum top",
        rating:4.3,
        reviews:"(460 views)" ,
        price:430,
        colors: {
            
              green: [
                    "/wtops4green-1.png",
                   "/wtops4green-2.png",
                    "/wtops4green-3.png"
                 ],
              violet: [
                   "/wtops4violet-1.png",
                   "/wtops4violet-2.png",
                    "/wtops4violet-3.png"
                 ],
              lightyellow: [
                   "/wtops4yellow-1.png",
                   "/wtops4yellow-2.png",
                    "/wtops4yellow-3.png"
                 ]
             
        },


        fabric: "soft breathable cotton",
        fit: "regular fit",
        pattern: "printed",
        neck: "round neck",
        sleeve: "half sleeve",
        length: "waist length with flare",
        occasion: "daily wear / outing"
      
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
    <div className="wtopsdetails-outer">
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

export default Wtopsdetails
