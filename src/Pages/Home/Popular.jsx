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
    <div>
      <section>
        <Heading title="Popular" />

        <div>
          <Slider {...settings}>
            {popular.map((data) => {
              return (
                <div className="">
                  <div className="bg-white flex relative my-4 mr-3 shadow-lg">
                    <div className="relative h-44">
                      <div className="w-72 mb-0">
                        <img
                          src={data.cover}
                          alt=""
                          className="w-72 h-44 "
                        />
                      </div>
                      <div class="category category-c absolute top-0 left-0 py-1 px-2 hover:bg-left-bottom">
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
