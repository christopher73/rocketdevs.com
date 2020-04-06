import React from "react";
import "./styles.css";
import FbChat from "../FbChat/FbChat";
import { HashLink } from "react-router-hash-link";
export default function LandingContainer(props) {
  return (
    <div className="landing-container">
      <main className="main">
        <div className="main-div">
          <div className="main-div1">
            <FbChat />
            <h1 className="main-div1-h1">
              we <br /> build <br /> scalable & <br /> smart solutions
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
