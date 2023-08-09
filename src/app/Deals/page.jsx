import React from "react";
import { SlArrowLeft } from "react-icons/sl";
import Link from "next/link";
import Image from "next/image";
import Footer from "../Component/Footer";

export default function page() {
  return (
    <div className="pb-24 bg-orange-100 h-full">
      <div className="border-b-2 border-black pb-8 pt-4">
        <span className="flex justify-between">
          <Link href="/">
            <SlArrowLeft
              size={46}
              className="mt-2 ml-4 shadow-md rounded-md border-2 border-gray-100 text-orange-500 pt-2 pb-2 bg-white"
            />
          </Link>
          <h1 className="mt-4 text-center text-[26px] mr-44 font-medium">
            Deals
          </h1>
        </span>
      </div>
      <div className="ml-4 mr-4 mt-6">
        <p className=" text-[22px] text-center font-normal">
          🔥 Unbeatable Deals Alert! 🔥 Shop smart, save BIG! Explore our
          exclusive discounts on top-notch products. Don't miss out on these
          amazing savings. Hurry, before they're gone! 🛍️💨 #DealsOfTheDay
          #Savings #HappyShopping
        </p>
      </div>
      <p className="border-2 border-orange-500 ml-16 rounded-md mr-16 mt-8"></p>
      <div className="mt-8 text-center text-[24px] font-medium mr-3 ml-3">
        <p>Weekly Specials - Fresh Produce</p>
        <div className="mt-8 flex justify-between ml-2 mr-2">
          <Image
            src="/Media/vege.jpeg"
            className="rounded-md shadow-md"
            alt="veggies"
            width="180"
            height="180"
          />
          <Image
            src="/Media/vege2.jpg"
            className="rounded-md shadow-md"
            alt="veggies"
            width="180"
            height="180"
          />
        </div>
        <p className="text-[22px] font-normal mt-6 text-center">
          Check out our Weekly Specials on Fresh Produce. 🍅🍊 Stock up on
          nature's bounty and save big this week! 🌽🥦 Limited time offer, so
          grab 'em while they're fresh! 🌱🛒 #FreshDeals #WeeklySpecials
          #Savings"
        </p>
      </div>
      <p className="border-2 border-orange-500 ml-16 rounded-md mr-16 mt-8"></p>
      <div className="mt-8 text-center text-[24px] font-medium mr-3 ml-3">
        <p>Flash Sale - Snack Attack!</p>
        <div className="mt-8 flex justify-between ml-2 mr-2">
          <Image
            src="/Media/snackx.jpeg"
            className="rounded-md shadow-md"
            alt="snacks"
            width="180"
            height="180"
          />
          <Image
            src="/Media/snackxx.jpeg"
            alt="snacks"
            className="rounded-md shadow-md"
            width="180"
            height="180"
          />
        </div>
        <p className="text-[22px] font-normal mt-6 text-center">
          Snack Attack! 🍿🍪 Grab your favorite munchies at unbeatable prices
          during our Flash Sale. Don't miss out on the crunchiest deals! 🎉🛍️
          #SnackTime #FlashSale #LimitedStock
        </p>
      </div>
      <p className="border-2 border-orange-500 ml-16 rounded-md mr-16 mt-8"></p>
      <div className="mt-8 text-center text-[24px] font-medium mr-3 ml-3">
        <p>Buy 1 Get 1 Free - Dairy Delights</p>
        <div className="mt-8 flex justify-between ml-2 mr-2">
          <Image
            src="/Media/creamy.jpeg"
            className="rounded-md shadow-lg"
            alt="creamy"
            width="180"
            height="180"
          />
          <Image
            src="/Media/milk.jpeg"
            className="rounded-md shadow-lg"
            alt=""
            width="180"
            height="180"
          />
        </div>
        <p className="text-[22px] font-normal mt-6 text-center">
          Dairy Delights 🥛🧀 Buy 1 Get 1 Free! Stock up on creamy goodness
          without breaking the bank. Enjoy double the taste for half the price!
          🥳🛒 #BOGO #DairyDeals #LimitedOffer
        </p>
      </div>
      <p className="border-2 border-orange-500 ml-16 rounded-md mr-16 mt-8"></p>
      <div className="mt-8 text-center text-[24px] font-medium mr-3 ml-3">
        <p>Seasonal Special - Grilling Galore</p>
        <div className="mt-8 flex justify-between ml-2 mr-2">
          <Image
            src="/Media/grill.jpeg"
            className="rounded-md shadow-lg"
            alt="grill"
            width="180"
            height="180"
          />
          <Image
            src="/Media/grills.jpg"
            className="rounded-md shadow-lg"
            alt="grill"
            width="180"
            height="180"
          />
        </div>
        <p className="text-[22px] font-normal mt-6 text-center">
          Grilling Galore 🍔🌭 Get fired up for a BBQ bonanza with our Seasonal
          Specials! 🔥🍗 Discover unbeatable deals on all your grilling
          favorites. Let's grill and chill! 🍻🍖 #GrillTime #BBQParty
          #SeasonalSavings
        </p>
      </div>
      <p className="border-2 border-orange-500 ml-16 rounded-md mr-16 mt-8"></p>
      <div className="mt-8 text-center text-[24px] font-medium mr-3 ml-3">
        <p> Pet Palooza - Treats for Your Furry Friends</p>
        <div className="mt-8 flex justify-between ml-2 mr-2">
          <Image
            src="/Media/pet.jpeg"
            className="rounded-md shadow-md"
            alt="pet toys"
            width="180"
            height="180"
          />
          <Image
            src="/Media/pet toys.jpg"
            className="rounded-md shadow-md"
            alt=""
            width="180"
            height="180"
          />
        </div>
        <p className="text-[22px] font-normal mt-4 text-center ">
          Pet Palooza 🐾🐶 Spoil your furry friends with our delightful pet
          deals! Treats, toys, and more at pawsome prices. 🐾🐱 Pamper your pets
          without straining your wallet! 🛍️🐾 #PetDeals #FurryFriends
          #TreatYourPets
        </p>
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
