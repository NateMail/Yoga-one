import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";

const MainRouter = () => (
  <div>
    <Hero />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
    <Footer />
  </div>
);

export default MainRouter;
