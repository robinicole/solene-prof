# Locale routing and hreflang strategy

The site is bilingual (fr/en) under `/[locale]` path segments. Middleware redirects every
locale-less request (including `/`) to the French version (`/fr`); English speakers are offered
a one-time dismissible banner rather than locale auto-detection. We expose `hreflang` alternates
of `fr`, `en`, and **`x-default` → `/fr`** on every page, matching the redirect default, so
search engines show the French URL to unknown-locale searchers instead of guessing.

## Considered Options

- **`x-default` → `/fr`** (chosen): matches the actual middleware redirect, no extra hop.
- `x-default` → `/` : semantically "language selector", but `/` immediately 307s to `/fr`, adding
  a redirect hop crawlers must follow.
- No `x-default`: lets Google infer from fr/en hreflang; works but leaves ambiguous-locale
  attribution to Google's guess.

## Consequences

Changing the default locale or the `x-default` target after the site is indexed forces Google to
re-evaluate hreflang clusters, so this is treated as a deliberate, hard-to-reverse choice rather
than an incidental default.
