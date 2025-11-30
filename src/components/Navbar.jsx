import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isLibrary = location.pathname === '/library';

  useEffect(() => {
    // Enhanced navbar name animation logic
    const el = document.getElementById('navbar-name');
    if (!el || el.dataset.enhanced === '1') return;

    const text = (el.textContent || '').trim();
    if (!text) return;

    el.dataset.enhanced = '1';
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#ff9ff3', '#54a0ff'];

    const frag = document.createDocumentFragment();
    let letterIndex = 0;

    for (const ch of text) {
      if (ch === ' ') {
        const space = document.createElement('span');
        space.className = 'navbar-space';
        space.textContent = ' ';
        frag.appendChild(space);
        continue;
      }
      const span = document.createElement('span');
      span.className = 'navbar-letter';
      span.textContent = ch;
      const delay = (letterIndex * 0.1).toFixed(2);
      const color = colors[letterIndex % colors.length];
      span.style.animationDelay = `${delay}s`;
      span.style.color = color;
      span.style.setProperty('--letter-index', letterIndex);
      frag.appendChild(span);
      letterIndex++;
    }
    el.textContent = '';
    el.appendChild(frag);
  }, []);

  return (
    <nav className="nav-container" role="navigation" aria-label="Primary">
      <div className="nav-content">
        <Link to="/" className="logo musical-orchestra-logo" aria-label="Youssef Rajeh Home">
          <span className="navbar-logo-text" id="navbar-name">Youssef Rajeh</span>
        </Link>
        <div className="nav-links">
          {!isLibrary ? (
            <>
              <a href="#home" className="nav-link">Home</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#experience" className="nav-link">Experience</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#contact" className="nav-link">Contact</a>
              <Link to="/library" className="nav-link" data-transition="wipe-right">Library</Link>
            </>
          ) : (
            <>
              <Link to="/#dashboard" className="nav-link">Overview</Link>
              <Link to="/#files" className="nav-link">Files</Link>
              <Link to="/#gallery" className="nav-link">Gallery</Link>
              <Link to="/" className="nav-link">Back to Portfolio</Link>
            </>
          )}
          <div className="nav-indicator" aria-hidden="true"></div>
        </div>
        <div className="nav-controls"></div>
      </div>
    </nav>
  );
};

export default Navbar;
