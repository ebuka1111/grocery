"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { TbCurrencyNaira } from "react-icons/tb";
import { Pagination, Autoplay } from "swiper";
import list from "./Item.json";

export default function Slider() {
  const data = list.map((Item) => (
    <SwiperSlide
      key={Item.image}
      className="text-center bg-white shadow-lg h-[50] w-[200] pt-6 pb-6"
    >
      <div className="bg-green-500">
        <Image
          className="rounded-lg pl-20"
          src={Item.image}
          alt="pic"
          width={280}
          height={150}
        /> 
        <div className="font-bold mt-7 text-center text-black flex justify-between">
          {Item.name}
        </div>
        <div className="text-orange-500">
          <TbCurrencyNaira />${Item.price}
          <span>/kg</span>
          <Link href="/Cart">
            <div>
              <AiOutlinePlus />
            </div>
          </Link>
        </div>
      </div>
    </SwiperSlide>
  ));
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data}
    </Swiper>
  );
}
