import React from "react";

const Heading = ({ title }) => {
  //   const sideTitle = [
  //     "Stay Connected",
  //     "Subscribe",
  //     "TikTok post",
  //     "Categories",
  //     "Gallery",
  //   ];

  return (
    <div className="heading">
      <h6
        className={`${
          title === "Stay Connected" ||
          "Subscribe" ||
          "TikTok Post" ||
          "Categories" ||
          "Gallery"
            ? "bg-black"
            : "bg-red-700"
        } `}
      >
        {title}
      </h6>
    </div>
  );
};

export default Heading;
