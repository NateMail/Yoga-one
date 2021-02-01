import React from "react";
import VerticalNav from "./Navigation/VerticalNav";

const Home = () => {
  return (
    <>
      <VerticalNav />
      <div className="Home">
        <h1 className="Home__text">Home</h1>
      </div>
    </>
  );
};

export default Home;
