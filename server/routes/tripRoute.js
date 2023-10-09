const express = require("express");
const router = express.Router();
const tripController = require("../controllers/tripController");

// city lookup
// router.post("/search", tripController.createTrip);

// new trip search
router.get("/trip", tripController.getNewTrip, (req, res) => {
  return res.status(200).json(res.locals.trip);
});

// // Get a past trip
// router.get("/trip/:ID", tripController.pastTrip);

// // Update a trip
// router.put("/trip/:ID", tripController.updateTrip);

// // Delete a trip
// router.delete("/trip/:ID", tripController.deleteTrip);

module.exports = router;
