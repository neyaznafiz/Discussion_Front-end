import React from "react";
import {
  FaFacebookF,
  FaPinterest,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div>
      <section className="flex flex-col gap-y-2">
        {/* fb */}
        <div className="bg-sky-800 py-3 text-white text-lg flex items-center gap-x-3 ">
          <FaFacebookF className=" ml-3" />
          <span className="font-semibold">12,740 Likes</span>
        </div>

        {/* pinterest */}
        <div className="bg-red-700 py-3 text-white text-lg flex items-center gap-x-3 ">
          <FaPinterest className=" ml-3" />
          <span className="font-semibold">5,600 Fans</span>
        </div>

        {/* twitter */}
        <div className="bg-sky-500 py-3 text-white text-lg flex items-center gap-x-3 ">
          <FaTwitter className=" ml-3" />
          <span className="font-semibold">8,700 Followers</span>
        </div>

        {/* insta */}
        <div className="bg-pink-700 py-3 text-white text-lg flex items-center gap-x-3 ">
          <FaInstagram className=" ml-3" />
          <span className="font-semibold">22,700 Followers</span>
        </div>

        {/* youtube */}
        <div className="bg-red-700 py-3 text-white text-lg flex items-center gap-x-3 ">
          <FaYoutube className=" ml-3" />
          <span className="font-semibold">2,700 Subscriber</span>
        </div>
      </section>
    </div>
  );
};

export default SocialMedia;
