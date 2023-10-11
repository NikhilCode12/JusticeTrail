import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import { motion } from 'framer-motion';

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
  {
    username: 'newuser1',
    points: 450
  },
  {
    username: 'newuser2',
    points: 620
  },
];

// function randomColor() {
//   let hex = Math.floor(Math.random() * 0xFFFFFF);
//   let color = "#" + hex.toString(16);

//   return color;
// }

export default function LeaderBoard() {
  const sortedData = avatarData.slice().sort((a, b) => b.points - a.points);

  return (
    <div>
      <h2 className='text-[1.35em] text-white mt-6 mb-8 text-center'>Leaderboard</h2>
      <div className="data flex w-full flex-col mb-10">
        {sortedData.map((player, index) => (
          <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:1}}
          className={`player flex mx-auto px-2 py-1 w-64 my-1 cursor-pointer  
            hover:scale-110 transition-all 1s text-center text-[0.85rem] border-[1px]
            ${index === 0 ? 'bg-[#FFD700] hover:bg-gradient-to-bl hover:bg from-[white] to-[#FFD700]' : index === 1 ? 'bg-[#C0C0C0] hover:bg-gradient-to-bl hover:bg from-[white] to-[#C0C0C0]' : index === 2 ? 'bg-[#f09943] hover:bg-gradient-to-bl from-[white] to-[#CD7F32]' : 'bg-purple-300'}
            border-gray-600 rounded-full hover:border-gray-800 hover:bg-gradient-to-bl hover:bg from-purple-300 to-rose-300`
          }
            key={player.username}
          >
            <div className="avatar -ml-1 mr-2">
              <Avatar
                sx={{
                  backgroundColor: deepOrange[600],
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
          </motion.div>
        ))}
      </div>
    </div>
  );
}