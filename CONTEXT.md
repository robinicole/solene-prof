# Pret-à-Parler Institute — French lessons site

Bilingual (fr/en) marketing site for Solène Lanza's private French tutoring in London,
deployed at https://pret-a-parler.institute. This glossary fixes the vocabulary used in
SEO and routing decisions. See [ADR 0001](./docs/adr/0001-locale-routing-and-hreflang.md).

## Language

**Site URL**:
The canonical production origin, `https://pret-a-parler.institute`, injected via the
`NEXT_PUBLIC_SITE_URL` env var at build time and used for every canonical, sitemap entry,
robots `sitemap:` pointer, and JSON-LD `url`. The fallback `http://localhost:3000` is a
dev-only default that must never reach a production build.
_Avoid_: base URL, host, domain (when you mean this specific origin).

**Default locale**:
`fr`. Middleware redirects all locale-less requests to `/fr`; `x-default` hreflang also
resolves here.
_Avoid_: primary language, fallback locale.

**x-default**:
The hreflang annotation telling search engines which URL to serve unknown-locale searchers.
Resolves to `/fr` site-wide.

**Foundations-ready**:
The launch bar for this project's SEO: crawlable + indexable, correct production canonicals,
hreflang incl. x-default, valid sitemap/robots, validating JSON-LD, and rendering OG/Twitter
cards. Explicitly excludes keyword targeting, content depth, and off-page/ranking work.
_Avoid_: SEO-ready (too vague — say foundations-ready).
