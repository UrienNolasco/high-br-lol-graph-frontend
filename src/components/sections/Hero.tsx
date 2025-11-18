import PsychedelicSpiral from "../ui/shadcn-io/psychedelic-spiral";
import { StaggeredMenu } from "../StaggeredMenu";

const Hero = () => {
  const menuItems = [
    { label: "O que é?", ariaLabel: "O que é?", link: "/" },
    { label: "WinRates", ariaLabel: "WinRates", link: "/winrates" },
    { label: "Matchups", ariaLabel: "Matchups", link: "/matchups" },
    { label: "Como eu fiz?", ariaLabel: "Como eu fiz?", link: "/como-eu-fiz" },
  ];

  const socialItems = [
    { label: "Twitter", link: "https://twitter.com" },
    { label: "GitHub", link: "https://github.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
  ];

  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden">
      <PsychedelicSpiral className="absolute inset-0" />
      <StaggeredMenu
        isFixed={true}
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#000"
        changeMenuColorOnOpen={true}
        colors={["#B19EEF", "#5227FF"]}
        accentColor="#ff6b6b"
        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
      />
      <div className="relative z-10 flex flex-col justify-start min-h-screen px-8 pt-32 md:pt-48">
        <h1 className="font-bold text-7xl text-white leading-tight mb-3 drop-shadow-lg">
          API OPENSOURCE DO HIGH ELO BRASILEIRO <br /> DE LEAGUE OF LEGENDS
        </h1>
        <h2 className="text-4xl text-white/90 font-medium tracking-wide drop-shadow-md">
          DESENVOLVIDO POR URIEN NOLASCO
        </h2>
      </div>
    </section>
  );
};

export default Hero;
