import React from "react";
import car from "../assets/car.svg";
import compact from "../assets/compact.svg";
import jeep from "../assets/jeep.svg";
import bus from "../assets/bus.svg";
import truck from "../assets/truck.svg";
import suv from "../assets/suv.svg";

function Vehikl() {
  const getVehikl = () => {
    const vehikls = [car, compact, jeep, bus, truck, suv];
    const random = Math.floor(Math.random() * 6);
    return vehikls[random];
  };

  return (
    <div>
      <img src={getVehikl()} alt="vehikl" />
    </div>
  );
}

export default Vehikl;
