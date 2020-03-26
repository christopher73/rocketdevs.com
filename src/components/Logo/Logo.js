import React from "react";
import "./styles.css";
export default function Logo() {
  return (
    <div
      id="main-logo"
      style={{
        position: "fixed",
        color: "white",
        fontWeight: "bold",
        backgroundColor: "#ef0d33",
        left: "6%"
      }}
    >
      <h1
        id="logo-shadow"
        style={{ marginRight: ".5rem", marginLeft: ".5rem" }}
      >
        RocketDevs
      </h1>
    </div>
  );
}
