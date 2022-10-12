import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {


  return (
    <div>
      <Header>
      </Header>
      <main>
        <About />
        <Portfolio/>
        <Contact />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
