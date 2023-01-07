import React from "react";
import Slider from "react-slick";
import { popular } from "../../dummyData";

const TopSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
        },
        {
            breakpoint: 400,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
      ],
  };

  return (
    <div className="my-20">
      <section>
        <Slider {...settings}>
          {popular.map((data) => {
            return (
              <div className="w-60 h-36 cursor-pointer relative ">
                <div className="">
                  <img
                    src={data.cover}
                    alt=""
                    className="rounded-lg w-60 h-32"
                  />
                </div>
                <div className=" absolute bottom-4 text-white ml-2 mr-4">
                  <h1>{data.title.slice(0, 45)}...</h1>
                </div>
              </div>
            );
          })}
        </Slider>
      </section>
    </div>
  );
};

export default TopSlider;
