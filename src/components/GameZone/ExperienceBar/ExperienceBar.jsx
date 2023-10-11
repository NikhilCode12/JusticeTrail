import React, { useState, useEffect } from 'react';

function ExperienceBar() {
  const [points, setPoints] = useState(0);
  const [level, setLevel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (points >= 500) {
        setLevel(level + 1);
        setPoints(0);
      } else {
        setPoints(points + 10);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [points, level]);

  const levelNames = ['Rookie', 'Novice', 'Intermediate', 'Advanced', 'Expert'];

  const levelName = level < levelNames.length ? levelNames[level] : `Level ${level}`;

  return (
    <div className="w-full bg-gray-200 rounded-full">
      <div className="bg-blue-500 text-white py-1 rounded-full" style={{ width: `${(points / 500) * 100}%` }}>
        <div className="absolute inset-0 flex items-center justify-center text-black">
          {levelName}
        </div>
      </div>
    </div>
  );
}

export default ExperienceBar;
