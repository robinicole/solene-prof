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
  {
    id: "helene-trois-enfants",
    fr: {
      quote:
        "Mes trois enfants suivent des cours de français avec Solène depuis de nombreuses années. Solène est dynamique, positive, bienveillante et très patiente. Elle adapte ses méthodes d'enseignement à chaque enfant. Elle est également très cultivée et a transmis sa passion pour la littérature à mes enfants. Grâce à elle, leur transition du système éducatif anglais au système éducatif français s'est faite en douceur. Merci Solène !",
      author: "Maman de trois enfants au Lycée Français",
    },
    en: {
      quote:
        "My three children have been taking French lessons with Solène for many years. Solène is dynamic, positive, caring and very patient. She adapts her teaching methods to each child. She is also very cultured and has passed on her passion for literature to my children. Thanks to her, their transition from the English education system to the French one happened smoothly. Thank you, Solène!",
      author: "Mother of three children at the Lycée Français",
    },
  },
  {
    id: "stephanie-adulte",
    fr: {
      quote:
        "J'ai adoré apprendre le français avec Solène — c'est une professeure formidable ! À mes débuts avec elle, j'avais un niveau de conversation très basique et hésitant, rouillé depuis mon GCSE, faute de pratique en dehors des vacances. Lorsque j'ai rencontré mon compagnon français, il m'a semblé important de renouer avec la langue et de progresser pour échanger plus aisément avec sa famille lors des réunions. Chaque semaine, Solène m'a aidée à enrichir mon vocabulaire, à perfectionner ma grammaire et à parler français « comme une Française » ! Les séances mêlaient harmonieusement conversation, exercices, expression écrite et lecture. Son approche était très créative, patiente face à ma progression et toujours attentive à mes besoins propres. Je recommande vivement Solène, une professeure de français exceptionnelle !",
      author: "Adulte renouant avec le français",
    },
    en: {
      quote:
        "I loved learning French with Solène — she is a fantastic tutor! When I first started working with her, I had a very basic, broken conversational level of French, very rusty from my GCSE days, with limited practice unless I was on holiday. When I met my French partner, it felt important to reconnect with the language and advance my French so I could converse more fluently with his family at gatherings. Solène supported me every week to expand my vocabulary, perfect my grammar and speak French 'like a French person'! Sessions involved a great balance of talking, worksheets, written practice and reading. She was so creative in her approach, very patient with my progress and very thoughtful in meeting my individual learning needs. I highly recommend Solène as an amazing French tutor!",
      author: "Adult learner reconnecting with French",
    },
  },
  {
    id: "dina-delf",
    fr: {
      quote:
        "Je ne saurais trop recommander Solène ! J'apprends le français avec elle depuis près de deux ans, et les progrès que j'ai accomplis sont incroyables. Grâce à son accompagnement, j'ai réussi l'examen du DELF B1 l'été dernier, et je prépare aujourd'hui le DELF B2 en toute confiance. C'est non seulement une enseignante remarquable, mais aussi une personne avec qui il fait bon apprendre. Ses cours sont vivants, motivants et véritablement amusants, ce qui rend l'assiduité facile et agréable. Elle a un talent remarquable pour expliquer clairement les notions difficiles tout en créant un environnement bienveillant qui renforce la confiance. Son dévouement, ses encouragements et son expertise ont joué un rôle essentiel dans mon apprentissage du français, et je lui en suis profondément reconnaissante. Je la recommande de tout cœur à quiconque cherche une professeure de français exceptionnelle.",
      author: "Adulte, DELF B1 obtenu et en préparation du B2",
    },
    en: {
      quote:
        "I cannot recommend Solène highly enough! I have been learning French with her for almost two years, and the progress I have made has been incredible. Thanks to her guidance, I successfully passed the DELF B1 exam last summer, and I am now preparing for the DELF B2 with confidence. She is not only an outstanding teacher but also a wonderful person to learn with. Her lessons are engaging, motivating and genuinely fun, which makes it easy to stay committed and enjoy the learning process. She has a remarkable ability to explain difficult concepts clearly while creating a supportive environment that builds confidence. Her dedication, encouragement and expertise have played a huge role in my French-learning journey, and I am truly grateful for her support. I wholeheartedly recommend her to anyone looking for an exceptional French teacher.",
      author: "Adult learner — passed DELF B1, preparing DELF B2",
    },
  },
  {
    id: "bella-gcse",
    fr: {
      quote:
        "Solène est une professeure formidable qui a aidé ma fille aînée de façon inestimable. Bien que le français soit sa troisième langue, elle a obtenu, avec l'aide de Solène, un 9 au GCSE dès la Year 10. Solène a également beaucoup aidé ma deuxième fille pendant les vacances. Ses talents pédagogiques remarquables et sa chaleur humaine ont durablement marqué toute notre famille.",
      author: "Papa d'une élève ayant obtenu un 9 au GCSE de français",
    },
    en: {
      quote:
        "Solène is a fantastic tutor who helped my eldest daughter immeasurably. Even though French was her third language, with Solène's help she obtained a grade 9 at GCSE in Year 10. Solène was also very helpful teaching my middle daughter during holiday periods. Her brilliant teaching skills and warm manner left a lasting impression on our entire family.",
      author: "Father of a student who achieved a grade 9 in GCSE French",
    },
  },
  {
    id: "gabrielle-systeme-anglais",
    fr: {
      quote:
        "Notre fille est en Year 4 dans le système anglais et prend des cours de français avec Solène depuis plus de trois ans : d'abord en cours collectifs à deux, puis en individuel depuis cette année. Solène a réussi à construire une relation de confiance avec elle, qui est toujours ravie d'assister aux cours. L'ambiance est joyeuse et néanmoins studieuse, et notre fille progresse bien en français. J'apprécie aussi particulièrement la fiabilité de Solène !",
      author: "Maman d'une élève du système anglais (Year 4)",
    },
    en: {
      quote:
        "Our daughter is in Year 4 in the British system and has been taking French lessons with Solène for over three years — first in small group lessons of two, then individually since this year. Solène has managed to build a relationship of trust with her, and she is always delighted to attend her lessons. The atmosphere is cheerful yet studious, and our daughter is making good progress in French. I also particularly appreciate Solène's reliability!",
      author: "Mother of a Year 4 pupil in the British system",
    },
  },
  {
    id: "philippe-lfcg",
    fr: {
      quote:
        "Solène enseigne le français à mes deux enfants, qui vivent à Londres, depuis 2020. Les enfants adorent travailler avec elle : elle a su devenir leur complice tout en leur enseignant le français à l'oral et surtout à l'écrit, grammaire, conjugaison et dictées comprises, pour bien acquérir les bases dès le départ. Solène est capable de suivre tous les niveaux de classe. Pour mon aîné, Solène a travaillé avec lui dès le primaire, au niveau CE1, à raison d'une heure par semaine, l'objectif étant de lui permettre d'entrer en sixième au Lycée Français Charles de Gaulle de Londres — ce qui a été le cas grâce à son soutien. Mon fils étant scolarisé dans le système britannique au primaire, Solène a entrepris avec lui le programme du CNED : le français en CM1, puis le programme complet de CM2. Non seulement cela lui a permis d'entrer en sixième au LFCG, mais surtout d'être pleinement au niveau requis. Depuis deux ans, mon fils a même un excellent niveau de français, équivalent à celui qu'il avait acquis en anglais au primaire. Il poursuit ses cours avec Solène une fois par semaine, ce qui lui permet de continuer sa scolarité en français sans aucune difficulté. Je recommande fortement Solène, qui connaît tous les programmes et qui, étant elle-même très littéraire, sait donner aux enfants le goût de la langue française, de façon scolaire mais aussi au-delà, à l'écrit comme à l'oral. Sa culture générale est par ailleurs épatante et vraiment bienvenue pour les enfants. Solène est la complice parfaite des enfants pour progresser en français !",
      author: "Papa de deux enfants au Lycée Français Charles de Gaulle",
    },
    en: {
      quote:
        "Solène has been teaching French to my two children, who live in London, since 2020. The children love working with her: she has become their ally while teaching them French speaking and, above all, writing — grammar, conjugation and dictation included — to build solid foundations from the start. Solène is able to teach every year group. For my eldest, Solène worked with him from primary school, at CE1 level, one hour a week, with the aim of enabling him to enter Year 7 (sixième) at the Lycée Français Charles de Gaulle in London — which he did, thanks to her support. As my son was in the British primary system, Solène undertook the CNED curriculum with him: French at CM1 level, then the complete CM2 programme. Not only did this allow him to enter sixième at the LFCG, but, importantly, to be fully at the required level. For two years now, my son has had an excellent level of French, equivalent to the level he had reached in English at primary school. He continues his lessons with Solène once a week, which allows him to pursue his French schooling without any difficulty. I strongly recommend Solène, who knows all the curricula and who, being very literary herself, knows how to give children a taste for the French language — academically but also beyond, in writing and speaking. Her general knowledge is also wonderful and truly welcome for the children. Solène is the perfect ally for children to progress in French!",
      author: "Father of two children at the Lycée Français Charles de Gaulle",
    },
  },
  {
    id: "kalina-anglophone",
    fr: {
      quote:
        "Les cours de Solène sont amusants tout en étant structurés et variés. Ma fille a énormément progressé avec seulement une heure par semaine !",
      author: "Maman d'une élève anglophone",
    },
    en: {
      quote:
        "Solène's lessons are fun and, at the same time, structured and varied. My daughter has improved so much with just one hour a week!",
      author: "Mother of an English-speaking pupil",
    },
  },
  {
    id: "anett-famille",
    fr: {
      quote:
        "Solène est une professeure de français captivante, enthousiaste et particulièrement efficace. Mon fils apprend avec elle, en personne comme en ligne, depuis quatre ans, et il attend chaque cours avec impatience. Ses cours sont agréables, interactifs et motivants, ce qui l'a aidé à gagner en confiance et à développer un intérêt durable pour la langue française. Solène est bienveillante, dévouée et toujours ouverte aux retours et aux suggestions. Elle adopte une approche réfléchie et personnalisée, et fournit des comptes rendus complets sur les progrès de ses élèves, afin que les parents soient bien informés et impliqués. Nous sommes extrêmement satisfaits de l'expérience de notre fils et recommandons Solène de tout cœur à quiconque recherche une professeure de français compétente, bienveillante et inspirante.",
      author: "Maman d'un élève (cours en personne et en ligne)",
    },
    en: {
      quote:
        "Solène is an engaging, enthusiastic and highly effective French teacher. My son has been learning with her, both in person and online, for the past four years, and he genuinely looks forward to every lesson. Her classes are enjoyable, interactive and motivating, which has helped him develop both confidence and a lasting interest in the French language. Solène is kind, dedicated and always receptive to feedback and suggestions. She takes a thoughtful and personalised approach to teaching and provides comprehensive updates on her students' progress, ensuring parents are well informed and involved. We have been extremely pleased with our son's experience and would wholeheartedly recommend Solène to anyone seeking a skilled, supportive and inspiring French teacher.",
      author: "Mother of a pupil (in-person and online lessons)",
    },
  },
  {
    id: "agnes-gcse",
    fr: {
      quote:
        "Nous sommes une famille française vivant au Royaume-Uni avec deux filles scolarisées dans le système britannique. Sur les conseils d'amis, nous avons fait appel à Solène pour les accompagner dans l'apprentissage du français, notamment en grammaire, orthographe et expression écrite. Elle a d'abord aidé notre fille aînée à progresser tout en lui donnant confiance en elle. Aujourd'hui, elle accompagne notre plus jeune fille, dont les progrès sont impressionnants. À la rentrée prochaine, Solène préparera également notre aînée à son GCSE de français. Nous sommes ravis de cette collaboration, qui permet à nos filles de maîtriser leur langue maternelle malgré les défis de la vie à l'étranger.",
      author: "Famille française, deux filles dans le système britannique (GCSE)",
    },
    en: {
      quote:
        "We are a French family living in the UK with two daughters attending British schools. On the recommendation of friends, we turned to Solène to support their French learning, particularly in grammar, spelling and written expression. She first worked with our eldest daughter, helping her make great progress while building her confidence. She is now teaching our younger daughter, whose improvement has been truly impressive. Next school year, Solène will also help our eldest prepare for her French GCSE. We are delighted with this collaboration, which is helping our daughters maintain and develop their knowledge of their native language despite the challenges of living abroad.",
      author: "French family, two daughters in the British system (GCSE)",
    },
  },
  {
    id: "elen-anglophone",
    fr: {
      quote:
        "Solène a fait preuve d'un professionnalisme exceptionnel, d'un grand dévouement et d'une véritable passion pour l'enseignement. Ses cours sont toujours bien préparés, stimulants et adaptés aux besoins et aux capacités de chaque enfant. Elle a su créer un environnement d'apprentissage positif et encourageant qui a aidé mes enfants à gagner en confiance comme en aisance en français. Ce qui m'a le plus impressionnée, c'est sa capacité à rendre l'apprentissage agréable tout en maintenant un haut niveau d'exigence. À travers des activités créatives, des conversations et des cours structurés, elle a su éveiller chez mes enfants un réel intérêt pour la langue et la culture françaises. Au-delà de ses excellentes qualités pédagogiques, Solène est joyeuse, patiente, fiable et bienveillante.",
      author: "Maman d'élèves anglophones",
    },
    en: {
      quote:
        "Solène has demonstrated exceptional professionalism, dedication and a genuine passion for teaching. Her lessons are always well-prepared, engaging and tailored to the individual needs and abilities of each child. She has created a positive and encouraging learning environment that has helped my children develop both their confidence and their proficiency in French. What has impressed me most is her ability to make learning enjoyable while maintaining high academic standards. Through creative activities, conversations and structured lessons, she has inspired my children to develop a real interest in the French language and culture. In addition to her excellent teaching skills, Solène is happy, patient, reliable and supportive.",
      author: "Mother of English-speaking pupils",
    },
  },
];
