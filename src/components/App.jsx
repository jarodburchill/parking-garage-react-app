import React, { useState, useEffect } from "react";
import Parking from "./Parking";
import car from "../assets/car.svg";
import compact from "../assets/compact.svg";
import jeep from "../assets/jeep.svg";
import bus from "../assets/bus.svg";
import truck from "../assets/truck.svg";
import suv from "../assets/suv.svg";

const App = () => {
  const [parking, setParking] = useState([]);

  const getVehicle = () => {
    const vehicles = [car, compact, jeep, bus, truck, suv];
    const random = (Math.random() * 6) << 0;
    return vehicles[random];
  };

  const park = () => {
    if (parking.length < 6) {
      parking.push({ vehicle: getVehicle() });
      setParking([...parking]);
    } else {
      alert("Lot is full!");
    }
  };

  return (
    <div className="app-container">
      <Parking parking={parking} />
      <button onClick={() => park()}>Park Vehicle</button>
    </div>
  );
};

export default App;
