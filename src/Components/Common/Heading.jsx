import React from "react";

const Heading = ({ title, bc }) => {
  return (
    <div className="heading">
      <h6 className={`${bc}`}>{title}</h6>
    </div>
  );
};

export default Heading;
