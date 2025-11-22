import Container from "../component/Container";

export default function AboutPage() {
  return (
    <Container>
      <section className="py-20">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-gray-600 dark:text-gray-300">
          We are a full-service digital agency focused on sustainability...
        </p>
      </section>
    </Container>
  );
}
