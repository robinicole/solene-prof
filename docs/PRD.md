# PRD — Site « Cours de français » de Solène Lanza

> Document de référence. Issu de deux sessions de cadrage (`/grill-me`) du 2026-05-21.
> Projet : `website_solene_prof`.

## 1. Contexte

Solène Lanza est professeure de français à Londres (plus de 10 ans d'expérience)
et guide touristique. Elle possède déjà un site pour son activité de guide
(`/Users/robin/github/pro/website_solene_tours`). Ce projet crée un **site
distinct** pour son activité d'enseignement, en reprenant l'architecture
technique du site guide.

## 2. Objectif

Présenter l'offre de cours de français de Solène et générer des demandes de
contact, auprès d'une clientèle largement anglophone (familles britanniques à
Londres) comme francophone.

## 3. Public cible

- Parents (souvent anglophones) d'enfants scolarisés dans le système britannique.
- Élèves préparant un examen : GCSE, Brevet, Baccalauréat.
- Familles préparant l'entrée au Lycée Français de Londres.
- Adultes apprenant le français (FLE).
- Entreprises / professionnels (français des affaires).

## 4. Périmètre fonctionnel

### 4.1 Arborescence
`Accueil · Cours · Tarifs · À propos · Témoignages · Contact` — plus le
sélecteur FR/EN.

### 4.2 Les 5 cours
Chaque cours = une carte sur `/cours` + une page de détail dédiée :
1. Entrée au Lycée Français de Londres
2. GCSE Français
3. Brevet & Bac français
4. FLE — Français Langue Étrangère
5. Français Business

Page détail : description, « Au programme », « Pour qui ? », « Format &
déroulement », CTA vers le contact (cours pré-sélectionné).

### 4.3 Tarifs (2026-2027)
Cours en personne 50 £/h · en ligne 45 £/h · 45 min 40 £ · 30 min 35 £ ·
Business à partir de 80 £/h (sur devis). Politique d'annulation et de
rattrapage affichée. Source de vérité : `src/data/pricing.ts`.

### 4.4 Formulaire de contact
Champs : Email (seul requis) + Nom + Cours souhaité + Niveau/classe + Format
(présentiel / en ligne) + Message. Pipeline : Zod → honeypot → Turnstile →
Resend. Le cours peut être pré-rempli via `?cours=<id>`.

### 4.5 Bilingue FR/EN
Site entièrement bilingue dès le départ. Routing par locale (`/fr`, `/en`),
middleware de redirection, sélecteur de langue. FR par défaut.

### 4.6 Témoignages
12 témoignages bilingues (`src/data/testimonials.ts`), chacun avec citation +
auteur en FR et en EN, attribués par descripteur neutre (cf. §7).

- **Accueil** : carrousel (`TestimonialsSection`) placé entre Cours et
  À propos. Défilement automatique (7 s, en pause au survol/focus), transition
  fondu-glissé (framer-motion), carte à **hauteur fixe** (26-28 rem) ; les avis
  longs (> 320 car.) sont repliés derrière « Lire la suite » et défilent à
  l'intérieur de la carte. Bouton « Voir tous les témoignages » sous le
  carrousel.
- **Page dédiée** `/temoignages` : les 12 avis en grille (texte intégral),
  référencée dans la nav principale, le pied de page et le sitemap.

## 5. Design

**Direction finale (2e cadrage)** : langage visuel **inspiré du site de
l'Institut Français UK** (institut-francais.org.uk), adapté à l'identité propre
de Solène — **sans copie du logo, sans mention d'affiliation**, et avec une
police libre de droits.

| Élément | Choix |
|---|---|
| Couleurs | Bleu roi `#203C91`, bleu moyen `#3558A2`, corail `#FF9575`, gris bleuté `#EBEEF6`, blanc, texte `#383838` |
| Police | Hanken Grotesk (libre — remplace Marianne, restreinte) |
| Décor | Filets corail sous les titres + bandeaux pleine largeur colorés |
| Logo | Wordmark « Solène Lanza » dans un cadre fin bleu |
| Héros | Typographique sur fond bleu roi + portrait de Solène |
| Animations | Aucune animation au défilement (contenu visible statiquement) |

