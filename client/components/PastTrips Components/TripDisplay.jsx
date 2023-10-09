import React from 'react';

const TripDisplay = (props) => {
  const { trip, reviewTrip, deleteTrip, index } = props;
  const { destination, _id } = trip;

  return (
    <div className="trip">
      <div className="trip-header">
        <h3>{destination.toUpperCase()}</h3>
      </div>
      <hr className="line"></hr>
      <div className="buttonsReview">
        {/* <p className="tripInfo">Dates: </p> */}
        <button
          className="reviewBtn"
          onClick={(event) => reviewTrip(event, trip)}
        >
          Review Trip
        </button>
        <button
          className="deleteBtn"
          onClick={(event) => deleteTrip(event, _id)}
        >
          Delete Trip
        </button>
      </div>
    </div>
  );
};

export default TripDisplay;
