import React from "react";
import Spot from "./Spot";

const Parking = ({ parking }) => {
  let blanks = [];

  if (parking.length < 6) {
    for (let i = 0; i < 6 - parking.length; i++) {
      blanks.push(i);
    }
  }
  return (
    <div className="garage-container">
      {parking.map((spot, index) => {
        return <Spot key={index} spot={spot} />;
      })}
      {blanks.map(id => {
        return <Spot key={id} spot={"vacant"} />;
      })}
    </div>
  );
};

export default Parking;
