import React from "react";
import { serviceInfo } from "./servicesData";

function serviceDivChildrem(service) {
  return (
    <div
      style={{
        border: "solid black 1px",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "20px"
        // margin: 10
      }}
    >
      <h1
        style={{
          margin: 0,
          padding: "1rem",
          fontSize: "1.2rem"
        }}
      >
        {service.title}
      </h1>
      <p
        style={{
          margin: 0,
          padding: "1rem",
          fontSize: "1.2rem"
        }}
      >
        {service.description}
      </p>
    </div>
  );
}

export default function OurServices() {
  const style = {
    h1: {
      textAlign: "center"
    },
    serviceMainDiv: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flexStart",
      flexGrow: "1",
      flexWrap: "wrap",
      // alignContent: "center",
      alignItems: "center"
    }
  };
  return (
    <div>
      <h1 style={style.h1}> WHO WE ARE</h1>
      <div style={style.serviceMainDiv}>
        {serviceInfo.map((elem, i) => serviceDivChildrem(elem))}
      </div>
    </div>
  );
}
