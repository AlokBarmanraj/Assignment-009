import { Button, Card } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { TbClockHour3 } from "react-icons/tb";
import MyBookingsUpdate from "./MyBookingsUpdate";
import MyBookingsDelete from "./MyBookingsDelete";

const MyBookingsAllFacility = ({ bookings }) => {
  const { facilityName, bookingDate, timeSlot, hours, totalPrice, image } =
    bookings;
  return (
    <div className="mb-5">
      <Card>
        <div className="float-none lg:flex justify-between gap-8 items-center p-3">
          <div>
            <Image
              src={image}
              width={300}
              height={200}
              alt="facility image"
              className="w-full h-auto"
            ></Image>
          </div>
          <div>
            <div>
              <h1 className="font-bold text-3xl">{facilityName}</h1>
              <h3 className="flex items-center font-bold text-xl">
                <CiCalendarDate />
                {bookingDate}
              </h3>
              <h3 className="flex items-center font-bold">
                <IoMdTime />
                {timeSlot}
              </h3>
              <h3 className="flex items-center font-bold">
                <TbClockHour3 />
                {hours}
              </h3>
              <h3 className="flex items-center font-bold text-2xl">
                Total:${totalPrice}
              </h3>
            </div>
            <div className=" flex mt-5 space-x-1.5">
              {/* <Button className={"bg-taupe-400"}>Update</Button> */}
              <MyBookingsUpdate bookings={bookings}></MyBookingsUpdate>
              <MyBookingsDelete bookings={bookings}></MyBookingsDelete>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MyBookingsAllFacility;
