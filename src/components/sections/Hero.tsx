import React from 'react';
import PixelBlast from "../bits/PixelBlast";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-white p-4 overflow-hidden">
      <div className="absolute inset-0 z-0 h-full w-full">
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#C41C1C"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full pointer-events-none">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 select-none">
          Domine o Meta do High-Elo Brasileiro.
        </h1>
        <p className="text-lg md:text-xl text-center mb-8 select-none max-w-3xl">
          Análise de Win Rates e Matchups de Mestre, Grão-Mestre e Desafiante do BR.
        </p>
        {/* Componente Interativo "Matchup Finder" - Será desenvolvido depois */}
        <div className="w-full max-w-md h-32 bg-gray-800 bg-opacity-50 rounded-lg flex items-center justify-center text-gray-400 text-xl pointer-events-auto">
          Matchup Finder (Em breve)
        </div>
      </div>
    </section>
  );
};

export default Hero;
