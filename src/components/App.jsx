import React, { useState } from "react";
import Parking from "./Parking";
import Ticket from "./Ticket";
import car from "../assets/car.svg";
import compact from "../assets/compact.svg";
import jeep from "../assets/jeep.svg";
import bus from "../assets/bus.svg";
import truck from "../assets/truck.svg";
import suv from "../assets/suv.svg";

const App = () => {
  const [parking, setParking] = useState([]);
  const [time, setTime] = useState(0);

  const getVehicle = () => {
    const vehicles = [car, compact, jeep, bus, truck, suv];
    const random = (Math.random() * 6) << 0;
    return vehicles[random];
  };

  const park = () => {
    if (parking.length < 6) {
      parking.push({ vehicle: getVehicle(), time: time });
      setParking([...parking]);
    } else {
      alert("Lot is full!");
    }
  };

  const tick = () => {
    setTime(time + 1);
  };

  console.log(parking);

  return (
    <div className="app-container">
      <div className="time-container">
        <h1>{time}:00</h1>
        <button onClick={() => tick()}>▲</button>
      </div>
      <Ticket time={0} />
      <Parking parking={parking} />
      <button onClick={() => park()}>Park Vehicle</button>
    </div>
  );
};

export default App;
