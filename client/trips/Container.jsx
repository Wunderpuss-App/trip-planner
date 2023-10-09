import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Weather from './Weather.jsx';
import Clothing from './Clothing.jsx';


const Container = (props) => {
  const { weather } = props
  
  const weatherBlock = [];
  for (let i = 0; i < weather.length; i++) {
    weatherBlock.push(
      <Weather
        weatherDay={weather[i]}
        key={`weatherDay index`}
      />
    );
  }

  return (
    <>
      <div className='weatherPanel'>{weatherBlock}</div>
    </>
  );
};

export default Container;
