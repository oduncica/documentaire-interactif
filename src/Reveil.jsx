import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import "./Reveil.css";
import { FaArrowLeft } from "react-icons/fa";
import LanguesDrapeau from "../src/components/LanguesDrapeau";
import { video } from "framer-motion/client";

function Reveil() {
  const revealRef = useRef(null);
  const navigate = useNavigate();
  const [selectedLang, setSelectedLang] = useState("fr");
  const revealInstance = useRef(null);

  useEffect(() => {
    // Détruit l'ancienne instance si elle existe
    if (revealInstance.current) {
      revealInstance.current.destroy();
      revealInstance.current = null;
    }
    if (revealRef.current) {
      // Important : forcer le DOM à ne contenir qu'un seul .slides
      const slides = revealRef.current.querySelectorAll(".slides");
      if (slides.length > 1) {
        // Supprime les slides en trop
        slides.forEach((s, i) => {
          if (i > 0) s.remove();
        });
      }
      // Crée une nouvelle instance
      revealInstance.current = new Reveal(revealRef.current, {
        controls: true,
        progress: true,
        hash: true,
        keyboard: true,
        touch: true,
        embedded: true,
      });
      revealInstance.current.initialize();
    }
    // Nettoyage à l'unmount
    return () => {
      if (revealInstance.current) {
        revealInstance.current.destroy();
        revealInstance.current = null;
      }
    };
  }, [selectedLang]);
  // Traductions (exemple, à compléter)
  const t = {
    fr: {
      retour: "Chambre",
      slides: [
        // Objet Reveil Passé
        {
          img: "/examen-1.png",
          imgCredit: `Classe de terminale, 2020 “L’éducation en Corée du Sud” © Korea's Owls`,
          title: "L’examen qui détermine une vie : Le Seungeung",
          text: `Connu sous le nom de "examen de la fin du secondaire" en Corée du Sud, est un événement majeur dans la vie des étudiants. Il représente non seulement un test de compétences académiques, mais aussi un <b> rite de passage social </b> qui détermine souvent l'avenir universitaire et professionnel des jeunes.

L'examen intense de <b> huit heures </b>, qui teste diverses matières, est le résultat de plusieurs années de préparation rigoureuse. C'est un moment décisif pour les étudiants, qui se retrouvent sous une pression immense pour réussir.`,
        },
        {
          img: "/examen-2.png",
          imgCredit: `Les élèves plus jeunes encouragent les lycéens alors qu’ils se rendent, ce jeudi, à l’examen d’entrée à l’université, déterminant pour leur avenir. Comme à l’accoutumée, la police a assuré l’escorte des candidats en retard. © Elise Hu/NPR`,
          // title: "L’examen qui détermine une vie : Le Seungeung",
          text: `Le jour de l'examen, les rues sont presque désertes, car même les bureaux et magasins ajustent leurs horaires pour permettre à tout le monde de se concentrer sur cet événement. 
          
          L'État déploie également des mesures de soutien, comme des augmentations du nombre de transports publics pour faciliter les déplacements des candidats et des policiers qui régulent la circulation pour éviter tout retard.

L'examen Seungeung n'est pas seulement une épreuve académique, il incarne toute <b> une culture où l'éducation et la réussite sont perçues comme des clefs essentielles pour accéder à un avenir meilleur. </b>`,
        },
        {
          img: "/examen-3.png",
          imgCredit: `Des parents prient pour la réussite de leurs enfants dans un temple à Séoul. © Ed Jones/AFP/Getty Images`,
          text: `L’intensité de l'examen Seungeung en Corée du Sud porte l’empreinte d’un passé où l'éducation a toujours été perçue comme le moyen ultime de réussite sociale.
          
          Depuis des siècles, la culture coréenne valorise le travail acharné et la discipline, des valeurs transmises de génération en génération.

Dans un pays où l’histoire a souvent été marquée par des bouleversements, de la guerre à la division, l’éducation a été vue comme un levier pour garantir un avenir plus stable. Aujourd'hui, cette vision est toujours présente, car les étudiants, encore soumis à une pression intense pour réussir, héritent de l’idée que leur avenir dépend largement de leur performance à cet examen.`,
        },
        // Objet cassette passé
        {
          img: "/punition.png",
          // video:
          //   "https://www.youtube.com/clip/UgkxmdPG5b_BnE4_9W6_adK2qyVsunmOvPVN",
          imgCredit: `Our Twisted Hero (우리들의 일그러진 영웅), Park Jong-won, 1992.  
          
          Source : YouTube`,
          title:
            "La culture réglementaire dans l’éducation à travers le cinéma sud-coréen",
          text: `La culture réglementaire dans l’éducation est un sujet souvent représenté dans le cinéma sud-coréen, notamment dans de grands films cultes : Yalkae, A joker in high school (고교얄개,1976), Our Twisted Hero (우리들의 일그러진 영웅, 1992) ou encore Friend (친구, 2001),  ces œuvres cinématographiques nous permettent de nous faire une image de la culture réglementaire de cette époque, et parfois à travers des scènes très marquantes. Par exemple, cet extrait est issu du film Our Twisted Hero (1992) et raconte l’histoire d’un jeune écolier entre les années 50 à 60. Dans cette scène, on assiste à un châtiment corporel de la part d’un professeur, à l’encontre d’un élève qui a triché à un contrôle, une punition  commune à l’époque, mais qui nous parait très violente aujourd’hui.`,
        },
        {
          img: "/cinema-2.png",
          imgCredit: `Affiche du film Friend (친구, 2001) 
          
          Source : Wikipédia`,
          title: "Reprise des propos des intervenants dans la séquence",
          text: `Dans cette interview, on découvre les réactions de personnes issues de différentes générations — 21 ans, 30 ans, 53 ans — face à une séquence culte du film Friend (2001), dans laquelle des lycéens se font gifler par un surveillant. Cette scène, à la fois choquante et évocatrice, ravive chez certains des souvenirs douloureux d’une “époque infernale”, marquée par la banalisation des châtiments corporels dans les établissements scolaires. Pour les plus âgés, elle fait écho à une réalité vécue, tandis que les plus jeunes la perçoivent avec un mélange d’incrédulité et de distance historique. Ce contraste générationnel met en lumière l’évolution des mentalités et de la culture réglementaire dans le domaine de l’éducation, soulignant à quel point les normes disciplinaires ont profondément changé au fil du temps.`,
        }, // Objet Uniforme passé
        {
          img: "/soldats-uniformes.png",
          imgCredit: `Williams, Hanson A., Jr. (1952), Three South Korean students posing by a car, Pepperdine University Special Collections and University Archives,URL `,
          title: "L’uniforme : un symbole historique",
          text: `Dans la Corée du Sud des années 1980, l’uniforme scolaire est bien plus qu’un simple code vestimentaire : il s’inscrit dans un système éducatif profondément influencé par l’autoritarisme d’État, hérité de la période post-guerre et de la dictature militaire (notamment sous Park Chung-hee et Chun Doo-hwan). À cette époque, l’école est envisagée comme un lieu de formation du citoyen modèle, au service de la nation. L’uniforme, imposé dès le collège, matérialise cette volonté de normalisation des comportements et de neutralisation des individualités. Il devient un symbole de conformité, de discipline collective et de respect de l’autorité.

Les vêtements sont standardisés à l’échelle nationale : chemise blanche, blazer foncé, jupe plissée pour les filles, pantalon droit pour les garçons. Le port de l’uniforme est strictement encadré par le ministère de l’Éducation, qui impose également un calendrier précis selon les saisons (hiver/été). Dans les discours officiels, l’uniforme est censé favoriser l’égalité entre les élèves et empêcher la compétition vestimentaire. Mais dans la pratique, il s’agit surtout de canaliser la jeunesse, jugée potentiellement instable dans une société marquée par de fortes tensions politiques, sociales et économiques.`,
        },
        {
          img: "/uniforme-2.png",
          imgCredit: `Williams, Hanson A., Jr. (1952), Class in session, Pepperdine University Special Collections and University Archives, URL
`,
          // title: "The uniform",
          text: `Chaque élément de la tenue scolaire est minutieusement codifié. Il ne s’agit pas simplement d’une obligation de porter un uniforme, mais d’un contrôle exhaustif de l’apparence. Les écoles imposent des modèles validés par les rectorats, et le moindre écart est réprimandé.

Chez les filles, la jupe doit descendre strictement jusqu’au niveau du genou. La moindre tentative de raccourcissement — geste souvent interprété comme une volonté d’autonomie ou de séduction — est immédiatement sanctionnée. Les garçons portent un pantalon droit, sans fioriture, coupé dans un tissu sombre. Les vêtements doivent être bien repassés, sans pli excessif, et les chemises parfaitement boutonnées. Les chaussures doivent être entières noires, sans semelles compensées ni marques visibles. Les lacets doivent être noués de manière réglementaire. Les chaussettes sont également normalisées : blanches ou noires unies, sans motifs, dentelles ou couleurs vives. La tenue comprend parfois des accessoires imposés comme une cravate, un insigne d’école ou un brassard de discipline. Tout ajout personnel — badge, broche, ceinture colorée — est considéré comme une infraction. Le port de sacs à dos est également réglementé : taille standard, couleurs neutres, et pas de décoration individuelle.

Cette attention obsessionnelle à la tenue traduit une vision de l’éducation comme domestication des corps, où toute tentative d’individualisation est perçue comme une menace pour l’ordre collectif.`,
        },
        {
          img: "/uniforme-1.jpg",
          imgCredit: `Lycéennes prenant la pose devant leur établissement
Années 1970
Auteur inconnu`,
          // title: "The uniform",
          text: `L’uniforme scolaire dans les années 1980 s’étend à des règles de contrôle physique extrêmement précises, notamment sur les cheveux, les accessoires corporels et l’expression de la féminité.

Les garçons doivent avoir les cheveux courts, souvent coupés au-dessus des oreilles, avec la nuque et le front dégagés. Toute tentative de frange, de coupe stylisée ou d’utilisation de gel est proscrite. Les filles ne peuvent pas porter les cheveux détachés au-delà des épaules. Les cheveux longs doivent être attachés à l’arrière, sans accessoires visibles. Les barrettes colorées ou les élastiques fantaisie sont interdits. Le maquillage est prohibé : aucune trace de fond de teint, rouge à lèvres, eyeliner ou vernis à ongles n’est tolérée. Même un simple baume à lèvres est parfois considéré comme suspect. Les bijoux sont formellement bannis, y compris les boucles d’oreilles discrètes. Les perçages sont réprimandés et, dans certains cas, les enseignants peuvent exiger leur retrait immédiat, sous peine de sanction.

Certaines écoles organisent des contrôles physiques à l’entrée, où des enseignants inspectent la tenue et l’apparence des élèves, parfois à l’aide de règles pour mesurer la longueur des jupes ou des cheveux. Ce contrôle excessif du corps, particulièrement prononcé chez les filles, reflète une vision patriarcale et conservatrice de la jeunesse, où la conformité passe par l’effacement de la sexualité, de la beauté, et du style personnel.`,
        },
        {
          img: "/uniforme-3.png",
          imgCredit: `Une classe de lycéens du lycée Hwanil en 1973. Source : site officiel du lycée Hwanil`,
          // title: "The uniform",
          text: `Le non-respect des règles vestimentaires n’est pas une affaire mineure : il donne lieu à un système de sanctions formalisé, souvent humiliant pour les élèves. Chaque infraction — jupe raccourcie, mèche de cheveux teintée, maquillage visible — peut entraîner une série de punitions codifiées. Les sanctions varient selon les établissements mais suivent une logique commune :

        - Remarques inscrites dans le carnet scolaire, pouvant impacter la réputation de l’élève.
        - Travaux disciplinaires (nettoyage, corvées dans l’école).
        - Présentations humiliantes devant la classe ou l’ensemble de l’établissement.
        - Appels aux parents ou signalement aux autorités éducatives.
        - Dans certains cas extrêmes : exclusion temporaire ou coupe de cheveux imposée.

Pour les élèves, ces contrôles et punitions provoquent des sentiments de honte, de révolte ou de résignation. Si la majorité se conforme, une partie développe des stratégies de contournement : porter des chaussettes à motifs cachés, maquiller très légèrement le visage pour rester "dans la limite", ou modifier discrètement les ourlets. Ce système, bien qu’efficace en termes de discipline, a produit une génération marquée par un rapport ambivalent à l’autorité scolaire : respect mêlé de crainte, obéissance teintée de frustration. Ces expériences continuent aujourd’hui de nourrir les débats sur la liberté individuelle, la pression sociale et le rôle de l’école dans la construction identitaire.`,
        }, //Objet livre passé
        {
          img: "/livre-1.png",
          imgCredit: `Tableau datant de l’époque Chosŏn qui illustre une scène de classe. 
“At Seodang”, Kim Hong-do, 1745-1806
Source : Wikipédia`,
          title:
            "Les différentes influences de la culture réglementaire sud-coréenne ",
          text: `La culture réglementaire dans l’éducation sud-coréenne est fortement influencée par un l’héritage du néoconfucianisme, une philosophie issue des écrits de Confucius (Vème siècle av. J.-C.) et enrichie par des éléments taoïstes et bouddhistes. Introduit par la dynastie Chosŏn (1392-1897), le néoconfucianisme est devenu une idéologie d’État, modélant la société autour de principes comme les relations hiérarchiques harmonieuses et le respect de l’autorité. L’éducation y joue un rôle central : elle est perçue comme un moyen d’atteindre la sagesse et de contribuer au bien-être collectif. Cet héritage persiste dans le système éducatif contemporain, où l’accent est mis sur la méritocratie et la réussite scolaire. Cependant, il est critiqué par les jeunes générations, qui qualifient parfois leur pays de “Hell Chosŏn”, en référence à l’époque féodale considérée comme oppressive. Ce terme reflète leur frustration face à une société perçue comme rigide et inégalitaire.`,
        },
        {
          img: "/livre-2.png",
          video:
            "https://www.youtube.com/clip/UgkxEtL-olFDSGpTLiWz8vksLzyEuclBfKAV",
          imgCredit: `Long thought lost, Tuition (수업료), Choi In-gyu, Bang Han-joon, 1940. Source : YouTube
`,
          // title:
          //   "Long thought lost, Tuition (수업료), Choi In-gyu, Bang Han-joon, 1940. Source : YouTube",
          text: `Le système éducatif sud-coréen actuel résulte également de la longue période d’occupation du pays par la puissance impériale japonaise (1910-1945) : en effet, l’éducation était un levier puissant pour la puissance coloniale, car elle permettait d’assimiler les coréens, par exemple en imposant le japonais comme langue principale, afin de former des individus obéissants. On retrouve l’influence de la colonisation japonaise dans différents éléments de la culture réglementaire sud-coréenne, notamment à travers les uniformes qui ont été introduits durant cette période, ou encore des rituels de début de classe comme le salut collectif envers le professeur, comme on peut le voir sur l’extrait à droite issu d’un film tourné lors de la colonisation japonaise. 


`,
        },
        {
          img: "/livre-2.png",
          imgCredit: `Une classe de lycéens dans les années 70.
Auteur inconnu`,
          // title: "Les études supérieures en Corée du sud",
          text: `La culture réglementaire sud-coréenne est également influencée par la période dictatoriale du pays et son développement industriel : en effet, les dictatures sud-coréennes (1948-1987) ont instauré des structures autoritaires et hiérarchiques. Les régimes de Syngman Rhee (1948-1960) et Park Chung-hee (1963-1979) ont imposé une discipline stricte, promu le respect de l'autorité et renforcé l'obéissance collective. Sous la dictature de Park Chung-hee, la culture réglementaire a été ancrée dans une industrialisation rapide et un contrôle étatique rigoureux, favorisant l'efficacité et la conformité au détriment des libertés individuelles. L’éducation faisait également partie de son plan de modernisation du pays dans les années 70 qui visait à renforcer l’industrialisation du pays.  `,
        },
        // Objet photo
        {
          img: "/photo-1.png",
          imgCredit: `Inscriptions à l’Université de Yonsei à Séoul en 1981.  Photographie exposée au Musée National de l’Histoire Contemporaine. Source : The Korean Times.`,
          title: "Les études supérieures en Corée du sud",
          text: `L’histoire des études supérieures en Corée du sud est étroitement liée à l’évolution du pays au XXème siècle : en effet, après la fin de la colonisation japonaise en 1945, l’éducation est devenue une arme vitale pour permettre au pays de se redresser et un pilier de l’ascension sociale. La Corée étant un pays sans ressources naturelles abondantes, le savoir-faire humain est devenu la richesse première, et c’est ainsi qu’est née cette fièvre de l’éducation qu’on connaît si bien aujourd’hui. 
`,
        },
        {
          img: "/photo-2.png",
          imgCredit: `Université Nationale de Séoul, l’un des établissements les plus prestigieux du pays. Source : Wikipédia.`,
          text: `Les examens d’entrée à l’université, et particulièrement le redouté Suneung, jouent un rôle crucial dans la société sud-coréenne. C’est un mécanisme de tri social : ceux qui les réussissent sécurisent un emploi, un statut social. Les familles investissent énormément d’argent pour envoyer leurs enfants dans une université prestigieuse, renforçant ainsi cette pression académique. Intégrer une grande université est souvent une garantie de succès futur, et parmi les plus reconnues, on retrouve le groupe SKY : Seoul National University, Korea University et Yonsei University. Ces établissements représentent l’élite académique et sont très sélectifs.  `,
        },
        //Objet Calendrier 1980
        {
          img: "/calendrier-1980-1.png",
          imgCredit: `Affiche des années 70 pour un hagwon qui prépare les élèves à l’entrée au lycée. Source : 추억의 편린들
`,
          title:
            "L’histoire des hagwon : l’éducation de l’ombre en Corée du sud : ",
          text: `Les hagwon sont des instituts privés de soutien scolaire. La plupart des élèves sud-coréens s’y rendent après les cours officiels, parfois jusqu’à très tard le soir. On parle alors d’“éducation de l’ombre” : un monde discret, mais tout aussi structuré, qui façonne le paysage éducatif du pays depuis des décennies.

Au XVIIe siècle, les premières formes de hagwon apparaissent en Corée. On y apprend à lire, à écrire, et à faire de simples calculs. Mais c’est au XXe siècle que le phénomène prend véritablement de l’ampleur. Juste avant l’annexion japonaise (1910–1945), on en compte environ 3 000. La colonisation interrompt leur développement, mais les établissements privés retrouvent leur place dans les années 1960–1970. Ils se multiplient rapidement, et malgré leur coût élevé, restent très prisés par les familles sud-coréennes.
 
`,
        },
        {
          img: "/Calendrier-1980-2.png",
          imgCredit: `Bâtiment abritant de nombreux hagwon à 
Dunsan-dong, Daejeon. Source : Wikipédia.`,
          text: ` En 1970, on compte déjà plus de 1 400 hagwon. Ils deviennent une véritable industrie. Pour tenter de limiter cette fièvre éducative, le président Chun Doo-hwan met en place la réforme de l’éducation 7.3 : seuls les lycéens ayant échoué à l’examen d’entrée à l’université, ainsi que les étudiants en art ou en sport, peuvent fréquenter ces instituts. Sous son mandat, plusieurs examens sont supprimés, les programmes publics sont modifiés, et les attentes éducatives sont revues. Mais en 2000, cette réforme est jugée anticonstitutionnelle, relançant ainsi l’expansion des hagwon.

En 2023, malgré la baisse du nombre d’élèves, les dépenses consacrées à l’éducation privée atteignent un record de 27,1 milliards de wons. Près de 80 % des élèves sud-coréens suivent des cours dans un hagwon. Ce coût, de plus en plus lourd, est souvent pointé du doigt comme l’un des facteurs de la chute du taux de natalité. 
 `,
        },

        // Objet Sac de cours
        {
          img: "/sac-cours-1980-1.png",
          imgCredit: `Un cours d’écriture de caractères chinois à l’époque Joseon. Source : Base de données Dong-A Ilbo.
`,
          title: "L’évolution des matières enseignées au fil des époques : ",
          text: `Les matières enseignées dans les écoles sud-coréennes ont considérablement évolué au fil du temps. Entre la période Joseon (1392–1897) et aujourd’hui, le système éducatif du pays a été profondément influencé par les bouleversements politiques et historiques qu’a connus la Corée.

Sous la dynastie Joseon, l’enseignement était destiné à former les élites à travers les principes du néo-confucianisme, dans le but d’assurer l’ordre et la stabilité du royaume. La mémorisation des classiques chinois et la maîtrise des rites étaient au cœur de la formation intellectuelle.

 
`,
        },
        {
          img: "/sac-cours-1980-2.png",
          imgCredit: `Entraînement militaire dans les années 70. Source : site officiel du lycée Hwanil..`,
          text: `Durant l’occupation japonaise (1910–1945), l’éducation devient un outil d’assimilation impériale. Le japonais s’impose comme langue unique d’enseignement, et les programmes scolaires sont orientés vers des matières modernes telles que l’arithmétique, l’histoire et la géographie, mais vues sous un prisme colonial. La culture coréenne est systématiquement effacée, tandis que l’école devient un espace de préparation à la guerre et de soumission à l’Empire.

Après la Seconde Guerre mondiale, le rejet de cette domination se traduit immédiatement dans les réformes éducatives. La langue coréenne est réintroduite dans les salles de classe, et l’enseignement se recentre sur l’histoire nationale et l’idéologie patriotique. Les cours de défense (교련, gyoyun) militaire deviennent obligatoires au lycée, dans un contexte politique marqué par l’autoritarisme et la guerre froide.
  `,
        },
        {
          img: "/sac-cours-1980-3.png",
          imgCredit: `"Pendant l’Exposition sur l'Éducation du Futur Global 2024, des élèves suivent un cours dans une salle de classe du futur en utilisant la réalité virtuelle.”
Source : Journal de l’éducation Honam. 
`,
          text: `
À partir des années 1990, avec la démocratisation du pays et l’ouverture à la mondialisation, une transition s’opère : on passe d’un modèle basé sur la discipline à une approche plus participative. Les matières se diversifient largement, intégrant les sciences sociales, les technologies de l’information, la pensée critique et des enseignements plus créatifs. L’école tente désormais de former des individus capables de s’adapter à une société en mutation rapide, même si la logique de performance reste toujours très présente.
  `,
        },
        // Objet Journal Intime présent
        {
          img: "/journal-1.png",
          imgCredit: `Graphique comparant le taux de mortalité par suicide entre 2000 et 2019, au niveau mondial et sud-coréen.  Source : UNICEF.`,
          title:
            "Le suicide : la souffrance silencieuse au sein de l’éducation sud-coréenne",
          text: `Le suicide est une des problématiques de santé publique les plus graves de la société sud-coréenne. En effet, la Corée du sud a le taux de suicide le plus élevé des pays de l’OCDE,  avec 14,439 suicides reportés en 2024, et près de 40 suicides par jour. Il s’agit de la cause principale de mortalité chez les adolescents et les jeunes adultes : en 2023, le nombre de suicide chez les écoliers, collégiens et lycéens atteint le nombre de 214, le plus haut jamais enregistré, ayant doublé en 8 ans. Ce mal-être traduit la nécessité de renforcer le soutien psychologique au sein des écoles.

Pour cela, les différents gouvernements qui ont se sont succédés au cours de ces dernières années ont instauré différentes mesures  : on retrouve plusieurs plans quinquennaux entre 2004 et 2023, avec le dernier en date qui a pour but de réduire le taux de suicide de 30 % d’ici 2027. 
`,
        },
        {
          img: "/journal-2.png",
          imgCredit: `Le pont Mapo à Séoul, doté de capteurs et de photos représentant des “petits moments de la vie”, pour empêcher les personnes de suicider. Source : RFI / Frédéric Ojardias
`,
          text: `En 2011, le gouvernement de Lee Myung-bak met en place le “Suicide Prevention Act”. Cette mesure a pour objectif de renforcer la prévention au suicide, avec notamment un suivi des personnes ayant fait une tentative de suicide. 

Mais malgré ces efforts, le monde de l’éducation manque de moyens pour aider efficacement les jeunes qui souffrent.  Parmi les raisons qui poussent les jeunes à mettre fin à leurs jours, on retrouve des problématiques de santé mentale, des conflits familiaux, mais également la pression académique. Cette dernière pèse sur les épaules des sud-coréens dès leur entrée dans le monde éducatif, mais elle est encore plus lourde à la période du lycée, étape charnière pour leur avenir. En effet, les étudiants sud-coréens dédient une partie de leur enfance et adolescence aux révisions, notamment car les parents investissent beaucoup dans leur réussite académique. Les étudiants sud-coréens passent deux fois plus de temps à réviser que les étudiants américains par exemple, et ce notamment après les cours. Cet investissement académique est une cause de stress profond chez les étudiant, pouvant les pousser à commettre l’irréparable. 
 `,
        },
        {
          img: "/journal-3.png",
          imgCredit: `Des enseignants le 4 septembre 2023 suite au suicide de leur collègue. Source : JUNG YEON-JE / AFP
`,
          text: `Mais dans le système éducatif sud-coréen, les élèves ne sont pas les seuls touchés par ce fléau du suicide : les enseignants subissent également une forte pression de la part des parents d’élèves, allant même jusqu’à l’harcèlement. Entre 2015 et 2023, 168 enseignants se sont donné la mort. En été 2023, une jeune institutrice est retrouvée morte dans un placard de salle de classe, provoquant l’émoi de la communauté enseignante. Dans son journal, elle parle de cette souffrance silencieuse qui l’a conduit à passer à l’acte : “j'ai la poitrine trop serrée. Je me sens dépassée par la folie du travail’. Une grève nationale a lieu le 4 septembre 2023, pour dénoncer cette intimidation de la part des parents d’élèves, prêts à tout pour la réussite de leurs enfants. `,
        },
        // Objet Calendrier 2025

        {
          img: "",
          imgCredit: ``,
          title: "Règlementations",
          text: ` <strong>  2001 – Début de l’autonomisation des lycées privés </strong>

Introduction du concept de lycées privés autonomes (자율형 사립고) dans le but de diversifier l'offre éducative et d'accroître l'autonomie des établissements scolaires. Ces lycées bénéficiaient d'une plus grande liberté en matière de gestion administrative, de programmes scolaires et de sélection des élèves, tout en restant soumis aux directives générales du ministère de l'Éducation. 

<strong> Objectifs de la réforme </strong>

Offrir aux élèves des parcours éducatifs variés adaptés à leurs talents et intérêts.
Encourager l'innovation pédagogique et l'excellence académique au sein des établissements.
Donner plus de responsabilités aux établissements pour répondre aux besoins spécifiques de leur communauté.

<strong> Évolution et impact </strong>

Initialement, le nombre de lycées privés autonomes était limité, mais leur succès a conduit à une expansion progressive. Cependant, ces établissements ont également été critiqués pour avoir accentué les inégalités sociales, en raison de frais de scolarité plus élevés et de processus de sélection compétitifs. En 2019, le gouvernement sud-coréen a annoncé un plan visant à transformer ces lycées en écoles générales d'ici 2025, afin de promouvoir l'équité dans l'éducation.


`,
        },
        {
          img: "",
          imgCredit: `
`,
          text: ` <strong> 2006 – Imposition d'un couvre-feu pour les instituts privés (hagwon) </strong>

En septembre 2006, les autorités éducatives sud-coréennes ont révisé la « Loi sur l'établissement et l'exploitation des instituts d'enseignement privé et des leçons parascolaires » (학원의 설립·운영 및 과외교습에 관한 법률) pour permettre aux bureaux régionaux de l'éducation d'imposer des restrictions sur les horaires d'ouverture des hagwon. Cette révision visait à réduire la dépendance à l'enseignement privé et à alléger la charge des élèves. La loi a renforcé les pouvoirs des bureaux municipaux et provinciaux de l'éducation en matière de réglementation des hagwon. 

À partir de cette révision, plusieurs provinces ont commencé à imposer un couvre-feu à 22h pour les hagwon. Cependant, l'application de cette mesure variait selon les régions, certaines autorités locales ayant modifié le couvre-feu au fil du temps.

<strong> Objectifs de la réforme </strong>

Limiter les heures d'étude pour permettre aux élèves de se reposer davantage.
Réduire la dépendance à l'enseignement privé coûteux.
Favoriser le bien-être des élèves en limitant les heures d'étude nocturnes.

<strong> Évolution et impact </strong>

Des études ont montré que l'imposition du couvre-feu n'a pas entraîné une réduction significative des dépenses ou du temps consacré au tutorat privé, avec des résultats hétérogènes selon le niveau scolaire et le statut socio-économique.

En réponse à ces restrictions, certains hagwon ont ajusté leurs horaires, en ajoutant des cours le week-end. D'autres parents ont cherché des tuteurs privés pour remplacer les cours annulés. Malgré les restrictions, certaines institutions ont continué à fonctionner au-delà des heures autorisées, contournant ainsi les réglementations.
 `,
        },
        {
          img: "",
          imgCredit: `
`,
          text: ` <b> 2008 – Lancement des lycées Meister (마이스터고) </b>

En 2008, le gouvernement sud-coréen, sous l'administration du président Lee Myung-bak, a annoncé la création des lycées Meister (마이스터고), inspirés du modèle allemand des écoles professionnelles. Cette initiative visait à revitaliser l'enseignement professionnel secondaire en réponse à la désaffection croissante pour les lycées professionnels traditionnels et à la pénurie de main-d'œuvre qualifiée dans certains secteurs industriels.

Le plan prévoyait la transformation de 50 lycées professionnels existants en lycées Meister, avec une mise en œuvre progressive à partir de 2010. Ces établissements devaient offrir une formation spécialisée en étroite collaboration avec les industries, afin de répondre aux besoins spécifiques du marché du travail.

<b> Objectifs de la réforme </b>

Adapter les programmes scolaires aux compétences recherchées par les entreprises.
Assurer une transition réussie des élèves vers le marché du travail.
Changer la perception sociale négative associée aux filières professionnelles.

<b> Évolution et impact </b>

Les lycées Meister ont connu une expansion rapide, avec 21 établissements opérationnels dès 2010 et 54 en 2022. Entre 2013 et 2017, ces écoles ont affiché des taux d'emploi supérieurs à 90 % pour leurs diplômés, démontrant leur efficacité en matière d'insertion professionnelle.

Cependant, des études ont soulevé des questions sur la rentabilité de ces établissements par rapport aux lycées professionnels traditionnels, en raison de coûts de fonctionnement plus élevés

 `,
        },

        {
          img: "",
          imgCredit: `
`,
          text: ` <b> 2009 – Généralisation des lycées privés autonomes </b>

En 2009, le gouvernement sud-coréen a lancé un plan ambitieux visant à établir 100 lycées privés autonomes (자율형 사립고) d'ici 2010. Ces établissements bénéficiaient d'une plus grande liberté en matière de sélection des élèves et de programmes, tout en restant soumis à certaines directives du ministère de l'Éducation. L'objectif était de diversifier l'offre éducative et de promouvoir l'excellence académique.

<b> Évolution et impact </b>

Malgré les intentions initiales, les lycées privés autonomes ont rencontré des difficultés pour attirer suffisamment d'élèves. Par exemple, à Séoul, 11 des 26 lycées de ce type avaient moins de candidats que de places disponibles en 2011. Cette situation a suscité des critiques quant à l'efficacité de cette politique éducative. Des mesures d'urgence ont été introduites, telles que l'élargissement des critères de sélection, mais avec peu d'effet. Des appels ont été lancés pour revoir ou annuler cette politique

 `,
        },

        {
          img: "/calendrier-2025.png",
          imgCredit: `Séoul
Image libre de droit | Pexels
Par Paul Bill`,
          title: "",
          text: `

<b> 2009 – Renforcement du couvre-feu pour les hagwon </b>

En 2009, les autorités éducatives sud-coréennes ont renforcé les restrictions sur les horaires d'ouverture des hagwon, interdisant les cours après 22h. Cette mesure visait à réduire la dépendance à l'enseignement privé et à alléger la charge des élèves. Des sanctions strictes ont été mises en place pour les contrevenants, et des récompenses financières ont été offertes aux citoyens signalant des violations.

<b> Évolution et impact </b>

Malgré les restrictions, de nombreux hagwon ont contourné les règles en ajoutant des cours le week-end ou en proposant des sessions privées. Certains parents ont également cherché des tuteurs privés pour compenser les heures perdues. En octobre 2009, la Cour constitutionnelle a statué que le couvre-feu ne violait pas les droits fondamentaux, soulignant l'importance du sommeil pour la santé des élèves.
`,
        },

        // Objet uniforme 2025

        {
          img: "/uniforme-4.png",
          imgCredit: `Uniformes de lycéennes dans les années 1970
Auteur inconnu.`,
          title: "L’uniforme aujourd’hui : vers un assouplissement ? ",
          text: `En 2025, l’uniforme scolaire reste un élément incontournable du système éducatif sud-coréen, mais sa signification et ses formes ont évolué. Si l’uniforme continue d’incarner des valeurs d’unité et de neutralité, il est désormais perçu comme un marqueur d’appartenance à une école prestigieuse ou à un quartier réputé.

Depuis les années 2000, la Corée du Sud a connu une transformation sociale marquée par une montée en puissance de la consommation, de l’individualisme modéré et de la reconnaissance des droits des élèves. En conséquence, les règles autrefois rigides sur le port de l’uniforme ont progressivement été assouplies, notamment sous l’effet de la pression des parents, des médias et de la jeunesse elle-même.

Les écoles permettent aujourd’hui plus de flexibilité : les élèves peuvent choisir entre plusieurs modèles homologués (version été/hiver, jupe ou pantalon, manches courtes ou longues). Certaines institutions autorisent même les jours "libres" où le port de l’uniforme n’est pas exigé. Mais malgré ces évolutions, l’uniforme reste encadré par des règlements internes propres à chaque établissement, qui conservent des exigences en matière d’apparence et de tenue, même si elles sont moins strictes qu’en 1980.
`,
        },
        {
          text: `Depuis les années 1980, les élèves sud-coréens ont conquis un espace d'expression individuelle dans un cadre encore structuré. Le tournant a lieu à partir des années 2010, où les débats sur le bien-être des élèves, le harcèlement scolaire et la liberté d’expression ont contribué à repenser la rigidité du modèle éducatif.

En 2025 :

- Les filles peuvent porter des pantalons au lieu des jupes, ce qui n’était pas permis en 1980.
- Les garçons peuvent adopter des coiffures plus longues, tant qu’elles restent "soignées".
- Le port de baskets blanches ou noires est autorisé dans la majorité des établissements, pour plus de confort.
- Le maquillage discret (fond de teint léger, baume teinté, sourcils) est toléré, bien qu’encadré.

Les élèves peuvent également porter des vestes personnalisées à l’effigie de leur école, achetées en ligne ou via des fournisseurs privés, mêlant identité scolaire et style personnel. Ce phénomène traduit l’essor d’un "marché de l’uniforme", où la discipline se conjugue avec le marketing et le goût du design.

Ainsi, le rapport à l’uniforme s’est renversé : d’un outil de neutralisation de l’individu, il devient parfois un espace de distinction et de revendication esthétique, dans les limites du cadre scolaire. 
 `,
        },
        {
          img: "/uniforme-6.png",
          imgCredit: `Image libre de droit | Pexels
Par Nguyễn Nguyên
`,
          text: `L’un des changements les plus visibles depuis les années 1980 concerne la régulation de l’apparence corporelle. Alors qu’auparavant, la moindre teinte de cheveux ou trace de maquillage donnait lieu à des sanctions, les établissements adoptent aujourd’hui des approches plus nuancées.

Les cheveux teints dans des tons naturels (brun, châtain clair) sont désormais largement acceptés, bien qu’interdits dans certaines écoles publiques plus conservatrices. Les coupes sont plus variées et souvent inspirées de la culture K-pop, tout en restant dans des limites de "propreté" visuelle.

Le maquillage discret est toléré, notamment chez les élèves du lycée, à condition qu’il reste sobre (interdiction du rouge à lèvres vif ou des faux cils, par exemple).
Les accessoires minimalistes sont également autorisés : une montre, des boucles d’oreilles simples, un bandeau discret.
Ces tolérances visent à réduire les conflits enseignants-élèves, favoriser le bien-être et respecter le droit à l’identité, tout en maintenant une forme de cohésion. Toutefois, elles varient fortement selon les établissements : les lycées privés élitistes ou conservateurs continuent d’imposer des normes plus strictes. `,
        },

        {
          img: "/uniforme-5.png",
          imgCredit: `Photo fournie par le lycée de langues étrangères de Gyeonggi au journal Newsis 
photo@newsis.com
URL : https://mobile.newsis.com/view/NISX20130708_0012212002#_PA 

`,
          text: `Malgré un net assouplissement depuis les années 1980, le port de l’uniforme reste un outil de régulation sociale, et les règles associées sont rarement remises en question par les institutions. Les sanctions existent toujours, même si elles sont moins humiliantes qu’autrefois :

- Remarques écrites dans le dossier scolaire,
- Avertissements oraux,
- Réunions avec les parents,
- Dans certains cas, obligation de racheter un uniforme conforme.

Ce qui a changé, c’est la nature du rapport entre les élèves et les règles. On observe une montée des espaces de dialogue, où les conseils d’élèves participent parfois aux décisions sur l’uniforme. De plus, les jeunes Coréens utilisent les réseaux sociaux pour exprimer leurs revendications et dénoncer les abus.

Mais derrière cette image plus libérale, les normes implicites restent fortes : les filles continuent de subir des pressions sur leur tenue ou leur maquillage, et les élèves qui sortent trop des cadres attendus peuvent être marginalisés.
En somme, l’uniforme de 2025 traduit une société en tension entre modernisation et tradition, liberté individuelle et pression collective, contrôle institutionnel et stratégies d’appropriation. `,
        },

        // Objet pelluche 2025

        {
          img: "/peluche-1.png",
          imgCredit: `The Teacher and his country school, 1900. 
Source : lhan New, “When I was a boy in South Korea”, 1928.
`,
          title: "La culture réglementaire dès le plus jeune âge",
          text: `La culture réglementaire dans l’éducation sud-coréenne commence très tôt : dès leurs premiers jours de classe, les écoliers se lancent dans la course à la réussite, la concurrence s’installe et il faut toujours faire mieux que son camarade. 

Cette période est importante car on leur inculque différentes règles et normes sociales à respecter   : par exemple, les repas collectifs sont une manière d’apprendre aux enfants les bonnes manières à table, le tout dans un environnement où le collectif prime sur l’individu, et ceux dès la petite enfance. Ainsi, les enfants sud-coréens ont conscience que le respect des règles est essentiel pour le bon fonctionnement du groupe. 
 `,
        },
        {
          img: "/peluche-2.png",
          imgCredit: `Des enfants sud-coréens suivent des cours privés à l'académie Jongno Hagwon, le 10 août 2016 à Séoul. ©AFP - YELIM LEE / AFP
`,
          text: `On les habitue également à la mémorisation : l’éducation sud-coréenne accorde beaucoup d’importance au fait d’apprendre par cœur une grande quantité de connaissances, au profit parfois de la créativité individuelle, même si cet aspect est en nette amélioration aujourd’hui comme on peut le voir à travers les entretiens. Les enfants sud-coréens sont envoyés dès l’âge de 4 ans dans les hagwon : ils sont ainsi éduqués à étudier après l’école (gwaweo, “études en dehors de l’école”), pendant de longues heures, à se réveiller tôt et à dormir tard. 

Comme l’explique Martine Prost, spécialiste de la société sud-coréenne, “habitués depuis l'enfance à étudier avec ardeur et sans relâche, les Coréens, sont, à l'âge adulte, capables de s'adapter à des conditions de travail nettement plus contraignantes que les nôtres”. `,
        },
        // Objet Ordinateur 2025

        {
          img: "/ordinateur-1.png",
          imgCredit: `Des lycéens jouant dans un PC Bang. Source : committee.co.kr
`,
          title: "la Loi Cendrillon : la réglementation à travers les écrans :",
          text: `Aujourd’hui, la Corée du Sud est l’un des pays les plus connectés du monde, leader mondial dans l’e-sport et l’innovation numérique. Les jeunes sud-coréens baignent alors naturellement dans cette culture numérique. Néanmoins, en 2011, le gouvernement a décidé qu’il était nécessaire de limiter aux plus jeunes le temps passé derrière les écrans : le  20 novembre 2011, l’Etat Sud-Coréen instaure la Shutdow Law, surnommée la “Loi Cendrillon”, qui interdit aux mineurs de moins de 16 ans de jouer à des jeux en ligne, entre minuit et 6 heures du matin. L’objectif derrière cette réglementation est de protéger le sommeil des adolescents et leur santé mentale. 

 `,
        },
        {
          img: "/ordinateur-2.png",
          video: "https://www.youtube.com/watch?v=xKudyIWrv-E",
          imgCredit: `Une animation qui représente bien l’ambiance des PC Bang. Source : YouTube
          // `,
          text: `Mais cette Loi Cendrillon en dit long sur la manière dont la jeunesse est perçue dans la société sud-coréenne : elle doit être contrôlée, surveillée, afin de les formater à leur future vie d’adulte. Les jeux vidéos sont ainsi perçus comme une possible cause d’échec scolaire, et doivent être strictement encadrés. Finalement, la loi est abrogée en 2021, après dix ans de débats : elle est perçue comme irréaliste au vu de l’omniprésence des écrans dans la vie des plus jeunes et facilement contournable par ces derniers. 

Cette loi soulève alors des questions plus profondes : faut-il contrôler la jeunesse au-delà de la sphère scolaire ? Faut-il les limiter même durant leurs moments de liberté ? `,
        },

        // Objet Casque de musique 2025

        {
          img: "/casque-1.png",
          imgCredit: `Une salle typique d’un noraebang. Source : mk.co.kr
`,
          title: "Les loisirs des lycéens en Corée du Sud :",
          text: `Dans un système éducatif où la réussite scolaire est un gage de réussite sociale, les moments de liberté prennent une forme bien particulière. Pour les lycéens sud-coréens, les loisirs existent, mais ils sont souvent encadrés et passent en second-plan pour laisser place aux priorités scolaires. Les journées sont longues et rythmées par le bruit des pages qui tournent , mais entre deux révisions, les lycéens s’accordent des précieux moments de liberté dans des lieux de détente qui font partie intégrante de cette culture adolescente sud-coréenne : par exemple, les karaokés (noraebang), l’endroit idéal pour se défouler et exprimer ses émotions avec ses amis. 
 `,
        },
        {
          img: "/casque-2.png",
          imgCredit: `Un PC Bang. Source : Seoul Insider Guide
`,
          text: `On retrouve également les fameux PC bang, des cybercafés haut de gamme, spécialisés dans le jeu vidéo en réseau : ce lieu est l’espace parfait pour s’évader du contexte scolaire ou familial, on peut y jouer pendant des heures et même consommer de la nourriture. Il sont accessibles jusqu’à tard le soir, mais certains établissements interdisent aux mineurs d’y rester après 22h (voir minuit selon les règles locales). 

Ces lieux constituent des refuges temporaires contre le stress scolaire, et permettent aux lycéens d’oublier les révisions et les règles pendant quelques heures de liberté.
 `,
        },
        //Objet photo 2025

        {
          img: "/photo-3.png",
          imgCredit: `© lightkorea.blogspot.com
`,
          title:
            "Les études supérieures en Corée du Sud : un avenir sous haute tension",
          text: `L’enseignement supérieur en Corée du Sud en 2025 reflète les paradoxes d’un pays à la pointe de l’innovation, mais toujours marqué par une compétition féroce. L’université reste perçue comme le passage obligé vers la réussite sociale. Les grandes écoles comme Seoul National University, Yonsei ou Korea University incarnent des sommets convoités, souvent inaccessibles sans des années de préparation intense.
          
          Malgré la démocratisation de l’accès à l’université depuis les années 1990, les inégalités se creusent. Le recours massif aux instituts privés (hagwons) accentue les écarts entre les familles aisées et les autres. Alors que le nombre d’élèves diminue à cause du vieillissement démographique, les frais de scolarité, eux, restent élevés, et la précarité étudiante devient une réalité de plus en plus visible.
 `,
        },
        {
          img: "/photo-4.png",
          imgCredit: `The Korea Herald 
Korean students sleep just 5.5 hours a day: survey
URL : https://www.koreaherald.com/article/3647929 
`,
          text: `Le système éducatif évolue pourtant. Des filières alternatives émergent : écoles d’ingénierie appliquée, formations hybrides mêlant design, IA et soft skills. L’enseignement devient plus flexible, certains cursus sont disponibles entièrement en ligne, et l’anglais s’impose peu à peu comme langue d’enseignement dans de nombreux programmes internationaux.

Mais cette transformation a ses limites. La pression à la performance reste omniprésente. L’obsession du classement universitaire continue de dicter les choix d’orientation. De nombreux étudiants décrivent leur quotidien comme une course d’endurance, où l’échec n’a pas sa place. La santé mentale devient un enjeu majeur : anxiété, burnout, sentiment d’isolement sont en hausse, dans un environnement où l’on parle peu de vulnérabilité.
 `,
        },
        {
          img: "/photo-5.png",
          imgCredit: `Séoul
Image libre de droit | Pexels
Par Paul Bill
`,
          text: `Mais derrière les chiffres d’admission et les façades vitrées des campus modernes, la vie étudiante se heurte à des contradictions. L’agenda est millimétré, rythmé par les crédits à valider, les examens, les stages, les certifications de langues et les concours. Beaucoup d’étudiant·es vivent loin de leurs familles, dans des logements exigus, cumulant parfois des petits boulots pour subvenir à leurs besoins. Les moments de pause sont rares, et les espaces de respiration encore trop peu valorisés dans une culture où l’efficacité prime sur le lâcher-prise.

À l’image d’une photo en haute définition, l’université sud-coréenne de 2025 montre à la fois une façade de modernité éclatante et des zones d’ombre persistantes. Le défi pour les années à venir ? Réconcilier excellence académique, justice sociale et bien-être individuel.
 `,
        },
        //Sac de cours 2025

        {
          img: "/sac-2025-1.png",
          imgCredit: `Séoul
Image libre de droit | Pexels
Par Paul Bill
`,
          title:
            "Ce que porte un élève en 2025 : vers une école à plusieurs vitesses",
          text: `Le sac à dos d’un élève sud-coréen en 2025 ne contient plus seulement des manuels. Il transporte avec lui des tablettes, des stylos électroniques, des carnets de projets, des écouteurs pour les cours en ligne et, parfois, une batterie externe pour survivre à une journée d’apprentissage connecté. Le numérique s’est imposé comme un outil pédagogique central, avec des plateformes d'exercices interactifs, des manuels numériques et des évaluations en ligne qui rythment désormais le quotidien scolaire.
 `,
        },
        {
          img: "",
          imgCredit: `
`,
          text: `Mais au-delà des outils, ce sont les contenus et les attentes qui ont profondément changé. Si les fondamentaux — mathématiques, sciences, langues — restent incontournables, on voit émerger dans certains établissements des modules d’intelligence émotionnelle, de coopération, de développement durable ou de culture numérique. Des matières naguère considérées comme périphériques deviennent stratégiques dans un monde où l’adaptabilité, la communication et la pensée critique sont des compétences clés.
Cette évolution, cependant, n’est pas homogène. Le contraste est frappant entre les écoles bien dotées, souvent situées dans les quartiers favorisés ou les villes majeures, et celles qui peinent encore à se moderniser. Là où certains élèves apprennent à coder dès le primaire, d’autres doivent partager un seul ordinateur pour toute une classe. Cette fracture technologique renforce des inégalités déjà présentes dans un système où la performance scolaire reste le critère principal de réussite.
 `,
        },
        {
          img: "/sac-2025-2.png",
          imgCredit: `Étudiants étudiant Dans Une Bibliothèque
Image libre de droit | Pexels
Par jason hu
`,
          text: `À cela s’ajoute une pression invisible, mais bien réelle : celle de devoir maîtriser toujours plus de choses, plus tôt, et plus vite. Le sac à dos devient alors le symbole d’une charge mentale croissante, entre attentes académiques, pression sociale et gestion des émotions. Il ne pèse pas qu’en kilos : il pèse en silence, en fatigue, en doutes. Et pourtant, il contient aussi l’espoir d’une école qui commence à s’ouvrir à d’autres formes de savoir, plus humaines, plus inclusives, plus ancrées dans le réel.
 `,
        },
      ],
    },
    kr: {
      retour: "뒤로가기",
      slides: [
        // Objet Reveil Passé
        {
          img: "/examen-1.png",
          imgCredit: `2020년 고등학교 3학년 “대한민국의 교육”
 © Korea's Owls`,
          title: "인생을 좌우하는 시험: 수능 (Suneung)",
          text: `한국에서 "대학수학능력시험(수능)"으로 알려진 이 시험은 학생들의 인생에서 매우 중요한 사건입니다. 이 시험은 단순한 학업 능력 평가를 넘어, 젊은이들의 대학 진학과 직업적 미래를 좌우하는 사회적 통과의례로 여겨집니다.

여러 과목을 평가하는 8시간에 걸친 고강도 시험은 수년간의 치열한 준비 끝에 치러지는 결정적인 순간입니다. 학생들은 이 시험의 성공 여부에 따라 미래가 달라질 수 있다는 부담 속에서, 극심한 압박감을 견디며 시험에 임합니다.`,
        },
        {
          img: "/examen-2.png",
          imgCredit: `어린 학생들은 목요일 아침, 대학 입시를 치르러 가는 고등학생들을 응원합니다. 이 시험은 그들의 미래를 좌우할 만큼 중요한 순간입니다. 예년과 마찬가지로, 경찰은 지각한 수험생들을 위해 에스코트를 제공했습니다.
© Elise Hu/NPR`,
          // title: "L’examen qui détermine une vie : Le Seungeung",
          text: `수능 당일, 거리에는 거의 사람이 없습니다. 심지어 회사와 가게들까지 영업 시간을 조정하며, 모두가 이 중요한 시험에 집중할 수 있도록 배려합니다.

정부는 수험생들의 원활한 이동을 위해 대중교통을 증편하고, 경찰이 교통을 통제해 지각을 방지하는 등 다양한 지원 조치를 시행합니다.

수능은 단순한 학문적 평가가 아니라, 교육과 성공이 더 나은 미래로 가는 핵심 열쇠로 여겨지는 문화 전체를 상징하는 시험입니다.`,
        },
        {
          img: "/examen-3.png",
          imgCredit: `서울의 한 사찰에서 학부모들이 자녀의 수능 합격을 기원하며 기도를 올리고 있습니다.
© Ed Jones/AFP/Getty Images
`,
          text: `한국에서 수능의 강도는, 교육이 사회적 성공을 위한 궁극적인 수단으로 여겨져 온 오랜 역사와 맞닿아 있습니다.

수세기 동안, 한국 문화는 근면과 절제를 중요하게 여겨 왔으며, 이러한 가치들은 세대를 거쳐 전해졌습니다. 전쟁과 분단 등 수많은 격변을 겪은 나라에서, 교육은 보다 안정된 미래를 보장할 수 있는 지렛대로 인식되어 왔습니다.

오늘날에도 이러한 인식은 여전히 뿌리 깊게 남아 있습니다. 학생들은 여전히 극심한 압박 속에서 이 시험을 준비하며, 자신의 미래가 수능 성적에 달려 있다는 믿음을 고스란히 물려받고 있습니다.`,
        },
        // Objet cassette passé
        {
          img: "/punition.png",
          video:
            "https://www.youtube.com/clip/UgkxmdPG5b_BnE4_9W6_adK2qyVsunmOvPVN",
          imgCredit: `우리들의 일그러진 영웅 (1992), 박종원 감독 출처: YouTube`,
          title: "한국 영화 속 교육에서 드러나는 규범 문화",
          text: `교육 속 규범 문화는 한국 영화에서 자주 다뤄지는 주제로, 고교얄개(1976), 우리들의 일그러진 영웅(1992), 친구(2001)와 같은 대표적인 작품들에서 잘 나타납니다. 이러한 영화들은 각 시대의 규율과 교육 환경을 생생하게 보여주며, 때로는 강렬한 장면을 통해 그 문화를 드러냅니다.

예를 들어, 영화 우리들의 일그러진 영웅 (1992)은 1950~60년대를 배경으로 한 초등학생의 이야기를 다룹니다. 해당 장면에서는 시험에서 부정행위를 한 학생에게 교사가 체벌을 가하는 모습이 등장합니다. 오늘날에는 매우 폭력적으로 보이지만, 당시에는 흔히 있던 처벌 방식이었습니다..`,
        },
        {
          img: "/cinema-2.png",
          imgCredit: `영화 친구 (2001) 포스터 출처: 위키백과`,
          title: "장면 속 인물들의 대사 재현 (인터뷰 발언 인용)",
          text: `이 인터뷰에서는 21세, 30세, 53세 등 서로 다른 세대에 속한 사람들이 영화 친구 (2001)의 명장면 중 하나 — 고등학생들이 생활지도교사에게 뺨을 맞는 장면 — 를 보고 보인 반응을 살펴볼 수 있습니다.

충격적이면서도 상징적인 이 장면은 일부에게 “지옥 같던 시절”을 떠올리게 합니다. 당시 학교에서는 체벌이 너무나 당연시되던 현실이 있었기 때문입니다. 연령대가 높은 사람들에게 이 장면은 과거의 실제 경험을 떠올리게 하고, 젊은 세대는 그것을 믿기 어려운 일처럼, 혹은 과거의 이야기로 받아들입니다.

이러한 세대 간 반응의 차이는 교육 내 규범 문화와 징계 방식이 세월이 흐르면서 얼마나 크게 변화했는지를 잘 보여줍니다.`,
        }, // Objet Uniforme passé
        {
          img: "/soldats-uniformes.png",
          imgCredit: `윌리엄스, 한슨 A. 주니어 (1952) 자동차 옆에서 포즈를 취한 세 명의 한국 학생들 출처: 페퍼다인 대학교 특별 컬렉션 및 대학 아카이브 (Pepperdine University Special Collections and University Archives),URL 
`,
          title: "교복: 역사적 상징",
          text: `1980년대 한국에서 교복은 단순한 복장 규정이 아니라, 국가 권위주의 체제의 산물이자 교육 시스템의 핵심 상징 중 하나였습니다. 전쟁 이후의 혼란과 박정희, 전두환 정권 등 군사 독재 시기를 거치며, 학교는 '이상적인 국민'을 양성하는 국가적 공간으로 기능했습니다. 중학교 시절부터 착용이 의무화된 교복은, 개인의 개성을 지우고 집단의 질서를 강조하려는 국가의 의도를 분명히 보여줍니다.

교복의 디자인은 전국적으로 표준화되어 있었습니다. 흰 셔츠, 어두운 색 블레이저, 여학생은 주름치마, 남학생은 일자 바지. 계절별로 교복 전환 시기를 규정하는 교육부의 지침까지 존재했으며, 이 기준은 전국적으로 통일되었습니다.

공식적인 담론에서는 교복이 학생 간의 평등을 조성하고, 외모 경쟁을 방지한다고 주장되었지만, 현실에서는 불안정하다고 여겨진 청소년을 통제하고 억제하려는 장치였습니다. 정치적·사회적 긴장이 심했던 당시, 교복은 국가가 청소년의 행동과 사고방식을 관리하는 상징적인 장벽이었던 셈입니다.`,
        },
        {
          img: "/uniforme-2.png",
          imgCredit: `윌리엄스, 핸슨 A. 주니어 (1952), 수업 중, 페퍼다인 대학교 특별 소장자료 및 대학교 기록보관소. URL

`,
          // title: "The uniform",
          text: `교복의 각 요소는 하나하나 세심하게 규정되어 있다. 단순히 교복을 입는 의무를 넘어, 외모 전체에 대한 철저한 통제를 의미한다. 학교는 교육청에서 승인된 교복 모델을 지정하며, 그 기준에서 벗어나는 모든 행동은 즉각적인 제재를 받는다.

여학생의 경우, 치마 길이는 반드시 무릎까지 내려와야 한다. 치마를 조금이라도 줄이려는 시도는 자율성 혹은 매력 어필의 의도로 간주되어 즉시 처벌 대상이 된다. 남학생들은 장식 없는 어두운 색의 일자 바지를 착용해야 하며, 옷은 항상 잘 다려져야 하고, 셔츠는 단추를 끝까지 채워야 한다. 신발은 완전한 검정색이어야 하며, 굽이 있거나 눈에 띄는 브랜드가 있는 신발은 허용되지 않는다. 신발 끈은 규정에 맞게 깔끔히 묶어야 하며, 양말은 무늬나 레이스, 밝은 색이 없는 검정색 또는 흰색의 단색만 허용된다.

일부 학교에서는 넥타이나 학교 배지, 규율 완장을 포함한 액세서리를 필수로 지정하기도 한다. 뱃지, 브로치, 색 있는 벨트 같은 개인적인 장식은 모두 위반 행위로 간주된다. 가방도 예외는 아니다. 가방은 정해진 크기와 무채색 계열의 색상을 따라야 하며, 스티커나 인형 등 개성적인 장식은 금지된다.

이러한 외적 규율에 대한 강박적인 집착은 교육을 ‘신체의 길들이기’로 보는 시각을 반영한다. 개성을 표현하려는 모든 시도는 집단 질서를 위협하는 행위로 간주된다.`,
        },
        {
          img: "/uniforme-1.jpg",
          imgCredit: `학교 앞에서 포즈를 취하는 여고생들 1970년대 작자 미상`,
          // title: "The uniform",
          text: `1980년대의 교복 규율은 단순한 복장 규정을 넘어, 학생들의 신체와 외모까지 세밀하게 통제하는 수준에 이르렀습니다. 머리 모양, 신체 장신구, 그리고 특히 여성성의 표현에 대한 엄격한 기준이 존재했습니다.

남학생들은 귀를 드러내는 짧은 머리를 요구받았으며, 목덜미와 이마가 노출되어야 했습니다. 앞머리, 유행을 따르는 스타일, 젤 사용 등은 금지되었습니다. 여학생의 경우, 어깨를 넘는 머리는 반드시 뒤로 묶어야 했고, 머리를 푸는 것은 허용되지 않았습니다. 화려한 머리핀이나 장식이 있는 고무줄도 사용이 금지되었습니다.

화장은 전면 금지 대상이었습니다. 파운데이션, 립스틱, 아이라이너, 매니큐어는 물론, 립밤조차 의심을 받을 수 있었습니다. 귀걸이처럼 눈에 띄지 않는 액세서리도 금지되었고, 피어싱은 징계 대상이었습니다. 경우에 따라 교사가 즉시 제거를 요구할 수도 있었습니다.

일부 학교에서는 등교 시 외모 검사를 실시했으며, 교사는 자나 자를 이용해 치마 길이나 머리카락 길이를 측정하기도 했습니다. 특히 여학생을 대상으로 한 이러한 신체 통제는 보수적이고 가부장적인 시각이 반영된 것으로, 청소년기의 성, 아름다움, 개성을 억압함으로써 전체 질서를 유지하려는 교육관을 드러냅니다.`,
        },
        {
          img: "/uniforme-3.png",
          imgCredit: `1973년 환일고등학교의 고등학생 반. 출처: 환일고등학교 공식 웹사이트.`,
          // title: "The uniform",
          text: `복장 규정을 어기는 일은 단순한 사소한 문제가 아니다. 이는 학생들에게 굴욕적인 경우도 있는, 형식화된 징계 시스템으로 이어진다. 치마를 짧게 입거나 염색한 머리카락 한 가닥, 눈에 띄는 화장은 모두 명확히 정해진 처벌을 야기할 수 있다. 각 학교마다 처벌 방식은 다르지만, 공통된 규범에 따라 운영된다:

생활기록부에 기록되는 지적 사항 – 학생의 평판에 영향을 줄 수 있다.
학교 청소나 잡무와 같은 벌칙성 과제 부여.
학급 또는 전교생 앞에서의 공개적인 망신.
학부모 소환 또는 교육청에 보고.
극단적인 경우에는 임시 정학 또는 강제적인 머리 자르기.

학생들에게 이러한 통제와 처벌은 수치심, 반발심, 혹은 체념을 불러일으킨다. 대부분의 학생들은 규정을 따르지만, 일부는 교묘히 이를 회피하려 한다. 예를 들어, 보이지 않는 곳에 무늬 있는 양말을 신거나, 화장을 아주 옅게 해서 ‘경계선 안’에 머무르려는 전략을 구사하기도 한다. 또는 치마의 단을 몰래 조절하기도 한다.
이러한 시스템은 규율 면에서는 효과적일 수 있으나, 학교 권위에 대해 양가적인 태도를 만들어냈다. 존경과 동시에 두려움, 복종과 함께 억눌린 감정이 공존한다. 이러한 경험은 오늘날까지도 개인의 자유, 사회적 압력, 그리고 학교의 정체성 형성 역할에 대한 논쟁을 지속적으로 불러일으키고 있다.`,
        }, //Objet livre passé
        {
          img: "/livre-1.png",
          imgCredit: `조선 시대의 교실 장면을 묘사한 그림 《서당에서 (서당)》, 김홍도, 1745-1806 출처: 위키피디아`,
          title: "한국 규제 문화의 다양한 영향력",
          text: `한국 교육에서의 규제 문화는 유교의 경전(기원전 5세기)에서 비롯되어 도교와 불교적 요소로 풍부해진 철학인 성리학의 유산에 깊은 영향을 받았습니다. 1392년부터 1897년까지 지속된 조선 왕조는 성리학을 국가 이념으로 채택하여 사회를 위계적인 조화와 권위 존중이라는 원칙에 따라 구성하였습니다. 이 안에서 교육은 지혜를 추구하고 공동체의 안녕에 기여하는 수단으로 간주되어 핵심적인 역할을 했습니다.

이러한 유산은 오늘날의 교육 제도에도 여전히 깊이 스며들어 있으며, 특히 성취 중심의 능력주의와 학업 성공에 대한 강조로 이어졌습니다. 그러나 이러한 전통은 젊은 세대 사이에서 점차 비판의 대상이 되고 있습니다. 이들은 대한민국을 종종 “헬조선”이라고 부르며, 억압적이었던 봉건 시대를 떠올리게 한다고 주장합니다. 이 표현은 현대 한국 사회를 경직되고 불평등하다고 느끼는 청년층의 좌절감과 불만을 반영합니다.`,
        },
        {
          img: "/livre-2.png",
          video:
            "https://www.youtube.com/clip/UgkxEtL-olFDSGpTLiWz8vksLzyEuclBfKAV",
          imgCredit: `오랫동안 유실된 것으로 여겨졌던 영화 수업료 (최인규, 방한준, 1940). 출처 : YouTube
`,
          // title:
          //   "Long thought lost, Tuition (수업료), Choi In-gyu, Bang Han-joon, 1940. Source : YouTube",
          text: `현대 한국의 교육 제도는 일본 제국주의의 식민 지배(1910–1945) 시절에도 뿌리를 두고 있습니다. 당시 교육은 식민 정부에게 있어 강력한 동화 수단이었으며, 일본어를 주요 언어로 강제하는 등 순종적인 인재를 양성하기 위한 도구로 사용되었습니다. 이러한 일본 식민 지배의 흔적은 오늘날 한국의 규율 문화 속 여러 요소에서 여전히 발견됩니다. 예를 들어, 이 시기에 도입된 교복 제도나, 수업 시작 전 선생님에게 단체로 인사하는 의례적인 행위 등이 그 예입니다. 이러한 모습은 오른쪽의 일제강점기 촬영 영상 속 장면에서도 확인할 수 있습니다.


`,
        },
        {
          img: "/livre-2.png",
          imgCredit: `1970년대 고등학생들의 교실. 작가 미상.`,
          // title: "Les études supérieures en Corée du sud",
          text: `한국의 규제 문화는 독재 정권 시기와 산업 발전의 영향도 깊이 받았습니다. 실제로 남한의 독재 정권들(1948-1987)은 권위주의적이고 위계적인 구조를 강화했습니다. 이승만 정권(1948-1960)과 박정희 정권(1963-1979) 하에서는 엄격한 규율, 권위에 대한 존중, 집단에 대한 복종이 강조되었습니다.

특히 박정희 독재 시절에는 규제 문화가 국가 주도의 급속한 산업화와 강력한 통제를 통해 뿌리내렸습니다. 효율성과 획일성이 강조되었고, 개인의 자유는 그 대가로 억제되었습니다. 교육 또한 1970년대 국가 현대화 계획의 핵심 요소로, 박정희 정권은 교육을 통해 산업화에 필요한 인력을 육성하고 국가의 경제 성장을 뒷받침하고자 했습니다. `,
        },
        // Objet photo
        {
          img: "/photo-1.png",
          imgCredit: `1981년 서울 연세대학교 입학 등록 현장. 국립현대사박물관 전시 사진. 출처: 코리아 타임스.`,
          title: "한국의 고등교육",
          text: `한국의 고등교육 역사는 20세기 대한민국의 발전과 긴밀하게 연결되어 있습니다. 1945년 일본 식민 통치가 끝난 후, 교육은 국가 재건을 위한 필수적인 무기로 여겨졌으며, 사회적 상승을 위한 핵심 요소가 되었습니다. 천연자원이 부족한 한국에서는 인적 자원이 가장 중요한 자산으로 인식되었고, 그로 인해 오늘날 우리가 잘 알고 있는 '교육열'이 탄생하게 되었습니다.
`,
        },
        {
          img: "/photo-2.png",
          imgCredit: `서울대학교, 대한민국에서 가장 명문으로 손꼽히는 고등교육기관 중 하나입니다. 출처: 위키피디아.`,
          text: `한국 사회에서 대학 입학시험, 특히 악명 높은 수능(Suneung)은 매우 중요한 역할을 합니다. 이는 일종의 사회적 선별 메커니즘으로, 시험에 성공한 학생들은 안정된 직장과 사회적 지위를 확보하게 됩니다. 많은 가정이 자녀를 명문대에 입학시키기 위해 막대한 금액을 투자하며, 이로 인해 학업에 대한 압박은 더욱 심화됩니다.
명문대에 입학하는 것은 종종 성공적인 미래를 보장하는 길로 여겨지며, 그중에서도 대표적인 명문대는 바로 SKY로 불리는 서울대학교(Seoul National University), 고려대학교(Korea University), 연세대학교(Yonsei University)입니다. 이 세 대학은 학문적 엘리트를 상징하며 입학 경쟁이 매우 치열합니다.


 `,
        },
        //Objet Calendrier 1980
        {
          img: "/calendrier-1980-1.png",
          imgCredit: `고등학교 입학을 준비하는 1970년대 학원 포스터. 출처 :추억의 편린들

`,
          title: "학원의 역사: 한국의 그림자 교육 ",
          text: `학원은 사교육을 제공하는 사설 교육 기관이다. 대부분의 한국 학생들은 정규 수업이 끝난 후 학원에 다니며, 때로는 밤늦게까지 공부한다. 이를 ‘그림자 교육’이라고 부르는데, 이는 조용하지만 체계적으로 한국의 교육 환경을 수십 년 동안 형성해 온 또 하나의 세계를 뜻한다.
17세기에 한국에서 최초의 학원 형태가 등장했다. 이곳에서는 글을 읽고 쓰는 법, 간단한 산술을 배웠다. 하지만 학원이 본격적으로 확산된 것은 20세기에 들어서이다. 일제강점기 직전(1910–1945)에는 약 3,000개의 학원이 존재했다. 식민지 시기에는 성장이 중단되었지만, 1960~70년대에 사교육 기관은 다시 활발해졌고 빠르게 확산되었다. 학원비가 비싸더라도, 한국 가정에서는 여전히 매우 선호되는 교육 방식으로 자리잡고 있다.
 
`,
        },
        {
          img: "/Calendrier-1980-2.png",
          imgCredit: `대전 둔산동에 위치한 다수의 학원이 입주한 건물. 출처: 위키백과.`,
          text: `1970년에는 이미 1,400개가 넘는 학원이 있었다. 이들은 진정한 산업으로 성장했다. 이러한 교육 열풍을 제한하기 위해 전두환 대통령은 7.3 교육 개혁을 시행했다. 대학 입시에서 떨어진 고등학생과 예술 또는 체육 전공 학생만 학원에 다닐 수 있도록 한 것이다. 그의 임기 동안 여러 시험이 폐지되고, 공교육 과정이 변경되었으며, 교육 기대치가 조정되었다. 하지만 2000년에 이 개혁은 위헌 판정을 받아 학원의 확장이 다시 촉진되었다.

2023년에는 학생 수가 감소했음에도 불구하고, 사교육비 지출은 27조 1천억 원으로 사상 최고를 기록했다. 약 80%의 한국 학생들이 학원 수업을 듣고 있다. 이 부담이 점점 커지면서 출산율 감소의 주요 원인 중 하나로 지적되고 있다.
 `,
        },

        // Objet Sac de cours
        {
          img: "/sac-cours-1980-1.png",
          imgCredit: `조선 시대 한문 서예 수업. 출처: 동아일보 데이터베이스
`,
          title: "시대별로 변화한 교육 과목의 발전 과정 ",
          text: `한국 학교에서 가르치는 과목들은 시간의 흐름에 따라 크게 변화해 왔습니다. 조선 시대(1392–1897)부터 오늘날까지, 한국의 교육 시스템은 정치적, 역사적 격변의 영향을 깊게 받아왔습니다.

조선 왕조 시절에는 신유교 원리에 따라 엘리트를 양성하는 교육이 이루어졌으며, 이는 왕국의 질서와 안정을 보장하기 위한 목적이었습니다. 중국 고전의 암기와 예절의 숙달이 지적 교육의 핵심이었습니다.

 
`,
        },
        {
          img: "/sac-cours-1980-2.png",
          imgCredit: `1970년대 군사 훈련. 출처: 환일고등학교 공식 홈페이지.`,
          text: `일제 강점기(1910~1945) 동안 교육은 제국주의 동화 도구가 되었다. 일본어가 유일한 교육 언어로 강제되었고, 학교 교육과정은 산수, 역사, 지리 등 현대 과목 위주로 편성되었으나 식민지 관점에서 가르쳐졌다. 한국 문화는 체계적으로 말살되었으며, 학교는 전쟁 준비와 제국에 대한 복종을 위한 공간이 되었다.

제2차 세계대전 후, 이러한 지배에 대한 거부감은 즉각 교육 개혁으로 나타났다. 교실에 한국어가 다시 도입되었고, 교육은 국사와 애국 이념에 집중되었다. 군사 훈련(교련)이 고등학교에서 필수 과목이 되었는데, 이는 권위주의와 냉전 상황이 배경이었다.
  `,
        },
        {
          img: "/sac-cours-1980-3.png",
          imgCredit: `“글로벌 미래교육 엑스포 2024에서 학생들이 가상현실을 활용해 미래 교실에서 수업을 듣고 있다.” 출처: 호남 교육 저널. 
`,
          text: `
1990년대부터, 민주화와 세계화의 개방과 함께 전환이 이루어졌다. 엄격한 규율 중심 모델에서 참여형 교육으로 변화하였다. 과목도 크게 다양해져 사회과학, 정보기술, 비판적 사고, 창의적 교육이 포함되었다. 학교는 빠르게 변화하는 사회에 적응할 수 있는 인재 양성을 목표로 하지만, 여전히 성과 중심의 논리는 강하게 남아 있다.
  `,
        },
        // Objet Journal Intime présent
        {
          img: "/journal-1.png",
          imgCredit: `2000년부터 2019년까지 전 세계 및 한국의 자살 사망률 비교 그래프 출처: 유니세프`,
          title: "자살: 한국 교육 내의 침묵 속 고통",
          text: `자살은 한국 사회에서 가장 심각한 공중 보건 문제 중 하나이다. 실제로, 한국은 OECD 국가들 중 자살률이 가장 높은 나라로, 2024년에는 14,439건의 자살이 보고되었으며, 하루 평균 약 40명이 스스로 생을 마감하고 있다. 자살은 청소년과 청년층에서 가장 주요한 사망 원인으로, 2023년에는 초등학생, 중학생, 고등학생 사이에서 자살로 인한 사망자가 214명에 이르렀으며, 이는 역대 최고 수치이며 8년 사이에 두 배로 증가한 수치다. 이러한 고통은 학교 내 심리적 지원 강화의 필요성을 강하게 시사한다.

이러한 문제에 대응하기 위해, 지난 몇 년간 여러 정부들은 다양한 조치를 시행해왔다. 2004년부터 2023년까지 여러 차례의 5개년 계획이 수립되었으며, 가장 최근의 계획은 2027년까지 자살률을 30% 줄이는 것을 목표로 하고 있다.
`,
        },
        {
          img: "/journal-2.png",
          imgCredit: `서울 마포대교, 자살을 막기 위해 센서와 ‘삶의 작은 순간들’을 담은 사진들로 장식됨. 출처: RFI / 프레데릭 오자르디아스
`,
          text: `2011년, 이명박 정부는 ‘자살 예방법’을 제정하였다. 이 조치는 자살 예방을 강화하기 위한 것으로, 자살 시도자를 대상으로 한 사후 관리 등을 포함하고 있다.

하지만 이러한 노력에도 불구하고, 교육 현장은 고통받는 청소년들을 효과적으로 돕기 위한 충분한 자원을 갖추지 못하고 있다. 청소년들이 극단적인 선택을 하게 되는 배경에는 정신 건강 문제, 가족 갈등뿐만 아니라 학업 압박도 큰 원인으로 작용한다. 이 학업 압박은 학생들이 교육 체계에 들어서는 순간부터 시작되며, 특히 고등학교 시기에 가장 극심해진다. 이 시기는 한국 학생들에게 미래를 결정짓는 중요한 전환점이기 때문이다.

실제로 한국 학생들은 어릴 때부터 학업에 매달리며, 부모들 역시 자녀의 성적과 성공을 위해 많은 시간과 자원을 투자한다. 한국 학생들은 미국 학생들보다 두 배 이상 많은 시간을 공부에 할애하며, 이는 주로 정규 수업 이후의 시간에 이루어진다. 이러한 학업 중심의 환경은 학생들에게 깊은 스트레스를 유발하며, 때로는 이로 인해 돌이킬 수 없는 선택으로 이어질 수 있다.
 `,
        },
        {
          img: "/journal-3.png",
          imgCredit: `2023년 9월 4일, 동료 교사의 자살 이후 시위를 벌이는 교사들. 출처: 정연제 / AFP
`,
          text: `하지만 한국 교육 시스템에서는 학생들뿐 아니라 교사들도 자살이라는 고통에 시달리고 있다. 학부모들의 과도한 압박과 괴롭힘이 심각한 문제로 대두되고 있다. 2015년부터 2023년 사이에 168명의 교사가 스스로 목숨을 끊었다. 2023년 여름, 한 젊은 여교사가 교실 옷장 안에서 숨진 채 발견되어 교육계에 큰 충격을 주었다. 그녀는 일기장에 “가슴이 너무 답답해요. 일의 광기에 압도당하는 기분이에요”라며 이 고요한 고통이 결국 극단적인 선택으로 이어졌음을 고백했다. 이에 2023년 9월 4일, 교사들을 향한 학부모들의 괴롭힘과 지나친 성공 강요에 반대하는 전국적인 파업이 벌어졌다. `,
        },
        // Objet Calendrier 2025

        {
          img: "",
          imgCredit: ``,
          title: "Règlementations",
          text: ` <strong>2001년 – 사립 고등학교 자율화 시작</strong>

교육 다양화와 학교 자율성 증대를 목적으로 ‘자율형 사립고(자율형 사립고등학교)’ 개념 도입. 이 고등학교들은 행정 관리, 교육 과정, 학생 선발에서 더 큰 자유를 누리면서도 교육부의 일반 지침은 준수하였다. 

<strong>변화와 영향</strong>

초기에는 자율형 사립고 수가 제한적이었으나 성공을 거두며 점차 확대됨. 다만 높은 등록금과 경쟁적인 선발 방식으로 인해 사회적 불평등을 심화시켰다는 비판도 받음. 이에 2019년 정부는 2025년까지 이들 학교를 일반고로 전환해 교육의 형평성을 높이겠다는 계획을 발표했다.

<strong>개혁 목표</strong>

학생들의 재능과 관심에 맞는 다양한 교육 경로 제공
교육 혁신과 학업 우수성 장려
학교가 지역사회 필요에 맞춰 더 많은 책임을 지도록 함


`,
        },
        {
          img: "",
          imgCredit: `
`,
          text: ` <strong>2006년 – 사교육 기관(학원)에 통금 시간 도입</strong>

2006년 9월, 대한민국 교육 당국은 ‘학원의 설립·운영 및 과외교습에 관한 법률’을 개정하여 지방 교육청이 학원의 운영 시간을 제한할 수 있도록 했다. 이 개정은 사교육 의존도를 줄이고 학생들의 부담을 완화하기 위한 조치였다. 이에 따라 시·도 교육청은 학원 규제 권한을 강화했다.

개정 이후 여러 지방자치단체에서는 학원에 대해 오후 10시 통금 시간을 적용하기 시작했다. 다만, 지역별로 통금 시간 적용과 운영 방식에는 차이가 있었으며, 일부 지역에서는 시간이 조정되기도 했다.

<strong>개혁 목표</strong>

학생들이 더 충분히 쉴 수 있도록 학습 시간을 제한
고가의 사교육 의존도 감소
야간 학습 시간을 줄여 학생들의 복지 증진

<strong>변화와 영향 </strong>

연구 결과 통금 시간 도입이 사교육비 지출이나 과외 시간의 현저한 감소로 이어지지 않았으며, 학교 급별 및 사회경제적 배경에 따라 효과가 달랐다.

이에 대응해 일부 학원은 주말 수업을 확대하는 방식으로 운영 시간을 조정했고, 일부 학부모는 취소된 수업을 대신할 개인 과외를 찾았다. 또한, 몇몇 학원은 규정을 피해 허용 시간을 넘겨 영업을 계속하는 사례도 있었다.
 `,
        },
        {
          img: "",
          imgCredit: `
`,
          text: ` <br> 2008년 – 마이스터고(마이스터 고등학교) 출범 </b>

2008년, 이명박 정부는 독일의 직업학교 모델을 참고하여 마이스터고를 도입한다고 발표했다. 이 제도는 전통적인 직업고등학교에 대한 학생들의 관심 저하와 특정 산업 분야의 숙련 노동력 부족 문제를 해결하기 위한 방안이었다.
계획은 기존의 50개 직업고를 마이스터고로 전환하는 것이었으며, 2010년부터 단계적으로 시행되었다. 마이스터고는 산업계와 긴밀히 협력하여 시장의 수요에 맞춘 전문 교육을 제공하는 것을 목표로 했다.

<b> 개혁 목표 </b>

기업이 요구하는 역량에 맞게 교육과정을 조정
학생들이 원활히 노동시장에 진입할 수 있도록 지원
직업교육에 대한 사회적 인식을 긍정적으로 변화시키기

<b> 변화와 영향 </b>

마이스터고는 빠르게 확산되어 2010년에는 21개교가 운영되었고, 2022년에는 54개교로 늘어났다. 2013년부터 2017년 사이 졸업생 취업률이 90%를 넘는 등 높은 취업 성과를 보였다.

하지만 전통 직업고에 비해 운영비가 더 많이 들면서 비용 대비 효율성에 대한 의문도 제기되었다.

 `,
        },

        {
          img: "",
          imgCredit: `
`,
          text: ` <br> 2009년 – 자율형 사립고(자율형 사립고등학교) 일반화 </b>

2009년, 한국 정부는 2010년까지 100개의 자율형 사립고를 설립하는 야심찬 계획을 발표했다. 이 학교들은 학생 선발과 교육 과정에서 더 큰 자율권을 가지면서도 교육부의 일정 지침은 준수하는 체제였다. 목표는 교육의 다양성을 확대하고 학업 우수성을 촉진하는 데 있었다.

<br> 변화와 영향 </b>

초기 의도와 달리 자율형 사립고는 충분한 학생을 모집하는 데 어려움을 겪었다. 예를 들어, 2011년 서울에서는 26개 자율형 사립고 중 11개 학교가 모집 정원보다 적은 지원자를 기록했다. 이로 인해 정책의 실효성에 대한 비판이 제기되었고, 선발 기준 완화 같은 긴급 대책이 도입되었지만 큰 효과를 거두지 못했다. 이에 따라 이 정책을 재검토하거나 폐지해야 한다는 요구가 나오기도 했다.

 `,
        },

        {
          img: "/calendrier-2025.png",
          imgCredit: `서울 저작권 없는 이미지 | Pexels 폴 빌 작성`,
          title: "",
          text: `

<br> 2009년 – 학원 통금 시간 강화 </b>

2009년, 한국 교육 당국은 학원의 운영 시간을 강화하여 오후 10시 이후 수업을 금지하는 조치를 시행했다. 이 정책은 사교육 의존도를 줄이고 학생들의 부담을 완화하기 위한 목적이었다. 위반 시 엄격한 처벌이 이루어졌으며, 위반 사실을 신고하는 시민들에게는 포상금이 지급되었다.

<br> 변화와 영향 </b>

제한에도 불구하고 많은 학원들이 주말 수업을 늘리거나 개인 수업을 제공하는 방식으로 규제를 피해갔다. 일부 학부모들은 잃은 학습 시간을 보충하기 위해 개인 과외를 찾기도 했다. 2009년 10월, 헌법재판소는 통금 시간이 학생들의 건강을 위한 충분한 수면권 보장을 목적으로 하여 기본권 침해에 해당하지 않는다고 판결했다.
`,
        },

        // Objet uniforme 2025

        {
          img: "/uniforme-4.png",
          imgCredit: `1970년대 여고생 교복 작가 미상`,
          title: "오늘날 교복: 더 유연해질까?",
          text: `2025년, 교복은 여전히 한국 교육 시스템의 핵심 요소이지만, 그 의미와 형태는 변화했다. 교복이 단결과 중립성의 가치를 상징하는 동시에, 이제는 명문 학교나 유명 지역 소속을 나타내는 표식으로 인식된다.

2000년대 이후, 한국 사회는 소비 문화의 확산, 적당한 개인주의의 성장, 학생 권리 인식의 증대로 크게 변화했다. 이에 따라 과거 엄격했던 교복 착용 규정도 점차 완화되었으며, 이는 학부모, 미디어, 그리고 청소년들의 압력 덕분이다.

현재 학교들은 더 많은 유연성을 허용한다. 학생들은 여러 공인된 교복 모델 중에서 선택할 수 있고(여름/겨울용, 치마 또는 바지, 반팔 또는 긴팔), 일부 학교는 교복 착용이 자유로운 ‘자율복’ 날도 허용한다. 그럼에도 불구하고, 각 학교는 자체 내규로 외모와 복장에 관한 기준을 유지하고 있으며, 1980년대보다는 덜 엄격하지만 여전히 규제를 시행한다.
`,
        },
        {
          text: `1980년대 이후, 한국 학생들은 여전히 엄격한 틀 안에서 개인 표현의 공간을 점차 확보해 왔어요. 하지만 진짜 변곡점은 2010년대부터입니다. 학생 복지, 학교 내 괴롭힘, 표현의 자유에 대한 논의가 활발해지면서, 교육 현장의 경직된 모델이 다시 고민되기 시작했죠.

2025년 현재:

여학생들은 예전처럼 치마만 입는 게 아니라 바지도 자유롭게 선택할 수 있어요. 1980년대에는 상상도 못 했던 변화죠.
남학생들은 머리를 길게 기를 수 있지만, ‘단정함’을 유지해야 한다는 조건이 붙어요.
대부분 학교에서 흰색이나 검은색 운동화를 신는 게 허용돼, 활동성과 편안함이 훨씬 높아졌습니다.
짙지 않은 메이크업(가벼운 파운데이션, 틴트 바름, 눈썹 다듬기)은 규칙 안에서 허용되죠.

또, 학생들은 온라인이나 민간 판매처에서 자신이 다니는 학교 로고가 들어간 맞춤형 재킷도 구매할 수 있어요. 이게 단순한 교복이 아니라 ‘학교 정체성’과 ‘개인 스타일’을 동시에 보여주는 신개념 교복 시장을 만든 셈이죠.

결국, 교복이 ‘개인을 무색하게 만드는 도구’에서 ‘개성과 미적 표현을 담는 장’으로 전환된 거예요. 물론 그 한계는 여전히 학교라는 틀 안에 있지만, 분명 과거와는 다른 모습입니다.
 `,
        },
        {
          img: "/uniforme-6.png",
          imgCredit: `저작권 없는 이미지 | Pexels 사진작가 Nguyễn Nguyên
`,
          text: `1980년대 이후 가장 눈에 띄는 변화 중 하나는 외모 규제의 완화입니다. 과거에는 머리 색깔이나 화장 흔적만 보여도 엄격한 처벌을 받았지만, 이제 학교들은 좀 더 세심하고 유연한 접근을 취하고 있습니다.

자연스러운 갈색, 밝은 밤색 계열의 염색은 현재 널리 허용되었으며, 다만 보수적인 일부 공립학교에서는 여전히 금지하고 있습니다. 헤어스타일도 다양해졌고, K-팝 문화에서 영감을 받은 스타일이 많아졌지만, ‘단정함’이라는 시각적 기준은 유지됩니다.

고등학생을 중심으로 눈에 띄지 않는 가벼운 화장은 허용되는데, 강렬한 립스틱이나 인조 속눈썹은 금지됩니다.
 간결한 액세서리 착용도 허용돼, 손목시계, 심플한 귀걸이, 무난한 헤어밴드 등이 예입니다.
이런 관용 조치는 교사와 학생 간 갈등을 줄이고, 학생들의 행복감과 정체성 존중을 높이며, 동시에 학교 내 일정한 통일성을 유지하려는 목적에서 비롯되었습니다. 그러나 학교마다 차이가 커서, 엘리트 사립고나 보수적인 학교들은 여전히 더 엄격한 기준을 적용하고 있습니다. `,
        },

        {
          img: "/uniforme-5.png",
          imgCredit: `경기외국어고등학교 제공, 뉴스ISphoto@newsis.comhttps://mobile.newsis.com/view/NISX20130708_0012212002#_PA

`,
          text: `1980년대 이후로 교복 착용 규정은 상당히 완화되었지만, 여전히 사회적 통제 도구로서의 역할을 하고 있으며, 제도권에서는 규칙 자체에 대한 문제 제기가 거의 없다. 처벌은 예전보다 덜 굴욕적이지만 여전히 존재한다:

생활기록부에 기록되는 주의 사항,
구두 경고,
학부모와의 면담,
경우에 따라서는 규정에 맞는 교복을 다시 구입해야 하는 의무.

변화한 점은 학생과 규칙 사이의 관계 방식이다. 학생회가 교복 관련 결정에 참여하는 등 대화의 장이 늘고 있으며, 청소년들은 SNS를 통해 자신의 요구를 표현하고 부당한 처사를 고발한다.

하지만 더 자유로워 보이는 이면에는 여전히 강한 암묵적 규범이 존재한다. 여학생들은 옷차림과 화장에 대한 압박을 계속 받고, 규범을 벗어나는 학생들은 소외당하기 쉽다.

즉, 2025년의 교복은 현대화와 전통, 개인 자유와 집단 압력, 제도적 통제와 개인의 적응 전략 사이에 놓인 사회의 긴장 상태를 보여준다. `,
        },

        // Objet pelluche 2025

        {
          img: "/peluche-1.png",
          imgCredit: `The Teacher and his country school, 1900. 출처: lhan New, “When I was a boy in South Korea”, 1928.
`,
          title: "어린 나이부터 시작되는 규칙 문화",
          text: `한국 교육에서 규칙 문화는 매우 이른 시기부터 시작된다. 첫 등교일부터 학생들은 성공을 향한 경쟁에 뛰어들며, 친구보다 더 잘해야 한다는 압박을 받는다.

이 시기는 다양한 사회적 규범과 규칙을 배우는 중요한 시기이다. 예를 들어, 단체 급식은 아이들에게 식사 예절을 가르치는 방법일 뿐만 아니라, 개인보다 공동체가 우선인 환경 속에서 자라도록 돕는다. 따라서 한국 아이들은 규칙 준수가 집단의 원활한 운영에 필수적임을 인지한다.
 `,
        },
        {
          img: "/peluche-2.png",
          imgCredit: `2016년 8월 10일, 서울 종로 학원에서 사교육을 받는 한국 어린이들. ©AFP - YELIM LEE / AFP
`,
          text: `또한 한국 교육은 암기 학습에 큰 비중을 둔다. 이는 때로 개별 창의성을 제한하기도 하지만, 최근 인터뷰를 통해 알 수 있듯이 점차 개선되고 있다. 한국 아이들은 4세부터 학원(hagwon)에 다니기 시작하며, 방과 후에도 긴 시간 공부하고, 일찍 일어나 늦게 자는 생활에 익숙해진다.

한국 사회 전문가 마틴 프로스트가 설명하길, “어린 시절부터 쉼 없이 열심히 공부하는 데 익숙한 한국인들은 성인이 되어 우리보다 훨씬 더 가혹한 노동 환경에도 잘 적응한다.” `,
        },
        // Objet Ordinateur 2025

        {
          img: "/ordinateur-1.png",
          imgCredit: `PC방에서 게임하는 고등학생들. 출처: committee.co.kr
`,
          title: "신데렐라 법: 화면 속 규제",
          text: `오늘날 한국은 세계에서 가장 인터넷 연결이 잘 된 나라 중 하나이며, e스포츠와 디지털 혁신 분야의 글로벌 리더다. 그래서 한국 청소년들은 자연스럽게 디지털 문화 속에서 자란다. 하지만 2011년, 정부는 어린이들의 화면 사용 시간을 제한할 필요가 있다고 판단했다. 2011년 11월 20일, 한국 정부는 ‘셧다운법’이라 불리는 ‘신데렐라 법’을 도입했다. 이 법은 만 16세 미만 청소년이 자정부터 오전 6시까지 온라인 게임을 하는 것을 금지했다. 이 규제의 목적은 청소년의 수면과 정신 건강을 보호하는 데 있었다.


 `,
        },
        {
          img: "/ordinateur-2.png",
          video: "https://www.youtube.com/watch?v=xKudyIWrv-E",
          imgCredit: `PC방 분위기를 잘 표현한 애니메이션. 출처: YouTube
          // `,
          text: `그러나 이 신데렐라 법은 한국 사회가 청소년을 어떻게 바라보는지를 잘 보여준다. 청소년은 통제되고 감시되어야 하며, 성인이 될 미래를 위해 규격화되어야 한다는 시각이다. 게임은 학업 실패의 원인으로 여겨져 엄격하게 관리되어야 했다. 결국, 10년간의 논쟁 끝에 2021년 이 법은 폐지되었다. 어린이들의 생활 속에 깊이 자리한 화면 문화와 손쉽게 우회할 수 있다는 현실을 반영한 결정이었다.


이 법은 더 깊은 질문을 던진다. 청소년을 학교 영역을 넘어 통제해야 하는가? 자유시간까지도 제한해야 하는가?`,
        },

        // Objet Casque de musique 2025

        {
          img: "/casque-1.png",
          imgCredit: `노래방 내부 전형적인 모습. 출처: mk.co.kr
`,
          title: "한국 고등학생들의 여가 생활",
          text: `학업 성취가 사회적 성공의 열쇠인 교육 시스템 속에서, 청소년들의 자유 시간은 특별한 의미를 가진다. 한국 고등학생들에게도 여가가 존재하지만, 보통 엄격히 제한되며 학업이 우선순위를 차지한다. 긴 하루는 교과서 넘기는 소리로 채워지지만, 짬이 날 때면 학생들은 한국 청소년 문화의 중요한 일부인 휴식 공간에서 소중한 자유를 즐긴다. 대표적인 예로 노래방(노래방)이 있는데, 친구들과 감정을 발산하고 스트레스를 푸는 최적의 장소다.

 `,
        },
        {
          img: "/casque-2.png",
          imgCredit: `PC방 내부 모습. 출처: Seoul Insider Guide
`,
          text: `또한 고급 사이버카페인 PC방도 있다. PC방은 네트워크 게임에 특화된 공간으로, 학교나 가정 환경에서 벗어나 자유롭게 게임을 즐길 수 있는 완벽한 장소다. 음식도 주문해 먹을 수 있으며, 늦은 시간까지 운영되지만 일부 매장에서는 미성년자의 밤 10시 이후 출입을 제한하거나, 지역 규칙에 따라 자정까지 제한하기도 한다.

이런 공간들은 학교 스트레스로부터 잠시 벗어날 수 있는 안식처 역할을 하며, 몇 시간 동안 시험 공부와 규칙을 잊게 해준다.
 `,
        },
        //Objet photo 2025

        {
          img: "/photo-3.png",
          imgCredit: `© lightkorea.blogspot.com
`,
          title: "한국의 고등교육: 높은 긴장 속의 미래",
          text: `2025년 한국의 고등교육은 혁신을 선도하는 나라의 아이러니를 그대로 드러낸다. 대학은 여전히 사회적 성공으로 가는 필수 관문으로 여겨지며, 서울대, 연세대, 고려대 같은 명문대는 오랜 준비와 치열한 경쟁 없이는 닿기 힘든 정상으로 간주된다.

1990년대 이후 대학 진학 기회는 확대되었지만, 양극화는 심화되고 있다. 사교육기관인 학원에 대한 의존도가 높아지면서 부유층과 그렇지 않은 가정 간 격차가 커졌다. 출생률 저하로 학생 수는 줄고 있지만, 등록금은 여전히 높아 학생들의 경제적 어려움은 점점 가시화되고 있다.
 `,
        },
        {
          img: "/photo-4.png",
          imgCredit: `The Korea Herald Korean students sleep just 5.5 hours a day: surveyhttps://www.koreaherald.com/article/3647929
`,
          text: `교육 시스템은 변화를 시도 중이다. 공학 실무 학교, 디자인·인공지능·소프트 스킬을 융합한 하이브리드 교육 과정 등이 등장하며, 일부 과정은 온라인으로도 제공된다. 영어가 국제 프로그램에서 점차 교육 언어로 자리 잡고 있다.

하지만 한계도 명확하다. 성과 압박은 여전하며, 대학 순위에 대한 집착이 진로 선택을 지배한다. 많은 학생이 실패가 허용되지 않는 마라톤 같은 일상을 견디고 있다. 정신 건강 문제, 불안, 번아웃, 고립감이 늘고 있지만, 여전히 취약성에 대한 대화는 부족하다.
 `,
        },
        {
          img: "/photo-5.png",
          imgCredit: `서울 출처: Pexels 작성자: Paul Bill
`,
          text: `입학 통계와 현대식 캠퍼스의 외관 뒤에는 모순이 존재한다. 일정은 빡빡하게 계획되어 있으며, 학점 취득, 시험, 인턴십, 어학 자격증, 공모전 등으로 가득 차 있다. 많은 학생이 가족과 떨어져 좁은 원룸에서 생활하며, 생계를 위해 아르바이트를 병행한다. 휴식 시간은 극히 적고, ‘효율’이 ‘휴식’을 압도하는 문화에서 숨 쉴 공간은 부족하다.

2025년 한국 대학은 빛나는 현대적 외관과 깊은 그늘을 동시에 품고 있다. 앞으로의 과제는 학문적 우수성, 사회적 공정성, 개인의 행복을 어떻게 조화시키느냐이다.
 `,
        },
        //Sac de cours 2025

        {
          img: "/sac-2025-1.png",
          imgCredit: `서울 이미지 출처: Pexels 글: Paul Bill
`,
          title: "2025년 학생이 들고 다니는 가방: 다중 속도의 학교로 향하다",
          text: `2025년 한국 학생의 책가방에는 더 이상 단순한 교과서만 들어 있지 않다. 태블릿, 전자 펜, 프로젝트 노트, 온라인 수업용 이어폰, 때로는 하루 종일 연결된 학습을 견디기 위한 보조 배터리까지 담고 다닌다. 디지털은 이제 필수 교육 도구가 되었고, 인터랙티브 연습 플랫폼, 디지털 교재, 온라인 평가가 학교 생활을 지배한다.
 `,
        },
        {
          img: "",
          imgCredit: `
`,
          text: `하지만 도구뿐 아니라 교육 내용과 기대치도 크게 달라졌다. 수학, 과학, 외국어 같은 기본 과목은 여전하지만, 감성 지능, 협력, 지속 가능성, 디지털 문화 같은 과목들이 일부 학교에서 새롭게 부상했다. 과거 주변부로 여겨졌던 이런 과목들이 적응력, 소통, 비판적 사고가 중요한 현대 사회에서 핵심 역량으로 자리 잡고 있다.

하지만 이 변화는 균일하지 않다. 부유한 지역이나 대도시에 있는 학교들은 첨단 환경을 갖추었지만, 아직도 낙후된 시설에서 한 대의 컴퓨터를 여러 명이 나눠 쓰는 학교도 많다. 이런 디지털 격차는 이미 존재하는 교육 불평등을 심화시키고 있다. 성적 위주의 평가 시스템에서는 이 격차가 더욱 크게 작용한다.
 `,
        },
        {
          img: "/sac-2025-2.png",
          imgCredit: `도서관에서 공부하는 학생들 이미지 출처: Pexels 글: jason hu
`,
          text: `거기에 보이지 않지만 확실한 압박도 더해진다. 더 많은 것을, 더 빨리, 더 일찍 마스터해야 한다는 무언의 중압감이다. 책가방은 무게로만 잴 수 없는 정신적 부담의 상징이 된다. 학업 성취에 대한 기대, 사회적 압력, 감정 관리 사이에서 조용히 무게를 더한다. 그럼에도 그 안에는 더 인간적이고 포용적이며 현실에 뿌리 내린 새로운 교육을 향한 희망도 담겨 있다.
 `,
        },
      ],
    },
  };

  const lang = t[selectedLang];

  return (
    <div
      ref={revealRef}
      className="reveal"
      style={{
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#E3D8E2",
        color: "#4A5B41",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Drapeaux en haut à droite */}
      <LanguesDrapeau
        selectedLang={selectedLang}
        setSelectedLang={setSelectedLang}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 20,
        }}
      />

      {/* Icône Home */}
      <div
        onClick={() => navigate("/chambre")}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          textDecoration: "none",
          color: "#4A5B41",
          fontSize: "24px",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <FaArrowLeft style={{ marginRight: "8px", fontSize: "20px" }} />
        <span>{lang.retour}</span>
      </div>

      <div className="slides">
        {lang.slides.map((slide, idx) =>
          slide.img ? (
            <section className="img-div" key={idx}>
              <div className="left-image">
                {slide.video ? (
                  <iframe
                    width="100%"
                    height="315"
                    src={slide.video.replace("watch?v=", "embed/")}
                    title={slide.title || "Vidéo"}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                      width: "100%",
                      minHeight: "250px",
                      background: "#000",
                    }}
                  />
                ) : (
                  <img
                    src={slide.img}
                    alt={slide.title}
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                    }}
                  />
                )}
                <p
                  style={{
                    fontSize: "12px",
                    marginTop: "8px",
                    color: "#698958",
                  }}
                >
                  {slide.imgCredit}
                </p>
              </div>
              <div className="right-text">
                <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
                  {slide.title}
                </h2>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.8",
                    whiteSpace: "pre-line",
                  }}
                  dangerouslySetInnerHTML={{ __html: slide.text }}
                />
              </div>
            </section>
          ) : (
            <section className="text-only-slide" key={idx}>
              {slide.title && (
                <h2
                  style={{
                    fontSize: "24px",
                    marginBottom: "16px",
                    color: "#4A5B41",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  {slide.title}
                </h2>
              )}
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.8",
                  whiteSpace: "pre-line",
                }}
                dangerouslySetInnerHTML={{ __html: slide.text }}
              />
              {slide.imgCredit && (
                <p
                  style={{
                    fontSize: "12px",
                    marginTop: "8px",
                    color: "#698958",
                    textAlign: "center",
                  }}
                >
                  {slide.imgCredit}
                </p>
              )}
            </section>
          )
        )}
      </div>
    </div>
  );
}

export default Reveil;
