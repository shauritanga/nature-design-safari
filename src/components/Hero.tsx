import Image from "next/image";
import Link from "next/link";
import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden bg-forest-dark py-16 text-center text-sand sm:min-h-[85vh]">
      <Image
        src="/images/wildlife/elephant-from-vehicle.jpeg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <HeroVideo src="/videos/migration/river-crossing-herd.mp4" />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/70 via-forest-dark/40 to-forest-dark/80" />
      <div className="relative z-10 px-4">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-savanna-light sm:text-sm sm:tracking-[0.3em]">Nature Design Safari · Tanzania</p>
        <h1 className="font-display text-3xl font-bold leading-tight sm:text-5xl md:text-6xl">Discover Tanzania, Beautifully Planned</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-sand/90 sm:text-base">
          Find the best places to visit and organise your whole trip with local guides who know the land.
        </p>
        <div className="mx-auto mt-8 flex max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
          <Link href="/trip-planner" className="rounded-full bg-savanna px-8 py-3 text-center font-semibold text-forest-dark hover:bg-savanna-light">
            Plan my trip
          </Link>
          <Link href="/destinations" className="rounded-full border border-sand/70 px-8 py-3 text-center font-semibold hover:bg-sand/10">
            Explore destinations
          </Link>
        </div>
      </div>
    </section>
  );
}
