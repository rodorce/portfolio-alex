import React, { useState, useEffect } from "react";
import tactic1 from "../photos/tactic1.png";
import tactic2 from "../photos/tactic2.png";
import tactic3 from "../photos/tactic3.png";
import yogufresh1 from "../photos/yogufresh.png";
import yogufresh2 from "../photos/yogufresh2.png";
import yogufresh3 from "../photos/yogufresh3.png";
import laras1 from "../photos/laras1.png";
import laras2 from "../photos/laras2.png";
import laras3 from "../photos/laras3.png";
import bite1 from "../photos/bite1.png";
import bite2 from "../photos/bite2.png";
// import bite3 from "../photos/bite3.png";
// import aduana1 from "../photos/aduana1.png";
// import aduana2 from "../photos/aduana2.png";
// import aduana3 from "../photos/aduana3.png";
// import gala1 from "../photos/gala1.png";
// import gala2 from "../photos/gala2.png";
// import gala3 from "../photos/gala3.png";
// import rac1 from "../photos/rac1.png";
// import rac2 from "../photos/rac2.png";
// import rac3 from "../photos/rac3.png";
// import sb1 from "../photos/sb1.png";
// import sb2 from "../photos/sb2.png";
// import sb3 from "../photos/sb3.png";
import globo1 from "../photos/globo1.png";
import globo2 from "../photos/globo2.png";
const gallery = [
  [tactic1, tactic2, tactic3],
  [laras1, laras2, laras3],
  [yogufresh1, yogufresh2, yogufresh3],
  [bite1, bite2],
  [""],
  [""],
  [""],
  [""],
  [globo1, globo2],
];

const Gallery = ({ count }) => {
  return (
    <div className="grid grid-cols-3 bg-blue-200 p-4 lg:p-20 gap-4">
      {gallery[count].map((image) => (
        <img src={image} />
      ))}
    </div>
  );
};

export default Gallery;
