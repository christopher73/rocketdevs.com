import React, { useState } from "react";
import "./styles.css";
import der1 from "../../assets/img/der1.svg";
import der2 from "../../assets/img/der2.svg";
import der3 from "../../assets/img/der3.svg";
import { useDencrypt } from "use-dencrypt-effect";
import { useInterval } from "../../utils/useInterval";
import ScrollTrigger from "react-scroll-trigger";
function Letters() {
  const values = ["Design ", "Results", "Growth"];
  const one = useDencrypt();
  const two = useDencrypt();
  const three = useDencrypt();
  useInterval(() => one.dencrypt(values[0]), 500);
  useInterval(() => two.dencrypt(values[1]), 500);
  useInterval(() => three.dencrypt(values[2]), 500);
  return (
    <h1 className="whoweare-h1">
      {one.result} <img className="img-svg" src={der2} alt="der2" />
      <br />
      {two.result}
      <img className="img-svg" src={der1} alt="der1" /> <br />
      {three.result} <img className="img-svg" src={der3} alt="der3" />
    </h1>
  );
}
export default function WhoWeAre() {
  const [showDiv, setshowDiv] = useState(false);
  let onEnterViewport = () => setshowDiv(true);

  return (
    <div style={{ paddingTop: "5.7rem" }} className="whoweare-div" id="about">
      <ScrollTrigger onEnter={onEnterViewport}>
        {showDiv === true ? <Letters></Letters> : null}
      </ScrollTrigger>

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
