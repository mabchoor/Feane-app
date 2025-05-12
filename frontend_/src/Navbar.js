// src/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/common.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar fade-in ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo hover-scale">
          <span className="logo-text">Feane</span>
        </Link>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link hover-lift">HOME</Link>
          <Link to="/menu" className="nav-link hover-lift">MENU</Link>
          <Link to="/about" className="nav-link hover-lift">ABOUT</Link>
          <Link to="/book" className="nav-link hover-lift">BOOK TABLE</Link>
          <Link to="/feedback" className="nav-link hover-lift">FEEDBACK</Link>
          <a 
            href="http://localhost:8000/admin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link admin-btn btn-hover"
          >
            Admin Login
          </a>
        </div>

        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <style jsx>{`
        .navbar {
          background-color: var(--primary);
          padding: var(--spacing-md) 0;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: var(--z-sticky);
          transition: all var(--transition-normal);
          box-shadow: var(--shadow-md);
        }

        .navbar.scrolled {
          padding: var(--spacing-sm) 0;
          background-color: rgba(44, 24, 16, 0.95);
          backdrop-filter: blur(10px);
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--spacing-xl);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar-logo {
          text-decoration: none;
          display: flex;
          align-items: center;
        }

        .logo-text {
          color: var(--secondary);
          font-size: var(--font-size-2xl);
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .navbar-menu {
          display: flex;
          gap: var(--spacing-lg);
          align-items: center;
        }

        .nav-link {
          color: var(--white);
          text-decoration: none;
          font-weight: 500;
          padding: var(--spacing-sm) var(--spacing-md);
          border-radius: var(--border-radius-md);
          transition: all var(--transition-fast);
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background-color: var(--secondary);
          transition: all var(--transition-fast);
          transform: translateX(-50%);
        }

        .nav-link:hover {
          color: var(--secondary);
        }

        .nav-link:hover::after {
          width: 80%;
        }

        .admin-btn {
          background-color: var(--accent);
          color: var(--white);
          padding: var(--spacing-sm) var(--spacing-lg);
          border-radius: var(--border-radius-md);
          font-weight: 600;
          transition: all var(--transition-fast);
        }

        .admin-btn:hover {
          background-color: var(--accent-dark);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          padding: var(--spacing-sm);
          z-index: var(--z-elevate);
        }

        .hamburger span {
          display: block;
          width: 25px;
          height: 2px;
          background-color: var(--white);
          transition: var(--transition-fast);
          border-radius: var(--border-radius-full);
        }

        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }

          .navbar-menu {
            display: none;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            width: 80%;
            max-width: 300px;
            background-color: var(--primary);
            flex-direction: column;
            padding: var(--spacing-xxl) var(--spacing-lg);
            gap: var(--spacing-lg);
            box-shadow: var(--shadow-lg);
            transform: translateX(100%);
            transition: transform var(--transition-normal);
          }

          .navbar-menu.active {
            display: flex;
            transform: translateX(0);
          }

          .hamburger.active span:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
          }

          .hamburger.active span:nth-child(2) {
            opacity: 0;
          }

          .hamburger.active span:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
          }

          .nav-link {
            width: 100%;
            text-align: center;
            padding: var(--spacing-md);
          }

          .admin-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
