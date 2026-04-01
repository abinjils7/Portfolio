const About = () => {
    return (
        <section id="about" className="section-container section-light">
            <div className="section-statement">
                <h2 className="statement-text">
                    Building scalable web{' '}
                    <br />
                    applications with emphasis{' '}
                    <br />
                    on <span className="statement-accent">real-time systems</span>
                </h2>
                <p className="statement-sub">
                    A MERN stack developer combining backend engineering and frontend craftsmanship to deliver high-performance digital products.
                </p>
            </div>

            <div className="about-details">
                <div className="about-col">
                    <h3 className="detail-label">Background</h3>
                    <p className="detail-text">
                        I am a MERN Stack Developer Intern at Bridgeon with practical experience building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I have developed several production-level applications including SaaS platforms, ecommerce systems, and real-time collaboration tools.
                    </p>
                </div>
                <div className="about-col">
                    <h3 className="detail-label">Expertise</h3>
                    <p className="detail-text">
                        REST API development, JWT authentication, Google OAuth, Redux Toolkit, RTK Query, and real-time communication using Socket.IO and WebRTC. I also have freelance experience building business websites, landing pages, and management systems.
                    </p>
                </div>
                <div className="about-col about-col--stats">
                    <div className="stat-block">
                        <span className="stat-big">1+</span>
                        <span className="stat-desc">Years of{'\n'}Experience</span>
                    </div>
                    <div className="stat-block">
                        <span className="stat-big">5+</span>
                        <span className="stat-desc">Projects{'\n'}Completed</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
