import React from 'react';

const TripDisplay = (props) => {
  const { trip, reviewTrip, deleteTrip, index } = props;
  const { destination, _id } = trip;

  return (
    <div className="trip">
      <div className="trip-header">
        <h3>{destination}</h3>
      </div>
      <hr className="line"></hr>
      <p className="tripInfo">Dates: </p>
      <button className="review" onClick={(event) => reviewTrip(event, trip)}>
        Review Trip
      </button>
      <button className="delete" onClick={(event) => deleteTrip(event, _id)}>
        Delete Trip
      </button>
    </div>
  );
};

export default TripDisplay;
