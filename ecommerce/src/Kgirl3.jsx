import React from 'react'
import './Kgirl3.css';
import { NavLink } from 'react-router-dom';

const Kgirl3 = () => {

    const kgirl3=[
        {id:"kg31",img:"/kgirl31.png",text:"embroidered set" ,price:1599},
        {id:"kg32",img:"/kgirl32.png",text:"denim skirt" ,price:690},
        {id:"kg33",img:"/kgirl33.png",text:"crop top" ,price:359},
        {id:"kg34",img:"/kgirl34.png",text:"frock with belt" ,price:799}
    ]
  return (
    <>
     <div className="kgirl3-outer">
        <h1>kids dress  collections</h1>
       {kgirl3.map((item,index)=>
         <div className="box" key={index}>
            <img src={item.img} alt="" />
            <h2>{item.text}</h2>
            <h3>₹{item.price}</h3>
            <NavLink to={`/kids/kgirl3/${item.id}`}>
              <button>view more</button>
            </NavLink>
           
         </div>
          
       )}
      
     </div> 
    </>
  )
}

export default Kgirl3
