import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {


  return (
    <div>
      <Header />
      <main>
        <About />
        <Portfolio/>
        <Contact />
        <Resume />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
