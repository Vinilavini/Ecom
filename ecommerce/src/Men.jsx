import React from 'react'
import './Men.css';
import { NavLink } from 'react-router-dom';

const Men = () => {

     const banners=[
    {img:'/menbanner.png',
     text:"discovers men's collection",
    }
   ]

   const categories=[
    {img:"/mshirt.png",text:"shirt",path:"/men/mshirt"},
    {img:"/mpant.png",text:"pant",path:"/men/mpant"},
    {img:"/mt-shirt.png",text:"t-shirt",path:"/men/mt-shirt"},
    {img:"/mkurtas.png",text:"kurtas",path:"/men/mkurtas"},
   ]
  return (
    <>
      <div className="men-outer">
        <div className="banner">
           <img src={banners[0].img} alt="" />
           <h2>{banners[0].text}</h2>
        </div>

        <div className="category">
          <h2>men's clothing</h2>
           
           {categories.map((item,index)=>
             <div className="inner" key={index}>
               <NavLink to={item.path}>
                <img src={item.img} alt="" />
                <h3>{item.text}</h3>
               </NavLink>
              </div>
           )}
        
        </div>
      </div>
    </>
  )
}

export default Men
