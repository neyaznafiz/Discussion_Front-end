import React from "react";
import footerLogo from "../../Assets/tech-logo-footer.png";
import { FiMail, FiHeadphones } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <footer className=" pt-12 width">
        <div className="flex lg:flex-row flex-col lg:justify-between justify-center  lg:gap-x-7 my-12">
          {/* ------------ */}
          <div className=" mb-5">
            <img src={footerLogo} alt="" />
            <p className="my-5 sm:w-96">
              Busan is an amazing magazine Blogger theme that is easy to
              customize for your needs
            </p>
            <div className="flex items-center gap-x-2 my-2">
              <FiMail />
              <span> hello@beautiful.com </span> <br />
            </div>
            <div className="flex items-center gap-x-2">
              <FiHeadphones />
              <span> +91 60521488</span>
            </div>
          </div>

          {/* ------------- */}
          <div className="lg:flex gap-x-4">
            <div className="space-y-6">
              <h3 className="text-xl font-medium tracking-wide mb-5">SPORT</h3>
              <div className="flex items-center gap-x-4 w-96">
                <img
                  src="https://i.ibb.co/r4P8PmB/hero1.jpg"
                  alt=""
                  className="h-20 w-28"
                />
                <p className="">Google To Boost Android Security In Few Days</p>
              </div>
              <div className="flex items-center gap-x-4 w-96">
                <img
                  src="https://i.ibb.co/CBRDvzC/hero2.jpg"
                  alt=""
                  className="h-20 w-36"
                />
                <p>Cespedes play the winning Baseball Game</p>
              </div>
            </div>
            <div className="space-y-6 mt-5 lg:mt-0">
              <h3 className="text-xl font-medium tracking-wide mb-5">
                CRICKET
              </h3>
              <div className="flex items-center gap-x-4 sm:w-96">
                <img
                  src="https://i.ibb.co/8MtNgdh/hero3.jpg"
                  alt=""
                  className="h-20 w-28"
                />
                <p>US Promises to give Intel aid to locate the soldiers</p>
              </div>
              <div className="flex items-center gap-x-4 w-96">
                <img
                  src="https://i.ibb.co/zfy4pFp/hero4.jpg"
                  alt=""
                  className="h-20 w-44"
                />
                <p>Renewable energy dead as industry waits for Policy</p>
              </div>
            </div>
          </div>

          {/* ----------------- */}
          <div className="w-80 mt-12 lg:mt-0">
            <h3 className="text-xl font-medium tracking-wide mb-5">LABELS</h3>
            <ul>
              <li className="flex items-center justify-between border-b-2 border-gray-500 pb-1 mb-3">
                <div className="flex items-center gap-x-3">
                  <IoIosArrowForward />
                  <span>Boxing</span>
                </div>
                <label>(5)</label>
              </li>

              <li className="flex items-center justify-between border-b-2 border-gray-500 pb-1 mb-3">
                <div className="flex items-center gap-x-3">
                  <IoIosArrowForward />
                  <span>Fashion</span>
                </div>
                <label>(6)</label>
              </li>

              <li className="flex items-center justify-between border-b-2 border-gray-500 pb-1 mb-3">
                <div className="flex items-center gap-x-3">
                  <IoIosArrowForward />
                  <span>Health</span>
                </div>
                <label>(7)</label>
              </li>

              <li className="flex items-center justify-between border-b-2 border-gray-500 pb-1 mb-3">
                <div className="flex items-center gap-x-3">
                  <IoIosArrowForward />
                  <span>Nature</span>
                </div>
                <label>(9)</label>
              </li>
            </ul>
          </div>
        </div>

        {/* ------- */}
        <div className="flex justify-between items-center h-14 border-t-2 border-gray-600 text-gray-500 w-full">
          <p>© all rights reserved TECH</p>
          <p className="hidden sm:block">Developed by BringCode</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
