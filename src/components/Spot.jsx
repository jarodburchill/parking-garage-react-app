import React from "react";
import Vehicle from "./Vehicle";

const Spot = ({ spot }) => {
  if (spot === "vacant") {
    return <div className="vacant-spot"></div>;
  }

  return (
    <div className="occupied-spot">
      <Vehicle vehicle={spot.vehicle} />
    </div>
  );
};

export default Spot;
