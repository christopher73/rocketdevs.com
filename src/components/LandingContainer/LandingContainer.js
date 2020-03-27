import React from "react";
import "./styles.css";
export default function LandingContainer(props) {
  return (
    <div className="landing-container">
      <main className="main">
        <div className="main-div">
          <div className="main-div1">
            <h1 className="main-div1-h1">
              we <br /> build <br /> scalable & <br /> smart solutions
            </h1>
          </div>
        </div>
      </main>
      {props.children}
    </div>
  );
}
