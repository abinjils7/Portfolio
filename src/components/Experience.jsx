import LightPillar from './LightPillar';

const Experience = () => {
    return (
        <section id="experience" className="section-container" style={{ position: 'relative' }}>
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
                <h2 className="section-title">Experience & Education</h2>

                <div className="experience-block">
                    <h3 className="block-title">Experience</h3>
                    <div className="timeline-item">
                        <div className="timeline-header">
                            <h4>MERN Stack Developer Intern</h4>
                            <span className="timeline-date">June 2025 – Present</span>
                        </div>
                        <span className="timeline-company">Bridgeon</span>
                        <ul className="timeline-details">
                            <li>Developed full-stack applications using MERN stack</li>
                            <li>Built REST APIs and implemented JWT/Google OAuth authentication</li>
                            <li>Developed SaaS platform features and real-time communication systems</li>
                            <li>Utilized Redux Toolkit and RTK Query for state management</li>
                        </ul>
                    </div>
                </div>

                <div className="experience-block">
                    <h3 className="block-title">Education</h3>
                    <div className="timeline-item">
                        <div className="timeline-header">
                            <h4>Bachelor of Computer Applications</h4>
                            <span className="timeline-date">Graduated: 2025</span>
                        </div>
                        <span className="timeline-company">Calicut University | Alphonsa Arts and Science College</span>
                    </div>
                </div>

                <div className="experience-block">
                    <h3 className="block-title">Certifications</h3>
                    <div className="cert-list">
                        <span className="cert-tag">MERN Stack (LetsUpgrade)</span>
                        <span className="cert-tag">React (LetsUpgrade)</span>
                        <span className="cert-tag">Data Structures & Algorithms</span>
                        <span className="cert-tag">C / C++ Programming</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
