import React from 'react'
import './Wlehanga.css';
import { NavLink } from 'react-router-dom';

const Wlehanga = () => {

    const wlehanga=[
        {id:"wl1",img:"/wlehanga1.png",text:"embroidered lehanga" ,price:2500},
        {id:"wl2",img:"/wlehanga2.png",text:"party lehanga" ,price:3400},
        {id:"wl3",img:"/wlehanga3.png",text:"festive lehanga" ,price:2850},
        {id:"wl4",img:"/wlehanga4.png",text:"half saree" ,price:2599}
    ]
  return (
    <>
     <div className="wlehanga-outer">
        <h1>women lehanga collections</h1>
       {wlehanga.map((item,index)=>
         <div className="box" key={index}>
            <img src={item.img} alt="" />
            <h2>{item.text}</h2>
            <h3>₹{item.price}</h3>
            <NavLink to={'/women/wlehanga/${item.id}'}>
              <button>view more</button>
            </NavLink>
           
         </div>
          
       )}
      
     </div> 
    </>
  )
}

export default Wlehanga
