import React from "react";
export default function WhyUs() {
  const style = {
    div: {
      marginTop: "2rem"
    },
    divP: {
      width: "80%",
      marginRight: "auto"
    },
    title: {
      textAlign: "right",
      background: "#23232e",
      color: "white",
      left: 0,
      padding: "1rem",
      fontSize: "2rem",
      fontWeight: "bold"
    },
    desc: {
      color: "white",
      lineHeight: 1.85,
      background: "rgba(35, 35, 46, 0.96)",
      textAlign: "left",
      padding: "2rem",
      marginLeft: "2rem",
      marginTop: "2rem"
    }
  };

  return (
    <div className="landing-mai-div" style={style.div}>
      <div style={style.divP}>
        <h1 className="mai-title" style={style.title}>
          Who we are ?
        </h1>
        <p style={style.desc}>
          RocketDevs is the custom software development partner of choice for
          companies that want to optimize their business processes and customer
          experiences with efficient, secure and reliable software application
          solutions. Whether you need to update and integrate legacy systems
          with leading-edge technologies or design and build custom software
          solutions from the ground up, RocketDevs is the team to rely upon.
          Whatever your software application need, we are a fully committed,
          energetic team of kick-ass analysts, designers, developers, and
          project managers with one goal in mind -- helping our clients and
          their products shine.
        </p>
      </div>
    </div>
  );
}
