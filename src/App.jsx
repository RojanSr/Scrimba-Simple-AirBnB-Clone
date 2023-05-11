import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import data from "../data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="card-container container">{cards}</div>
    </div>
  );
}

export default App;
