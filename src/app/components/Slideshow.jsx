"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Slideshow = () => {
  const images = [
    "/image/turf1.jpeg",
    "/image/stadium.jpeg",
    "/image/turf5.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex overflow-hidden rounded-3xl shadow-2xl">
        <Image
          src={images[current]}
          alt="slider-image"
          width={500}
          height={300}
          className="w-full object-cover"
          priority
        ></Image>
      </div>
    </div>
  );
};

export default Slideshow;




