"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CgMail } from "react-icons/cg";
import { FaFacebook, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";

const Footer = () => {
  const pathName = usePathname();

  return (
    <div className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-0">
      {/* Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-40">
        {/* Logo & Description */}
        <div className="text-center md:text-left">
          <Link href="/">
            <Image
              src="/image/logo.png"
              width={90}
              height={90}
              alt="logo"
              className="mx-auto md:mx-0"
            />

            <h3 className="mt-4 text-sm sm:text-base leading-7">
              Sports clubs and organizations bring people together through
              teamwork, fitness, discipline, and competition. They create
              opportunities for players to improve their physical skills, build
              confidence, and develop leadership qualities. From football and
              cricket to basketball and athletics, sports activities encourage
              healthy lifestyles and strong community connections.
            </h3>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-2 md:mt-4 text-center md:text-left">
          <h3 className="font-bold text-2xl sm:text-3xl mb-2.5">Quick link</h3>

          <hr />

          <div className="space-y-3.5 list-none mt-4">
            <li>
              <Link
                href="/"
                className={`${pathName === "/" ? "font-bold" : ""}`}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/allFacilities"
                className={`${
                  pathName === "/allFacilities" ? "font-bold" : ""
                }`}
              >
                All Facilities
              </Link>
            </li>

            <li>
              <Link
                href="/myBookings"
                className={`${pathName === "/myBookings" ? "font-bold" : ""}`}
              >
                My Bookings
              </Link>
            </li>

            <li>
              <Link
                href="/addFacility"
                className={`${pathName === "/addFacility" ? "font-bold" : ""}`}
              >
                Add Facility
              </Link>
            </li>

            <li>
              <Link
                href="/manageMyFacilities"
                className={`${
                  pathName === "/manageMyFacilities" ? "font-bold" : ""
                }`}
              >
                Manage My Facilities
              </Link>
            </li>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-2 md:mt-4 text-center md:text-left">
          <h3 className="font-bold text-2xl sm:text-3xl mb-2.5">
            Contact Info
          </h3>

          <hr />

          <div className="space-y-3 mt-4">
            <h3 className="flex items-center justify-center md:justify-start text-base sm:text-lg gap-2">
              <CgMail />
              turfi1999@gmail.com
            </h3>

            <h3 className="flex items-center justify-center md:justify-start text-base sm:text-lg gap-2">
              <IoMdCall />
              0999999999
            </h3>

            <div className="flex justify-center md:justify-start font-bold text-2xl gap-3 mt-3">
              <span className="cursor-pointer hover:scale-110 duration-300">
                <FaFacebook />
              </span>

              <span className="cursor-pointer hover:scale-110 duration-300">
                <FaWhatsappSquare />
              </span>

              <span className="cursor-pointer hover:scale-110 duration-300">
                <FaLinkedin />
              </span>

              <span className="cursor-pointer hover:scale-110 duration-300">
                <FaSquareXTwitter />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <hr className="mt-10 mb-4" />

      <p className="mb-8 text-center text-sm sm:text-base">
        © 2026 Sports Club. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
