import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Custom SVG Hexagon Logo with Initials */}
      <Link to="/" className="nav-brand">
        <svg width="42" height="42" viewBox="0 0 100 100" aria-label="Custom Portfolio Logo">
          <polygon
            points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
            fill="#0284c7"
            stroke="#38bdf8"
            strokeWidth="4"
          />
          <text
            x="50"
            y="62"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="36"
            fontWeight="bold"
            fontFamily="Arial, sans-serif"
          >
            LYC
          </text>
        </svg>
        <span>My Portfolio</span>
      </Link>

      {/* Navigation Links for all 6 required pages */}
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About Me</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/education">Education</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/contact">Contact Me</NavLink></li>
      </ul>
    </nav>
  );
}
export default Navbar;