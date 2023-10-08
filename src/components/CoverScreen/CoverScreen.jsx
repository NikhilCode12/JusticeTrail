import React from 'react';
import Button from "../Button/Button";
import "./CoverScreen.css";
import ButtonSound from '../../assets/button-click.mp3';
import musicSound from '../../assets/time-sound.mp3';

function buttonsound() {
  let audio = new Audio(ButtonSound);
  let audio2 = new Audio(musicSound);
  audio.play()
    .catch(error => {
      console.error("Error playing audio:", error);
  });
  audio2.play()
    .catch(error => {
      console.error("Error playing audio:", error);
  });
}

const CoverScreen = ({ score, onStartGame, duration }) => (
  <div className="intro">
    <h1 className="title">{score > -1 ? "Quiz Finished!" : "👩‍⚖️ Quiz To Trail 🏆"}</h1>
    {score > -1 ? (
      <p className="description">
        {`You answered ${
          score === 0 ? "nothing 😞" : `${score} ${score > 1 ? "questions correct!" : "question correct"}`
        }`}
      </p>
    ) : (
      <p className="description">
        Each correct answer brings you one step closer to your goal.
        Your mission is to score 90% or higher in this level to unlock bronze.
        Click the "Start Quiz" button to dive into the world of knowledge and fun. 
        Remember, the more you learn, the more you earn. So, let's get started and see if you can become a quiz master!
      </p>
    )}
    <div className="action">
      <Button onClick={() => { buttonsound(); onStartGame(); }} width={"wide"}>
        {score > -1 ? "Play again!" : "Start Quiz"}
      </Button>
    </div>
  </div>
);

export default CoverScreen;
