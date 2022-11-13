// Dependencies
import React from "react";

// Styles
import "./tailwind.output.css";

import Card from "./components/Card";
import Header from "./components/Header";
import Herocmp from "./components/Herocmp";
import datas from "./components/Data";

const Data = datas.map((el) => {
  return (
    <Card
      key={el.id}
      img={el.img}
      rating={el.rating}
      reviewcount={el.reviewcount}
      country={el.country}
      title={el.title}
      price={el.price}
    />
  );
});

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Herocmp></Herocmp>
      <div class="flex overflow-x-auto space-x-8 p-5">{Data}</div>
    </div>
  );
}

export default App;
