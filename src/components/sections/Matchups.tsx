import PsychedelicSpiral from "../ui/shadcn-io/psychedelic-spiral";

const Matchups = () => {
  return (
    <section
      id="matchups"
      className="relative w-full min-h-screen overflow-hidden"
    >
      <PsychedelicSpiral
        className="absolute inset-0"
        color1="#4A00E0"
        color2="#8E2DE2"
        spinSpeed={8}
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 pointer-events-none">
        <h2 className="text-5xl font-bold text-white drop-shadow-lg">
          Matchups
        </h2>
        <p className="text-xl text-white/80 mt-4">Em breve</p>
      </div>
    </section>
  );
};

export default Matchups;
