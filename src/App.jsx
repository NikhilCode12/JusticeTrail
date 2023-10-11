import React from "react";
import Game from "./components/Game/Game";
import Constants from "./utils/constants";
import GameZone from './components/GameZone/GameZone';
import './App.css';

const App = () => {
  return (
    <>
      <div className="quiz-container">
        {/* <Game
          numberOfBalloons={Constants.gameCells}
          gameDuration={Constants.gameDuration}
        /> */}
      </div>
        {/* Chatbot */}
      <div className="bg-cyan-950">
        {/* GameZone */}
        <GameZone />
      </div>
    </>
  );
};

export default App;
