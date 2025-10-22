import PixelBlast from "./components/bits/PixelBlast";

const Page = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
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

      {/* Conteúdo da tela (não bloqueia cliques fora dos elementos clicáveis) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white pointer-events-none">
        <h1 className="text-4xl font-bold mb-4 select-none">Bem-vindo!</h1>
        <p className="text-lg mb-6 select-none">
          LOL Graph - Sua jornada para o topo começa aqui.
        </p>
        <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-xl transition pointer-events-auto">
          Começar Agora
        </button>
      </div>
    </div>
  );
};

export default Page;
