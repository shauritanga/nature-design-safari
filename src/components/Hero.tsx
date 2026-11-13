import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-forest-dark text-center text-sand">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/migration/river-crossing-herd.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/70 via-forest-dark/40 to-forest-dark/80" />
      <div className="relative z-10 px-4">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-savanna-light">Nature Design Safari · Tanzania</p>
        <h1 className="font-display text-4xl font-bold md:text-6xl">Discover Tanzania, Beautifully Planned</h1>
        <p className="mx-auto mt-4 max-w-xl text-sand/90">
          Find the best places to visit and organise your whole trip with local guides who know the land.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/trip-planner" className="rounded-full bg-savanna px-8 py-3 font-semibold text-forest-dark hover:bg-savanna-light">
            Plan my trip
          </Link>
          <Link href="/destinations" className="rounded-full border border-sand/70 px-8 py-3 font-semibold hover:bg-sand/10">
            Explore destinations
          </Link>
        </div>
      </div>
    </section>
  );
}
