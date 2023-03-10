import React from "react";
import SocialMedia from "./SocialMedia";
import Subscribe from "./Subscribe";
import addImg from "../../../Assets/sidebar-banner-new.jpg";
import TikTok from "./TikTok";
import Category from "./Category";
import Gallery from "./Gallery";

const SideSection = () => {
  return (
    <div className="">
      <SocialMedia />
      <Subscribe />

      {/* add section */}
      <section className="my-[34px]">
        <img src={addImg} alt="" />
      </section>
      {/* ------------- */}

      <TikTok />
      <Category />
      <Gallery/>
    </div>
  );
};

export default SideSection;
