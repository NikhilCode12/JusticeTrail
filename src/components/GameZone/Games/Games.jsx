import React from 'react'
import Rating from '../Games/Rating'
import Button from '@mui/material/Button'

function Games() {
  return (
    <div className='flex justify-center flex-col'>
      <h1 className='text-2xl mb-6 text-center'>Game Zone</h1>
      <div className="games-container w-full h-auto rounded-lg bg-gradient-to-r from-teal-400 to-lime-200 cursor-pointer opacity-[90%] hover:opacity-[100%] transition ease-in">
        <div className="game flex p-4 justify-between">
          <div className="description">
            <h3 className='title text-[1.2em] text-black'>Quiz Game</h3>
            <p className='game-info text-[0.85em] text-justify w-[95%] text-slate-600'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit et nulla excepturi voluptatem nemo corrupti quis porro ducimus animi quos provident, eius consectetur adipisci.
            </p>
          </div>
          <div className="rating text-black flex flex-col justify-between">
            <div className="raitng">
              <Rating/>
            </div>
            <div className="start">
            <Button variant="contained" href="/"
              style={
                {
                  fontFamily: 'inherit',
                  textAlign: 'center',
                  display: 'inline-block',
                  margin: '5px',
                  fontWeight: 'bold',
                  width: '90%',
                  backgroundColor: 'indigo',
                  letterSpacing: '2px'
                }
              }
            >CLICK TO PLAY</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Games