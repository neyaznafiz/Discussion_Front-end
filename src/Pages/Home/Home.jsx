import React from "react";
import Discover from "./Discover";
import Banner from "./Banner/Banner";
import Popular from "./Popular";

const Home = () => {
  return (
    <div>
          <Banner />
          <Popular/>
      <Discover />
    </div>
  );
};

export default Home;
