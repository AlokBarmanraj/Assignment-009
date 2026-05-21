// import MyBookingsAllFacility from "@/components/MyBookingsAllFacility";
// import { auth } from "@/lib/auth";
// import { headers } from "next/headers";
// import React from "react";

// const MyBookingsPage = async() => {
    
// const session = await auth.api.getSession({
//     headers: await headers() // you need to pass the headers object.
// })
// const user = session?.user
//     const res = await fetch (`http://localhost:5000/myBookings/${user.id}`)
//     const bookings = await res.json()
//     console.log(bookings);
//   return (
//     <div className="max-w-7xl mx-auto mt-16">
//       <div>
//         <h1 className="font-bold text-3xl">My Bookings</h1>
//       </div>
//       <div>
//         {
//             bookings.map(bookings=><div key={bookings._id}>
//                 <MyBookingsAllFacility bookings={bookings}></MyBookingsAllFacility>
//             </div>)
//         }
//       </div>
//     </div>
//   );
// };

// export default MyBookingsPage;







