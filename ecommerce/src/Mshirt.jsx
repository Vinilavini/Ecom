import React from 'react'
import './Mshirt.css';
import { NavLink } from 'react-router-dom';

const Mshirt = () => {

    const mshirts=[
        {id:"ms1",img:"/mshirt1.png",text:"cotton shirt" ,price:545},
        {id:"ms2",img:"/mshirt2.png",text:"formal shirt" ,price:799},
        {id:"ms3",img:"/mshirt3.png",text:"checked shirt" ,price:480},
        {id:"ms4",img:"/mshirt4.png",text:"casual shirt" ,price:650}
    ]
  return (
    <>
     <div className="mshirt-outer">
        <h1>men shirt collections</h1>
       {mshirts.map((item,index)=>
         <div className="box" key={index}>
            <img src={item.img} alt="" />
            <h2>{item.text}</h2>
            <h3>₹{item.price}</h3>
            <NavLink to={`/men/mshirt/${item.id}`}>
              <button>view more</button>
            </NavLink>
           
         </div>
          
       )}
      
     </div> 
    </>
  )
}

export default Mshirt
