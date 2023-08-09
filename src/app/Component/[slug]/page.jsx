"use client";
import React from "react";
import { fruits } from "@/app/page";
import Footer from "../Footer";
import Image from "next/image";
import Link from "next/link";
import { SlArrowLeft } from "react-icons/sl";

export default function page({ params }) {
  const yum = fruits.find((fruit) => fruit.id == params.slug);
  return (
    <div className="m-auto bg-orange-100 mb-20 h-screen w-full overflow-auto shadow-md">
      <div className="flex justify-around border-b-2 border-orange-500 text-center mt-8">
        <Link href="/">
          <SlArrowLeft className="text-black text-center rounded-sm w-[30px] h-[30px]" />
        </Link>
        <h1 className="text-[28px] text-center font-semibold mb-6 mr-28">
          {yum.id}
        </h1>
      </div>
      <div className="ml-6 mr-6">
        <h2 className="text-[26px] text-orange-500 mt-4 font-medium text-center">
          Name
          <p className="text-black text-[20px] mt-2 font-normal">{yum.names}</p>
        </h2>
        <ul className="mt-8 text-center">
          <li className="ml-8">
            <Image
              src={yum.image_url}
              className="rounded-lg shadow-md"
              alt="Coffee"
              width={300}
              height={300}
            />
          </li>
          <li className="text-[26px] font-medium mt-8 text-orange-500">
            Type
            <p className="text-black text-[20px] mt-2 font-normal">
              {yum.type}
            </p>
          </li>
          <li className="text-[26px] font-medium mt-8 text-orange-500">
            Color
            <p className="text-black text-[20px] mt-2 font-normal">
              {yum.color}
            </p>
          </li>
          <li className="text-[26px] font-medium mt-8 text-orange-500">
            Origin
            <p className="text-black text-[20px] text-center mt-2  font-normal">
              {yum.origin}
            </p>
          </li>
          <li className="text-[26px] font-medium mt-8 text-orange-500">
            Nutrients
            <p className="text-black text-[20px] mt-2 font-normal">
              {yum.nutrients}
            </p>
          </li>
          <li className="text-[26px] font-medium mt-8 text-orange-500">
            Description
            <p className="text-black text-center mt-2 text-[20px] font-normal">
              {yum.description}
            </p>
          </li>
          <li className="text-[26px] font-medium mt-8 text-orange-500">
            Benefits
            <p className="text-black text-[20px] text-center mt-2  font-normal">
              {yum.benefits}
            </p>
          </li>
        </ul>
      </div>
      <div className="w-full fixed bottom-0">
        <Footer />
      </div>
    </div>
  );
}
