import React, { useState } from "react";
import { banner } from "../../../dummyData";
import BannerCard from "./BannerCard";

const Banner = () => {
  const [items, setItems] = useState(banner);


  return (
    <div>
      <section className="my-8 text-white">
        <div className="grid-c ">
          {items.map(item => <BannerCard key={item.id} item={item} />)}
        </div>
      </section>
    </div>
  );
};

export default Banner;
