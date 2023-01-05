import React from "react";
import Heading from "../../Components/Common/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { popular } from "../../dummyData";
import { CgCalendarDates } from 'react-icons/cg';
import { FaComments } from 'react-icons/fa';

const Popular = () => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 4,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
        },
      },
    ],
  };

  return (
    <div className="width">
      <section>
        <Heading title="Popular" />

        <div>
          <Slider {...settings}>
            {popular.map((data) => {
              return (
                <div className="">
                  <div className="bg-white flex relative my-4 mr-3 shadow-lg">
                    <div className="relative h-40">
                      <div className="">
                        <img
                          src={data.cover}
                          alt=""
                          className="w-72 h-40 cover"
                        />
                      </div>
                      <div class="category category-c">
                        <span>{data.catgeory}</span>
                      </div>
                    </div>
                    <div className="text row">
                      <h1 className=" pt-5 ml-5 text-xl">
                        {data.title.slice(0, 40)}...
                      </h1>
                      <div className="mt-4 pl-5 flex items-center gap-x-4">
                       <CgCalendarDates className="text-xl text-red-700"/>
                        <label>{data.date}</label>
                      </div>

                      

                      <div className="pl-5 pt-3 border-t mt-3 w-full flex items-center gap-x-4">
                        <FaComments className="text-xl text-red-700"/>
                        <label>{data.comments}</label>
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

export default Popular;
