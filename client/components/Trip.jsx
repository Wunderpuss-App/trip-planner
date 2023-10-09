import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Container from '../trips/Container.jsx';
import Nav from '../trips/Nav.jsx';
import Footer from '../trips/Footer.jsx';

const Trip = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newDestination = e.target.value;
    setDestination(newDestination);
  };

  const getTripInfo = (destination) => {
    const getTripInfoRequest = {
      method: 'GET',
      credentials: 'same-origin',
      headers: { 'Content-type': 'application/json' },
    };

    fetch('/search', getTripInfoRequest)
      .then((data) => data.json)
      .then((data) => {
        dispatch(updateTrip(data));
        navigate('/trip');
        return;
      })
      .catch((error) => {
        alert('Unable to get destination.');
        console.log(`Error! -> ${error}`);
        return;
      });
  };
  return (
    <>
      <Nav />
      <Container />
      <Footer />
    </>
  );
};

export default Trip;
