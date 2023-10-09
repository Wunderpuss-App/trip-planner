import React from 'react';

const Footer = (props) => {
  const { deleteTrip, saveTrip, trip } = props;

  return (
    <div id="footer">
      {'_id' in trip ? (
        <button className="submit" onClick={(event) => deleteTrip(event, _id)}>
          Delete Trip
        </button>
      ) : (
        <></>
      )}
      <button className="submit" onClick={(event) => saveTrip(event, trip)}>
        Save Trip
      </button>
    </div>
  );
};

export default Footer;
