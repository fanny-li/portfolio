import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="app-nav">
        <Navbar />
      </div>
      <div className="app-side">
        <Sidebar />
      </div>
      <div className="content">
        <Home />
        <About />
      </div>
    </Router>
  );
}

export default App;
