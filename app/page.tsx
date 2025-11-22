import Hero from "./component/UI/Hero";
import Container from "./component/Container";
import HowCanWeHelp from "./component/UI/HowWeCanHelp";
import LatestWork from "./component/UI/LatestWork";
import MeetTheTeam from "./component/UI/Team";
import FAQ from "./component/UI/FAQ";

export default function Home() {
  return (
    <div>
      <Hero />
      <HowCanWeHelp />
      <LatestWork />
      <MeetTheTeam />
      <FAQ />

      
    </div>
  );
}
