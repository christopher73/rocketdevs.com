import React from "react";
import bg from "../assets/bg.jpg";
export default function Landing() {
  const style = {
    main: {
      background: `url("${bg}")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      opacity: ".6",
      height: "100vh",
      marginBottom: 0,
      marginLeft: "4rem"
    },
    div: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(130, 130, 130, 0.2)",
      height: "100%"
    },
    h1: {
      textAlign: "center",
      color: "white",
      width: "50%"
    }
  };

  return (
    <main style={style.main}>
      <div style={style.div}>
        <h1 style={style.h1}>
          MORE THAN JUST A BEAUTIFUL DESIGN, OUR WEBSITES ARE BUILT FOR TURNING
          VISITORS INTO CUSTOMERS
        </h1>
      </div>
    </main>
  );
}
