
import ServiceCard from "../component/Cards/ServiceCard";
import Features from "../component/Screen-Comp/Services/Layout1";
import About from "../component/Screen-Comp/Services/Layout3";
import Stats from "../component/Screen-Comp/Services/Layout2";
import ScrollServices from "../component/Cards/ScrollOverlap";

export default function Services() {
  return (
    <>
    <ScrollServices />
      <Features />
      {/* <Stats /> */}
      <About />
      {/* <ScrollServices /> */}
    </>
  );
}
