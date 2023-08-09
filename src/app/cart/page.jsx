"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Footer from "../Component/Footer";
import Link from "next/link";
import Image from "next/image";
import Button from "../Component/Button";

const list = [
  {
    name1: "Water",
    image1: "/Media/Water.jpeg",
    price: "₦150.99",
    qty: "4pcs",
  },
  {
    name1: "Vegetables",
    image1: "/Media/veggie.png",
    price: "₦490.99",
    qty: "3pcs",
  },
  {
    name1: "Chicken",
    image1: "/Media/Chicken.jpg",
    price: "₦150.99",
    qty: "12pcs",
  },
  {
    name1: "Bread",
    image1: "/Media/Bread.jpg",
    price: "₦150.99",
    qty: "2pcs",
  },
  {
    name1: "Rice",
    image1: "/Media/Rice.jpeg",
    price: "₦150.99",
    qty: "4packs",
  },
  {
    name1: "Water",
    image1: "/Media/Water.jpeg",
    price: "₦150.99",
    qty: "4packs",
  },
];

const ListOne = () => {
  const [selectedlist, setSelectedlist] = useState([]);

  useEffect(() => {
    const shuffledlist = list.sort(() => 0.5 - Math.random());
    const selected = shuffledlist.slice(0, 6);
    setSelectedlist(selected);
  }, [ListOne]);

  return (
    <div className="bg-orange-100 h-screen mb-36 w-full overflow-scroll">
      <span className="flex justify-around items-center mt-8">
        <Link href={"/"}>
          <IoIosArrowBack
            size={40}
            className="mr-12 rounded-md text-orange-500"
          />
        </Link>
        <h1 className="text-center font-semibold mr-36 text-[24px]">Cart</h1>
      </span>
      <div className="mt-8 ml-4 mr-4">
        <p className="text-center font-normal text-[24px]">
          "Journeying through stars and time's embrace, Where dreams unfurl, and
          galaxies chase. Boundless wonder on this favorite screen, A tapestry
          of magic, unseen. Lost in its allure, hearts take flight, In this
          cosmic dance of pure delight. 🌌✨"
        </p>
      </div>
      <div className="h-screen w-full text-center pl-2 pr-2">
        {list.map((listOne) => (
          <div className="mt-6" key={listOne.name1}>
            <div>
              <p className="text-center pt-4 border-orange-500 border-t-2 mb-2 font normal"></p>
            </div>
            <div className="w-full flex justify-around mt-4 mb-8">
              <div className="flex justify-between text-center w-full mr-8">
                <div className="text-center rounded-md">
                  <Image
                    className="rounded-full ml-2 shadow-md mt-4 cursor-pointer border-2 border-orange-500 hover:w-[400] hover:h-[400]"
                    src={listOne.image1}
                    alt={listOne.name1}
                    width={300}
                    height={300}
                  />
                  <p className="text-center text-orange-500 ml-2 text-[26px]">
                    {listOne.name1}
                  </p>
                  <div className="rounded-md border-2 border-orange-500 text-center ml-2 bg-white px-2 py-2">
                    <p className="ml-2 mt-2 text-[24px]">{listOne.qty}</p>
                    <p className="ml-2 text-[24px]">{listOne.price}</p>
                  </div>
                </div>
                <pre className="ml-6 border-l-2 border-orange-500 text-center">
                  <Button />
                </pre>
              </div>
            </div>
          </div>
        ))}
        <pre className="mt-12 border-t-2 border-orange-500 text-[22px] font-medium ml-2 items-center text-center">
          <p className="items-center justify-center mt-8">
            Sub total:
            <input
              className="rounded-md border-2 text-center mt-3"
              type="text"
              placeholder="₦40,000.00"
            />
          </p>
          <p className="mt-2">
            Fee:
            <input
              className="rounded-md text-center border-2 mt-2"
              type="text"
              placeholder="₦800.00"
            />
          </p>
          <p className="mt-2">
            Total:
            <input
              className="rounded-md text-center border-2 mt-3"
              type="text"
              placeholder="₦120,000.00"
            />
          </p>
        </pre>
        <Link href="/Delivery">
          <button
            className="bg-orange-500 px-24 py-4 ml-4 mt-8 items-center cursor-pointer font-bold text-[17px] hover:bg-white hover:text-orange-500 text-white rounded-full"
            type="Checkout"
          >
            Proceed to Checkout
          </button>
        </Link>
      </div>
      <div className="fixed bottom-0 w-full overflow-auto">
        <Footer />
      </div>
    </div>
  );
};

export default ListOne;
