import React from "react";

const Ticket = ({ ticket, setActiveSpot }) => {
  return (
    <div className="display-container">
      <h2>Ticket</h2>
      <h3>Issued: {ticket.time}:00</h3>
      <div>
        <button>Pay Ticket</button>
        <button>Leave Garage</button>
        <button onClick={() => setActiveSpot(null)}>Back</button>
      </div>
    </div>
  );
};

export default Ticket;
