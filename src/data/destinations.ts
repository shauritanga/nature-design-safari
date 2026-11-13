export type Destination = {
  slug: string;
  name: string;
  region: string;
  summary: string;
  bestTime: string;
  image: string; // path under /public
};

export const destinations: Destination[] = [
  { slug: "serengeti", name: "Serengeti National Park", region: "Northern Circuit", summary: "Endless plains and the Great Migration.", bestTime: "Jun–Oct (migration), Jan–Feb (calving)", image: "/images/destinations/serengeti.jpg" },
  { slug: "ngorongoro", name: "Ngorongoro Crater", region: "Northern Circuit", summary: "A volcanic caldera teeming with wildlife.", bestTime: "Jun–Sep", image: "/images/destinations/ngorongoro.jpg" },
  { slug: "tarangire", name: "Tarangire National Park", region: "Northern Circuit", summary: "Elephant herds and ancient baobabs.", bestTime: "Jun–Oct", image: "/images/destinations/tarangire.jpg" },
  { slug: "kilimanjaro", name: "Mount Kilimanjaro", region: "Northern Tanzania", summary: "Africa's highest peak.", bestTime: "Jan–Mar, Jun–Oct", image: "/images/destinations/kilimanjaro.jpg" },
  { slug: "zanzibar", name: "Zanzibar", region: "Indian Ocean", summary: "Spice island beaches and Stone Town heritage.", bestTime: "Jun–Oct, Dec–Feb", image: "/images/destinations/zanzibar.jpg" },
];
