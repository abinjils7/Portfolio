const Contact = () => {
    return (
        <section id="contact" className="section-container section-light section-contact">
            <div className="section-statement section-statement--center">
                <h2 className="statement-text">
                    Let's work together{' '}
                    <br />
                    and build something{' '}
                    <br />
                    <span className="statement-accent">great</span>
                </h2>
                <p className="statement-sub">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <div className="statement-cta">
                    <a href="mailto:abinjills0904@gmail.com" className="talk-btn">
                        Let's Talk &rarr;
                    </a>
                </div>
            </div>

            <div className="contact-info-row">
                <div className="contact-info-item">
                    <span className="contact-info-label">Email</span>
                    <a href="mailto:abinjills0904@gmail.com" className="contact-info-value">abinjills0904@gmail.com</a>
                </div>
                <div className="contact-info-item">
                    <span className="contact-info-label">Phone</span>
                    <span className="contact-info-value">+91 7012963729</span>
                </div>
                <div className="contact-info-item">
                    <span className="contact-info-label">Location</span>
                    <span className="contact-info-value">Wayanad, Kerala, India</span>
                </div>
                <div className="contact-info-item">
                    <span className="contact-info-label">GitHub</span>
                    <a href="https://github.com/abinjils7" target="_blank" rel="noopener noreferrer" className="contact-info-value">github.com/abinjils7</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
