export default function Footer() {
  return (
    <footer className="bg-forest-dark px-4 py-10 text-center text-sm text-sand/80">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logo/logo-horizontal-compact.svg"
        alt="Nature Design Safari Guide's"
        className="mx-auto mb-4 h-10 w-auto"
      />
      <p>© {new Date().getFullYear()} Nature Design Safari · Tanzania</p>
    </footer>
  );
}
