import Image from "next/image";

export default function PhotoCard({
  src, title, text, className = "aspect-[4/3]",
}: { src: string; title: string; text?: string; className?: string }) {
  return (
    <figure className={`group relative overflow-hidden rounded-xl bg-forest ${className}`}>
      <Image
        src={src}
        alt={title}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition duration-500 group-hover:scale-105"
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-sand sm:p-4">
        {title && <h3 className="font-display text-base font-semibold sm:text-lg">{title}</h3>}
        {text && <p className="text-xs text-sand/85 sm:text-sm">{text}</p>}
      </figcaption>
    </figure>
  );
}
