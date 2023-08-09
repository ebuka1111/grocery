import React from "react";
import { SlArrowLeft } from "react-icons/sl";
import Link from "next/link";
import { BiRadioCircle, BiRadioCircleMarked } from "react-icons/bi";

export default function page() {
  return (
    <div className="bg-orange-100 h-screen">
      <div className="pt-6 border-b-2 border-black pb-8">
        <span className="flex justify-between">
          <Link href="/">
            <SlArrowLeft className="mt-2 ml-4 shadow-md rounded-md border-2 border-gray-100 h-[44px] text-orange-500 pt-2 pb-2 bg-white w-[44px]" />
          </Link>
          <h1 className="mt-4 text-center text-[22px] pr-36 font-medium">
            Payment Details
          </h1>
        </span>
      </div>
      <div className="text-center mt-4">
        <div className="flex justify-around items-center">
          <BiRadioCircle size={28} className="mb-5" />
          <span className="mr-20 mt-2 text-[22px]">
            <p>Debit card / Credit card</p>
            <p>xxxx xxxxx xxxx 0202</p>
          </span>
        </div>
        <div className="mt-6 flex justify-around items-center mr-48">
          <BiRadioCircleMarked className="mr-2 text-orange-500" size={32} />
          <p className="text-[22px]">Net Banking</p>
        </div>
        <div className="mt-6 flex justify-around items-center mr-36">
          <BiRadioCircle size={32} className="mt-1  mr-1" />
          <p className="text-[22px] mr-3">Cash on Delivery</p>
        </div>
        <div className="mt-6 flex justify-around items-center mr-52">
          <BiRadioCircle size={32} className="mr-2" />
          <p className="text-[22px] font-normal mr-8">E-Wallet</p>
        </div>
        <div className="mt-6 flex justify-around items-center mr-40">
          <BiRadioCircle size={32} className="mr-2" />
          <p className="text-[22px] font-normal mr-2">Grocery Wallet</p>
        </div>
      </div>
      <div className="mt-64 border-t-2 border-black">
        <span className="flex justify-between ml-2 mr-2 mt-36">
          <p className="text-[24px] font-normal mt-2">Total Amount:</p>
          <p className="text-[28px] text-orange-500 font-semibold">
            ₦35,000.00
          </p>
        </span>
      </div>
      <div className="mt-4">
        <button className="bg-orange-500 px-24 text-white font-medium text-[22px] py-5 w-full item-center fixed bottom-0 rounded-md">
          Pay Now
        </button>
      </div>
    </div>
  );
}
