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
            title: "AVREN Clothing",
            category: "Premium Ecommerce",
            description: "A premium menswear ecommerce platform with a focus on luxury aesthetic, smooth user experience, and robust product management.",
            tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux"],
            link: "https://avren-clothing.vercel.app/",
            status: "in-progress"
        },
        {
            title: "Venture Capital",
            category: "Full Stack SaaS",
            description: "A full-stack SaaS platform that connects startups and investors, allowing startups to submit pitch videos and investors to review and respond.",
            tech: ["MongoDB", "Express.js", "React.js", "Node.js", "TypeScript", "Socket.IO", "WebRTC"],
            link: "https://venture-capital-seven.vercel.app/"
        },
        {
            title: "Rivus",
            category: "Ecommerce",
            description: "A complete ecommerce web application with secure authentication, product management, shopping cart, and order system.",
            tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit"],
            link: "https://rivuscom.vercel.app"
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
        <section id="projects" className="section-container section-light">
            <div className="section-statement">
                <h2 className="statement-text">
                    Selected projects that{' '}
                    <br />
                    showcase my craft in{' '}
                    <br />
                    <span className="statement-accent">product development</span>
                </h2>
                <div className="statement-cta">
                    <a href="https://github.com/abinjils7" target="_blank" rel="noopener noreferrer" className="talk-btn">
                        View All &rarr;
                    </a>
                </div>
            </div>

            <div className="projects-list">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`project-row${project.status === 'in-progress' ? ' project-row--active' : ''}`}
                    >
                        <div className="project-row-left">
                            <span className="project-number">0{index + 1}</span>
                            <div>
                                <h3 className="project-row-title">{project.title}</h3>
                                <span className="project-row-cat">{project.category}</span>
                            </div>
                        </div>
                        <div className="project-row-center">
                            <p className="project-row-desc">{project.description}</p>
                        </div>
                        <div className="project-row-right">
                            {project.status === 'in-progress' && (
                                <span className="status-badge-light">
                                    <span className="status-dot-light"></span>
                                    Active
                                </span>
                            )}
                            <span className="project-arrow">&rarr;</span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;
