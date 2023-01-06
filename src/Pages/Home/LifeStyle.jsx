import React from "react";
import Heading from "../../Components/Common/Heading";
import { lifeStyle } from "../../dummyData";
import Slider from "react-slick";
import { CgCalendarDates } from "react-icons/cg";

const LifeStyle = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Heading title="Life Style" bc="bg-red-700" />

      <section className="popularPost life">
        <div className="">
          <Slider {...settings}>
            {lifeStyle.map((data) => {
              return (
                <div>
                  <div className="my-4 mr-4 shadow">
                    <div>
                      <div>
                        <img src={data.cover} alt="" />
                      </div>
                      <div class="category category-c absolute top-4 py-2 px-3">
                        <span>{data.category}</span>
                      </div>
                    </div>
                    <div className="p-3 flex flex-col justify-between gap-y-4">
                      <h1 className="text-xl font-medium">{data.title.slice(0, 40)}...</h1>
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

export default LifeStyle;
