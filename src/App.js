import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Home from "./Home";
import About from "./About";
import WhatNext from "./WhatNext";
import Timeline from "./Timeline/Timeline";
import Education from "./Education";
import Superpowers from "./Superpowers";
import ScrollToTop from "./ScrollToTop";

const App = () => (
  <div className="grid">
    <Router>
      <ScrollToTop>
        <Navigation />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/timeline">
            <Timeline />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/superpowers">
            <Superpowers />
          </Route>
          <Route path="/what-next">
            <WhatNext />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ScrollToTop>
    </Router>
  </div>
);

export default App;
