const Skills = () => {
    const skills = {
        Frontend: ["React.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Redux Toolkit", "RTK Query"],
        Backend: ["Node.js", "Express.js", "REST API Development", "JWT Authentication", "Google OAuth"],
        Database: ["MongoDB"],
        "Real-Time": ["Socket.IO", "WebRTC"],
        Tools: ["Git", "GitHub", "Vercel"],
        Concepts: ["MVC Architecture", "Auth & Authorization", "API Rate Limiting", "Responsive Design"]
    };

    return (
        <section id="skills" className="section-container section-light">
            <div className="section-statement">
                <h2 className="statement-text">
                    Technologies I work{' '}
                    <br />
                    with to bring ideas{' '}
                    <br />
                    to <span className="statement-accent">life</span>
                </h2>
            </div>
            <div className="skills-masonry">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="skill-group">
                        <h3 className="skill-group-title">{category}</h3>
                        <div className="skill-pills">
                            {items.map((skill, index) => (
                                <span key={index} className="skill-pill">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
