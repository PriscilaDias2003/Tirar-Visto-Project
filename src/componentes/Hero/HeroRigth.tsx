import React from "react";

const HeroRight = () => {
    return (
      <div
        className="relative w-full md:w-1/2 min-h-[600px] lg:min-h-[100%] rounded-2xl overflow-hidden shadow-lg bg-cover bg-center"
        style={{ backgroundImage: "url('/ferris-wheel.png')" }}
      >
        <button className="absolute top-4 right-4 bg-yellow-400 text-black px-5 py-2 rounded-full font-medium hover:bg-yellow-300 transition shadow">
          Tirar meu visto agora!
        </button>
  
        <div className="max-w-[70%] absolute bottom-0 left-0 right-0 bg-black/10 px-6 py-6 md:px-10 md:py-8 text-white">
            <div className="max-w-4xl">
                <h2 className="text-xl sm:text-2xl md:text-5xl font-semibold leading-tight text-white">
                    Realize o seu sonho com a ajuda da Tirar Visto!
                </h2>
                <p className="text-sm sm:text-base md:text-lg mt-3 text-white/90 leading-relaxed">
                    Com um serviço profissional, você não terá dor de cabeça para todo o processo do visto e entrevistas no consulado.
                </p>
            </div>
        </div>


      </div>
    );
  };
  

export default HeroRight;
