import React from "react";
import { useSpring, animated } from "react-spring";
import "./styles.css";
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 40,
  (x - window.innerWidth / 2) / 40,
  1
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
export default function(service, i) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 80, tension: 350, friction: 40 }
  }));

  return (
    <animated.div
      key={i}
      className="services-childrens-div"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <div className="services-svg">{service.svg}</div>
      <h1 className="services-h1">{service.title}</h1>
      <p className="services-childrens-p">{service.description}</p>
      <button className="services-childrens-button">Learn More ...</button>
    </animated.div>
  );
}
