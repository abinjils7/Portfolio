const Footer = () => {
    return (
        <footer className="footer-light">
            <div className="footer-light-inner">
                <p>&copy; {new Date().getFullYear()} Abin Jils. All rights reserved.</p>
                <p className="footer-credit-light">Built with React & Three.js</p>
            </div>
        </footer>
    );
};

export default Footer;
