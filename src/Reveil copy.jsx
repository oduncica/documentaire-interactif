import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import "./Reveil.css";
import { FaArrowLeft } from "react-icons/fa"; // Import de l'icône de flèche
import LanguesDrapeau from "./LanguesDrapeau";

function Reveil() {
  const revealRef = useRef(null);
  const navigate = useNavigate();
  const [selectedLang, setSelectedLang] = useState("fr");

  useEffect(() => {
    if (revealRef.current) {
      const deck = new Reveal(revealRef.current, {
        controls: true,
        progress: true,
        slideNumber: true,
        hash: true,
        keyboard: true,
        touch: true,
        embedded: true, // 👈 active un mode plus adapté au scroll mobile
      });

      deck.initialize();
    }
  }, []);

  return (
    <div
      ref={revealRef}
      className="reveal"
      style={{
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#E3D8E2",
        color: "#4A5B41", // Couleur des textes
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Icône Home */}
      <div
        onClick={() => navigate("/chambre")} // Utilisation de navigate pour rediriger
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
          cursor: "pointer", // Ajout d'un curseur pointer pour indiquer que c'est cliquable
        }}
      >
        <FaArrowLeft style={{ marginRight: "8px", fontSize: "20px" }} />{" "}
        {/* Icône flèche */}
        <span>Retour</span>
      </div>

      <div className="slides">
        {/* Slide horizontale 1 */}
        <section className="img-div">
          <div className="left-image">
            <img
              src="/examen-1.png"
              alt="Uniforme scolaire"
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              }}
            />
            <p style={{ fontSize: "12px", marginTop: "8px", color: "#698958" }}>
              Classe de terminale, 2020 “L’éducation en Corée du Sud” © Korea's
              Owls{" "}
            </p>
          </div>

          <div className="right-text">
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              L’examen qui détermine une vie : Le Seungeung
            </h2>
            <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
              Connu sous le nom de "examen de la fin du secondaire" en Corée du
              Sud, est un événement majeur dans la vie des étudiants. Il
              représente non seulement un test de compétences académiques, mais
              aussi un rite de passage social qui détermine souvent l'avenir
              universitaire et professionnel des jeunes.
              <br />
              <br />
              L'examen intense de huit heures, qui teste diverses matières, est
              le résultat de plusieurs années de préparation rigoureuse. C'est
              un moment décisif pour les étudiants, qui se retrouvent sous une
              pression immense pour réussir.
            </p>
          </div>
        </section>
        {/* Slide horizontale 2 */}

        <section className="img-div">
          <div className="left-image">
            <img
              src="/examen-2.png"
              alt="Uniforme scolaire"
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              }}
            />
            <p style={{ fontSize: "12px", marginTop: "8px", color: "#4A5B41" }}>
              Les élèves plus jeunes encouragent les lycéens alors qu’ils se
              rendent, ce jeudi, à l’examen d’entrée à l’université, déterminant
              pour leur avenir. Comme à l’accoutumée, la police a assuré
              l’escorte des candidats en retard. © Elise Hu/NPR{" "}
            </p>
          </div>

          <div className="right-text">
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              L’examen qui détermine une vie : Le Seungeung{" "}
            </h2>
            <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
              Le jour de l'examen, les rues sont presque désertes, car même les
              bureaux et magasins ajustent leurs horaires pour permettre à tout
              le monde de se concentrer sur cet événement. L'État déploie
              également des mesures de soutien, comme des augmentations du
              nombre de transports publics pour faciliter les déplacements des
              candidats et des policiers qui régulent la circulation pour éviter
              tout retard.
              <br />
              <br />
              L'examen Seungeung n'est pas seulement une épreuve académique, il
              incarne toute une culture où l'éducation et la réussite sont
              perçues comme des clefs essentielles pour accéder à un avenir
              meilleur.
            </p>
          </div>
        </section>

        <section className="img-div">
          <div className="left-image">
            <img
              src="/examen-3.png"
              alt="Uniforme scolaire"
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              }}
            />
            <p style={{ fontSize: "12px", marginTop: "8px", color: "#4A5B41" }}>
              Des parents prient pour la réussite de leurs enfants dans un
              temple à Séoul. © Ed Jones/AFP/Getty Images{" "}
            </p>
          </div>

          <div className="right-text">
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              L’examen qui détermine une vie : Le Seungeung{" "}
            </h2>
            <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
              L’intensité de l'examen Seungeung en Corée du Sud porte
              l’empreinte d’un passé où l'éducation a toujours été perçue comme
              le moyen ultime de réussite sociale. Depuis des siècles, la
              culture coréenne valorise le travail acharné et la discipline, des
              valeurs transmises de génération en génération.
              <br />
              <br />
              Dans un pays où l’histoire a souvent été marquée par des
              bouleversements, de la guerre à la division, l’éducation a été vue
              comme un levier pour garantir un avenir plus stable. Aujourd'hui,
              cette vision est toujours présente, car les étudiants, encore
              soumis à une pression intense pour réussir, héritent de l’idée que
              leur avenir dépend largement de leur performance à cet examen.
            </p>
          </div>
        </section>

        <section className="img-div">
          <div className="left-image">
            <img
              src="/soldats-uniformes.png"
              alt="Uniforme scolaire"
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              }}
            />
            <p style={{ fontSize: "12px", marginTop: "8px", color: "#4A5B41" }}>
              Williams, Hanson A., Jr. (1952), Three South Korean students
              posing by a car, Pepperdine University Special Collections and
              University Archives,URL {" "}
            </p>
          </div>

          <div className="right-text">
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              The uniform{" "}
            </h2>
            <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
              En Corée du Sud, les uniformes scolaires sont essentiels à la vie
              scolaire, symbolisant la discipline, l’égalité et l’unité. De
              l’école primaire au lycée, tous les élèves portent des uniformes
              similaires : une chemise blanche, une veste, une jupe pour les
              filles et un pantalon pour les garçons. L’objectif est d’éliminer
              les différences sociales et de recentrer l’attention sur
              l’éducation plutôt que sur l’apparence. Des règles strictes
              régissent le port de l’uniforme, notamment : <br />
              - Longueur des cheveux : les garçons doivent avoir les cheveux
              courts, et les filles des cheveux bien coiffés ne dépassant pas
              les épaules. Les cheveux teints ou de couleur non naturelle sont
              interdits. <br /> <br />
              - Longueur de la jupe : les jupes des filles doivent arriver au
              niveau du genou et ne peuvent pas être raccourcies.
              <br /> <br />
              - Chaussures et accessoires : seules les chaussures noires sont
              autorisées, et les accessoires (bijoux, bracelets) sont
              généralement interdits. <br /> <br />- Chaussettes et maquillage :
              les chaussettes doivent être unies (blanches ou noires) sans
              motifs visibles, et le maquillage est interdit. Le non-respect de
              ces règles peut entraîner des sanctions.
            </p>
          </div>
        </section>
        <section className="img-div">
          <div className="left-image">
            <img
              src="/journal-1.png"
              alt="Uniforme scolaire"
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              }}
            />
            <p style={{ fontSize: "12px", marginTop: "8px", color: "#4A5B41" }}>
              Graphique comparant le taux de mortalité par suicide entre 2000 et
              2019, au niveau mondial et sud-coréen.  Source : UNICEF.
            </p>
          </div>

          <div className="right-text">
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              Le suicide : la souffrance silencieuse au sein de l’éducation
              sud-coréenne{" "}
            </h2>
            <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
              Le suicide est une des problématiques de santé publique les plus
              graves de la société sud-coréenne. En effet, la Corée du sud a le
              taux de suicide le plus élevé des pays de l’OCDE,  avec 14,439
              suicides reportés en 2024, et près de 40 suicides par jour. Il
              s’agit de la cause principale de mortalité chez les adolescents et
              les jeunes adultes : en 2023, le nombre de suicide chez les
              écoliers, collégiens et lycéens atteint le nombre de 214, le plus
              haut jamais enregistré, et ayant doublé en 8 ans. Ce mal-être
              traduit la nécessité de renforcer le soutien psychologique au sein
              des écoles. Pour cela, les différents gouvernements qui ont
              succédés au cours de ces dernières années ont instauré plusieurs
              mesures  : on retrouve plusieurs plans quinquennaux entre 2004 et
              2023, avec le dernier en date qui a pour but de réduire le taux de
              suicide de 30 % d’ici 2027.
            </p>
          </div>
        </section>
        <section className="img-div">
          <div className="left-image">
            <img
              src="/journal-2.png"
              alt="Uniforme scolaire"
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              }}
            />
            <p style={{ fontSize: "12px", marginTop: "8px", color: "#4A5B41" }}>
              Le pont Mapo à Séoul, doté de capteurs et de photos représentant
              des “petits moments de la vie”, pour empêcher les personnes de
              suicider. Source : RFI / Frédéric Ojardias
            </p>
          </div>

          <div className="right-text">
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              Le suicide : la souffrance silencieuse au sein de l’éducation
              sud-coréenne{" "}
            </h2>
            <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
              En 2011, le gouvernement de Lee Myung-bak met en place le “Suicide
              Prevention Act”. Cette mesure a pour objectif de renforcer la
              prévention au suicide, avec notamment un suivi des personnes ayant
              fait une tentative de suicide. Mais malgré ces efforts, le monde
              de l’éducation manque de moyens pour aider efficacement les jeunes
              qui souffrent.  Parmi les raisons qui poussent les jeunes à mettre
              fin à leurs jours, on retrouve des problématiques de santé
              mentale, des conflits familiaux, mais également la pression
              académique. Cette dernière pèse sur les épaules des sud-coréens
              dès leur entrée dans le monde éducatif, mais elle est encore plus
              lourde à la période du lycée, étape charnière pour leur avenir. En
              effet, les étudiants sud-coréens dédient une partie de leur
              enfance et adolescence aux révisions, notamment car les parents
              investissent beaucoup dans leur réussite académique. Les étudiants
              sud-coréens passent deux fois plus de temps à réviser que les
              étudiants américains par exemple, et ce notamment après les cours.
              Cet investissement académique est une cause de stress profond chez
              les étudiant, pouvant les pousser à commettre l’irréparable. 
            </p>
          </div>
        </section>

        <section className="img-div">
          <div className="left-image">
            <img
              src="/journal-3.png"
              alt="Uniforme scolaire"
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              }}
            />
            <p style={{ fontSize: "12px", marginTop: "8px", color: "#4A5B41" }}>
              Des enseignants le 4 septembre 2023 suite au suicide de leur
              collègue. Source : JUNG YEON-JE / AFP
            </p>
          </div>

          <div className="right-text">
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              Le suicide : la souffrance silencieuse au sein de l’éducation
              sud-coréenne{" "}
            </h2>
            <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
              Mais dans le système éducatif sud-coréen, les élèves ne sont pas
              les seuls touché par ce fléau du suicide : les enseignants
              subissent également une forte pression de la part des parents
              d’élèves, allant même jusqu’à l’harcèlement. Entre 2015 et 2023,
              168 enseignants se sont donné la mort. En été 2023, une jeune
              institutrice est retrouvée morte dans un placard de salle de
              classe, provoquant l’émoi de la communauté enseignante. Dans son
              journal, elle parle de cette souffrance silencieuse qui l’a
              conduit à passer à l’acte : “j'ai la poitrine trop serrée. Je me
              sens dépassée par la folie du travail’. Une grève nationale a lieu
              le 4 septembre 2023, pour dénoncer cette intimidation de la part
              des parents d’élèves, prêts à tout pour la réussite de leurs
              enfants. 
            </p>
          </div>
        </section>

        <section className="img-div">
          <div className="left-image">
            <img
              src="/journal-3.png"
              alt="Uniforme scolaire"
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              }}
            />
            <p style={{ fontSize: "12px", marginTop: "8px", color: "#4A5B41" }}>
              Des enseignants le 4 septembre 2023 suite au suicide de leur
              collègue. Source : JUNG YEON-JE / AFP
            </p>
          </div>

          <div className="right-text">
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              Le suicide : la souffrance silencieuse au sein de l’éducation
              sud-coréenne{" "}
            </h2>
            <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
              Mais dans le système éducatif sud-coréen, les élèves ne sont pas
              les seuls touché par ce fléau du suicide : les enseignants
              subissent également une forte pression de la part des parents
              d’élèves, allant même jusqu’à l’harcèlement. Entre 2015 et 2023,
              168 enseignants se sont donné la mort. En été 2023, une jeune
              institutrice est retrouvée morte dans un placard de salle de
              classe, provoquant l’émoi de la communauté enseignante. Dans son
              journal, elle parle de cette souffrance silencieuse qui l’a
              conduit à passer à l’acte : “j'ai la poitrine trop serrée. Je me
              sens dépassée par la folie du travail’. Une grève nationale a lieu
              le 4 septembre 2023, pour dénoncer cette intimidation de la part
              des parents d’élèves, prêts à tout pour la réussite de leurs
              enfants. 
            </p>
          </div>
        </section>

        <section className="img-div">
          <div className="left-image">
            <img
              src="/journal-3.png"
              alt="Uniforme scolaire"
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              }}
            />
            <p style={{ fontSize: "12px", marginTop: "8px", color: "#4A5B41" }}>
              Des enseignants le 4 septembre 2023 suite au suicide de leur
              collègue. Source : JUNG YEON-JE / AFP
            </p>
          </div>

          <div className="right-text">
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              Le suicide : la souffrance silencieuse au sein de l’éducation
              sud-coréenne{" "}
            </h2>
            <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
              2008 – Lancement des lycées Meister (마이스터고) En 2008, le
              gouvernement sud-coréen, sous l'administration du président Lee
              Myung-bak, a annoncé la création des lycées Meister (마이스터고),
              inspirés du modèle allemand des écoles professionnelles. Cette
              initiative visait à revitaliser l'enseignement professionnel
              secondaire en réponse à la désaffection croissante pour les lycées
              professionnels traditionnels et à la pénurie de main-d'œuvre
              qualifiée dans certains secteurs industriels. Le plan prévoyait la
              transformation de 50 lycées professionnels existants en lycées
              Meister, avec une mise en œuvre progressive à partir de 2010. Ces
              établissements devaient offrir une formation spécialisée en
              étroite collaboration avec les industries, afin de répondre aux
              besoins spécifiques du marché du travail.
              <br />
              <br />
              Objectifs de la réforme Adapter les programmes scolaires aux
              compétences recherchées par les entreprises. Assurer une
              transition réussie des élèves vers le marché du travail. Changer
              la perception sociale négative associée aux filières
              professionnelles.
              <br />
              <br />
              Évolution et impact Les lycées Meister ont connu une expansion
              rapide, avec 21 établissements opérationnels dès 2010 et 54 en
              2022. Entre 2013 et 2017, ces écoles ont affiché des taux d'emploi
              supérieurs à 90 % pour leurs diplômés, démontrant leur efficacité
              en matière d'insertion professionnelle. Cependant, des études ont
              soulevé des questions sur la rentabilité de ces établissements par
              rapport aux lycées professionnels traditionnels, en raison de
              coûts de fonctionnement plus élevés
            </p>
          </div>
        </section>

        <section className="img-div">
          <div className="left-image">
            <img
              src="/journal-3.png"
              alt="Uniforme scolaire"
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              }}
            />
            <p style={{ fontSize: "12px", marginTop: "8px", color: "#4A5B41" }}>
              Des enseignants le 4 septembre 2023 suite au suicide de leur
              collègue. Source : JUNG YEON-JE / AFP
            </p>
          </div>

          <div className="right-text">
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              Le suicide : la souffrance silencieuse au sein de l’éducation
              sud-coréenne{" "}
            </h2>
            <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
              2009 – Généralisation des lycées privés autonomes En 2009, le
              gouvernement sud-coréen a lancé un plan ambitieux visant à établir
              100 lycées privés autonomes (자율형 사립고) d'ici 2010. Ces
              établissements bénéficiaient d'une plus grande liberté en matière
              de sélection des élèves et de programmes, tout en restant soumis à
              certaines directives du ministère de l'Éducation. L'objectif était
              de diversifier l'offre éducative et de promouvoir l'excellence
              académique.
              <br /> <br />
              Évolution et impact Malgré les intentions initiales, les lycées
              privés autonomes ont rencontré des difficultés pour attirer
              suffisamment d'élèves. Par exemple, à Séoul, 11 des 26 lycées de
              ce type avaient moins de candidats que de places disponibles en
              2011. Cette situation a suscité des critiques quant à l'efficacité
              de cette politique éducative. Des mesures d'urgence ont été
              introduites, telles que l'élargissement des critères de sélection,
              mais avec peu d'effet. Des appels ont été lancés pour revoir ou
              annuler cette politique
            </p>
          </div>
        </section>

        <section className="img-div">
          <div className="left-image">
            <img
              src="/journal-3.png"
              alt="Uniforme scolaire"
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              }}
            />
            <p style={{ fontSize: "12px", marginTop: "8px", color: "#4A5B41" }}>
              Des enseignants le 4 septembre 2023 suite au suicide de leur
              collègue. Source : JUNG YEON-JE / AFP
            </p>
          </div>

          <div className="right-text">
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              Le suicide : la souffrance silencieuse au sein de l’éducation
              sud-coréenne{" "}
            </h2>
            <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
              2009 – Renforcement du couvre-feu pour les hagwon En 2009, les
              autorités éducatives sud-coréennes ont renforcé les restrictions
              sur les horaires d'ouverture des hagwon, interdisant les cours
              après 22h. Cette mesure visait à réduire la dépendance à
              l'enseignement privé et à alléger la charge des élèves. Des
              sanctions strictes ont été mises en place pour les contrevenants,
              et des récompenses financières ont été offertes aux citoyens
              signalant des violations.
              <br /> <br />
              Évolution et impact Malgré les restrictions, de nombreux hagwon
              ont contourné les règles en ajoutant des cours le week-end ou en
              proposant des sessions privées. Certains parents ont également
              cherché des tuteurs privés pour compenser les heures perdues. En
              octobre 2009, la Cour constitutionnelle a statué que le couvre-feu
              ne violait pas les droits fondamentaux, soulignant l'importance du
              sommeil pour la santé des élèves.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Reveil;
