import React from 'react';
import './index.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About' 
import Footer from './components/footer/Footer'
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <>
      
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Contact/>
      
      <Footer/>
    </>
  );
}

export default App;
