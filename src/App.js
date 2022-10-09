import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  return (
    <div>
      <Header>
        <Nav>
        </Nav>
      </Header>
      <About></About>
    </div>
  );
}

export default App;
