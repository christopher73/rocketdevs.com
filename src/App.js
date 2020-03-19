import React from "react";
import Landing from "./pages/Landing";
import NavBar from "./components/NavBar/NavBar";
import Logo from "./components/Logo/Logo";
import ProposalChat from "./components/ProposalChat/ProposalChat";
import Footer from "./components/Footer/Footer";
// import AnimatedBG from "./components/AnimatedBG/AnimatedBG";
function App() {
  return (
    <React.Fragment>
      {/* <AnimatedBG /> */}
      <Logo />
      <NavBar />
      <Landing />
      <Footer />
      <ProposalChat />
    </React.Fragment>
  );
}

export default App;
