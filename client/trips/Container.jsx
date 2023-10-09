import React from 'react';
import { useNavigate } from 'react-router-dom';
import Weather from './Weather.jsx';
import Clothing from './Clothing.jsx';

const Container = () => {
  return (
    <div id='container'>
      <Weather />
      <Clothing />
    </div>
  );
};

export default Container;
