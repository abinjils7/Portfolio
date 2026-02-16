import LightPillar from './LightPillar';

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
        <section id="skills" className="section-container" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at 30% 20%, rgba(123, 63, 228, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(207, 158, 255, 0.1) 0%, transparent 50%)',
                pointerEvents: 'none'
            }}></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
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
            </div>
        </section>
    );
};

export default Skills;
