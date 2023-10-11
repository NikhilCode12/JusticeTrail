import React from 'react';
import ReactDOM from 'react-dom'; 
import VideoGame from '../VideoGame/VideoGame';
import Leaderboard from './LeaderBoard/Leaderboard';
import ExperienceBar from './ExperienceBar/ExperienceBar';
import Games from './Games/Games';

function GameZone() {
  return (
  <div className='grid grid-cols-3 gap-4 m-4'>
    <section className='bg-indigo-200 col-span-2 flex justify-center p-10 text-4xl rounded'>
        <VideoGame />
    </section>
    <section className="leaderboard-menu relative">
      <section className='bg-sky-200 flex justify-center p-4 h-12 rounded'>
          <ExperienceBar />
      </section>
      <section className='col-span-2 top-16 bg-rose-400 w-full absolute flex justify-center rounded h-[85vh]'>
          <Leaderboard />
      </section>
    </section>
    <section className='bg-teal-600 text-gray-200 col-span-2 flex justify-center p-6 h-auto rounded'>
        <Games />
    </section>
  </div>
  )
}

export default GameZone;
