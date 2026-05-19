"use client";
import { useState } from "react";
import { Button } from "@heroui/react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ThemeSwitch } from "./ThemeSwitch";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();
  const navLink = (
    <>
      <li>
        <Link href="/" className={`${pathName === "/" ? "font-bold" : " "}`}>
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/allFacilities"
          className={`${pathName === "/allFacilities" ? "font-bold" : " "}`}
        >
          All Facilities
        </Link>
      </li>
      <li>
        <Link
          href="/myBookings"
          className={`${pathName === "/myBookings" ? "font-bold" : " "}`}
        >
          My Bookings
        </Link>
      </li>
      <li>
        <Link
          href="/addFacility"
          className={`${pathName === "/addFacility" ? "font-bold" : " "}`}
        >
          Add Facility
        </Link>
      </li>
      <li>
        <Link
          href="/manageMyFacilities"
          className={`${pathName === "/manageMyFacilities" ? "font-bold" : " "}`}
        >
          Manage My Facilities
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <nav className="sticky mt-2 top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <div className="flex items-center gap-3">
              <Link href="/">
                <Image
                  src="/image/logo.png"
                  width={90}
                  height={90}
                  alt="logo"
                ></Image>
              </Link>
            </div>
          </div>
          <ul className="hidden items-center gap-4 md:flex">{navLink}</ul>
          <div className="hidden items-center gap-4 md:flex">
            <Link href="signin">Login</Link>
            <Link href="/signup"><Button>Sign Up</Button></Link>
            <div>
              <ThemeSwitch></ThemeSwitch>
            </div>
          </div>
        </header>
        {isMenuOpen && (
          <div className="border-t border-separator backdrop-blur-lg md:hidden">
            <ul className="flex flex-col gap-2 p-4">
              {navLink}
              <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
                <Link href="/signin" className="block py-2">
                  Login
                </Link>
                <Link href="/signup"><Button className="w-full">Sign Up</Button></Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <div></div>
    </div>
  );
};
export default Navbar;