import React from "react";
import PixelBlast from "../bits/PixelBlast";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import DecryptedText from "../bits/DecryptedText";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-white p-4 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 h-full w-full pointer-events-auto">
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
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
        <DecryptedText
          text="Customize me"
          speed={100}
          maxIterations={20}
          characters="ABCD1234!?"
          className="revealed"
          parentClassName="all-letters pointer-events-auto"
          encryptedClassName="encrypted"
        />
        <p className=" text-center mb-8 select-none max-w-3xl font-thin text-2xl">
          Análise de Win Rates e Matchups de Mestre, Grão-Mestre e Desafiante do
          BR.
        </p>
        {/* Componente Interativo "Matchup Finder" - Será desenvolvido depois */}
        <Card className="pointer-events-auto">
          <CardTitle>
            Encontre os melhores matchups para seu campeão favorito!
          </CardTitle>
          <CardContent>AAAAAAAAAAAAAAAAAAAAAAAAA</CardContent>
          <Button className="mt-4 pointer-events-auto">Buscar Matchups</Button>
        </Card>
      </div>
    </section>
  );
};

export default Hero;
