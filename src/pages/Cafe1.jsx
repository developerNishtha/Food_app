import React from "react";
import Nav from "../components/Nav";

const items = [
  {
    title: "Cafe 1",
    Link: "#",
  },
];

export default function Cafe1() {
  return (
    <div>
      <Nav items={items}></Nav>
    </div>
  );
}
