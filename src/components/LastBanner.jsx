import Image from "next/image";
import React from "react";

const LastBanner = () => {
  return (
    <div className="max-w-7xl  mx-auto  mt-32 mb-16">
      <Image
        src="/image/last.png"
        width={1920}
        height={1080}
        alt="image"
        className="w-full h-full object-cover rounded-2xl"
      ></Image>
    </div>
  );
};

export default LastBanner;
