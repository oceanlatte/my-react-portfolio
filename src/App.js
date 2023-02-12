import React, { useState } from 'react';
import './App.css';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [linkSelected, setLinkSelected] = useState(null);

  // if link state is 'portfolio' display #portfolio
  // default is to show 'about'

  // if on the home page or select about => show about
  // if we click on portfolio => ONLY portfolio
  // if we click on either resume or contact => resume / contact

  const renderComponent = () => {
    switch (linkSelected) {
      case '#about-me':
        return <About/>
      case '#portfolio':
        return <Portfolio/>
      case '#resume':
        return <Resume/>
      case '#contact':
        return <Contact/>
      default:
        <About />
    }
  }

  return (
    <div>
      <Header 
         linkSelected={linkSelected}
         setLinkSelected={setLinkSelected}
      />
      <main>
        {linkSelected === null ? (<About/>) : (
          renderComponent()
        )}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
