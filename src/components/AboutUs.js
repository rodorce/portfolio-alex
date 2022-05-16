import React from "react";
import am from "../photos/am-port.png";
const AboutUs = () => {
  return (
    <div className="">
      <div className=" z-10 lg:py-32 lg:mx-32 mx-8  px-8  relative py-8">
        <h3
          className="font-semibold lg:text-6xl text-3xl text-center font-Oswald tracking-wider pb-12"
          data-aos="fade-in"
        >
          Acerca de nosotros
        </h3>
        <div className="flex flex-row">
          <article className="px-32 w-2/3">
            <p>Mexicanos Dirección de Branding y ReBranding en pymes. </p>
            <br />
            <p>
              Ha trabajado con muchas empresas de todo México desde Ensenada
              hasta Guadalajara todo con un objetivo específico que es dar a
              conocer que el diseño es necesario para atraer clientes, que del
              ojo si nace el amor, es ahí donde está nuestro diseño.
            </p>
            <br />
            <p>
              {" "}
              Incontables cursos para reafirmar lo que en realidad sabemos
              creyentes de la retroalimentación de todo el mundo, compartir nos
              une y hace esto propio.
            </p>
            <br />
            <p>
              Trabajo publicado en diversas empresas de México contento con el
              resultado de cada proyecto trabajado con pasión.
            </p>
            <br />
            Gracias Diseño Gráfico por tanto.
          </article>
          <div>
            <img src={am} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
