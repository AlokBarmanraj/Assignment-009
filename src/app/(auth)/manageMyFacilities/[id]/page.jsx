import ManageMyFacilitiesDetailsCard from "@/components/ManageMyFacilitiesDetailsCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";
export const metadata = {
  title: "Turfi | Manage MyFacilities Details ",
};

const ManageMyFacilitiesDetailsPage = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/manageMyFacilities/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
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
