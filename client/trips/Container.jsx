import React from 'react';
import Weather from './Weather.jsx';


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
