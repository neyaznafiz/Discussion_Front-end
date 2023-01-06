import React from "react";
import Heading from "../../../Components/Common/Heading";
import { tpost } from "../../../dummyData";

const TikTok = () => {
  return (
    <div>
      <Heading title="TikTok Post" bc="bg-black"/>

      <section className="">
        {tpost.map((val) => {
          return (
            <div className="mb-5 flex">
              <div className="h-full">
                <img
                  src={val.cover}
                  alt=""
                  className="w-24 h-20 object-cover"
                />
              </div>
              <div className="px-4 flex flex-col justify-between">
                <h1 className="font-semibold tracking-wide">
                  {val.title.slice(0, 32)}...
                </h1>
                <span className="text-sm text-gray-500">a year ago</span>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default TikTok;
