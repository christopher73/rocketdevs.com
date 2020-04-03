import React from "react";
import "./styles.css";
import der1 from "../../assets/img/der1.svg";
import der2 from "../../assets/img/der2.svg";
import der3 from "../../assets/img/der3.svg";

export default function WhoWeAre() {
  return (
    <div className="whoweare-div ">
      <h1 className="whoweare-h1">
        Design <img className="img-svg" src={der2} alt="der2" />
        <br />
        Results <img className="img-svg" src={der1} alt="der1" /> <br />
        Growth <img className="img-svg" src={der3} alt="der3" />
      </h1>
      <p>
        <span className="whoweare-wrd">RocketDevs </span>is the custom software
        development partner of choice for companies that want to optimize their
        business processes and customer experiences with efficient, secure and
        reliable software application solutions. Whether you need to update and
        integrate legacy systems with leading-edge technologies or design and
        build custom software solutions from the ground up, RocketDevs is the
        team to rely upon. Whatever your software application need, we are a
        fully committed, energetic team of kick-ass analysts, designers,
        developers, and project managers with one goal in mind -- helping our
        clients and their products shine.
      </p>
    </div>
  );
}
