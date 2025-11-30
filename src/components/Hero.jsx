import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Software Developer', 'Web Developer', 'Problem Solver', 'C++ Programmer', 'Full Stack Developer'],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 2000,
            startDelay: 1000,
            loop: true,
            showCursor: false,
            cursorChar: '',
            autoInsertCss: false,
            smartBackspace: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id="home" className="hero visible">
            <div className="hero-content visible" id="main-content">
                <h1>Welcome to my portfolio</h1>
                <p className="typing-text">
                    <span ref={el}></span>
                </p>
                <div className="hero-buttons">
                    <a href="#projects" className="btn primary-btn">View My Work</a>
                    <a href="#contact" className="btn secondary-btn">Contact Me</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
