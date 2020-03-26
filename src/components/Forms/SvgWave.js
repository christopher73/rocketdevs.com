import React from "react";
import "./styles.css";
export default function SvgWave(props) {
  return (
    <>
      <svg
        className="editorial"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 
58-18 88-18s
58 18 88 18 
58-18 88-18 
58 18 88 18
v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="50" y="0" fill="#8F8EBF" />
          <use xlinkHref="#gentle-wave" x="50" y="3" fill="#4F4D8C" />
          <use xlinkHref="#gentle-wave" x="50" y="6" fill="#474073" />
        </g>
      </svg>
      <div className="content">{props.children}</div>
    </>
  );
}
