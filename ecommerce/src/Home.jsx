import React ,{useEffect, useState} from 'react'
import './Home.css';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {

   const [count,setcount]=useState(0)
   const banners=[
     {
      bg:'/bg1.png',
      img:'/banners1.png',
      text:"new fashion collection",
      btn:'Shop now', 
      path:"#category",
      position:"center"
   },

   {
      bg:'/bg2.png',
      img:'/banners2.png',
      text:"summer sale ",
      text2:"flat 50% offer",
      btn:'Shop now', 
      path:"/women",
      position:"right"
   },

   {
      bg:'/bg3.png',
      img:'/banners3.png',
      text:"kids special collection ",
      text2:"trendy styles for kids",
      btn:'Shop now', 
      path:"/kids",
      position:"left"
   },

   ]

   const categories=[
      
    {img:"/cmen.png",text:"men",path:"/men"},
    {img:"/cwomen.png",text:"women",path:"/women"},
    {img:"/ckids.png",text:"kids",path:"/kids"},
   ]

   useEffect(()=>{
      const interval=setInterval(()=>{
         setcount(prev => (prev+1) % banners.length)
      },3000)

      return ()=> clearInterval(interval)
   },[])
  return (
    <>
     <div className="home-outer">
        <div className={`banner ${banners[count].position}`} 
             style={{ backgroundImage: `url(${banners[count].bg})` }}>

            
            <div className="text-area">
                <h2>{banners[count].text}</h2>
                <h3>{banners[count].text2}</h3>
            {banners[count].path.startsWith("#") ? (
        <a href={banners[count].path}>
            <button>{banners[count].btn}</button>
        </a>
    ) : (
        <NavLink to={banners[count].path}>
            <button>{banners[count].btn}</button>
        </NavLink>
    )}
            </div>
           
            <img src={banners[count].img} alt="" />

            <div className="dots">
          {banners.map((_,index)=>
          <span key={index}
               className={count === index  ?  "dot active"  :   "dot"} >
               
          </span>
          )}
          
        </div>


        </div>

        <div className="category" id='category'>
            
            <h2>shop by categories</h2>

            {categories.map((item,index)=>
            <div className="inner" key={index}>
              <NavLink to={item.path}>
                <img src={item.img} alt="" />
                <h2>{item.text}</h2>
               </NavLink>
            </div>
            )}
            
           
        </div>
     </div>

     <Footer/>
    </>
      
  )
}

export default Home
