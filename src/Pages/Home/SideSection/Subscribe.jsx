import React from "react";
import Heading from "../../../Components/Common/Heading";
import { IoIosSend } from "react-icons/io";

const Subscribe = () => {
  return (
    <div>
      <Heading title="Subscribe" bc="bg-black" />

      <section className="border border-black p-5">
        <h1 className="text-xl pb-2">Subscribe to our New Stories</h1>
        <form className="flex flex-col gap-y-3">
          <input
            type="email"
            placeholder="Email Address..."
            className="outline-none border border-black p-2"
          />
          <button className="bg-red-600 text-white font-semibold tracking-wider flex items-center justify-center gap-x-1 py-2">
            <IoIosSend className="text-xl"/>
            SUBMIT
          </button>
        </form>
      </section>
    </div>
  );
};

export default Subscribe;
