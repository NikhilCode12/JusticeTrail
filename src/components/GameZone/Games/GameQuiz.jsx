import React from 'react';
import Game from '../../Game/Game';
import Constants from "../../../utils/constants";
import { BiArrowBack } from 'react-icons/bi';
import Button2 from '@mui/material/Button';

function GameQuiz() {
  return (
    <div>
        <Game
          numberOfBalloons={Constants.gameCells}
          gameDuration={Constants.gameDuration}
        />
        <Button2
        variant="contained"
        href="/"
        style={{
            position: 'absolute',
            left: '15px',
            top: '15px',
            borderRadius: '50px',
            padding: '10px',
            fontSize: '20px',
        }}
        >
            <BiArrowBack />
    </Button2>
    </div>
  );
}

export default GameQuiz;
