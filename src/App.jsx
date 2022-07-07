import { useState } from 'react'
import logo from './logo.svg'
// import './App.css'
import Navbar from './components/Navbar/Navbar'
import Slider from './components/Carousel/Slider'
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer'



function App() {
  
  return (
    <div className="App">
        <Navbar/>
        <Slider/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default App
