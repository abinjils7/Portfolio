import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
            <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                {isOpen ? '✕' : '☰'}
            </button>

            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>home</a></li>
                <li><a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>about</a></li>
                <li><a href="#skills" className="nav-link" onClick={() => setIsOpen(false)}>skills</a></li>
                <li><a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>projects</a></li>
                <li><a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>contact</a></li>
            </ul>


        </nav>
    );
};

export default Navbar;
