import React from "react";
import { SlArrowLeft } from "react-icons/sl";
import { MdLocationPin } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { IoIosTime } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

export default function page() {
  return (
    <div>
      <div className="ml-6 mr-6 pt-6">
        <span className="flex justify-between">
          <SlArrowLeft className="mt-2 rounded-lg border-2 border-gray-100 h-[40px] pt-2 pb-2 bg-white w-[40px]" />
          <h1 className="mt-4 text-[20px] pr-32 font-semibold">Contact Us</h1>
        </span>
      </div>
      <div className="mt-12 ml-6 border-2 border-gray-100 mr-6 rounded py-3 px-3">
        <span className="flex justify-between">
          <MdLocationPin className="h-[22px] w-[22px] text-green-500" />
          <label htmlFor="Address" className="mr-52 font-bold">
            Address
          </label>
          <select name="" id="" className=""></select>
        </span>
      </div>
      <div className="mt-6 ml-6 mr-6  border-2 rounded border-gray-100 py-3 px-3">
        <span className="flex justify-between pb-4">
          <BsFillTelephoneFill className="h-[22px] w-[22px] text-green-500" />
          <label htmlFor="Address" className="font-bold mr-40">
            Phone Number
          </label>
          <IoIosArrowUp />
        </span>
        <span>
          <span className="flex justify-around pt-2 border-t-2 border-gray-100">
            <BsDot className="text-green-400 w-8 h-8 ml-" />
            <label className="text-xs font-thin pt-2 pr-48" htmlFor="Telephone">
              +91 98564 5280034
            </label>
          </span>
        </span>
      </div>
      <div className="mt-6 ml-6 border-2 border-gray-100 mr-6 rounded py-3 px-3">
        <span className="flex justify-between">
          <BsGlobe className="h-[22px] w-[22px] text-green-500" />
          <label htmlFor="Address" className="font-bold pr-48">
            Website
          </label>
          <select name="" id="" className=""></select>
        </span>
      </div>
      <div className="mt-6 ml-6 border-2 border-gray-100 mr-6 rounded py-3 px-3">
        <span className="flex justify-between">
          <IoIosTime className="h-[22px] w-[22px] text-green-500" />
          <label htmlFor="Address" className="font-bold mr-56">
            Time
          </label>
          <select name="" id="" className="">
            <optgroup>
              <option value=" "></option>
            </optgroup>
          </select>
        </span>
      </div>
      <div className="mt-6 ml-6 border-2 border-gray-100 mr-6 rounded py-3 px-3">
        <span className="flex justify-between">
          <IoMdMail className="h-[22px] w-[22px] text-green-500" />
          <label htmlFor="Address" className="font-bold mr-52">
            E mail
          </label>
          <select name="" id="" className=""></select>
        </span>
      </div>
    </div>
  );
}
