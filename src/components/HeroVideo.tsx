"use client";

import { useEffect, useState } from "react";

// Desktop only, and only on a fast connection. Phones keep the still photo,
// which saves mobile data and keeps the page quick and interactive.
export default function HeroVideo({ src }: { src: string }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const slow = conn?.saveData || (conn?.effectiveType && conn.effectiveType !== "4g");
    if (slow || !window.matchMedia("(min-width: 768px)").matches) return;

    const start = () => setReady(true);
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, []);

  if (!ready) return null;

  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    />
  );
}
