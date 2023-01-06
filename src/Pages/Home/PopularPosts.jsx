import React from "react";
import Heading from "../../Components/Common/Heading";
import Slider from "react-slick";
import { popularPost } from "../../dummyData";
import { CgCalendarDates } from "react-icons/cg";

const PopularPosts = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
        },
      },
    ],
  };
  return (
    <div>
      <Heading title="Popular Posts" bc="bg-red-700" />

      <section className="popularPost">
        <div className="content">
          <Slider {...settings}>
            {popularPost.map((data) => {
              return (
                <div className="">
                  <div className="my-4 mr-4 shadow">
                    <div className="">
                      <div className="">
                        <img src={data.cover} alt="" />
                      </div>
                      <div className="category category-c absolute top-4 py-2 px-2">
                        <span>{data.category}</span>
                      </div>
                    </div>
                    <div className="p-3 flex flex-col justify-between gap-y-4">
                      <h1 className="text-xl font-medium">
                        {data.title.slice(0, 40)}...
                      </h1>
                      <div className="flex items-center gap-x-2">
                        <CgCalendarDates className="text-red-700 text-xl" />
                        <label className="text-sm text-gray-500">
                          {data.date}
                        </label>
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

export default PopularPosts;
