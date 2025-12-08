
import ServiceCard from "../component/Cards/ServiceCard";
import Features from "../component/Screen-Comp/Services/Layout1";
import About from "../component/Screen-Comp/Services/Layout3";
import Stats from "../component/Screen-Comp/Services/Layout2";
import ScrollServices from "../component/Cards/ScrollOverlap";
import PricingSection from "../component/Screen-Comp/Services/Pricing";

export default function Services() {
  return (
    <>
    <ScrollServices />
      {/* <Features /> */}
      {/* <Stats /> */}
      <PricingSection />
      <About />
      {/* <ScrollServices /> */}
    </>
  );
}
