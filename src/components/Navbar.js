import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <Link className="logo" to="/">News</Link>
    <ul className="navbar-menu">
      <li><Link className="menu-link" to="/">Home</Link></li>
      <li><Link className="menu-link" to="/newsDetails">News</Link></li>
    </ul>
  </div>
);

export default Navbar;
