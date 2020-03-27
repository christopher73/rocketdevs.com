import React, { useRef, useState } from "react";
import "./styles.css";
import NavBar from "./NavBar";
export default function() {
  const bgIcon = useRef(null);
  // const navDiv = useRef(null);
  const [show, setShow] = useState(false);
  function toggle() {
    show ? setShow(false) : setShow(true);
    bgIcon.current.classList.toggle("change");
  }
  return (
    <div className={`nav-bar-container ${show ? "show" : "hide"}`}>
      <div ref={bgIcon} className="burger-icon" onClick={() => toggle()}>
        <div className="bar1" />
        <div className="bar2" />
        <div className="bar3" />
      </div>
      {show ? <NavBar /> : null}
    </div>
  );
}
