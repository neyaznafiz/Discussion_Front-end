import React from "react";
import Heading from "../../../Components/Common/Heading";

const Category = () => {
  const category = [
    "world",
    "travel",
    "sport",
    "fun",
    "health",
    "fashion",
    "business",
    "technology",
  ];

  return (
    <div>
      <Heading title="Categories" bc="bg-black"/>
      <section className="flex flex-col gap-y-3">
        {category.map((data) => {
          return (
            <div className="category category-c hover:bg-left-bottom py-3 px-2">
              <span>{data}</span>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Category;
