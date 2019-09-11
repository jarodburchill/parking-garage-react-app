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
  const [activeSpot, setActiveSpot] = useState(null);
  const [time, setTime] = useState(0);

  const getVehicle = () => {
    const vehicles = [car, compact, jeep, bus, truck, suv];
    const random = (Math.random() * 6) << 0;
    return vehicles[random];
  };

  const park = () => {
    if (parking.length < 6) {
      parking.push({
        vehicle: getVehicle(),
        ticket: { id: parking.length, time: time, paid: false }
      });
      setParking([...parking]);
    } else {
      alert("Lot is full!");
    }
  };

  const tick = () => {
    setTime(time + 1);
  };

  const getDisplay = () => {
    if (activeSpot === null) {
      return (
        <div className="display-container">
          <div className="time-container">
            <h1>{time}:00</h1>
            <button onClick={() => tick()}>▲</button>
          </div>
          <button onClick={() => park()}>Park Vehicle</button>
        </div>
      );
    } else {
      return (
        <Ticket
          ticket={activeSpot.ticket}
          time={time}
          activeSpot={activeSpot}
          setActiveSpot={setActiveSpot}
        />
      );
    }
  };

  console.log(parking);

  return (
    <div className="app-container">
      {getDisplay()}
      <Parking parking={parking} setActiveSpot={setActiveSpot} />
    </div>
  );
};

export default App;
