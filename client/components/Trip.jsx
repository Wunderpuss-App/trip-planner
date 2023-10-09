import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../trips/Container.jsx';
import Nav from '../trips/Nav.jsx';
// import NavBar from './Home Components/NavBar.jsx'
import Footer from '../trips/Footer.jsx';
import { updateTrip } from '../slices/tripSlice.js';

const Trip = () => {
  const dispatch = useDispatch();

  const trip = useSelector((state) => state.trip.tripInfo);
  const { destination, weather } = trip;

  const deleteTrip = (event, _id) => {
    event.preventDefault();
    const deleteTripRequest = {
      method: 'DELETE',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
    };

    fetch(`/api/trip/${_id}`, deleteTripRequest)
      .then((res) => res.json())
      .then((data) => {
        alert('Trip has been deleted.');
        Navigate('/pastTrips');
        return;
      })
      .catch((err) => {
        alert('Unable to delete trip');
        console.log(err);
        return;
      });
  };

  const saveTrip = (event, trip) => {
    event.preventDefault();
    const jsonTrip = JSON.stringify(trip);
    const saveTripRequest = {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: jsonTrip,
    };

    fetch(`/api/trip`, saveTripRequest)
      .then((res) => res.json())
      .then((data) => {
        dispatch(updateTrip(data));
        alert('Trip has been saved.');
        return;
      })
      .catch((err) => {
        alert('Unable to save trip');
        console.log(err);
        return;
      });
  };

  return (
    <div id="body">
      <Nav />
      <div id="destinationTag">
        <h4 id="destH5">{destination.toUpperCase()}</h4>
      </div>
      <Container weather={weather} />
      <Footer deleteTrip={deleteTrip} saveTrip={saveTrip} trip={trip} />
    </div>
  );
};

export default Trip;
