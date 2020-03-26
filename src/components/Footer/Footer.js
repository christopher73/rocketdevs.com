import React from "react";
export default function Footer() {
  const style = {
    div: {
      width: "100vw",
      backgroundColor: "black",
      marginTop: "4rem",
      color: "white"
    },
    h1: {
      margin: "auto",
      textAlign: "center"
    }
  };
  return (
    <div style={style.div}>
      <h1 style={style.h1}>footer</h1>
    </div>
  );
}
