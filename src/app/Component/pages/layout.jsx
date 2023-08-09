import React from "react";
import { Montserrat } from "next/font/google";

const mon = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Grocery App",
  description: "view several pages",
};

export default function layout({ children }) {
  return (
    <html lang="en" className="max-w-[480px] max-h-[828px]">
      <body className={mon.className}>{children}</body>
    </html>
  );
}
