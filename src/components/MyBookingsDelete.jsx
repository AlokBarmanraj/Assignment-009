"use client";
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import React from "react";
import toast from "react-hot-toast";
import { MdDeleteOutline } from "react-icons/md";

const MyBookingsDelete = ({ bookings }) => {
  const { _id, facilityName } = bookings;

  const bookingHandleDelete = async () => {
    const { data: tokenData } = await authClient.token();
    const res = await fetch(`http://localhost:5000/myBookings/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`
      },
    });
    const data = await res.json();
    window.location.reload();
    toast.success("Facility Delete Successfully");
  };
  return (
    <AlertDialog>
      <Button variant="danger">
        <MdDeleteOutline />
        Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete Facility permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{facilityName}</strong> and
                all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                onClick={bookingHandleDelete}
                slot="close"
                variant="danger"
              >
                Conform Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default MyBookingsDelete;
