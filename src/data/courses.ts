/* =========================================================================
   [À RELIRE] : descriptions des cours rédigées à partir du spec.
   Solène : merci de relire et corriger titres, descriptions et contenus.
   ========================================================================= */

import type { Locale } from "@/i18n/config";

export interface CourseContent {
  readonly title: string;
  readonly subtitle: string;
  /** Short text shown on the course card. */
  readonly summary: string;
  /** Longer text shown on the course detail page. */
  readonly description: string;
  /** "Au programme" : liste à puces. */
  readonly highlights: readonly string[];
  /** "Pour qui ?" */
  readonly audience: string;
  /** "Format & déroulement" */
  readonly format: string;
}

export type Audience = "fr" | "en" | "both";

export interface Course {
  readonly id: string;
  readonly slug: string;
  /** Primary target audience: drives the badge and the per-locale ordering. */
  readonly audience: Audience;
  readonly fr: CourseContent;
  readonly en: CourseContent;
}

export const COURSES: readonly Course[] = [
  {
    id: "lycee-francais",
    slug: "lycee-francais",
    audience: "fr",
    fr: {
      title: "Entrée au Lycée Français de Londres",
      subtitle: "Préparer le passage dans le système français",
      summary:
        "Accompagner votre enfant vers une intégration réussie et sereine au Lycée Français Charles de Gaulle.",
      description:
        "L'entrée au Lycée Français de Londres marque un vrai tournant : il s'agit de passer d'un cursus britannique à un enseignement entièrement en français. Je prépare votre enfant à cette transition en consolidant la langue, l'écrit et les codes de l'école française, pour qu'il aborde sa rentrée avec confiance et sérénité.",
      highlights: [
        "Mise à niveau en lecture, écriture et expression",
        "Découverte des codes et attentes du système français",
        "Vocabulaire scolaire et compréhension des consignes",
        "Confiance à l'oral comme à l'écrit",
        "Suivi régulier et bilans avec les parents",
      ],
      audience:
        "Enfants du primaire et du collège scolarisés dans le système britannique qui s'apprêtent à rejoindre le Lycée Français de Londres.",
      format:
        "Cours hebdomadaires en tête-à-tête, en personne ou en ligne. Rythme et durée adaptés à l'âge de l'enfant.",
    },
    en: {
      title: "Entry to the Lycée Français de Londres",
      subtitle: "Preparing the move into the French system",
      summary:
        "Helping your child make a confident, successful transition into the Lycée Français Charles de Gaulle.",
      description:
        "Joining the Lycée Français de Londres is a real turning point: it means moving from a British curriculum to teaching entirely in French. I prepare your child for this transition by strengthening their language, their writing and their familiarity with French school culture, so they start the year with confidence and ease.",
      highlights: [
        "Reading, writing and expression brought up to level",
        "Understanding the codes and expectations of the French system",
        "School vocabulary and understanding instructions",
        "Confidence both orally and in writing",
        "Regular progress reviews with parents",
      ],
      audience:
        "Primary and secondary school children in the British system preparing to join the Lycée Français de Londres.",
      format:
        "Weekly one-to-one lessons, in person or online. Pace and length adapted to the child's age.",
    },
  },
  {
    id: "gcse",
    slug: "gcse",
    audience: "both",
    fr: {
      title: "GCSE Français",
      subtitle: "Réussir l'épreuve de français au GCSE",
      summary:
        "Une préparation ciblée et méthodique pour viser les meilleures notes au GCSE de français.",
      description:
        "Le GCSE de français évalue quatre compétences : compréhension orale, compréhension écrite, expression orale et expression écrite. Je prépare les élèves de manière méthodique aux attentes de l'examen, avec un travail régulier sur le vocabulaire, la grammaire et les techniques propres à chaque épreuve.",
      highlights: [
        "Maîtrise des quatre compétences de l'examen",
        "Vocabulaire et grammaire au programme",
        "Entraînement à l'épreuve orale (speaking)",
        "Méthodologie de l'écrit et de la traduction",
        "Examens blancs et corrections détaillées",
      ],
      audience:
        "Élèves des écoles britanniques préparant le GCSE de français, qu'ils soient francophones ou non.",
      format:
        "Cours en tête-à-tête, en personne ou en ligne, avec des supports et exercices adaptés au référentiel de l'examen.",
    },
    en: {
      title: "GCSE French",
      subtitle: "Succeeding in the French GCSE",
      summary:
        "Focused, methodical preparation to aim for top grades in GCSE French.",
      description:
        "GCSE French assesses four skills: listening, reading, speaking and writing. I prepare students methodically for what the exam expects, with regular work on vocabulary, grammar and the techniques specific to each paper.",
      highlights: [
        "Mastery of the exam's four skills",
        "Vocabulary and grammar on the syllabus",
        "Speaking exam practice",
        "Writing and translation methodology",
        "Mock exams with detailed feedback",
      ],
      audience:
        "Students in British schools preparing GCSE French, whether they are native French speakers or not.",
      format:
        "One-to-one lessons, in person or online, with materials matched to the exam specification.",
    },
  },
  {
    id: "brevet-bac",
    slug: "brevet-bac",
    audience: "fr",
    fr: {
      title: "Brevet & Bac français",
      subtitle: "Préparation aux examens français, à l'oral comme à l'écrit",
      summary:
        "Préparer le Brevet et le Baccalauréat de français avec méthode, rigueur et confiance.",
      description:
        "Du Brevet au Baccalauréat, les examens français demandent une solide maîtrise de la langue, de la méthode et des œuvres au programme. J'accompagne les élèves dans la préparation de l'écrit comme de l'oral : commentaire, dissertation, explication de texte et entretien.",
      highlights: [
        "Méthodologie du commentaire et de la dissertation",
        "Étude des œuvres et du programme de littérature",
        "Préparation de l'oral de français (EAF)",
        "Techniques de gestion du temps et du stress",
        "Sujets d'annales et examens blancs",
      ],
      audience:
        "Élèves de collège (Brevet) et de lycée (Première) du système français, scolarisés ou en candidat libre.",
      format:
        "Cours en tête-à-tête, en personne ou en ligne. Préparation intensive possible à l'approche des épreuves.",
    },
    en: {
      title: "French Brevet & Baccalauréat",
      subtitle: "Preparing the French exams, oral and written",
      summary:
        "Preparing for the French Brevet and Baccalauréat with method, rigour and confidence.",
      description:
        "From the Brevet to the Baccalauréat, the French exams demand a solid command of the language, of methodology and of the set texts. I support students through both written and oral preparation: commentary, essay (dissertation), text analysis and the oral interview.",
      highlights: [
        "Methodology of the commentary and the essay",
        "Study of the set texts and the literature syllabus",
        "Preparation for the French oral exam (EAF)",
        "Time and stress management techniques",
        "Past papers and mock exams",
      ],
      audience:
        "Secondary students (Brevet) and sixth-formers (Première) in the French system, enrolled or as independent candidates.",
      format:
        "One-to-one lessons, in person or online. Intensive preparation available as the exams approach.",
    },
  },
  {
    id: "fle",
    slug: "fle",
    audience: "en",
    fr: {
      title: "FLE, Français Langue Étrangère",
      subtitle: "Apprendre le français quand ce n'est pas sa langue maternelle",
      summary:
        "Des cours de français pour adultes non-francophones, du débutant au perfectionnement.",
      description:
        "Le français langue étrangère s'adresse à toutes celles et ceux qui souhaitent apprendre ou perfectionner le français sans l'avoir comme langue maternelle. Les cours partent de votre niveau et de vos objectifs : vie quotidienne, voyage, culture, ou progression vers un niveau certifié.",
      highlights: [
        "Cours adaptés à tous les niveaux (A1 à C1)",
        "Expression orale et aisance au quotidien",
        "Grammaire et vocabulaire progressifs",
        "Découverte de la culture francophone",
        "Préparation possible aux certifications (DELF / DALF)",
      ],
      audience:
        "Adultes non-francophones souhaitant apprendre ou perfectionner leur français, à tous les niveaux.",
      format:
        "Cours en tête-à-tête, en personne ou en ligne, au rythme qui vous convient.",
    },
    en: {
      title: "French as a Foreign Language (FLE)",
      subtitle: "Learning French when it isn't your mother tongue",
      summary:
        "French lessons for non-native adults, from beginner to advanced.",
      description:
        "French as a foreign language is for anyone who wants to learn or improve their French without having it as a mother tongue. Lessons start from your level and your goals: everyday life, travel, culture, or working towards a certified level.",
      highlights: [
        "Lessons for every level (A1 to C1)",
        "Speaking and everyday fluency",
        "Step-by-step grammar and vocabulary",
        "Discovering French-speaking culture",
        "Optional preparation for certifications (DELF / DALF)",
      ],
      audience:
        "Non-native adults who want to learn or improve their French, at any level.",
      format:
        "One-to-one lessons, in person or online, at the pace that suits you.",
    },
  },
  {
    id: "business",
    slug: "business",
    audience: "en",
    fr: {
      title: "Français Business",
      subtitle: "Le français professionnel pour entreprises et particuliers",
      summary:
        "Un français efficace pour le monde du travail : réunions, e-mails, présentations et négociations.",
      description:
        "Le français des affaires répond à des besoins précis : communiquer avec des partenaires francophones, rédiger des e-mails professionnels, mener une réunion ou une négociation. Les cours sont entièrement construits autour de votre secteur et de vos objectifs.",
      highlights: [
        "Communication professionnelle à l'oral et à l'écrit",
        "Vocabulaire spécifique à votre secteur d'activité",
        "Réunions, présentations et négociations",
        "Correspondance et e-mails professionnels",
        "Programme sur mesure, en individuel ou en équipe",
      ],
      audience:
        "Professionnels et entreprises souhaitant développer leur français dans un cadre de travail.",
      format:
        "Cours en personne ou en ligne. Tarif Business à partir de 80 £ de l'heure. N'hésitez pas à me contacter pour un devis.",
    },
    en: {
      title: "Business French",
      subtitle: "Professional French for companies and individuals",
      summary:
        "Effective French for the workplace: meetings, emails, presentations and negotiations.",
      description:
        "Business French answers precise needs: communicating with French-speaking partners, writing professional emails, running a meeting or a negotiation. Lessons are built entirely around your sector and your objectives.",
      highlights: [
        "Professional communication, spoken and written",
        "Vocabulary specific to your sector",
        "Meetings, presentations and negotiations",
        "Professional correspondence and emails",
        "A bespoke programme, one-to-one or for teams",
      ],
      audience:
        "Professionals and companies looking to develop their French in a work setting.",
      format:
        "Lessons in person or online. Business rate from £80 per hour. Please get in touch for a quote.",
    },
  },
];

export function getCourse(slug: string): Course | undefined {
  return COURSES.find((course) => course.slug === slug);
}

export function courseContent(course: Course, locale: Locale): CourseContent {
  return course[locale];
}

/**
 * Courses ordered so the visitor's language audience comes first:
 * French-audience courses first on the FR site, English-audience first on EN.
 * Array sort is stable, so same-audience courses keep their canonical order.
 */
export function orderedCourses(locale: Locale): readonly Course[] {
  const firstAudience: Audience = locale === "en" ? "en" : "fr";
  // "both"-audience courses always belong to the first group.
  const inFirstGroup = (course: Course) =>
    course.audience === "both" || course.audience === firstAudience;
  return [...COURSES].sort((a, b) => {
    const aFirst = inFirstGroup(a);
    const bFirst = inFirstGroup(b);
    if (aFirst === bFirst) return 0;
    return aFirst ? -1 : 1;
  });
}
