"use client";
import { useState } from "react";
import { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Footer from "../Component/Footer";
import Link from "next/link";
import Image from "next/image";

const list = [
  {
    name1: "Fresh Avocado",
    image1: "/Media/Fresh Avocado.jpeg",
    Description:
      "Avocado is a nutritious and creamy fruit with a rich, buttery flavor",
    Benefits:
      "High in healthy monounsaturated fats, which support heart health",
  },
  {
    name1: "Organic Spinach",
    image1: "/Media/Organic_Spinach.jpeg",
    Description:
      "Organic spinach is a leafy green vegetable known for its tender leaves and mild taste",
    Benefits:
      "Organic spinach is a leafy green vegetable known for its tender leaves and mild taste",
  },
  {
    name1: "Herbal Green Tea",
    image1: "/Media/Herbal_Green_Tea.jpeg",
    Description:
      "Herbal green tea is a refreshing beverage made from the leaves of the Camellia sinensis plant.",
    Benefits:
      "Packed with antioxidants that may help reduce the risk of chronic diseases.",
  },
  {
    name1: "Wild-caught Salmon",
    image1: "/Media/Wild_caught_Salmon.jpg",
    Description:
      "Wild-caught salmon is a flavorful and nutritious fish known for its pink flesh.",
    Benefits:
      "Versatile for grilling, baking, or poaching, making it a delicious and healthy meal choice.",
  },
  {
    name1: "Quinoa",
    image1: "/Media/Quinoa.jpeg",
    Description:
      "Quinoa is a gluten-free, whole grain with a nutty flavor and fluffy texture.",
    Benefits:
      "Versatile grain for salads, bowls, side dishes, and even desserts.",
  },
  {
    name1: "Extra Virgin Olive Oil",
    image1: "/Media/Extra Virgin Olive Oil.jpeg",
    Description:
      "Extra virgin olive oil is a premium-grade oil obtained from pressing olives.",
    Benefits:
      "Rich in monounsaturated fats, promoting heart health and reducing LDL cholesterol levels.",
  },
  {
    name1: "Organic Berries Mix",
    image1: "/Media/Organic Berries Mix.jpeg",
    Description:
      "Organic berries mix includes a combination of strawberries, blueberries, raspberries, and blackberries.",
    Benefits:
      "Packed with vitamins, minerals, and antioxidants, supporting overall health and immune function.",
  },
  {
    name1: " Greek Yogurt",
    image1: "/Media/Greek Yogurt.jpeg",
    Description:
      "Greek yogurt is a thick and creamy dairy product with a tangy taste.",
    Benefits:
      "Can be enjoyed as a healthy breakfast, dessert, or added to sauces and dips for a creamy texture.",
  },
  {
    name1: "Fresh Strawberries",
    image1: "/Media/Strawberries.jpeg",
    Description:
      " Fresh strawberries are sweet and juicy red berries loved for their natural sweetness.",
    Benefits:
      "Rich in fiber, promoting digestive health and aiding in weight management.",
  },
  {
    name1: "Fruits and Vegetables",
    image1: "/Media/veggie.png",
    Description:
      "Whole grain bread is made from whole grains, offering a nutty and hearty flavor.",
    Benefits:
      "Contains complex carbohydrates, providing sustained energy levels throughout the day.",
  },
  {
    name1: "Eggs and milk",
    image1: "/Media/milk-eggs.jpg",
    Description:
      "Whole grain bread is made from whole grains, offering a nutty and hearty flavor.",
    Benefits:
      "Contains complex carbohydrates, providing sustained energy levels throughout the day.",
  },
  {
    name1: "Meat and Seafood",
    image1: "/Media/meat_seafood.jpeg",
    Description:
      "Whole grain bread is made from whole grains, offering a nutty and hearty flavor.",
    Benefits:
      "Contains complex carbohydrates, providing sustained energy levels throughout the day.",
  },
  {
    name1: "Bakery and Bread",
    image1: "/Media/bakery_bread.jpeg",
    Description:
      "Whole grain bread is made from whole grains, offering a nutty and hearty flavor.",
    Benefits:
      "Contains complex carbohydrates, providing sustained energy levels throughout the day.",
  },
  {
    name1: "Pantry Staples",
    image1: "/Media/Pantry_Staples.jpeg",
    Description:
      "Whole grain bread is made from whole grains, offering a nutty and hearty flavor.",
    Benefits:
      "Contains complex carbohydrates, providing sustained energy levels throughout the day.",
  },
  {
    name1: "Beverages",
    image1: "/Media/beverages.jpeg",
    Description:
      "Whole grain bread is made from whole grains, offering a nutty and hearty flavor.",
    Benefits:
      "Contains complex carbohydrates, providing sustained energy levels throughout the day.",
  },
  {
    name1: "Frozen Foods",
    image1: "/Media/Frozen_Foods.jpeg",
    Description:
      "Whole grain bread is made from whole grains, offering a nutty and hearty flavor.",
    Benefits:
      "Contains complex carbohydrates, providing sustained energy levels throughout the day.",
  },
  {
    name1: "Snacks",
    image1: "/Media/snacks.jpg",
    Description:
      "Whole grain bread is made from whole grains, offering a nutty and hearty flavor.",
    Benefits:
      "Contains complex carbohydrates, providing sustained energy levels throughout the day.",
  },
  {
    name1: "Canned Goods",
    image1: "/Media/Canned_Goods.jpeg",
    Description:
      "Whole grain bread is made from whole grains, offering a nutty and hearty flavor.",
    Benefits:
      "Contains complex carbohydrates, providing sustained energy levels throughout the day.",
  },
  {
    name1: "Condiments and Sauces",
    image1: "/Media/Condiments_Sauces.jpeg",
    Description:
      "Whole grain bread is made from whole grains, offering a nutty and hearty flavor.",
    Benefits:
      "Contains complex carbohydrates, providing sustained energy levels throughout the day.",
  },
];

const ListOne = () => {
  const [selectedlist, setSelectedlist] = useState([]);

  useEffect(() => {
    const shuffledlist = list.sort(() => 0.5 - Math.random());
    const selected = shuffledlist.slice(0, 6);
    setSelectedlist(selected);
    // selectedlist(selected);
  }, [ListOne]);

  return (
    <div className="bg-orange-100 h-screen mb-44 w-full overflow-scroll fixed">
      <span className="flex justify-around items-center mt-8">
        <Link href={"/"}>
          <IoIosArrowBack
            size={40}
            className="mr-10 rounded-md text-orange-500 bg-white text-center "
          />
        </Link>
        <h1 className="text-center mt-1 font-medium mr-28 text-[26px]">
          Popular Items
        </h1>
      </span>
      <div className="mt-8 ml-4 mr-4">
        <p className="text-center font-normal text-[20px]">
          Delightful Taste, Unbeatable Price! 🌟A Must-Have in Your Cart 🛒🍴
          Experience Gastronomic Delight, Explore the best produce in Our
          Grocery App 📲🛍️ Satisfy Your Cravings, Order Best Combo for a Perfect
          Meal 🍽️😋 Join the Foodie Craze - Yum Tag Flying Off the Shelves! 🚀🛒
        </p>
      </div>
      <div className="h-screen w-full text-center pl-2 pr-2">
        {list.map((listOne) => (
          <div className="mt-6" key={listOne.name1}>
            <div>
              <p className="text-center pt-4 border-orange-500 border-t-2 mb-2 font normal"></p>
            </div>
            <div className="w-full bg-white flex justify-around rounded-b-full shadow-lg mb-6 py-8">
              <div className="flex justify-between text-center w-full mr-8">
                <div className="text-center rounded-md w-fit">
                  <p className="text-center text-orange-500 mb-10 font-semibold ml-8 text-[28px]">
                    {listOne.name1}
                  </p>
                  <Link className="cursor-pointer" href="/cart">
                    <Image
                      className="rounded-full ml-14 shadow-md text-center cursor-pointer hover:w-[400] hover:h-[400]"
                      src={listOne.image1}
                      alt={listOne.name1}
                      width={300}
                      height={300}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <span className="text-[22px] text-center font-medium">
                <p className="text-orange-500 text-[24]">Description</p>
                <p>{listOne.Description}</p>
              </span>
              <span className="text-[22px] mt-4 text-center font-medium">
                <p className="text-[24px] text-orange-500">Benefits</p>
                <p>{listOne.Benefits}</p>
              </span>
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

export default ListOne;

// import React from "react";
// import { SlArrowLeft } from "react-icons/sl";
// import Link from "next/link";
// import Image from "next/image";
// import Footer from "../Component/Footer";

// export default function page() {
//   return (
//     <div>
//       <div className="mt-6 border-b-2 shadow-md border-black pb-6">
//         <span className="flex justify-between">
//           <Link href="/">
//             <SlArrowLeft className="mt-2 ml-4 shadow-md rounded-md border-2 border-gray-100 h-[44px] text-orange-500 pt-2 pb-2 bg-white w-[44px]" />
//           </Link>
//           <h1 className="mt-4 text-center text-[24px] pr-32 font-medium">
//             Popular Items
//           </h1>
//         </span>
//       </div>
//       <div className="ml-4 mr-4 mt-6">
//         <p className="text-[20px] text-center font-normal">
//         </p>
//         <p className="border-b-2 border-gray-200 ml-16 mr-16 text-center mt-4"></p>
//       </div>
//       <div>
//         <div className="mt-8 text-center">
//           <p cl>Fresh Avocado</p>
//           <Image
//             className="rounded-lg shadow-md ml-16 mt-8"
//             src="/Media/"
//             alt="Avocado"
//             width="300"
//             height="300"
//           />
//         </div>
//       </div>
//       <div className="w-full fixed bottom-0">
//         <Footer />
//       </div>
//     </div>
//   );
// }
