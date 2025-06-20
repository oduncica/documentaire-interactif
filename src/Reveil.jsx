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
          imgCredit: `고등학교 졸업반, 2020 “대한민국 교육” © Korea's Owls`,
          title: "인생을 결정짓는 시험: 수능",
          text: `한국에서 "대학수학능력시험"으로 알려진 수능은 학생들의 인생에서 매우 중요한 사건입니다. 이는 단순한 학업 능력 시험뿐 아니라 <b>사회적 통과의례</b>로, 종종 젊은이들의 대학 진학과 직업 미래를 결정합니다.

<b>8시간</b>에 걸쳐 다양한 과목을 평가하는 이 시험은 수년간의 철저한 준비의 산물입니다. 학생들은 이 순간에 큰 압박감을 느끼며, 성공하기 위해 최선을 다합니다.`,
        },
        {
          img: "/examen-2.png",
          imgCredit: `후배 학생들이 대학 입학 시험을 치르는 고등학생들을 응원합니다. 경찰은 지각한 응시자들을 호위합니다. © Elise Hu/NPR`,
          text: `시험 당일, 거리는 거의 텅 비고, 사무실과 상점들도 모두 시험에 집중할 수 있도록 운영 시간을 조정합니다.

정부는 대중교통을 늘리고 경찰이 교통을 통제하여 응시자들의 지각을 방지하는 등 다양한 지원책을 시행합니다.

수능은 단순한 학업 시험이 아니라 <b>교육과 성공이 더 나은 미래로 가는 핵심 열쇠로 여겨지는 문화</b>를 상징합니다.`,
        },
        {
          img: "/examen-3.png",
          imgCredit: `서울의 한 사찰에서 자녀의 성공을 기원하는 부모들. © Ed Jones/AFP/Getty Images`,
          text: `한국의 수능 시험 강도는 교육이 오랜 세월 사회적 성공의 수단으로 여겨져 온 전통을 반영합니다.

한국 문화는 수세기 동안 근면과 규율을 중시하며, 이러한 가치는 세대를 거쳐 전해져 왔습니다.

전쟁과 분단 같은 격변을 겪으면서도 교육은 안정된 미래를 보장하는 수단으로 인식되어 왔습니다. 오늘날에도 학생들은 큰 압박 속에서 수능에 임하며, 이 시험이 미래를 결정한다고 믿고 있습니다.`,
        },
        // Objet cassette passé
        {
          img: "/punition.png",
          imgCredit: `우리들의 일그러진 영웅 (우리들의 일그러진 영웅), 박종원, 1992.  
        
        출처 : YouTube`,
          title: "한국 영화 속 교육 규율 문화",
          text: `한국 영화는 교육 내 규율 문화를 자주 다룹니다. 대표작으로는 《고교얄개》(1976), 《우리들의 일그러진 영웅》(1992), 《친구》(2001) 등이 있습니다. 이 영화들은 당시 규율 문화를 생생하게 보여주며, 때론 인상 깊은 장면을 통해 전달합니다.

예를 들어 《우리들의 일그러진 영웅》(1992)에서는 50~60년대 소년의 이야기를 다루며, 시험에서 부정행위를 한 학생에게 교사가 체벌하는 장면이 등장합니다. 당시에는 흔했지만 오늘날에는 매우 폭력적으로 여겨지는 징계입니다.`,
        },
        {
          img: "/cinema-2.png",
          imgCredit: `영화 친구 (친구, 2001) 포스터  
        
        출처 : 위키피디아`,
          title: "영상 속 인터뷰 발언 재현",
          text: `이 인터뷰에서는 21세, 30세, 53세 세 세대가 영화 《친구》(2001)의 유명한 장면에 대해 어떻게 반응하는지 보여줍니다. 고등학생들이 감독에게 뺨을 맞는 장면은 충격적이며, 일부에게는 “지옥 같은 시절”의 기억을 환기시킵니다.

나이 든 세대는 이를 실제 경험으로 받아들이고, 젊은 세대는 역사적 거리감과 혼합된 불신으로 바라봅니다. 이 세대 간 대비는 교육 내 규율 문화와 정신의 변화를 보여줍니다.`,
        },
        // Objet Uniforme passé
        {
          img: "/soldats-uniformes.png",
          imgCredit: `윌리엄스, 한슨 A., Jr. (1952), 자동차 옆에 서 있는 세 명의 한국 학생들, 페퍼다인 대학교 특별 소장 및 기록 보관소`,
          title: "교복: 역사적 상징",
          text: `1980년대 한국에서 교복은 단순한 복장이 아니라 권위주의적 국가 체제와 군사 독재 시대의 산물입니다 (박정희, 전두환 정권).

당시 학교는 ‘모범 시민’을 양성하는 기관으로, 교복은 학생들의 행동과 개성을 통제하는 도구였습니다. 교복은 전국적으로 표준화되었고, 흰 셔츠, 어두운 블레이저, 치마 또는 바지로 구성되었습니다.

교복 착용은 교육부에 의해 엄격히 관리되었으며, 계절별 착용 일정도 정해졌습니다. 공식적으로는 평등과 경쟁 방지를 위해 도입되었지만, 실제로는 청소년 통제의 수단이었습니다.`,
        },
        {
          img: "/uniforme-2.png",
          imgCredit: `윌리엄스, 한슨 A., Jr. (1952), 수업 중인 교실, 페퍼다인 대학교 특별 소장 및 기록 보관소`,
          text: `교복의 각 요소는 엄격하게 규정되었습니다. 단순한 복장 규칙이 아니라 외모 전반에 대한 철저한 통제였습니다.

여학생 치마는 무릎 길이여야 하며, 짧게 줄이는 시도는 즉시 처벌받았습니다. 남학생 바지는 어두운 색상으로, 단순한 디자인이 요구되었습니다.

셔츠는 깔끔하게 다림질되어야 하며, 신발은 검정색으로 끈도 규칙대로 묶어야 했습니다. 양말은 무늬나 화려한 색 없이 흰색 또는 검은색 단색만 허용되었습니다.

넥타이, 학교 배지, 징계 완장 같은 소품은 필수였고, 개인 장식품은 엄격히 금지되었습니다. 가방 크기와 색상도 규제되었습니다.

이러한 세심한 통제는 교육을 ‘신체의 길들이기’로 보는 시각을 반영하며, 개성 표출을 질서 위협으로 간주했습니다.`,
        },
        {
          img: "/uniforme-1.jpg",
          imgCredit: `1970년대 교문 앞에서 포즈를 취하는 여학생들  
        
        출처 불명`,
          text: `1980년대 교복 규정은 머리 모양, 액세서리, 여성성 표현에까지 엄격히 적용되었습니다.

남학생들은 귀 위로 짧게 머리를 깎아야 했으며, 앞머리나 젤 사용은 금지되었습니다. 여학생들은 어깨를 넘는 머리카락을 풀 수 없고, 반드시 묶어야 했으며, 화려한 머리핀도 금지되었습니다.

화장품 사용은 엄격히 금지되었고, 립스틱, 아이섀도, 매니큐어 등은 용납되지 않았습니다. 심지어 립밤도 의심받았습니다.

보석 착용은 전면 금지되었고, 피어싱은 처벌 대상이었습니다. 일부 학교에서는 등교 시 외모 검사를 진행하기도 했습니다.

이 같은 통제는 청소년기 여성의 몸과 개성을 억압하는 보수적이고 가부장적인 관념을 반영합니다.`,
        },
        {
          img: "/uniforme-3.png",
          imgCredit: `1973년 환일고등학교 교실 모습. 출처: 환일고 공식 웹사이트`,
          text: `복장 규칙 위반은 가벼운 일이 아니었으며, 공식 징계 절차와 종종 모욕적인 처벌로 이어졌습니다.

복장 위반(치마 단축, 염색 머리, 화장 등)은 다음과 같은 처벌로 이어졌습니다:

- 생활기록부에 경고 기록, 평판 악화 가능성
- 징계 작업(청소, 학교 잡일)
- 반 또는 전교생 앞 공개 사과
- 학부모 연락 또는 교육 당국 신고
- 심할 경우 일시 퇴학 또는 강제 이발

학생들은 수치심, 반항, 체념 등 복잡한 감정을 겪었으며, 일부는 은밀히 규칙을 우회하는 방법을 찾았습니다.

이 시스템은 엄격한 규율을 유지했지만, 학교 권위에 대한 복합적 감정을 남겼고, 오늘날까지 개인 자유와 사회적 압력, 정체성 형성에 대한 논쟁의 중심에 있습니다.`,
        },
        // Objet peluche 2025
        {
          img: "/peluche-1.png",
          imgCredit: `The Teacher and his country school, 1900. 
출처: lhan New, “When I was a boy in South Korea”, 1928.`,
          title: "어린 시절부터 시작되는 규범 교육",
          text: `한국의 교육 문화에서는 규칙과 규범이 아주 어린 시절부터 강조됩니다. 아이들은 입학 첫날부터 경쟁에 뛰어들며, 친구보다 더 나아야 한다는 압박을 받습니다.

이 시기는 다양한 규칙과 사회적 규범을 배우는 중요한 시기입니다. 예를 들어, 단체 급식은 올바른 식사 예절을 익히는 기회이자, 개인보다 공동체를 우선시하는 태도를 내면화하는 수단이기도 합니다. 이처럼 한국의 어린이들은 어릴 때부터 규칙 준수가 집단의 조화를 위한 필수 요소임을 배우게 됩니다.`,
        },

        {
          img: "/peluche-2.png",
          imgCredit: `2016년 8월 10일, 서울 종로 학원에서 수업 중인 어린이들. ©AFP - YELIM LEE / AFP`,
          text: `한국 교육은 암기 위주의 학습에 중점을 둡니다. 방대한 지식을 정확히 외우는 능력이 강조되며, 개인의 창의성은 점점 중요해지고 있음에도 아직은 부차적인 것으로 여겨지기도 합니다. 그러나 이러한 경향은 최근 조금씩 개선되고 있으며, 인터뷰에서도 그 변화를 엿볼 수 있습니다.

아이들은 만 4세부터 학원(hagwon)에 다니기 시작하고, ‘과외(課外)’로 불리는 방과 후 학습에 익숙해집니다. 이들은 이른 아침부터 밤늦게까지 공부하며 바쁜 하루를 보냅니다.

한국 사회 전문가 마르틴 프로스트(Martine Prost)는 다음과 같이 설명합니다. “어릴 때부터 끊임없이 열심히 공부하는 데 익숙한 한국인은 성인이 되어서도 우리보다 훨씬 더 엄격한 노동 환경에 잘 적응할 수 있습니다.”`,
        },
        // Objet Ordinateur 2025
        {
          img: "/ordinateur-1.png",
          imgCredit: `PC방에서 게임을 하는 고등학생들. 출처 : committee.co.kr`,
          title: "신데렐라 법 : 화면 속 규제 문화",
          text: `오늘날 한국은 세계에서 가장 연결된 나라 중 하나이며, e스포츠와 디지털 혁신의 선두주자입니다. 청소년들은 자연스럽게 디지털 문화에 익숙해져 있습니다. 그러나 2011년, 정부는 청소년의 화면 시간 제한의 필요성을 느껴 '셧다운 제도', 일명 ‘신데렐라 법’을 도입했습니다. 2011년 11월 20일부터 16세 미만 청소년은 자정부터 오전 6시까지 온라인 게임을 할 수 없게 된 것입니다.

이 법의 목적은 청소년의 수면과 정신 건강을 보호하는 것이었습니다.`,
        },
        {
          img: "/ordinateur-2.png",
          video: "https://www.youtube.com/watch?v=xKudyIWrv-E",
          imgCredit: `PC방 분위기를 잘 담은 애니메이션. 출처 : YouTube`,
          text: `하지만 이 신데렐라 법은 한국 사회가 청소년을 어떻게 바라보는지를 보여줍니다. 청소년은 통제되고 감시되어야 하며, 미래의 성인을 준비시키는 대상으로 여겨집니다. 게임은 학업 실패의 원인으로 간주되며, 엄격한 규제가 필요하다고 여겨집니다.

그러나 이 법은 2021년 폐지되었습니다. 10년간의 논쟁 끝에 현실적이지 않다는 결론이 났습니다. 청소년들은 쉽게 법을 우회할 수 있었고, 이미 디지털은 삶의 일부가 되었기 때문입니다.

이 법은 더 깊은 질문을 던집니다: 학교 외의 영역에서도 청소년을 통제해야 할까요? 자유 시간마저 규제해야 할까요?`,
        },

        // Objet Casque de musique 2025

        {
          img: "/casque-1.png",
          imgCredit: `노래방 내부 전경. 출처 : mk.co.kr`,
          title: "한국 고등학생의 여가 문화",
          text: `성공적인 학업이 곧 성공적인 인생으로 이어지는 사회에서, 여가는 제한적이고 학업 뒤로 밀리기 쉽습니다. 고등학생들은 긴 학습 시간 속에서 간헐적으로 짧은 자유 시간을 가집니다. 그중 대표적인 여가 공간이 바로 ‘노래방(노래방)’입니다. 친구들과 감정을 풀고, 스트레스를 날릴 수 있는 공간으로 인기입니다.`,
        },
        {
          img: "/casque-2.png",
          imgCredit: `PC방. 출처 : Seoul Insider Guide`,
          text: `또 다른 인기 장소는 ‘PC방’입니다. 고성능 컴퓨터, 네트워크 게임, 간식 제공까지 완비된 이곳은 학업과 가정의 스트레스에서 잠시 벗어날 수 있는 공간입니다. 대부분 늦은 시간까지 운영되며, 지역에 따라 미성년자의 출입 제한 시간이 다릅니다 (예: 밤 10시 혹은 자정).

이러한 공간은 학업 압박으로부터의 임시 피난처 역할을 하며, 청소년들이 몇 시간 동안이라도 규칙과 공부를 잊을 수 있도록 도와줍니다.`,
        },
        // Objet photo 2025

        {
          img: "/photo-3.png",
          imgCredit: `© lightkorea.blogspot.com`,
          title: "2025년 한국의 고등교육 : 긴장 속의 미래",
          text: `2025년 한국의 대학은 첨단과 경쟁이 공존하는 이중적 공간입니다. 대학은 여전히 성공의 필수 관문으로 여겨지며, 서울대, 연세대, 고려대와 같은 명문대는 몇 년의 철저한 준비 없이는 입학하기 어렵습니다.

1990년대 이후 대학 진학률이 높아졌지만, 사교육 의존도는 여전히 높고, 학원 이용은 소득 격차를 심화시키고 있습니다. 출산율 저하로 학생 수는 줄고 있지만, 등록금은 여전히 높으며, 학생들의 경제적 불안정성도 커지고 있습니다.`,
        },
        {
          img: "/photo-4.png",
          imgCredit: `The Korea Herald 
Korean students sleep just 5.5 hours a day: survey
URL : https://www.koreaherald.com/article/3647929`,
          text: `교육 제도는 변화 중입니다. 실용 기술 중심 학과, 인공지능·디자인·소프트스킬을 융합한 프로그램들이 등장하고, 온라인 강의도 보편화되고 있습니다. 국제 프로그램에서는 영어 강의가 점점 확대되고 있습니다.

하지만 여전히 성과 중심 문화가 지배적입니다. 대학 순위에 따라 진로가 결정되며, 실패는 용납되지 않는 분위기 속에서 학생들은 끊임없는 경쟁에 시달립니다. 이로 인해 불안, 번아웃, 고립감 등 정신 건강 문제가 점점 심각해지고 있습니다.`,
        },
        {
          img: "/photo-5.png",
          imgCredit: `서울
이미지 출처 : Pexels
촬영자 : Paul Bill`,
          text: `최신식 캠퍼스의 화려한 외관 뒤에는 학생들의 모순된 현실이 숨겨져 있습니다. 일정은 촘촘히 짜여 있으며, 학점, 시험, 인턴십, 자격증, 공모전 등으로 하루가 가득합니다. 많은 학생들이 가족과 떨어져 좁은 방에서 살고, 생활비 마련을 위해 아르바이트를 병행합니다.

쉴 틈은 거의 없으며, ‘쉼’은 효율성과 성과에 밀려 아직까지는 충분히 존중받지 못합니다.

마치 고해상도 사진처럼, 2025년의 한국 대학은 눈부신 진보와 깊은 그늘을 동시에 보여줍니다. 향후 과제는 ‘학문적 우수성’, ‘사회적 정의’, ‘개인의 웰빙’을 어떻게 조화시킬 것인가에 달려 있습니다.`,
        },

        // Objet livre passé

        {
          img: "/livre-1.png",
          imgCredit: `조선 시대 교실 장면을 그린 그림.  
“서당에서”, 김홍도, 1745-1806  
출처: 위키백과`,
          title: "한국 규율 문화에 미친 다양한 영향",
          text: `한국 교육 내 규율 문화는 유교 경전에서 비롯된 신유교(조선 시대 1392-1897) 전통에 크게 영향을 받았습니다. 신유교는 도교와 불교적 요소가 융합된 철학으로, 조선 왕조에 의해 국가 이념으로 채택되어 위계질서와 권위 존중을 사회의 근간으로 삼았습니다. 교육은 지혜를 얻고 공동체의 복지에 기여하는 수단으로 여겨졌습니다. 이 전통은 오늘날의 교육 시스템에도 남아 있으며, 능력주의와 학업 성취를 강조합니다. 하지만 젊은 세대는 때때로 조선 시대를 억압적 시기로 비유하며 “헬 조선”이라 부르기도 하여, 경직되고 불평등한 사회에 대한 불만을 나타냅니다.`,
        },
        {
          img: "/livre-2.png",
          video:
            "https://www.youtube.com/clip/UgkxEtL-olFDSGpTLiWz8vksLzyEuclBfKAV",
          imgCredit: `오랫동안 실종된 줄 알았던 영화 《수업료》(Tuition, 1940), 최인규, 방한준 감독  
출처: 유튜브`,
          text: `현대 한국 교육 시스템은 일본 제국주의 식민 통치(1910-1945)의 영향도 받았습니다. 당시 교육은 일본어를 강제하고 복종하는 인재를 양성하는 도구였습니다. 규율 문화에도 식민지 시절의 영향이 남아 있는데, 예를 들어 당시 도입된 교복이나 집단 교사 경례 같은 의식에서 볼 수 있습니다. 오른쪽 영상은 일제강점기 촬영된 영화에서 발췌한 장면입니다.`,
        },
        {
          img: "/livre-2.png",
          imgCredit: `1970년대 고등학생 교실  
작가 미상`,
          text: `한국의 규율 문화는 군사 독재 시절과 산업화 과정의 영향도 큽니다. 1948년부터 1987년까지 지속된 군사 정권 하에서, 이승만(1948-1960), 박정희(1963-1979) 정부는 엄격한 규율과 권위 존중, 집단 복종을 강조했습니다. 박정희 정권 시기에는 빠른 산업화와 국가 통제 강화가 이뤄졌으며, 교육은 1970년대 산업화를 뒷받침하는 현대화 정책의 일환이었습니다.`,
        },
        // Objet photo
        {
          img: "/photo-1.png",
          imgCredit: `1981년 서울 연세대학교 입학원서 접수 장면  
국립현대사박물관 전시 사진, 출처: The Korean Times`,
          title: "한국의 고등교육 역사",
          text: `일제강점기 종식(1945년) 이후, 한국 고등교육은 국가 재건과 사회적 상승을 위한 핵심 무기가 되었습니다. 천연 자원이 부족한 한국에서 인적 자원이 가장 큰 자산이 되었고, 오늘날과 같은 교육 열풍이 시작되었습니다.`,
        },
        {
          img: "/photo-2.png",
          imgCredit: `서울대학교, 한국에서 가장 명문 대학 중 하나  
출처: 위키백과`,
          text: `대학 입시, 특히 수능은 한국 사회에서 중요한 사회 선발 도구입니다. 합격자는 안정적인 직업과 사회적 지위를 얻으며, 가족들은 자녀를 명문 대학에 보내기 위해 큰 비용을 투자합니다. 대표적인 명문 대학 그룹은 ‘SKY’(서울대, 고려대, 연세대)로, 매우 엄격한 입학 경쟁률을 보입니다.`,
        },
        //Objet Calendrier 1980
        {
          img: "/calendrier-1980-1.png",
          imgCredit: `1970년대 고등학교 입시 준비 학원 광고 포스터  
출처: 추억의 편린들`,
          title: "한국 학원 역사: 그림자 교육",
          text: `학원은 사설 보충 교육 기관입니다. 대부분의 한국 학생은 정규 수업 후 밤늦게까지 학원에 다니며, ‘그림자 교육’이라 불립니다. 17세기부터 시작된 학원은 읽기, 쓰기, 산수를 가르쳤고, 20세기 들어 본격적으로 확산되었습니다. 일제강점기에는 성장에 제약이 있었으나, 1960-70년대 이후 급속히 늘어났고, 높은 비용에도 불구하고 매우 인기 있습니다.`,
        },
        {
          img: "/Calendrier-1980-2.png",
          imgCredit: `대전 둔산동에 위치한 여러 학원 건물  
출처: 위키백과`,
          text: `1970년대에는 이미 1400여 개의 학원이 운영되며 산업으로 성장했습니다. 1980년대 전두환 대통령은 교육 개혁(7.3 개혁)을 통해 학원 출입을 대학 입시에 실패한 고등학생과 예체능 전공자에 한정했습니다. 그러나 2000년 헌법재판소에서 위헌 판결을 받아 다시 학원이 증가했습니다.

2023년에는 학생 수 감소에도 불구하고 사교육 지출이 27조 1천억 원에 달하며, 약 80% 학생이 학원 수업을 듣습니다. 이로 인한 비용 부담은 출산율 감소 원인 중 하나로 지적됩니다.`,
        },
        // Objet Sac de cours
        {
          img: "/sac-cours-1980-1.png",
          imgCredit:
            "조선시대 한문 쓰기 수업 장면. 출처: 동아일보 데이터베이스.",
          title: "시대에 따른 교과목의 변화 :",
          text: `한국 학교에서 가르치는 과목들은 시대에 따라 크게 변화해 왔습니다. 조선 시대(1392-1897)부터 현재에 이르기까지, 한국의 교육 시스템은 정치적, 역사적 격변에 깊은 영향을 받았습니다.

조선 왕조 하에서는 유교적 신유학 이념을 기반으로 엘리트를 양성하는 교육이 이루어졌으며, 왕국의 질서와 안정을 보장하는 데 목적이 있었습니다. 한문 고전 암기와 예절 교육이 지적 수양의 핵심이었습니다.
`,
        },
        {
          img: "/sac-cours-1980-2.png",
          imgCredit: "1970년대 군사 훈련 모습. 출처: 환일고 공식 홈페이지.",
          text: `일제강점기(1910-1945) 동안 교육은 제국주의 동화 정책의 도구가 되었습니다. 일본어가 유일한 교육 언어로 강제되었고, 산수, 역사, 지리 등 현대적 과목도 식민지 관점에서 가르쳐졌습니다. 한국 문화는 체계적으로 지워졌으며, 학교는 전쟁 준비와 제국에 복종하는 공간이 되었습니다.

제2차 세계대전 이후, 이러한 지배에 대한 거부는 즉각 교육 개혁으로 이어졌습니다. 한국어가 교실에 다시 도입되고, 교육은 국가 역사와 애국 이념에 중점을 두게 되었습니다. 고등학교에서는 군사 훈련(교련)이 의무화되었으며, 이는 권위주의와 냉전 시기의 정치 상황을 반영합니다.
`,
        },
        {
          img: "/sac-cours-1980-3.png",
          imgCredit:
            "2024 글로벌 미래교육 전시회에서 학생들이 가상현실을 이용해 미래형 교실에서 수업을 듣고 있다. 출처: 호남교육신문.",
          text: `1990년대 이후 민주화와 세계화가 진행되면서 교육은 권위적 모델에서 참여적 모델로 전환되었습니다. 사회과학, 정보기술, 비판적 사고, 창의적 교육 등이 대폭 도입되어 과목이 다양해졌습니다. 학교는 빠르게 변화하는 사회에 적응할 수 있는 인재 양성을 목표로 하지만, 성과 중심의 논리는 여전히 강하게 남아 있습니다.
`,
        },
        {
          img: "/journal-1.png",
          imgCredit:
            "2000년과 2019년 사이 세계 및 한국의 자살률 비교 그래프. 출처: UNICEF.",
          title: "자살: 한국 교육 내의 조용한 고통",
          text: `자살은 한국 사회에서 가장 심각한 공중보건 문제 중 하나입니다. OECD 국가 중 한국의 자살률이 가장 높으며, 2024년에는 14,439명의 자살자가 보고되었고 하루 평균 40명이 넘는 사람이 자살합니다. 이는 청소년 및 젊은 성인 사망 원인 1위입니다. 2023년에는 초·중·고 학생 자살자가 214명으로 8년 만에 두 배 증가하며 최고치를 기록했습니다. 이러한 문제는 학교 내 심리적 지원 강화의 필요성을 보여줍니다.

이를 위해 여러 정부가 2004년부터 2023년까지 여러 5개년 계획을 도입했으며, 최신 계획은 2027년까지 자살률을 30% 줄이는 것을 목표로 하고 있습니다.
`,
        },
        {
          img: "/journal-2.png",
          imgCredit:
            "서울 마포대교에 설치된 자살 방지 센서와 '일상의 작은 순간들' 사진들. 출처: RFI / 프레데릭 오자르디아스.",
          text: `2011년, 이명박 정부는 ‘자살예방법’을 제정해 자살 예방을 강화하고, 자살 시도자 추적 관리를 포함한 조치를 도입했습니다.

하지만 교육 현장에는 여전히 젊은이들의 고통을 효과적으로 돕기 위한 자원이 부족합니다. 청년 자살 원인에는 정신 건강 문제, 가족 갈등, 그리고 학업 압박이 포함됩니다. 특히 학업 스트레스는 교육 입문부터 고등학교 시기에 극심해집니다. 한국 학생들은 미국 학생에 비해 두 배 이상의 시간 동안 복습에 매진하며, 이는 깊은 스트레스와 심각한 결과를 초래할 수 있습니다.
`,
        },
        {
          img: "/journal-3.png",
          imgCredit:
            "2023년 9월 4일, 동료 교사의 자살 이후 교사들의 모습. 출처: 정연제 / AFP.",
          text: `한국 교육 시스템에서 자살 문제는 학생뿐 아니라 교사에게도 영향을 미칩니다. 학부모의 과도한 압박과 괴롭힘으로 인해 2015년부터 2023년 사이 168명의 교사가 스스로 목숨을 끊었습니다. 2023년 여름, 한 젊은 여교사가 교실 옷장 안에서 숨진 채 발견되어 교육계에 큰 충격을 주었습니다. 그녀는 일기에서 ‘가슴이 답답하고 일의 광기에 압도당했다’고 적으며 조용한 고통을 호소했습니다. 이에 2023년 9월 4일 전국 교사 파업이 벌어졌고, 학부모의 과도한 압박에 대한 문제를 사회에 알렸습니다.
`,
        },
        {
          img: "",
          imgCredit: "",
          title: "규제",
          text: `
<strong>2001년 – 사립고 자율화 시작</strong>

자율형 사립고(자율형 사립고)의 개념 도입으로 교육의 다양성과 학교의 자율성을 높이고자 했습니다. 이 학교들은 교육부 지침 아래서도 행정, 교육과정, 학생 선발에 더 큰 자유를 누렸습니다.

<strong>개혁 목표</strong>

학생들의 재능과 관심에 맞춘 다양한 교육 과정 제공.
교육 혁신과 학업 우수성 장려.
지역사회 요구에 맞춘 학교 자율성 강화.

<strong>변화와 영향</strong>

초기에는 제한된 수의 학교였으나 점차 확대되었습니다. 다만 학비 상승과 경쟁적 선발로 사회적 불평등을 심화시킨다는 비판도 있었습니다. 2019년 정부는 2025년까지 자율형 사립고를 일반고로 전환하는 계획을 발표해 교육 형평성을 강화하려 했습니다.
`,
        },
        {
          img: "",
          imgCredit: "",
          text: `
<strong>2006년 – 학원 야간 통금 시행</strong>

2006년 9월, 교육 당국은 학원의 운영 시간 제한을 허용하는 법률을 개정했습니다. 이는 사교육 의존도를 줄이고 학생들의 부담을 완화하려는 목적이었습니다. 지방 교육청이 학원 운영시간을 규제할 수 있게 권한을 강화했습니다.

여러 지방에서 22시 통금이 도입되었으나, 지역별로 시행 강도와 적용 범위가 다르게 나타났습니다.

<strong>개혁 목표</strong>

학생들이 더 많은 휴식을 취할 수 있도록 학습 시간 제한.
고가의 사교육 의존도 감소.
야간 학습 제한을 통한 학생 복지 증진.

<strong>변화와 영향</strong>

통금 시행 후에도 사교육비와 학습 시간 감소가 뚜렷하지 않았고, 학년과 경제적 배경에 따라 효과가 달랐습니다. 학원들은 주말 수업을 늘리고, 일부 학부모들은 개인 과외를 찾는 등 우회 방법을 사용했습니다. 일부 학원은 통금 시간을 무시하고 영업을 계속하기도 했습니다.
`,
        },
        {
          img: "",
          imgCredit: "",
          text: `
<b>2008년 – 마이스터고 출범</b>

2008년, 이명박 정부는 독일 직업학교 모델을 참고해 마이스터고를 도입했습니다. 이는 전통적 직업학교에 대한 기피와 산업 현장의 숙련 노동자 부족에 대응하기 위한 조치였습니다.

2010년부터 기존 직업학교 50곳을 마이스터고로 전환할 계획이었으며, 산업계와 협력한 전문 교육을 제공했습니다.

<b>개혁 목표</b>

기업 수요에 맞춘 맞춤형 교육 과정 제공.
학생들의 노동시장 진입 지원.
직업교육에 대한 사회적 인식 개선.

<b>변화와 영향</b>

2010년 21개, 2022년 54개로 빠르게 확대되었습니다. 2013-2017년 졸업생 취업률이 90% 이상으로 성공적인 직업교육 사례로 평가됩니다.

다만 전통 직업학교 대비 운영비용이 높아 수익성 문제도 제기되었습니다.
`,
        },
        {
          img: "",
          imgCredit: "",
          text: `
<b>2009년 – 교육부 산하 청소년 진로 체험 지원 정책</b>

2009년 교육부는 학생들의 진로 탐색 및 직업 체험을 지원하기 위해 다양한 프로그램을 도입했습니다.

<b>주요 내용</b>

- 진로 체험 학습 확대.
- 학교와 기업 간 협력 강화.
- 직업 상담 및 멘토링 지원.

<b>개혁 목표</b>

학생들의 현실적 진로 설계 지원.
다양한 직업 세계 경험 제공.
진로 결정을 돕는 교육 환경 조성.

<b>변화와 영향</b>

프로그램 도입 후 학생들의 진로 만족도와 취업 준비도가 개선되었습니다. 그러나 도시와 농촌, 지역별 자원 격차는 여전히 문제로 남아 있습니다.
`,
        },
        // uniforme 2025
        {
          img: "/uniforme-4.png",
          imgCredit: `1970년대 여학생 교복
작가 미상.`,
          title: "오늘날의 교복: 완화로 향하는가?",
          text: `2025년에도 교복은 한국 교육 시스템에서 필수적인 요소로 남아 있지만, 그 의미와 형태는 변화했다. 교복은 여전히 단결과 중립성의 가치를 상징하지만, 이제는 명문 학교나 명성 있는 지역 소속을 나타내는 표시로 인식된다.

2000년대 이후 한국은 소비 증가, 적당한 개인주의, 학생 권리 인식의 사회적 변화를 겪었다. 그 결과, 과거 엄격했던 교복 착용 규칙은 점차 완화되었으며, 부모, 미디어, 청소년 스스로의 압력에 영향을 받았다.

오늘날 학교는 더 많은 유연성을 허용한다. 학생들은 여러 공인된 모델 중에서 선택할 수 있으며(여름/겨울 버전, 치마 또는 바지, 반팔 또는 긴팔). 일부 학교는 교복 착용이 의무가 아닌 '자율복 착용일'도 허용한다. 그러나 이러한 변화에도 불구하고, 교복은 각 학교별 내부 규정에 의해 여전히 엄격히 관리되며, 1980년보다 덜 엄격하긴 하지만 외모와 복장에 관한 요구사항을 유지한다.`,
        },
        {
          text: `1980년대 이후 한국 학생들은 여전히 구조화된 틀 안에서 개성 표현 공간을 확보해왔다. 2010년대부터 학생 복지, 학교 내 괴롭힘, 표현의 자유에 관한 논의가 교육 모델의 경직성을 재고하는 전환점이 되었다.

2025년 현재:

- 여학생은 1980년대 허용되지 않았던 치마 대신 바지를 입을 수 있다.
- 남학생은 깔끔한 상태를 유지하는 한 긴 머리 스타일을 할 수 있다.
- 대부분 학교에서는 편안함을 위해 흰색 또는 검은색 운동화 착용이 허용된다.
- 가벼운 메이크업(가벼운 파운데이션, 틴트 밤, 눈썹)은 허용되나 규제된다.

학생들은 또한 학교 로고가 들어간 맞춤형 재킷을 온라인이나 민간 공급처에서 구입해 착용한다. 이는 학교 정체성과 개인 스타일이 결합된 '교복 시장'의 성장을 반영한다.

이처럼 교복에 대한 인식은 변화했다. 개인을 중립화하는 도구에서 학교 틀 내에서 미적 구별과 주장 공간으로 전환되고 있다.`,
        },
        {
          img: "/uniforme-6.png",
          imgCredit: `저작권 없는 이미지 | Pexels
Nguyễn Nguyên`,
          text: `1980년대 이후 가장 눈에 띄는 변화 중 하나는 외모 규제의 변화이다. 이전에는 머리 염색이나 메이크업 흔적만 있어도 제재가 가해졌으나, 지금은 더 유연한 접근법이 적용된다.

자연스러운 톤(갈색, 밝은 밤색) 염색은 대체로 허용되지만, 보수적인 일부 공립학교에서는 여전히 금지된다. 머리 스타일은 K-pop 문화에서 영감을 받은 다양한 형태가 있으며, '단정함'을 유지해야 한다.

고등학생 사이에서는 은은한 메이크업이 허용되지만, 강렬한 립스틱이나 인조 속눈썹은 금지된다.
간단한 액세서리(시계, 작은 귀걸이, 얇은 헤어밴드)도 허용된다.
이러한 관용은 교사와 학생 간 갈등을 줄이고 학생 복지를 증진하며 정체성 권리를 존중하는 데 목적이 있다. 하지만, 사립 명문고 등 일부 학교는 여전히 더 엄격한 기준을 유지한다.`,
        },
        {
          img: "/uniforme-5.png",
          imgCredit: `경기도 외국어고 제공, Newsis 보도
photo@newsis.com
URL: https://mobile.newsis.com/view/NISX20130708_0012212002#_PA`,
          text: `1980년대 이후 교복 규정은 상당히 완화되었지만, 여전히 사회적 규제 수단으로 기능하며 규칙은 거의 도전받지 않는다. 제재는 여전히 존재하지만 과거보다는 덜 굴욕적이다:

- 학교 기록부에 경고 기록,
- 구두 경고,
- 학부모 면담,
- 경우에 따라 규정에 맞는 교복 재구매 요구.

변화한 점은 학생과 규칙 간 관계의 성격이다. 학생회가 교복 정책 결정에 참여하는 경우가 늘었고, 청소년들은 SNS를 통해 요구를 표출하고 부당함을 고발한다.

그러나 자유주의적 이미지 이면에 암묵적 규범은 여전하다. 여학생은 복장과 메이크업에 지속적 압박을 받고, 과도하게 벗어난 학생은 소외될 수 있다.

요컨대, 2025년 교복은 현대화와 전통, 개인 자유와 집단 압력, 제도적 통제와 개인적 해석 사이 긴장 상태를 반영한다.`,
        },
        // Sac de cours 2025

        {
          img: "/sac-2025-1.png",
          imgCredit: `서울
저작권 무료 이미지 | Pexels
촬영: Paul Bill
`,
          title: "2025년 학생이 들고 다니는 것: 속도가 다른 학교로의 길",
          text: `2025년 대한민국의 학생이 메고 다니는 가방에는 더 이상 교과서만 들어 있지 않습니다. 태블릿, 전자펜, 프로젝트 노트, 온라인 수업용 이어폰, 때로는 하루 종일 연결된 학습을 버티기 위한 보조 배터리까지 담겨 있습니다. 디지털 기술은 이제 교육의 중심 도구로 자리 잡았고, 대화형 학습 플랫폼, 디지털 교과서, 온라인 평가가 학교생활의 일상이 되었습니다.`,
        },
        {
          img: "",
          imgCredit: ``,
          text: `하지만 단순히 도구만 변한 것은 아닙니다. 교육 내용과 기대 수준 또한 깊이 있게 변화하고 있습니다. 수학, 과학, 언어와 같은 기본 과목은 여전히 중요하지만, 일부 학교에서는 정서 지능, 협력, 지속 가능성, 디지털 문화 등의 새로운 수업이 등장하고 있습니다. 예전에는 주변적인 것으로 여겨졌던 과목들이, 이제는 변화하는 사회에서 적응력, 소통, 비판적 사고와 같은 핵심 역량으로 인식되고 있습니다.

그러나 이러한 변화는 모든 학교에 균등하게 적용되지는 않습니다. 주요 도시나 부유한 지역의 학교에서는 초등학교 때부터 코딩을 배우는 반면, 다른 학교에서는 한 반이 컴퓨터 한 대를 공유해야 하는 경우도 있습니다. 이런 기술 격차는 기존의 학업 성취 중심 교육 시스템에서 이미 존재하는 불평등을 더욱 심화시키고 있습니다.`,
        },
        {
          img: "/sac-2025-2.png",
          imgCredit: `학생들이 공부하는 도서관
저작권 무료 | Pexels
작성자 jason hu
`,
          text: `또한 보이지 않지만 분명히 존재하는 또 하나의 압박이 있습니다. 바로 더 많은 것을, 더 빠르게, 더 일찍 배워야 한다는 기대입니다. 가방은 점점 무거워지는 정신적 짐의 상징이 되었습니다. 학업적 기대, 사회적 압박, 감정 관리까지 — 이 모든 것이 그 속에 담겨 있습니다. 이 무게는 단순히 킬로그램으로 측정할 수 없습니다. 그것은 침묵 속의 무게, 피로감, 의심으로 나타납니다.

그럼에도 불구하고, 이 가방 속에는 더 인간적이고, 더 포용적이며, 현실에 뿌리를 둔 새로운 배움의 가능성에 대한 희망도 담겨 있습니다.`,
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
