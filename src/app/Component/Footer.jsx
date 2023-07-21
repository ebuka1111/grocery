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
          <li>
            <Link href="/">
              <HiHome className="ml-2 mb-2 h-[22px] w-[22px] hover:text-white" />
              <label className="font-medium" htmlFor="Home">
                Home
              </label>
            </Link>
          </li>
          <li>
            <GrFavorite className="ml-4 mb-2 w-[22px] h-[22px]" />
            <label className="font-medium" htmlFor="Favorite">
              Favorite
            </label>
          </li>
          <li className="mr-1.5">
            <Link href="/Wallet">
              <BsWalletFill className="ml-3 mb-2 w-[22px] h-[22px] hover:shadow-2xl " />
              <label className="font-medium" htmlFor="Wallet">
                Wallet
              </label>
            </Link>
          </li>
          <li>
            <RiShoppingCart2Line className="ml-2 mb-2 w-[22px] h-[22px] shadow-2xl" />
            <label className="font-medium" htmlFor="Cart">
              Cart
            </label>
          </li>
          <li>
            <Link href="/my-account">
              <CgProfile className="ml-3 mb-2 w-[22px] h-[22px] shadow-2xl" />
              <label className="font-medium" htmlFor="Profile">
                Profile
              </label>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
