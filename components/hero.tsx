import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center text-slate-700 dark:text-slate-400">
      <h1 className="text-6xl font-bold">MPK Cargo Logistics</h1>
      <p className="text-lg p-6 text-slate-500 dark:text-slate-600">Connecting China and Ghana with efficient cargo import services</p>
      <Link href="/tracker">
        <Button variant="ghost" className="rounded-lg text-slate-300 bg-blue-400 hover:bg-blue-600 font-bold text-xl">Track Cargo</Button>
      </Link>
    </section>
  );
}
