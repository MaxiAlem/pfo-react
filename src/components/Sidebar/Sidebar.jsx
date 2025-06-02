import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaSearch, FaUser, FaDatabase, FaBook, FaBars } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      setIsExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setIsExpanded(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div
        className={`sidebar ${isExpanded || isMobileMenuOpen ? 'expanded' : 'collapsed'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <nav className="sidebar-nav">
          <h2 className="sidebar-title">Weather App</h2>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
                end
              >
                <FaHome className="nav-icon" />
                <span className="nav-text">Inicio</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/search"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <FaSearch className="nav-icon" />
                <span className="nav-text">Buscar</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile/integrante1"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <FaUser className="nav-icon" />
                <span className="nav-text">Integrante 1</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile/integrante2"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <FaUser className="nav-icon" />
                <span className="nav-text">Integrante 2</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile/integrante3"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <FaUser className="nav-icon" />
                <span className="nav-text">Integrante 3</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/json-data"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <FaDatabase className="nav-icon" />
                <span className="nav-text">Datos JSON</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bitacora"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <FaBook className="nav-icon" />
                <span className="nav-text">Bitácora</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <button
        className="mobile-menu-toggle"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <FaBars />
      </button>
    </>
  );
};

export default Sidebar;