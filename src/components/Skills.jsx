import React, { useState, useEffect } from 'react';

const Skills = () => {
    const [filter, setFilter] = useState('all');

    const handleFilter = (category) => {
        setFilter(category);
    };

    useEffect(() => {
        // Re-trigger animations when filter changes if needed
        // In React, we can rely on CSS transitions or Framer Motion
        // For now, we'll use simple CSS class toggling logic in the render
    }, [filter]);

    const skills = [
        { name: 'C++', category: 'programming', percentage: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', desc: 'Learning object-oriented programming, data structures, and algorithms through college coursework and personal projects.', level: 'Intermediate' },
        { name: 'HTML5', category: 'web', percentage: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', desc: 'Building responsive web pages and learning semantic HTML through coursework and portfolio projects.', level: 'Intermediate' },
        { name: 'Java', category: 'programming', percentage: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', desc: 'Learning object-oriented programming concepts and building console applications through college assignments.', level: 'Beginner' },
        { name: 'CSS3', category: 'web', percentage: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', desc: 'Styling web pages with modern CSS, learning flexbox, grid, and animations for responsive design.', level: 'Intermediate' },
        { name: 'MySQL', category: 'database', percentage: 65, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg', desc: 'Learning database fundamentals, writing basic queries, and understanding relational database concepts.', level: 'Beginner' },
        { name: 'C#', category: 'programming', percentage: 60, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', desc: 'Introduction to .NET framework and basic C# programming concepts through coursework exercises.', level: 'Beginner' },
        { name: 'JavaScript', category: 'web', percentage: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', desc: 'Learning DOM manipulation, event handling, and basic web interactivity for portfolio projects.', level: 'Intermediate' },
        { name: 'Kotlin', category: 'programming', percentage: 55, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', desc: 'Exploring mobile app development basics and learning Kotlin syntax for Android applications.', level: 'Beginner' },
        { name: 'Cisco Networking', category: 'networking', percentage: 70, icon: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg', desc: 'Learning network fundamentals, routing protocols, and basic network configuration through coursework.', level: 'Intermediate' },
        { name: 'Node.js', category: 'web', percentage: 50, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', desc: 'Beginning to explore server-side JavaScript and basic backend development concepts.', level: 'Beginner' },
        { name: 'React', category: 'web', percentage: 45, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', desc: 'Just started learning React components and JSX syntax for modern web development.', level: 'Beginner' },
        { name: 'MongoDB', category: 'database', percentage: 40, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', desc: 'Introduction to NoSQL databases and basic document-based data storage concepts.', level: 'Beginner' },
    ];

    return (
        <section id="skills" className="skills">
            <h2 className="section-title">Skills & Expertise</h2>

            <div className="skills-categories">
                {['all', 'programming', 'web', 'database', 'networking'].map(cat => (
                    <button
                        key={cat}
                        className={`category-filter ${filter === cat ? 'active' : ''}`}
                        onClick={() => handleFilter(cat)}
                    >
                        {cat === 'all' ? 'All Skills' : cat.charAt(0).toUpperCase() + cat.slice(1) + (cat === 'web' ? ' Dev' : '')}
                    </button>
                ))}
            </div>

            <div className="skill-container">
                {skills.map((skill, index) => {
                    if (filter !== 'all' && skill.category !== filter) return null;

                    return (
                        <div
                            key={index}
                            className="skill animate"
                            data-category={skill.category}
                            style={{ '--percentage': `${skill.percentage}%`, opacity: 1, transform: 'translateY(0) scale(1)' }}
                        >
                            <div className="skill-card">
                                <div className="skill-header">
                                    <div className="skill-icon">
                                        <img src={skill.icon} alt={skill.name} />
                                    </div>
                                    <h3 className="skill-name">{skill.name}</h3>
                                </div>

                                <p className="skill-description">{skill.desc}</p>

                                <div className="skill-details">
                                    <span className="skill-level">{skill.level}</span>
                                </div>

                                <div className="skill-progress">
                                    <div className="progress-bar" style={{ strokeDashoffset: `calc(126 - (126 * ${skill.percentage}) / 100)` }}></div>
                                    <div className="skill-percentage">{skill.percentage}%</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;
