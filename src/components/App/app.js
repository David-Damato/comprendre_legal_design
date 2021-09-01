import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Accueil from "../Accueil/accueil";
import Cours from "../Cours/cours";
import Footer from "../Footer/footer";
import SavoirPlus from "../SavoirPlus/savoirPlus";
import "./App.css";

export default function App() {
  return (
    <>
      <Router>
        <div className="websiteBody">
          <Switch>
            <Route exact path="/" component={Accueil} />
            <Route exact path="/cours" component={Cours} />
            <Route exact path="/savoirplus" component={SavoirPlus} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}
