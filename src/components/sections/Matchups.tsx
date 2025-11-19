import MatchupsComponent from "../matchups-component";
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
      <div className="relative z-10 flex justify-center items-center min-h-screen px-8">
        <MatchupsComponent />
      </div>
    </section>
  );
};

export default Matchups;
