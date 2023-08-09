"use client";
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
    id: "Vegetables",
    names: "Carrot",
    type: "Orange Carrots",
    color: "Orange, Purple, White, or Mini-size (Baby Carrots)",
    nutrients:
      " Carrots are rich in essential nutrients and are an excellent source of beta-carotene, a precursor to vitamin A. They also contain vitamins C, K, and B6, as well as minerals like potassium and biotin.",
    origin:
      "Carrots are believed to have originated in the region of present-day Afghanistan thousands of years ago. They were initially cultivated for their aromatic leaves and seeds before the domestication of their sweet and edible roots. Carrots later spread to other parts of the world, becoming a popular vegetable in various cuisines.",
    description:
      "Carrots are crunchy and sweet root vegetables that are rich in beta-carotene,  which is converted into vitamin A in the body.  They are also a good source of other vitamins,  minerals, and fiber.",
    benefits: [
      "Promotes eye health, ",
      "Supports immune function, ",
      "Aids digestion.",
    ],
    image_url: "/Media/carrot.jpeg",
  },
  {
    id: "Drinks",
    names: "Coffee",
    type: "Hot Beverage, Robusta Coffee, Decaf Coffee.",
    color: " Dark brown",
    nutrients:
      "Coffee is a popular beverage made from roasted coffee beans and primarily contains caffeine,  a natural stimulant. It also contains small amounts of vitamins and minerals like riboflavin (vitamin B2),  pantothenic acid (vitamin B5),  manganese,  and potassium.",
    origin:
      "Coffee originated in the region of Ethiopia in East Africa and was later cultivated and traded by Arab merchants. It gradually spread to the Middle East,  Europe,  and eventually to the Americas,  where it became a significant global commodity.",
    description:
      "Coffee is a beloved and popular beverage made from roasted coffee beans. Its enticing aroma and rich taste make it a favorite morning pick-me-up for many people around the world.",
    benefits: [
      "Increases alertness, ",

      "Enhances cognitive function, ",

      "Provides antioxidants, ",

      "Reduced Risk of Certain Diseases.",
    ],
    image_url: "/Media/coffee.jpeg",
  },
  {
    id: "Fruits",
    names: "Strawberries",
    type: "Arabica Coffee",
    color: "Red",
    nutrients:
      "Strawberries are a delicious and nutritious fruit packed with various vitamins, minerals, and antioxidants. They are an excellent source of vitamin C and manganese and also contain folate, potassium, and dietary fiber.",
    origin:
      "Wild strawberries were originally found in various regions of Europe, Asia, and North America. Cultivation of larger and sweeter varieties began in the 17th century in France. Today, strawberries are grown in many countries around the world, with major producers including the United States, Mexico, Spain, and China.",
    description:
      "Strawberries are luscious and juicy fruits with a vibrant red color. They are low in calories and packed with vitamins, antioxidants, and fiber.",
    benefits: [
      "Rich in antioxidants, ",
      "Supports heart health, ",
      "Enhances skin health",
    ],
    image_url: "/Media/Strawberries.jpeg",
  },
  {
    id: "Milk/Eggs",
    names: "Milk",
    type: "Cow's Milk",
    color: "White",
    nutrients: [
      "Calcium",
      "Protein",
      "Vitamin B12",
      "Riboflavin (Vitamin B2)",
      "Phosphorus",
      "Magnesium",
      "Vitamin D",
    ],
    origin:
      "The domestication and consumption of milk likely began with the domestication of animals like goats and sheep in the Middle East around 9,000-10,000 years ago. Over time, milk consumption spread to other parts of the world, and today, cows are the primary source of milk globally.",
    description:
      "Milk is a nutrient-rich dairy product produced by mammals, most commonly cows. It is a good source of calcium, protein, vitamins, and minerals.",
    benefits: [
      "Strengthens bones and teeth, ",
      "Promotes muscle growth and repair, ",
      "Provides essential nutrients for overall health",
    ],
    image_url: "/Media/milk-eggs.jpg",
  },
];

const yum = fruits.map((fruit) => (
  <div className="flex flex-col justify-center" key={fruit.id}>
    <Link href={`/Component/${fruit.id}`} className="cursor-pointer">
      <div className="h-[50px] w-[50px] rounded-md shadow-md">
        <Image
          className="rounded-lg hover:cursor-pointer shadow-md"
          src={fruit.image_url}
          alt={fruit.name}
          width={80}
          height={80}
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
    <div className="bg-white h-screen">
      <div className="flex justify-between">
        <div className="hover:cursor-pointer">
          <Navbar />
        </div>
        <section className="">
          <p className="text-[18px] font-semibold text-center mt-2 mb-2">
            Location
          </p>
          <span className="flex mr-4">
            <ImLocation size={22} className=" ml-4 text-orange-600" />
            <select
              id=""
              name=""
              className="bg-transparent rounded text-center font-bold text-orange-500 cursor-pointer"
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
        <p>
          <Link href="./notification">
            <BsFillBellFill size={30} className="mr-6 mt-4 cursor-pointer" />
          </Link>
        </p>
      </div>
      <div className="flex justify-between mt-8 ml-6 mr-6 border-2 border-black rounded-full">
        <BsSearch size={24} className="mt-2 ml-3" />
        <input
          type="text"
          placeholder="Search foods,drink,etc"
          className=" bg-transparent border-none text-center w-fit text-[13px]"
        />
        <LuSettings2 size={26} className="rounded-r-full mt-1.5 mr-1 mb-1.5" />
      </div>
      <div className="flex justify-between ml-6 mr-4 mt-6">
        <h1 className="text-[24px] font-medium mb-4">Categories</h1>
        <Link className="cursor-pointer" href="/categories">
          <h2 className="text-[18px] font-normal mr-4 mt-2 hover:text-orange-500">
            See all
          </h2>
        </Link>
      </div>
      <div className="flex justify-around mt-2 hover:cursor-pointer">{yum}</div>

      <div className="ml-6 mt-14 flex justify-between">
        <p className="text-[24px] font-medium">Deals</p>
        <Link href={`/Deals`}>
          <h2 className="hover:text-orange-500 mt-2 text-[18px] font-normal mr-6">
            See all
          </h2>
        </Link>
      </div>
      <div className="bg-orange-500 shadow-lg h-[200px] rounded-md">
        <span className="flex justify-between items-center mr-4 mt-4">
          <p className="ml-4 text- text-[24px] pt-6 text-black font-semibold">
            50% OFF On Grocery Combo packs.
          </p>
          <p>
            <Image
              src="/Media/basket.png"
              className="mt-4 rounded-md shadow-lg cursor-pointer"
              alt="fruits"
              height="150"
              width="150"
            />
          </p>
        </span>
        <span className="flex ">
          <Link href="/cart">
            <button className=" hover:cursor-pointer ml-6 mt-4 bg-white hover:text-white hover:bg-transparent hover:pl-6 hover:pr-6 hover:border-2 border-white rounded-lg text-orange-500 pt-4 pl-4 pr-4 pb-4 ">
              Order now
            </button>
          </Link>
        </span>
      </div>
      <div className="mt-8">
        <span className="flex justify-between ml-6 mt-6 mr-6">
          <p className="text-[24px] font-medium ">Popular items</p>
          <Link href={`/popular_items`}>
            <p className="text-[18px] font-normal mr-2 mt-2 cursor-pointer hover:text-orange-500">
              See all
            </p>
          </Link>
        </span>
        <div className="mt-4">
          <Slider />
        </div>
      </div>
      <div className="fixed w-full bottom-0">
        <Footer className="" />
      </div>
    </div>
  );
}
