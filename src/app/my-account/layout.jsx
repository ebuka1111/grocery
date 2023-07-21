import React from "react";

export const metadata = {
  title: "My Account",
  description: "This page allows you to view your account",
};

export default function layout({ children }) {
  return <div>{children}</div>;
}
