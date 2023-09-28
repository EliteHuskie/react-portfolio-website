import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2>&copy;{new Date().getFullYear()} Stratton Corp.</h2>
    </footer>
  );
}

export default Footer;