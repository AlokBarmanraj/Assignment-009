"use client";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const DeleteFacility = ({ facility }) => {
  const { _id, facilityName } = facility;
  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5000/addFacility/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      }
    });
    const data =await res.json()
    redirect("/manageMyFacilities")
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
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteFacility;
