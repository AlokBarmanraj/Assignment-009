import { Button } from "@heroui/react";
import React from "react";

const Hero = () => {
  return (
    <div     className="w-full md:h-[520px] lg:h-[780px] bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/image/stadium.jpeg')",
    backgroundSize: "100% 100%",
  }}>
      <div className="flex items-center justify-center h-[calc(100vh-80px)] px-4">
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-tight">
            YOUR ULTIMATE <br /> SPORTS BOOKING PLATFORM
          </h1>
          <p className="text-center font-bold">
            Book football turfs, badminton courts, tennis courts, and more in{" "}
            <br />
            seconds.Find available sports facilities and reserve your preferred
            time slot instantly.A complete platform for managing and booking
            sports venues online.
          </p>
          <div className="flex justify-center pt-8">
            <Button
              className={
                "font-bold text-lg p-3 sm:text-2xl sm:p-6 hover:bg-white hover:text-black"
              }
            >
              BOOK A SESSION
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
