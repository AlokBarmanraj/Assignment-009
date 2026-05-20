import ManageMyFacilitiesDetailsCard from "@/components/ManageMyFacilitiesDetailsCard";
import React from "react";

const ManageMyFacilitiesDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:5000/manageMyFacilities/${id}`);
  const facility = await res.json();

  return (
    <div className="mt-16 max-w-7xl mx-auto">
      <div>
        <ManageMyFacilitiesDetailsCard
          facility={facility}
        ></ManageMyFacilitiesDetailsCard>
      </div>
    </div>
  );
};

export default ManageMyFacilitiesDetailsPage;
