import React from "react";
import { HiHome } from "react-icons/hi";
import { GrFavorite } from "react-icons/gr";
import { BsWalletFill } from "react-icons/bs";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="mt-8 shadow-lg  bg-orange-500 border-2 pt-2 pb-2">
      <section>
        <ul className="flex justify-between ml-6 mr-6">
          <li>
            <Link href="/">
              <HiHome className="ml-2 mb-1 w-[24px] text-white h-[24px]" />
              <label htmlFor="Home">Home</label>
            </Link>
          </li>
          <li>
            <GrFavorite className="ml-4 mb-1 w-[24px] h-[24px] hover:shadow-2xl" />
            <label htmlFor="Favorite">Favorite</label>
          </li>
          <li className="mr-1.5">
            <Link href="/Wallet">
              <BsWalletFill className="ml-3 mb-1 w-[24px] h-[24px] hover:shadow-2xl " />
              <label htmlFor="Wallet" className="">
                Wallet
              </label>
            </Link>
          </li>
          <li>
            <RiShoppingCart2Line className="ml-2 mb-1 w-[24px] h-[24px] shadow-2xl" />
            <label htmlFor="Cart">Cart</label>
          </li>
          <li>
            <Link href="/My_account">
              <CgProfile className="ml-3 mb-1 w-[24px] h-[24px] shadow-2xl" />
              <label htmlFor="Profile">Profile</label>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
