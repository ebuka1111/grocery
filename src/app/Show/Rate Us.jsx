import React from "react";

const data = [
  {
    id: "1",
    off: "35% 0ff",
    icon: <AiOutlineHeart />,
    image: "",
    icon: <AiOutlinePlus />,
    text1: "Apple",
    text2: "$5/kg",
  },
  {
    id: "2",
    off: "20% 0ff",
    icon: <AiOutlineHeart />,
    image: "",
    icon: <AiOutlinePlus />,
    text1: "Orange",
    text2: "$4/kg",
  },
  {
    id: "3",
    off: "15% 0ff",
    icon: <AiOutlineHeart />,
    image: "",
    icon: <AiOutlinePlus />,
    text1: "Pineapple",
    text2: "$5/kg",
  },
  {
    id: "4",
    off: "15% 0ff",
    icon: <AiOutlineHeart />,
    image: "",
    icon: <AiOutlinePlus />,
    text1: "Pineapple",
    text2: "$5/kg",
  },
];

export default function Rate_Us() {
  const paul = data.map((saul) => (
    <div>
      <p>{saul.off}</p>
    </div>
  ));
  return <div>{paul}</div>;
}
