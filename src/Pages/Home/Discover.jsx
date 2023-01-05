import React from "react";
import Heading from "../../Components/Common/Heading";
import { discover } from "../../dummyData";

const Discover = () => {

  return (
    <div>
      <section>
        <Heading title="Discover" />

        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-x-10">
          {discover.map((data) => {
            return (
              <div className="bg-white shadow-lg">
                <div>
                  <img src={data.cover} alt="" className="h-32 w-full"/>
                  <h1 className="text-xl uppercase text-center my-2">{data.title}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Discover;
