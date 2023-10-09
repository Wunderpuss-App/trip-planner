const express = require("express");
const router = express.Router();
const tripController = require("../controllers/tripController");

// city lookup
router.post("/search", tripController.newTrip);

// Get a past trip
router.get("/trip/:ID", tripController.pastTrip);

// Update a trip
router.put("/:ID", tripController.updateTrip);

// Delete a trip
router.delete("/:ID", tripController.deleteTrip);

module.exports = router;
