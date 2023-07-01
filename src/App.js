import React from "react";
import Navbar from "./components/Navbar.js";
import data from "./data.js";
import Card from "./components/Card.js";

export default function App() {
  const cards = data.map((obj) => {
    return <Card data={obj} key={Math.random()} />;
  });
  return (
    <div className="main">
      <Navbar />
      <section className="main--container">{cards}</section>
    </div>
  );
}
