/**
 * Contenu éditorial — Français (langue d'origine du site).
 *
 * Aucune donnée chiffrée, certification, licence ou relation contractuelle
 * n'est affirmée ici. Les valeurs en attente sont centralisées dans
 * `src/content/company.ts`.
 */
import type { RouteKey } from "@/lib/i18n";

export const fr = {
  meta: {
    siteName: "Forex Minerals",
    tagline: "Minéraux industriels & logistique — Haut-Katanga, RDC",
    defaultTitle: "Forex Minerals — Minéraux industriels & logistique lourde",
    titleTemplate: "%s | Forex Minerals",
    defaultDescription:
      "Forex Minerals accompagne les acteurs industriels du Haut-Katanga dans l'approvisionnement et le transport de matières premières essentielles : gypse naturel, charbon industriel et sable. Basée à Likasi, RDC.",
  },

  nav: {
    home: "Accueil",
    about: "À propos",
    minerals: "Minéraux",
    transport: "Transport & Logistique",
    fleet: "Flotte & Sécurité",
    industries: "Secteurs",
    contact: "Contact",
    cta: "Demander un devis",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    languageLabel: "Choisir la langue",
    skipToContent: "Aller au contenu principal",
    breadcrumb: "Fil d'Ariane",
    primaryNav: "Navigation principale",
  },

  common: {
    discover: "Découvrir",
    learnMore: "En savoir plus",
    requestQuote: "Demander un devis",
    contactUs: "Nous contacter",
    pendingLabel: "Information à confirmer",
    pendingNote:
      "Donnée en cours de consolidation. Elle sera publiée une fois confirmée par Forex Minerals.",
    scrollHint: "Défiler",
  },

  home: {
    hero: {
      eyebrow: "Minéraux • Transport • Logistique",
      title: "La force industrielle au service de votre chaîne d'approvisionnement.",
      body: "Forex Minerals accompagne les acteurs industriels du Haut-Katanga dans l'approvisionnement et le transport de matières premières essentielles.",
      primaryCta: "Demander un devis",
      secondaryCta: "Découvrir Forex Minerals",
      caption: "Likasi — Province du Haut-Katanga, RDC",
    },

    intro: {
      eyebrow: "Forex Minerals",
      title: "Un partenaire industriel au cœur du Haut-Katanga.",
      body: [
        "Basée à Likasi et active au cœur du corridor industriel du Haut-Katanga, Forex Minerals accompagne les entreprises dans leurs besoins en minéraux industriels et en logistique lourde.",
        "Notre approche repose sur une ambition claire : contribuer à une chaîne d'approvisionnement fiable, structurée et adaptée aux exigences des opérations industrielles.",
      ],
      cta: "À propos de Forex Minerals",
      asideTitle: "Périmètre d'activité",
      aside: [
        { label: "Siège", value: "Likasi, Haut-Katanga" },
        { label: "Zone d'opération", value: "Likasi • Lubumbashi • Haut-Katanga" },
        { label: "Matières", value: "Gypse naturel • Charbon • Sable" },
        { label: "Positionnement", value: "Minéraux industriels & logistique" },
      ],
    },

    figures: {
      eyebrow: "Chiffres clés",
      title: "Une organisation dimensionnée pour l'industrie.",
      note: "Les chiffres officiels de Forex Minerals sont en cours de consolidation et seront publiés après validation.",
      items: {
        vehicles: "Véhicules",
        tonnage: "Tonnes transportées",
        sites: "Sites desservis",
        experience: "Années d'expérience",
      },
    },

    minerals: {
      eyebrow: "Portefeuille de matières",
      title: "Des matières premières essentielles à l'industrie régionale.",
      body: "Forex Minerals intervient sur des matières destinées aux opérations industrielles et de construction du Haut-Katanga.",
      cta: "Voir toutes les matières",
    },

    process: {
      eyebrow: "Modèle opérationnel",
      title: "De l'approvisionnement à la continuité opérationnelle.",
      body: "Une chaîne pensée comme un ensemble : chaque étape est organisée pour servir la suivante.",
      steps: [
        {
          id: "supply",
          title: "Approvisionnement",
          body: "Identification et mobilisation des matières correspondant aux besoins de l'industriel.",
        },
        {
          id: "preparation",
          title: "Préparation",
          body: "Organisation des volumes et préparation des matières avant enlèvement.",
        },
        {
          id: "loading",
          title: "Chargement",
          body: "Opérations de chargement conduites sur site avec les moyens adaptés à la matière.",
        },
        {
          id: "transport",
          title: "Transport",
          body: "Acheminement routier sur le corridor industriel du Haut-Katanga.",
        },
        {
          id: "delivery",
          title: "Livraison",
          body: "Remise sur le site du client selon les modalités convenues.",
        },
        {
          id: "continuity",
          title: "Continuité opérationnelle",
          body: "Suivi des flux pour soutenir la régularité des approvisionnements.",
        },
      ],
    },

    imageBreak: {
      title: "Des opérations conçues autour de la continuité.",
      body: "La disponibilité des matières et la régularité des rotations conditionnent la performance des sites industriels.",
    },

    values: {
      eyebrow: "Pourquoi Forex Minerals",
      title: "Un partenaire pensé pour les exigences industrielles.",
      items: [
        {
          id: "reliability",
          title: "Fiabilité opérationnelle",
          body: "Une organisation pensée autour des exigences des environnements industriels.",
        },
        {
          id: "logistics",
          title: "Logistique intégrée",
          body: "Une approche structurée du chargement jusqu'à la livraison.",
        },
        {
          id: "safety",
          title: "Sécurité",
          body: "La sécurité doit être intégrée à chaque étape des opérations.",
        },
        {
          id: "regional",
          title: "Expertise régionale",
          body: "Une présence au cœur de l'écosystème industriel du Haut-Katanga.",
        },
      ],
    },

    fleet: {
      eyebrow: "Flotte & équipements",
      title: "Une flotte au service de l'industrie.",
      body: [
        "Le transport de matières en vrac impose des équipements adaptés, une disponibilité maîtrisée et une planification rigoureuse des rotations.",
        "Notre approche associe entretien préventif, gestion des charges et préparation des opérations afin de soutenir la régularité des livraisons.",
      ],
      points: [
        "Transport routier de matières industrielles en vrac",
        "Disponibilité et préparation des véhicules",
        "Entretien et suivi des équipements",
        "Planification des rotations et gestion des charges",
      ],
      cta: "Découvrir notre flotte",
    },

    ecosystem: {
      eyebrow: "Écosystème industriel",
      title: "Au cœur du tissu industriel du Haut-Katanga.",
      body: "Forex Minerals évolue dans un environnement industriel dense, structuré autour de la cimenterie, de l'extraction minière et de la transformation.",
      disclaimer:
        "Organisations citées à titre de repères de l'écosystème industriel régional. Aucune relation contractuelle n'est impliquée.",
    },

    leadership: {
      eyebrow: "Direction",
      title: "Une direction engagée dans le développement industriel.",
      body: [
        "La direction de Forex Minerals conduit le développement de l'entreprise dans un secteur exigeant, où la fiabilité des engagements constitue la première référence.",
        "Les informations détaillées relatives à la direction seront publiées prochainement.",
      ],
      cta: "En savoir plus sur l'entreprise",
    },

    cta: {
      title: "Parlons de vos besoins industriels.",
      body: [
        "Vous recherchez une solution pour l'approvisionnement ou le transport de matières premières ?",
        "Présentez-nous vos besoins et notre équipe pourra étudier votre demande.",
      ],
      primary: "Demander un devis",
      secondary: "Nous contacter",
    },
  },

  minerals: {
    eyebrow: "Minéraux",
    title: "Matières industrielles",
    intro:
      "Forex Minerals intervient sur des matières premières destinées aux opérations industrielles et de construction du Haut-Katanga. Les caractéristiques techniques et les disponibilités sont précisées au cas par cas, en fonction des besoins de chaque client.",
    items: [
      {
        id: "gypse",
        name: "Gypse naturel",
        short:
          "Matière première destinée notamment aux applications industrielles et cimentières.",
        body: [
          "Le gypse naturel occupe une place structurante dans la production cimentière et dans plusieurs procédés industriels.",
          "Forex Minerals organise l'approvisionnement et le transport de cette matière selon les volumes et les cadences définis avec le client.",
        ],
        applications: [
          "Production cimentière",
          "Applications industrielles",
          "Matériaux de construction",
        ],
      },
      {
        id: "charbon",
        name: "Charbon industriel",
        short:
          "Approvisionnement et transport adaptés aux besoins des opérations industrielles.",
        body: [
          "Le charbon industriel intervient dans les procédés thermiques d'un grand nombre d'unités industrielles de la région.",
          "L'organisation des flux et la régularité des livraisons constituent des conditions déterminantes pour la continuité de ces opérations.",
        ],
        applications: [
          "Procédés thermiques industriels",
          "Unités de transformation",
          "Approvisionnement continu",
        ],
      },
      {
        id: "sable",
        name: "Sable",
        short:
          "Solutions d'approvisionnement et de transport pour les besoins industriels et de construction.",
        body: [
          "Le sable constitue une matière de base pour les chantiers de construction et pour plusieurs applications industrielles.",
          "Forex Minerals accompagne les besoins ponctuels comme les approvisionnements récurrents, sur la base des volumes convenus.",
        ],
        applications: [
          "Construction & génie civil",
          "Infrastructure",
          "Applications industrielles",
        ],
      },
    ],
    specNote:
      "Les spécifications techniques, granulométries et conditions de livraison sont communiquées sur demande, dans le cadre de l'étude de chaque dossier.",
    cta: {
      title: "Une matière spécifique à sourcer ?",
      body: "Précisez votre besoin et nos équipes examineront la faisabilité de l'approvisionnement.",
      button: "Demander un devis",
    },
  },

  about: {
    eyebrow: "À propos",
    title: "Forex Minerals",
    lead: "Une entreprise industrielle établie à Likasi, engagée dans l'approvisionnement en minéraux industriels et la logistique lourde du Haut-Katanga.",
    story: {
      eyebrow: "Notre positionnement",
      title: "Minéraux industriels et logistique lourde.",
      body: [
        "Forex Minerals intervient dans l'écosystème des minéraux industriels et de la logistique lourde du Haut-Katanga. L'entreprise accompagne les opérateurs industriels dans l'approvisionnement et l'acheminement de matières premières essentielles à leur activité.",
        "Notre rôle se situe à la jonction de deux exigences : la disponibilité de la matière et la fiabilité de son acheminement. C'est cette combinaison qui conditionne la continuité des opérations de nos interlocuteurs.",
        "L'entreprise poursuit le développement progressif de ses capacités, de son organisation et de ses moyens, dans un secteur où la constance des engagements constitue la première référence.",
      ],
    },
    presence: {
      eyebrow: "Présence régionale",
      title: "Likasi, Lubumbashi et le corridor du Haut-Katanga.",
      body: [
        "Le siège de Forex Minerals est établi à Likasi, dans la province du Haut-Katanga, en République Démocratique du Congo.",
        "Les opérations se déploient sur Lubumbashi et le corridor industriel régional, un axe qui concentre l'essentiel de l'activité cimentière, minière et métallurgique du pays.",
      ],
      points: [
        { label: "Siège", value: "Likasi, Haut-Katanga, RDC" },
        {
          label: "Zone d'opération",
          value: "Likasi, Lubumbashi et le corridor industriel du Haut-Katanga",
        },
        {
          label: "Domaines",
          value: "Minéraux industriels, chargement, transport routier, livraison",
        },
      ],
    },
    values: {
      eyebrow: "Nos principes",
      title: "Ce qui structure notre manière de travailler.",
      items: [
        {
          id: "engagement",
          title: "Tenue des engagements",
          body: "Un engagement pris sur un volume, une date ou une destination structure l'organisation qui le suit.",
        },
        {
          id: "securite",
          title: "Sécurité des opérations",
          body: "La sécurité des personnes, des équipements et des charges doit être intégrée à chaque étape.",
        },
        {
          id: "rigueur",
          title: "Rigueur opérationnelle",
          body: "Préparation, planification et suivi conditionnent la régularité des livraisons.",
        },
        {
          id: "ancrage",
          title: "Ancrage régional",
          body: "Une connaissance directe du terrain, des axes et des contraintes du Haut-Katanga.",
        },
      ],
    },
    leadership: {
      eyebrow: "Direction",
      title: "Une direction engagée dans le développement industriel.",
      body: "Les identités, fonctions et responsabilités des membres de la direction seront publiées après confirmation par l'entreprise.",
    },
    figuresTitle: "Forex Minerals en chiffres",
  },

  transport: {
    eyebrow: "Transport & Logistique",
    title: "Une logistique construite pour l'industrie lourde.",
    lead: "Du chargement sur site à la livraison finale, Forex Minerals organise l'acheminement de matières industrielles en vrac sur le corridor du Haut-Katanga.",
    intro: {
      eyebrow: "Approche",
      title: "Une chaîne maîtrisée de bout en bout.",
      body: [
        "Le transport de matières en vrac ne se limite pas au trajet. Il commence par la préparation de la matière et la coordination du chargement, et se poursuit jusqu'à la remise sur le site de destination.",
        "Chaque étape est organisée pour limiter les ruptures et soutenir la régularité des approvisionnements de nos interlocuteurs industriels.",
      ],
    },
    capabilities: {
      eyebrow: "Nos domaines d'intervention",
      title: "Du site d'enlèvement au site de destination.",
      items: [
        {
          id: "chargement",
          title: "Chargement",
          body: "Coordination des opérations de chargement sur site, avec les moyens adaptés à la nature de la matière transportée.",
        },
        {
          id: "transport",
          title: "Transport routier",
          body: "Acheminement de matières industrielles en vrac sur les axes du Haut-Katanga, selon les cadences convenues.",
        },
        {
          id: "livraison",
          title: "Livraison",
          body: "Remise sur le site du client, dans le respect des modalités et des créneaux définis en amont.",
        },
        {
          id: "continuite",
          title: "Continuité d'approvisionnement",
          body: "Organisation des rotations pour soutenir la régularité des flux sur la durée d'un contrat.",
        },
      ],
    },
    flow: {
      eyebrow: "Déroulement d'une opération",
      title: "Six étapes, une seule exigence : la continuité.",
    },
    cta: {
      title: "Un flux à organiser ?",
      body: "Présentez-nous votre besoin de transport : matière, volumes, lieu de chargement et destination.",
      button: "Demander un devis",
    },
  },

  fleet: {
    eyebrow: "Flotte & Sécurité",
    title: "Une flotte au service de l'industrie.",
    lead: "Le transport de matières en vrac impose des équipements adaptés, une disponibilité maîtrisée et une culture de sécurité appliquée sur le terrain.",
    fleetSection: {
      eyebrow: "Équipements",
      title: "Des moyens adaptés aux matières transportées.",
      body: [
        "La flotte Forex Minerals est composée de tracteurs routiers et de semi-remorques bennes destinés au transport de matières industrielles en vrac.",
        "La composition détaillée du parc et les capacités unitaires seront publiées après consolidation des données par l'entreprise.",
      ],
      points: [
        {
          id: "tracteurs",
          title: "Tracteurs routiers",
          body: "Ensembles dédiés au transport longue distance de matières en vrac sur le corridor régional.",
        },
        {
          id: "bennes",
          title: "Semi-remorques bennes",
          body: "Équipements adaptés au déchargement de matières industrielles sur site.",
        },
        {
          id: "chargement",
          title: "Moyens de chargement",
          body: "Engins de chargement mobilisés pour les opérations sur les plateformes d'enlèvement.",
        },
      ],
    },
    readiness: {
      eyebrow: "Disponibilité opérationnelle",
      title: "La disponibilité se prépare avant la rotation.",
      items: [
        {
          id: "maintenance",
          title: "Entretien préventif",
          body: "Un suivi régulier des équipements pour limiter les immobilisations non planifiées.",
        },
        {
          id: "planification",
          title: "Planification",
          body: "Organisation des rotations en fonction des cadences et des contraintes de site.",
        },
        {
          id: "charges",
          title: "Gestion des charges",
          body: "Respect des charges et de leur répartition, condition de sécurité et de préservation des équipements.",
        },
        {
          id: "conducteurs",
          title: "Standards de conduite",
          body: "Des exigences appliquées aux conducteurs en matière de conduite et de comportement sur site.",
        },
      ],
    },
    safety: {
      eyebrow: "Sécurité",
      title: "La sécurité comme condition d'exploitation.",
      body: [
        "Les environnements industriels et miniers imposent des règles strictes. Forex Minerals intègre ces exigences dans la préparation et la conduite de ses opérations.",
        "Arrimage et gestion des charges, respect des consignes de site, comportement en carrière et sur route : la sécurité conditionne l'accès aux sites de nos interlocuteurs.",
      ],
      note: "Les certifications, agréments et référentiels applicables seront publiés après confirmation par l'entreprise. Aucune certification n'est revendiquée à ce stade.",
    },
    cta: {
      title: "Un besoin de transport à cadencer ?",
      body: "Nos équipes examinent la faisabilité opérationnelle de votre demande.",
      button: "Demander un devis",
    },
  },

  industries: {
    eyebrow: "Secteurs",
    title: "Les industries que nous servons.",
    lead: "Forex Minerals intervient auprès des opérateurs dont l'activité dépend d'un approvisionnement régulier en matières premières et d'une logistique fiable.",
    items: [
      {
        id: "cimenteries",
        title: "Cimenteries",
        body: "Approvisionnement en matières entrant dans les procédés cimentiers et organisation des flux associés.",
      },
      {
        id: "mines",
        title: "Mines",
        body: "Transport de matières et soutien logistique aux opérations d'extraction du corridor du Haut-Katanga.",
      },
      {
        id: "metallurgie",
        title: "Métallurgie",
        body: "Acheminement de matières destinées aux unités de traitement et de transformation.",
      },
      {
        id: "construction",
        title: "Construction & Infrastructure",
        body: "Fourniture et transport de matériaux pour les chantiers de construction et d'infrastructure.",
      },
      {
        id: "transformation",
        title: "Transformation industrielle",
        body: "Approvisionnement des unités industrielles dont les procédés reposent sur une matière disponible en continu.",
      },
    ],
    cta: {
      title: "Votre secteur n'est pas listé ?",
      body: "Présentez-nous votre besoin : nous étudierons la faisabilité de votre demande.",
      button: "Demander un devis",
    },
  },

  contact: {
    eyebrow: "Contact",
    title: "Parlons de vos besoins industriels.",
    lead: "Présentez-nous votre besoin en approvisionnement ou en transport de matières premières. Notre équipe étudiera votre demande et reviendra vers vous.",
    coordinates: {
      title: "Coordonnées",
      labels: {
        phone: "Téléphone",
        whatsapp: "WhatsApp",
        email: "E-mail",
        commercial: "Demandes commerciales",
        address: "Adresse",
        hours: "Horaires",
        registration: "Informations légales",
      },
      addressValue: "Likasi, Province du Haut-Katanga, République Démocratique du Congo",
      note: "Les coordonnées détaillées de l'entreprise seront publiées dès leur confirmation.",
    },
  },

  rfq: {
    eyebrow: "Demande de devis",
    title: "Demande de devis",
    intro:
      "Renseignez les éléments ci-dessous. Plus votre demande est précise, plus notre réponse sera rapide et pertinente.",
    sections: {
      company: "Votre entreprise",
      need: "Votre besoin",
      logistics: "Logistique",
      schedule: "Calendrier",
      extra: "Informations complémentaires",
    },
    fields: {
      company: "Entreprise",
      fullName: "Nom et prénom",
      role: "Fonction",
      email: "Adresse e-mail professionnelle",
      phone: "Téléphone / WhatsApp",
      material: "Matière recherchée",
      materialOther: "Précisez la matière",
      volume: "Volume estimé",
      volumeUnit: "tonnes / mois",
      loadingPlace: "Lieu de chargement",
      destination: "Destination",
      frequency: "Fréquence",
      startDate: "Date de démarrage souhaitée",
      duration: "Durée estimée",
      message: "Informations complémentaires",
    },
    placeholders: {
      company: "Raison sociale",
      fullName: "Nom et prénom",
      role: "Directeur des achats, responsable logistique…",
      email: "prenom.nom@entreprise.com",
      phone: "+243 …",
      volume: "Ex. 500",
      loadingPlace: "Site ou localité d'enlèvement",
      destination: "Site de livraison",
      duration: "Ex. 6 mois",
      message:
        "Spécifications, contraintes de site, exigences particulières…",
    },
    materials: [
      { value: "gypse", label: "Gypse naturel" },
      { value: "charbon", label: "Charbon" },
      { value: "sable", label: "Sable" },
      { value: "autre", label: "Autre" },
    ],
    frequencies: [
      { value: "quotidienne", label: "Quotidienne" },
      { value: "hebdomadaire", label: "Hebdomadaire" },
      { value: "mensuelle", label: "Mensuelle" },
      { value: "projet", label: "Projet spécifique" },
    ],
    optional: "facultatif",
    required: "obligatoire",
    submit: "Envoyer ma demande",
    submitting: "Envoi en cours…",
    successTitle: "Demande enregistrée",
    successBody:
      "Merci. Votre demande a été transmise. Notre équipe reviendra vers vous dans les meilleurs délais.",
    errorTitle: "Envoi impossible",
    errorBody:
      "Une erreur est survenue lors de l'envoi. Merci de réessayer ou de nous joindre directement.",
    validation: {
      required: "Ce champ est obligatoire.",
      email: "Merci d'indiquer une adresse e-mail valide.",
    },
    formNote:
      "Les informations transmises sont utilisées uniquement dans le cadre du traitement de votre demande.",
    devNotice:
      "Formulaire en configuration : la destination des demandes (adresse e-mail ou système interne) sera raccordée dès communication des coordonnées de l'entreprise.",
  },

  footer: {
    description:
      "Minéraux industriels et logistique lourde au cœur du corridor industriel du Haut-Katanga. Siège à Likasi, République Démocratique du Congo.",
    navTitle: "Navigation",
    mineralsTitle: "Minéraux",
    operationsTitle: "Opérations",
    contactTitle: "Contact",
    operations: [
      { key: "transport", label: "Chargement & transport" },
      { key: "fleet", label: "Flotte & sécurité" },
      { key: "industries", label: "Secteurs desservis" },
    ] as { key: RouteKey; label: string }[],
    ctaTitle: "Un besoin à formuler ?",
    ctaBody: "Notre équipe étudie chaque demande industrielle.",
    ctaButton: "Demander un devis",
    legal: "Tous droits réservés.",
    legalNote: "Informations légales à confirmer.",
  },

  pageMeta: {
    home: {
      title: "Forex Minerals — Minéraux industriels & logistique, Haut-Katanga",
      description:
        "Approvisionnement et transport de gypse naturel, charbon industriel et sable dans le Haut-Katanga. Forex Minerals, entreprise de minéraux industriels et de logistique lourde basée à Likasi, RDC.",
    },
    about: {
      title: "À propos",
      description:
        "Forex Minerals, entreprise de minéraux industriels et de logistique lourde établie à Likasi, active sur Lubumbashi et le corridor industriel du Haut-Katanga.",
    },
    minerals: {
      title: "Minéraux industriels",
      description:
        "Gypse naturel, charbon industriel et sable : approvisionnement et transport de matières premières pour l'industrie du Haut-Katanga, RDC.",
    },
    transport: {
      title: "Transport & Logistique",
      description:
        "Chargement, transport routier et livraison de matières industrielles en vrac sur le corridor du Haut-Katanga. Logistique minière et industrielle en RDC.",
    },
    fleet: {
      title: "Flotte & Sécurité",
      description:
        "Flotte de tracteurs routiers et de semi-remorques bennes, disponibilité opérationnelle, entretien et sécurité des opérations de transport industriel.",
    },
    industries: {
      title: "Secteurs",
      description:
        "Cimenteries, mines, métallurgie, construction et transformation industrielle : les secteurs accompagnés par Forex Minerals au Haut-Katanga.",
    },
    contact: {
      title: "Contact & demande de devis",
      description:
        "Formulez votre demande d'approvisionnement ou de transport de matières premières industrielles auprès de Forex Minerals, Likasi, Haut-Katanga.",
    },
  },
};
