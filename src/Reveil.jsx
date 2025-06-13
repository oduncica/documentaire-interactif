import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import "./Reveil.css";
import { FaArrowLeft } from "react-icons/fa";
import LanguesDrapeau from "../src/components/LanguesDrapeau";

function Reveil() {
  const revealRef = useRef(null);
  const navigate = useNavigate();
  const [selectedLang, setSelectedLang] = useState("fr");

  useEffect(() => {
    if (revealRef.current) {
      const deck = new Reveal(revealRef.current, {
        controls: true,
        progress: true,
        hash: true,
        keyboard: true,
        touch: true,
        embedded: true,
      });
      deck.initialize();
    }
  }, []);

  // Traductions (exemple, à compléter)
  const t = {
    fr: {
      retour: "Retour",
      slides: [
        // Objet Reveil Passé
        {
          img: "/examen-1.png",
          imgCredit: `Classe de terminale, 2020 “L’éducation en Corée du Sud” © Korea's Owls`,
          title: "L’examen qui détermine une vie : Le Seungeung",
          text: `Connu sous le nom de "examen de la fin du secondaire" en Corée du Sud, est un événement majeur dans la vie des étudiants. Il représente non seulement un test de compétences académiques, mais aussi un rite de passage social qui détermine souvent l'avenir universitaire et professionnel des jeunes.

L'examen intense de huit heures, qui teste diverses matières, est le résultat de plusieurs années de préparation rigoureuse. C'est un moment décisif pour les étudiants, qui se retrouvent sous une pression immense pour réussir.`,
        },
        {
          img: "/examen-2.png",
          imgCredit: `Les élèves plus jeunes encouragent les lycéens alors qu’ils se rendent, ce jeudi, à l’examen d’entrée à l’université, déterminant pour leur avenir. Comme à l’accoutumée, la police a assuré l’escorte des candidats en retard. © Elise Hu/NPR`,
          // title: "L’examen qui détermine une vie : Le Seungeung",
          text: `Le jour de l'examen, les rues sont presque désertes, car même les bureaux et magasins ajustent leurs horaires pour permettre à tout le monde de se concentrer sur cet événement. L'État déploie également des mesures de soutien, comme des augmentations du nombre de transports publics pour faciliter les déplacements des candidats et des policiers qui régulent la circulation pour éviter tout retard.

L'examen Seungeung n'est pas seulement une épreuve académique, il incarne toute une culture où l'éducation et la réussite sont perçues comme des clefs essentielles pour accéder à un avenir meilleur.`,
        },
        {
          img: "/examen-3.png",
          imgCredit: `Des parents prient pour la réussite de leurs enfants dans un temple à Séoul. © Ed Jones/AFP/Getty Images`,
          title: "L’examen qui détermine une vie : Le Seungeung",
          text: `L’intensité de l'examen Seungeung en Corée du Sud porte l’empreinte d’un passé où l'éducation a toujours été perçue comme le moyen ultime de réussite sociale. Depuis des siècles, la culture coréenne valorise le travail acharné et la discipline, des valeurs transmises de génération en génération.

Dans un pays où l’histoire a souvent été marquée par des bouleversements, de la guerre à la division, l’éducation a été vue comme un levier pour garantir un avenir plus stable. Aujourd'hui, cette vision est toujours présente, car les étudiants, encore soumis à une pression intense pour réussir, héritent de l’idée que leur avenir dépend largement de leur performance à cet examen.`,
        },
        // Objet cassette passé
        {
          img: "/cinema-1.png",
          imgCredit: `Our Twisted Hero (우리들의 일그러진 영웅), Park Jong-won, 1992.  Source : YouTube`,
          title:
            "La culture réglementaire dans l’éducation à travers le cinéma sud-coréen",
          text: `La culture réglementaire dans l’éducation est un sujet souvent représenté dans le cinéma sud-coréen, notamment dans de grands films cultes : Yalkae, A joker in high school (고교얄개,1976), Our Twisted Hero (우리들의 일그러진 영웅, 1992) ou encore Friend (친구, 2001),  ces œuvres cinématographiques nous permettent de nous faire une image de la culture réglementaire de cette époque, et parfois à travers des scènes très marquantes. Par exemple, cet extrait est issu du film Our Twisted Hero (1992) et raconte l’histoire d’un jeune écolier entre les années 50 à 60. Dans cette scène, on assiste à un châtiment corporel de la part d’un professeur, à l’encontre d’un élève qui a triché à un contrôle, une punition  commune à l’époque, mais qui nous parait très violente aujourd’hui.`,
        },
        {
          img: "/cinema-2.png",
          imgCredit: `Affiche du film Friend (친구, 2001) Source : Wikipédia`,
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
          imgCredit: `Williams, Hanson A., Jr. (1952), Three South Korean students posant by a car, Pepperdine University Special Collections and University Archives,URL`,
          // title: "The uniform",
          text: `Chaque élément de la tenue scolaire est minutieusement codifié. Il ne s’agit pas simplement d’une obligation de porter un uniforme, mais d’un contrôle exhaustif de l’apparence. Les écoles imposent des modèles validés par les rectorats, et le moindre écart est réprimandé.

Chez les filles, la jupe doit descendre strictement jusqu’au niveau du genou. La moindre tentative de raccourcissement — geste souvent interprété comme une volonté d’autonomie ou de séduction — est immédiatement sanctionnée. Les garçons portent un pantalon droit, sans fioriture, coupé dans un tissu sombre. Les vêtements doivent être bien repassés, sans pli excessif, et les chemises parfaitement boutonnées. Les chaussures doivent être entières noires, sans semelles compensées ni marques visibles. Les lacets doivent être noués de manière réglementaire. Les chaussettes sont également normalisées : blanches ou noires unies, sans motifs, dentelles ou couleurs vives. La tenue comprend parfois des accessoires imposés comme une cravate, un insigne d’école ou un brassard de discipline. Tout ajout personnel — badge, broche, ceinture colorée — est considéré comme une infraction. Le port de sacs à dos est également réglementé : taille standard, couleurs neutres, et pas de décoration individuelle.

Cette attention obsessionnelle à la tenue traduit une vision de l’éducation comme domestication des corps, où toute tentative d’individualisation est perçue comme une menace pour l’ordre collectif.`,
        },
        {
          img: "/uniforme-1.jpg",
          imgCredit: `Williams, Hanson A., Jr. (1952), Three South Korean students posant by a car, Pepperdine University Special Collections and University Archives,URL`,
          // title: "The uniform",
          text: `L’uniforme scolaire dans les années 1980 s’étend à des règles de contrôle physique extrêmement précises, notamment sur les cheveux, les accessoires corporels et l’expression de la féminité.

Les garçons doivent avoir les cheveux courts, souvent coupés au-dessus des oreilles, avec la nuque et le front dégagés. Toute tentative de frange, de coupe stylisée ou d’utilisation de gel est proscrite. Les filles ne peuvent pas porter les cheveux détachés au-delà des épaules. Les cheveux longs doivent être attachés à l’arrière, sans accessoires visibles. Les barrettes colorées ou les élastiques fantaisie sont interdits. Le maquillage est prohibé : aucune trace de fond de teint, rouge à lèvres, eyeliner ou vernis à ongles n’est tolérée. Même un simple baume à lèvres est parfois considéré comme suspect. Les bijoux sont formellement bannis, y compris les boucles d’oreilles discrètes. Les perçages sont réprimandés et, dans certains cas, les enseignants peuvent exiger leur retrait immédiat, sous peine de sanction.

Certaines écoles organisent des contrôles physiques à l’entrée, où des enseignants inspectent la tenue et l’apparence des élèves, parfois à l’aide de règles pour mesurer la longueur des jupes ou des cheveux. Ce contrôle excessif du corps, particulièrement prononcé chez les filles, reflète une vision patriarcale et conservatrice de la jeunesse, où la conformité passe par l’effacement de la sexualité, de la beauté, et du style personnel.`,
        },
        {
          img: "/uniforme-3.png",
          imgCredit: `Williams, Hanson A., Jr. (1952), Three South Korean students posant by a car, Pepperdine University Special Collections and University Archives,URL`,
          // title: "The uniform",
          text: `Le non-respect des règles vestimentaires n’est pas une affaire mineure : il donne lieu à un système de sanctions formalisé, souvent humiliant pour les élèves. Chaque infraction — jupe raccourcie, mèche de cheveux teintée, maquillage visible — peut entraîner une série de punitions codifiées. Les sanctions varient selon les établissements mais suivent une logique commune :

Remarques inscrites dans le carnet scolaire, pouvant impacter la réputation de l’élève.
Travaux disciplinaires (nettoyage, corvées dans l’école).
Présentations humiliantes devant la classe ou l’ensemble de l’établissement.
Appels aux parents ou signalement aux autorités éducatives.
Dans certains cas extrêmes : exclusion temporaire ou coupe de cheveux imposée.

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
          imgCredit: `Long thought lost, Tuition (수업료), Choi In-gyu, Bang Han-joon, 1940. Source : YouTube
`,
          // title:
          //   "Long thought lost, Tuition (수업료), Choi In-gyu, Bang Han-joon, 1940. Source : YouTube",
          text: `La culture réglementaire sud-coréenne est également influencée par la période dictatoriale du pays et son développement industriel : en effet, les dictatures sud-coréennes (1948-1987) ont instauré des structures autoritaires et hiérarchiques. Les régimes de Syngman Rhee (1948-1960) et Park Chung-hee (1963-1979) ont imposé une discipline stricte, promu le respect de l'autorité et renforcé l'obéissance collective. Sous la dictature de Park Chung-hee, la culture réglementaire a été ancrée dans une industrialisation rapide et un contrôle étatique rigoureux, favorisant l'efficacité et la conformité au détriment des libertés individuelles. L’éducation faisait également partie de son plan de modernisation du pays dans les années 70 qui visait à renforcer l’industrialisation du pays. 


`,
        },
        {
          img: "/livre-2.png",
          imgCredit: `Une classe de lycéens dans les années 70.
Auteur inconnu`,
          // title: "Les études supérieures en Corée du sud",
          text: `L’histoire des études supérieures en Corée du sud est étroitement liée à l’évolution du pays au XXème siècle : en effet, après la fin de la colonisation japonaise en 1945, l’éducation est devenue une arme vitale pour permettre au pays de se redresser et un pilier de l’ascension sociale. La Corée étant un pays sans ressources naturelles abondantes, le savoir-faire humain est devenu la richesse première, et c’est ainsi qu’est née cette fièvre de l’éducation qu’on connaît si bien aujourd’hui. `,
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

Les filles peuvent porter des pantalons au lieu des jupes, ce qui n’était pas permis en 1980.
Les garçons peuvent adopter des coiffures plus longues, tant qu’elles restent "soignées".
Le port de baskets blanches ou noires est autorisé dans la majorité des établissements, pour plus de confort.
Le maquillage discret (fond de teint léger, baume teinté, sourcils) est toléré, bien qu’encadré.

Les élèves peuvent également porter des vestes personnalisées à l’effigie de leur école, achetées en ligne ou via des fournisseurs privés, mêlant identité scolaire et style personnel. Ce phénomène traduit l’essor d’un "marché de l’uniforme", où la discipline se conjugue avec le marketing et le goût du design.

Ainsi, le rapport à l’uniforme s’est renversé : d’un outil de neutralisation de l’individu, il devient parfois un espace de distinction et de revendication esthétique, dans les limites du cadre scolaire. 
 `,
        },
        {
          img: "/uniforme-5.png",
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
          img: "/uniforme-6.png",
          imgCredit: `Photo fournie par le lycée de langues étrangères de Gyeonggi au journal Newsis 
photo@newsis.com
URL : https://mobile.newsis.com/view/NISX20130708_0012212002#_PA 

`,
          text: `Malgré un net assouplissement depuis les années 1980, le port de l’uniforme reste un outil de régulation sociale, et les règles associées sont rarement remises en question par les institutions. Les sanctions existent toujours, même si elles sont moins humiliantes qu’autrefois :

Remarques écrites dans le dossier scolaire,
Avertissements oraux,
Réunions avec les parents,
Dans certains cas, obligation de racheter un uniforme conforme.

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
          img: "/ordinateur-1.png",
          imgCredit: `Une animation qui représente bien l’ambiance des PC Bang. Source : YouTube
`,
          text: `Mais cette Loi Cendrillon en dit long sur la manière dont la jeunesse est perçue dans la société sud-coréenne : elle doit être contrôlée, surveillée, afin de les formater à leur future vie d’adulte. Les jeux vidéos sont ainsi perçus comme une possible cause d’échec scolaire, et doivent être strictement encadrés. Finalement, la loi est abrogée en 2021, après dix ans de débats : elle est perçue comme irréaliste au vu de l’omniprésence des écrans dans la vie des plus jeunes et facilement contournable par ces derniers. 

Cette loi soulève alors des questions plus profondes : faut-il contrôler la jeunesse au-delà de la sphère scolaire ? Faut-il les limiter même durant leurs moments de liberté ? 
 `,
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
          imgCredit: `Légende
`,
          title:
            "Les études supérieures en Corée du Sud : un avenir sous haute tension",
          text: `L’enseignement supérieur en Corée du Sud en 2025 reflète les paradoxes d’un pays à la pointe de l’innovation, mais toujours marqué par une compétition féroce. L’université reste perçue comme le passage obligé vers la réussite sociale. Les grandes écoles comme Seoul National University, Yonsei ou Korea University incarnent des sommets convoités, souvent inaccessibles sans des années de préparation intense.
          
          Malgré la démocratisation de l’accès à l’université depuis les années 1990, les inégalités se creusent. Le recours massif aux instituts privés (hagwons) accentue les écarts entre les familles aisées et les autres. Alors que le nombre d’élèves diminue à cause du vieillissement démographique, les frais de scolarité, eux, restent élevés, et la précarité étudiante devient une réalité de plus en plus visible.
 `,
        },
        {
          img: "/photo-4.png",
          imgCredit: `Légende
`,
          text: `Le système éducatif évolue pourtant. Des filières alternatives émergent : écoles d’ingénierie appliquée, formations hybrides mêlant design, IA et soft skills. L’enseignement devient plus flexible, certains cursus sont disponibles entièrement en ligne, et l’anglais s’impose peu à peu comme langue d’enseignement dans de nombreux programmes internationaux.

Mais cette transformation a ses limites. La pression à la performance reste omniprésente. L’obsession du classement universitaire continue de dicter les choix d’orientation. De nombreux étudiants décrivent leur quotidien comme une course d’endurance, où l’échec n’a pas sa place. La santé mentale devient un enjeu majeur : anxiété, burnout, sentiment d’isolement sont en hausse, dans un environnement où l’on parle peu de vulnérabilité.
 `,
        },
        {
          img: "/photo-5.png",
          imgCredit: `Un PC Bang. Source : Seoul Insider Guide
`,
          text: `Mais derrière les chiffres d’admission et les façades vitrées des campus modernes, la vie étudiante se heurte à des contradictions. L’agenda est millimétré, rythmé par les crédits à valider, les examens, les stages, les certifications de langues et les concours. Beaucoup d’étudiant·es vivent loin de leurs familles, dans des logements exigus, cumulant parfois des petits boulots pour subvenir à leurs besoins. Les moments de pause sont rares, et les espaces de respiration encore trop peu valorisés dans une culture où l’efficacité prime sur le lâcher-prise.

À l’image d’une photo en haute définition, l’université sud-coréenne de 2025 montre à la fois une façade de modernité éclatante et des zones d’ombre persistantes. Le défi pour les années à venir ? Réconcilier excellence académique, justice sociale et bien-être individuel.
 `,
        },
        //Sac de cours 2025

        {
          img: "",
          imgCredit: `Légende
`,
          title:
            "Ce que porte un élève en 2025 : vers une école à plusieurs vitesses",
          text: `Le sac à dos d’un élève sud-coréen en 2025 ne contient plus seulement des manuels. Il transporte avec lui des tablettes, des stylos électroniques, des carnets de projets, des écouteurs pour les cours en ligne et, parfois, une batterie externe pour survivre à une journée d’apprentissage connecté. Le numérique s’est imposé comme un outil pédagogique central, avec des plateformes d'exercices interactifs, des manuels numériques et des évaluations en ligne qui rythment désormais le quotidien scolaire.
 `,
        },
        {
          img: "",
          imgCredit: `Légende
`,
          text: `Mais au-delà des outils, ce sont les contenus et les attentes qui ont profondément changé. Si les fondamentaux — mathématiques, sciences, langues — restent incontournables, on voit émerger dans certains établissements des modules d’intelligence émotionnelle, de coopération, de développement durable ou de culture numérique. Des matières naguère considérées comme périphériques deviennent stratégiques dans un monde où l’adaptabilité, la communication et la pensée critique sont des compétences clés.
Cette évolution, cependant, n’est pas homogène. Le contraste est frappant entre les écoles bien dotées, souvent situées dans les quartiers favorisés ou les villes majeures, et celles qui peinent encore à se moderniser. Là où certains élèves apprennent à coder dès le primaire, d’autres doivent partager un seul ordinateur pour toute une classe. Cette fracture technologique renforce des inégalités déjà présentes dans un système où la performance scolaire reste le critère principal de réussite.
 `,
        },
        {
          img: "",
          imgCredit: `Un PC Bang. Source : Seoul Insider Guide
`,
          text: `À cela s’ajoute une pression invisible, mais bien réelle : celle de devoir maîtriser toujours plus de choses, plus tôt, et plus vite. Le sac à dos devient alors le symbole d’une charge mentale croissante, entre attentes académiques, pression sociale et gestion des émotions. Il ne pèse pas qu’en kilos : il pèse en silence, en fatigue, en doutes. Et pourtant, il contient aussi l’espoir d’une école qui commence à s’ouvrir à d’autres formes de savoir, plus humaines, plus inclusives, plus ancrées dans le réel.
 `,
        },
      ],
    },
    kr: {
      retour: "뒤로가기",
      slides: [
        {
          img: "/examen-1.png",
          imgCredit: `고등학교 3학년, 2020년 “대한민국의 교육” © Korea's Owls`,
          title: "인생을 결정짓는 시험: 수능",
          text: `한국에서 "고등학교 졸업 시험"으로 알려진 수능은 학생들의 삶에서 매우 중요한 행사입니다. 이는 학업 능력을 평가하는 시험일 뿐만 아니라, 종종 젊은이들의 대학 및 직업 미래를 결정짓는 사회적 통과의례이기도 합니다.

여러 과목을 평가하는 8시간의 집중 시험은 수년간의 철저한 준비의 결과입니다. 학생들은 이 시험을 성공적으로 치르기 위해 엄청난 압박을 받습니다.`,
        },
        {
          img: "/examen-2.png",
          imgCredit: `어린 학생들이 대학 입시를 치르는 고등학생들을 응원하고 있습니다. 경찰은 지각한 수험생들을 위해 호송을 제공했습니다. © Elise Hu/NPR`,
          // title: "인생을 결정짓는 시험: 수능",
          text: `시험 당일, 거리와 상점들은 거의 비어 있습니다. 모두가 이 중요한 행사에 집중할 수 있도록 근무 시간이 조정됩니다. 정부는 수험생들의 이동을 돕기 위해 대중교통을 증편하고, 경찰이 교통을 통제합니다.

수능은 단순한 학업 평가가 아니라, 교육과 성공이 더 나은 미래를 위한 핵심으로 여겨지는 문화를 상징합니다.`,
        },
        {
          img: "/examen-3.png",
          imgCredit: `서울의 한 사찰에서 자녀의 합격을 기원하는 부모들. © Ed Jones/AFP/Getty Images`,
          title: "인생을 결정짓는 시험: 수능",
          text: `한국의 수능 시험의 강도는 교육이 사회적 성공의 궁극적인 수단으로 여겨졌던 과거의 흔적을 담고 있습니다. 수세기 동안 한국 문화는 근면과 규율을 중시해왔으며, 이러한 가치관은 세대를 거쳐 전해져 왔습니다.

역사적으로 전쟁과 분단 등 많은 격변을 겪은 한국에서 교육은 더 안정적인 미래를 보장하는 수단으로 여겨졌습니다. 오늘날에도 학생들은 여전히 성공에 대한 강한 압박을 받으며, 그들의 미래가 이 시험의 성과에 크게 달려 있다고 믿고 있습니다.`,
        },
        {
          img: "/cinema-1.png",
          imgCredit: `Our Twisted Hero (우리들의 일그러진 영웅), Park Jong-won, 1992.  Source : YouTube`,
          title: "한국 교육에서의 규범 문화: 한국 영화 속에서",
          text: `한국 교육의 규범 문화는 한국 영화에서 자주 다루어지는 주제입니다. 대표적인 영화로는 Yalkae, A joker in high school (고교얄개,1976), Our Twisted Hero (우리들의 일그러진 영웅, 1992), Friend (친구, 2001) 등이 있습니다. 이 영화들은 당시의 규범 문화를 생생하게 보여주며, 때로는 매우 인상적인 장면을 통해 그 시대를 이해할 수 있게 해줍니다. 예를 들어, Our Twisted Hero(1992)에서는 50~60년대 초등학생의 이야기를 다루며, 한 학생이 시험에서 부정행위를 하다 선생님에게 체벌을 받는 장면이 나옵니다. 당시에는 흔했던 체벌이지만, 오늘날에는 매우 폭력적으로 느껴집니다.`,
        },
        {
          img: "/cinema-2.png",
          imgCredit: `영화 Friend (친구, 2001) 포스터 출처: 위키피디아`,
          title: "세대별 반응: 영화 속 장면을 통해 본 규범의 변화",
          text: `이 인터뷰에서는 21세, 30세, 53세 등 다양한 세대의 사람들이 영화 Friend(2001)의 명장면, 즉 고등학생들이 감독교사에게 뺨을 맞는 장면에 대해 어떻게 반응하는지 보여줍니다. 이 장면은 충격적이면서도 과거 학교에서 체벌이 일상적이었던 "지옥 같은 시절"을 떠올리게 합니다. 나이가 많은 세대에게는 실제 경험과 맞닿아 있고, 젊은 세대에게는 역사적 거리감과 함께 믿기 힘든 일로 받아들여집니다. 이러한 세대 간의 차이는 교육 규범과 문화가 얼마나 변화했는지를 보여줍니다.`,
        },
        {
          img: "/soldats-uniformes.png",
          imgCredit: `Williams, Hanson A., Jr. (1952), 자동차 옆에 선 세 명의 한국 학생, Pepperdine University Special Collections and University Archives,URL `,
          title: "교복: 역사적 상징",
          text: `1980년대 한국에서 교복은 단순한 복장이 아니라 국가 주도의 권위주의적 교육 시스템의 상징이었습니다. 당시 학교는 국가에 봉사하는 모범 시민을 양성하는 곳으로 여겨졌고, 교복은 행동의 표준화와 개성 억제의 도구였습니다. 교복은 집단 규율, 복종, 권위 존중의 상징이었습니다.

교복은 전국적으로 표준화되어 있었으며, 여학생은 흰 셔츠와 어두운 블레이저, 주름치마, 남학생은 바지와 셔츠를 입었습니다. 교복 착용은 교육부의 엄격한 규정에 따라 계절별로 달라졌습니다. 공식적으로는 평등과 경쟁 방지의 목적이었지만, 실제로는 불안정한 사회에서 청소년을 통제하기 위한 수단이었습니다.`,
        },
        {
          img: "/uniforme-2.png",
          imgCredit: `Williams, Hanson A., Jr. (1952), 자동차 옆에 선 세 명의 한국 학생, Pepperdine University Special Collections and University Archives,URL`,
          // title: "교복",
          text: `교복의 각 요소는 세밀하게 규정되어 있었습니다. 단순히 교복을 입는 것이 아니라, 외모 전체를 엄격하게 통제했습니다. 학교는 교육청에서 승인한 교복 모델만 허용했고, 작은 일탈도 처벌 대상이었습니다.

여학생의 치마는 반드시 무릎까지 내려와야 했고, 짧게 줄이는 시도는 자율성이나 매력 어필로 간주되어 즉시 제재를 받았습니다. 남학생은 장식 없는 어두운 바지를 입었습니다. 옷은 항상 다림질되어야 했고, 셔츠는 단정하게 잠가야 했습니다. 신발은 검정색만 허용되었고, 끈도 규정대로 묶어야 했습니다. 양말은 흰색 또는 검정색 단색만 허용되었습니다. 때로는 넥타이나 학교 배지, 규율 완장 등 액세서리도 포함되었습니다. 개인적인 장식은 모두 금지되었습니다. 가방도 크기와 색상이 규정되어 있었습니다.

이처럼 복장에 집착하는 것은 교육을 신체의 길들이기로 보는 시각에서 비롯되었습니다. 개성 표현은 집단 질서에 대한 위협으로 간주되었습니다.`,
        },
        {
          img: "/uniforme-1.jpg",
          imgCredit: `Williams, Hanson A., Jr. (1952), 자동차 옆에 선 세 명의 한국 학생, Pepperdine University Special Collections and University Archives,URL`,
          // title: "교복",
          text: `1980년대 교복 규정은 머리, 액세서리, 외모 등 신체적 통제까지 확장되었습니다.

남학생은 귀 위로 짧게 머리를 자르고, 이마와 목덜미가 드러나야 했습니다. 스타일링이나 젤 사용은 금지되었습니다. 여학생은 어깨 아래로 머리를 풀 수 없었고, 긴 머리는 뒤로 단정하게 묶어야 했습니다. 색깔 머리끈이나 장식은 금지되었습니다. 화장은 일절 허용되지 않았고, 립밤조차 의심받기도 했습니다. 귀걸이 등 모든 장신구는 금지되었으며, 피어싱은 즉시 제거해야 했습니다.

일부 학교에서는 등교 시 교사가 자를 이용해 치마 길이나 머리 길이를 검사하기도 했습니다. 특히 여학생에 대한 신체 통제는 가부장적이고 보수적인 청소년관을 반영했습니다. 순응은 성적, 아름다움, 스타일의 억제로 이어졌습니다.`,
        },
        {
          img: "/uniforme-3.png",
          imgCredit: `Williams, Hanson A., Jr. (1952), 자동차 옆에 선 세 명의 한국 학생, Pepperdine University Special Collections and University Archives,URL`,
          // title: "교복",
          text: `복장 규정 위반은 사소한 일이 아니었습니다. 위반 시 공식적인 처벌이 뒤따랐고, 학생에게는 수치심이나 분노, 체념을 불러일으켰습니다. 처벌에는 생활기록부 기재, 학교 청소 등 벌칙, 공개 망신, 학부모 호출, 교육청 신고, 심한 경우 퇴학이나 강제 이발 등이 있었습니다.

대부분의 학생은 순응했지만, 일부는 몰래 무늬 양말을 신거나, 아주 연하게 화장하거나, 치마를 살짝 고치는 등 우회 전략을 썼습니다. 이런 시스템은 권위에 대한 복합적 감정을 남겼고, 오늘날까지도 개인의 자유, 사회적 압력, 학교의 역할에 대한 논쟁을 불러일으키고 있습니다.`,
        },
        {
          img: "/livre-1.png",
          imgCredit: `조선시대 교실 장면을 그린 그림. 
“At Seodang”, 김홍도, 1745-1806
출처: 위키피디아`,
          title: "한국 규범 문화의 다양한 영향",
          text: `한국 교육의 규범 문화는 유교(특히 신유학) 전통의 영향을 강하게 받았습니다. 조선시대(1392-1897)에 국시로 채택된 신유학은 위계적 조화와 권위 존중을 중시하며, 교육을 지혜와 공동체 복지의 수단으로 보았습니다. 이 유산은 오늘날까지 이어져, 능력주의와 학업 성취에 중점을 둡니다. 그러나 젊은 세대는 이를 "헬조선"이라 부르며, 경직되고 불평등한 사회에 대한 불만을 표출하기도 합니다.`,
        },
        {
          img: "/livre-2.png",
          imgCredit: `오랫동안 잃어버린 줄 알았던 영화, Tuition (수업료), 최인규, 방한준, 1940. 출처: YouTube`,
          // title:
          //   "오랫동안 잃어버린 줄 알았던 영화, Tuition (수업료), 최인규, 방한준, 1940. 출처: YouTube",
          text: `한국의 규범 문화는 독재 시기와 산업화의 영향도 받았습니다. 1948~1987년 독재 정권은 권위주의적이고 위계적인 구조를 만들었고, 이승만(1948-1960), 박정희(1963-1979) 정권은 엄격한 규율과 복종을 강조했습니다. 박정희 정권 하에서 규범 문화는 급속한 산업화와 국가 통제 속에 뿌리내렸고, 효율성과 순응이 개인의 자유보다 우선시되었습니다. 교육 역시 70년대 산업화 정책의 일부였습니다.`,
        },
        {
          img: "/livre-2.png",
          imgCredit: `1970년대 고등학생 교실. 
저자 미상`,
          // title: "한국의 고등교육",
          text: `한국의 고등교육 역사는 20세기 국가 발전과 밀접하게 연결되어 있습니다. 1945년 일제 강점기 종료 후, 교육은 국가 재건의 핵심이자 사회적 상승의 수단이 되었습니다. 자원이 부족한 한국에서 인적 자원이 가장 큰 자산이 되었고, 이로 인해 오늘날의 교육열이 탄생했습니다.`,
        },
        {
          img: "/photo-1.png",
          imgCredit: `1981년 연세대학교 입학 등록. 대한민국 현대사 박물관 전시 사진. 출처: The Korean Times.`,
          title: "한국의 고등교육",
          text: `한국의 고등교육 역사는 20세기 국가 발전과 밀접하게 연결되어 있습니다. 1945년 일제 강점기 종료 후, 교육은 국가 재건의 핵심이자 사회적 상승의 수단이 되었습니다. 자원이 부족한 한국에서 인적 자원이 가장 큰 자산이 되었고, 이로 인해 오늘날의 교육열이 탄생했습니다.`,
        },
        {
          img: "/photo-2.png",
          imgCredit: `서울대학교, 국내 최고 명문 대학 중 하나. 출처: 위키피디아.`,
          text: `대학 입시, 특히 수능은 한국 사회에서 매우 중요한 역할을 합니다. 이는 사회적 계층 이동의 수단으로, 합격자는 직업과 사회적 지위를 확보할 수 있습니다. 많은 가정이 자녀를 명문대에 보내기 위해 막대한 비용을 투자하며, 이로 인해 학업 경쟁이 심화됩니다. SKY(서울대, 고려대, 연세대)는 대표적인 명문대학으로, 입학이 곧 성공을 의미합니다.`,
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
        {lang.slides.map((slide, idx) => (
          <section className="img-div" key={idx}>
            <div className="left-image">
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
              <p
                style={{ fontSize: "12px", marginTop: "8px", color: "#698958" }}
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
              >
                {slide.text}
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Reveil;
