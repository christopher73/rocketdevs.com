import React from "react";
import ShowCase from "../components/ShowCase/ShowCase";
import Forms from "../components/Forms/Forms";
import Logo from "../components/Logo/Logo";
import ScrollUp from "../components/ScrollUp/ScrollUp";

export default function Portfolio() {
  return (
    <div>
      <ScrollUp />
      <Logo />
      <div className="whoweare-div">
        <h3 className="about-me-left-title">Portfolio</h3>
        <h3>We're proud of our work and want to show it off to you.</h3>
        <h5>
          At <span className="whoweare-wrd">RocketDevs </span>, we work with the
          best. With over ten years of Javascript experience. We invest deeply
          in a client’s success and work to build an ongoing relationship from
          which all sides benefit. We begin by helping a client to realize their
          goals, both long and short term. From there, we lay out a plan of
          action which will be followed and built upon thought our journey
          towards success. Results will speak to the soundness of our promises
          as clients achieve growth in size, revenue, and client base. Take a
          look at our body of work below.
        </h5>
        <h1>Our Work</h1> <ShowCase />
      </div>{" "}
      <Forms />
    </div>
  );
}
