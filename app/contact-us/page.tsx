"use client";

import Container from "../component/Container";
import Input from "../component/Input";
import Button from "../component/Buttons/CTA";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");

  return (
    <Container>
      <section className="py-20 max-w-xl">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

        <Input label="Name" value={name} onChange={(e: any) => setName(e.target.value)} />
        <Input label="Email" type="email" />
        <Input label="Message" />

        <Button label="Send Message" />
      </section>
    </Container>
  );
}
