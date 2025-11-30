import React, { useState } from 'react';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const handleFilter = (category) => {
        setFilter(category);
    };

    const projects = [
        {
            title: 'Breast Cancer Decision Tree',
            category: 'cpp',
            image: '/images/Breast-cancer-awareness-month-Background-by-ojosujono96-scaled.webp',
            desc: 'Machine learning project using decision trees to analyze breast cancer data, featuring data preprocessing, model training, and accuracy evaluation.',
            link: 'https://github.com/Youssefrajeh/BreastCancerDecisionTree'
        },
        {
            title: 'FileUsage Analyzer',
            category: 'cpp',
            image: '/images/N1-0921-Windows-CMD-Commands-You-Need-to-Know-blog-image-2.webp',
            desc: 'Command-line utility built in C++ to analyze file system usage, providing detailed statistics and helping optimize storage management.',
            link: 'https://github.com/Youssefrajeh/fileusage'
        },
        {
            title: 'Newcomb-Benford Statistics',
            category: 'cpp',
            image: '/images/Benfords_law_frequencies.webp',
            desc: "Statistical analysis tool implementing Benford's Law to detect fraud and anomalies in numerical data sets using C++ algorithms.",
            link: 'https://github.com/Youssefrajeh/nbstats'
        },
        {
            title: 'Expression Evaluator',
            category: 'cpp',
            image: '/images/0205_Stork_scripting_language_Pt2_Lina_Newsletter___blog.png',
            desc: 'Mathematical expression parser and evaluator built in C++ using advanced algorithms for handling complex mathematical operations.',
            link: 'https://github.com/Youssefrajeh/Expression-Evaluator'
        },
        {
            title: 'XO Game',
            category: 'web',
            image: '/images/xo.png',
            desc: 'Interactive Tic-Tac-Toe game built with HTML, CSS, and JavaScript featuring responsive design and smooth animations.',
            link: 'https://github.com/Youssefrajeh/XO'
        },
        {
            title: 'Prayer Times',
            category: 'web',
            image: '/images/prayertime.jpg',
            desc: 'Web application providing accurate prayer times based on location with beautiful UI and real-time updates for Muslims worldwide.',
            link: 'https://github.com/Youssefrajeh/Prayer-Times'
        },
        {
            title: 'Microwave Simulator',
            category: 'java',
            image: '/images/microwave.jpg',
            desc: 'Java application simulating microwave oven functionality with GUI, timer controls, and realistic cooking operations.',
            link: 'https://github.com/Youssefrajeh/Microwave'
        },
        {
            title: 'Android Assignment',
            category: 'android',
            image: '/images/android.png',
            desc: 'Native Android application built with Kotlin featuring modern UI components, user interactions, and following Android development best practices.',
            link: 'https://github.com/Youssefrajeh/AndroidAssignment'
        },
        {
            title: 'Grades Tracking System',
            category: 'csharp',
            image: '/images/grades_tracking.png',
            desc: 'JSON-based grade tracking system with C# console application featuring data validation, course management, evaluation tracking, and automated grade calculations with JSON schema validation.',
            link: 'https://github.com/Youssefrajeh/Grades-Tracking-System'
        },
        {
            title: 'Full Stack Application',
            category: 'fullstack',
            image: '/images/fullStack.png',
            desc: 'Complete full-stack web application featuring frontend and backend integration, database management, user authentication, and modern development practices.',
            link: 'https://github.com/Youssefrajeh/Full_Satck'
        },
        {
            title: 'Student Loan Calculator',
            category: 'java',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
            desc: 'Java application for managing student loans, calculating monthly payments, and handling invalid input with custom exceptions. Implements OOP, interfaces, and exception handling.',
            link: 'https://github.com/Youssefrajeh/Student-Loan-Calculator'
        }
    ];

    return (
        <section id="projects" className="projects">
            <h2 className="section-title">My Projects</h2>
            <div className="project-filters">
                {['all', 'web', 'fullstack', 'cpp', 'java', 'csharp', 'android'].map(cat => (
                    <button
                        key={cat}
                        className={`filter-btn ${filter === cat ? 'active' : ''}`}
                        data-filter={cat}
                        onClick={() => handleFilter(cat)}
                    >
                        {cat === 'all' ? 'All' : cat === 'cpp' ? 'C++' : cat === 'csharp' ? 'C#' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                ))}
            </div>
            <div className="project-grid">
                {projects.map((project, index) => {
                    if (filter !== 'all' && project.category !== filter) return null;

                    return (
                        <div key={index} className="project-card visible" data-category={project.category} style={{ display: 'block', opacity: 1, transform: 'translateY(0)' }}>
                            <div className="project-card-inner">
                                <div className="project-card-front">
                                    <div className="project-image">
                                        <img src={project.image} alt={project.title} loading="lazy" />
                                    </div>
                                    <h3 className="project-title">{project.title}</h3>
                                </div>
                                <div className="project-card-back">
                                    <p>{project.desc}</p>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project-btn">
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
