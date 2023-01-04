import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoThreeBars } from 'react-icons/go'
import { RxCross2 } from 'react-icons/rx'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="bg-black lg:py-5 py-2">
          <ul className={`width flex gap-x-6 text-lg`}
          onClick={() => setNavbar(false)}
          >
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
      </ul>

      <button className="block lg:hidden text-white" onClick={() => setNavbar(!navbar)}>
        {navbar ? (
         <RxCross2 className="text-2xl"/>
        ) : (
        <GoThreeBars className="text-3xl"/>
        )}
      </button>
    </div>
  );
};

export default Navbar;
