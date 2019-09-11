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

  const getVehikl = () => {
    const vehikls = [car, compact, jeep, bus, truck, suv];
    const random = Math.floor(Math.random() * 6);
    return vehikls[random];
  };

  const park = () => {
    if (parking.length < 6) {
      parking.push({ vehikl: getVehikl() });
      setParking([...parking]);
    } else {
      alert("Lot is full!");
    }
  };

  return (
    <div className="app-container">
      <Parking parking={parking} />
      <button onClick={() => park()}>Add car</button>
    </div>
  );
};

export default App;
