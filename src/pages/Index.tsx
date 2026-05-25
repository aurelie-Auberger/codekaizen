import { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  ChevronDown,
  Clock,
  Target,
  TrendingUp,
  Users,
  Zap,
  
} from "lucide-react";
import Logo from "@/components/Logo";
import PhasesTimeline from "@/components/PhasesTimeline";

import aurelieImg from "@/assets/aurelie.png";


const benefits = [
  { id: "01", t: "ICP et ciblage", d: "On identifie les décideurs qui ont un problème que vous résolvez. Pas de masse, pas de hasard.", icon: Target },
  { id: "02", t: "Système outbound complet", d: "Le système prospecte, qualifie et relance pendant que vous faites autre chose.", icon: Zap },
  { id: "03", t: "Closing intégré", d: "On traite les objections et on accompagne jusqu'à la signature. Vous intervenez quand vous le choisissez.", icon: Users },
  { id: "04", t: "Reporting et pilotage", d: "Chaque semaine : leads qualifiés, deals en cours. Reporting hebdomadaire.", icon: BarChart3 },
];

const tickerItems = [
  "Diagnostic stratégique",
  "Système d'acquisition sur-mesure",
  "Rémunération à la performance",
  "Propriété intellectuelle préservée",
  "Closing intégré",
  "Reporting hebdomadaire",
  "Pipeline prévisible",
  "B2B premium uniquement",
];

const problems = [
  { t: "Pipeline irrégulier", d: "Votre flux de prospects dépend du bouche-à-oreille ou de l'opportunisme." },
  { t: "Closing aléatoire", d: "Des deals qualifiés sont perdus par simple manque de structure de suivi." },
  { t: "Coûts fixes toxiques", d: "Payer des frais d'agence avant d'avoir généré le moindre euro de profit." },
];

const expertise = [
  { t: "Outbound B2B structuré", d: "Construction de systèmes de prospection multicanal : LinkedIn, cold email, séquences automatisées. Ciblage ICP, enrichissement de données, A/B test sur les accroches. De zéro à pipeline actif." },
  { t: "Closing et conversion", d: "Qualification des leads entrants, scripts d'argumentation, traitement des objections. Accompagnement jusqu'à la signature et au premier encaissement." },
  { t: "Pilotage orienté ROI", d: "Chaque action est tracée, mesurée, ajustée. Reporting hebdomadaire, attribution précise, optimisation continue. Vous savez exactement d'où vient chaque deal." },
];

const faqs = [
  { q: "Qui gère le closing ?", r: "Le closing reste entre vos mains. Vous connaissez votre marché, vos clients, vos relations — c'est votre actif. Notre rôle s'arrête au rendez-vous qualifié : on vous livre un brief complet sur chaque prospect (budget, autorité de décision, urgence, contexte) pour que votre première conversation soit commerciale, pas exploratoire. Vous gardez le contrôle de votre relation commerciale. Nous la rendons plus prévisible." },
  { q: "C'est quoi le Diagnostic Acquisition ?", r: "5 jours ouvrés pendant lesquels nous analysons votre ICP réel, votre positionnement marché, vos séquences actuelles si elles existent, et les leviers bloquants. La restitution se fait en call de 45 minutes. Vous repartez avec une décision claire, pas un rapport à lire seul. Livrable : fiche ICP opérationnelle, architecture de séquences recommandée, stack technique adaptée à votre secteur, et priorités d'exécution. Facturé 500 € HT, intégralement déduit si une mission de construction démarre." },
  { q: "Comment fonctionne la tarification ?", r: "Le diagnostic est facturé 500 € HT, déduit si une mission démarre. La construction du système est facturée à l'acte selon la complexité. Le pilotage est facturé mensuellement, sans engagement de durée. Pas de commission sur votre CA, pas de coûts variables cachés : vous savez exactement ce que vous payez et pourquoi." },
  { q: "Que se passe-t-il après 12 mois ?", r: "Le système vous appartient intégralement — séquences, bases de contacts, automations, documentation. Vous pouvez l'opérer en interne ou prolonger le partenariat. Aucun engagement de renouvellement." },
  { q: "Quel est le délai pour voir les premiers résultats ?", r: "Les premiers RDV qualifiés arrivent généralement entre J+21 et J+35 après le lancement du système. Le pipeline significatif se construit entre J+45 et J+90 selon le secteur et le ticket moyen de votre offre." },
];

