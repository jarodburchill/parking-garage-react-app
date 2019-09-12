import React from "react";
import Vehicle from "./Vehicle";

const Spot = ({ spot, activeSpot, setActiveSpot }) => {
  let style = "occupied-spot";

  // sets selected style to the active parking spot
  if (activeSpot !== undefined && activeSpot !== null) {
    if (spot.ticket.id === activeSpot.ticket.id) {
      style = "selected-spot";
    }
  }

  if (spot === "vacant") {
    return <div className="vacant-spot"></div>;
  }
  return (
    <div className={style} onClick={() => setActiveSpot(spot)}>
      <Vehicle vehicle={spot.vehicle} />
    </div>
  );
};

export default Spot;
