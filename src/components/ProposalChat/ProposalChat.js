import React from "react";
import "./style.css";
export default function ProposalChat() {
  return (
    <div
      id="main-chat"
      style={{
        position: "fixed",
        color: "white",
        fontWeight: "bold",
        right: "20px",
        bottom: "0px"
      }}
    >
      <div className="speech-bubble">
        <h3
          style={{
            margin: ".5rem",
            padding: ".7rem",
            textTransform: "uppercase",
            textAlign: "center"
          }}
        >
          request <br /> a proposal
        </h3>
      </div>

      <h1
        style={{
          backgroundColor: "#df4949",
          textAlign: "center",
          marginBottom: 0,
          marginLeft: "auto",
          marginRight: "auto",
          paddingBottom: "2rem",
          paddingTop: "1rem",
          width: "100px",
          fontSize: "1.7rem"
        }}
      >
        Chat
      </h1>
    </div>
  );
}
