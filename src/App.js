import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer/Footer";
import IntAndMod from "./pages/Services/IntAndMod";
import SEOservices from "./pages/Services/SEOservices";
import SoftwareDev from "./pages/Services/SoftwareDev";
import WebDesign from "./pages/Services/WebDesign";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import "./assets/css/index.css";
import Portfolio from "./pages/Portfolio";
import FbChat from "./components/FbChat/FbChat";

// import { Helmet } from "react-helmet";

import Resources from "./pages/Resources";

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <FbChat />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/resources" component={Resources} />
          <Route path="/integration-modernization" component={IntAndMod} />
          <Route path="/seo-services" component={SEOservices} />
          <Route path="/software-development" component={SoftwareDev} />
          <Route path="/web-design" component={WebDesign} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-and-conditions" component={TermsAndConditions} />
        </Switch>
        <Footer hideLogo={true} hideText={false} />
      </Router>
    </React.Fragment>
  );
}
/***
 * ******NOT CURRENTLY IN USED
 * import Chat from "./components/Chat";
 * import Ecommerce from "./pages/Services/Ecommerce";
 * import ITservices from "./pages/Services/ITservices";
 * <Chat />
 * <Route path="/it-services" component={ITservices} />
 * Route path="/e-commerce" component={Ecommerce} />
 * import Footer from "./components/Footer/Footer";
 * <Footer />
 */
