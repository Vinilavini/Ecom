import React, { useState ,useEffect} from 'react'
import './Wsareedetails.css'
import BackButton from './BackButton'
import Footer from './Footer'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Wsareedetails = ({add}) => {

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

      const sizes=["Free Size"]

      const products=[
       {
        id:"ws1",
       text: "women elegant organza saree",
        rating:4.2,
        reviews:"(423 views)" ,
        price:1200,

        colors: {
            
                 blue: [
                    "/wsaree1blue-1.png",
                    "/wsaree1blue-2.png",
                    "/wsaree1blue-3.png"
                 ],
                 red: [
                   "/wsaree1red-1.png",
                    "/wsaree1red-2.png",
                    "/wsaree1red-3.png"
                 ],
                 green: [
                   "/wsaree1green-1.png",
                    "/wsaree1green-2.png",
                    "/wsaree1green-3.png"
                 ]
             
        },

        fabric: "premium lightweight organza",
        fit: "free size",
        pattern: "woven / solid",
        blousePiece: "included",
        length: "5.5 meter saree + 0.8 meter blouse",
        occasion: "party wear / wedding wear / festive wear"
      
      },
      {
        id:"ws2",
        text: "women elegant silk saree",
        rating:4.7,
        reviews:"(488 views)" ,
        price:1599,
        colors: {
            
                 pink: [
                    "/wsaree2pink-1.png",
                    "/wsaree2pink-2.png",
                    "/wsaree2pink-3.png"
                 ],
                 lightgreen: [
                   "/wsaree2green-1.png",
                    "/wsaree2green-2.png",
                    "/wsaree2green-3.png"
                 ],
                 yellow: [
                   "/wsaree2yellow-1.png",
                    "/wsaree2yellow-2.png",
                    "/wsaree2yellow-3.png"
                 ]
             
        },


        fabric: "premium soft silk",
        fit: "free size",
        pattern: "zari woven",
        blousePiece: "included",
        length: "5.5 meter saree + 0.8 meter blouse",
        occasion: "wedding wear / festive wear / party wear"
      
      },

        {
        id:"ws3",
        text: "women designer embroidered saree",
        rating:5,
        reviews:"(682 views)" ,
        price:2500,
       colors: {
            
               brown: [
                    "/wsaree3brown-1.png",
                    "/wsaree3brown-2.png",
                    "/wsaree3brown-3.png"
                 ],
                 blue: [
                   "/wsaree3blue-1.png",
                    "/wsaree3blue-2.png",
                    "/wsaree3blue-3.png"
                 ],
                 pink: [
                   "/wsaree3pink-1.png",
                    "/wsaree3pink-2.png",
                    "/wsaree3pink-3.png"
                 ]
             
        },

        fabric: "premium net with embroidery work",
        fit: "free size",
        pattern: "heavy embroidery",
        blousePiece: "included",
        length: "5.5 meter saree + 0.8 meter blouse",
        occasion: "wedding wear / reception wear / festive wear"
              
      },
      {

       id:"ws4",
        text: "women elegant printed saree",
        rating:3.9,
        reviews:"(360 views)" ,
        price:1690,
        colors: {
            
                 blue: [
                    "/wsaree4blue-1.png",
                    "/wsaree4blue-2.png",
                    "/wsaree4blue-3.png"
                 ],
                 maroon: [
                   "/wsaree4red-1.png",
                    "/wsaree4red-2.png",
                    "/wsaree4red-3.png"
                 ],
                 black: [
                   "/wsaree4black-1.png",
                    "/wsaree4black-2.png",
                    "/wsaree4black-3.png"
                 ]
             
        },


        fabric: "premium georgette / chiffon",
        fit: "free size",
        pattern: "printed",
        blousePiece: "included",
        length: "5.5 meter saree + 0.8 meter blouse",
        occasion: "casual wear / daily wear / festive wear"
      
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
    <div className="wsareedetails-outer">
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
              <p><span>blousePiece  : </span>{product.blousePiece}</p>
              <p><span>length  : </span>{product.length}</p>
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
    <Footer/>
    </>
  )
}

export default Wsareedetails
