import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';

const avatarData = [
  {
    username: 'nikhil12',
    points: 800
  },
  {
    username: 'meenakshi18',
    points: 1000
  },
  {
    username: 'amanKhan22',
    points: 700
  },
  {
    username: 'manish412',
    points: 650
  },
  {
    username: 'himisha59',
    points: 500
  },
  {
    username: 'shaber115',
    points: 600
  },
];

export default function LeaderBoard() {
  const sortedData = avatarData.slice().sort((a, b) => b.points - a.points);

  return (
    <div>
      <h2 className='text-[1.35em] text-white mt-6 mb-10 text-center'>Leaderboard</h2>
      <div className="data flex w-full flex-col mb-10">
        {sortedData.map((player, index) => (
          <div className="player flex mx-auto p-2 w-60 m-2 cursor-pointer  
          hover:scale-125 transition-all 1s text-center text-[0.85rem] border-[1px] border-gray-300 rounded-full bg-zinc-100 hover:border-gray-600 hover:bg-gradient-to-bl hover:bg from-slate-300 to-lime-300" key={player.username}>
            <div className="avatar mr-2">
              <Avatar
                sx={{
                  backgroundColor: 
                  index === 0 ? 'gold' : 
                  index === 1 ? 'silver' : 
                  index === 2 ? 'brown' : 
                  deepOrange[400],
                  width: 25,
                  height: 25,
                  fontSize: '0.85em',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                {player.username.charAt(0)}
              </Avatar>
            </div>
            <h3 className='my-auto'>{player.username}</h3>
            <h3 className="points ml-auto my-auto">{player.points} Pts</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
