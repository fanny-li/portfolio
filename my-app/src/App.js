import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import aboutme from './components/info/AboutInfo'
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';


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
        <About
          description={aboutme.description}
        />
        <Experience />
        <Contact />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
