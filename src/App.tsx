import { useState, useEffect } from "react";
import Hero from "./components/sections/Hero";
import Matchups from "./components/sections/Matchups";
import WinRate from "./components/sections/WinRate";
import About from "./components/sections/About";
import HowItWasMade from "././components/sections/HowItWasMade";

const Page = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="relative w-full min-h-screen">
      {/* Botão de teste para alterar o tema */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 z-20 px-4 py-2 text-white bg-gray-800 rounded pointer-events-auto"
      >
        Toggle Theme
      </button>

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
