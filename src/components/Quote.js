import React from "react";
import { Flower } from "iconoir-react";
const Quote = () => {
  return (
    <div className="bg-stone-200 relative lg:px-64 p-16 lg:pb-32 lg:pt-32 text-center flex justify-center items-center flex-col">
      <Flower className="text-2xl large:text-4xl mb-16 animate-spin-slow" />
      <h3
        className="text-xl lg:text-6xl font-Playfair pb-4 text-black uppercase font-extralight"
        data-aos="fade-down"
      >
        Para sacar el máximo rendimiento de la alegría, hay que tener con quien
        compartirla.
      </h3>
      <span
        className="text-xl lg:text-6xl font-Playfair pt-8 block text-black uppercase font-extralight"
        data-aos="fade-down"
      >
        -Mark Twain
      </span>
      <Flower className="text-2xl lg:text-4xl mt-16 animate-spin-slow" />
    </div>
  );
};

export default Quote;
