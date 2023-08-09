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
import Footer from "../Component/Footer";

export default function page() {
  return (
    <div className="mb-4 bg-white h-screen w-full fixed shadow-md overflow-auto">
      <div className="mt-6">
        <Link href="/">
          <div className="flex">
            <MdOutlineArrowBackIos className="shadow-4xl ml-4 text-orange-500 rounded-lg border-4 border-gray-100 h-[50px] pt-2 pb-2 bg-white w-[50px]" />
            <h1 className="text-[24px] mt-3 ml-16 text-center font-medium">
              My Account
            </h1>
          </div>
        </Link>
      </div>
      <div className="mt-12">
        <div className="flex items-center justify-center h-[20] w-[20] ml-28 mr-28">
          <Image
            alt=""
            src={"/Media/jessy.PNG"}
            width={200}
            height={200}
            className="rounded-full"
          />
          <div></div>
        </div>
        <h2 className="mt-6 text-center font-semibold text-[22px]">
          Igboeri D. Ebuka
        </h2>
      </div>
      <div className="pt-6 mt-16 mr-8 bg-orange-600 h-[560px] w-full rounded-3xl hover:bg-white hover:text-orange-500">
        <div>
          <p className="text-white border-t-4 text-center border-white ml-36 rounded mr-36  "></p>
          <p className="ml-4 mr-2 mt-8 text-white text-[20px] font-semibold">
            Account Review
          </p>
        </div>
        <div className="flex justify-evenly pt-6 ml-4 text-white cursor-pointer">
          <span className="flex justify-around">
            <CgProfile className=" text-orange-600 mr-6 w-[50px] h-[50px] border rounded-2xl px-1 py-1 bg-white" />
            <label
              className="text-[20px] text-left mr-4 font-medium pt-2 pl-2"
              htmlFor="My Profile"
            >
              My Profile
            </label>
          </span>
          <Link href="/Profile">
            <MdArrowForwardIos className="ml-28 w-[24px] h-[24px] mt-4 mr-4" />
          </Link>
        </div>
        <Link className="cursor-pointer" href="/cart">
          <div className="flex cursor-pointer justify-evenly items-center pt-6 ml-4 text-white">
            <span className="flex justify-around items-center">
              <AiOutlineShoppingCart className=" text-orange-600 items-center justify-center mr-6 w-[50px] h-[50px] border rounded-2xl px-1 py-1 bg-white" />
              <label
                className="text-[20px] font-medium pt-2 pl-2 mr-6"
                htmlFor="My Order"
              >
                My Order
              </label>
            </span>
            <Link href="/cart">
              <MdArrowForwardIos className="ml-28 items-center w-[24px] h-[24px] mt-4 mr-4" />
            </Link>
          </div>
        </Link>
        <Link className="cursor-pointer" href="/Delivery">
          <div className="flex cursor-pointer justify-evenly pt-6 ml-4 text-white">
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
        </Link>
        <div className="flex justify-evenly cursor-pointer pt-6 ml-4 text-white">
          <Link href="/Change_Password">
            <span className="flex justify-around cursor-pointer">
              <RiLockPasswordLine className=" text-orange-600 mr-2  w-[50px] h-[50px] border rounded-2xl px-1 py-1 bg-white" />
              <label
                className="text-[20px] font-medium pt-2 pl-2"
                htmlFor="Change Password"
              >
                Change Password
              </label>
            </span>
          </Link>
          <MdArrowForwardIos className="ml-12 w-[24px] h-[24px] mt-4 mr-4" />
        </div>
        <div className="flex justify-evenly cursor-pointer pt-6 pb-6 ml-4 text-white">
          <span className="flex justify-between">
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
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
