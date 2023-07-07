"use client¬";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImLocation } from "react-icons/im";
import { BsFillBellFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import Slider from "./Component/Slider";
// import list from "./Component/Item.json";
import Navbar from "./Component/Navbar";

export default function page() {
  return (
    <div className="overflow-hidden w-full fixed">
      <div className="flex justify-between">
        <span className="ml-6">
          <GiHamburgerMenu
            size={38}
            className="mt-2.5 shadow-2xl text-orange-400"
          />
        </span>
        <section>
          <p className="text-[13px] font-semibold text-center mt-2 mb-1">
            Location
          </p>
          <span className="flex">
            <ImLocation size={20} className="mr-1 mb-1 text-orange-600" />
            <select
              id=""
              name=""
              className="bg-white rounded text-center font-bold text-orange-400"
            >
              <option value="Australia">Australia</option>
              <option value="England">England</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Spain">Spain</option>
              <option value="Germany">Germany</option>
              <option value="Luxemborg">Luxemborg</option>
              <option value="Japan">Japan</option>
              <option value="Sweden">Australia</option>
            </select>
          </span>
        </section>
        <link href={`/`}></link>
        <span>
          <BsFillBellFill
            size={28}
            className="mr-8 shadow-2xl mt-2 text-orange-500"
          />
        </span>
      </div>
      <div className="flex justify-between mt-4 ml-6 mr-6 border-2 border-black rounded-full">
        <BsSearch size={24} className="mt-2 ml-3 mb-1" />
        <input
          type="text"
          placeholder="Search foods,drink,etc"
          className="border-none text-center text-[13px]"
        />
        <LuSettings2 size={26} className="rounded-r-full mt-1.5 mr-1 mb-1.5" />
      </div>
      <div className="flex justify-between ml-6 mr-4 mt-6">
        <h1 className="text-[20px] mb-4">Categories</h1>
        <Link href={`/Categories`}>
          <h2 className="text-orange-500 text-[16px] mr-4">See all</h2>
        </Link>
      </div>
      <div className="grid grid-cols-4 grid-rows-1">
        <div className=" w-[14vh] h-[20] ml-6 rounded-lg">
          <Image
            src="https://images.unsplash.com/photo/banana.webp"
            width={`100`}
            height={`100`}
            className="mt-1 ml-4"
            alt=""
          />
        </div>
        <div className=" w-[14vh] h-[20] rounded-lg ml-4">
          <Image
            src="/Image/drinks.jpg"
            alt="drinks"
            width={`60`}
            height={`60`}
            className="mt-1 ml-4 rounded-lg"
          />
        </div>
        <div className=" w-[14vh] h-[20] ml-2 rounded-lg">
          <Image
            src="/Image/fruit-bowl.jpg"
            alt="fruit-bowl"
            width={`60`}
            height={`60`}
            className="ml-4 mt-1 rounded-lg"
          />
        </div>
        <div className=" w-[14vh] h-[20] rounded-lg ">
          <Image
            src="/Image/milk-eggs.jpg"
            alt="milk-eggs"
            width={`70`}
            height={`70`}
            className="mt-2 ml-3 rounded-lg"
          />
        </div>
      </div>
      <span className="flex justify-between mr-6 ml-6 mt-2">
        <label
          className=" ml-1 text-orange-500 font-semibold"
          htmlFor="Vegetables"
        >
          Vegetables
        </label>
        <label className="mr-4 text-orange-500 font-semibold" htmlFor="Drinks">
          Drinks
        </label>
        <label className="mr-1 text-orange-500 font-semibold" htmlFor="Fruits">
          Fruits
        </label>
        <label htmlFor="Milk-eggs" className="text-orange-500 font-semibold">
          Milk-eggs
        </label>
      </span>
      <div className="ml-6 mt-6 flex justify-between ">
        <p className="text-[22px] ">Deals</p>
        <Link href={`/Categories`}>
          <h2 className="text-green-400 text-[16px] mr-4">See all</h2>
        </Link>
      </div>
      <div className="bg-orange-500 shadow-lg shadow-orange-300 h-[170px] ml-6 mr-5 rounded-md mt-3">
        <span>
          <p className="ml-6 text- text-[24px] pt-6 text-black font-semibold">
            50% OFF
          </p>
          <p className="ml-6 text-[24px] text-black font-semibold">
            On Grocery Combo packs.
          </p>
          <button className="ml-6 mt-4 bg-white hover:font-[30] rounded-lg text-orange-500 pt-2 pl-2 pr-2 pb-2">
            Order now
          </button>
        </span>
        <Image src={""} alt={""} />
      </div>
      <div>
        <span className="flex justify-between ml-6 mt-6 mr-6">
          <p className="text-[22px] ">Popular items</p>
          <Link href={`/Popular`}>
            <h2 className="text-green-400 text-[16px] mr-2">See all</h2>
          </Link>
        </span>
        <Slider />
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
}