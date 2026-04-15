import React from 'react'
import './Kids.css';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

const Kids = () => {

     const banners=[
    {img:'/kidsbanner.png',
     text1:"latest collection",
     text2:"kid's wear"
    }
   ]

   const boys=[
    {img:"/kboy1.png",text:"0-4 years",path:"/kids/kboy1"},
    {img:"/kboy2.png",text:"4-8 years",path:"/kids/kboy2"},
    {img:"/kboy3.png",text:"9-14 years",path:"/kids/kboy3"},
   
   ]

   
   const girls=[
    {img:"/kgirl1.png",text:"0-4 years",path:"/kids/kgirl1"},
    {img:"/kgirl2.png",text:"4-8 years",path:"/kids/kgirl2"},
    {img:"/kgirl3.png",text:"9-14 years",path:"/kids/kgirl3"},
   
   ]
  return (
    <>
      <div className="kids-outer">
        <div className="banner">
           <img src={banners[0].img} alt="" />
           <h2>{banners[0].text1}</h2>
           <h3>{banners[0].text2}</h3>
        </div>

        <div className="category">
          <h2>kid's clothing</h2>
           
           {boys.map((item,index)=>
             <div className="inner1" key={index}>
               <NavLink to={item.path}>
                <img src={item.img} alt="" />
                <h3>{item.text}</h3>
               </NavLink>
              </div>
           )}
        
        </div>

        <div className="category2">

            {girls.map((item,index)=>
             <div className="inner2" key={index}>
               <NavLink to={item.path}>
                <img src={item.img} alt="" />
                <h3>{item.text}</h3>
               </NavLink>
              </div>
           )}
        
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Kids
