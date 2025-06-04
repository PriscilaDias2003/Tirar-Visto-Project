import React from "react";

const destinos = [
  { cidade: "Bali, Indonésia", imagem: "/bali.png" },
  { cidade: "Nova York, Estados Unidos", imagem: "/nova-york.png" },
  { cidade: "Santorini, Grécia", imagem: "/santorini.png" },
  { cidade: "Paris, França", imagem: "/paris.png" },
  { cidade: "Cidade do Cabo, África do Sul", imagem: "/cidade-do-cabo.png" },
  { cidade: "Mumbai, Índia", imagem: "/mumbai.png" },
];

function PlaceSection() {
  return (
    <section data-aos="fade-left" className="mt-7 md:bg-white text-center">
        <div
            className="bg-cover bg-center md:py-28"
            style={{ backgroundImage: "url('/vector-icons.png')" }}
        >
            <div className="inline-block px-4 py-1 mb-4 text-sm font-medium text-white bg-yellow-400 rounded-full">
            Top Destinos
            </div>

            <h2 className="text-3xl md:text-7xl font-medium mb-4">
            Destinos mais procurados
            </h2>

            <p className="text-gray-600 max-w-xl mx-auto mb-10 px-4">
            Confira os destinos mais procurados por nossos clientes nos últimos meses,
            qual será o seu novo destino?
            </p>

            <button className="px-6 py-3 bg-[#0A0E3F] text-white font-medium rounded-full hover:bg-[#1A1E5F] mb-10">
            Conheça mais
            </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 sm:px-6 md:px-0 justify-items-center max-w-6xl mx-auto">
            {destinos.map((destino, index) => {
            const alturaImagem =
                index === 1 || index === 4 ? "h-60 sm:h-72 md:h-80" : "h-48 sm:h-56 md:h-64";
            const alinhamento = index < 3 ? "self-end" : "self-start";

            return (
                <div
                key={index}
                className={`relative overflow-hidden shadow-lg max-w-xs w-full rounded-3xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer ${alinhamento}`}
                >
                <img
                    src={destino.imagem}
                    alt={destino.cidade}
                    className={`w-full object-cover rounded-3xl ${alturaImagem}`}
                />
                <div className="w-10/12 absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/30 backdrop-blur-md text-white text-sm font-semibold px-6 py-2 rounded-[20px] shadow-md">
                    {destino.cidade}
                </div>
                </div>
            );
            })}
        </div>
    </section>

  );
}

export default PlaceSection;
