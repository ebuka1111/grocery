import React from "react";
import { SlArrowLeft } from "react-icons/sl";
import { BsWalletFill } from "react-icons/bs";
import Link from "next/link";
import Footer from "../Component/Footer";

export default function Page() {
  return (
    <div className="bg-gray-100 h-screen w-full fixed shadow-md">
      <div>
        <span className="flex space-x-20 mt-8 mr-6 ml-6">
          <Link href="/">
            <SlArrowLeft className="border-2 items-center justify-center flex px-2 text-orange-500 py-2 w-[50px] shadow-lg h-[50px] rounded drop-shadow-lg" />
          </Link>
          <h1 className="font-semibold mt-3 text-[20px]">Wallet History</h1>
        </span>
      </div>
      <div className="border-4 border-orange-500 shadow-lg mt-16 ml-6 mr-6 bg-white rounded-md px-4 py-4">
        <span className="flex justify-between">
          <h2 className="mt-2 text-gray-600">Wallet Balance</h2>
          <BsWalletFill className="bg-white shadow-lg rounded-md text-orange-500 w-[36px] h-[36px] px-2 py-2" />
        </span>
        <p className="font-bold">$ 500.00</p>
        <Link href="/add-money">
          <button className=" text-white bg-orange-500 w-full py-4 mt-4  rounded-lg text-[14px] font-semibold">
            Add Money
          </button>
        </Link>
      </div>
      <div className="mt-6 ml-6 mr-6">
        <h2 className="font-semibold">Today</h2>
        <div className="mt-2 border px-2 py-2 rounded-md">
          <span className="flex justify-between">
            <p>Money Added to Wallet</p>
            <p className="text-green-500">+ $500.00</p>
          </span>
          <span className="flex justify-between">
            <p className="text-gray-400">24 April|7:30AM</p>
            <p>Balance $12,000.00</p>
          </span>
        </div>
        <h2 className="mt-6 font-semibold">Yesterday</h2>
        <div className="mt-2 border px-2 py-2 rounded-md">
          <span className="flex justify-between">
            <p>Order No 34234</p>
            <p className="text-red-500">- $500.00</p>
          </span>
          <span className="flex justify-between">
            <p className="text-gray-400">23 April|5:30AM</p>
            <p>Balance $11,250.00</p>
          </span>
        </div>
        <h2 className="font-semibold mt-6">22 April 2023</h2>
        <div className="mt-2 border px-2 py-2 rounded-md">
          <span className="flex justify-between">
            <p>Refund for Order No 34234</p>
            <p className="text-green-500">+ $500.00</p>
          </span>
          <span className="flex justify-between">
            <p className="text-gray-400">22 April|7:30AM</p>
            <p>Balance $11,250.00</p>
          </span>
        </div>
        <div className="mt-2 border px-2 py-2 rounded-md">
          <span className="flex justify-between">
            <p>Money Added to Wallet</p>
            <p className="text-orange-500">+ $500.00</p>
          </span>
          <span className="flex justify-between">
            <p className="text-gray-400">22 April|7:30AM</p>
            <p>Balance $11,250.00</p>
          </span>
        </div>
        <div className="mt-8 border px-2 py-2 rounded-md">
          <span className="flex justify-between">
            <p>Money Added to Wallet</p>
            <p className="text-red-500">+ $500.00</p>
          </span>
          <span className="flex justify-between">
            <p>22 April|7:30AM</p>
            <p>Balance $11,250.00</p>
          </span>
        </div>
        <div className="mt-8 border px-2 py-2 rounded-md">
          <span className="flex justify-between">
            <p>Money Added to Wallet</p>
            <p className="text-red-500">+ $500.00</p>
          </span>
          <span className="flex justify-between">
            <p>22 April|7:30AM</p>
            <p>Balance $11,250.00</p>
          </span>
        </div>
        <div className="mt-8 border px-2 py-2 rounded-md">
          <span className="flex justify-between">
            <p>Money Added to Wallet</p>
            <p className="text-red-500">+ $500.00</p>
          </span>
          <span className="flex justify-between">
            <p>22 April|7:30AM</p>
            <p>Balance $11,250.00</p>
          </span>
        </div>
        <div className="mt-8 border px-2 py-2 rounded-md">
          <span className="flex justify-between">
            <p>Money Added to Wallet</p>
            <p className="text-red-500">+ $500.00</p>
          </span>
          <span className="flex justify-between">
            <p>22 April|7:30AM</p>
            <p>Balance $11,250.00</p>
          </span>
        </div>
      </div>
      <div className="fixed bottom-1 w-full">
        <Footer />
      </div>
    </div>
  );
}
