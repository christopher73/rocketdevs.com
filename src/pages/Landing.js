import React from "react";
import Services from "../components/Services";
import Forms from "../components/Forms/Forms";
import LandingContainer from "../components/LandingContainer/LandingContainer";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
import ScrollUp from "../components/ScrollUp/ScrollUp";
// import AnimatedBG from "../components/AnimatedBG/AnimatedBG";
import { Helmet } from "react-helmet";

export default function Landing() {
  return (
    <LandingContainer>
      <Helmet>
        <title>RocketDevs | Web Solutions</title>
        <meta
          name="description"
          content="ROCKETDEVS is the custom software development partner of choice for companies that want to optimize their business processes and customer experiences with efficient, secure and reliable software application solutions."
        />
      </Helmet>
      <ScrollUp />
      {/* <AnimatedBG/> */}
      <WhoWeAre />
      <Services />
      <Forms />
    </LandingContainer>
  );
}
