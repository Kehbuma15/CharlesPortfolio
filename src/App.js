import React from 'react';
import './index.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About' ;
import Footer from './components/footer/Footer';
import Experience from './components/Experience/Experience';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Testimonial from './components/Testimonial/Testimonial';
//import Testimonial from './components/Testimonial/Testimonial';


function App() {
  return (
    <>
      
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      
      
      <Footer/>
    </>
  );
}

export default App
