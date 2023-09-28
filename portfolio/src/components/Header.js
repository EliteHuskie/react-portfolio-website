import React from 'react';
import '../styles/Header.css';

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
    </header>
  );
}

export default Header;