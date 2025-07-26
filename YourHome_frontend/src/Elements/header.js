import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: clear auth tokens/localStorage
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header__brand">
        <h1 className="header__logo">
          <span className="header__logo--highlight">Your</span>
          <span className="header__logo--main">Home</span>
        </h1>
      </div>

      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `header__link${isActive ? ' header__link--active' : ''}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `header__link${isActive ? ' header__link--active' : ''}`
              }
            >
              About Us
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `header__link${isActive ? ' header__link--active' : ''}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <button className="header__logout" onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Header;