const Index = () => {
  const [currentPage, setCurrentPage] = useState<"home" | "merci">("home");
  const [openFaq, setOpenFaq] = useState<number[]>([0]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleFaq = (i: number) => {
    setOpenFaq((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));
  };

  if (currentPage === "merci") {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="max-w-xl text-center">
          <div className="gold-line mb-12" />
          <h1 className="text-5xl md:text-6xl text-ivory mb-8">C'est noté.</h1>
          <p className="text-[#F5F0E8] mb-12 leading-relaxed">
            Vous recevrez une confirmation par email. On se retrouve à l'heure convenue.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-gold text-[10px] tracking-luxe uppercase hover:text-gold-soft transition-colors"
          >
            Suivez-nous sur LinkedIn <ArrowRight className="w-3 h-3" />
          </a>
          <div className="gold-line mt-12" />
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-background text-ivory">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <Logo showTagline={false} />
          </button>
          <button
            onClick={() => scrollTo("formulaire")}
            className={`whitespace-nowrap border border-gold text-gold px-3 py-2 sm:px-6 sm:py-2.5 text-[11px] tracking-[0.15em] sm:tracking-luxe uppercase font-semibold hover:bg-gold hover:text-ink transition-all duration-500 ${
              scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            Réserver mon Diagnostic
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-24 sm:pt-40 md:pt-48 pb-3 sm:pb-20 md:pb-32 px-5 sm:px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-serif text-[1.6rem] leading-[1.15] md:text-[2.2rem] md:leading-[1.1] text-ivory mb-5 md:mb-10 tracking-tight">
            Des rendez-vous B2B qualifiés. Un brief complet à chaque call. Vous closez.
          </h1>
          <p className="text-[#94a3b8] max-w-2xl mx-auto text-[0.95rem] leading-[1.75] mb-4">
            Code Kaizen construit et pilote votre système d'acquisition outbound — ICP, séquences, qualification. Vous sortez de la prospection. Le pipeline tourne sans vous.
          </p>
          <p className="text-gold/90 italic text-[0.8rem] max-w-2xl mx-auto mb-4">
            Pour les fondateurs et dirigeants B2B avec une offre validée, un ticket moyen ≥ 5 000 € et zéro système d'acquisition structuré.
          </p>
          <p className="text-[#94a3b8] italic text-[0.85rem] mb-8 md:mb-10">
            Vous gardez le contrôle de votre relation commerciale. Nous la rendons plus prévisible.
          </p>
          <div className="flex flex-col items-center gap-6 md:gap-8">
            <button
              onClick={() => scrollTo("formulaire")}
              className="bg-gold text-ink w-full sm:w-auto px-6 py-[14px] sm:px-14 sm:py-6 rounded-[2px] font-bold text-[12px] sm:text-xs tracking-[0.15em] sm:tracking-luxe uppercase hover:bg-ivory transition-all duration-500 shadow-[var(--shadow-gold)]"
            >
              Réserver mon Diagnostic
            </button>
          </div>
        </div>
      </section>


      {/* VÉRITÉS */}
      <section className="py-16 md:py-32 px-6 md:px-10">
        <div className="max-w-[720px] mx-auto text-center">
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory mb-10 md:mb-16 leading-tight">
            Ce que personne ne dit aux fondateurs B2B
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-left">
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-6">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Pipeline otage</h3>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75]">
                Chaque client vient d'un appel que vous avez passé ou d'une relation que vous avez cultivée. Dès que vous arrêtez, le pipeline s'arrête. Ce n'est pas un modèle, c'est une dépendance.
              </p>
            </div>
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-6">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Le réseau s'épuise</h3>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75]">
                Le bouche-à-oreille ne scale pas au-delà d'un certain seuil. Quand vous avez fait le tour de votre réseau, le silence qui suit est brutal — et difficile à expliquer en board.
              </p>
            </div>
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-6">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Recruter sans système : 45K€ perdus</h3>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75]">
                Un SDR sans infrastructure outbound, sans ICP défini, sans séquences qualifiées : vous payez un salaire pour improviser. 12 mois plus tard, le résultat est aléatoire et le coût réel dépasse 60K€.
              </p>
            </div>
          </div>
          <p className="text-[#94a3b8] italic text-center mt-10 md:mt-14 text-[0.875rem]">
            Il existe une alternative à cette dépendance.
          </p>
        </div>
      </section>


      {/* BÉNÉFICES */}
      <section className="py-16 md:py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory mb-10 md:mb-16 leading-tight">
            Une infrastructure d'acquisition. Construite, pilotée, transmise.
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-8 text-left">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Diagnostic Acquisition — 5 jours</h3>
              <p className="text-[#F5F0E8] text-[13px] md:text-sm leading-relaxed">
                Nous cartographions votre ICP réel, votre positionnement outbound, et les leviers bloquants. Livrable structuré le jour de la restitution : ICP fiche, stack recommandée, architecture de séquences.
              </p>
            </div>
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-8 text-left">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Système déployé & opéré</h3>
              <p className="text-[#F5F0E8] text-[13px] md:text-sm leading-relaxed">
                Nous construisons et opérons l'infrastructure : sourcing Clay, enrichissement, séquences Instantly, qualification SQL, CRM. Le fondateur sort de la prospection. Le système entre en fonction.
              </p>
            </div>
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-8 text-left">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Pilotage mensuel</h3>
              <p className="text-[#F5F0E8] text-[13px] md:text-sm leading-relaxed">
                On opère le système : sourcing continu, optimisation campagnes, qualification des réponses, reporting hebdomadaire. Vous recevez des prospects qualifiés avec un brief complet — budget, autorité, urgence, contexte. Vous closez.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION A — INFRASTRUCTURE */}
      <section className="bg-[#0d1b2e] border-t border-b border-[rgba(201,162,78,0.15)] py-16 md:py-28 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-[1.5rem] md:text-[2.1rem] text-ivory mb-4 leading-tight">
              Comment fonctionne l'infrastructure Code Kaizen
            </h2>
            <p className="text-[#94a3b8] text-[0.9rem] md:text-[0.95rem] leading-relaxed">
              Un système en 6 phases, documenté et transmissible.
            </p>
          </div>

          {/* BLOC 1 — Timeline 6 phases */}
          <div className="mb-16 md:mb-24 max-w-2xl mx-auto">
            <PhasesTimeline />
          </div>



        </div>
      </section>

      {/* FONDATRICE */}
      <section className="bg-[#0f1a2e] py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
            <div
              className="w-[280px] h-[280px] rounded-2xl overflow-hidden flex-shrink-0 border-2 border-[#c9a24e] bg-transparent"
              style={{ boxShadow: "0 0 0 4px rgba(201,162,78,0.15)" }}
            >
              <img
                src={aurelieImg}
                alt="Aurélie, fondatrice de Code Kaizen"
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 15%" }}
              />
            </div>
            <div className="max-w-xl text-center md:text-left">
              <h2 className="font-serif text-[2rem] md:text-[2.5rem] text-ivory mb-2 leading-tight">
                Aurélie
              </h2>
              <p className="text-[#c9a24e] text-sm md:text-base font-medium mb-6">
                Fondatrice &amp; Architecte de croissance, Code Kaizen
              </p>
              <div className="space-y-4 text-[#edeae2] text-[14px] md:text-[15px] leading-relaxed">
                <p>
                  Avant Code Kaizen, j'ai opéré en tant que BDR puis RevOps sur des offres B2B SaaS, conseil et ESN — avec des stacks Clay, Instantly et HubSpot. J'ai construit et piloté des séquences outbound, défini des ICP, structuré des pipelines de qualification. Ce ne sont pas des concepts que j'ai appris : ce sont les mêmes systèmes que je déploie pour vous.
                </p>
                <p>
                  Code Kaizen est né d'un constat simple : la plupart des fondateurs B2B ont une offre solide et aucun système pour la mettre devant les bonnes personnes. Ils prospectent à la main, dépendent de leur réseau, et s'épuisent à faire ce qu'un système devrait faire à leur place.
                </p>
                <p>
                  Je travaille avec un nombre limité de clients simultanément pour maintenir un niveau d'exécution élevé. Chaque mission est construite sur mesure, documentée, et transmise à la fin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAS CLIENTS */}
      <section className="py-16 md:py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory text-center mb-4 md:mb-6 leading-tight">
            Ce que vous recevez à la fin
          </h2>
          <p className="text-[#94a3b8] text-center text-[0.875rem] mb-10 md:mb-16">
            Les livrables concrets de chaque mission — documentés, transmissibles, opérables sans nous.
          </p>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                t: "Fiche ICP opérationnelle",
                d: "Définition précise de votre client idéal : secteur, taille, poste, déclencheurs d'achat, objections récurrentes, cycle de décision. La base sur laquelle tout le système est construit. Pas un persona marketing — un outil d'exécution.",
              },
              {
                t: "Système outbound documenté",
                d: "Séquences email et LinkedIn, domaines d'envoi configurés, workflows de qualification, scoring SQL, intégration CRM. Chaque composant est documenté et transférable à votre équipe ou à un futur prestataire.",
              },
              {
                t: "Playbook de transmission",
                d: "Guide opérationnel complet : comment opérer le système en interne, comment recruter pour le faire tourner, comment l'adapter si votre ICP évolue. Vous n'êtes jamais dépendants d'une personne pour faire fonctionner votre acquisition.",
              },
            ].map((c) => (
              <div key={c.t} className="bg-[#111927] border border-[rgba(201,162,78,0.3)] rounded-lg p-6">
                <div className="text-[#c9a24e] text-[13px] md:text-sm font-medium mb-5">{c.t}</div>
                <div className="text-[#f7f7f7] text-[13px] md:text-sm leading-relaxed">{c.d}</div>
              </div>
            ))}
          </div>
          <div className="max-w-2xl mx-auto mt-10 md:mt-14 bg-[#111927] border border-[rgba(201,162,78,0.3)] rounded-lg p-6 md:p-7">
            <p className="text-[#f7f7f7] text-[13px] md:text-sm leading-relaxed text-center">
              Code Kaizen est en lancement. Les premières missions sont en cours. Les résultats seront documentés et publiés ici au fil des missions. En attendant : le Diagnostic à 500 € HT vous permet de vérifier par vous-même la qualité de l'analyse et la clarté des recommandations — avant tout engagement.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION B — PRINCIPES */}
      <section className="bg-[#0d1b2e] border-b border-[rgba(201,162,78,0.15)] py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory text-center mb-3 md:mb-4 leading-tight">
            Nos principes
          </h2>
          <p className="text-[#94a3b8] text-center text-[0.875rem] mb-12 md:mb-16">
            Ce qui guide chaque décision, chaque séquence, chaque mission.
          </p>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {[
              { t: "On construit avant d'envoyer", d: "Une séquence mal ciblée envoie des milliers de messages au mauvais profil. Nous passons autant de temps à construire l'infrastructure qu'à l'opérer. Ce que vous ne voyez pas — le sourcing, le scoring, l'architecture technique — détermine 80% du résultat final." },
              { t: "On mesure tout, on décide sur les données", d: "Chaque décision est tracée et justifiée par des données : taux de réponse par segment, par step, par accroche. Nous n'itérons pas à l'aveugle. Nous mesurons, nous interprétons, nous ajustons. L'opinion n'a pas sa place dans un système d'acquisition." },
              { t: "Alignés sur vos résultats, pas sur nos heures", d: "Nous ne facturons pas du temps passé. Nous facturons ce que nous livrons : un diagnostic, un système déployé, un pilotage mensuel. Cette structure élimine le conflit d'intérêt classique entre prestataire et client — nous avons autant intérêt que vous à ce que le système produise des résultats réels." },
              { t: "On vous rend indépendant", d: "Nous ne construisons pas des systèmes dont vous seriez dépendants. Chaque mission se termine par un transfert complet : documentation, playbook, formation. L'objectif est que vous puissiez opérer sans nous — ou que vous choisissiez de continuer avec nous. La différence est là." },
            ].map((b, i) => (
              <div
                key={b.t}
                className="bg-[#152339] border-l-[3px] border-l-[#c9a84c] border-y border-r border-y-[rgba(201,168,76,0.15)] border-r-[rgba(201,168,76,0.15)] rounded-r-lg p-6 md:p-7 flex gap-5 hover:bg-[#1a2842] transition-colors"
              >
                <div className="font-serif text-[#c9a84c] text-[2rem] md:text-[2.4rem] leading-none flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-white text-base md:text-lg font-bold leading-tight mb-2">{b.t}</h3>
                  <p className="text-[#94a3b8] text-[13px] md:text-sm leading-relaxed">{b.d}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CE QUE CODE KAIZEN N'EST PAS */}
      <section className="py-16 md:py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory text-center mb-4 md:mb-6 leading-tight">
            Ce que Code Kaizen n'est pas
          </h2>
          <p className="text-[#94a3b8] text-center text-[0.875rem] mb-10 md:mb-16">
            Pour éviter de perdre du temps des deux côtés.
          </p>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-left">
            {[
              "Votre offre est encore en phase de validation marché. Nous construisons des systèmes d'acquisition, pas des outils de discovery produit.",
              "Votre ticket moyen est inférieur à 5 000 € par deal. Le pilotage mensuel n'est pas rentable en dessous de ce seuil — ni pour vous, ni pour nous.",
              "Vous cherchez une délégation totale sans implication. Les 4 premières semaines requièrent 2h/semaine de votre temps pour calibrer l'ICP et valider les séquences.",
            ].map((text, i) => (
              <div key={i} className="bg-[rgba(232,93,58,0.04)] border border-[rgba(232,93,58,0.25)] rounded-lg p-6">
                <h3 className="text-[#e85d3a] text-lg font-medium mb-4">Pas pour vous si...</h3>
                <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COÛT DE L'ATTENTE */}
      <section className="py-16 md:py-32 px-6 md:px-10 bg-[rgba(201,162,78,0.05)] border-t border-b border-[rgba(201,162,78,0.15)]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#94a3b8] italic text-[0.875rem] mb-4 md:mb-6">
            Trois repères concrets
          </p>
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory mb-10 md:mb-16 leading-tight">
            Ce que vous gagnez en démarrant maintenant
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10 mb-10 md:mb-14">
            <div>
              <div className="text-[#c9a24e] text-[2rem] md:text-[2.5rem] font-bold leading-tight mb-4">2h / semaine</div>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75]">
                C'est le seul temps que nous vous demandons pendant le premier mois. Le reste, c'est nous.
              </p>
            </div>
            <div>
              <div className="text-[#c9a24e] text-[2rem] md:text-[2.5rem] font-bold leading-tight mb-4">J+35</div>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75]">
                Délai moyen pour les premiers rendez-vous qualifiés après le lancement des campagnes.
              </p>
            </div>
            <div>
              <div className="text-[#c9a24e] text-[2rem] md:text-[2.5rem] font-bold leading-tight mb-4">J+90</div>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75]">
                Date à laquelle le système vous appartient intégralement — sans condition, sans surcoût.
              </p>
            </div>
          </div>
          <button
            onClick={() => scrollTo("formulaire")}
            className="bg-gold text-ink px-6 py-[14px] sm:px-14 sm:py-6 rounded-[2px] font-bold text-[12px] sm:text-xs tracking-[0.15em] sm:tracking-luxe uppercase hover:bg-ivory transition-all duration-500 shadow-[var(--shadow-gold)]"
          >
            Réserver mon Diagnostic
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-32 px-6 md:px-10 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[1.3rem] md:text-[1.6rem] text-ivory text-center mb-10 md:mb-16">Questions fréquentes</h2>
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((faq, i) => {
              const open = openFaq.includes(i);
              return (
                <div key={i}>
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full py-6 flex justify-between items-center text-left hover:text-gold transition-colors group"
                  >
                    <span className="text-base md:text-lg text-ivory group-hover:text-gold transition-colors pr-6 font-medium">{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gold flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${open ? "max-h-40 pb-6" : "max-h-0"}`}
                  >
                    <p className="text-[#F5F0E8] leading-relaxed text-[13px] md:text-sm">{faq.r}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* FORMULAIRE */}
      <section id="formulaire" className="py-16 md:py-32 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory mb-4 md:mb-6 leading-tight">
            Réservez votre Diagnostic
          </h2>
          <p className="text-[#94a3b8] text-[0.875rem] mb-10 md:mb-16">
            Quelques questions pour qualifier votre situation.
          </p>
          <iframe
            src="https://tally.so/embed/zx0Nrg"
            frameBorder="0"
            width="100%"
            height="500"
            title="Formulaire de réservation Diagnostic"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 md:py-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
          <Logo />
          <nav className="flex flex-wrap justify-center gap-8 text-[10px] tracking-luxe uppercase text-muted-foreground">
            <a href="#" className="hover:text-gold transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-gold transition-colors">Confidentialité</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;
