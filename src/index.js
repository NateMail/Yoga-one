import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Container, Row } from "react-bootstrap";

ReactDOM.render(
  <Container>
    <Row>
      <App />
    </Row>
  </Container>,
  document.getElementById("root")
);