> Direction abandonnée : « académique chaleureux » sauge & terracotta /
> Fraunces — remplacée par la direction Institut Français ci-dessus.

## 6. Architecture technique

- **Stack** : Next.js 15 (App Router), React 19, Tailwind CSS 4, TypeScript.
- **Déploiement** : Vercel (projet séparé), nouveau domaine dédié (à définir).
- **Email** : Resend (réutilise le compte du site guide).
- **Anti-spam** : Cloudflare Turnstile + champ honeypot.
- **Contenu** : en dur dans `src/data/` (cours, tarifs, témoignages). Pas de CMS.
- **i18n** : `src/middleware.ts` + segment `[locale]` + dictionnaires
  `src/i18n/fr.ts` / `en.ts`.

```
src/
├── app/[locale]/      Pages (accueil, cours, cours/[slug], tarifs, a-propos, temoignages, contact)
├── app/api/contact/   Route POST (Zod → honeypot → Turnstile → Resend)
├── app/sitemap.ts     Sitemap (pages statiques × locales + cours)
├── components/        Composants UI (dont TestimonialsSection : carrousel client)
├── data/              courses.ts · pricing.ts · testimonials.ts
├── i18n/              config · fr · en · index
├── lib/               validation (Zod) · structured-data (JSON-LD)
└── middleware.ts      Redirection de locale
```

> Le carrousel de témoignages utilise **framer-motion** (seule dépendance
> d'animation ; le reste du site reste sans animation au défilement, cf. §5).

## 7. Contenu

Tous les textes (descriptions de cours, page À propos, accroches, version
anglaise) ont été **rédigés en placeholder par l'IA**, balisés `[À RELIRE]`
dans les fichiers source. Solène doit relire et corriger.

Témoignages : 12 fournis par Solène (verbatim, légèrement édités et traduits
dans les deux langues), attribués avec un descripteur neutre
(« Maman de… », « Adulte… », « Famille française… ») — à remplacer par prénom +
initiale réels après accord de chaque parent.

## 8. À fournir par Solène

- [ ] Photo(s) de Solène (`public/images/solene-portrait.jpg`)
- [ ] Nom de domaine choisi
- [ ] Adresse email de réception des demandes
- [ ] Clé API Resend (variable d'environnement)
- [ ] Relecture de tout le contenu `[À RELIRE]`
- [ ] Attribution réelle des témoignages (avec accord des parents)
- [ ] Confirmation : tarifs 30 min / 45 min en présentiel ou en ligne ?

## 9. Hors périmètre (évolutions possibles)

- CMS / interface d'édition du contenu.
- Réservation et paiement en ligne.
- Blog / ressources pédagogiques.
- Email de confirmation automatique à l'élève.

## 10. Journal des décisions

Cadrage 1 (structure & contenu) : cartes + pages détail · 5 cours · bilingue
FR/EN complet · nav 5 entrées · formulaire Email+Nom+Cours+Niveau+Format+Message
· portrait + design typographique · contenu placeholder relu · nouveau domaine
dédié · même compte Resend · témoignages en descripteur neutre.

Cadrage 2 (design) : langage visuel inspiré de l'Institut Français · police
Hanken Grotesk · palette bleu roi + corail · décor essentiel (filets +
bandeaux) · wordmark encadré · héros typographique bleu.

Session témoignages & navigation (2026-06-27, `/grill-with-docs`) : ajout de
10 témoignages (12 au total, bilingues, descripteur neutre) · section accueil
transformée en carrousel (défilement auto + transition + hauteur fixe + repli
des avis longs) · audit de l'arborescence : seule lacune = découvrabilité des
témoignages · création d'une page dédiée `/temoignages` (grille) reliée à la
nav, au pied de page, au sitemap et à un bouton sous le carrousel · structure
restante jugée saine, laissée inchangée · tarifs mis à jour (50/45/40/35 £,
Business dès 80 £) pour refléter `src/data/pricing.ts`.
