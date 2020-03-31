import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Logo from "./components/Logo/Logo";
import Chat from "./components/Chat";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar";
import Ecommerce from "./pages/Services/Ecommerce";
import IntAndMod from "./pages/Services/IntAndMod";
import ITservices from "./pages/Services/ITservices";
import SEOservices from "./pages/Services/SEOservices";
import SoftwareDev from "./pages/Services/SoftwareDev";
import WebDesign from "./pages/Services/WebDesign";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Logo />
        <NavBar />
        <Chat />
        <Footer />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/e-commerce" component={Ecommerce} />
          <Route path="/integration-modernization" component={IntAndMod} />
          <Route path="/it-services" component={ITservices} />
          <Route path="/seo-services" component={SEOservices} />
          <Route path="/software-development" component={SoftwareDev} />
          <Route path="/web-design" component={WebDesign} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
