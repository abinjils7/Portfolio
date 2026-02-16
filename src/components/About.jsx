const About = () => {
    return (
        <section id="about" className="section-container">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        I am a MERN Stack Developer Intern at Bridgeon with practical experience building full-stack web applications using MongoDB, Express.js, React.js, and Node.js.
                    </p>
                    <p>
                        I have developed several production-level applications, including a SaaS platform connecting startups and investors, a complete ecommerce platform, and a service booking platform with AI chatbot integration.
                    </p>
                    <p>
                        My expertise includes REST API development, JWT authentication, Google OAuth, Redux Toolkit, RTK Query, and real-time communication using Socket.IO and WebRTC.
                    </p>
                    <p>
                        I also have freelance experience building business websites, landing pages, and management systems. I am passionate about building secure, scalable, and high-performance applications.
                    </p>
                </div>
                <div className="about-stats">
                    <div className="stat-item">
                        <span className="stat-number">1+</span>
                        <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">5+</span>
                        <span className="stat-label">Projects Completed</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
