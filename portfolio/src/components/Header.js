import React from 'react';
import '../styles/Header.css';
import jaredIcon from '../assets/images/Jared-Stratton-Picture.jpeg'
import '../styles/global.css';
import '../styles/App.css';


function Header() {
  return (
    <header className="header">
      <h1>Jared Stratton</h1>
      {/* Navigation Items */}
      <nav>
        <ul>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#my-work">My Work</a>
          </li>
          <li>
            <a href="#contact-me">Contact Me</a>
          </li>
        </ul>
      </nav>
      <main><img src={jaredIcon} alt="Picture of Jared Stratton" width="300" height="300"/></main>
    </header>
  );
}

export default Header;