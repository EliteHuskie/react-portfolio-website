import React from 'react';
import '../styles/AboutMe.css';

function AboutMe() {
  return (
    <section id="about-me" className="about-me">
      <img className="images" src="./assets/images/About_Me_Image.png" alt="About Me" width="300" />
      <p className="about-me">
        Welcome to my Portfolio! My name is Jared. On this webpage, you'll be able to view work that I've completed during my time attending the UNB Coding Bootcamp and beyond. You'll also have access to contact information if you wish to send me a message at the bottom of this page. Have a look around and thank you for stopping by!
      </p>
    </section>
  );
}

export default AboutMe;