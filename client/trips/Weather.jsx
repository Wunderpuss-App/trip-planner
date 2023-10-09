import React from 'react';

const Weather = () => {
  const weatherBlock = [];
  for (let i = 0; i < 5; i++) {
    weatherBlock.push(<div className='weatherFrame'> Weather frame here</div>);
  }

  return (
    <>
      <div className='weatherPanel'>Weekly Forecast: {weatherBlock}</div>
    </>
  );
};
export default Weather;
