"use client";
import { useState } from "react";
import { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";

// import list from "../categories/array.json";

const list = [
  {
    name: "Apple",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81sXUXFQ2oL._SL1500_.jpg",
  },
  {
    name: "Banana",
    image:
      "https://images.bonanzastatic.com/afu/images/4fd4/49ab/720a_7454118103/il_fullxfull.1665047865_9vim.jpg",
  },
  {
    name: "Orange",
    image:
      "https://th.bing.com/th/id/R.a157a24f82f3097b64f495417cdfa031?rik=geE2%2bt7lCbxCtw&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f34500000%2fAn-Orange-Fruit-called-Orange-colors-34512068-2738-1825.jpg&ehk=ts78znKvKjBLMVLfCMfSW%2brWzoAfd2%2b3JofATzGNsMI%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "Grapes",
    image:
      "https://images.unsplash.com/photo-1596363505729-4190a9506133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Watermelon",
    image:
      "https://images.unsplash.com/photo-1621961048737-a9993789e1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0ZXJtZWxvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Strawberry",
    image:
      "https://images.unsplash.com/photo-1587815073078-f636169821e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
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
    <div className="bg-gray-100 h-screen w-full fixed shadow-md">
      <span className="flex justify-around items-center mt-8">
        <IoIosArrowBack className="mr-20" />
        <h1 className="text-center font-medium mr-32 text-[24px]">Categories</h1>
      </span>
      <div className="grid grid-cols-3">
        {list.map((listOne) => (
          <div className="flex items-center justify-center h-[240] mt-60 w-full">
            <img src={listOne.image} alt={listOne.name} />
            <p>{listOne.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default listOne;
