"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { Pagination, Autoplay } from "swiper";
import list from "./Item.json";

export default function Slider() {
  const data = list.map((Item) => (
    <SwiperSlide key={Item.image} className="w-[90px] h-max">
      <div className="bg-gray-200 w-[100px] shadow-lg h-[180px] flex flex-col justify-center rounded-lg">
        <Image
          className="rounded-md shadow-md text-center"
          src={Item.image}
          alt="pic"
          width={200}
          height={200}
        />
        <h3 className="font-medium text-center mt-4 mb-1 text-[14px] text-black flex justify-center">
          {Item.name}
        </h3>
        <div className="text-orange-500 flex justify-around items-center ml-2">
          <div className="flex">
            <span className="text-[12px] text-center">{Item.price}</span>
            <span className="text-[12px]">/kg</span>
          </div>
          <Link href="/Cart">
            <div className="text-[12px] mr-2">
              <AiOutlinePlus />
            </div>
          </Link>
        </div>
      </div>
    </SwiperSlide>
  ));
  return (
    <Swiper
      className="shadow-md hover:cursor-pointer"
      modules={[Pagination, Autoplay]}
      spaceBetween={80}
      slidesPerView={4}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data}
    </Swiper>
  );
}
