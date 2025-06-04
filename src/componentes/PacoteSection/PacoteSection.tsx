import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./PacoteSection.css";

const pacotes = [
  {
    titulo: "Passaporte",
    atendimento: "On-line",
    tempo: "45 dias",
    preco: "R$ 890,00",
    imagem: "/passaporte.jpg",
  },
  {
    titulo: "Passaporte + Visto",
    atendimento: "On-line + Presencial",
    tempo: "25 dias",
    preco: "R$ 1.290,00",
    imagem: "/visto.jpg",
  },
  {
    titulo: "Consultoria Completa",
    atendimento: "Presencial Completo",
    tempo: "10 dias",
    preco: "R$ 1.890,00",
    imagem: "/consultoria.png",
  },
  {
    titulo: "Consultoria Premium",
    atendimento: "Presencial + On-line",
    tempo: "15 dias",
    preco: "R$ 2.100,00",
    imagem: "/consultoria.png",
  },
];

function PacotesSection() {
  return (
    <section id="servicos" data-aos="fade-left" className="bg-white px-6 py-16 md:px-20 relative">
      <div className="max-w-[1480px] m-auto">
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between relative">
          <div>
            <span className="inline-block px-4 py-1 text-sm font-medium text-white bg-yellow-400 rounded-full mb-2">
              Pacotes
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-0">
              Confira nossos pacotes
            </h2>
          </div>

          <div className="flex gap-3 mt-4 md:mt-0 z-10 relative w-[125px]">
            <button className="swiper-button-prev w-10 h-10 bg-[#0A0E3F] rounded-full flex items-center justify-center text-white text-lg hover:bg-[#1A1E5F] transition">
            
            </button>
            <button className="swiper-button-next w-10 h-10 bg-[#0A0E3F] rounded-full flex items-center justify-center text-white text-lg hover:bg-[#1A1E5F] transition">
              
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="!px-2 z-0"
        >
          {pacotes.map((pacote, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white border border-gray-200 rounded-3xl shadow-md overflow-hidden">
                <img
                  src={pacote.imagem}
                  alt={pacote.titulo}
                  className="w-full h-auto object-cover rounded-t-3xl p-3"
                />
                <div className="p-5 text-left">
                  <div className="flex gap-2 mb-2">
                    <span className="text-sm w-[80px] text-center px-2 py-1 border border-black rounded-full md:text-base">
                      Basic
                    </span>
                    <span className="text-sm w-[100px] text-center px-2 py-1 border border-gray-300 rounded-full md:text-base">
                      Premium
                    </span>
                  </div>
                  <h3 className="font-semibold mb-2 text-1xl sm:text-3xl md:text-4xl ">
                    {pacote.titulo}
                  </h3>

                  <div className="flex gap-8">
                    <p className="text-sm text-gray-600">
                        <strong>Atendimento:</strong> <br />{pacote.atendimento}
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                        <strong>Tempo:</strong> <br />{pacote.tempo}
                    </p>

                  </div>

                  <div className="flex justify-between border-t border-gray-300">
                    <p className="text-sm sm:text-md font-medium mb-4">
                        <span className="text-xs sm:text-sm text-[#8D8D8D] font-light">A partir de</span> <br />
                        <span className="text-2xl sm:text-3xl md:text-4xl">{pacote.preco}</span>
                    </p>

                    <button className="bg-[#0A0E3F] hover:bg-[#1A1E5F] text-white font-semibold px-4 py-2 rounded-full text-sm max-h-14 h-full self-end">
                        Contratar
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default PacotesSection;
