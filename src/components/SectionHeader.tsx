interface SectionHeaderProps {
  readonly eyebrow: string;
  readonly title: string;
  readonly description?: string;
  readonly variant?: "light" | "dark";
  readonly align?: "center" | "left";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  variant = "light",
  align = "center",
}: SectionHeaderProps) {
  const titleColor = variant === "dark" ? "text-white" : "text-blue";
  const descColor = variant === "dark" ? "text-mist" : "text-ink-light";
  const eyebrowColor = variant === "dark" ? "text-coral" : "text-blue-mid";
  const centered = align === "center";

  return (
    <div className={centered ? "text-center" : "text-left"}>
      <p
        className={`text-sm font-bold uppercase tracking-[0.14em] ${eyebrowColor}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-2 text-3xl font-extrabold md:text-4xl ${titleColor}`}
      >
        {title}
      </h2>
      <span
        aria-hidden="true"
        className={`mt-4 block h-[3px] w-14 bg-coral ${centered ? "mx-auto" : ""}`}
      />
      {description && (
        <p
          className={`mt-5 max-w-2xl leading-relaxed ${descColor} ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
