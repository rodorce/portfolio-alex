import React from "react";
// import ejphoto from "../photos/4.jpg";
// import invphoto from "../photos/1.jpg";
const InvMessage = () => {
  return (
    <div
      className="flex flex-row w-full h-full bg-[#dcd9c9]"
      id="nuestra-union"
    >
      <div className="lg:w-2/3 flex justify-center flex-col items-center h-full align-top pt-24 pb-8">
        {/* <img
          src={invphoto}
          alt=""
          className="h-64 w-auto mx-auto rounded-lg mb-5 shadow-lg"
          data-aos="fade-down"
        /> */}
        <h3
          className="mx-12 font-Cookie text-8xl text-center"
          data-aos="fade-down"
        >
          Jonathan & Eva
        </h3>
        <div className="invitacion text-center lg:px-32 px-8 py-8 font-Playfair">
          <p data-aos="fade-down">
            Teniendo cada uno su camino de vida, Dios decidió unir nuestros
            destinos.
          </p>
          <br />
          <p data-aos="fade-down">
            Guiados por su amor pudimos dar inicio a la historia mas importante
            de nuestras vidas, comprometiéndonos en la Ciudad de Panamá, Panamá,
            en el 2019, en la Jornada Mundial de la Juventud.
          </p>
          <br />
          <p data-aos="fade-down">
            Estamos felices de poder compartir con ustedes nuestra futura unión,
            es por ello que los invitamos a ser testigos de este gran momento.
          </p>
        </div>
      </div>
      {/* <img src={ejphoto} className="lg:block hidden lg:w-1/3 h-auto" /> */}
    </div>
  );
};

export default InvMessage;
