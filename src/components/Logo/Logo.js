import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
export default function Logo() {
  return (
    <Link
      to="/"
      id="main-logo"
      style={{
        textDecoration: "none",
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
    </Link>
  );
}
