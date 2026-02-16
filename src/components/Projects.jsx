import LightPillar from './LightPillar';

const Projects = () => {
    const projects = [
        {
            title: "Startup-Investor SaaS Platform",
            category: "Full Stack SaaS",
            description: "A full-stack SaaS platform that connects startups and investors, allowing startups to submit pitch videos and investors to review and respond.",
            tech: ["MongoDB", "Express.js", "React.js", "Node.js", "TypeScript", "Socket.IO", "WebRTC"],
            link: "#"
        },
        {
            title: "Full Stack Ecommerce Platform",
            category: "Ecommerce",
            description: "A complete ecommerce web application with secure authentication, product management, shopping cart, and order system.",
            tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit"],
            link: "#"
        },
        {
            title: "Service Booking Platform with AI Chatbot",
            category: "Service Platform",
            description: "A full-stack platform where users can book services and communicate with providers, featuring an AI chatbot integration.",
            tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Gemini API", "Socket.IO"],
            link: "#"
        },
        {
            title: "Freelance Business Solutions",
            category: "Freelance",
            description: "Developed landing pages and business applications including guest management systems for freelance clients.",
            tech: ["MERN Stack", "React", "Node.js"],
            link: "#"
        }
    ];

    return (
        <section id="projects" className="section-container">
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', borderRadius: '20px', pointerEvents: 'none' }}>
                <LightPillar
                    topColor="#3000f0"
                    bottomColor="#c8b6c8"
                    intensity={1}
                    rotationSpeed={0.3}
                    interactive={false}
                    glowAmount={0.002}
                    pillarWidth={3}
                    pillarHeight={0.4}
                    noiseIntensity={0.5}
                    pillarRotation={25}
                    quality="low"
                />
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="section-title">Featured Work</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-info">
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', margin: '0.5rem 0' }}>
                                    {project.description}
                                </p>
                                <div className="project-tech">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                                <a href={project.link} className="project-link" style={{ display: 'inline-block', marginTop: '1rem', color: '#CF9EFF', textDecoration: 'none' }}>View Project &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

