import React from "react";

import bundle from "../image/bundle.jpg";
const Herocmp = () => {
  return (
    <div class="p-5 flex-col flex ">
      <img src={bundle} alt="img" class="max-w-md self-center" />
      <h1 class="mb-4 text-2xl font-bold">Online Experiences</h1>
      <p class="mt-0">
        {" "}
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </div>
  );
};
export default Herocmp;
