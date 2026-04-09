import React from 'react'
import './Mkurtas.css';
import { NavLink } from 'react-router-dom';

const Mkurtas = () => {

    const mkurtas=[
        {id:"mk1",img:"/mkurtas1.png",text:"cotton kurta" ,price:599},
        {id:"mk2",img:"/mkurtas2.png",text:"printed kurta" ,price:779},
        {id:"mk3",img:"/mkurtas3.png",text:"short kurta" ,price:430},
        {id:"mk4",img:"/mkurtas4.png",text:"festive kurta" ,price:899}
    ]
  return (
    <>
     <div className="mkurtas-outer">
        <h1>men kurtas collections</h1>
       {mkurtas.map((item,index)=>
         <div className="box" key={index}>
            <img src={item.img} alt="" />
            <h2>{item.text}</h2>
            <h3>₹{item.price}</h3>
            <NavLink to={'/men/mkurtas/${item.id}'}>
              <button>view more</button>
            </NavLink>
           
         </div>
          
       )}
      
     </div> 
    </>
  )
}

export default Mkurtas
