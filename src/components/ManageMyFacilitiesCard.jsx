import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiLocationOn, CiStopwatch } from "react-icons/ci";
import { FaPerson } from "react-icons/fa6";

const ManageMyFacilitiesCard = ({ facility }) => {
      const {
    _id,
    facilityName,
    facilityType,
    image,
    location,
    pricePerHour,
    capacity,
    availableTimeSlot,
  } = facility;
    return (
    <div>
      <Card className="p-5">
        <Link href={`/manageMyFacilities/${_id}`}>
          <Image
            src={image}
            width={400}
            height={400}
            alt="image"
            className="items-center rounded-2xl object-cover transition-transform duration-500 hover:scale-110"
          ></Image>
        </Link>
        <h1 className="font-bold text-2xl">{facilityName}</h1>
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
      </Card>
    </div>
    );
};

export default ManageMyFacilitiesCard;