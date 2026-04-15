import React from 'react'
import './Wfrock.css';
import BackButton from './BackButton';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

const Wfrock = () => {

    const wfrock=[
        {id:"wf1",img:"/wfrock1.png",text:"embroidered frock" ,price:2500},
        {id:"wf2",img:"/wfrock2.png",text:"net frock" ,price:2900},
        {id:"wf3",img:"/wfrock3.png",text:"velvet frock" ,price:2350},
        {id:"wf4",img:"/wfrock4.png",text:"short frock" ,price:1999}
    ]
  return (
    <>
    <BackButton/>
     <div className="wfrock-outer">
        <h1>women frock collections</h1>
       {wfrock.map((item,index)=>
         <div className="box" key={index}>
            <img src={item.img} alt="" />
            <h2>{item.text}</h2>
            <h3>₹{item.price}</h3>
            <NavLink to={`/women/wfrock/${item.id}`}>
              <button>view more</button>
            </NavLink>
           
         </div>
          
       )}
      
     </div> 
     <Footer/>
    </>
  )
}

export default Wfrock
