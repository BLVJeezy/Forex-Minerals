# Forex Minerals — site corporate

Site institutionnel de **Forex Minerals**, entreprise de minéraux industriels
et de logistique lourde établie à Likasi, dans la province du Haut-Katanga
(République Démocratique du Congo).

Français en langue principale, anglais en langue secondaire.

---

## Démarrage

```bash
npm install
npm run dev          # http://localhost:3000  → redirige vers /fr
npm run build && npm start
```

Pour faire apparaître visuellement toutes les valeurs en attente de
confirmation (encadrées d'un liseré doré) :

```bash
NEXT_PUBLIC_SHOW_PLACEHOLDERS=1 npm run dev
```

## Variables d'environnement

| Variable                        | Rôle                                                                    |
| ------------------------------- | ----------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`          | Domaine de production (URL canoniques, hreflang, Open Graph, sitemap).   |
| `RFQ_RECIPIENT_EMAIL`           | Destinataire des demandes de devis. Tant qu'elle est absente, le formulaire répond « non configuré ». |
| `NEXT_PUBLIC_SHOW_PLACEHOLDERS` | `1` pour surligner les contenus à confirmer.                             |

Un fichier `.env.example` liste ces variables.

---

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — jetons de design définis dans `src/app/globals.css`
- `next/font` (Archivo pour les titres, Inter pour le texte), auto-hébergées
- `next/image` — imports statiques, dimensions et flous de chargement générés
  automatiquement, formats AVIF/WebP servis selon le navigateur

## Structure

```
src/
  app/
    [locale]/layout.tsx        en-tête, pied de page, métadonnées, <html lang>
    [locale]/page.tsx          page d'accueil
    [locale]/[...slug]/page.tsx  pages internes, résolues par la table de routes
    api/rfq/route.ts           réception des demandes de devis
    sitemap.ts / robots.ts
  components/
    layout/                    Header, Footer, Logo
    home/                      sections de la page d'accueil
    pages/                     pages internes
    shared/                    blocs réutilisés (bandeaux, process, CTA…)
    ui/                        primitives (Container, Button, Reveal, chiffres)
    forms/RfqForm.tsx          interface de demande de devis B2B
  content/
    fr.ts / en.ts              tout le contenu éditorial
    company.ts                 données d'entreprise + valeurs à confirmer
    media.ts                   registre des photographies et du logo
  lib/
    i18n.ts                    locales + table des URL localisées
    metadata.ts / schema.ts    SEO et données structurées
  assets/                      photographies et déclinaisons du logo
scripts/prepare-assets.mjs     préparation des images et des variantes du logo
docs/CONTENU-A-CONFIRMER.md    liste des informations attendues du client
```

### Modifier le contenu

Tout le texte vit dans `src/content/fr.ts` et `src/content/en.ts`, qui
partagent exactement la même structure (contrôlée à la compilation par le type
`Dictionary`). Les données d'entreprise — coordonnées, chiffres clés,
direction, écosystème — sont centralisées dans `src/content/company.ts`.

### Ajouter ou remplacer une photographie

1. Déposer le fichier source dans le dossier de travail.
2. Le déclarer dans `scripts/prepare-assets.mjs`, puis exécuter
   `node scripts/prepare-assets.mjs <dossier-source>`.
3. Le référencer dans `src/content/media.ts` avec son texte alternatif FR/EN
   et, si nécessaire, son point de focalisation (`focus`) pour les recadrages.

### URL et langues

Les URL sont localisées et définies en un seul endroit
(`routeSegments` dans `src/lib/i18n.ts`) :

| Page                  | Français                     | Anglais                     |
| --------------------- | ---------------------------- | --------------------------- |
| Accueil               | `/fr`                        | `/en`                       |
| À propos              | `/fr/a-propos`               | `/en/about`                 |
| Minéraux              | `/fr/mineraux`               | `/en/minerals`              |
| Transport & Logistique| `/fr/transport-logistique`   | `/en/transport-logistics`   |
| Flotte & Sécurité     | `/fr/flotte-securite`        | `/en/fleet-safety`          |
| Secteurs              | `/fr/secteurs`               | `/en/industries`            |
| Contact               | `/fr/contact`                | `/en/contact`               |

Le sélecteur FR | EN renvoie toujours vers la page équivalente. Les URL sans
préfixe de langue sont redirigées vers leur équivalent français.

---

## Identité visuelle

Les couleurs sont échantillonnées directement dans le logo officiel :
navy `#002050`, or `#A07828 → #D8B058`, gris métallique `#586070`.

`scripts/prepare-assets.mjs` produit, à partir du seul fichier logo fourni :

- le lockup complet sur fond clair et sa version inversée pour fonds sombres ;
- le symbole seul et le logotype seul, utilisés côte à côte dans l'en-tête pour
  que le nom reste lisible à hauteur de navigation ;
- les favicons et icônes d'application.

Les proportions et les couleurs du logo ne sont jamais modifiées.

---

## Contenu à confirmer

⚠️ Le site comporte des **valeurs en attente de confirmation** (chiffres clés,
coordonnées, direction, informations légales). Elles sont recensées dans
[`docs/CONTENU-A-CONFIRMER.md`](docs/CONTENU-A-CONFIRMER.md) et doivent être
remplacées avant mise en ligne.
