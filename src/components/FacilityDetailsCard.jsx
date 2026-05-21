// "use client"
// import { Button, Card } from "@heroui/react";
// import Image from "next/image";
// import React, { useState } from "react";
// import { CiLocationOn, CiStopwatch } from "react-icons/ci";
// import { FaPerson } from "react-icons/fa6";
// import BookingForm from "./BookingForm";
// import { authClient } from "@/lib/auth-client";

// const FacilityDetailsCard = ({ facilityData }) => {
//   const {
//     _id,
//     facilityName,
//     facilityType,
//     image,
//     location,
//     pricePerHour,
//     capacity,
//     availableTimeSlot,
//     description,
//   } = facilityData;
//     const { data: session } = authClient.useSession();
//     const user = session?.user;
//     const [hours, setHours] = useState(1);

//   // Total Price Calculate
//   const totalPrice = pricePerHour * hours;
//     const handleBooking = () => {
//       const bookingData = {
//         userId:user.id,
//         userImage:user.image,
//         userName:user.name,
//         facilityDataId:_id, 
//         facilityName,
//         timeSlot:availableTimeSlot,
//         image,
//         totalPrice
  
//       };
//       console.log(bookingData);
//     };
//   return (
//     <Card>
//       <div className="gap-10 p-3">
//         <div>
//           <Image
//             src={image}
//             width={700}
//             height={400}
//             alt="image"
//             className=" rounded-2xl object-cover transition-transform duration-500 hover:scale-110"
//           ></Image>
//         </div>
//         <div className="space-y-3 pt-5">
//           <h1 className="font-bold text-3xl">{facilityName}</h1>
//           <h2 className="font-bold text-lg">{facilityType}</h2>
//           <h3 className="font-bold text-2xl">${pricePerHour}</h3>
//           <div className="flex items-center font-bold">
//             <FaPerson />
//             <h3>{capacity}</h3>
//           </div>
//           <div className="flex items-center font-bold">
//             <CiStopwatch />
//             <h3>{availableTimeSlot}</h3>
//           </div>
//           <div className="flex items-center font-bold">
//             <CiLocationOn />
//             <h3>{location}</h3>
//           </div>
//           <div className="flex items-center font-bold">
//             <h3>{description}</h3>
//           </div>
//           <Button
//           onClick={handleBooking}
//             className={"w-full font-bold text-2xl transition-transform duration-500 hover:scale-110 mt-5"}
//           >
//             Booking Now
//           </Button>
//           {/* <BookingForm facilityData={facilityData}></BookingForm> */}
//         </div>
//       </div>
//     </Card>
//   );
// };

// export default FacilityDetailsCard;

















"use client";

import { Button, Card } from "@heroui/react";
import Image from "next/image";
import React, { useState } from "react";
import { CiLocationOn, CiStopwatch } from "react-icons/ci";
import { FaPerson } from "react-icons/fa6";
import { authClient } from "@/lib/auth-client";
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
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={image}
            width={700}
            height={400}
            alt="image"
            className="rounded-2xl object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        <div className="space-y-3 pt-5">
          <h1 className="font-bold text-3xl">{facilityName}</h1>

          <h2 className="font-bold text-lg">{facilityType}</h2>

          <h3 className="font-bold text-2xl">
            ${pricePerHour} / hour
          </h3>

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
