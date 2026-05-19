
import FacilityDetailsCard from "@/components/FacilityDetailsCard";
import React from "react";

const FacilitiesDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:5000/allFacilities/${id}`);
  const facilityData = await res.json();
  console.log(facilityData);
  return (
    <div className="mt-16 max-w-7xl mx-auto">
      <div>
        <FacilityDetailsCard facilityData={facilityData}></FacilityDetailsCard>
      </div>
    </div>
  );
};

export default FacilitiesDetails;
