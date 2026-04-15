import React from 'react'
import './Mtshirt.css';
import BackButton from './BackButton';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

const Mtshirt = () => {

    const mtshirts=[
        {id:"mt1",img:"/mtshirt1.png",text:"cotton t-shirt" ,price:499},
        {id:"mt2",img:"/mtshirt2.png",text:"polo neck t-shirt" ,price:379},
        {id:"mt3",img:"/mtshirt3.png",text:" printed t-shirt" ,price:430},
        {id:"mt4",img:"/mtshirt4.png",text:"full sleeve  t-shirt" ,price:549}
    ]
  return (
    <>
    <BackButton/>
     <div className="mtshirt-outer">
        <h1>men t-shirt collections</h1>
       {mtshirts.map((item,index)=>
         <div className="box" key={index}>
            <img src={item.img} alt="" />
            <h2>{item.text}</h2>
            <h3>₹{item.price}</h3>
            <NavLink to={`/men/mtshirt/${item.id}`}>
              <button>view more</button>
            </NavLink>
           
         </div>
          
       )}
      
     </div> 
     <Footer/>
    </>
  )
}

export default Mtshirt
