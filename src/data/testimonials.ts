/* =========================================================================
   [À RELIRE] : témoignages fournis par Solène (verbatim, légèrement édités).
   Attribution en descripteur neutre ; à remplacer par prénom + initiale réels
   une fois l'accord de chaque parent confirmé.
   ========================================================================= */

export interface Testimonial {
  readonly id: string;
  readonly fr: { readonly quote: string; readonly author: string };
  readonly en: { readonly quote: string; readonly author: string };
}

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: "lycee-francais",
    fr: {
      quote:
        "Solène a accompagné ma fille sur plusieurs années, et notamment au moment charnière du passage de l'école primaire britannique au collège, au sein du Lycée Français de Londres. Attentionnée et patiente, Solène a su transmettre à ma fille son amour de la littérature.",
      author: "Maman d'Anouk qui rentre en sixième",
    },
    en: {
      quote:
        "Solène supported my daughter over several years, and especially at the pivotal moment of moving from British primary school to secondary school at the Lycée Français de Londres. Attentive and patient, Solène was able to pass on to my daughter her love of literature.",
      author: "Anouk's mother, who is starting Year 7",
    },
  },
  {
    id: "deux-enfants",
    fr: {
      quote:
        "Solène a été la professeure de français de mes deux enfants pendant un an, avant que nous quittions Londres. Ils avaient alors 5 et 7 ans et étaient scolarisés dans le système britannique ; nous sentions, avec mon mari, qu'il était temps d'intégrer le français académique à leur cursus. Nous avons fait appel à Solène, qui nous était recommandée par des amis pour sa pédagogie ludique, son approche couvrant bien tous les fondamentaux et sa douceur naturelle. Les enfants l'ont tout de suite adoptée et se réjouissaient chaque semaine de leur cours de français. Je la recommande les yeux fermés : efficace, rigoureuse, ponctuelle et aimée des enfants, c'est une superbe professeure de français.",
      author: "Maman de Gaspard et Constance avant leur arrivée au Lycée Français",
    },
    en: {
      quote:
        "Solène was the French teacher of my two children for a year, before we left London. They were 5 and 7 at the time and were in the British system; my husband and I felt it was time to bring academic French into their education. We turned to Solène, recommended to us by friends for her playful teaching, her approach that covers all the fundamentals, and her natural gentleness. The children took to her straight away and looked forward to their French lesson every week. I recommend her without hesitation: effective, rigorous, punctual and loved by children. She is a wonderful French teacher.",
      author: "Mother of Gaspard and Constance, before they joined the Lycée Français",
    },
  },
];
