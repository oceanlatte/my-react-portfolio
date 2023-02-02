import React from 'react';
import './App.css';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Header from './components/Header';
import Footer from './components/Footer';

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
