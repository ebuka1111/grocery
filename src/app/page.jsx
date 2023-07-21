"use client";
// import { GiHamburgerMenu } from "react-icons/gi";
import { ImLocation } from "react-icons/im";
import { BsFillBellFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import Slider from "./Component/Slider";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";

export const fruits = [
  {
    id: "vegetables",
    name: "Carrot",
    type: "Root Vegetable",
    color: "Orange",
    nutrients: ["Vitamin A", "Vitamin K", "Fiber"],
    description:
      "Carrots are crunchy and sweet root vegetables that are rich in beta-carotene, which is converted into vitamin A in the body. They are also a good source of other vitamins, minerals, and fiber.",
    benefits: [
      "Promotes eye health",
      "Supports immune function",
      "Aids digestion",
    ],
    image_url: "/Media/vegetables.jpg",
  },
  {
    id: "drinks",
    name: "Coffee",
    type: "Hot Beverage",
    caffeinated: true,
    description:
      "Coffee is a popular hot beverage made from roasted coffee beans. It contains caffeine, a natural stimulant, and offers a rich and aromatic flavor.",
    benefits: [
      "Increases alertness",
      "Enhances cognitive function",
      "Provides antioxidants",
    ],
    image_url: "/Media/drinks.jpg",
  },
  {
    id: "fruits",
    name: "Strawberries",
    origin: "Europe and North America",
    botanical_name: "Fragaria × ananassa",
    attributes: ["Sweet", "Juicy", "Heart-shaped", "Bright red color"],
    description:
      "Strawberries are luscious and juicy fruits with a vibrant red color. They are low in calories and packed with vitamins, antioxidants, and fiber.",
    benefits: [
      "Rich in antioxidants",
      "Supports heart health",
      "Enhances skin health",
    ],
    image_url: "/Media/fruits.png",
  },
  {
    id: "milk/eggs",
    name: "Milk",
    type: "Dairy",
    source: "Cows",
    nutrients: ["Calcium", "Protein", "Vitamin D"],
    description:
      "Milk is a nutrient-rich dairy product produced by mammals, most commonly cows. It is a good source of calcium, protein, vitamins, and minerals.",
    benefits: [
      "Strengthens bones and teeth",
      "Promotes muscle growth and repair",
      "Provides essential nutrients for overall health",
    ],
    image_url: "/Media/milk-eggs.jpg",
  },
];

const yum = fruits.map((fruit) => (
  <div className="flex flex-col justify-center">
    <Link href={`/Component/${fruit.id}`}>
      <div className="h-[50px] w-[50px] rounded-md shadow-md">
        <Image
          className="rounded-lg"
          src={fruit.image_url}
          alt={fruit.name}
          width={50}
          height={50}
        />
        <p className="flex text-[16px] justify-center items-center text-orange-500 mt-3 ml-2 mr-2 hover:text-[24px]">
          {fruit.id}
        </p>
      </div>
    </Link>
  </div>
));

export default function page() {
  return (
    <div className="overflow-hidden m-auto bg-gray-100 h-screen w-full fixed">
      <div className="flex justify-between">
        <div>
          <Navbar />
        </div>
        <section>
          <p className="text-[18px] font-bold text-center ml-4 mt-2 mb-1">
            Location
          </p>
          <span className="flex">
            <ImLocation size={24} className="mb-1 ml-4 text-orange-600" />
            <select
              id=""
              name=""
              className="bg-transparent rounded text-center ml-2 font-bold text-orange-500"
            >
              <option className="bg-transparent" value="Australia">
                Australia
              </option>
              <option className="bg-transparent" value="England">
                England
              </option>
              <option className="bg-transparent" value="Nigeria">
                Nigeria
              </option>
              <option className="bg-transparent" value="Spain">
                Spain
              </option>
              <option className="bg-transparent" value="Germany">
                Germany
              </option>
              <option className="bg-transparent" value="Luxemborg">
                Luxemborg
              </option>
              <option className="bg-transparent" value="Japan">
                Japan
              </option>
              <option className="bg-transparent" value="Sweden">
                Australia
              </option>
            </select>
          </span>
        </section>
        <link href={`/`}></link>
        <span>
          <BsFillBellFill size={24} className="mr-6 mt-3 text-orange-500" />
        </span>
      </div>
      <div className="flex justify-between mt-4 ml-6 mr-6 border-2 border-black rounded-full">
        <BsSearch size={24} className="mt-2 ml-3 mb-1" />
        <input
          type="text"
          placeholder="Search foods,drink,etc"
          className=" bg-transparent border-none text-center text-[13px]"
        />
        <LuSettings2 size={26} className="rounded-r-full mt-1.5 mr-1 mb-1.5" />
      </div>
      <div className="flex justify-between ml-6 mr-4 mt-6">
        <h1 className="text-[24px] font-medium mb-4">Categories</h1>
        <Link href="./categories">
          <h2 className="text-[16px] font-normal mr-4 mt-2 hover:text-orange-500">
            See all
          </h2>
        </Link>
      </div>
      <div className="flex justify-around mt-2">{yum}</div>

      <div className="ml-6 mt-14 flex justify-between">
        <p className="text-[24px] font-medium">Deals</p>
        <Link href={`/categories`}>
          <h2 className="hover:text-orange-500 mt-2 text-[16px] font-normal mr-6">
            See all
          </h2>
        </Link>
      </div>
      <div className="bg-orange-500 shadow-lg h-[170px] ml-6 mr-5 rounded-md mt-3">
        <span>
          <p className="ml-6 text- text-[24px] pt-6 text-black font-semibold">
            50% OFF
          </p>
          <p className="ml-6 text-[24px] text-black font-semibold">
            On Grocery Combo packs.
          </p>
          <button className="ml-6 mt-4 bg-white hover:text-white hover:bg-transparent hover:pl-6 hover:pr-6 hover:border-2 border-white rounded-lg text-orange-500 pt-2 pl-2 pr-2 pb-2">
            Order now
          </button>
        </span>
        <Image src={""} alt={""} />
      </div>
      <div>
        <span className="flex justify-between ml-6 mt-6 mr-6 bg-transparent">
          <p className="text-[24px] font-medium ">Popular items</p>
          <Link href={`/popular_items`}>
            <p className="text-[16px] font-normal mr-2 mt-2 hover:cursor-pointer hover:text-orange-500">
              See all
            </p>
          </Link>
        </span>
        <div className="mt-4">
          <Slider />
        </div>
      </div>
      <div className="mt-6">
        <Footer />
      </div>
    </div>
  );
}
