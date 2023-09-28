import React from 'react';

function MyWork() {
  return (
    <section id="my-work" className="my-work">
      <img className="images" src="./assets/images/My_Work_Image.png" alt="My Work" height="200" width="300" />
      <section id="challenge-01" className="challenge-01">
        <a href="https://elitehuskie.github.io/module-01-semantic-html-refactor/" className="brightness">
          <img className="images" src="./assets/images/Module-01-Challenge.png" alt="Module 01 Challenge" height="200" width="400" />
        </a>
      </section>
      <section id="project-01" className="project-01">
        <a href="https://elitehuskie.github.io/project-01-music-lyrics-game/" className="brightness">
          <img className="images" src="./assets/images/lyric-lord-game.png" alt="Project 01" height="200" width="400" />
        </a>
      </section>
      <section id="project-02" className="project-02">
        <a href="https://my-time-fillers-eb26f5332548.herokuapp.com/" className="brightness">
          <img className="images" src="./assets/images/my-timer-fillers-collection.png" alt="Project 02" height="200" width="400" />
        </a>
      </section>
    </section>
  );
}

export default MyWork;