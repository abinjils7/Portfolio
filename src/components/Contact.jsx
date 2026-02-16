const Contact = () => {
    return (
        <section id="contact" className="section-container contact-section">
            <div className="contact-content">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-text-wrapper" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <p className="contact-text">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    <div className="contact-details" style={{ margin: '2rem 0', color: 'rgba(255,255,255,0.8)' }}>
                        <p style={{ margin: '0.5rem 0' }}><strong>Email:</strong> <a href="mailto:abinjills0904@gmail.com" style={{ color: '#CF9EFF', textDecoration: 'none' }}>abinjills0904@gmail.com</a></p>
                        <p style={{ margin: '0.5rem 0' }}><strong>Phone:</strong> +91 7012963729</p>
                        <p style={{ margin: '0.5rem 0' }}><strong>Location:</strong> Wayanad, Kerala, India</p>
                    </div>
                </div>
                <a href="mailto:abinjills0904@gmail.com" className="btn-primary contact-btn">
                    Say Hello
                </a>

                <div className="social-links">
                    <a href="https://github.com/abinjils7" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;

