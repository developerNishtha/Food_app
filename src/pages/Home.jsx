import React from "react";
import Nav from "../components/Nav";
import HomeSection from "../components/HomeSection";

const items = [
  {
    title: "Cafe 1",
    Link: "#",
  },
  {
    title: "Cafe 2",
    Link: "#",
  },
  {
    title: "Cafe 3",
    Link: "#",
  },
];

function Home() {
  return (
    <div>
      <Nav items={items} />
      <HomeSection />
    </div>
  );
}

export default Home;
