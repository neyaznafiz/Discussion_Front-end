import React from "react";
import Heading from "../../Components/Common/Heading";
import Slider from "react-slick";
import { popular } from "../../dummyData";
import { CgCalendarDates } from "react-icons/cg";
import { FaComments, FaShare } from "react-icons/fa";

const Music = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
  };

  return (
    <div>
      <Heading title="Music" bc="bg-red-700" />

      <section className="music">
        <div className="content">
          <Slider {...settings}>
            {popular
              .filter((data) => data.category === "fun")
              .map((data) => {
                return (
                  <div>
                    <div className="bg-white flex relative my-4 mr-3 shadow ">
                      <div>
                        <div className="w-[340px] h-60">
                          <img
                            src={data.cover}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div class="category category-c absolute top-0 left-0 py-1 px-2 hover:bg-left-bottom">
                          <span>{data.category}</span>
                        </div>
                      </div>
                      <div className="ml-7">
                        <h1 className="mt-5 text-2xl font-medium">
                          {data.title.slice(0, 40)}...
                        </h1>

                        <div className="flex flex-col gap-y-5 mt-8">
                          <div className="flex items-center gap-x-4">
                            <CgCalendarDates className="text-red-700 text-xl" />
                            <label className="text-sm text-gray-500">
                              {data.date}
                            </label>
                          </div>
                          <p className="text-sm">
                            {data.desc.slice(0, 250)}...
                          </p>
                          <div className="text-gray-500 flex  gap-x-2 items-center">
                            <div className="flex items-center gap-x-2">
                              <FaShare className=" text-red-700" />
                              <label>Share /</label>
                            </div>

                            <div className="flex items-center gap-x-2">
                              <FaComments className=" text-red-700" />
                              <label>{data.comments}</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Music;
