import { createSlice } from '@reduxjs/toolkit';

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
      state.tripInfo = action.payload;
      // const clothing = chooseClothing(weather);
      // state.tripInfo.clothing = clothing;
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
