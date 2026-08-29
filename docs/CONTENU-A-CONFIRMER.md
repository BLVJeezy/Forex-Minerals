# Contenu à confirmer — Forex Minerals

> **Content awaiting confirmation.** Every item listed below is currently a
> **design placeholder**. None of these values is a verified company fact.
> They must be replaced with information supplied by Forex Minerals before the
> site is published.

Pour visualiser tous les emplacements concernés dans le navigateur, lancer le
site avec :

```bash
NEXT_PUBLIC_SHOW_PLACEHOLDERS=1 npm run dev
```

Chaque valeur en attente est alors encadrée d'un liseré doré. Dans le code,
ces valeurs portent l'attribut `data-placeholder="true"`.

---

## 1. Chiffres clés — `src/content/company.ts` → `keyFigures`

| Identifiant  | Libellé FR             | Valeur affichée | Statut     |
| ------------ | ---------------------- | --------------- | ---------- |
| `vehicles`   | Véhicules              | `XX+`           | à confirmer |
| `tonnage`    | Tonnes transportées    | `XXK`           | à confirmer |
| `sites`      | Sites desservis        | `XX+`           | à confirmer |
| `experience` | Années d'expérience    | `XX`            | à confirmer |

**Comment mettre à jour :** renseigner `number` (valeur numérique réelle) et
`pending: false`. L'animation de comptage s'active automatiquement dès qu'un
`number` est fourni. `display` n'est utilisé que tant que `number` vaut `null`.

---

## 2. Coordonnées — `src/content/company.ts` → `company.contact`

- Téléphone
- WhatsApp
- Adresse e-mail générale
- Adresse e-mail commerciale
- Horaires d'ouverture
- Adresse complète (rue / avenue / numéro) — `company.street`

Le siège (Likasi, Haut-Katanga, RDC) est confirmé et déjà publié.

> Tant qu'elles ne sont pas confirmées, les coordonnées sont affichées en texte
> simple, **jamais** sous forme de liens `tel:` ou `mailto:`, afin qu'aucun
> élément de la page ne puisse être pris pour un contact réel.

---

## 3. Informations légales — `src/content/company.ts` → `company.registration`

- RCCM
- Numéro d'identification nationale
- Numéro impôt
- Forme juridique exacte (`company.legalName`)

---

## 4. Direction — `src/content/company.ts` → `leadership`

Deux représentants figurent sur la photographie officielle. Leurs **noms**,
**fonctions** et **responsabilités** ne sont pas confirmés : les cartes
affichent `[Nom]` / `[Fonction]`.

Aucune biographie n'a été rédigée — aucune ne doit l'être avant réception des
informations officielles.

---

## 5. Réseaux sociaux — `src/content/company.ts` → `company.social`

LinkedIn, Facebook (et tout autre profil) — non renseignés, donc non affichés.

---

## 6. Écosystème industriel — `src/content/company.ts` → `ecosystem`

Organisations citées : **GCK (Grande Cimenterie du Katanga SAS)**,
**Gécamines**, **Shiesuka Likasi**.

Elles sont présentées comme repères de l'écosystème industriel régional, avec
une mention explicite indiquant qu'aucune relation contractuelle n'est
impliquée. **Ne pas ajouter** de mention de contrat, de volume, d'exclusivité
ou de référence client sans confirmation écrite.

Les logos officiels remplaceront le traitement typographique actuel dès leur
fourniture.

---

## 7. Flotte — `src/content/fr.ts` / `en.ts` → `fleet.fleetSection`

Aucun effectif de flotte, capacité unitaire ou tonnage n'est annoncé. Le texte
indique explicitement que la composition détaillée du parc sera publiée après
consolidation.

---

## 8. Certifications et agréments

**Aucune certification n'est revendiquée.** La page Flotte & Sécurité porte une
mention explicite en ce sens (`fleet.safety.note`). Ne rien ajouter avant
réception des attestations.

---

## 9. Formulaire de demande de devis — `src/app/api/rfq/route.ts`

La destination des demandes n'est pas encore définie. Tant que
`RFQ_RECIPIENT_EMAIL` n'est pas configurée :

- l'endpoint valide la demande et l'enregistre dans le journal serveur ;
- il répond `not_configured` ;
- le formulaire affiche un message indiquant que la demande n'a pas pu être
  transmise, plutôt que de laisser croire à un envoi réussi.

**Pour activer :** définir `RFQ_RECIPIENT_EMAIL` (et le transport d'envoi
choisi, par exemple `RESEND_API_KEY`), puis compléter la section marquée
`TODO` dans `src/app/api/rfq/route.ts`.

---

## 10. Domaine de production — `src/content/company.ts` → `company.siteUrl`

Valeur par défaut : `https://www.forexminerals.cd`. À remplacer par le domaine
réel via la variable d'environnement `NEXT_PUBLIC_SITE_URL` (utilisée pour les
URL canoniques, les balises hreflang, l'Open Graph et le sitemap).

---

## 11. Photographies à fournir

La photothèque actuelle (`src/assets/images`) couvre la direction, la flotte,
l'ensemble tracteur + benne et les engins de chargement. Manquent encore :

- gypse naturel (matière et/ou site d'extraction)
- charbon industriel
- sable
- opérations de chargement en cours
- sites industriels et carrières

Les fiches matières (`/fr/mineraux`) réservent déjà l'emplacement de ces
photographies ; elles peuvent y être intégrées sans modification de la mise en
page.

---

## Rappel de principe

Le site a été rédigé de manière à **ne rien affirmer qui ne soit confirmé** :
aucun tonnage, aucun effectif, aucune date de création, aucune concession,
aucun contrat, aucune couverture géographique au-delà de Likasi, Lubumbashi et
du corridor du Haut-Katanga. Toute donnée ajoutée doit l'être sur la base
d'informations officielles de l'entreprise.
