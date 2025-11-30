import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    useEffect(() => {
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Also trigger children animations if needed
                    const children = entry.target.querySelectorAll('.experience-item, .project-card, .skill');
                    children.forEach((child, index) => {
                        // Add staggered animation logic if not handled by CSS
                        setTimeout(() => {
                            child.classList.add('visible');
                            if (child.classList.contains('skill')) {
                                child.classList.add('animate');
                            }
                        }, index * 100);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
            <Footer />

            <div className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <i className="fas fa-arrow-up"></i>
            </div>

            <div id="ai-assistant" className="ai-assistant">
                <div className="ai-tooltip">Need help? Click me!</div>
            </div>
        </>
    );
};

export default Home;
