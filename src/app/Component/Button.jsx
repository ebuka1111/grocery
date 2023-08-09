"use client";
import React, { useState } from "react";

import { GrSubtractCircle, GrAddCircle } from "react-icons/gr";

export default function Button() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount((prev) => count + 1);
  }
  function handleDelete() {
    setCount((prev) => count - 1);
  }
  return (
    <div>
      <button className="text-white ml-6 mt-24" onClick={handleAdd}>
        <GrAddCircle size={40} />
      </button>
      <p className="text-[26px] text-center mt-16 ml-6 bg-white px-4 py-2 rounded-full font-medium text-orange-500">
        {count}
      </p>
      <button className="text-white ml-6 mt-16" onClick={handleDelete}>
        <GrSubtractCircle size={40} />
      </button>
    </div>
  );
}
