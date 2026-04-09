import React ,{useState} from 'react'
import './Home.css';
import { NavLink } from 'react-router-dom';

const Home = () => {

   const [count,setcount]=useState(0)
   const banners=[
    {img:'/banners1.png',text:"new fashion collection",btn:'Shop now', path:"/category"}
   ]

   const categories=[
      
    {img:"/cmen.png",text:"men",path:"/men"},
    {img:"/cwomen.png",text:"women",path:"/women"},
    {img:"/ckids.png",text:"kids",path:"/kids"},
   ]
  return (
    <>
     <div className="home-outer">
        <div className="banner" >

            <img src={banners[count].img} alt="" />
            <h2>{banners[count].text}</h2>
            <NavLink to={banners[count].path}>
               <button>{banners[count].btn}</button>
            </NavLink>
         

        </div>

        <div className="category">
            
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
    </>
      
  )
}

export default Home
