import React from "react";
import headerb from "../../Assets/headerb.png"
import logo from "../../Assets/logo.png"

const TopNav = () => {
  return (
    <div>
      <div className="width flex items-start justify-between py-10">
        <div className="md:mx-auto lg:mx-0">
          <img src={logo} alt="logo" className="w-[500px]" />
        </div>
        <div className="hidden lg:block">
          <img src={headerb} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
