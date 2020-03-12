import React from "react";
export default function Logo() {
  return (
    <div
      id="main-logo"
      style={{
        position: "fixed",
        color: "white",
        fontWeight: "bold",
        backgroundColor: "#df4949",
        // backgroundColor: "#23232e",
        marginLeft: "6rem"
        // marginTop: "1.5rem"
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
