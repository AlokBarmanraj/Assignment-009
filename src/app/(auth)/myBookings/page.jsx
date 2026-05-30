import MyBookingsAllFacility from "@/components/MyBookingsAllFacility";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";
export const metadata = {
  title: "Turfi | My Bookings",
};

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const user = session?.user;
  if (!user) {
    return (
      <div className="font-bold text-3xl min-h-screen flex items-center justify-center">
        User not logged in
      </div>
    );
  }
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/myBookings/${user.id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const bookings = await res.json();
  return (
    <div className="max-w-7xl mx-auto mt-16">
      <div className="mb-10">
        <h1 className="font-bold text-3xl">My Bookings</h1>
      </div>
      <div>
        {bookings.length === 0 ? (
          <div className="min-h-[50vh] flex items-center justify-center">
            <h1 className="text-3xl font-bold text-gray-500">
              No Booking Available
            </h1>
          </div>
        ) : (
          bookings.map((booking) => (
            <div key={booking._id}>
              <MyBookingsAllFacility bookings={booking} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyBookingsPage;
