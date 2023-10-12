import React from "react";
import Game from "./components/Game/Game";
import Constants from "./utils/constants";
import GameZone from './components/GameZone/GameZone';
import AnimatedBG from './components/GameZone/AnimatedBG/AnimatedBG';
import './App.css';

const App = () => {
  return (
    <>
    <div className="relative w-full h-screen">
      <div className="absolute top-0 left-0 w-full h-full">
        <AnimatedBG />
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <GameZone />
      </div>
    </div>
    </>
  );
};

export default App;
