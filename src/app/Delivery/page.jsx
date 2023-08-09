import React from "react";
import Link from "next/link";
import { SlArrowLeft } from "react-icons/sl";
import { FiEdit2 } from "react-icons/fi";
import { MdRadioButtonChecked, MdArrowDropDown } from "react-icons/md";

export default function page() {
  return (
    <div className="bg-orange-100 w-full h-screen fixed">
      <div className="mt-10 border-b-2 border-black pb-6">
        <span className="flex justify-between">
          <Link href="/my-account">
            <SlArrowLeft className="mt-2 ml-4 shadow-md rounded-md border-2 border-gray-100 h-[44px] text-orange-500 pt-2 pb-2 bg-white w-[44px]" />
          </Link>
          <h1 className="mt-4 text-center text-[26px] pr-24 font-semibold">
            Delivery Details
          </h1>
        </span>
      </div>
      <div>
        <p className="text-[24px] font-medium ml-2 mt-2">Mariana Pat</p>
        <span className="flex justify-between mt-4 ml-4 mr-4 border-black border-b-2 pb-2">
          <p>08107472519</p>
          <p>Marianapat444@gmail.com</p>
        </span>
        <div className="ml-4 mt-2 mr-4 border-b-2 border-black mb-2">
          <span className="flex text-center justify-between">
            <p className="text-[20px] font-medium mt-1">Saved Address</p>
            <p className="text-[16px] text-orange-500 mt-2 ml-6">Change</p>
            <button className="px-4 text-[18px] py-2 bg-orange-500 mb-2">
              Add Now
            </button>
          </span>
        </div>
        <div className="mt-4 ml-4 mr-3 bg-white item-center">
          <div className="border-4 border-orange-500 rounded-md py-3 item-center">
            <div className="flex justify-between ml-2 mr-2">
              <span className="flex justify-around">
                <p className="mt-1 ml-3 text-orange-500">
                  <MdRadioButtonChecked size={28} />
                </p>
                <p className="text-[24px] ml-2">Home</p>
              </span>
              <p className="text-orange-500 mr-2">
                <FiEdit2 size={32} />
              </p>
            </div>
            <p className="mt-4 ml-4 mr-4 text-[20px] font-normal text-center">
              A-21, Plot no. 548 Deep Laxmi Society.Charkop sector-5
              Kandivali(West).Mumbai 400067
            </p>
          </div>
        </div>
        <div className="border-t-2 mt-4 border-black border-b-2 pb-2 pt-2 item-center ml-4 mr-4">
          <p className="text-[20px] pb-4">Timings</p>
          <span className="flex justify-between item-center">
            <p className="flex justify-around text-[20px] bg-white border-black border-2 rounded-md item-center px-2 py-2">
              08:00 - 10:00
              <MdArrowDropDown size={32} className="text-orange-500" />
            </p>
            <p className="flex justify-around border-black bg-white border-2 rounded-md item-center px-2 py-2 text-[20px]">
              PM
              <MdArrowDropDown size={32} className="text-orange-500" />
            </p>
          </span>
        </div>
        <div className="mt-32">
          <div className="border-t-2 border-black item-center flex justify-between ml-4 mr-4 pt-10">
            <p className="text-[20px] font-medium mt-2">Total Amount</p>
            <p className="text-[28px] text-orange-500 font-semibold">
              ₦35,000.00
            </p>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <Link href="/Payment">
          <button className="bg-orange-500 px-24 text-white font-medium text-[20px] py-4 w-full item-center rounded-md">
            Proceed to Payment
          </button>
        </Link>
      </div>
    </div>
  );
}
