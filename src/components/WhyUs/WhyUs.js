import React from "react";
export default function WhyUs() {
  const style = {
    div: {
      marginTop: "5%"
      // width: "98vw"
    },
    h1: {
      textAlign: "left",
      background: "red",
      // position: "relative",
      left: 0,
      padding: "2rem"
    },
    divP: { textAlign: "center", width: "75%", margin: "0" }
  };

  return (
    <div style={style.div}>
      <div id="why-us" style={style.divP}>
        <h1 style={style.h1}> WHO WE ARE</h1>
        <h1
          style={{
            color: "white",
            background: "black",
            padding: "4rem",
            textAlign: "left",
            marginLeft: "2rem",
            marginTop: "2rem"
          }}
        >
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
        </h1>
      </div>
    </div>
  );
}
