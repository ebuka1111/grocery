import React from "react";
import { Montserrat } from "next/font/google";

const mon = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "My Delivery Page",
  description: "This page allows you to view your Delivery",
};

export default function layout({ children }) {
  return (
    <html lang="en" className="max-w-[480px] max-h-[828px]">
      <body className={mon.className}>{children}</body>
    </html>
  );
}
