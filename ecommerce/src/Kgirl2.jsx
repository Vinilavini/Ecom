import React from 'react'
import './Kgirl2.css';
import BackButton from './BackButton';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

const Kgirl2 = () => {

    const kgirl2=[
        {id:"kg21",img:"/kgirl21.png",text:"sleeveless jumpsuit" ,price:499},
        {id:"kg22",img:"/kgirl22.png",text:"cotton denim jeans" ,price:790},
        {id:"kg23",img:"/kgirl23.png",text:"lehanga choli set" ,price:1299},
        {id:"kg24",img:"/kgirl24.png",text:"printed night suit" ,price:469}
    ]
  return (
    <>
    <BackButton/>
     <div className="kgirl2-outer">
        <h1>kids dress  collections</h1>
       {kgirl2.map((item,index)=>
         <div className="box" key={index}>
            <img src={item.img} alt="" />
            <h2>{item.text}</h2>
            <h3>₹{item.price}</h3>
            <NavLink to={`/kids/kgirl2/${item.id}`}>
              <button>view more</button>
            </NavLink>
           
         </div>
          
       )}
      
     </div> 
     <Footer/>
    </>
  )
}

export default Kgirl2
