import React, { useEffect } from "react";
import "./styles.css";
import FbChat from "../FbChat/FbChat";
import { HashLink } from "react-router-hash-link";
import { useDencrypt } from "use-dencrypt-effect";

export default function LandingContainer(props) {
  const one = useDencrypt();
  const two = useDencrypt();
  const three = useDencrypt();
  const four = useDencrypt();

  const values = ["we", "build", "scalable &", "smart solutions"];

  useEffect(() => {
    const action = setInterval(() => {
      one.dencrypt(values[0]);
    }, 500);
    const action2 = setInterval(() => {
      two.dencrypt(values[1]);
    }, 500);
    const action3 = setInterval(() => {
      three.dencrypt(values[2]);
    }, 500);
    const action4 = setInterval(() => {
      four.dencrypt(values[3]);
    }, 500);
    return () => clearInterval(action, action2, action3, action4);
  }, []);
  return (
    <div className="landing-container">
      <main className="main">
        <div className="main-div">
          <div className="main-div1">
            <FbChat />
            <h1 className="main-div1-h1">
              {one.result}
              <br /> {two.result} <br /> {three.result} <br />
              {four.result}
            </h1>
            <HashLink to="/#about" className="container-chevron">
              <div className="chevron"></div>
              <div className="chevron"></div>
              <div className="chevron"></div>
            </HashLink>
          </div>
        </div>
      </main>
      {props.children}
    </div>
  );
}
