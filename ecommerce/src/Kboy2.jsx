import React from 'react'
import './Kboy2.css';
import { NavLink } from 'react-router-dom';

const Kboy2 = () => {

    const kboy2=[
        {id:"kb21",img:"/kboy21.png",text:"full length jean" ,price:499},
        {id:"kb22",img:"/kboy22.png",text:"cotton t-shirt & shorts" ,price:550},
        {id:"kb23",img:"/kboy23.png",text:"full sleeve kurta" ,price:789},
        {id:"kb24",img:"/kboy24.png",text:"printed shirt & shorts" ,price:649}
    ]
  return (
    <>
     <div className="kboy2-outer">
        <h1>kids dress  collections</h1>
       {kboy2.map((item,index)=>
         <div className="box" key={index}>
            <img src={item.img} alt="" />
            <h2>{item.text}</h2>
            <h3>₹{item.price}</h3>
            <NavLink to={`/kids/kboy2/${item.id}`}>
              <button>view more</button>
            </NavLink>
           
         </div>
          
       )}
      
     </div> 
    </>
  )
}

export default Kboy2
