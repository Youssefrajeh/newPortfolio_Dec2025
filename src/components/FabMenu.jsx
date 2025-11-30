import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FabMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`fab-container ${isOpen ? 'active' : ''}`}>
            <button className="fab-button" id="fab-button" onClick={toggleMenu} aria-label="Toggle navigation menu">
                <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`} id="fab-icon"></i>
            </button>

            <div className={`fab-menu ${isOpen ? 'active' : ''}`} role="menu" aria-label="Quick navigation">
                <a href="#home" className="fab-item fab-home" role="menuitem" title="Home" onClick={() => setIsOpen(false)}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 9v13h20V9l-10-7zm0 2.5L19 10v11H5V10l7-5.5z" />
                        <path d="M9 14h6v6H9z" />
                    </svg>
                    <span className="fab-icon-label">Home</span>
                </a>
                <a href="#about" className="fab-item fab-about" role="menuitem" title="About" onClick={() => setIsOpen(false)}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                    </svg>
                    <span className="fab-icon-label">About</span>
                </a>
                <a href="#experience" className="fab-item fab-experience" role="menuitem" title="Experience" onClick={() => setIsOpen(false)}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                    <span className="fab-icon-label">Experience</span>
                </a>
                <a href="#skills" className="fab-item fab-skills" role="menuitem" title="Skills" onClick={() => setIsOpen(false)}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                        <path d="M19 15L19.74 12.09L23 11L19.74 9.91L19 7L18.26 9.91L15 11L18.26 12.09L19 15Z" />
                        <path d="M5 15L5.74 12.09L9 11L5.74 9.91L5 7L4.26 9.91L1 11L4.26 12.09L5 15Z" />
                    </svg>
                    <span className="fab-icon-label">Skills</span>
                </a>
                <a href="#projects" className="fab-item fab-projects" role="menuitem" title="Projects" onClick={() => setIsOpen(false)}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <span className="fab-icon-label">Projects</span>
                </a>
                <a href="#contact" className="fab-item fab-contact" role="menuitem" title="Contact" onClick={() => setIsOpen(false)}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <span className="fab-icon-label">Contact</span>
                </a>
                <Link to="/library" className="fab-item fab-library" role="menuitem" title="Library" onClick={() => setIsOpen(false)}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM3 19V6h8v13H3zm18 0h-8V6h8v13z" />
                        <path d="M14 9.5h6v1h-6z" />
                        <path d="M14 12.5h6v1h-6z" />
                        <path d="M14 15.5h6v1h-6z" />
                    </svg>
                    <span className="fab-icon-label">Library</span>
                </Link>
            </div>
        </div>
    );
};

export default FabMenu;
