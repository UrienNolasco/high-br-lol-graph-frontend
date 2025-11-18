import PsychedelicSpiral from "../ui/shadcn-io/psychedelic-spiral";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen overflow-hidden"
    >
      <PsychedelicSpiral
        className="absolute inset-0"
        color1="#F2994A"
        color2="#F2C94C"
        spinSpeed={5}
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 pointer-events-none">
        <h2 className="text-5xl font-bold text-white drop-shadow-lg">
          O que é?
        </h2>
        <p className="text-xl text-white/80 mt-4">Em breve</p>
      </div>
    </section>
  );
};

export default About;
