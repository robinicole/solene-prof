import Link from "next/link";

export interface BreadcrumbItem {
  readonly label: string;
  readonly href: string;
}

interface BreadcrumbsProps {
  readonly items: readonly BreadcrumbItem[];
  readonly label: string;
}

/** Rendered inside the royal-blue PageHero band. */
export function Breadcrumbs({ items, label }: BreadcrumbsProps) {
  return (
    <nav aria-label={label} className="text-sm text-blue-pale">
      <ol className="flex flex-wrap items-center justify-center gap-2">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {isLast ? (
                <span aria-current="page" className="text-white">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-coral"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
