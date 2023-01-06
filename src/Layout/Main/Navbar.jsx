import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const content = (
    <>
      <li>
        <Link
          to="/"
          className="text-white hover:text-[#dc143c] transition-all duration-300"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/culture"
          className="text-white hover:text-[#dc143c] transition-all duration-300"
        >
          Culture
        </Link>
      </li>
      <li>
        <Link
          to="/politics"
          className="text-white hover:text-[#dc143c] transition-all duration-300"
        >
          Politics
        </Link>
      </li>
      <li>
        <Link
          to="/memes"
          className="text-white hover:text-[#dc143c] transition-all duration-300"
        >
          Memes
        </Link>
      </li>
      <li>
        <Link
          to="/sports"
          className="text-white hover:text-[#dc143c] transition-all duration-300"
        >
          Sports
        </Link>
      </li>
      <li>
        <Link
          to="/boxed"
          className="text-white hover:text-[#dc143c] transition-all duration-300"
        >
          Boxed
        </Link>
      </li>
      <li>
        <Link
          to="/reviews"
          className="text-white hover:text-[#dc143c] transition-all duration-300"
        >
          Reviews
        </Link>
      </li>
    </>
  );

  // onClick={() => setNavbar(false)}

  // className={`flex gl:width flex-row  lg:mx-24 ${navbar && " flex-col gap-y-3 pl-4 py-2 text-xl bg-red-700 w-full"} `}
  return (
    <div className="bg-black sm:py-5">
      {/* lg and md device */}
      <div className="hidden sm:block" onClick={() => setNavbar(false)}>
        <ul className="width flex lg:justify-start md:justify-center gap-x-6 text-lg">{content}</ul>
      </div>

      {/* small device */}
      <div className="flex flex-col-reverse">
        <div>{navbar && <ul className="flex flex-col gap-y-3 pl-4 py-2 text-xl bg-red-700 w-full">{content}</ul> }</div>

        <button
          className="block sm:hidden text-white py-2 pl-3"
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? (
            <RxCross2 className="text-2xl" />
          ) : (
            <GoThreeBars className="text-3xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
