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
  const [activeTicket, setActiveTicket] = useState(null);
  const [time, setTime] = useState(0);

  const getVehicle = () => {
    const vehicles = [car, compact, jeep, bus, truck, suv];
    const random = (Math.random() * 6) << 0;
    return vehicles[random];
  };

  const park = () => {
    if (parking.length < 6) {
      parking.push({ vehicle: getVehicle(), ticket: { time: time } });
      setParking([...parking]);
    } else {
      alert("Lot is full!");
    }
  };

  const tick = () => {
    setTime(time + 1);
  };

  const getDisplay = () => {
    if (activeTicket === null) {
      return (
        <div className="time-container">
          <h1>{time}:00</h1>
          <button onClick={() => tick()}>▲</button>
        </div>
      );
    } else {
      return (
        <Ticket
          time={activeTicket.ticket.time}
          setActiveTicket={setActiveTicket}
        />
      );
    }
  };

  console.log(parking);
  console.log(activeTicket);

  return (
    <div className="app-container">
      {getDisplay()}
      <Parking parking={parking} setActiveTicket={setActiveTicket} />
      <button onClick={() => park()}>Park Vehicle</button>
    </div>
  );
};

export default App;
