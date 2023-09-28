import React from 'react';
import contactmeIcon from '../assets/images/Contact_Me_Image.png'
import Resume from '../assets/files/JaredStrattonResume.pdf'
import '../styles/ContactMe.css';

function ContactMe() {
  return (
    <section id="contact-me" className="contact-me">
      <ul className="contact-me">
        <li className="contact-me">
          <a href="mailto:stratton_10@hotmail.com">Email</a>
        </li>
        <li className="contact-me">
          <a href="https://www.linkedin.com/in/jared-stratton/">LinkedIn</a>
        </li>
        <li className="contact-me">
          <a href="https://github.com/EliteHuskie/">GitHub</a>
        </li>
      </ul>
      <a className='resume' href={Resume} download>Download Resume</a>
    </section>
  );
}

export default ContactMe;