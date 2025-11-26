import Image from "next/image";

export default function WebDevelopment() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-28">
      {/* Hero */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Web Development
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            I build high-performance web applications focused on speed,
            scalability, and clean architecture.
          </p>

          <ul className="mt-8 space-y-3 text-gray-700 dark:text-gray-300">
            <li>✅ Next.js & React</li>
            <li>✅ SEO & Performance Optimization</li>
            <li>✅ Secure, scalable architectures</li>
            <li>✅ Clean & maintainable code</li>
          </ul>
        </div>

        <div className="relative h-[360px] rounded-3xl overflow-hidden">
          <Image
            src="/services/web.png"
            alt="Web development"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
