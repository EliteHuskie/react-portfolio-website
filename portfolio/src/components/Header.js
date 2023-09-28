import React from 'react';
import '../styles/Header.css';
import '../styles/global.css';
import '../styles/App.css';


function Header({currentPage, handlePageChange}) {
  return (
    <header className="header">
      <h1>Jared Stratton</h1>
      {/* Navigation Items */}
      <nav>
        <ul>
          <li>
            <a href="#about-me" onClick={() => handlePageChange('AboutMe')} className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>About Me</a>
          </li>
          <li>
          <a href="#my-work" onClick={() => handlePageChange('MyWork')} className={currentPage === 'MyWork' ? 'nav-link active' : 'nav-link'}>My Work</a>
          </li>
          <li>
          <a href="#contact-me" onClick={() => handlePageChange('ContactMe')} className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}>Contact Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;