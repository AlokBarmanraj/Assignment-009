
import FacilityDetailsCard from "@/components/FacilityDetailsCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";
export const metadata = {
  title: "Turfi | All Facilities Details ",
};

const AllFacilitiesDetails = async ({ params }) => {
  const { id } = await params;
  const {token} = await auth.api.getToken({
    headers:await headers()
  })
  const res = await fetch(`http://localhost:5000/allFacilities/${id}`,{
    headers:{
      authorization:`Bearer ${token}`
    }
  });
  const facilityData = await res.json();
  return (
    <div className="mt-16 max-w-7xl mx-auto">
      <div>
        <FacilityDetailsCard facilityData={facilityData}></FacilityDetailsCard>
      </div>
    </div>
  );
};

export default AllFacilitiesDetails;
