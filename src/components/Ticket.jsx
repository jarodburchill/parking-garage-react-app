import React, { useState, useEffect } from "react";

const Ticket = ({ time, activeSpot, setActiveSpot, parking, setParking }) => {
  const [pay, setPay] = useState(false);

  useEffect(() => {
    setPay(false);
  }, [activeSpot]);

  //calculates amount owed and sets ticket status to paid
  const calculateRate = () => {
    const hours = time - activeSpot.ticket.time;
    let amountOwed = 0;
    if (hours <= 1) {
      amountOwed = 3;
    } else if (hours <= 3) {
      amountOwed = 6;
    } else if (hours <= 6) {
      amountOwed = 12;
    } else {
      amountOwed = 24;
    }
    alert(`You paid $${amountOwed}.00 for your ${hours} hours of parking.`);
    removeVehicle();
  };

  //removes vehicle by ticket id if the ticket has been paid
  const removeVehicle = () => {
    var index = parking.findIndex(e => e.ticket.id === activeSpot.ticket.id);
    parking.splice(index, 1);
    setParking([...parking]);
    setActiveSpot(null);
  };

  const getPayButton = () => {
    if (pay) {
      return <button onClick={() => calculateRate()}>Pay Ticket</button>;
    }
  };

  return (
    <div className="display-container">
      <h2>Ticket</h2>
      <h3>Issued: {activeSpot.ticket.time}:00</h3>
      <div>
        <button onClick={() => setPay(true)} disabled={pay}>
          Leave Garage
        </button>
        <button onClick={() => setActiveSpot(null)}>Back</button>
        <div>{getPayButton()}</div>
      </div>
    </div>
  );
};

export default Ticket;
