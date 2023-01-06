import React from "react";
import Discover from "./Discover";
import Banner from "./Banner/Banner";
import Popular from "./Popular";
import SideSection from "./SideSection/SideSection";

const Home = () => {
  return (
    <div className="width">
      <Banner />
      <div className="flex gap-x-5">
        <div className="lg:w-[75%] w-full">
          <Popular />
        </div>
        <div className="lg:w-[25%] w-full">
          <SideSection />
        </div>
      </div>
          <Discover />
    </div>
  );
};

export default Home;
