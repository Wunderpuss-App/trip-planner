const mongoose = require("mongoose");

const subWeatherSchema = new mongoose.Schema({
  fxDate: Date,
  sunrise: String,
  sunset: String,
  moonrise: String,
  moonset: String,
  moonPhase: String,
  moonPhaseIcon: String,
  tempMax: Number,
  tempMin: Number,
  iconDay: String,
  textDay: String,
  iconNight: String,
  textNight: String,
  wind360Day: String,
  windDirDay: String,
  windScaleDay: String,
  windSpeedDay: Number,
  wind360Night: String,
  windDirNight: String,
  windScaleNight: String,
  windSpeedNight: Number,
  humidity: Number,
  precip: Number,
  pressure: Number,
  vis: Number,
  cloud: Number,
  uvIndex: Number,
});

const tripSchema = new mongoose.Schema({
  destination: String,
  // locationId: String, // the ID Geo API sends back, used to get weather
  weather: [subWeatherSchema],
  cityData: {
    name: String,
    id: String,
    lat: String,
    lon: String,
    adm2: String,
    adm1: String,
    country: String,
    tz: String,
    utcOffset: String,
    isDst: String,
    type: String,
    rank: String,
    fxLink: String,
  },
});

module.exports = mongoose.model("Trip", tripSchema);
