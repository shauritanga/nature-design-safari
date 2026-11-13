import Link from "next/link";
import PhotoCard from "@/components/PhotoCard";
import Hero from "@/components/Hero";
import { destinations } from "@/data/destinations";

const experiences = [
  { src: "/images/experiences/game-drive-guide-selfie.jpeg", title: "Game drives", text: "Open-roof 4x4 safaris with expert local guides." },
  { src: "/images/experiences/guided-walking-tour-group.jpeg", title: "Guided walks & culture", text: "Meet communities and explore on foot." },
  { src: "/images/experiences/banana-plantation-walk.jpeg", title: "Farm & village visits", text: "Walk through plantations and see daily life." },
  { src: "/images/experiences/termite-mound-stop.jpeg", title: "Learn the bush", text: "Stop for the small things: termite mounds, tracks and birds." },
];

const wildlife = [
  { src: "/images/wildlife/lionesses-by-safari-vehicle.jpeg", title: "Lions", text: "Close encounters on the plains." },
  { src: "/images/wildlife/elephant-from-vehicle.jpeg", title: "Elephants", text: "Giants of Tarangire and beyond." },
  { src: "/images/wildlife/weaver-bird-on-vehicle.jpeg", title: "Birdlife", text: "Over 1,000 species across Tanzania." },
];

const stays = [
  { src: "/images/accommodation/tented-camp-deck.jpeg", title: "Tented camps", text: "Sleep in the bush with all the comfort." },
  { src: "/images/accommodation/lodge-restaurant.jpeg", title: "Lodges", text: "Lakeside dining and warm hospitality." },
];

const moments = [
  "/images/guests/couple-with-guide.jpeg",
  "/images/guests/family-with-guide.jpeg",
  "/images/guests/airport-welcome-selfie.jpeg",
  "/images/guests/guest-thumbs-up.jpeg",
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="mb-2 font-display text-2xl font-bold sm:text-3xl">Top Destinations</h2>
        <p className="mb-8 text-earth/70">Where to go for the best of Tanzania.</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <PhotoCard src="/images/destinations/baobab-hollow.jpeg" title="Tarangire & the baobabs" text="Ancient trees and elephant herds." className="aspect-[4/3] sm:aspect-[4/5]" />
          <PhotoCard src="/images/destinations/lake-viewpoint.jpeg" title="Lakes of the Rift Valley" text="Quiet shores and walking trails." className="aspect-[4/3] sm:aspect-[4/5]" />
          <div className="flex flex-col gap-3 rounded-xl bg-white p-6 shadow">
            <h3 className="font-display text-xl font-semibold">More places to explore</h3>
            {destinations.map((d) => (
              <Link key={d.slug} href={`/destinations#${d.slug}`} className="border-b border-earth/10 pb-2 hover:text-savanna-dark">
                <span className="font-semibold">{d.name}</span>
                <span className="block text-sm text-earth/70">{d.summary}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-12 text-sand md:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Witness the Great Migration</h2>
            <p className="mt-4 text-sand/85">
              Thousands of wildebeest cross the rivers every year. We time your trip and position your guide
              so you are in the right place when it happens.
            </p>
            <Link href="/tours" className="mt-6 inline-block rounded-full bg-savanna px-6 py-3 font-semibold text-forest-dark hover:bg-savanna-light">
              See migration tours
            </Link>
          </div>
          <video
            className="aspect-video w-full rounded-xl object-cover shadow-xl"
            src="/videos/migration/river-crossing-wide.mp4"
            controls
            muted
            playsInline
            preload="metadata"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="mb-2 font-display text-2xl font-bold sm:text-3xl">Wildlife You&rsquo;ll Meet</h2>
        <p className="mb-8 text-earth/70">Real sightings from our recent safaris.</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {wildlife.map((w) => <PhotoCard key={w.src} {...w} />)}
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <video className="aspect-video w-full rounded-xl object-cover" src="/videos/wildlife/lions-hunting.mp4" controls muted playsInline preload="metadata" />
          <video className="aspect-video w-full rounded-xl object-cover" src="/videos/wildlife/elephant-close-encounter.mp4" controls muted playsInline preload="metadata" />
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 font-display text-2xl font-bold sm:text-3xl">Experiences We Organise</h2>
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {experiences.map((e) => <PhotoCard key={e.src} {...e} className="aspect-[3/4]" />)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="mb-8 font-display text-2xl font-bold sm:text-3xl">Where You&rsquo;ll Stay</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {stays.map((s) => <PhotoCard key={s.src} {...s} />)}
        </div>
      </section>

      <section className="bg-forest-dark py-12 text-sand md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Meet Your Guides</h2>
          <p className="mt-2 mb-8 text-sand/80">Local experts, a fleet of well-kept 4x4s, and a team that looks after you from arrival to departure.</p>
          <PhotoCard src="/images/team/guides-with-fleet.jpeg" title="The Nature Design Safari team" className="aspect-[4/3] sm:aspect-[16/9]" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="mb-8 font-display text-2xl font-bold sm:text-3xl">Happy Travellers</h2>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {moments.map((m) => <PhotoCard key={m} src={m} title="" className="aspect-[3/4]" />)}
        </div>
        <div className="mt-12 text-center">
          <Link href="/trip-planner" className="block rounded-full bg-forest px-10 py-4 text-center sm:inline-block font-semibold text-sand hover:bg-forest-light">
            Start planning your Tanzania trip
          </Link>
        </div>
      </section>
    </>
  );
}
