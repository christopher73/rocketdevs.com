import React from "react";
import bg from "../assets/bg.jpg";
import Logo from "../components/Logo/Logo";
export default function Landing() {
  const style = {
    main: {
      background: `url("${bg}")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      // opacity: ".6",
      height: "100vh",
      marginBottom: 0,
      marginLeft: "4rem"
    },
    div: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgb(35, 35, 46,.8)",
      height: "100%"
    },
    h1: {
      textTransform: "uppercase",
      textAlign: "center",
      color: "white",
      width: "75%",
      fontSize: "3.1rem"
    }
  };

  return (
    <main id="main-div" style={style.main}>
      <div style={style.div}>
        <h1 style={style.h1}>Websites That Drive Results.</h1>
      </div>
    </main>
  );
}
