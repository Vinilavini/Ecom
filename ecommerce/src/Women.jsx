import React from 'react'
import './Women.css';
import { NavLink } from 'react-router-dom';

const Women = () => {

     const banners=[
    {img:'/womenbanner.png',
     text:"explore women's collection",
    }
   ]

   const categories=[
    {img:"/wsaree.png",text:"saree",path:"/women/wsaree"},
    {img:"/wtops.png",text:"tops",path:"/women/wtops"},
    {img:"/wfrock.png",text:"frock",path:"/women/wfrock"},
    {img:"/wlehanga.png",text:"lehanga",path:"/women/wlehanga"},
   ]
  return (
    <>
      <div className="women-outer">
        <div className="banner">
           <img src={banners[0].img} alt="" />
           <h2>{banners[0].text}</h2>
        </div>

        <div className="category">
          <h2>women's clothing</h2>
           
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

export default Women
