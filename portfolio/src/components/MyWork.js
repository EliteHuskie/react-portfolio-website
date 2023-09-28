import React from 'react';
import myworkIcon from '../assets/images/My_Work_Image.png'
import challenge1Icon from '../assets/images/Module-01-Challenge.png'
import project1Icon from '../assets/images/lyric-lord-game.png'
import project2Icon from '../assets/images/my-timer-fillers-collection.png'
import '../styles/MyWork.css';

function MyWork() {
  return (
    <section id="my-work" className="my-work">
      <img className="images" src={myworkIcon} alt="My Work" height="200" width="300" />
      <section id="challenge-01" className="challenge-01">
        <a href="https://elitehuskie.github.io/module-01-semantic-html-refactor/" className="brightness">
          <img className="images" src={challenge1Icon} alt="Module 01 Challenge" height="200" width="400" />
        </a>
      </section>
      <section id="project-01" className="project-01">
        <a href="https://elitehuskie.github.io/project-01-music-lyrics-game/" className="brightness">
          <img className="images" src={project1Icon} alt="Project 01" height="200" width="400" />
        </a>
      </section>
      <section id="project-02" className="project-02">
        <a href="https://my-time-fillers-eb26f5332548.herokuapp.com/" className="brightness">
          <img className="images" src={project2Icon} alt="Project 02" height="200" width="400" />
        </a>
      </section>
    </section>
  );
}

export default MyWork;