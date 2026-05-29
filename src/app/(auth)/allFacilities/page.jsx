import FacilityCard from "@/components/FacilityCard";
import SearchAndFilter from "@/components/SearchAndFilter";
import React from "react";
export const metadata = {
  title: "Turfi | All Facilities",
};

const AllFacilitiesPage = async () => {
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <h1 className="font-bold text-3xl px-5 sm:text-4xl lg:text-5xl pb-5">
        All Facility
      </h1>
      <div>
        <SearchAndFilter></SearchAndFilter>
      </div>
    </div>
  );
};

export default AllFacilitiesPage;
