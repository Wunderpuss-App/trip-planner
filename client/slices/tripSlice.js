import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   tripInfo: {
//     _id: '',
//     destination: '',
//     weather: [],
//     // clothing: [],
//   },
// };

const initialState = {
  tripInfo: {
    _id: '123',
    destination: 'Spain',
    weather: [
      {
        fxDate: "2023-10-09",
        sunrise: "07:00",
        sunset: "18:35",
        tempMax: "11",
        tempMin: "4",
        textDay: "Partly Cloudy",
        textNight: "Shower Rain",
        windDirDay: "SSW",
        windSpeedDay: "24",
        humidity: "70",
        precip: "0.0",
        uvIndex: "2"
      },
      {
        dayOfWeek: 'Monday',
        temp: 75,
        UV: 6,
        humidity: 69,
      },
      {
        dayOfWeek: 'Tuesday',
        temp: 75,
        UV: 6,
        humidity: 69,
      },
      {
        dayOfWeek: 'Wednesday',
        temp: 75,
        UV: 6,
        humidity: 69,
      },
      {
        dayOfWeek: 'Thursday',
        temp: 75,
        UV: 6,
        humidity: 69,
      },
      {
        dayOfWeek: 'Friday',
        temp: 75,
        UV: 6,
        humidity: 69,
      },
    ]
    // clothing: [],
  },
};

export const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    updateTrip: (state, action) => {
      const { destination, weather, _id } = action.payload;
      state.tripInfo.destination = destination;
      state.tripInfo.weather = weather;
      state._id = _id;
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
