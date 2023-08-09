import React from "react";
import { SlArrowLeft } from "react-icons/sl";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <div className="mt-10 border-b-2 border-black pb-6">
        <span className="flex justify-between">
          <Link href="/my-account">
            <SlArrowLeft className="mt-2 ml-4 shadow-md rounded-md border-2 border-gray-100 h-[44px] text-orange-500 pt-2 pb-2 bg-white w-[44px]" />
          </Link>
          <h1 className="mt-4 text-center text-[22px] pr-36 font-medium">
            Change Password
          </h1>
        </span>
      </div>
    </div>
  );
}
