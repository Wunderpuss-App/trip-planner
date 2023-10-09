import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Weather = () => {
  const weatherBlock = [];
  for (let i = 0; i < 7; i++) {
    weatherBlock.push(
      <div className='weatherFrame'>
        {' '}
        Weather frame here
      </div>
    );
  }

  return (
    <>
      <div className='weatherPanel'>{weatherBlock}</div>
    </>
  );
};
export default Weather;
