import React from 'react'
import './Kgirl1.css';
import BackButton from './BackButton';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

const Kgirl1 = () => {

    const kgirl1=[
        {id:"kg11",img:"/kgirl11.png",text:"cotton printed frock" ,price:399},
        {id:"kg12",img:"/kgirl12.png",text:"sweatshirt pant set" ,price:750},
        {id:"kg13",img:"/kgirl13.png",text:"v cut swim suit" ,price:249},
        {id:"kg14",img:"/kgirl14.png",text:"embroidered top" ,price:369}
    ]
  return (
    <>
    <BackButton/>
     <div className="kgirl1-outer">
        <h1>kids dress  collections</h1>
       {kgirl1.map((item,index)=>
         <div className="box" key={index}>
            <img src={item.img} alt="" />
            <h2>{item.text}</h2>
            <h3>₹{item.price}</h3>
            <NavLink to={`/kids/kgirl1/${item.id}`}>
              <button>view more</button>
            </NavLink>
           
         </div>
          
       )}
      
     </div> 
     <Footer/>
    </>
  )
}

export default Kgirl1
