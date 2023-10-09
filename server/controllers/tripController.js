const https = require("https");
const Trip = require("../models/trip"); // Import the Trip model

// fetch data from City Lookup API
async function fetchCityData(cityName) {
  const apiKey = "9ea5539b237444e0aa47f8b4921a6bb1";
  const apiUrl = `https://geoapi.qweather.com/v2/city/lookup?key=${apiKey}&location=${cityName}&lang=en`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  // return the id of the city that is the first result in the response object
  return data.location[0].id;
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
    const id = await fetchCityData(destination);
    console.log("city data fetched");
    console.log("city id:", id);
    const weather = await fetchWeatherData(id);
    console.log("weather data fetched");
    console.log("weather:", weather);

    // create object to send back
    const trip = {
      destination: destination,
      weather: weather,
    };

    res.locals.trip = trip;

    return next();
  } catch (err) {
    next(err);
  }
};

// Create a new trip
// exports.createTrip = async (req, res) => {
//   try {
//     const { destination } = req.body;

//     // Fetch city data
//     fetchCityData(destination, (cityError, cityData) => {
//       if (cityError) {
//         return res.status(404).json({ error: "City not found" });
//       }

//       // Fetch weather data
//       fetchWeatherData(cityData.id, (weatherError, weatherData) => {
//         if (weatherError) {
//           return res.status(500).json({ error: "Error fetching weather data" });
//         }

//         // Create a new trip with fetched data
//         const trip = new Trip({
//           destination,
//           locationId: cityData.id,
//           weather: weatherData,
//           cityInfo: cityData,
//         });

//         trip.save((saveError, savedTrip) => {
//           if (saveError) {
//             return res.status(500).json({ error: "Error saving trip" });
//           }

//           res.status(201).json(savedTrip);
//         });
//       });
//     });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ error: "An error occurred while creating the trip." });
//   }
// };
