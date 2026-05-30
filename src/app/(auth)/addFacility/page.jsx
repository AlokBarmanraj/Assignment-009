"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Card } from "@heroui/react";
import { redirect } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const AddFacility = () => {
  
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const facility = Object.fromEntries(formData.entries());
    const {data:tokenData}=await authClient.token()
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/addFacility`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`
      },
      body: JSON.stringify(facility),
    });
    const data = await res.json();
    toast.success("Facility Add Successfully")
    redirect("/allFacilities")
  };
  return (
    <div className="m-5">
      <Card className="mt-14 w-full md:w-7/12 mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Add Sports Facility</h1>
          <p className="mt-2">Create and manage your sports facility easily</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          {/* Facility Name */}
          <div>
            <label className="block mb-2 font-medium">Facility Name</label>
            <input
              name="facilityName"
              type="text"
              placeholder="Enter facility name"
              className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2"
            />
          </div>

          {/* Facility Type */}
          <div>
            <label className="block mb-2 font-medium">Facility Type</label>

            <select
              name="facilityType"
              className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2"
            >
              <option className="text-black">Football Turf</option>
              <option className="text-black">Cricket Ground</option>
              <option className="text-black">Badminton Court</option>
              <option className="text-black">Swimming Pool</option>
              <option className="text-black">Tennis Court</option>
            </select>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block mb-2 font-medium">Image URL</label>

            <input
              type="url"
              name="image"
              placeholder="Enter image url"
              className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block mb-2 font-medium">Location</label>

            <input
              name="location"
              type="text"
              placeholder="Enter facility location"
              className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2"
            />
          </div>

          {/* Price & Capacity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block mb-2 font-medium">Price Per Hour</label>

              <input
                name="pricePerHour"
                type="number"
                placeholder="$20"
                className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Capacity</label>

              <input
                name="capacity"
                type="number"
                placeholder="Maximum players"
                className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2"
              />
            </div>
          </div>

          {/* Time Slots */}
          <div>
            <label className="block mb-2 font-medium">
              Available Time Slots
            </label>

            <input
              name="availableTimeSlot"
              type="text"
              placeholder="Example: 6AM - 10PM"
              className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-medium">Description</label>

            <textarea
              name="description"
              rows={5}
              placeholder="Write facility details..."
              className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2"
            ></textarea>
          </div>

          <Button type="submit" className={"w-full font-bold text-2xl p-5"}>
            Add Facility
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddFacility;

// "use client";
// import { Button, Card } from "@heroui/react";
// import React from "react";

// const AddFacility = () => {
//   const onSubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);
//     const facility = Object.fromEntries(formData.entries());

//     console.log(facility);
//   };

//   return (
//     <div className="m-5">
//       <Card className="mt-14 w-full md:w-7/12 mx-auto p-8 shadow-xl">

//         {/* Heading */}
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold">
//             Add Sports Facility
//           </h1>

//           <p className="mt-2 text-gray-500">
//             Create and manage your sports facility easily
//           </p>
//         </div>

//         <form onSubmit={onSubmit} className="space-y-6">

//           {/* Facility Name */}
//           <div>
//             <label className="block mb-2 font-medium">
//               Facility Name
//             </label>

//             <input
//               type="text"
//               name="facilityName"
//               placeholder="Enter facility name"
//               className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>

//           {/* Facility Type */}
//           <div>
//             <label className="block mb-2 font-medium">
//               Facility Type
//             </label>

//             <select
//               name="facilityType"
//               className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-500"
//             >
//               <option value="Football Turf">
//                 Football Turf
//               </option>

//               <option value="Cricket Ground">
//                 Cricket Ground
//               </option>

//               <option value="Badminton Court">
//                 Badminton Court
//               </option>

//               <option value="Swimming Pool">
//                 Swimming Pool
//               </option>

//               <option value="Tennis Court">
//                 Tennis Court
//               </option>
//             </select>
//           </div>

//           {/* Image URL */}
//           <div>
//             <label className="block mb-2 font-medium">
//               Image URL
//             </label>

//             <input
//               type="url"
//               name="image"
//               placeholder="Enter image url"
//               className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>

//           {/* Location */}
//           <div>
//             <label className="block mb-2 font-medium">
//               Location
//             </label>

//             <input
//               type="text"
//               name="location"
//               placeholder="Enter facility location"
//               className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>

//           {/* Price & Capacity */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

//             <div>
//               <label className="block mb-2 font-medium">
//                 Price Per Hour
//               </label>

//               <input
//                 type="number"
//                 name="price"
//                 placeholder="$20"
//                 className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//             </div>

//             <div>
//               <label className="block mb-2 font-medium">
//                 Capacity
//               </label>

//               <input
//                 type="number"
//                 name="capacity"
//                 placeholder="Maximum players"
//                 className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//             </div>
//           </div>

//           {/* Time Slots */}
//           <div>
//             <label className="block mb-2 font-medium">
//               Available Time Slots
//             </label>

//             <input
//               type="text"
//               name="timeSlots"
//               placeholder="Example: 6AM - 10PM"
//               className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block mb-2 font-medium">
//               Description
//             </label>

//             <textarea
//               rows={5}
//               name="description"
//               placeholder="Write facility details..."
//               className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-500"
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <Button
//             type="submit"
//             className="w-full font-bold text-xl py-7 bg-green-500 text-white"
//           >
//             Add Facility
//           </Button>
//         </form>
//       </Card>
//     </div>
//   );
// };

// export default AddFacility;
