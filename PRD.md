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
`Accueil · Cours · Tarifs · À propos · Contact` — plus le sélecteur FR/EN.

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
Cours en personne 40 £/h · en ligne 35 £/h · 45 min 30 £ · 30 min 25 £ ·
Business à partir de 60 £/h (sur devis). Politique d'annulation et de
rattrapage affichée.

### 4.4 Formulaire de contact
Champs : Email (seul requis) + Nom + Cours souhaité + Niveau/classe + Format
(présentiel / en ligne) + Message. Pipeline : Zod → honeypot → Turnstile →
Resend. Le cours peut être pré-rempli via `?cours=<id>`.

### 4.5 Bilingue FR/EN
Site entièrement bilingue dès le départ. Routing par locale (`/fr`, `/en`),
middleware de redirection, sélecteur de langue. FR par défaut.

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
├── app/[locale]/      Pages (accueil, cours, cours/[slug], tarifs, a-propos, contact)
├── app/api/contact/   Route POST (Zod → honeypot → Turnstile → Resend)
├── components/        Composants UI
├── data/              courses.ts · pricing.ts · testimonials.ts
├── i18n/              config · fr · en · index
├── lib/               validation (Zod) · structured-data (JSON-LD)
└── middleware.ts      Redirection de locale
```

## 7. Contenu

Tous les textes (descriptions de cours, page À propos, accroches, version
anglaise) ont été **rédigés en placeholder par l'IA**, balisés `[À RELIRE]`
dans les fichiers source. Solène doit relire et corriger.

Témoignages : 2 fournis, attribués avec un descripteur neutre
(« Parent d'élève ») — à remplacer par prénom + initiale réels après accord.

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
