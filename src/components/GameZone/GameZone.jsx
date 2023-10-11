import React from 'react';
import ReactDOM from 'react-dom'; 
import VideoGame from '../VideoGame/VideoGame';
import Leaderboard from './LeaderBoard/Leaderboard';
import ExperienceBar from './ExperienceBar/ExperienceBar';
import Games from './Games/Games';

function GameZone() {
  return (
  <div className='grid grid-cols-4 gap-6 m-4'>
    <section className='col-span-3 flex justify-center p-8 text-4xl rounded'>
        <VideoGame />
    </section>
    <section className="leaderboard-menu relative">
      <section className='flex my-auto h-10 rounded-full'>
          <ExperienceBar />
      </section>
      <section className='col-span-2 top-16 text-black bg-gradient-to-tr from-[#1CB5E0] to-[#000851] w-full absolute flex justify-center rounded-xl h-auto'>
          <Leaderboard />
      </section>
    </section>
    <section className='bg-teal-600 text-gray-200 col-span-3 flex justify-center p-6 h-auto rounded-xl'>
        <Games />
    </section>
  </div>
  )
}

export default GameZone;
