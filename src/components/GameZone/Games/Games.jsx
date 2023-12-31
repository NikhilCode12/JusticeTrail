import React , { useState } from 'react';
import Rating from '../Games/Rating';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function Games() {
  const gamesData = [
    {
      title: 'Quiz To Trail',
      description: 'Test your knowledge and challenge your wits with our exciting Quiz Game! Dive into a world of questions on a wide range of topics, from history to pop culture. Compete against the clock and see how many questions you can answer correctly. The Quiz Game is the perfect way to have fun while learning new facts and trivia. Are you ready to become a quiz master?.',
    },
    {
      title: 'Racing Game',
      description: `Get ready for an adrenaline-pumping experience in our Racing Game! Buckle up and hit the tracks in the fastest cars. Whether you're racing on city streets, twisting mountain roads, or professional circuits, it's all about speed and skill. Customize your ride, master the controls, and compete against other players. Can you claim the title of the ultimate speedster?`,
    },
  ];

  return (
    <div className="flex justify-center flex-col">
      <h1 className="text-4xl mt-4 mb-8 text-center">Game Zone</h1>
      {gamesData.map((game, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 1 ,ease: "easeIn"}}
          className="games-container drop-shadow-md w-full h-auto rounded-xl bg-gradient-to-br from-teal-300 to-lime-200 cursor-pointer transition ease-in mb-6 hover:drop-shadow-xl"
        >
          <div className="game flex p-4 justify-between">
            <div className="description">
              <h3 className="title text-[1.2em] text-black">{game.title}</h3>
              <p className="game-info text-[0.85em] text-justify w-[95%] text-slate-700">
                {game.description}
              </p>
            </div>
            <div className="rating text-black flex flex-col justify-between">
              <div className="rating">
                <Rating />
              </div>
              <div className="start">
                <Link to='/play'>
                  <Button
                    variant="contained"
                    href="/"
                    style={{
                      fontFamily: 'inherit',
                      textAlign: 'center',
                      display: 'inline-block',
                      margin: '5px',
                      fontWeight: 'bold',
                      width: '90%',
                      backgroundColor: ' indigo',
                      letterSpacing: '2px',
                    }}
                  >
                    Click Me to Play
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Games;
