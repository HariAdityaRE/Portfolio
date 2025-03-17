import React from 'react';
import './App.css';
import Header from './components/Header'
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import Buddies from './components/Buddies';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Projects/>
      <About/>
      <Buddies/>
      <Contact/>
      <ScrollToTop/>
      <Footer/>
    </>
  );
};

export default App