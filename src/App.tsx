import Hero from "./components/sections/Hero";
import Matchups from "./components/sections/Matchups";
import WinRate from "./components/sections/WinRate";
import About from "./components/sections/About";
import HowItWasMade from "./components/sections/HowItWasMade";

const Page = () => {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Hero />
      <Matchups />
      <WinRate />
      <About />
      <HowItWasMade />
    </div>
  );
};

export default Page;
