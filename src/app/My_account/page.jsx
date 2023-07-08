import Image from "next/image";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdOutlineArrowBackIos } from "react-icons/md";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsWalletFill } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { LuLanguages } from "react-icons/lu";

export default function page() {
  return (
    <div className="pl-6 pr-6 mt-6 mb-6 w-full overflow-hidden fixed">
      <div>
        <Link href="/">
          <span className="flex justify-between">
            <MdOutlineArrowBackIos className="mt-2 shadow-4xl rounded-lg border-4 border-gray-100 h-[60px] pt-2 pb-2 bg-white w-[60px]" />
            <h1 className="mt-8 text-[20px] pr-40 font-medium">My Account</h1>
          </span>
        </Link>
      </div>

      <div className="pt-20">
        <div className="flex items-center justify-center h-[20] w-[20] rounded-full border-4 border-orange-600 bg-white ml-28 mr-28">
          <Image
            alt=""
            src={"/Media/drinks.jpg"}
            width={150}
            height={150}
            className="rounded-full px-4 py-10 text-orange-600"
          />
          <div></div>
        </div>
        <h2 className="pt-6 text-center font-bold text-[20px]">
          Igboeri D. Ebuka
        </h2>
      </div>
      <div className="pt-6 mt-24 mr-8 bg-orange-600 h-[600px] w-full rounded-3xl">
        <div>
          <p className="text-white border-t-4 border-white ml-40 rounded mr-40  "></p>
          <p className="ml-4 mr-2 mt-8 text-white text-[18px] font-semibold">
            Account Review
          </p>
        </div>
        <div className="flex justify-evenly pt-6 ml-4 text-white">
          <span className="flex justify-around">
            <CgProfile className=" text-orange-600 mr-6 w-[50px] h-[50px] border rounded-2xl px-1 py-1 bg-white" />
            <label
              className="text-[20px] text-left mr-4 font-medium pt-2 pl-2"
              htmlFor="My Profile"
            >
              My Profile
            </label>
          </span>
          <MdArrowForwardIos className="ml-28 w-[24px] h-[24px] mt-4 mr-4" />
        </div>
        <div className="flex justify-evenly pt-6 ml-4 text-white">
          <span className="flex justify-around">
            <AiOutlineShoppingCart className=" text-orange-600 mr-6 w-[50px] h-[50px] border rounded-2xl px-1 py-1 bg-white" />
            <label
              className="text-[20px] font-medium pt-2 pl-2 mr-4"
              htmlFor="My Order"
            >
              My Order
            </label>
          </span>
          <MdArrowForwardIos className="ml-28 w-[24px] h-[24px] mt-4 mr-4" />
        </div>

        <div className="flex justify-evenly pt-6 ml-4 text-white">
          <span className="flex justify-around">
            <BsWalletFill className=" text-orange-600 mr-6 w-[50px] h-[50px] border rounded-2xl px-1 py-1 bg-white" />
            <label
              className="text-[20px] font-medium pt-2 pl-2 mr-6"
              htmlFor="Payment"
            >
              Payment
            </label>
          </span>
          <MdArrowForwardIos className="ml-28 w-[24px] h-[24px] mt-4 mr-4" />
        </div>
        <div className="flex justify-evenly pt-6 ml-4 text-white">
          <span className="flex justify-around">
            <RiLockPasswordLine className=" text-orange-600 mr-2  w-[50px] h-[50px] border rounded-2xl px-1 py-1 bg-white" />
            <label
              className="text-[20px] font-medium pt-2 pl-2  ml-4"
              htmlFor="Change Password"
            >
              Change Password
            </label>
          </span>
          <MdArrowForwardIos className="ml-12 w-[24px] h-[24px] mt-4 mr-4" />
        </div>
        <div className="flex justify-evenly pt-6 ml-4 text-white">
          <span className="flex justify-around">
            <LuLanguages className=" text-orange-600 mr-6 w-[50px] h-[50px] border rounded-2xl px-1 py-1 bg-white" />
            <label
              className="text-[20px] font-medium pt-2 pl-2"
              htmlFor="Change Languege"
            >
              Change Language
            </label>
          </span>
          <MdArrowForwardIos className="ml-12 w-[24px] h-[24px] mt-4 mr-4" />
        </div>
      </div>
    </div>
  );
}
