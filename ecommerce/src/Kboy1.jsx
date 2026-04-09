import React from 'react'
import './Kboy1.css';
import { NavLink } from 'react-router-dom';

const Kboy1 = () => {

    const kboy1=[
        {id:"kb11",img:"/kboy11.png",text:"casual t-shirt & shorts" ,price:699},
        {id:"kb12",img:"/kboy12.png",text:"festive t-shirt & shorts" ,price:1250},
        {id:"kb13",img:"/kboy13.png",text:"ethnic wear" ,price:1599},
        {id:"kb14",img:"/kboy14.png",text:"printed shirt & shorts" ,price:549}
    ]
  return (
    <>
     <div className="kboy1-outer">
        <h1>kids dress  collections</h1>
       {kboy1.map((item,index)=>
         <div className="box" key={index}>
            <img src={item.img} alt="" />
            <h2>{item.text}</h2>
            <h3>₹{item.price}</h3>
            <NavLink to={`/kids/kboy1/${item.id}`}>
              <button>view more</button>
            </NavLink>
           
         </div>
          
       )}
      
     </div> 
    </>
  )
}

export default Kboy1
