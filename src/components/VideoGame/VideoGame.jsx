import React ,{ useEffect} from 'react';
import Button from '@mui/material/Button';
import { BiArrowBack } from 'react-icons/bi';

function VideoGame() {
  return (
    <div className="w-full p-6 h-full flex bg-white bg-opacity-5 backdrop-blur-[1px] justify-center text-center rounded-2xl relative" >
      <h1 className='text-7xl my-auto bg-clip-text text-transparent bg-gradient-to-l from-sky-100 to-sky-400'>Gaming Area</h1>
      <Button
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
      </Button>
    </div>
  );
}

export default VideoGame;
