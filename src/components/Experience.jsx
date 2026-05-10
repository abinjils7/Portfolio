const Experience = () => {
    return (
        <section id="experience" className="section-container section-light">
            <div className="section-statement">
                <span className="section-comment-label">// professional_journey</span>
                <h2 className="statement-text">
                    Professional journey{' '}
                    <br />
                    and academic{' '}
                    <br />
                    <span className="statement-accent">foundation</span>
                </h2>
            </div>

            <div className="timeline-container">
                <div className="timeline-item exp-card reveal">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <span className="exp-label">// experience</span>
                        <div className="timeline-header">
                            <h3 className="exp-role">MERN Stack Developer Intern</h3>
                            <span className="exp-date">June 2025 – Present</span>
                        </div>
                        <span className="exp-company">Bridgeon</span>
                        <ul className="exp-list">
                            <li>Developed full-stack applications using MERN stack</li>
                            <li>Built REST APIs and implemented JWT/Google OAuth authentication</li>
                            <li>Developed SaaS platform features and real-time communication systems</li>
                            <li>Utilized Redux Toolkit and RTK Query for state management</li>
                        </ul>
                    </div>
                </div>

                <div className="timeline-item exp-card reveal">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <span className="exp-label">// education</span>
                        <div className="timeline-header">
                            <h3 className="exp-role">Bachelor of Computer Applications</h3>
                            <span className="exp-date">Graduated: 2025</span>
                        </div>
                        <span className="exp-company">Calicut University | Alphonsa Arts and Science College</span>
                    </div>
                </div>

                <div className="timeline-item exp-card reveal">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <span className="exp-label">// certifications</span>
                        <div className="cert-pills">
                            <span className="cert-pill">MERN Stack (LetsUpgrade)</span>
                            <span className="cert-pill">React (LetsUpgrade)</span>
                            <span className="cert-pill">Data Structures &amp; Algorithms</span>
                            <span className="cert-pill">C / C++ Programming</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
