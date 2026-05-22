"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Modal, Surface } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaRegEdit } from "react-icons/fa";

const BookingForm = ({ facilityData }) => {
  const { _id, facilityName, availableTimeSlot, image, pricePerHour } =
    facilityData;
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [hours, setHours] = useState(1);
  const totalPrice = pricePerHour * hours;
  const handleBooking = async (e) => {
    e.preventDefault();
    const bookingDate = e.target.bookingDate.value;
    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      userEmail: user?.email,
      facilityDataId: _id,
      facilityName,
      image,
      bookingDate,
      timeSlot: availableTimeSlot,
      pricePerHour,
      hours,
      totalPrice,
      status: "pending",
      createdAt: new Date(),
    };
    const res = await fetch("http://localhost:5000/myBookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();
    toast.success('Booking Successfully!')
  };
  return (
    <Modal>
      <Button
        className={
          "w-full font-bold text-2xl transition-transform duration-500 hover:scale-110 mt-5"
        }
      >
        Booking
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-3xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FaRegEdit className="size-5" />
              </Modal.Icon>
              <h1 className="text-2xl font-bold">Book Facility</h1>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={handleBooking} className="space-y-6">
                  {/* Facility Name */}
                  <div>
                    <label className="block mb-2 font-medium">
                      Facility Name
                    </label>
                    <input
                      value={facilityName}
                      readOnly
                      name="facilityName"
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2"
                    />
                  </div>
                  {/* Booking Date */}
                  <div>
                    <label className="block mb-2 font-medium">
                      Booking Date
                    </label>

                    <input
                      required
                      name="bookingDate"
                      type="date"
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2"
                    />
                  </div>

                  {/* Time Slot */}
                  <div>
                    <label className="block mb-2 font-medium">Time Slot</label>

                    <input
                      value={availableTimeSlot}
                      readOnly
                      name="timeSlot"
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2"
                    />
                  </div>

                  {/* Price Per Hour */}
                  <div>
                    <label className="block mb-2 font-medium">
                      Price Per Hour
                    </label>

                    <input
                      value={pricePerHour}
                      readOnly
                      type="number"
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2"
                    />
                  </div>

                  {/* Hours */}
                  <div>
                    <label className="block mb-2 font-medium">Hours</label>

                    <input
                      name="hours"
                      type="number"
                      min="1"
                      value={hours}
                      onChange={(e) => setHours(Number(e.target.value))}
                      placeholder="Example: 2 hours"
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2"
                    />
                  </div>

                  {/* Total Price */}
                  <div>
                    <label className="block mb-2 font-medium">
                      Total Price
                    </label>

                    <input
                      name="totalPrice"
                      value={totalPrice}
                      readOnly
                      type="number"
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2"
                    />
                  </div>
                  <Modal.Footer>
                    <Button type="submit">Booking Now</Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default BookingForm;
