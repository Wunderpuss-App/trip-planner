const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

// require route here
const tripRouter = require('./routes/tripRoute');
// define middleware
app.use('/api', tripRouter);

//mongodb setup. Password: 111
const mongoose = require('mongoose');
const mongoURI =
  'mongodb+srv://gabspg:BVlWgFEiCfj6Lg73@trip-planner.xvjzuly.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'trip-planner',
});

// Check for successful database connection
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

// serve index.html on the route '/'
app.get('/api', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
}); //listens on port 3000 -> http://localhost:3000/

module.exports = app;
