"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/destinations", label: "Destinations" },
  { href: "/tours", label: "Tours" },
  { href: "/trip-planner", label: "Trip Planner" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const menu = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();
  const close = () => {
    if (menu.current) menu.current.open = false;
  };

  // The menu is a native <details> element, so it opens even before JavaScript
  // has loaded. This only closes it again after navigating to another page.
  useEffect(close, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-forest-dark/95 text-sand backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" onClick={close} aria-label="Nature Design Safari Guide's - home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo/logo-horizontal-compact.svg"
            alt="Nature Design Safari Guide's"
            className="h-9 w-auto sm:h-11"
          />
        </Link>

        <nav className="hidden gap-6 text-sm md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-savanna">
              {l.label}
            </Link>
          ))}
        </nav>

        <details ref={menu} className="group md:hidden">
          <summary
            className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-md [&::-webkit-details-marker]:hidden"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path className="group-open:hidden" d="M4 7h16M4 12h16M4 17h16" />
              <path className="hidden group-open:block" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </summary>
          <nav className="absolute inset-x-0 top-full border-t border-sand/10 bg-forest-dark">
            <ul className="mx-auto max-w-6xl px-4 py-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={close}
                    className="block border-b border-sand/10 py-3.5 text-base last:border-0 active:text-savanna"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>

    </header>
  );
}
