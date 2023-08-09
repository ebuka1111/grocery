"use client";
import { useState } from "react";
import { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Footer from "../Component/Footer";
import Link from "next/link";
import Image from "next/image";
import { BsHeart } from "react-icons/bs";
import { BsFillShareFill } from "react-icons/bs";

const list = [
  {
    name1: "Fruits",
    image1: "/Media/fruits.jpeg",
  },
  {
    name1: "Milks",
    image1: "/Media/Milks.jpeg",
  },
  {
    name1: "Chicken",
    image1: "/Media/Chicken.jpg",
  },
  {
    name1: "Bread",
    image1: "/Media/Bread.jpg",
  },
  {
    name1: "Rice",
    image1: "/Media/Rice.jpeg",
  },
  {
    name1: "Water",
    image1: "/Media/Water.jpeg",
  },
  {
    name1: "Chips",
    image1: "/Media/Chips.jpeg",
  },
  {
    name1: "Frozen Vegetables",
    image1: "/Media/Frozen_Foods.jpeg",
  },
  {
    name1: "Ketchup",
    image1: "/Media/ketchup.jpeg",
  },
  {
    name1: "Cereal",
    image1: "/Media/Pancake Mix.jpeg",
  },
  {
    name1: "Baby Foods",
    image1: "/Media/Baby Foods.jpeg",
  },
  {
    name1: "Pet Foods",
    image1: "/Media/Pet Foods.jpeg",
  },
  {
    name1: "Cookware",
    image1: "/Media/Cookware.jpeg",
  },
  {
    name1: "Holiday Special",
    image1: "/Media/Holiday Special.jpeg",
  },
];

const listOne = () => {
  const [selectedlist, setSelectedlist] = useState([]);

  useEffect(() => {
    const shuffledlist = list.sort(() => 0.5 - Math.random());
    const selected = shuffledlist.slice(0, 6);
    setSelectedlist(selected);
    // selectedlist(selected);
  }, [listOne]);

  return (
    <div className="bg-orange-100 h-screen mb-44 w-full overflow-scroll">
      <span className="flex justify-around items-center mt-8">
        <Link href={"/"}>
          <IoIosArrowBack
            size={40}
            className="mr-12 rounded-md text-orange-500 bg-white text-center "
          />
        </Link>
        <h1 className="text-center font-semibold mr-32 text-[24px]">
          Favourite
        </h1>
      </span>
      <div className="mt-8 ml-4 mr-4">
        <p className="text-center font-medium text-[20px]">
          "Journeying through stars and time's embrace, Where dreams unfurl, and
          galaxies chase. Boundless wonder on this favorite screen, A tapestry
          of magic, unseen. Lost in its allure, hearts take flight, In this
          cosmic dance of pure delight. 🌌✨"
        </p>
      </div>
      <div className="h-screen w-full text-center pl-2 pr-2">
        {list.map((listOne) => (
          <div className="mt-6">
            <div>
              <p className="text-center pt-4 border-orange-500 border-t-2 mb-2 font normal"></p>
            </div>
            <div className="w-full bg-white flex justify-around rounded-2xl shadow-lg mt-4 mb-8 py-4">
              <div className="flex justify-between text-center w-full mr-8">
                <div className="text-center rounded-md w-fit">
                  <Image
                    className="rounded-full shadow-md text-center cursor-pointer hover:w-[400] hover:h-[400]"
                    src={listOne.image1}
                    alt={listOne.name1}
                    width={300}
                    height={300}
                  />
                  <p className="text-center text-orange-500 mt-2 text-[28px]">
                    {listOne.name1}
                  </p>
                </div>
                <pre className="mt-16 h-fit">
                  <BsHeart
                    size={34}
                    className="mb-12 hover:text-red-500 cursor-pointer"
                  />
                  <BsFillShareFill
                    size={34}
                    className="text-orange-500 mt-16 cursor-pointer"
                  />
                </pre>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 w-full overflow-auto">
        <Footer />
      </div>
    </div>
  );
};

export default listOne;
