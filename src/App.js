import './App.css';
import Navbar from './components/Navbar/Navbar';
import React, { useEffect } from 'react';
import Authentication from './components/Authentication';
import Searchpage from './components/Searchpage';
import Home  from './components/Home';
import Slider from './components/Silder';
import Detailedproduct from './components/Detailedproduct';
import ProductCard from './components/ProductCard';



function App() {

  return (
    <>
    <span> <ProductCard></ProductCard></span>
   
  
    {/* <Navbar/>
    <Home></Home>
    <Searchpage></Searchpage>
    <Slider></Slider>
    <Detailedproduct></Detailedproduct>
    <Authentication></Authentication> */}
    </>
  
     
  );
}

export default App;
