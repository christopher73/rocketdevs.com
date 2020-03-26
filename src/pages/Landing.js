import React from "react";
import bg from "../assets/bg.jpg";
import WhyUs from "../components/WhyUs/WhyUs";
import OurServices from "../components/OurServices";
import AnimatedBG from "../components/AnimatedBG/AnimatedBG";
import Forms from "../components/Forms/Forms";
export default function Landing() {
  const style = {
    landing: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flexStart"
    },

    main: {
      display: "flex",
      height: "100vh",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 0
    },
    mainDiv: {
      background: `url("${bg}")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      height: "100vh",
      width: "100%",
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
      backgroundColor: "rgba(25, 30, 50, 0.9)" //SAVE!!!
    },
    mainH1: {
      color: "#fff",
      textTransform: "uppercase",
      textShadow: "0 1px 0 rgba(white, .1)",
      width: "75%",
      textTransform: "uppercase",
      textAlign: "left",
      fontSize: "6.1rem",
      fontWeight: "lighter"
    }
  };

  return (
    <div id="landing" style={style.landing}>
      <main id="landing-main" style={style.main}>
        <div style={style.mainDiv}>
          <div style={style.mainDivH1}>
            <h1 id="main-h1" style={style.mainH1}>
              we <br /> build <br /> scalable & <br /> smart solutions
            </h1>
          </div>
        </div>
      </main>
      <WhyUs />
      <OurServices />

      <Forms />

      {/* <AnimatedBG /> */}
    </div>
  );
}
