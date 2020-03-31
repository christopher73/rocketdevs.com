import React from "react";
import Services from "../components/Services";
import Forms from "../components/Forms/Forms";
import LandingContainer from "../components/LandingContainer/LandingContainer";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
import ScrollUp from "../components/ScrollUp/ScrollUp";
// import AnimatedBG from "../components/AnimatedBG/AnimatedBG";
export default function Landing() {
  return (
    <LandingContainer>
      <ScrollUp />
      {/* <AnimatedBG/> */}
      <WhoWeAre />
      <Services />
      <Forms />
    </LandingContainer>
  );
}
