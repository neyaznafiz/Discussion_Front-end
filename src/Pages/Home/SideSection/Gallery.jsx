import React from "react";
import Heading from "../../../Components/Common/Heading";
import { gallery } from "../../../dummyData";
import Slider from "react-slick";

const Gallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Heading title="Gallery" />
      <section>
        <Slider {...settings}>
          {gallery.map((data) => {
            return (
              <div className="w-full h-[400px] overflow-hidden">
                <img
                  src={data.cover}
                  alt=""
                  className="object-cover w-full max-h-[300px]"
                />
              </div>
            );
          })}
        </Slider>
      </section>
    </div>
  );
};

export default Gallery;
