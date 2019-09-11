import React from "react";

const Ticket = ({ time }) => {
  return (
    <div className="ticket-container">
      <h2>Ticket</h2>
      <h3>Issued: {time}:00</h3>
    </div>
  );
};

export default Ticket;
