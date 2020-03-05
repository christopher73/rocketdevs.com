import React from "react";
import Landing from "./pages/Landing";
import NavBar from "./components/NavBar/NavBar";
import Logo from "./components/Logo/Logo";
import ProposalChat from "./components/ProposalChat/ProposalChat";
function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Logo />
      <ProposalChat />
      <Landing></Landing>
    </React.Fragment>
  );
}

export default App;
