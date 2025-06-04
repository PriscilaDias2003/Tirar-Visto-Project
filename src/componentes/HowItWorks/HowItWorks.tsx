import React, { useState } from "react";

const HowItWorks = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const etapas = [
    {
      titulo: "Etapa Inicial",
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      titulo: "Processo de Entrevista",
      descricao: "",
      detalhes: "Orientamos você sobre o que esperar, como se preparar e simulamos a entrevista consular.",
    },
    {
      titulo: "Entrega de Documentos",
      descricao: "",
      detalhes: "Coletamos, revisamos e entregamos os documentos necessários no momento ideal.",
    },
  ];

  return (
    <section id="quem-somos" data-aos="fade-left" className="w-full px-6 py-16 md:px-20 bg-white">

      <div className="mb-12 space-y-4">

        <div className="flex flex-col md:flex-row justify-around w-full">
            <div className="mt-[-65px]">
                <button className="bg-yellow-400 text-black px-4 py-1.5 rounded-full text-sm font-medium shadow hover:bg-yellow-300 transition">
                    Veja como funciona
                </button>

                <h2 className="mt-5 text-3xl md:text-6xl font-semibold leading-tight">
                    Sua tranquilidade <br className="hidden md:block" /> não tem preço!
                </h2>

            </div>
            <p className="text-gray-500 text-sm md:text-base max-w-3xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-stretch max-w-[80%] m-auto">
        <div className="w-full lg:w-1/2">
          <img
            src="/familia-aeroporto.png"
            alt="Família feliz no aeroporto"
            className="w-[80%] h-full object-cover rounded-2xl shadow-md"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          {etapas.map((etapa, index) => (
            <div
              key={index}
              className={`py-4 ${index < etapas.length - 1 ? "border-b border-gray-200" : ""}`}
            >
              <h3 className="text-xl sm:text-2xl lg:text-5xl font-semibold">{etapa.titulo}</h3>
              {etapa.descricao && (
                <p className="text-base text-gray-500 mt-1">{etapa.descricao}</p>
              )}

              {etapa.detalhes && (
                 <button
                 className="text-black text-sm mt-2 hover:underline flex items-center gap-1"
                 onClick={() => toggle(index)}
               >
                 <span className="text-xl font-bold">{openIndex === index ? "-" : "+"}</span> Leia mais
               </button>
             
              )}
              {openIndex === index && (
                <p className="text-sm text-gray-600 mt-2 transition-all duration-300">
                  {etapa.detalhes}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
