import React from "react";

const Ticket = ({ time, activeSpot, setActiveSpot, parking, setParking }) => {
  console.log(activeSpot);
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
    activeSpot.ticket.paid = true;
    setActiveSpot({ ...activeSpot });
  };

  const removeVehicle = () => {
    if (activeSpot.ticket.paid) {
      parking.splice(activeSpot.ticket.id, 1);
      setParking([...parking]);
      setActiveSpot(null);
    } else {
      alert("Please pay before leaving.");
    }
  };

  return (
    <div className="display-container">
      <h2>Ticket</h2>
      <h3>Issued: {activeSpot.ticket.time}:00</h3>
      <div>
        <button
          onClick={() => calculateRate()}
          disabled={activeSpot.ticket.paid}
        >
          Pay Ticket
        </button>
        <button onClick={() => removeVehicle()}>Leave Garage</button>
        <button onClick={() => setActiveSpot(null)}>Back</button>
      </div>
    </div>
  );
};

export default Ticket;
