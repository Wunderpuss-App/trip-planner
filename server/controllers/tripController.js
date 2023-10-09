const https = require("https");
const Trip = require("../models/trip"); // Import the Trip model

// fetch data from City Lookup API
function fetchCityData(cityName, callback) {
  const apiKey = "9ea5539b237444e0aa47f8b4921a6bb1";
  const apiUrl = `https://geoapi.qweather.com/v2/city/lookup?key=${apiKey}&location=${cityName}&lang=en`;

  https
    .get(apiUrl, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        try {
          const cityData = JSON.parse(data);

          if (cityData.location && cityData.location.length > 0) {
            callback(null, cityData.location[0]); // Assuming we want the first matching location
          } else {
            callback("City not found", null);
          }
        } catch (error) {
          callback(error, null);
        }
      });
    })
    .on("error", (error) => {
      callback(error, null);
    });
}

//fetch data from Weather API
function fetchWeatherData(locationId, callback) {
  const apiKey = "9ea5539b237444e0aa47f8b4921a6bb1";
  const apiUrl = `https://api.qweather.com/v7/weather/7d?key=${apiKey}&location=${locationId}&lang=en`;

  https
    .get(apiUrl, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        try {
          const weatherData = JSON.parse(data);

          if (weatherData) {
            callback(null, weatherData);
          } else {
            callback("Weather data not found", null);
          }
        } catch (error) {
          callback(error, null);
        }
      });
    })
    .on("error", (error) => {
      callback(error, null);
    });
}

// Create a new trip
exports.createTrip = async (req, res) => {
  try {
    const { destination } = req.body;

    // Fetch city data
    fetchCityData(destination, (cityError, cityData) => {
      if (cityError) {
        return res.status(404).json({ error: "City not found" });
      }

      // Fetch weather data
      fetchWeatherData(cityData.id, (weatherError, weatherData) => {
        if (weatherError) {
          return res.status(500).json({ error: "Error fetching weather data" });
        }

        // Create a new trip with fetched data
        const trip = new Trip({
          destination,
          locationId: cityData.id,
          weather: weatherData,
          cityInfo: cityData,
        });

        trip.save((saveError, savedTrip) => {
          if (saveError) {
            return res.status(500).json({ error: "Error saving trip" });
          }

          res.status(201).json(savedTrip);
        });
      });
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the trip." });
  }
};
