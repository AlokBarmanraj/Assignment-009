import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const NotfoundPage = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-5">
        <h1 className="text-7xl font-bold">404</h1>

        <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>

        <p className="text-gray-500 mt-2 max-w-md">
          The page you are looking for does not exist or has been moved.
        </p>

        <Link href="/">
          <Button className="mt-6 px-6 py-3 rounded-xl text-white font-semibold hover:scale-105 transition-transform">
            Back To Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotfoundPage;
