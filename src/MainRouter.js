import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

const MainRouter = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
    <Footer />
  </div>
);

export default MainRouter;
