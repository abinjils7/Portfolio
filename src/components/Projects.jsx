const Projects = () => {
    const projects = [
        {
            title: "SYNQ",
            category: "Real-Time Collaboration",
            description: "A Discord/Slack-inspired hybrid collaboration platform with real-time communication, task management, and team workspaces.",
            tech: ["MongoDB", "Express.js", "React.js", "Node.js", "TypeScript", "Socket.IO", "WebRTC"],
            link: "https://github.com/Zynq-Hybrid-Collaboration-Platform",
            status: "in-progress"
        },
        {
            title: "Venture Capital",
            category: "Full Stack SaaS",
            description: "A full-stack SaaS platform that connects startups and investors, allowing startups to submit pitch videos and investors to review and respond.",
            tech: ["MongoDB", "Express.js", "React.js", "Node.js", "TypeScript", "Socket.IO", "WebRTC"],
            link: "https://investors-frontend-513df2rwz-abinjils7s-projects.vercel.app"
        },
        {
            title: "Rivus",
            category: "Ecommerce",
            description: "A complete  ecommerce web application with secure authentication, product management, shopping cart, and order system.",
            tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit"],
            link: "https://github.com/abinjils7/Rivus-ecommerce.git"
        },
        {
            title: "Fix Pro",
            category: "Service Platform",
            description: "A full-stack service booking platform where users can book services and communicate with providers, featuring an AI chatbot integration.",
            tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Gemini API", "Socket.IO"],
            link: "https://github.com/abinjils7/FIX-PRO.git"
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
            <h2 className="section-title">Featured Work</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className={`project-card${project.status === 'in-progress' ? ' project-card--active' : ''}`}>
                            <div className="project-info">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    <span className="project-category">{project.category}</span>
                                    {project.status === 'in-progress' && (
                                        <span className="status-badge">
                                            <span className="status-dot"></span>
                                            Currently Working
                                        </span>
                                    )}
                                </div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', margin: '0.5rem 0' }}>
                                    {project.description}
                                </p>
                                <div className="project-tech">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link" style={{ display: 'inline-block', marginTop: '1rem', color: '#CF9EFF', textDecoration: 'none' }}>View Project &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
        </section>
    );
};

export default Projects;
