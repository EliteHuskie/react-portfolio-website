import React from 'react';

function ContactMe() {
  return (
    <section id="contact-me" className="contact-me">
      <img src="./assets/images/Contact_Me_Image.png" alt="Contact Me" height="200" width="300" />
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
    </section>
  );
}

export default ContactMe;