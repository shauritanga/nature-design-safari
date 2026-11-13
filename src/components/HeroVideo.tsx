"use client";

import { useEffect, useState } from "react";

// The video is only attached after the page has hydrated, so its large
// download never competes with the JavaScript the page needs to become interactive.
export default function HeroVideo({ src }: { src: string }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 300);
    return () => window.clearTimeout(id);
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
