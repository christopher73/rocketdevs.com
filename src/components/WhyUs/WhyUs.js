import React from "react";
export default function WhyUs() {
  const style = {
    div: {
      marginTop: "2rem"
      // width: "98vw"
    },
    divP: {
      textAlign: "center",
      width: "75%",
      marginRight: "auto"
    },
    title: {
      textAlign: "right",
      background: "#23232e",
      color: "white",
      // position: "relative",
      left: 0,
      padding: "2rem"
    },
    desc: {
      color: "white",
      lineHeight: 1.6,
      background: "#141418",
      padding: "4rem",
      textAlign: "left",
      marginLeft: "2rem",
      marginTop: "2rem"
    }
  };

  return (
    <div style={style.div}>
      <div id="why-us" style={style.divP}>
        <h1 style={style.title}> Who we are ?</h1>
        <h2 style={style.desc}>
          Troy Web Consulting is the custom software development partner of
          choice for companies that want to optimize their business processes
          and customer experiences with efficient, secure and reliable software
          application solutions. Whether you need to update and integrate legacy
          systems with leading-edge technologies or design and build custom
          software solutions from the ground up, Troy Web Consulting is the team
          to rely upon. Whatever your software application need, we are a fully
          committed, energetic team of kick-ass analysts, designers, developers,
          and project managers with one goal in mind -- helping our clients and
          their products shine.
        </h2>
      </div>
    </div>
  );
}
