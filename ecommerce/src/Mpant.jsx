import React from 'react'
import './Mpant.css';
import { NavLink } from 'react-router-dom';

const Mpant = () => {

    const mpants=[
        {id:"mp1",img:"/mpant1.png",text:"cotton pant" ,price:999},
        {id:"mp2",img:"/mpant2.png",text:"jeans" ,price:1399},
        {id:"mp3",img:"/mpant3.png",text:"track pant" ,price:690},
        {id:"mp4",img:"/mpant4.png",text:"trousers" ,price:899}
    ]
  return (
    <>
     <div className="mpant-outer">
        <h1>men pant collections</h1>
       {mpants.map((item,index)=>
         <div className="box" key={index}>
            <img src={item.img} alt="" />
            <h2>{item.text}</h2>
            <h3>₹{item.price}</h3>
            <NavLink to={'/men/mpant/${item.id}'}>
              <button>view more</button>
            </NavLink>
           
         </div>
          
       )}
      
     </div> 
    </>
  )
}

export default Mpant
