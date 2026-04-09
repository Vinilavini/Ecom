import React from 'react'
import './Kboy3.css';
import { NavLink } from 'react-router-dom';

const Kboy3 = () => {

    const kboy3=[
        {id:"kb31",img:"/kboy31.png",text:"kurta set" ,price:1549},
        {id:"kb32",img:"/kboy32.png",text:"checked t-shirt with inner tee" ,price:650},
        {id:"kb33",img:"/kboy33.png",text:"full length trousers" ,price:589},
        {id:"kb34",img:"/kboy34.png",text:"printed shirt" ,price:649}
    ]
  return (
    <>
     <div className="kboy3-outer">
        <h1>kids dress  collections</h1>
       {kboy3.map((item,index)=>
         <div className="box" key={index}>
            <img src={item.img} alt="" />
            <h2>{item.text}</h2>
            <h3>₹{item.price}</h3>
            <NavLink to={`/kids/kboy3/${item.id}`}>
              <button>view more</button>
            </NavLink>
           
         </div>
          
       )}
      
     </div> 
    </>
  )
}

export default Kboy3
