import Container from "../component/Container";
import ServiceCard from "../component/Cards/ServiceCard";

export default function Services() {
  return (
    <Container>
      <section className="py-20">
        <h1 className="text-4xl font-bold mb-10 text-center">Our Services</h1>

        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard title="Digital Marketing" desc="Grow your brand online" />
          <ServiceCard title="Eco-friendly Branding" desc="Go green responsibly" />
          <ServiceCard title="Web Development" desc="Modern, fast websites" />
        </div>
      </section>
    </Container>
  );
}
