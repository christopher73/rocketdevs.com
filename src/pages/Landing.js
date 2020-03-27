import React from "react";
// import WhyUs from "../components/WhyUs/WhyUs";
import OurServices from "../components/OurServices";
import Forms from "../components/Forms/Forms";
import LandingContainer from "../components/LandingContainer/LandingContainer";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
// import AnimatedBG from "../components/AnimatedBG/AnimatedBG";
export default function Landing() {
  return (
    <LandingContainer>
      {/* <AnimatedBG/> */}
      <WhoWeAre />
      <OurServices />
      <Forms />
    </LandingContainer>
  );
}
