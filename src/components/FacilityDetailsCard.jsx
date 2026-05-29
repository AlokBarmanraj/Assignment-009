"use client";

import { Button, Card } from "@heroui/react";
import Image from "next/image";
import React, { useState } from "react";
import { CiLocationOn, CiStopwatch } from "react-icons/ci";
import { FaPerson } from "react-icons/fa6";
import BookingForm from "./BookingForm";

const FacilityDetailsCard = ({ facilityData }) => {
  const {
    facilityName,
    facilityType,
    image,
    location,
    pricePerHour,
    capacity,
    availableTimeSlot,
    description,
  } = facilityData;

  return (
    <Card>
      <div className="gap-10 p-3">
        <div className="w-full h-[250px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-2xl bg-black flex items-center justify-center">
          <Image
            src={image}
            width={900}
            height={500}
            alt="image"
            className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
          />
        </div>

        <div className="space-y-3 pt-5">
          <h1 className="font-bold text-3xl">{facilityName}</h1>

          <h2 className="font-bold text-lg">{facilityType}</h2>

          <h3 className="font-bold text-2xl">${pricePerHour} / hour</h3>

          <div className="flex items-center gap-2 font-bold">
            <FaPerson />
            <h3>{capacity}</h3>
          </div>

          <div className="flex items-center gap-2 font-bold">
            <CiStopwatch />
            <h3>{availableTimeSlot}</h3>
          </div>

          <div className="flex items-center gap-2 font-bold">
            <CiLocationOn />
            <h3>{location}</h3>
          </div>

          <p>{description}</p>
          <BookingForm facilityData={facilityData}></BookingForm>
        </div>
      </div>
    </Card>
  );
};

export default FacilityDetailsCard;
