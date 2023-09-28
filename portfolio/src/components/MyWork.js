import React from 'react';
import challenge1Icon from '../assets/images/Re-factor-Challenge.png'
import project1Icon from '../assets/images/lyric-lord-game.png'
import project2Icon from '../assets/images/my-timer-fillers-collection.png'
import challenge3Icon from '../assets/images/Random-Password-Generator.png'
import challenge5Icon from '../assets/images/Work-Day-Scheduler.png'
import challenge6Icon from '../assets/images/Weather-API-Dashboard.png'
import '../styles/MyWork.css';

function MyWork() {
  return (
    <section id="my-work" className="my-work">
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
      <section id="challenge-03" className="challenge-03">
        <a href="https://elitehuskie.github.io/module-03-random-password-generator/" className="brightness">
          <img className="images" src={challenge3Icon} alt="Challeng-03" height="200" width="400" />
        </a>
      </section>
      <section id="challenge-05" className="challenge-05">
        <a href="https://elitehuskie.github.io/module-05-work-day-scheduler/" className="brightness">
          <img className="images" src={challenge5Icon} alt="challenge-05" height="200" width="400" />
        </a>
      </section>
      <section id="challenge-06" className="challenge-06">
        <a href="https://elitehuskie.github.io/module-06-weather-api-dashboard/" className="brightness">
          <img className="images" src={challenge6Icon} alt="challenge-06" height="200" width="400" />
        </a>
      </section>
    </section>
  );
}

export default MyWork;