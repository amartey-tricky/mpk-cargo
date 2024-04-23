import Image from "next/image";
import Hero from "@/components/hero"
import About from "@/components/about";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between m-4">
      <Hero />
      <About />
    </main>
  );
}
