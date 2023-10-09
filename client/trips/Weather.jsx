import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Weather = (props) => {
  const { weatherDay, key } = props;
  const {
    fxDate,
    uvIndex,
    humidity,
    tempMax,
    tempMin,
    textDay,
    textNight,
    windDirDay,
    windSpeedDay,
    precip,
    sunrise,
    sunset,
  } = weatherDay;
  return (
    <>
      <div className='weatherPanel'>
        <span className='weatherSpan'>
          <h5 className='dayOfWeek'>{fxDate}</h5>
          <h5 className='tempDisplay'>Low: {tempMin}</h5>
          <h5 className='tempDisplay'>High: {tempMax}</h5>
          <h5 className='tempDisplay'>{textDay}</h5>
          <h5 className='tempDisplay'>{textNight}</h5>
          <h5 className='tempDisplay'>{windDirDay}</h5>
          <h5 className='tempDisplay'>{windSpeedDay}</h5>
          <h5 className='tempDisplay'>{precip}</h5>
          <h5 className='tempDisplay'>{sunrise}</h5>
          <h5 className='tempDisplay'>{sunset}</h5>
          <h5 className='UVIndex'>{uvIndex}</h5>
          <h5 className='humidity'>{humidity}</h5>
        </span>
      </div>
    </>
  );
};
export default Weather;
