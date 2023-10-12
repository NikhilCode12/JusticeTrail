import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function ExperienceBar() {
  const [points, setPoints] = useState(0);
  const [level, setLevel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (points >= 500) {
        setLevel(level + 1);
        setPoints(0);
      } else {
        setPoints(450);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [points, level]);

  const levelNames = ['🚀  Rookie', '📚  Novice', '💥  Intermediate', '👩‍⚖️  Advanced', '👑  Expert'];

  const levelName = level < levelNames.length ? levelNames[Math.floor(Math.random()*levelNames.length)] : '';

  return (
    <motion.div 
    initial={{y:-10,opacity: 0}}
    animate={{y:0,opacity:1}}
    transition={{duration:0.5}}
    className="w-full flex transition-all 1s justify-left rounded-full bg-gradient-to-r from-orange-400 to-orange-100 relative cursor-pointer">
      <div className="bg-gradient-to-r from-red-400 to-orange-400 text-white rounded-full flex justify-between w-full transition-all 1s h-8" style={{ width: `${(points / 1000) * 100}%` }}>
        <div className="flex justify-between my-auto items-center text-center inset-0 w-full text-slate-800 text-sm">
          <div className="left ml-2">{levelName}</div>
          <div className="points mx-full absolute right-2">{points + ' Pts'}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default ExperienceBar;
