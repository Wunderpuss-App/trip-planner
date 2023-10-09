import React from 'react';
import Weather from './Weather.jsx';

const Container = (props) => {
  const { weather, destination } = props;

  const weatherBlock = [];
  for (let i = 0; i < weather.length; i++) {
    weatherBlock.push(
      <Weather weatherDay={weather[i]} key={`weatherDay index`} />
    );
  }

  return (
    <>
      <span className='weatherSpan' id='weatherTitle'>
        <h5 className='dayOfWeek'>Day:</h5>
        <h5 className='tempDisplay'>Daily Low:</h5>
        <h5 className='tempDisplay'>Daily High:</h5>
        <h5 className='tempDisplay'>Daytime Conditions</h5>
        <h5 className='tempDisplay'>Night Conditions</h5>
        <h5 className='tempDisplay'>Wind Direction</h5>
        <h5 className='windSpeed'>Wind</h5>
        <h5 className='tempDisplay'>Precipitation:</h5>
        <h5 className='sunDisplay'>Sunrise:</h5>
        <h5 className='sunDisplay'>Sunset:</h5>
        <h5 className='UVIndex'>UV Index:</h5>
        <h5 className='humidity'>Humidity:</h5>
      </span>
      <div className='weatherPanel'>{weatherBlock}</div>
    </>
  );
};

export default Container;
