import React from "react";
import { Link } from "react-router-dom";

const BannerCard = ({ item }) => {
  return (
    <div className="relative p-8 child">
      <div className="  ">
        <img
          src={item.cover}
          alt=""
          className="object-cover absolute top-0 left-0 -z-[1] w-full h-full"
        />
      </div>

      <div className="absolute bottom-8">
        <span className="category px-3 py-2 text-sm uppercase tracking-widest">
          {item.category}
        </span>

        <Link to={`/details/${item.id}`}>
          <h1 className="text-xl font-semibold my-5">{item.title}</h1>
        </Link>

        <div>
          <span className="text-sm mr-5">by {item.authorName}</span>
          <span>{item.time}</span>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
