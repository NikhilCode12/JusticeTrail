import React from 'react'
import GameZone from '../GameZone';
import AnimatedBG from '../AnimatedBG/AnimatedBG';
import '../../../App.css';

function GamesScreen() {
  return (
    <div className="relative w-full h-screen">
        <div className="absolute top-0 left-0 w-full h-full">
            <AnimatedBG />
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
            <GameZone />
        </div>
    </div>
  )
}

export default GamesScreen