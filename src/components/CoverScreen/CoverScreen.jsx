import React from 'react';
import Button from "../Button/Button";
import "./CoverScreen.css";
import ButtonSound from '../../assets/button-click.mp3';
import musicSound from '../../assets/time-sound.mp3';
import { stopTimerMusic } from '../../components/audioUtils';


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
    <h1 className="title text-7xl my-6 text-white">👩‍⚖️ Quiz To Trail 🏆</h1>
      <p className="description text-xl my-10">
        Each correct answer brings you one step closer to your goal.
        Your mission is to score 90% or higher in this level to unlock bronze.
        Click the "Start Quiz" button to dive into the world of knowledge and fun. 
        Remember, the more you learn, the more you earn. So, let's get started and see if you can become a quiz master!
      </p>
    <div className="action">
      <Button onClick={() => { buttonsound(); stopTimerMusic(); onStartGame(); }} width={"wide"}>
        Start Quiz
      </Button>
    </div>
    
  </div>
);

export default CoverScreen;
