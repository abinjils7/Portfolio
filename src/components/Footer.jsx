const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Abin. All rights reserved.</p>
                <p className="footer-credit">Built with React & Three.js</p>
            </div>
        </footer>
    );
};

export default Footer;

