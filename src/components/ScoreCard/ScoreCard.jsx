import React, { useEffect } from 'react';

const ScoreCard = ({ score, time }) => {
  const timeStyle = {
    color: time < 10 ? 'red' : '#304550',
  };

  return (
    <>
    <div className="game-score">
      <span className="time" style={timeStyle}>
        {time}s
      </span>
    </div>
    </>
  );
};

export default ScoreCard;
