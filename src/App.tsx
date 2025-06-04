import Hero from "./componentes/Hero/Hero";
import TrustSection from "./componentes/TrustSection/TrustSection";
import HowItWorks from "./componentes/HowItWorks/HowItWorks";
import PlaceSection from "./componentes/PlaceSection/PlaceSection";
import PacotesSection from "./componentes/PacoteSection/PacoteSection";
import Footer from "./componentes/Footer/Footer";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,    
    });
  }, []);

  return (
    <div>
      <Hero/>
      <TrustSection/>
      <HowItWorks/>
      <PlaceSection/>
      <PacotesSection/>
      <Footer/>
    </div>
  );
}

export default App;