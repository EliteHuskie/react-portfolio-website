import React from 'react';
import jaredIcon from '../assets/images/About_Me_Image.png'
import aboutmeIcon from '../assets/images/About_Me_Image.png'
import '../styles/AboutMe.css';

<main class="center"><img src={jaredIcon} alt="Picture of Jared Stratton" width="300" height="300"/></main>

function AboutMe() {
  return (
    <section id="about-me" className="about-me">
      <img className="images" src={aboutmeIcon} alt="About Me" width="300" />
      <p className="about-me">
        Welcome to my Portfolio! My name is Jared. On this webpage, you'll be able to view work that I've completed during my time attending the UNB Coding Bootcamp and beyond. You'll also have access to contact information if you wish to send me a message at the bottom of this page. Have a look around and thank you for stopping by!
      </p>
    </section>
  );
}

export default AboutMe;