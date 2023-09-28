import React from 'react';
import jaredIcon from '../assets/images/Jared-Stratton-Picture.jpeg'
import '../styles/AboutMe.css';
import '../styles/global.css';
import '../styles/App.css';

function AboutMe() {
  return (
    <section id="about-me" className="about-me">
      <p className="about-me">
        Welcome to my Portfolio! My name is Jared. On this webpage, you'll be able to view work that I've completed during my time attending the UNB Coding Bootcamp and beyond. You'll also have access to contact information if you wish to send me a message at the bottom of this page. Have a look around and thank you for stopping by!
      </p>
      <main><img src={jaredIcon} alt="Picture of Jared Stratton" width="300" height="300"/></main>
    </section>
  );
}

export default AboutMe;