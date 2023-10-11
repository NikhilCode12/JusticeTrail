import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function LeaderBoard() {
  return (
    <div>
      <h2 className='text-[1.35em] mt-4 mb-10'>Leaderboard</h2>
      <div className="data flex justify-center">
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      </div>
    </div>
  );
}