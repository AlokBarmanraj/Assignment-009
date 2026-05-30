import ManageMyFacilitiesCard from "@/components/ManageMyFacilitiesCard";
import React from "react";
export const metadata = {
  title: "Turfi | Manage MyFacilities",
};

const ManageMyFacilities = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/allFacility`);
  const facility = await res.json();
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <h1 className="font-bold text-3xl px-5 sm:text-4xl lg:text-5xl pb-5">
        Manage My Facilities
      </h1>
      <div className="grid grid-cols-1 px-5 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {facility.map((facility) => (
          <div key={facility._id}>
            <ManageMyFacilitiesCard
              facility={facility}
            ></ManageMyFacilitiesCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageMyFacilities;
