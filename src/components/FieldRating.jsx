import React from "react";
import Slideshow from "./Slideshow";

const FieldRating = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        <div className="space-y-4 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            The Ultimate <br /> Field Selection Here
          </h1>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
            Choose the perfect playground for every match and every moment.
          </p>
        </div>

        <div className="w-full lg:w-[500px] flex justify-center">
          <Slideshow></Slideshow>
        </div>
      </div>
    </div>
  );
};

export default FieldRating;
