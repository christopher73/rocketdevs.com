import React from "react";
import Landing from "./pages/Landing";
import Logo from "./components/Logo/Logo";
import ProposalChat from "./components/ProposalChat/ProposalChat";
// import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar";
import AnimatedBG from "./components/AnimatedBG/AnimatedBG";
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <AnimatedBG />
      <Logo />
      <Landing />
      {/* <Footer /> */}
      <ProposalChat />
    </React.Fragment>
  );
}

export default App;
