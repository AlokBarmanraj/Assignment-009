"use client";

import React, { useState } from "react";
import { Button, Modal, Surface } from "@heroui/react";
import { FaRegEdit } from "react-icons/fa";
import toast from "react-hot-toast";

const MyBookingsUpdate = ({ bookings }) => {
  const {
    _id,
    facilityName,
    bookingDate,
    hours: initialHours,
    availableTimeSlot,
    pricePerHour,
  } = bookings;

  const [hours, setHours] = useState(initialHours);
  const [bookingDateState, setBookingDateState] = useState(bookingDate);

  const totalPrice = hours * pricePerHour;

  const onSubmit = async (e) => {
    e.preventDefault();

    const updatedBooking = {
      bookingDate: bookingDateState,
      hours,
      totalPrice,
    };

    const res = await fetch(`http://localhost:5000/myBookings/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBooking),
    });

    const data = await res.json();
    toast.success("My Bookings Update Successfully")
  };

  return (
    <div>
      <Modal>
        <Button className="bg-taupe-400">
          <FaRegEdit className="mr-2" />
          Update
        </Button>

        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-3xl">
              <Modal.CloseTrigger />

              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <FaRegEdit className="size-5" />
                </Modal.Icon>
                <h1 className="text-2xl font-bold">Update Booking</h1>
              </Modal.Header>

              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onSubmit} className="space-y-6">
                    {/* Facility Name */}
                    <div>
                      <label className="block mb-2 font-medium">
                        Facility Name
                      </label>
                      <input
                        value={facilityName}
                        readOnly
                        className="w-full px-4 py-3 rounded-xl border"
                      />
                    </div>

                    {/* Booking Date */}
                    <div>
                      <label className="block mb-2 font-medium">
                        Booking Date
                      </label>
                      <input
                        type="date"
                        value={bookingDateState}
                        onChange={(e) => setBookingDateState(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border"
                        required
                      />
                    </div>

                    {/* Time Slot */}
                    <div>
                      <label className="block mb-2 font-medium">
                        Time Slot
                      </label>
                      <input
                        value={availableTimeSlot}
                        readOnly
                        className="w-full px-4 py-3 rounded-xl border"
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
                        className="w-full px-4 py-3 rounded-xl border"
                      />
                    </div>

                    {/* Hours */}
                    <div>
                      <label className="block mb-2 font-medium">Hours</label>
                      <input
                        type="number"
                        min="1"
                        value={hours}
                        onChange={(e) => setHours(Number(e.target.value))}
                        className="w-full px-4 py-3 rounded-xl border"
                        required
                      />
                    </div>

                    {/* Total Price */}
                    <div>
                      <label className="block mb-2 font-medium">
                        Total Price
                      </label>
                      <input
                        value={totalPrice}
                        readOnly
                        className="w-full px-4 py-3 rounded-xl border"
                      />
                    </div>

                    {/* Submit */}
                    <Modal.Footer>
                      <Button type="submit" className="w-full">
                        Update Booking
                      </Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default MyBookingsUpdate;
