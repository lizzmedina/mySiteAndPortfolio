import { Routes, Route } from "react-router-dom";
import Navbar from './components/navBar/NavBar';
import Projects from './views/Projects';
import AboutMe from './views/AboutMe';
import Contact from './views/Contact';
import Home from './views/Home';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="container-app">
    <Navbar />
    <Routes>          
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/about-me" element={<AboutMe/>} />
          <Route path="/contact" element={<Contact/>} />
    </Routes>
    </div>
    
  );
};

export default App;
