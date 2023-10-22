import React, { useState, useRef, useEffect } from "react";
import GameGrid from "../BalloonGrid/BalloonGrid";
import CoverScreen from "../CoverScreen/CoverScreen";
import ScoreCard from "../ScoreCard/ScoreCard";
import { CSSTransition } from "react-transition-group";
import Constants from "../../utils/constants";
import Toast from "../Toast/Toast";
import { stopTimerMusic } from '../../components/audioUtils';
import Button from "../Button/Button";
import "./Game.css";

const Game = ({ numberOfBalloons, gameDuration, questions }) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [activeBalloons, setActiveBalloons] = useState([]);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(gameDuration);
  const [gameStopped, setGameStopped] = useState(false);
  const [hit, setHit] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const timerRef = useRef(null);

  const handleBalloonClick = (id) => {
    if (questions[currentQuestionIndex].correctBalloonId === id) {
      setScore((prevScore) => prevScore + 1);
      setHit(true);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }

    setActiveBalloons((prevActiveBalloons) =>
      prevActiveBalloons.filter((activeId) => activeId !== id)
    );

    setTimeout(() => {
      setHit(false);
    }, Constants.randomnessLimits.lower);
  };

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setActiveBalloons([]);
    setTimeRemaining(gameDuration);
    setGameStopped(false);
    setCurrentQuestionIndex(0);
  };

  const stopGame = () => {
    setGameStarted(false);
    setGameStopped(true);
    // Implement the sound handling logic here
  };

  useEffect(() => {
    let delayTimer;
    if (gameStarted && !gameStopped) {
      delayTimer = setTimeout(() => {
        timerRef.current = setInterval(() => {
          setTimeRemaining((prevTimeRemaining) => {
            if (prevTimeRemaining > 0) {
              return prevTimeRemaining - 1;
            } else {
              clearInterval(timerRef.current);
              setGameStarted(false);
              return 0;
            }
          });
        }, 1150);
      }, 2900);
    }

    return () => {
      clearTimeout(delayTimer);
      clearInterval(timerRef.current);
    };
  }, [gameStarted, gameStopped]);

  return (
    <div className="game-container">
      {(!gameStarted || gameStopped) && (
        <CoverScreen
          score={score}
          onStartGame={startGame}
          duration={Constants.gameDuration}
          stopTimerMusic={stopTimerMusic}
        />
      )}
      <CSSTransition
        in={gameStarted}
        timeout={100}
        classNames="balloons-screen"
        mountOnEnter
        unmountOnExit
      >
        {(state) => (
          <div className={`balloons-screen balloons-screen--${state}`}>
            <div className="game-nav">
              <h1 className="game-timer">
                <ScoreCard score={score} time={timeRemaining} />
              </h1>
              <div className="game-settings">
                <Button type={"alert"} onClick={stopGame}>
                  Exit
                </Button>
              </div>
            </div>
            <GameGrid
              numberOfBalloons={numberOfBalloons}
              activeBalloons={activeBalloons}
              onBalloonClick={handleBalloonClick}
            />
          </div>
        )}
      </CSSTransition>
      <Toast message={"+1 Correct"} trigger={hit} />
    </div>
  );
};

export default Game;
