import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Projects from './Projects';
import Servico from './Servico';
import Sobre from './Sobre';
import Contact from './Contact';


function App() {
  return (
    <>
    <Header/>
    <Sobre/>
    <Servico/>
    <Projects/>
    <Contact/>
    <Footer/> 
    </>
  );
}

export default App;
