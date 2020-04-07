import React, { useRef, useState, useEffect } from "react";
import "./styles.css";
import NavBar from "./NavBar";
export default function () {
  const bgIcon = useRef(null);
  // const navDiv = useRef(null);
  const [show, setShow] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  function toggle() {
    show ? setShow(false) : setShow(true);
    bgIcon.current.classList.toggle("change");
  }

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  // console.log(scrolling);

  return (
    <div
      className={`nav-bar-container
       ${show ? "show" : "hide"} 
       ${!scrollTop ? "bgOff" : "bgOn"} `}
    >
      {show ? null : (
        <div className="phone-num-div">
          <a className="phone-num-div-a" href="tel:123-456-7890">
            {" "}
            <div className="phone-num-svg">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="phone-alt"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="svg-inline--fa fa-phone-alt fa-w-16 fa-2x"
              >
                <path
                  fill="currentColor"
                  d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                  className=""
                ></path>
              </svg>
            </div>
            <h1 className="phone-num-svg-num">123-456-7890</h1>
          </a>
        </div>
      )}
      <div ref={bgIcon} className="burger-icon" onClick={() => toggle()}>
        <div className="bar1" />
        <div className="bar2" />
        <div className="bar3" />
      </div>
      {show ? <NavBar show={toggle} /> : null}
    </div>
  );
}