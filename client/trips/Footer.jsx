import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Footer = (props) => {
  const { deleteTrip, saveTrip, trip } = props;
  const { _id, destination, weather } = trip;

  return (
    <div id='footer'>
      <button className='submit' onClick={(event) => deleteTrip(event, _id)}>
        Delete Trip
      </button>
      <button className='submit' onClick={(event) => saveTrip(event, trip)}>
        Save Trip
      </button>
    </div>
  );
};

export default Footer;
