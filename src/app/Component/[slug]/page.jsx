"use client";
import React from "react";
import { fruits } from "@/app/page";

export default function page({ params }) {
  const yum = fruits.find((fruit) => fruit.id == params.slug);
  return (
    <div className="flex flex-col m-auto items-center bg-gray-100 h-screen w-full fixed shadow-md">
      <h1>{yum.name}</h1>
      <h2>{yum.image_url}</h2>
      <span>color: </span>
      <p>{yum.color}</p>
      <span>origin: </span>
      <p>{yum.origin}</p>
    </div>
  );
}
