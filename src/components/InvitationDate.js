import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Heart } from "iconoir-react";
import portfolio from "../Portfolio.json";
import Gallery from "./Gallery";
const InvitationDate = (props) => {
  const [counter, setCounter] = useState(0);
  const [project, setProject] = useState({
    title: portfolio.projects.title[0],
    description: portfolio.projects.description[0],
    date: portfolio.projects.date[0],
    keywords: portfolio.projects.keywords[0],
    category: portfolio.projects.category[0],
  });

  useEffect(() => {
    setProject({
      title: portfolio.projects.title[counter],
      description: portfolio.projects.description[counter],
      date: portfolio.projects.date[counter],
      keywords: portfolio.projects.keywords[counter],
      category: portfolio.projects.category[counter],
    });
  }, [counter]);

  const handleClickOnLeft = () => {
    if (counter < 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };

  const handleClickOnRight = () => {
    if (counter >= portfolio.projects.title.length - 1) {
      setCounter(portfolio.projects.title.length - 1);
    } else {
      setCounter(counter + 1);
    }
  };

  return (
    <>
      {/* <img src={amshirt} alt="" className="-z-10" /> */}
      <div className="bg-blue-200">
        <div
          className="bg-blue-200 z-10 lg:py-32 lg:mx-32 mx-8  px-8  relative py-8"
          id="galeria"
        >
          <div className="flex flex-row justify-center align-middle items-center">
            <ArrowLeft
              onClick={handleClickOnLeft}
              className="text-4xl my-auto mx-28"
            />
            <h3
              className="font-semibold lg:text-6xl text-3xl text-center font-Oswald tracking-wider"
              data-aos="fade-in"
            >
              {project.title}
            </h3>
            <ArrowRight
              onClick={handleClickOnRight}
              className="text-4xl mx-28"
            />
          </div>
          <h5 className="font-semibold lg:text-xl text-center font-Oswald my-5">
            Fecha: {project.date}
          </h5>
          <h5 className="font-semibold lg:text-xl text-center font-Oswald my-5">
            Categoria: {project.category}
          </h5>
          <h5 className="font-semibold lg:text-xl text-center font-Oswald my-5">
            Keywords: {project.keywords}
          </h5>
          <div className="pt-10">
            <div className="lg:px-5 mb-10 lg:mb-0">
              <h3
                className="font-medium text-md tracking-wide text-center font-Oswald"
                data-aos="fade-in"
              >
                {project.description}
              </h3>
            </div>
          </div>
        </div>
        <Gallery count={counter} />
      </div>
    </>
  );
};

export default InvitationDate;
