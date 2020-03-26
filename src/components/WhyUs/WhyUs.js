import React from "react";
import { styles } from "./styles";
export default function WhyUs() {
  return (
    <div className="landing-mai-div" style={styles.div}>
      <div style={styles.desc}>
        {" "}
        <h1 className="main-title" style={styles.title}>
          Who we are ?
        </h1>{" "}
        <p>
          {/* {" "}
          <div className="box">
            <div className="wave -three"> </div>{" "}
          </div>{" "} */}
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
      </div>{" "}
    </div>
  );
}
