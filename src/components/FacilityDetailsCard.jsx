import { Button, Card } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { CiLocationOn, CiStopwatch } from "react-icons/ci";
import { FaPerson } from "react-icons/fa6";

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
        <div>
          <Image
            src={image}
            width={700}
            height={400}
            alt="image"
            className=" rounded-2xl object-cover transition-transform duration-500 hover:scale-110"
          ></Image>
        </div>
        <div className="space-y-3 pt-5">
          <h1 className="font-bold text-3xl">{facilityName}</h1>
          <h2 className="font-bold text-lg">{facilityType}</h2>
          <h3 className="font-bold text-2xl">${pricePerHour}</h3>
          <div className="flex items-center font-bold">
            <FaPerson />
            <h3>{capacity}</h3>
          </div>
          <div className="flex items-center font-bold">
            <CiStopwatch />
            <h3>{availableTimeSlot}</h3>
          </div>
          <div className="flex items-center font-bold">
            <CiLocationOn />
            <h3>{location}</h3>
          </div>
          <div className="flex items-center font-bold">
            <h3>{description}</h3>
          </div>
          <Button
            className={"w-full font-bold text-2xl transition-transform duration-500 hover:scale-110 mt-5"}
          >
            Book Now
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default FacilityDetailsCard;
