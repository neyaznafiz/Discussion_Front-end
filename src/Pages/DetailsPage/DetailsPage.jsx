import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { banner } from "../../dummyData";
import SideSection from "../Home/SideSection/SideSection";
import { FaFacebookF, FaPinterest, FaQuoteLeft, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const DetailsPage = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    const item = banner.find((item) => parseInt(id));
    // window.scrollTo(0, 0);
    if (item) {
      setItem(item);
    }
  }, [id]);

  return (
    <div className="width">
      {item ? (
        <main>
          {/* <SinglePageSlider /> */}
          <div className="lg:flex my-10">
            <section className="lg:w-[75%] w-full">
              <h1 className="text-4xl font-bold tracking-wide">{item.title}</h1>

              <div className="flex items-center gap-x-3 my-5">
                <span className="font-medium">by</span>
                <img
                  src={item.authorImg}
                  alt=""
                  className="h-12 w-12 rounded-full"
                />
                <p className="font-medium"> {item.authorName} on</p>
                <label className="text-gray-500">{item.time}</label>
              </div>

              <div className="flex gap-x-3 my-5">
                <div className="bg-sky-800 py-2 text-white text-lg flex items-center justify-between w-28 px-3">
                  <FaFacebookF />
                  <span className="font-semibold">Share</span>
                </div>

                <div className="bg-red-700 py-2 text-white text-lg flex items-center justify-between w-32 px-3">
                  <FaPinterest />
                  <span className="font-semibold">Pinterest</span>
                </div>

                <div className="bg-sky-500 py-2 text-white text-lg flex items-center justify-between w-28 px-3">
                  <FaTwitter />
                  <span className="font-semibold">Twitter</span>
                </div>

                <div className="bg-red-700 py-2 text-white text-lg flex items-center justify-between w-28 px-3">
                  <FiMail />
                  <span className="font-semibold">E-mail</span>
                </div>
              </div>

              <div className="mr-14">
                <div className=" mt-10">
                  {item.desc.map((data) => {
                    return (
                      <div className="space-y-8">
                        <p>{data.para1}</p>
                        <p>{data.para2}</p>
                      </div>
                    );
                  })}
                </div>
                <img src={item.cover} alt="" />
                {item.desc.map((val) => (
                  <p className="my-7">{val.para3}</p>
                ))}

                <div className="">
                  {item.details.map((data) => {
                    return (
                      <>
                        <h1 className="text-3xl font-semibold tracking-wide">{data.title}</h1>
                        <p className="my-7">{data.para1}</p>
                      </>
                    );
                  })}
                </div>

                <div className="pl-12 border-l-8 border-red-700">
                  <FaQuoteLeft className="text-5xl text-red-700 mb-5"/>
                  {item.details.map((data) => (
                    <p className="text-lg font-medium">{data.quote}</p>
                  ))}
                </div>

                <div className="">
                  {item.details.map((data) => {
                    return (
                      <div className="space-y-7">
                        <p>{data.para2}</p>
                        <p>{data.para3}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
            <section className="sideContent lg:w-[25%] w-full">
              <SideSection />
            </section>
          </div>
        </main>
      ) : (
        <h1>not found</h1>
      )}
    </div>
  );
};

export default DetailsPage;
