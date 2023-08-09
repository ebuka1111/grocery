import React from "react";
import { SlArrowLeft } from "react-icons/sl";
import { MdLocationPin } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { IoIosTime } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import Footer from "../Component/Footer";
import Link from "next/link";

export default function page() {
  return (
    <div className="fixed overflow-auto w-full bg-orange-100 h-screen">
      <div className="ml-6 mr-6 pt-6">
        <span className="flex justify-between">
          <Link href="/">
            <SlArrowLeft
              size={40}
              className="mr-12 mt-4 rounded-md text-orange-500 text-center "
            />
          </Link>
          <h1 className="mt-4 text-center text-[22px] pr-32 font-medium">
            Contact Us
          </h1>
        </span>
      </div>
      <div className="mt-12 ml-6 border-2 border-orange-500 mr-6 bg-white shadow-md rounded-sm py-3 px-3">
        <span className="flex justify-between">
          <MdLocationPin className="h-[28px] w-[28px] text-orange-500" />
          <label htmlFor="Address" className="mr-48 text-[20px] font-normal">
            Address
          </label>
          <select name="" id="" className="bg-transparent"></select>
        </span>
      </div>
      <div className="mt-6 ml-6 mr-6  border-2 bg-white shadow-md rounded-sm border-orange-500 py-3 px-3">
        <span className="flex justify-between pb-4">
          <BsFillTelephoneFill className="h-[28px] w-[28px] text-orange-500" />
          <pre htmlFor="Address" className="text-[20px] font-normal mr-36">
            Phone Number
          </pre>
          <IoIosArrowUp />
        </span>
        <span>
          <span className="flex justify-around pt-2 border-t-2 border-gray-100">
            <BsDot className="text-orange-500 w-8 h-8 ml-" />
            <pre
              className="text-sm font-normal
               pt-2 pr-48 text-black"
              htmlFor="Telephone"
            >
              +91 98564 5280034
            </pre>
          </span>
        </span>
      </div>
      <div className="mt-6 ml-6 border-2 bg-white shadow-md border-orange-500 mr-6 rounded-sm py-3 px-3">
        <span className="flex justify-between">
          <BsGlobe className="h-[28px] w-[28px] text-orange-500" />
          <label htmlFor="Address" className="mr-48 text-[20px] font-normal">
            Website
          </label>
          <select name="" id="" className="bg-transparent"></select>
        </span>
      </div>
      <div className="mt-6 ml-6 border-2 border-orange-500 mr-6 rounded-sm bg-white shadow-md py-3 px-3">
        <span className="flex justify-between">
          <IoIosTime className="h-[28px] w-[28px] text-orange-500" />
          <label htmlFor="Address" className="mr-48 text-[20px] font-normal">
            Time
          </label>
          <select name="" id="" className="bg-transparent">
            <optgroup>
              <option value=""></option>
            </optgroup>
          </select>
        </span>
      </div>
      <div className="mt-6 ml-6 bg-white shadow-md border-2 border-orange-500 mr-6 rounded-sm py-3 px-3">
        <span className="flex justify-between">
          <IoMdMail className="h-[22px] w-[22px] text-orange-500" />
          <label htmlFor="Address" className="mr-48 text-[20px] font-normal">
            E mail
          </label>
          <select name="" id="" className="bg-transparent"></select>
        </span>
      </div>
      <div className="fixed bottom-1 w-full">
        <Footer />
      </div>
    </div>
  );
}
