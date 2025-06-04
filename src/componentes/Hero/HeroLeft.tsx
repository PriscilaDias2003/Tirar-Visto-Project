import React from "react";
import Navbar from "../NavBar/NavBar";

const HeroLeft = () => {
  return (
    <section className="px-6 py-10 md:px-20 bg-white text-[#1c1c1c]">
      <Navbar />

      <div className="max-w-2xl mx-auto space-y-10">
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
          Tire seu Visto conosco e <br /> não tenha nenhuma <br /> surpresa negativa!
        </h1>

        <hr className="border-gray-300" />

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[60%] mt-10 mb-6 lg:mb-10">
            <p className="text-[#8D8D8D] leading-relaxed mb-8">
              Com uma equipe altamente treinada, nós temos todos os procedimentos para que seu processo seja o mais tranquilo e rápido.
              Uma consultoria completa para você e sua família não ter nenhuma preocupação na sua viagem.
            </p>

            <button className="text-white bg-[#0A0E3F] px-6 py-3 rounded-full font-medium hover:bg-[#1A1E5F] transition flex items-center gap-2">
              Saiba mais
              <span className="text-xl">→</span>
            </button>
          </div>

          <div className="w-full lg:w-[40%] flex flex-col justify-end items-center lg:items-end gap-6">
            <div className="w-full max-w-sm">
              <img
                src="/bruna.png"
                alt="Bruna"
                className="w-full h-auto rounded-lg object-cover cursor-pointer"
              />
              <div className="flex items-center justify-between mt-5 w-full max-w-xs">
                <div>
                  <p className="text-sm font-semibold text-[#1C1C1C]">Conheça a Bruna</p>
                  <p className="text-xs text-gray-500">Ver vídeo</p>
                </div>

                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0A0E3F] hover:bg-[#1A1E5F] transition text-white text-xl">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-10 pt-8 justify-center md:justify-between">
          {[
            { valor: "509", label: "Vistos Tirados" },
            { valor: "602", label: "Passaportes Tirados" },
            { valor: "634", label: "Famílias Felizes" },
          ].map((item, index) => (
            <div
              key={index}
              className="pr-6 border-none last:border-r-0 md:w-[25%] min-w-[100px] border-r border-gray-300 text-center md:text-left"
            >
              <p className="text-3xl sm:text-4xl md:text-5xl font-medium mb-2">{item.valor}</p>
              <p className="text-xs sm:text-sm text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroLeft;
