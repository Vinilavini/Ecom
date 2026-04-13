import React,{useState} from 'react'
import "./App.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar'
import Home from './Home'
import Men from './Men';
import Mshirt from './Mshirt';
import Mpant from './Mpant';
import Mtshirt from './Mtshirt';
import Mkurtas from './Mkurtas';
import Women from './Women';
import Wsaree from './Wsaree';
import Wtops from './Wtops';
import Wfrock from './Wfrock';
import Wlehanga from './Wlehanga';
import Kids from './Kids';
import Kboy1 from './Kboy1';
import Kboy2 from './Kboy2';
import Kboy3 from './Kboy3';
import Kgirl1 from './Kgirl1';
import Kgirl2 from './Kgirl2';
import Kgirl3 from './Kgirl3';
import Mshirtdetails from './Mshirtdetails';
import Mpantdetails from './Mpantdetails';
import Mtshirtdetails from './Mtshirtdetails';
import Cart from './Cart';
import Checkout from './Checkout';
import Success from './Success';




const App = () => {

   const [cart,setcart]=useState([])

  const handleadd = (product) => {
  const existingitem = cart.find((item) =>
    item.id === product.id &&
    item.size === product.size &&
    item.selectedColor === product.selectedColor
  )

  if (existingitem) {
    setcart(cart.map((item) =>
      item.id === product.id &&
      item.size === product.size &&
      item.selectedColor === product.selectedColor
        ? { ...item, qty: item.qty + 1 }
        : item
    ))
  } else {
    setcart([...cart, { ...product }])
  }
}

   const handleincrease=(id)=>{
    const updatedincrease=cart.map((item)=>
      item.id === id ?  {...item,qty:item.qty+1}   :   item
    )
    setcart(updatedincrease)
  }

  const handledecrease=(id)=>{
    const updateddecrease=cart.map((item)=>
      item.id === id   ?  {...item,qty:item.qty-1}   :   item
    ).filter(item=> item.qty > 0)
    setcart(updateddecrease)
  }

  const handleremove=(id)=>{
    setcart(cart.filter((item)=>
       item.id !== id
    ))
  }
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/men/mshirt' element={<Mshirt/>}></Route>
        <Route path='/men/mpant' element={<Mpant/>}></Route>
        <Route path='/men/mt-shirt' element={<Mtshirt/>}></Route>
        <Route path='/men/mkurtas' element={<Mkurtas/>}></Route>
        <Route path='/women' element={<Women/>}/>
        <Route path='/women/wsaree' element={<Wsaree/>}/>
        <Route path='/women/wtops' element={<Wtops/>}/>
        <Route path='/women/wfrock' element={<Wfrock/>}/>
        <Route path='/women/wlehanga' element={<Wlehanga/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/kids/kboy1' element={<Kboy1/>}/>
        <Route path='/kids/kboy2' element={<Kboy2/>}/>
        <Route path='/kids/kboy3' element={<Kboy3/>}/>
        <Route path='/kids/kgirl1' element={<Kgirl1/>}/>
        <Route path='/kids/kgirl2' element={<Kgirl2/>}/>
        <Route path='/kids/kgirl3' element={<Kgirl3/>}/>
        <Route path='/men/mshirt/:id' element={<Mshirtdetails  add={handleadd}/>}/>
        <Route path='/men/mpant/:id' element={<Mpantdetails  add={handleadd}/>}/>
        <Route path='/men/mt-shirt/:id' element={<Mtshirtdetails  add={handleadd}/>}/>
        <Route path='/cart' element={<Cart cart={cart} increment={handleincrease}  decrement={handledecrease}   remove={handleremove}/>}/>
        <Route path='/checkout' element={<Checkout cart={cart}  setcart={setcart}/>}/>
        <Route path='/success' element={<Success/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;