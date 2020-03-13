import React from "react";
import { useTrail, animated } from "react-spring";
import "./styles.css";

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 100, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

export default function AnimatedBG() {
  const [trail, set] = useTrail(3, () => ({
    xy: [150, 150],
    config: i => (i === 0 ? fast : slow)
  }));
  return (
    <>
      {/* <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
          />
        </filter> 
      </svg> */}
      <div
        className="hooks-main"
        onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}
      >
        {trail.map((props, index) => (
          <animated.div
            key={index}
            style={{ transform: props.xy.interpolate(trans) }}
          />
        ))}
      </div>
    </>
  );
}
