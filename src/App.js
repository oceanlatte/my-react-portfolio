import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {


  return (
    <div>
      <Header>
      </Header>
      <main>
        <About></About>
        <Portfolio/>
      </main>
    </div>
  );
}

export default App;
