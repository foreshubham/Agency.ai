import Hero from "./component/UI/Hero";

import HowCanWeHelp from "./component/UI/HowWeCanHelp";
import LatestWork from "./component/UI/LatestWork";
import MeetTheTeam from "./component/UI/Team";
import FAQ from "./component/UI/FAQ";
import EmpoweredSection from "./component/UI/BusinessesDeveloped";

export default function Home() {
  return (
    <div>
      <Hero />
      <HowCanWeHelp />
      <EmpoweredSection />
      <LatestWork />
      {/* <MeetTheTeam /> */}
      <FAQ />

      
    </div>
  );
}
