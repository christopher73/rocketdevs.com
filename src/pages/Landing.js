import React from "react";
import bg from "../assets/bg.jpg";
import WhyUs from "../components/WhyUs/WhyUs";
import OurServices from "../components/OurServices/OurServices";
// import AnimatedBG from "../components/AnimatedBG/AnimatedBG";
export default function Landing() {
  const style = {
    landing: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flexStart",
      marginLeft: "4rem"
    },

    main: {
      display: "flex",
      height: "100vh",
      // width: "100vw",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 0
    },
    mainDiv: {
      background: `url("${bg}")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      // backgroundSize: "90% 90%",
      // backgroundColor: "rgb(35, 35, 46,.85)",
      height: "90vh",
      width: "87vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    mainDivH1: {
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgb(35, 35, 46,.85)"
    },
    mainH1: {
      textTransform: "uppercase",
      textAlign: "center",
      color: "white",
      fontSize: "3.1rem"
    }
  };

  return (
    <div id="landing" style={style.landing}>
      <main id="landing-main" style={style.main}>
        <div style={style.mainDiv}>
          <div style={style.mainDivH1}>
            <h1 id="main-h1" style={style.mainH1}>
              we build scalable & smart solutions that lives on the cloud
            </h1>
          </div>
        </div>
      </main>
      <WhyUs />
      <OurServices />
      {/* <AnimatedBG></AnimatedBG> */}
    </div>
  );
}
