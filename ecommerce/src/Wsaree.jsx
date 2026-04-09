import React from 'react'
import './Wsaree.css';
import { NavLink } from 'react-router-dom';

const Wsaree = () => {

    const wsarees=[
        {id:"ws1",img:"/wsaree1.png",text:"organza saree" ,price:1200},
        {id:"ws2",img:"/wsaree2.png",text:"silk saree" ,price:1599},
        {id:"ws3",img:"/wsaree3.png",text:"embroidery saree" ,price:2500},
        {id:"ws4",img:"/wsaree4.png",text:"printed saree" ,price:1690}
    ]
  return (
    <>
     <div className="wsaree-outer">
        <h1>women saree collections</h1>
       {wsarees.map((item,index)=>
         <div className="box" key={index}>
            <img src={item.img} alt="" />
            <h2>{item.text}</h2>
            <h3>₹{item.price}</h3>
            <NavLink to={'/women/wsaree/${item.id}'}>
              <button>view more</button>
            </NavLink>
           
         </div>
          
       )}
      
     </div> 
    </>
  )
}

export default Wsaree
