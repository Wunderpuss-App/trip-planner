import { createSlice } from '@reduxjs/toolkit';
import { startTransition } from 'react';

const initialState = {
  tripInfo: {
    _id: '',
    destination: '',
    weather: [],
    // clothing: [],
  },
};

export const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    updateTrip: (state, action) => {
      const { destination, weather } = action.payload;
      state.tripInfo.destination = destination;
      state.tripInfo.weather = weather;

      const clothing = chooseClothing(weather);
      state.tripInfo.clothing = clothing;
    },
    resetTrip: (state, action) => {
      state.tripInfo = {
        _id: '',
        destination: '',
        weather: [],
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateTrip, resetTrip } = tripSlice.actions;

export default tripSlice.reducer;
