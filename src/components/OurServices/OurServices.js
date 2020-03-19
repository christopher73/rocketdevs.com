import React from "react";
import { serviceInfo } from "./servicesData";

function serviceDivChildrem(service) {
  return (
    <div
      style={{
        width: "40%",
        background: "rgba(35, 35, 46, 0.96)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "2rem",
        marginBottom: "2rem"
      }}
    >
      <h1
        style={{
          margin: 4,
          textAlign: "center",
          color: "white",
          fontWeight: "bold"
        }}
      >
        {service.title}
      </h1>
      <p
        style={{
          marginBottom: "1rem",
          lineHeight: 1.85,
          fontWeight: "lighter",
          display: "block",
          textAlign: "center"
        }}
      >
        {service.description}
      </p>
      <button
        style={{
          marginTop: "auto",
          // alignSelf: "flex-end",
          padding: "5px 15px",
          pointerEvents: "auto",
          fontSize: "1.2rem"
        }}
      >
        Learn More ...
      </button>
    </div>
  );
}

export default function OurServices() {
  const style = {
    div: {
      marginTop: "2rem"
    },
    divP: {
      width: "80%",
      marginLeft: "auto"
    },
    title: {
      textAlign: "left",
      background: "#23232e",
      color: "white",
      right: 0,
      padding: "1rem",
      fontSize: "2rem",
      fontWeight: "bold"
      // marginBottom: 0
    },
    serviceMainDiv: {
      display: "flex",
      flexWrap: "wrap",
      // justifyContent: "center",
      justifyContent: "space-between",
      // padding: "2rem",
      marginRight: "2rem",
      marginTop: "2rem"
    }
  };
  return (
    <div className="landing-mai-div" style={style.div}>
      <div style={style.divP}>
        <h1 className="mai-title" style={style.title}>
          What we do ?
        </h1>
        <div style={style.serviceMainDiv}>
          {serviceInfo.map((elem, i) => serviceDivChildrem(elem))}
        </div>
      </div>
    </div>
  );
}
