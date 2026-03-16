const Skills = () => {
    const skills = {
        Frontend: ["React.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Redux Toolkit", "RTK Query"],
        Backend: ["Node.js", "Express.js", "REST API Development", "JWT Authentication", "Google OAuth"],
        Database: ["MongoDB"],
        "Real-Time Technologies": ["Socket.IO", "WebRTC"],
        Tools: ["Git", "GitHub", "Vercel"],
        Concepts: ["MVC Architecture", "Authentication and Authorization", "API Rate Limiting", "Responsive Design"]
    };

    return (
        <section id="skills" className="section-container">
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="skill-category">
                        <h3 className="skill-category-title">{category}</h3>
                        <div className="skill-list">
                            {items.map((skill, index) => (
                                <span key={index} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
