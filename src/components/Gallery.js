import React from "react";
import tactic1 from "../photos/tarc1.png";
import tactic2 from "../photos/tarc2.png";
import yogufresh1 from "../photos/yogufresh1.png";
import yogufresh2 from "../photos/yogufresh2.png";
import yogufresh3 from "../photos/yogufresh3.png";
import yogufresh4 from "../photos/yogufresh4.png";
import yogufresh5 from "../photos/yogufresh5.png";
import yogufresh6 from "../photos/yogufresh6.png";
import yogufresh7 from "../photos/yogufresh7.png";
import yogufresh8 from "../photos/yogufresh8.png";
import laras1 from "../photos/lara1.png";
import laras2 from "../photos/lara2.png";
import laras3 from "../photos/lara3.png";
import laras4 from "../photos/lara4.png";
import laras5 from "../photos/lara5.png";
import laras6 from "../photos/lara6.png";
import laras7 from "../photos/lara7.png";
import laras8 from "../photos/lara8.png";
import bite1 from "../photos/bbb1.png";
import bite2 from "../photos/bbb2.png";
import globo1 from "../photos/elglobo1.png";
import globo2 from "../photos/elglobo2.png";
import globo3 from "../photos/elglobo3.png";
import globo4 from "../photos/elglobo4.png";
import tacos1 from "../photos/tacos1.png";
import tacos2 from "../photos/tacos2.png";
import tacos3 from "../photos/tacos3.png";
import tacos4 from "../photos/tacos4.png";
import gala1 from "../photos/gala1.png";
import gala2 from "../photos/gala2.png";
import gala3 from "../photos/gala3.png";
import gala4 from "../photos/gala4.png";
import rax1 from "../photos/rax1.png";
import rax2 from "../photos/rax2.png";
import rax3 from "../photos/rax3.png";
import rax4 from "../photos/rax4.png";
const gallery = [
  [tactic1, tactic2],
  [laras1, laras2, laras3, laras4, laras5, laras6],
  [
    yogufresh1,
    yogufresh2,
    yogufresh3,
    yogufresh4,
    yogufresh5,
    yogufresh6,
    yogufresh7,
    yogufresh8,
  ],
  [bite1, bite2],
  [tacos1, tacos2, tacos3, tacos4],
  [gala1, gala2, gala3, gala4],
  [rax1, rax2, rax3, rax4],
  [globo1, globo2, globo3, globo4],
];

const Gallery = ({ count }) => {
  return (
    <div className={`grid grid-cols-3 bg-blue-200 p-4 lg:p-20 gap-4`}>
      {gallery[count].map((image) => (
        <img src={image} />
      ))}
    </div>
  );
};

export default Gallery;
