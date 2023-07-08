"use client";
import react, { useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { BsWallet2 } from "react-icons/bs";
import Link from "next/link";

export default function Page() {
  const [amount, setAmount] = useState(0);
  const [walletBalance, setWalletBalance] = useState(500.0);

  const handleButtonClick = (buttonAmount) => {
    setAmount(buttonAmount);
    setWalletBalance(walletBalance + buttonAmount);
  };
  const handleInputChange = (e) => {
    setAmount(e.target.value);
  };
  const handleAddMoney = () => {
    const inputAmount = Number(amount);
    setWalletBalance(walletBalance + inputAmount);
  };

  return (
    <div>
      <div className="overflow-hidden">
        <span className="flex space-x-24 mt-8 mr-6 ml-6">
          <Link href="/">
            <SlArrowLeft className="border-2 rounded px-2 py-2 w-[40px] h-[40px]" />
          </Link>
          <h1 className="font-semibold mt-3 pl-6">Add Money</h1>
        </span>
      </div>
      <div className="mt-16 ml-6 mr-6 bg-orange-500 rounded-md px-4 py-4 h-[400px]">
        <span className="flex justify-between">
          <h2 className="mt-2 text-gray-600">Wallet Balance</h2>
          <BsWallet2 className="bg-white rounded-md text-green-500 w-[36px] h-[36px] px-2 py-2" />
        </span>
        <p className="font-bold">$ 500.00</p>
        <div className="grid grid-cols-4 grid-rows-2 gap-2 pt-4 px-2">
          <button
            className="bg-white border rounded-md w-18 py-2 text-center text-xs"
            onClick={() => handleButtonClick(100)}
          >
            +$100
          </button>
          <button
            className="bg-white border rounded-md w-18 py-2 text-center text-xs"
            onClick={() => handleButtonClick(200)}
          >
            +$200
          </button>
          <button
            className="bg-white border rounded-md w-18 py-2 text-center text-xs"
            onClick={() => handleButtonClick(500)}
          >
            +$500
          </button>
          <button
            className="bg-white border rounded-md w-18 py-2 text-center text-xs"
            onClick={() => handleButtonClick(1000)}
          >
            +$1000
          </button>
          <button
            className="bg-white border rounded-md w-18 py-2 text-center text-xs"
            onClick={() => handleButtonClick(2000)}
          >
            +$2000
          </button>
          <button
            className="bg-white border rounded-md w-18 py-2 text-center text-xs "
            onClick={() => handleButtonClick(3000)}
          >
            +$3000
          </button>
          <button
            className="bg-white border rounded-md w-18 py-2 text-center text-xs "
            onClick={() => handleButtonClick(4000)}
          >
            +$4000
          </button>
          <button
            className="bg-white border rounded-md w-18 py-2 text-center text-xs"
            onClick={() => handleButtonClick(5000)}
          >
            +$5000
          </button>
        </div>
        <input
          className="text-black w-full mt-6 rounded-lg"
          onChange={handleInputChange}
        >
        </input>

        <button
          onClick={handleAddMoney}
          className="text-white flex justify-center items-center text-center bg-green-600  px-40 py-4 mt-12 rounded-lg text-[20px] mr-6 font-semibold"
        >
          Add Money
        </button>
      </div>
    </div>
  );
}
