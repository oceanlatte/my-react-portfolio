import React, { useState } from 'react';
import './App.css';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [linkSelected, setLinkSelected] = useState('about');

  // if link state is 'portfolio' display #portfolio
  // default is to show 'about'
  console.log(linkSelected)
  // 
  return (
    <div>
      <Header 
         linkSelected={linkSelected}
         setLinkSelected={setLinkSelected}
      />
      <main>
        <About />
        {!linkSelected === '#portfolio' ? (
            <Portfolio />
          ) : (
            <>
            <Resume />
            <Contact />
            </>
          )}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
