const express = require("express");
const router = express.Router();
const tripController = require("../controllers/tripController");

// save trip to database
router.post("/trip", tripController.createTrip, (req, res) => {
  console.log("sending response back to client from GET /trip request");
  return res.status(200).json(res.locals.savedTrip);
});

// new trip search
router.get("/search/:destination", tripController.getNewTrip, (req, res) => {
  return res.status(200).json(res.locals.trip);
});

// Get past trip
router.get("/trip/:id", tripController.pastTrip, (req, res) => {
  return res.status(200).json(res.locals.pastTrip);
});

// Get past trips
router.get("/trip", tripController.pastTrips, (req, res) => {
  return res.status(200).json(res.locals.pastTrips);
});

// // Update a trip
// router.put("/trip/:ID", tripController.updateTrip);

// Delete a trip
router.delete("/trip/:id", tripController.deleteTrip, (req, res) => {
  return res.status(200).json(res.locals.deletedTrip);
});

module.exports = router;
