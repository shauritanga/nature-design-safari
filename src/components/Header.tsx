import Link from "next/link";

const links = [
  { href: "/destinations", label: "Destinations" },
  { href: "/tours", label: "Tours" },
  { href: "/trip-planner", label: "Trip Planner" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-forest-dark/95 text-sand backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-display text-xl font-bold">
          Nature Design <span className="text-savanna">Safari</span>
        </Link>
        <nav className="hidden gap-6 text-sm md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-savanna">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
