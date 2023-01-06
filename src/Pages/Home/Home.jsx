import React from "react";
import Discover from "./Discover";
import Banner from "./Banner/Banner";
import Popular from "./Popular";
import SideSection from "./SideSection/SideSection";
import PopularPosts from "./PopularPosts";
import LifeStyle from "./LifeStyle";
import Music from "./Music";

const Home = () => {
  return (
    <div className="width">
      <Banner />
      <div className="lg:flex gap-x-5">
        <div className="lg:w-[75%] w-full">
          <Popular />
          <PopularPosts />
          <LifeStyle />
          <Music/>
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
