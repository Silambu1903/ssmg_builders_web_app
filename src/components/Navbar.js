import React from 'react';
import '../style/Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <img src="/assets/logo.png" alt="Logo" />
        <span>SRI SELVA MAHA GANAPATHI BUILDERS</span>
      </div>
      <ul className="navbar-menu">
        <li><a href="#">About</a></li>
        <li><a href="#">Our Solutions</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Resources</a></li>
        <li><a href="#">Media</a></li>
      </ul>
      <div className="navbar-button">
        <button>CONNECT WITH US</button>
      </div>
    </nav>
  );
};

export default Navbar;