import './App.css'
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  return (
    <div>
      {/* MAIN APP HERE */}
      <Header>
        <Nav>
        </Nav>
      </Header>
      <About></About>
    </div>
  );
}

export default App;
