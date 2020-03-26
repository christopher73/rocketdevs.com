import React, { useRef, useState, useEffect } from "react";
import "./styles.css";
import NavBar from "../NavBar/NavBar";
export default function() {
  const style = {
    div: {
      position: "fixed",
      width: " 100vw",
      display: "flex",
      zIndex: 99
    }
  };
  const bgIcon = useRef(null);
  const navDiv = useRef(null);
  const [show, setShow] = useState(false);
  // useEffect(() => {}, []);

  function toggle() {
    show ? setShow(false) : setShow(true);
    bgIcon.current.classList.toggle("change");
  }
  //
  // console.log(bgIcon.current);
  return (
    <div style={style.div} ref={navDiv} className={show ? "show" : "hide"}>
      <div
        ref={bgIcon}
        className="container"
        onClick={() => {
          toggle();
        }}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      {show ? <NavBar></NavBar> : null}
    </div>
  );
}
