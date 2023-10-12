import React, {useState} from "react";
// import Game from "./components/Game/Game";
// import Constants from "./utils/constants";
import GameZone from './components/GameZone/GameZone';
import ChatBt from "./components/Chatbot/Chat";

import './App.css';



const App = () => {
  // const [showModal, setShowModal] = useState(false);
  //   const handleOpen = () => {
  //     setShowModal(true);
  //   };
  
  //   const handleClose = () => {
  //     setShowModal(false);
  //   };

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
      <div>
        <ChatBt/>
      </div>
    </>
  );
};

export default App;
