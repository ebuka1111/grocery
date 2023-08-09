import React from "react";
import { SlArrowLeft } from "react-icons/sl";
import { BsWalletFill } from "react-icons/bs";
import Link from "next/link";
import Footer from "../Component/Footer";

export default function Page() {
  return (
    <div className="bg-orange-100 h-full w-full fixed overflow-auto">
      <div className="">
        <span className="flex space-x-20 mt-8 mr-6 ml-6">
          <Link href="/">
            <SlArrowLeft className="items-center justify-center flex text-orange-500 w-[38px] h-[38px]" />
          </Link>
          <h1 className="font-semibold mt-2 text-[24px]">Wallet History</h1>
        </span>
      </div>
      <div className="border-4 border-orange-500 shadow-lg mt-16 ml-6 mr-6 bg-white rounded-md px-4 py-4">
        <span className="flex justify-between">
          <h2 className="mt-2 text-[24px] text-gray-600">Wallet Balance</h2>
          <BsWalletFill className="bg-white shadow-lg rounded-md text-orange-500 w-[38px] h-[38px] px-2 py-2" />
        </span>
        <p className="font-semibold mt-2 text-[22px]">₦500.00</p>
        <Link href="/add-money">
          <button className=" text-white bg-orange-500 w-full py-4 mt-4  rounded-lg text-[20px] font-semibold">
            Add Money
          </button>
        </Link>
      </div>
      <div className="mt-6 ml-6 mr-6">
        <h2 className="font-normal text-[22px]">Today</h2>
        <div className="mt-2 border px-4 py-4 rounded-md shadow-lg bg-white text-[18px]">
          <span className="flex justify-between">
            <p>Money Added to Wallet</p>
            <p className="text-green-500">+ ₦500.00</p>
          </span>
          <span className="flex justify-between mt-2">
            <p className="text-gray-400">24 April|7:30AM</p>
            <p>Balance ₦12,000.00</p>
          </span>
        </div>
        <h2 className="mt-6 font-normal text-[22px]">Yesterday</h2>
        <div className="mt-2 border px-4 py-4 rounded-md shadow-md text-[18px] bg-white">
          <span className="flex justify-between">
            <p>Order No 34234</p>
            <p className="text-red-500">- ₦500.00</p>
          </span>
          <span className="flex justify-between mt-2">
            <p className="text-gray-400">23 April|5:30AM</p>
            <p>Balance ₦11,250.00</p>
          </span>
        </div>
        <h2 className="font-normal mt-6 text-[22px]">22 April 2023</h2>
        <div className="mt-4 border px-4 py-4 rounded-md shadow-md text-[18px] bg-white">
          <span className="flex justify-between">
            <p>Refund for Order No 34234</p>
            <p className="text-green-500">+ ₦500.00</p>
          </span>
          <span className="flex justify-between mt-2">
            <p className="text-gray-400">22 April|7:30AM</p>
            <p>Balance ₦11,250.00</p>
          </span>
        </div>
        <div className="mt-6 border px-4 py-4 rounded-md shadow-md text-[18px] bg-white">
          <span className="flex justify-between">
            <p>Money Added to Wallet</p>
            <p className="text-orange-500">+ ₦500.00</p>
          </span>
          <span className="flex justify-between mt-2">
            <p className="text-gray-400">22 April|7:30AM</p>
            <p>Balance ₦11,250.00</p>
          </span>
        </div>
        <div className="mt-6 shadow-md bg-white border px-4 py-4 text-[18px] rounded-md">
          <span className="flex justify-between">
            <p>Money Added to Wallet</p>
            <p className="text-red-500">+ ₦500.00</p>
          </span>
          <span className="flex justify-between mt-2">
            <p>22 April|7:30AM</p>
            <p>Balance ₦11,250.00</p>
          </span>
        </div>
        <div className="mt-6 border px-4 py-4 rounded-md shadow-md text-[18px] bg-white">
          <span className="flex justify-between">
            <p>Money Added to Wallet</p>
            <p className="text-red-500">+ ₦500.00</p>
          </span>
          <span className="flex justify-between mt-2">
            <p>22 April|7:30AM</p>
            <p>Balance ₦11,250.00</p>
          </span>
        </div>
        <div className="mt-6 border px-4 py-4 rounded-md shadow-md text-[18px] bg-white">
          <span className="flex justify-between">
            <p>Money Added to Wallet</p>
            <p className="text-red-500">+ ₦500.00</p>
          </span>
          <span className="flex justify-between mt-2">
            <p>22 April|7:30AM</p>
            <p>Balance ₦11,250.00</p>
          </span>
        </div>
        <div className="mt-6 border px-4 py-4 rounded-md text-[18px]">
          <span className="flex justify-between">
            <p>Money Added to Wallet</p>
            <p className="text-red-500">+ ₦500.00</p>
          </span>
          <span className="flex justify-between mt-2">
            <p>22 April|7:30AM</p>
            <p>Balance ₦11,250.00</p>
          </span>
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
