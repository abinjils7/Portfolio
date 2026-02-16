import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar-container">


            <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                {isOpen ? '✕' : '☰'}
            </button>

            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>Home</a></li>
                <li><a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About</a></li>
                <li><a href="#skills" className="nav-link" onClick={() => setIsOpen(false)}>Skills</a></li>
                <li><a href="#experience" className="nav-link" onClick={() => setIsOpen(false)}>Experience</a></li>
                <li><a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</a></li>
                <li><a href="/resume.pdf" className="nav-link" download>Resume</a></li>
                <li><a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a></li>

            </ul>


        </nav>
    );
};

export default Navbar;
