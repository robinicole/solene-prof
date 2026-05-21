/* =========================================================================
   [À RELIRE]: all interface and page text, in English.
   Solène: this file holds the full English translation. Please review the
   tone, the headlines and the descriptions.
   ========================================================================= */

import type { Dictionary } from "./fr";

export const en: Dictionary = {
  htmlLang: "en",
  localeName: "English",

  nav: {
    home: "Home",
    courses: "Courses",
    pricing: "Pricing",
    about: "About",
    contact: "Contact",
    cta: "Book a lesson",
  },

  langSwitch: {
    label: "Change language",
    fr: "FR",
    en: "EN",
  },

  footer: {
    tagline:
      "A French teacher in London, I pass on the French language and its literature to children and adults alike, with gentleness and high standards.",
    navTitle: "Navigation",
    contactTitle: "Contact",
    location: "London, United Kingdom",
    contactCta: "Contact form",
    rights: "All rights reserved.",
  },

  common: {
    learnMore: "Learn more",
  },

  home: {
    meta: {
      title: "French lessons in London, Solène Lanza",
      description:
        "Private French lessons in London with Solène Lanza, a teacher with over 10 years' experience. Entry to the Lycée Français, GCSE, Brevet, Bac, FLE and Business French. In person or online.",
    },
    hero: {
      eyebrow: "French teacher · London",
      titleLine1: "Learn",
      titleLine2: "French",
      subtitle:
        "From entry to the Lycée Français de Londres to the Baccalauréat, from GCSE to FLE. Over ten years passing on the French language and a love of its literature.",
      ctaPrimary: "Explore the courses",
      ctaSecondary: "Get in touch",
      highlights: [
        "Over 10 years' experience",
        "From primary school to the Baccalauréat",
        "In person or online",
      ],
    },
    courses: {
      eyebrow: "The courses",
      title: "A path for every goal",
      description:
        "Preparing for an exam, joining the French system, or progressing in speaking and writing. Every course fits the student's goal and level.",
      cta: "See all the courses",
    },
    about: {
      eyebrow: "Your teacher",
      title: "Hello, I'm Solène",
      p1: "A French teacher for over ten years, I work in London with students of all ages: primary schoolchildren, secondary students, sixth-formers and adults. From a first word of vocabulary to preparing for the Baccalauréat, I adapt every course to the student taking it.",
      p2: "What matters most to me: playful teaching, solid foundations, and a feel for the language and its literature. Students make better progress when they feel confident.",
      stats: [
        { value: "10+", label: "years' experience" },
        { value: "5", label: "course paths" },
        { value: "2", label: "systems: French & British" },
      ],
      cta: "More about me",
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "What families say",
    },
    cta: {
      title: "Ready to start",
      titleAccent: "French?",
      description:
        "Tell me about your project, or your child's. I reply within 24 to 48 hours.",
      button: "Get in touch",
    },
  },

  coursesPage: {
    meta: {
      title: "French courses",
      description:
        "Five French course paths in London: entry to the Lycée Français, GCSE, Brevet & Bac, FLE and Business French. Private lessons, in person or online.",
    },
    eyebrow: "The courses",
    title: "French courses",
    intro:
      "Five paths for five goals: from entry to the Lycée Français de Londres to preparing for the Baccalauréat, from GCSE to professional French. Every course is one-to-one and adapted to the student.",
  },

  coursePage: {
    programmeTitle: "What we cover",
    audienceTitle: "Who it's for",
    formatTitle: "Format & how it works",
    ctaTitle: "Interested in this course?",
    ctaText: "Tell me about your project: I reply within 24 to 48 hours.",
    ctaButton: "Book this course",
    otherCoursesTitle: "Other courses",
    backLink: "All courses",
  },

  pricingPage: {
    meta: {
      title: "Pricing 2026-2027",
      description:
        "Pricing for private French lessons in London with Solène Lanza: in person, online, and a Business rate on quotation.",
    },
    eyebrow: "Pricing",
    title: "Pricing 2026-2027",
    intro:
      "Clear pricing for private one-to-one lessons, in person or online. The first conversation lets us define the pace and goals together.",
    tableServiceHead: "Service",
    tablePriceHead: "Rate",
    businessTitle: "Business rate",
    businessText:
      "From £60 per hour. For a professional French programme tailored to your company or your activity, please get in touch and I will prepare a quote.",
    businessButton: "Request a quote",
    cancellationTitle: "Cancellation & catch-up",
    cancellationParagraphs: [
      "Any cancellation made less than a week in advance will be charged, except for exceptional medical or family reasons.",
      "It is always possible to catch up a lesson, subject to availability. :)",
    ],
    ctaText: "A question about pricing, or about the right option for you?",
    ctaButton: "Get in touch",
  },

  aboutPage: {
    meta: {
      title: "About",
      description:
        "Solène Lanza, a French teacher in London for over ten years. Playful teaching, solid foundations and a love of literature.",
    },
    eyebrow: "Your teacher",
    title: "Solène Lanza",
    lead: "A French teacher in London for over ten years.",
    p1: "For over ten years, I have taught French in London to students from all backgrounds: children in the British system discovering academic French, secondary and sixth-form students at the Lycée Français, adults learning French as a foreign language, professionals seeking effective French.",
    p2: "My work starts by understanding where each student is, what motivates them and what holds them back, then building a clear path towards their goal together. I bring rigour and method to it, but also a great deal of gentleness: we learn better when we feel confident.",
    p3: "And then there is literature, which I so love to pass on: the pleasure of reading, of understanding a text, of finding the right words. That is often where a true taste for French is born.",
    pedagogyTitle: "My teaching approach",
    pedagogyIntro: "Four principles guide every one of my lessons.",
    values: [
      {
        title: "Playful teaching",
        text: "Learning French should stay a pleasure. Games, reading, conversation: motivation comes through enjoyment, at any age.",
      },
      {
        title: "Foundations first",
        text: "Grammar, spelling, conjugation, vocabulary: a solid base on which everything else can be built to last.",
      },
      {
        title: "An approach that adapts",
        text: "The pace, the materials and the goals adjust to the personality and level of each student.",
      },
      {
        title: "Gentleness and high standards",
        text: "A reassuring, punctual and structured setting, where students progress without pressure but without letting anything slide.",
      },
    ],
    experienceTitle: "My experience",
    experienceText:
      "Entry to the Lycée Français de Londres, GCSE, Brevet, the French Baccalauréat oral and written, French as a foreign language, professional French: I have supported these paths for over ten years. That breadth helps me adapt my method to each student, whatever their age, school system or goal.",
    ctaTitle: "Like to talk it through?",
    ctaButton: "Get in touch",
  },

  contactPage: {
    meta: {
      title: "Contact",
      description:
        "Book a French lesson in London with Solène Lanza. Private lessons, in person or online.",
    },
    eyebrow: "Contact",
    title: "Book a lesson",
    intro:
      "Tell me about your project, for you or for your child. The more you tell me, the better I can prepare my reply. Only the email is required.",
    form: {
      legendProject: "Your project",
      legendContact: "Your details",
      courseLabel: "Course of interest",
      coursePlaceholder: "Select a course",
      courseOther: "Other / not sure yet",
      levelLabel: "Student's level or school year",
      levelPlaceholder: "e.g. Year 9, Year 5, adult beginner…",
      formatLabel: "Preferred format",
      formatEither: "No preference",
      formatInPerson: "In person",
      formatOnline: "Online",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      emailRequired: "An email address is required.",
      emailInvalid: "Invalid email address.",
      messageLabel: "Your message",
      messagePlaceholder:
        "Tell me about the goals, the current level, your availability…",
      submit: "Send my enquiry",
      submitting: "Sending…",
      reassurance: "Solène will reply within 24 to 48 hours by email.",
      missingPrefix: "You can send it right now. By also adding ",
      missingSuffix: ", Solène will be able to prepare a better reply.",
      missing: {
        course: "the course",
        name: "your name",
        level: "the student's level",
      },
    },
    success: {
      title: "Enquiry sent!",
      body: "Thank you! Your enquiry has been sent. Solène will reply within 24 to 48 hours by email.",
      summaryTitle: "Summary",
      labelCourse: "Course",
      labelFormat: "Format",
      again: "New enquiry",
    },
    errors: {
      generic: "Something went wrong. Please try again.",
      network: "Could not reach the server. Please check your connection.",
      captcha: "Anti-bot verification failed. Please try again.",
    },
  },

  notFound: {
    eyebrow: "Page not found",
    title: "404",
    text: "Oops! This page doesn't exist or has been moved.",
    homeButton: "Back to home",
    coursesButton: "See the courses",
  },
};
