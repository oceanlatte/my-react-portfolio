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
    <div className='d-flex flex-column vh-100'>
      <Header 
         linkSelected={linkSelected}
         setLinkSelected={setLinkSelected}
      />
      <main id='app-main'>
        {linkSelected === null ? (<About/>) : (
          renderComponent()
        )}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
