import React, { useState ,useEffect} from 'react'
import './Mpantdetails.css'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Mpantdetails = ({add}) => {

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

      const sizes=["28","30","32" ,"34"]

      const products=[
       {
        id:"mp1",
        text:"men slim fit cotton pant",
        rating:4.5,
        reviews:"(323 views)" ,
        price:999,

        colors: {
            
                 brown: [
                    "/mpant1brown-1.png",
                    "/mpant1brown-2.png",
                    "/mpant1brown-3.png"
                 ],
                 darkblue: [
                   "/mpant1blue-1.png",
                   "/mpant1blue-2.png",
                   "/mpant1blue-3.png"
                 ],
                 green: [
                   "/mpant1green-1.png",
                   "/mpant1green-2.png",
                   "/mpant1green-3.png"
                 ]
             
        },

        fabric:"100% cotton",
        fit:"slim fit",
        waist:"mid rise",
        length:"full length",
        pattern:"solid",
        closure:"button & zip",
        occasion:"casual wear"
      
      },
      {
        id:"mp2",
        text:"men slim fit denim jeans",
        rating:5,
        reviews:"(588 views)" ,
        price:1399,
        colors: {
            
                 darkblue: [
                    "/mpant2blue-1.png",
                    "/mpant2blue-2.png",
                    "/mpant2blue-3.png"
                 ],
                 grey: [
                   "/mpant2grey-1.png",
                    "/mpant2grey-2.png",
                    "/mpant2grey-3.png"
                 ],
                 black: [
                   "/mpant2black-1.png",
                    "/mpant2black-2.png",
                    "/mpant2black-3.png"
                 ]
             
        },


        fabric:"denim",
        fit:"slim fit",
        waist:"mid rise",
        length:"full length",
        pattern:"solid",
        closure:"button & zip",
        occasion:"casual wear"
      
      },

        {
        id:"mp3",
        text:"men solid track pant",
        rating:3.9,
        reviews:"(282 views)" ,
        price:690,
       colors: {
            
                darkred: [
                    "/mpant3red-1.png",
                    "/mpant3red-2.png",
                    "/mpant3red-3.png"
                 ],
                 black: [
                   "/mpant3black-1.png",
                    "/mpant3black-2.png",
                    "/mpant3black-3.png"
                 ],
                 blue: [
                   "/mpant3blue-1.png",
                   "/mpant3blue-2.png",
                   "/mpant3blue-3.png"
                 ]
             
        },

        fabric:"polyester blend",
        fit:"regular fit",
        waist:"elastic waistband",
        length:"full length",
        pattern:"solid",
        closure:"drawstring",
        occasion:"sports & daily wear"
      
      },
      {

       id:"mp4",
        text:"men cotton casual trousers",
        rating:4.7,
        reviews:"(390 views)" ,
        price:899,
        colors: {
            
                darkgreen: [
                    "/mpant4green-1.png",
                    "/mpant4green-2.png",
                    "/mpant4green-3.png"
                 ],
                 lightyellow: [
                   "/mpant4yellow-1.png",
                    "/mpant4yellow-2.png",
                    "/mpant4yellow-3.png"
                 ],
                 black: [
                   "/mpant4black-1.png",
                    "/mpant4black-2.png",
                    "/mpant4black-3.png"
                 ]
             
        },


        fabric:"cotton blend",
        fit:"regular fit",
        waist:"mid rise",
        length:"full length",
        pattern:"solid",
        closure:"button & zip",
        occasion:"casual & office wear"
      
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
    <div className="mpantdetails-outer">
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
              <p><span>waist  : </span>{product.waist}</p>
              <p><span>length  : </span>{product.length}</p>
              <p><span>pattern  : </span>{product.pattern}</p>
              <p><span>closure  : </span>{product.closure}</p>
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

export default Mpantdetails
