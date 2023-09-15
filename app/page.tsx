import Hero from "./components/Hero";

export default async function Home() {
  return (
    <section className="w-full mx-auto p-4 md:p-8 md:px-12  overflow-hidden">
      <Hero />
    </section>
  );
}
