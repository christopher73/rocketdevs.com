import React from "react";
import { data } from "./servicesData";
import serviceDivChildren from "./servicceDivChildren";

export default function() {
  return (
    <div className="services-main-container">
      <h1 className="services-main-title">What we do ?</h1>
      <div className="services-main-div">
        {data.map((elem, i) => serviceDivChildren(elem, i, false, true))}
      </div>
    </div>
  );
}
