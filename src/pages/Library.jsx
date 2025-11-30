import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/library.css'; // We will need to handle scoping or conflicts

const Library = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    return (
        <div className="library-wrapper">
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nav-brand">
                        <i className="fas fa-book-reader"></i>
                        <span>Library</span>
                    </div>
                    <div className="nav-menu">
                        <button
                            className={`nav-link ${activeTab === 'dashboard' ? 'active' : ''}`}
                            onClick={() => setActiveTab('dashboard')}
                        >
                            Overview
                        </button>
                        <button
                            className={`nav-link ${activeTab === 'files' ? 'active' : ''}`}
                            onClick={() => setActiveTab('files')}
                        >
                            Files
                        </button>
                        <button
                            className={`nav-link ${activeTab === 'gallery' ? 'active' : ''}`}
                            onClick={() => setActiveTab('gallery')}
                        >
                            Gallery
                        </button>
                        <button
                            className={`nav-link ${activeTab === 'categories' ? 'active' : ''}`}
                            onClick={() => setActiveTab('categories')}
                        >
                            Categories
                        </button>
                    </div>
                    <div className="nav-user">
                        <Link to="/" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                            <i className="fas fa-arrow-left"></i>
                            <span>Back to Portfolio</span>
                        </Link>
                    </div>
                </div>
            </nav>

            <main className="main-content">
                {activeTab === 'dashboard' && (
                    <section id="dashboard" className="content-section active">
                        <div className="section-header">
                            <h1>File Library Overview</h1>
                            <p>Public access to shared files and documents</p>
                        </div>

                        <div className="stats-grid">
                            <div className="stat-card">
                                <div className="stat-icon">
                                    <i className="fas fa-file"></i>
                                </div>
                                <div className="stat-info">
                                    <h3>0</h3>
                                    <p>Total Files</p>
                                </div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-icon">
                                    <i className="fas fa-folder"></i>
                                </div>
                                <div className="stat-info">
                                    <h3>0</h3>
                                    <p>Categories</p>
                                </div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-icon">
                                    <i className="fas fa-download"></i>
                                </div>
                                <div className="stat-info">
                                    <h3>0</h3>
                                    <p>Total Downloads</p>
                                </div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-icon">
                                    <i className="fas fa-eye"></i>
                                </div>
                                <div className="stat-info">
                                    <h3>0</h3>
                                    <p>Total Views</p>
                                </div>
                            </div>
                        </div>

                        <div className="dashboard-card">
                            <h3>Recent Files</h3>
                            <div>
                                <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '2rem' }}>No files uploaded yet</p>
                            </div>
                        </div>
                    </section>
                )}

                {activeTab === 'files' && (
                    <section id="files" className="content-section active">
                        <div className="section-header">
                            <h1>File Library</h1>
                            <p>Browse and download available files</p>
                        </div>

                        <div className="search-filters">
                            <div className="search-box">
                                <i className="fas fa-search"></i>
                                <input type="text" placeholder="Search files..." />
                            </div>
                            <select className="filter-select">
                                <option>All Categories</option>
                                <option>Documents</option>
                                <option>Images</option>
                                <option>Videos</option>
                                <option>Audio</option>
                                <option>Archives</option>
                                <option>Other</option>
                            </select>
                            <select className="filter-select">
                                <option>Sort by Name</option>
                                <option>Sort by Date</option>
                                <option>Sort by Size</option>
                                <option>Sort by Downloads</option>
                            </select>
                        </div>

                        <div className="files-grid">
                            {/* File cards would go here */}
                        </div>
                    </section>
                )}

                {activeTab === 'gallery' && (
                    <section id="gallery" className="content-section active">
                        <div className="section-header">
                            <h1>Photo Gallery</h1>
                            <p>Browse and view images in a beautiful gallery</p>
                        </div>

                        <div className="gallery-controls">
                            <div className="search-box">
                                <i className="fas fa-search"></i>
                                <input type="text" placeholder="Search images..." />
                            </div>
                            <select className="filter-select">
                                <option>All Images</option>
                                <option>Portfolio</option>
                                <option>Projects</option>
                                <option>Designs</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="gallery-grid">
                            {/* Gallery items would go here */}
                        </div>
                    </section>
                )}

                {activeTab === 'categories' && (
                    <section id="categories" className="content-section active">
                        <div className="section-header">
                            <h1>File Categories</h1>
                            <p>Browse files by category</p>
                        </div>

                        <div className="categories-grid">
                            {/* Category cards would go here */}
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
};

export default Library;
