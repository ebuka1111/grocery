"use client";
import React from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { BiPhoneCall } from "react-icons/bi";
import { MdHelp } from "react-icons/md";
import { FcRatings } from "react-icons/fc";
import { LuLogOut } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsCardChecklist, BsExclamationCircle } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [Nav, setNav] = useState(false);
  return (
    <div className={"ml-6 h-screen w-full fixed"}>
      <nav className="bg-transparent top-2 fixed md:w-[47.4%] w-[100%] z-10 overflow-hidden">
        <ul className="flex">
          <div onClick={() => setNav((prev) => !prev)} className="mt-4">
            <RxHamburgerMenu size={30} className="z-50 text-orange-500" />
          </div>
          <div
            className={
              Nav
                ? "fixed left-0 top-0 md:w-[30%] z-50 h-screen bg-orange-500 overscroll-auto p-10 ease-in duration-1000"
                : "fixed left-[-100%] top-100 p-0 ease-in duration-500"
            }
          >
            <div className="text-white" onClick={() => setNav((prev) => !prev)}>
              <AiOutlineClose size={30} className="mb-2" />
            </div>
            <div className="flex flex-col gap-4 overflow-auto py-4 px-4 text-white">
              <li>
                <Image
                  className="rounded-full"
                  src={"/Media/jessy.PNG"}
                  alt="jessy"
                  height={100}
                  width={100}
                />
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-2 text-[22px] font-semibold"
              >
                Welcome Daniel
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-2 flex space-x-4 text-[20px] font-normal"
              >
                <BsCardChecklist size={24} className="mt-1 mr-1" />
                Your Last Choice
              </li>
              <Link href="/deals">
                <li
                  onClick={() => setNav(false)}
                  className="py-2 flex space-x-4 text-[20px] font-normal"
                >
                  <MdOutlineLocalOffer size={24} className="mt-1 mr-1" />
                  Offer & Promotions
                </li>
              </Link>
              <Link href="/refer">
                <li
                  onClick={() => setNav(false)}
                  className="py-2 flex space-x-4 text-[20px] font-normal"
                >
                  <IoIosPeople size={24} className="mt-1 mr-1" />
                  Refer and earn
                </li>
              </Link>
              <Link href="/contact-us">
                <li
                  onClick={() => setNav(false)}
                  className="py-2 flex space-x-4 font-normal"
                >
                  <BiPhoneCall size={24} className="mt-1 mr-1" />
                  Contact Us
                </li>
              </Link>
              <Link href="/Help-center">
                <li
                  onClick={() => setNav(false)}
                  className="py-2 flex space-x-4 font-normal"
                >
                  <MdHelp size={24} className="mt-1 mr-1" />
                  Help Center
                </li>
              </Link>
              <li
                onClick={() => setNav(false)}
                className="py-2 flex space-x-4 font-normal"
              >
                <FcRatings size={24} className="text-white mt-1 mr-1" />
                Rate Us
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-2 flex space-x-4 font-normal"
              >
                <BsExclamationCircle size={24} className="mt-1 mr-1" />
                About Us
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-2 flex space-x-4 font-normal"
              >
                <LuLogOut size={24} className="mt-1 mr-1" />
                Offer & Promotions
              </li>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
}
