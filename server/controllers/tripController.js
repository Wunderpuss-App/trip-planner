const https = require("https");
const Trip = require("../models/trip"); // Import the Trip model

// fetch data from City Lookup API
async function fetchCityData(cityName) {
  const apiKey = "9ea5539b237444e0aa47f8b4921a6bb1";
  const apiUrl = `https://geoapi.qweather.com/v2/city/lookup?key=${apiKey}&location=${cityName}&lang=en`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  // return the id of the city that is the first result in the response object
  return data.location[0];
}

//fetch data from Weather API
async function fetchWeatherData(locationId) {
  const apiKey = "9ea5539b237444e0aa47f8b4921a6bb1";
  const apiUrl = `https://devapi.qweather.com/v7/weather/7d?key=${apiKey}&location=${locationId}&lang=en`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  // return the array of daily forecast objects
  return data.daily;
}

// async function testFunc() {
//   const id = await fetchCityData("maryland");
//   const response = await fetchWeatherData(id);
//   console.log("response in testFunc :", response);
// }

exports.getNewTrip = async (req, res, next) => {
  try {
    console.log("inside getNewTrip middleware...");
    const { destination } = req.params;
    console.log("destination:", destination);
    const cityData = await fetchCityData(destination);
    console.log("city data fetched");
    console.log("city data:", cityData);
    console.log("city id:", cityData.id);
    const weather = await fetchWeatherData(cityData.id);
    console.log("weather data fetched");
    console.log("weather:", weather);

    // create object to send back
    const trip = {
      destination: destination,
      weather: weather,
      cityData: cityData,
    };

    res.locals.trip = trip;

    return next();
  } catch (err) {
    next(err);
  }
};
// Creating new trip and saving in database
exports.createTrip = async (req, res, next) => {
  try {
    console.log("inside create trip middleware function...");
    const { destination, weather } = req.body;

    console.log("destination: ", destination);
    console.log("weather: ", weather);

    const newTrip = await Trip.create({
      destination: destination,
      weather: weather,
      // cityInfo: cityData,
    });

    console.log("new trip response from mongodb", newTrip);

    res.locals.savedTrip = newTrip;

    return next();
  } catch (err) {
    return next(err);
  }
};

//
