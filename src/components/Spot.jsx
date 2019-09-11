import React from "react";
import Vehikl from "./Vehikl";

const Spot = ({ spot }) => {
  if (spot === "vacant") {
    return <div className="vacant-spot"></div>;
  }

  return (
    <div className="occupied-spot">
      <Vehikl vehikl={spot.vehikl} />
    </div>
  );
};

export default Spot;
