import PsychedelicSpiral from "../ui/shadcn-io/psychedelic-spiral";

const WinRate = () => {
  return (
    <section
      id="winrate"
      className="relative w-full min-h-screen overflow-hidden"
    >
      <PsychedelicSpiral
        className="absolute inset-0"
        color1="#11998e"
        color2="#38ef7d"
        spinSpeed={6}
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 pointer-events-none">
        <h2 className="text-5xl font-bold text-white drop-shadow-lg">
          Win Rates
        </h2>
        <p className="text-xl text-white/80 mt-4">Em breve</p>
      </div>
    </section>
  );
};

export default WinRate;
