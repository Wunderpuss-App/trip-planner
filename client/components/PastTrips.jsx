import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './Home Components/NavBar.jsx';
import { useSelector, useDispatch } from 'react-redux';
import fetch from 'isomorphic-fetch';
import { updateTrip } from '../slices/tripSlice.js';
import TripDisplay from './PastTrips Components/TripDisplay.jsx';

const PastTrips = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [trips, setTrips] = useState([
    {
      _id: '123',
      destination: 'spain',
      weather: ['hot'],
    },
    {
      _id: '123',
      destination: 'spain',
      weather: ['hot'],
    },
    {
      _id: '123',
      destination: 'spain',
      weather: ['hot'],
    },
    {
      _id: '123',
      destination: 'spain',
      weather: ['hot'],
    },
  ]);

  const getAllTripsRequest = () => {
    const getTripsRequest = {
      method: 'GET',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
    };

    fetch('/api/trip', getTripsRequest)
      .then((res) => res.json())
      .then((data) => {
        setTrips(data);
        return;
      })
      .catch((err) => console.log(err));
  };

  const deleteTrip = (event, id) => {
    event.preventDefault();
    const deleteTripRequest = {
      method: 'DELETE',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
    };

    fetch(`/api/trip/${id}`, deleteTripRequest)
      .then((res) => res.json())
      .then((data) => {
        getAllTripsRequest();
        alert('Trip has been deleted.');
        return;
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllTripsRequest();
  });

  const reviewTrip = (event, trip) => {
    event.preventDefault();
    dispatch(updateTrip(trip));
    navigate('/trip');
  };

  const renderTrip = trips.map((trip, index) => (
    <TripDisplay
      reviewTrip={reviewTrip}
      deleteTrip={deleteTrip}
      trip={trip}
      index={index}
      key={`display ${index}`}
    />
  ));

  return (
    <div className="pastTrip">
      <NavBar />
      <h2>Past Trips</h2>
      <div className="allTrips">{renderTrip}</div>
    </div>
  );
};

export default PastTrips;
