"use client";

import Image from "next/image";

const SliderClub = () => {
  const images = [
    "/image/1.jpeg",
    "/image/2.jpeg",
    "/image/3.jpeg",
    "/image/4.jpeg",
    "/image/5.jpeg",
    "/image/6.jpeg",
    "/image/7.jpeg",
    "/image/8.jpeg",
    "/image/9.jpeg",
    "/image/10.jpeg",
    "/image/11.jpeg",
    "/image/12.jpeg",

  ];

  const loopImages = [...images, ...images];
  return (
    <div className="max-w-7xl mx-auto overflow-hidden py-4">
<div className="flex animate-slide whitespace-nowrap">
  {loopImages.map((img, index) => (
    <div
      key={index}
      className="flex-shrink-0 w-[150px]"
    >
      <Image
        src={img}
        alt={`slide-${index}`}
        width={200}
        height={120}
        className="w-full h-[120px] object-cover"
      />
    </div>
  ))}
</div>

      <style jsx>{`
        .animate-slide {
          animation: slide 15s linear infinite;
        }

        @keyframes slide {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default SliderClub;
