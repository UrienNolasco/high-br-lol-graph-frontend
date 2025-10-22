import React from 'react';
import PixelBlast from "../bits/PixelBlast";

const About = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center text-white p-4 overflow-hidden">
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
      <div className="relative z-10 flex items-center justify-center h-full w-full pointer-events-none">
        <h2 className="text-4xl font-bold">O que é? (Em breve)</h2>
        {/* Conteúdo da seção "O que é?" será desenvolvido depois */}
      </div>
    </section>
  );
};

export default About;
