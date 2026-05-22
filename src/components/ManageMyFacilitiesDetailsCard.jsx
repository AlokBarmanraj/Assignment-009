import { Button, Card } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { CiLocationOn, CiStopwatch } from "react-icons/ci";
import { FaPerson } from "react-icons/fa6";
import EditFacility from "./EditFacility";
import DeleteFacility from "./DeleteFacility";

const ManageMyFacilitiesDetailsCard = ({ facility }) => {
  const {
    facilityName,
    facilityType,
    image,
    location,
    pricePerHour,
    capacity,
    availableTimeSlot,
    description,
  } = facility;
  return (
    <div>
      <div className="flex justify-end gap-2 mb-2">
        <EditFacility facility={facility}></EditFacility>
        <DeleteFacility facility={facility}></DeleteFacility>
      </div>
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
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ManageMyFacilitiesDetailsCard;
