import Hero from "./components/sections/Hero";
import Matchups from "./components/sections/Matchups";
import WinRate from "./components/sections/WinRate";
import About from "./components/sections/About";
import HowItWasMade from "././components/sections/HowItWasMade";

const Page = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Conteúdo da tela (não bloqueia cliques fora dos elementos clicáveis) */}
      <div className="relative z-10 w-full text-white pointer-events-none">
        <Hero />
        <Matchups />
        <WinRate />
        <About />
        <HowItWasMade />
      </div>
    </div>
  );
};

export default Page;
