import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home/Home";
// import Constants from "./utils/constants";
// import GameZone from './components/GameZone/GameZone';
// import ChatBt from "./components/Chatbot/Chat";

import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

{
  /* <div className="quiz-container">
        {/* <Game
          numberOfBalloons={Constants.gameCells}
          gameDuration={Constants.gameDuration}
        /> */
}
// </div>
{
  /* Chatbot */
}
// <div className="bg-cyan-950">
{
  /* GameZone */
}
{
  /* <GameZone /> */
}
// </div>
// <div>
{
  /* <ChatBt/> */
}
{
  /* </div> */
}
