import React from "react";
import Vehicle from "./Vehicle";

const Spot = ({ spot, setActiveTicket }) => {
  if (spot === "vacant") {
    return <div className="vacant-spot"></div>;
  }

  return (
    <div
      className="occupied-spot"
      onClick={() => setActiveTicket(spot)}
      tabIndex="0"
    >
      <Vehicle vehicle={spot.vehicle} />
    </div>
  );
};

export default Spot;
