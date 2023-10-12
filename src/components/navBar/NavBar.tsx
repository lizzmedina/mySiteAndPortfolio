import { Link } from 'react-router-dom';
import './NavBar.css'
const Navbar: React.FC = () => {
  return (
    <header>
        <div className="container-navbar">
        <nav>
          <ul>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/projects">My Projects</Link></li>
            <li><Link to="/about-me">About Me</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>   
    </header>
    
  );
};

export default Navbar;