"use client";
import { Button, Modal, Surface } from "@heroui/react";
import { redirect } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { FaRegEdit } from "react-icons/fa";

const EditFacility = ({ facility }) => {
  const { _id,    facilityName,
    facilityType,
    image,
    location,
    pricePerHour,
    capacity,
    availableTimeSlot,
    description, } = facility;
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const facility = Object.fromEntries(formData.entries());
    const res = await fetch(`http://localhost:5000/addFacility/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(facility),
    });
    const data = await res.json();
    toast.success("Facility Edit Successfully")
    redirect(`/manageMyFacilities/${_id}`)
  };
  return (
    <Modal>
      <Button variant="outline">
        <FaRegEdit />
        Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-3xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FaRegEdit className="size-5" />
              </Modal.Icon>
              <h1 className="text-2xl font-bold ">Edit Facility</h1>
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
                      name="facilityName"
                      type="text"
                      placeholder="Enter facility name"
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2"
                    />
                  </div>

                  {/* Facility Type */}
                  <div>
                    <label className="block mb-2 font-medium">
                      Facility Type
                    </label>

                    <select
                      name="facilityType"
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2"
                    >
                      <option className="text-black">Football Turf</option>
                      <option className="text-black">Cricket Ground</option>
                      <option className="text-black">Badminton Court</option>
                      <option className="text-black">Swimming Pool</option>
                      <option className="text-black">Tennis Court</option>
                    </select>
                  </div>

                  {/* Image Upload */}
                  <div>
                    <label className="block mb-2 font-medium">Image URL</label>

                    <input
                      type="url"
                      name="image"
                      placeholder="Enter image url"
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block mb-2 font-medium">Location</label>

                    <input
                      name="location"
                      type="text"
                      placeholder="Enter facility location"
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2"
                    />
                  </div>

                  {/* Price & Capacity */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block mb-2 font-medium">
                        Price Per Hour
                      </label>

                      <input
                        name="pricePerHour"
                        type="number"
                        placeholder="$20"
                        className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 font-medium">Capacity</label>

                      <input
                        name="capacity"
                        type="number"
                        placeholder="Maximum players"
                        className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2"
                      />
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div>
                    <label className="block mb-2 font-medium">
                      Available Time Slots
                    </label>

                    <input
                      name="availableTimeSlot"
                      type="text"
                      placeholder="Example: 6AM - 10PM"
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block mb-2 font-medium">
                      Description
                    </label>

                    <textarea
                      name="description"
                      rows={5}
                      placeholder="Write facility details..."
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2"
                    ></textarea>
                  </div>
                  <Modal.Footer>
                    <Button type="submit" slot="close">
                      Save
                    </Button>
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

export default EditFacility;
