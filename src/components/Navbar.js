import { Menu } from "iconoir-react";
import React, { useState } from "react";
import logo from "../photos/am-azul.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState("hidden");
  const [menuColor, setMenuColor] = useState("text-pink-500");

  const handleMenu = () => {
    menuColor !== "text-black"
      ? setMenuColor("text-black")
      : setMenuColor("text-pink-500");

    showMenu !==
    "w-full fixed lg:hidden mx-auto bg-white text-black h-screen w-screen"
      ? setShowMenu(
          "w-full fixed lg:hidden mx-auto bg-white text-black h-screen w-screen"
        )
      : setShowMenu("hidden");
  };
  return (
    <>
      <div className="z-50 w-full text-white absolute mt-5">
        <div className="fixed right-0 top-0 z-50">
          {console.log(menuColor)}
          <Menu
            className={`${menuColor} block lg:hidden`}
            onClick={handleMenu}
          />
        </div>
        <div className="absolute text-center w-full">
          <h2 className="mx-12 font-Cookie text-xl cursor-pointer lg:hidden">
            <img src={logo} alt="" className="hidden" />
          </h2>
        </div>
        <ul className="hidden lg:flex flex-row justify-center items-center">
          <a href="#galeria">
            <li className="mx-8 font-Oswald cursor-pointer">Inicio</li>
          </a>
          <a href="#">
            <li className="mx-12 font-Cookie text-4xl cursor-pointer">
              <img src={logo} className="h-16 w-auto" />
            </li>
          </a>
          <a href="#galeria">
            <li className="mx-8 font-Oswald cursor-pointer">Galeria</li>
          </a>
        </ul>
        {/* Mobile Menu  */}
        <ul className={showMenu}>
          <a href="#" className="bg-white">
            <li className="mx-12 font-Cookie text-4xl cursor-pointer bg-white">
              <img src={logo} className="h-16 w-auto mx-auto" />
            </li>
          </a>
          <a href="#nuestra-union">
            <li
              className="mx-8 font-Oswald cursor-pointer py-5 text-center"
              onClick={handleMenu}
            >
              Inicio
            </li>
          </a>
          <a href="#galeria">
            <li
              className="mx-8 font-Oswald cursor-pointer pb-5 text-center"
              onClick={handleMenu}
            >
              Galería
            </li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
