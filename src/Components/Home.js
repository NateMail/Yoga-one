import React from "react";
import VerticalNav from "./Navigation/VerticalNav";
import Top from "./Top";
import About from "./About";
import Classes from "./Classes";
import Price from "./Price";
import Schedule from "./Schedule";

const Home = () => {
  return (
    <>
      <VerticalNav />
      <div className="Home">
        <Top />
        <About />
        <Classes />
        <Schedule />
        <Price />
      </div>
    </>
  );
};

export default Home;
