import React from "react";
import { SlArrowLeft } from "react-icons/sl";
import Link from "next/link";
import Footer from "../Component/Footer";

export default function page() {
  return (
    <div className="bg-orange-100 fixed w-full h-screen">
      <div>
        <div className="ml-6 mr-6 pt-6">
          <span className="flex justify-between">
            <Link href="/my-account">
              <SlArrowLeft className="mt-2 shadow-md rounded-md border-2 border-gray-100 h-[44px] text-orange-500 pt-2 pb-2 bg-white w-[44px]" />
            </Link>
            <h1 className="mt-4 text-center text-[22px] pr-32 font-medium">
              Edit Profile
            </h1>
          </span>
          <div className="mt-24">
            <p className="text-[20px] font-medium">Username:</p>
            <input
              type="text"
              placeholder="Mariana Pat"
              className="border-2 mt-4 text-center font-normal text-[16px] rounded-md bg-white w-full h-[40px]"
            />
          </div>
          <div className="mt-14">
            <p className="text-[20px] font-medium">Password:</p>
            <input
              type="text"
              placeholder="********"
              className="border-2 mt-4 font-normal rounded-md text-center text-[16px] bg-white w-full h-[40px]"
            />
          </div>
          <div className="mt-14">
            <p className="text-[20px] font-medium">Edit Location:</p>
            <input
              type="text"
              placeholder="Australia, Syndey"
              className="border-2 mt-4 font-normal rounded-md text-center text-[16px] bg-white w-full h-[40px]"
            />
          </div>
          <button
            type=""
            className="bg-orange-500 px-8 font-medium text-white text-center text-[22px] py-4 w-full rounded-md mt-20"
          >
            Apply
          </button>
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
