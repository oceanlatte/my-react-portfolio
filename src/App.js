import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Resume from './pages/Resume';

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
