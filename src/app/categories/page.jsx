"use client";
import { useState } from "react";
import { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Footer from "../Component/Footer";
import Link from "next/link";
import Image from "next/image";

const list = [
  {
    title: "Fresh Produce",
    name1: "Fruits",
    name2: "Vegetables",
    name3: "Herbs",
    image1: "/Media/fruits.jpeg",
    image2: "/Media/veggie.png",
    image3: "/Media/herbs.jpeg",
  },
  {
    title: "Diary and Eggs",
    name1: "Milks",
    name2: "Eggs",
    name3: "Yoghurt",
    image1: "/Media/Milks.jpeg",
    image2: "/Media/Eggs.jpeg",
    image3: "/Media/Yoghurt.jpg",
  },
  {
    title: "Meat and Seafood",
    name1: "Chicken",
    name2: "Beef",
    name3: "Porks",
    image1: "/Media/Chicken.jpg",
    image2: "/Media/Beef.jpeg",
    image3: "/Media/pork.jpeg",
  },
  {
    title: "Bakery & Bread",
    name1: "Bread",
    name2: "Pastries",
    name3: "Cakes",
    image1: "/Media/Bread.jpg",
    image2: "/Media/Pastries.jpeg",
    image3: "/Media/Cakes.jpeg",
  },
  {
    title: "Pantry Staples",
    name1: "Rice",
    name2: "Pasta",
    name3: "Flour",
    image1: "/Media/Rice.jpeg",
    image2: "/Media/Pasta.jpeg",
    image3: "/Media/Flour.jpeg",
  },
  {
    title: "Beverages",
    name1: "Water",
    name2: "Juices",
    name3: "Soft Drinks",
    image1: "/Media/Water.jpeg",
    image2: "/Media/Juices.jpeg",
    image3: "/Media/Soft Drinks.jpeg",
  },
  {
    title: "Snacks & Sweets",
    name1: "Chips",
    name2: "Cookies",
    name3: "Candy & Popcorn",
    image1: "/Media/Chips.jpeg",
    image2: "/Media/Cookies.jpeg",
    image3: "/Media/Candy & Popcorn.jpg",
  },
  {
    title: "Frozen Foods",
    name1: "Frozen Vegetables",
    name2: "Ice Cream",
    name3: "Frozen Meals",
    image1: "/Media/Frozen_Foods.jpeg",
    image2: "/Media/Ice_Cream.jpeg",
    image3: "/Media/Frozen_Meals.jpeg",
  },
  {
    title: "Condiments & Sauces",
    name1: "Ketchup",
    name2: "Mustard",
    name3: "Mayonnaise",
    image1: "/Media/ketchup.jpeg",
    image2: "/Media/mustard.jpeg",
    image3: "/Media/Mayonnaise.jpeg",
  },
  {
    title: "Cereal & Breakfast Foods",
    name1: "Cereal",
    name2: "Oatmeal",
    name3: "Pancake Mix",
    image1: "/Media/Cereal.jpeg",
    image2: "/Media/Oatmeal.jpeg",
    image3: "/Media/Pancake Mix.jpeg",
  },
  {
    title: "Baby & Kids",
    name1: "Baby Foods",
    name2: "Diapers",
    name3: "Baby Wipes",
    image1: "/Media/Baby Foods.jpeg",
    image2: "/Media/Diapers.jpeg",
    image3: "/Media/Baby Wipes.jpeg",
  },
  {
    title: "Pet Supplies",
    name1: "Pet Foods",
    name2: "Dog Toys",
    name3: "Cat Litter",
    image1: "/Media/Pet Foods.jpeg",
    image2: "/Media/Dog Toys.jpeg",
    image3: "/Media/Cat Litter.jpeg",
  },
  {
    title: "Home & Kitchen",
    name1: "Cookware",
    name2: "Cutlery",
    name3: "Cleaning Tools",
    image1: "/Media/Cookware.jpeg",
    image2: "/Media/Cutlery.jpeg",
    image3: "/Media/Cleaning Tools.jpeg",
  },
  {
    title: "Seasonal Items",
    name1: "Holiday Special",
    name2: "Decorations",
    name3: "seasonal fruits",
    image1: "/Media/Holiday Special.jpeg",
    image2: "/Media/Decorations.jpeg",
    image3: "/Media/seasonal fruits.jpeg",
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
    <div className="bg-orange-100 h-screen pb-40 w-full overflow-auto">
      <div className="">
        <span className="flex justify-around items-center mt-8">
          <Link href={"/"}>
            <IoIosArrowBack
              size={40}
              className="mr-12 px-2 py-2 rounded-md bg-white text-orange-500"
            />
          </Link>
          <h1 className="text-center font-semibold mr-28 text-[24px]">
            Categories
          </h1>
        </span>
      </div>
      <div className="mt-8 ml-4 mr-4">
        <p className="text-center text-[24px]">
          Welcome to our Grocery App, your one-stop shop for all your grocery
          needs! Explore our wide range of categories and find everything you
          need conveniently in one place. From fresh produce to pantry
          essentials, we've got you covered. Check out our popular section below
          to discover the most sought-after items and exciting deals. Happy
          shopping! 🛒🥦🍎🍞
        </p>
      </div>
      <div className="h-screen w-full text-center pl-4 pr-4">
        {list.map((listOne) => (
          <div className="mt-6">
            <div>
              <p className="text-center pt-2 text-[24px] border-orange-500 border-t-2 mb-2 font-medium hover:text-orange-500 hover:text-[40px]">
                {listOne.title}
              </p>
            </div>
            <div className="w-full flex justify-around rounded-md shadow-md mt-4">
              <div className="grid grid-cols-3 gap-6 text-center w-fit">
                <div className="bg-white text-center shadow-md rounded-md w-fit">
                  <Image
                    className="rounded-md shadow-md hover:cursor-pointer hover:w-[300] hover:h-[300]"
                    src={listOne.image1}
                    alt={listOne.name1}
                    width={200}
                    height={200}
                  />
                  <p className="text-center font-normal text-orange-500 text-[20px]">
                    {listOne.name1}
                  </p>
                </div>
                <div className="bg-white text-center shadow-md rounded-md w-fit">
                  <Image
                    className="rounded-md shadow-md"
                    src={listOne.image2}
                    alt={listOne.name2}
                    width={200}
                    height={200}
                  />
                  <p className="text-center font-normal text-orange-500 text-[20px]">
                    {listOne.name2}
                  </p>
                </div>
                <div className="bg-white text-center shadow-md rounded-md w-fit">
                  <Image
                    className="rounded-md shadow-md"
                    src={listOne.image3}
                    alt={listOne.name3}
                    width={200}
                    height={200}
                  />
                  <p className="text-center font-normal text-orange-500 text-[20px]">
                    {listOne.name3}
                  </p>
                </div>
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
