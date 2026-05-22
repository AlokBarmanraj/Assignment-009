import Image from "next/image";
import React from "react";

const PlayBasket = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-4 gap-6">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=1200&auto=format&fit=crop"
            width={800}
            height={500}
            alt="image"
            className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover rounded-2xl"
          />
        </div>
        <div>
          <h1 className="font-bold text-3xl mb-3.5">Play with Passion, Win with Pride</h1>
          <p>
            Experience the energy, teamwork, and excitement of competitive
            sports. Our sports club creates the perfect environment for athletes
            to train, improve skills, and achieve success together. From
            practice sessions to championship moments, we inspire dedication,
            fitness, and team spirit both on and off the field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayBasket;
