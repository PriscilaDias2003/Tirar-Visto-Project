import React from "react";

const TrustSection = () => {
  return (
    <section
      data-aos="fade-left"
      className="relative bg-[#f5f5f5] sm:py-16 px-4 md:px-20 mb-20 overflow-hidden"
    >
     
      <div className="absolute top-10 right-6 sm:top-12 sm:right-10 md:top-[20%] md:right-[15%] w-8 h-8 md:w-10 md:h-10 bg-white rounded shadow-md flex items-center justify-center rotate-[12deg]">
        <img src="/phone-icon.svg" alt="Telefone" className="w-4 md:w-5" />
      </div>
    
      
      <div className="absolute bottom-10 left-6 sm:bottom-12 sm:left-10 md:top-[80%] md:left-[20%] w-8 h-8 md:w-10 md:h-10 bg-white rounded shadow-md flex items-center justify-center rotate-[10deg]">
        <img src="/clock.svg" alt="Relógio" className="w-4 md:w-5" />
      </div>
    
      
      <div className="flex flex-col md:flex-row items-center gap-10 min-h-[344px] justify-center md:justify-around">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold uppercase text-balance text-center md:text-left leading-tight">
          Consultoria completa para <br className="hidden sm:block" /> tirar seu visto
        </h2>
    
        <p className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold uppercase text-center md:text-right text-balance leading-tight">
          Você está em boas mãos!
        </p>
      </div>
    </section>
  
  );
};

export default TrustSection;
