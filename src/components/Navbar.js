import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaGear, FaMicrophone } from 'react-icons/fa6';

const Navbar = () => (
  <div className="navbar">
    <Link className="back" to="/">
      <FaArrowLeft className="icon" />
      <p>Back</p>
    </Link>
    <p className="nav-logo">Fact Finder</p>
    <ul className="navbar-menu">
      <li><FaGear className="icon" /></li>
      <li><FaMicrophone className="icon" /></li>
    </ul>
  </div>
);

export default Navbar;
