import React from "react";
import { HiHome } from "react-icons/hi";
import { GrFavorite } from "react-icons/gr";
import { BsWalletFill } from "react-icons/bs";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="shadow-lg  bg-orange-500 border-2 pt-2 pb-2">
      <section>
        <ul className="flex justify-between ml-6 mr-6">
          <Link className="cursor-pointer" href="/">
            <li>
              <HiHome className="ml-2 mb-2 cursor-pointer h-[22px] w-[22px] hover:text-white" />
              <label
                className="font-medium cursor-pointer hover:text-white"
                htmlFor="Home"
              >
                Home
              </label>
            </li>
          </Link>
          <Link className="cursor-pointer" href="/favorite">
            <li>
              <GrFavorite className="ml-4 mb-2 cursor-pointer hover:text-white w-[22px] h-[22px]" />
              <label
                className="font-medium cursor-pointer hover:text-white"
                htmlFor="Favorite"
              >
                Favorite
              </label>
            </li>
          </Link>
          <Link className="cursor-pointer" href="/Wallet">
            <li className="mr-1.5">
              <BsWalletFill className="ml-3 cursor-pointer mb-2 w-[22px] hover:text-white  h-[22px] hover:shadow-2xl " />
              <label
                className="cursor-pointer font-medium hover:text-white"
                htmlFor="Wallet"
              >
                Wallet
              </label>
            </li>
          </Link>
          <Link className="cursor-pointer" href="/cart">
            <li>
              <RiShoppingCart2Line className="ml-2 cursor-pointer hover:text-white mb-2 w-[22px] h-[22px] shadow-2xl" />
              <label
                className="font-medium cursor-pointer hover:text-white"
                htmlFor="Cart"
              >
                Cart
              </label>
            </li>
          </Link>
          <Link className="cursor-pointer" href="/my-account">
            <li className="">
              <CgProfile className="ml-3 cursor-pointer hover:text-white mb-2 w-[22px] h-[22px] shadow-2xl" />
              <label
                className="font-medium cursor-pointer hover:text-white"
                htmlFor="Profile"
              >
                Profile
              </label>
            </li>
          </Link>
        </ul>
      </section>
    </div>
  );
}
