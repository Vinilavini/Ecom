import React from 'react'
import './Wtops.css';
import { NavLink } from 'react-router-dom';

const Wtops = () => {

    const wtops=[
        {id:"wt1",img:"/wtops1.png",text:"crop top" ,price:399},
        {id:"wt2",img:"/wtops2.png",text:"embroidery top" ,price:550},
        {id:"wt3",img:"/wtops3.png",text:"square neck top" ,price:350},
        {id:"wt4",img:"/wtops4.png",text:"peplum top" ,price:430}
    ]
  return (
    <>
     <div className="wtops-outer">
        <h1>women tops collections</h1>
       {wtops.map((item,index)=>
         <div className="box" key={index}>
            <img src={item.img} alt="" />
            <h2>{item.text}</h2>
            <h3>₹{item.price}</h3>
            <NavLink to={'/women/wtops/${item.id}'}>
              <button>view more</button>
            </NavLink>
           
         </div>
          
       )}
      
     </div> 
    </>
  )
}

export default Wtops
