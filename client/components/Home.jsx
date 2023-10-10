import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import NavBar from './Home Components/NavBar.jsx';
import fetch from 'isomorphic-fetch';
import { updateTrip } from '../slices/tripSlice.js';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [destination, setDestination] = useState('');

  const handleDestinationChange = (event) => {
    const newDestination = event.target.value;
    setDestination(newDestination);
  };

  const getTripInfo = (destination) => {
    const getTripInfoRequest = {
      method: 'GET',
      credentials: 'same-origin',
      headers: { 'Content-type': 'application/json' },
    };

    fetch(`/api/search/${destination}`, getTripInfoRequest)
      .then((res) => res.json())
      .then((data) => {
        console.log('data from fetch', data);
        if ('err' in data) {
          alert('Destination does not exist');
          return;
        }
        dispatch(updateTrip(data));
        navigate('/trip');
        return;
      })
      .catch((err) => {
        alert('Unable to get destination');
        console.log(err);
        return;
      });
  };

  const searchClick = (event) => {
    event.preventDefault();
    getTripInfo(destination);
  };

  return (
    <div className="homeBackground">
      <NavBar />
      <div className="searchBar">
        <input
          autoComplete="off"
          name="search"
          type="string"
          value={destination}
          placeholder="Destination"
          onChange={(event) => handleDestinationChange(event)}
        />
        <IconButton
          aria-label="search"
          id="homeSearch"
          onClick={(event) => {
            return searchClick(event);
          }}
        >
          <SearchIcon
            id="searchIcon"
            fontSize="large"
            sx={{ color: 'white' }}
          />
        </IconButton>
      </div>
    </div>
  );
};
export default Home;
