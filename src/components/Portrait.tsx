import Image from "next/image";

interface PortraitProps {
  readonly className?: string;
  /** Set on the above-the-fold instance (hero) for faster LCP. */
  readonly priority?: boolean;
}

export function Portrait({ className, priority = false }: PortraitProps) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-mist">
        <Image
          src="/images/solene-portrait.jpg"
          alt="Solène Lanza, professeure de français à Londres"
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 460px"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -right-3 -bottom-3 -z-10 h-full w-full rounded-lg border-2 border-coral"
      />
    </div>
  );
}
