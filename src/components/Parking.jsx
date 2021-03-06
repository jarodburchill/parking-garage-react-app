import React from "react";
import Spot from "./Spot";

const Parking = ({ parking, activeSpot, setActiveSpot }) => {
  let blanks = [];

  //adds correct number of blank parking spots to an array
  if (parking.length < 6) {
    for (let i = 0; i < 6 - parking.length; i++) {
      blanks.push(i);
    }
  }

  return (
    <div className="garage-container">
      {parking.map((spot, index) => {
        return (
          <Spot
            key={index}
            spot={spot}
            activeSpot={activeSpot}
            setActiveSpot={setActiveSpot}
          />
        );
      })}
      {blanks.map(id => {
        return <Spot key={id} spot={"vacant"} />;
      })}
    </div>
  );
};

export default Parking;
