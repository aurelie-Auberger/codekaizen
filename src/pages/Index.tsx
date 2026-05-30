import { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  CheckCircle2,
  ChevronDown,
  Clock,
  Filter,
  HandMetal,
  LineChart,
  Repeat,
  Settings2,
  ShieldCheck,
  Shuffle,
  Target,
  TrendingDown,
  TrendingUp,
  UserX,
  Users,
  Zap,
} from "lucide-react";
import Logo from "@/components/Logo";
import PhasesTimeline from "@/components/PhasesTimeline";
import PipelineChart from "@/components/PipelineChart";

import aurelieImg from "@/assets/aurelie.png";
import logoSpecgen from "@/assets/logo-specgen.png";
import logoIsssa from "@/assets/logo-isssa.jpeg";


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
  { q: "Qui gère le closing ?", r: "Le closing reste entre vos mains. Vous connaissez votre marché, vos clients, vos relations : c'est votre actif. Notre rôle s'arrête au rendez-vous qualifié. Nous vous livrons un brief complet sur chaque prospect (budget, autorité de décision, urgence, contexte) pour que votre première conversation soit commerciale, pas exploratoire. Vous gardez le contrôle de votre relation commerciale. Nous la rendons plus prévisible." },
  { q: "Qu'est-ce que le Diagnostic Acquisition ?", r: "5 jours ouvrés pendant lesquels nous analysons votre ICP réel, votre positionnement marché, vos séquences actuelles si elles existent, et les leviers bloquants. La restitution se fait en call de 45 minutes. Vous repartez avec une décision claire, pas un rapport à lire seul. Livrable : fiche ICP opérationnelle, architecture de séquences recommandée, stack technique adaptée à votre secteur, et priorités d'exécution. Facturé 1 500 € HT, intégralement déduit si une mission de construction démarre." },
  { q: "Comment fonctionne la tarification ?", r: "La tarification est définie au cas par cas lors du Diagnostic — c'est précisément l'objet de la restitution. Le diagnostic est facturé 1 500 € HT, intégralement déduit si une mission démarre. La construction et le pilotage sont calibrés selon la complexité de votre marché et le périmètre défini ensemble. Pas de commission sur votre CA, pas de coûts variables cachés." },
  { q: "Que se passe-t-il après 12 mois ?", r: "Le système vous appartient intégralement : séquences, bases de contacts, automatisations, documentation. Vous pouvez l'opérer en interne ou prolonger le partenariat. Aucun engagement de renouvellement." },
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
    <div className="bg-background text-ivory">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <Logo showTagline={false} />
          </button>
          <a
            href="https://tally.so/r/zx0Nrg"
            target="_blank"
            rel="noopener noreferrer"
            className={`whitespace-nowrap border border-gold text-gold px-3 py-2 sm:px-6 sm:py-2.5 text-[11px] tracking-[0.15em] sm:tracking-luxe uppercase font-semibold hover:bg-gold hover:text-ink transition-all duration-500 ${
              scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            Réserver un échange
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-20 sm:pt-24 md:pt-28 pb-4 sm:pb-8 md:pb-12 px-5 sm:px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-serif text-[1.6rem] leading-[1.15] md:text-[2.2rem] md:leading-[1.1] text-ivory mb-5 md:mb-10 tracking-tight">
            Votre offre est solide. Votre pipeline, lui, dépend encore de vous.
          </h1>
          <p className="text-[#94a3b8] max-w-2xl mx-auto text-[0.95rem] leading-[1.75] mb-4">
            Code Kaizen installe l'infrastructure commerciale qui permet à votre entreprise de générer un pipeline prévisible sans dépendre de vous. Vous gardez le contrôle stratégique. Le système opère sans vous.
          </p>
          <p className="inline-block border border-[rgba(201,162,78,0.4)] bg-[rgba(201,162,78,0.08)] rounded-lg px-4 py-2 text-sm text-[#c9a84c] not-italic mx-auto">
            Pour les fondateurs et dirigeants d'entreprises B2B founder-led avec une offre validée, un ticket ≥ 5 000 € et une croissance encore dépendante du réseau du fondateur.
          </p>
          <p className="text-[#94a3b8] italic text-[0.85rem] mb-6 md:mb-8">
            Le Diagnostic prend 5 jours. Ce qu'il révèle change la trajectoire.
          </p>
          <div className="flex flex-col items-center gap-6 md:gap-8">
            <a
              href="https://tally.so/r/zx0Nrg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-ink mx-auto inline-flex w-auto px-12 py-4 rounded-[2px] font-bold text-[12px] sm:text-xs tracking-[0.15em] sm:tracking-luxe uppercase hover:bg-ivory transition-all duration-500 shadow-[var(--shadow-gold)]"
            >
              Réserver un échange
            </a>
          </div>
        </div>
      </section>










      {/* VÉRITÉS */}
      <section className="py-16 md:py-20 px-6 md:px-10">
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
                Le bouche-à-oreille ne passe pas un certain seuil. Quand vous avez fait le tour de votre réseau, le silence qui suit est brutal, et difficile à expliquer en board.
              </p>
            </div>
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-6">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Recruter un SDR sans système : ce que ça coûte vraiment</h3>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75]">
                Un SDR sans infrastructure outbound, sans ICP défini, sans séquences qualifiées : vous payez un salaire pour improviser. Douze mois plus tard, le résultat est aléatoire et le coût réel dépasse 60 000 €.
              </p>
            </div>
          </div>
          <p className="text-[#94a3b8] italic text-center mt-10 md:mt-14 text-[0.875rem]">
            Il existe une alternative à cette dépendance.
          </p>
        </div>
      </section>


      {/* PREUVES MISSIONS */}
      <section className="py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory mb-10 md:mb-16 leading-tight">
            Exemples de missions
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-left">
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-6 md:p-8">
              <div className="bg-[rgba(255,255,255,0.06)] border border-[rgba(201,162,78,0.15)] inline-flex items-center justify-center px-4 py-2 mb-5 rounded">
                <img src={logoSpecgen} alt="Logo Specgen" className="h-8 w-auto" />
              </div>
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">SpecGen · SaaS IA · Appels d'offres</h3>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75] mb-5">
                Startup sans infrastructure outbound, zéro système en place. Mission : générer des inscriptions à un webinaire sur l'IA et les appels d'offres, de A à Z.
              </p>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75] mb-5">
                ICP défini. Base de 5 000 contacts extraits et enrichis sur LinkedIn. Campagne email déployée sur 794 contacts.
              </p>
              <p className="text-[#c9a84c] text-sm font-medium leading-relaxed mb-5">
                794 emails · 100 % délivrés · 55 % d'ouverture · 46 % de clics · 17 inscrits au webinaire
              </p>
            </div>
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-6 md:p-8">
              <div className="mb-5">
                <img src={logoIsssa} alt="Logo Issa" className="h-12 w-12 rounded-full object-cover" />
              </div>
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Isssa · Startup RSE · Nice</h3>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75] mb-5">
                Marché B2B local, zéro présence outbound. Mission : construire le système multicanal et qualifier les premières réponses.
              </p>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75] mb-5">
                ICP défini. 160 leads construits. Séquences LinkedIn + email déployées avec A/B testing.
              </p>
              <p className="text-[#c9a84c] text-sm font-medium leading-relaxed mb-5">
                356 emails · 51,9 % d'ouverture · 21,5 % de taux de réponse · 2 prospects qualifiés en demande active
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE FONDATRICE */}
      <section className="py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto grid md:grid-cols-[180px_1fr] gap-8 md:gap-12 items-center">
          <img
            src={aurelieImg}
            alt="Aurélie Auberger, fondatrice de Code Kaizen"
            className="w-[160px] h-[160px] md:w-[180px] md:h-[180px] rounded-full object-cover object-top mx-auto md:mx-0 border border-[rgba(201,162,78,0.25)]"
          />
          <div className="text-center md:text-left">
            <h2 className="font-serif text-[#c9a84c] text-[1.4rem] md:text-[1.6rem] leading-tight">
              Aurélie Auberger — Fondatrice de Code Kaizen
            </h2>

            
            <p className="text-[#f7f7f7] text-[1rem] leading-[1.85] my-4 text-center max-w-xl mx-auto md:mx-0">
              Ce qui m'a frappée, ce n'est pas le manque d'effort. C'est le chaos organisé.
            </p>
            <p className="text-[#f7f7f7] text-[1rem] leading-[1.85] my-4 text-center max-w-xl mx-auto md:mx-0">
              Des équipes qui travaillent en silo. Le même prospect contacté trois fois par trois personnes différentes. Des séquences LinkedIn copiées-collées où chaque message commence par "félicitations pour votre nouveau poste." Des outils utilisés à 10 % de leur capacité. Et en dehors de cela : un fondateur qui prospecte seul dans son réseau, jusqu'à ce qu'il n'y ait plus personne à appeler.
            </p>
            <p className="text-[#f7f7f7] text-[1rem] leading-[1.85] my-4 text-center max-w-xl mx-auto md:mx-0">
              J'ai vu cela de l'intérieur. 6 ans de terrain en expérience client, e-commerce et projets digitaux, puis en environnement B2B exigeant. Pas en consultant. En opérant.
            </p>
            <p className="text-[#f7f7f7] text-[1rem] leading-[1.85] my-4 text-center max-w-xl mx-auto md:mx-0">
              Ce que je construis chez Code Kaizen, c'est l'exact opposé. Une infrastructure où chaque action est coordonnée, chaque prospect est approché une seule fois, avec le bon message, au bon moment. Pas du volume. De la précision.
            </p>
            <p className="text-[#f7f7f7] text-[1rem] leading-[1.85] my-4 text-center max-w-xl mx-auto md:mx-0">
              Je ne suis pas une agence. Je comprends à la fois comment attirer un prospect et comment le convertir. Ce qui me permet de construire un système où rien ne se perd entre les deux.
            </p>
            <p className="text-[#f7f7f7] text-[1rem] leading-[1.85] my-4 text-center max-w-xl mx-auto md:mx-0">
              Ce n'est pas une délégation. C'est une fondation.
            </p>
            <a
              href="https://www.linkedin.com/company/code-kaizen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#c9a84c] text-sm hover:text-ivory transition-colors"
            >
              → Profil LinkedIn Code Kaizen
            </a>
          </div>
        </div>
      </section>





      <PipelineChart />

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
              { t: "On construit avant d'envoyer", s: "L'infrastructure avant les séquences. Ce que vous ne voyez pas détermine 80 % du résultat.", d: "Une séquence mal ciblée envoie des milliers de messages au mauvais profil. Nous passons autant de temps à construire l'infrastructure qu'à l'opérer. Ce que vous ne voyez pas (le sourcing, le scoring, l'architecture technique) détermine 80 % du résultat final." },
              { t: "On mesure tout, on décide sur les données", s: "Chaque décision est tracée et justifiée par des données. L'opinion n'a pas sa place.", d: "Chaque décision est tracée et justifiée par des données : taux de réponse par segment, par étape, par accroche. Nous n'itérons pas à l'aveugle. Nous mesurons, nous interprétons, nous ajustons. L'opinion n'a pas sa place dans un système d'acquisition." },
              { t: "Alignés sur vos résultats, pas sur nos heures", s: "On facture ce qu'on livre, pas le temps passé. Nos intérêts sont alignés sur vos résultats.", d: "Nous ne facturons pas du temps passé. Nous facturons ce que nous livrons : un diagnostic, un système déployé, un pilotage mensuel. Cette structure élimine le conflit d'intérêt classique entre prestataire et client. Nous avons autant intérêt que vous à ce que le système produise des résultats réels." },
              { t: "On vous rend indépendant", s: "Chaque mission se termine par un transfert complet. Vous opérez sans nous si vous le souhaitez.", d: "Nous ne construisons pas des systèmes dont vous seriez dépendants. Chaque mission se termine par un transfert complet : documentation, playbook, formation. L'objectif est que vous puissiez opérer sans nous, ou que vous choisissiez de continuer avec nous. La différence est là." },
            ].map((b, i) => (
              <details
                key={b.t}
                className="group bg-[#152339] border-l-[3px] border-l-[#c9a84c] border-y border-r border-y-[rgba(201,168,76,0.15)] border-r-[rgba(201,168,76,0.15)] rounded-r-lg p-6 md:p-7 hover:bg-[#1a2842] transition-colors"
              >
                <summary className="flex gap-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <div className="font-serif text-[#c9a84c] text-[2rem] md:text-[2.4rem] leading-none flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-base md:text-lg font-bold leading-tight mb-2">{b.t}</h3>
                    <p className="text-[#94a3b8] text-[13px] md:text-sm leading-relaxed">{b.s}</p>
                  </div>
                  <div className="text-[#c9a84c] text-xl flex-shrink-0 transition-transform group-open:rotate-45 self-start">+</div>
                </summary>
                <p className="text-[#94a3b8] text-[13px] md:text-sm leading-relaxed mt-4 pl-[calc(2rem+1.25rem)] md:pl-[calc(2.4rem+1.25rem)]">{b.d}</p>
              </details>
            ))}
          </div>


        </div>
      </section>

      {/* BÉNÉFICES */}
      <section className="py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory mb-10 md:mb-16 leading-tight">
            Trois niveaux d'intervention. Un seul objectif : que votre croissance ne dépende plus de vous.
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-8 text-left">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Diagnostic Acquisition : 5 jours</h3>
              <p className="text-[#F5F0E8] text-[13px] md:text-sm leading-relaxed">
                Nous cartographions votre ICP réel, votre positionnement outbound, et les leviers bloquants. Livrable structuré le jour de la restitution : Fiche ICP, stack recommandée, architecture de séquences.
              </p>
              <p className="mt-6 text-[#F5F0E8] text-[13px] md:text-sm leading-relaxed">
                Diagnostic à 1 500 € HT · Déduit intégralement si une mission démarre.
              </p>
            </div>
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-8 text-left">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Système déployé & opéré</h3>
              <p className="text-[#F5F0E8] text-[13px] md:text-sm leading-relaxed">
                Nous construisons et opérons l'infrastructure : sourcing Clay, enrichissement, séquences Instantly, qualification SQL, CRM. Le fondateur sort de la prospection. Le système entre en fonction.
              </p>
              <p className="mt-6 text-[#F5F0E8] text-[13px] md:text-sm leading-relaxed">
                Les missions démarrent généralement entre 5 000 € et 12 000 € HT selon la complexité de votre marché et le périmètre défini ensemble. Le Diagnostic permet de calibrer précisément ce chiffre et d'en déduire les 1 500 € déjà investis.
              </p>
            </div>
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-8 text-left">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Pilotage mensuel</h3>
              <p className="text-[#F5F0E8] text-[13px] md:text-sm leading-relaxed">
                Nous opérons le système : sourcing continu, optimisation des campagnes, qualification des réponses, reporting hebdomadaire. Vous recevez des prospects qualifiés avec un brief complet (budget, autorité, urgence, contexte). Vous closez.
              </p>
              <p className="mt-6 text-[#F5F0E8] text-[13px] md:text-sm leading-relaxed">
                Les missions démarrent généralement entre 5 000 € et 12 000 € HT selon la complexité de votre marché et le périmètre défini ensemble. Le Diagnostic permet de calibrer précisément ce chiffre et d'en déduire les 1 500 € déjà investis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION A — COMMENT SE PASSE UNE MISSION */}
      <section id="phases" className="bg-[#0d1b2e] border-t border-b border-[rgba(201,162,78,0.15)] py-16 md:py-28 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-[1.5rem] md:text-[2.1rem] text-ivory mb-4 leading-tight">
              Comment se passe une mission Code Kaizen
            </h2>
            <p className="text-[#94a3b8] text-[0.9rem] md:text-[0.95rem] leading-relaxed">
              Du premier échange à la transmission complète — voici ce que vous vivez.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-10 md:space-y-12">
            {/* Étape 0 */}
            <div className="relative pl-8 md:pl-10 border-l-2 border-[rgba(201,168,76,0.25)]">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#c9a84c] border-2 border-[#0d1b2e]" />
              <div className="text-[10px] font-bold tracking-[0.12em] text-[#c9a84c] uppercase mb-2">
                Étape 0 — Diagnostic Acquisition · 5 jours
              </div>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75] mb-4">
                Avant de toucher au moindre outil, je comprends votre marché, votre offre, vos clients actuels et pourquoi ils vous choisissent. Vous remplissez un questionnaire à votre rythme. On se retrouve 45 minutes pour aligner, clarifier, poser les bases.
              </p>
              <p className="text-[#94a3b8] text-[0.9rem] leading-[1.7]">
                À l'issue des 5 jours : ICP réel, positionnement outbound, leviers bloquants, stack recommandée, architecture de séquences. Un livrable structuré et une décision claire.
              </p>
              <p className="text-[#c9a84c] text-[0.85rem] italic mt-3">
                C'est le moment le plus exigeant de notre collaboration. Ce qui suit est entre mes mains.
              </p>
            </div>

            {/* Étape 1 */}
            <div className="relative pl-8 md:pl-10 border-l-2 border-[rgba(201,168,76,0.25)]">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#c9a84c] border-2 border-[#0d1b2e]" />
              <div className="text-[10px] font-bold tracking-[0.12em] text-[#c9a84c] uppercase mb-2">
                Étape 1 · J+0 à J+15 — On pose la fondation
              </div>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75] mb-4">
                Vous ne voyez pas tout ce qui se passe. C'est voulu. ICP défini, stack technique installée, domaines configurés, scoring SQL posé. À J+15 vous recevez un livrable structuré : votre ICP réel, l'architecture des séquences, la stack recommandée. Un call de 30 minutes pour valider ensemble.
              </p>
            </div>

            {/* Étape 2 */}
            <div className="relative pl-8 md:pl-10 border-l-2 border-[rgba(201,168,76,0.25)]">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#c9a84c] border-2 border-[#0d1b2e]" />
              <div className="text-[10px] font-bold tracking-[0.12em] text-[#c9a84c] uppercase mb-2">
                Étape 2 · J+15 à J+35 — Le système entre en fonction
              </div>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75] mb-4">
                Prospects ciblés, enrichis, scorés selon votre ICP. Séquences email et LinkedIn déployées. Vous recevez un reporting écrit chaque semaine — chiffres, actions, prochaines étapes. Vous le lisez quand vous voulez. Aucune réunion imposée.
              </p>
            </div>

            {/* Étape 3 */}
            <div className="relative pl-8 md:pl-10 border-l-2 border-[rgba(201,168,76,0.25)]">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#c9a84c] border-2 border-[#0d1b2e]" />
              <div className="text-[10px] font-bold tracking-[0.12em] text-[#c9a84c] uppercase mb-2">
                Étape 3 · J+35 à J+90 — Vous recevez des prospects qualifiés
              </div>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75] mb-4">
                Chaque réponse est filtrée. Avant chaque call commercial, vous recevez un brief complet sur le prospect — budget, autorité de décision, urgence, contexte. Votre première conversation est commerciale, pas exploratoire. Un call mensuel de 30 minutes pour piloter ensemble.
              </p>
            </div>

            {/* J+90 */}
            <div className="relative pl-8 md:pl-10">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#9fe1cb] border-2 border-[#0d1b2e]" />
              <div className="text-[10px] font-bold tracking-[0.12em] text-[#9fe1cb] uppercase mb-2">
                J+90 — Le système vous appartient
              </div>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75]">
                Séquences, bases de contacts, workflows, playbook : tout vous est remis sans condition, sans surcoût. Une option de formation sur site est disponible pour que vous ou vos équipes opèrent le système en autonomie.
              </p>
            </div>
          </div>
        </div>
      </section>




      {/* CE QUE CODE KAIZEN N'EST PAS */}
      <section className="py-10 md:py-14 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory text-center mb-4 md:mb-6 leading-tight">
            Ce que Code Kaizen n'est pas
          </h2>
          <p className="text-[#f7f7f7] text-center text-[0.95rem] md:text-[1rem] leading-[1.75] max-w-3xl mx-auto">
            Pas fait pour vous si votre offre est encore en validation, si votre ticket moyen est inférieur à 5 000 €, ou si vous cherchez une délégation totale sans implication.
          </p>
        </div>
      </section>

      {/* COÛT DE L'ATTENTE */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-[rgba(201,162,78,0.05)] border-t border-b border-[rgba(201,162,78,0.15)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory mb-10 md:mb-14 leading-tight text-center">
            Ce que vous gagnez concrètement
          </h2>

          <div className="space-y-8 md:space-y-10 mb-10 md:mb-14">
            <div>
              <p className="text-gold text-[1.5rem] md:text-[1.75rem] font-bold leading-tight mb-3">
                10 heures par semaine.
              </p>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75]">
                C'est le temps que la majorité des équipes B2B perdent encore en prospection manuelle. Du temps de fondateur. Du temps de décideur. Du temps qui ne devrait pas être là.
              </p>
            </div>

            <div>
              <p className="text-gold text-[1.5rem] md:text-[1.75rem] font-bold leading-tight mb-3">
                +50 % de leads qualifiés.
              </p>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75]">
                C'est ce que produisent en moyenne les entreprises qui structurent leur prospection avec un système automatisé. Pas plus d'efforts. Un meilleur système.
              </p>
            </div>

            <div>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75]">
                Un SDR sans système improvise. Avec le bon système, il performe.
              </p>
            </div>

            <div>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75]">
                Le calcul est simple. Chaque rendez-vous qualifié que vous n'allez pas chercher vous-même est une opportunité de plus sur votre pipeline. Sur un ticket moyen de 5 000 €, un seul deal supplémentaire par mois couvre largement l'investissement. Le système travaille. Vous closez.
              </p>
            </div>

            <div>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75]">
                Les premiers rendez-vous qualifiés arrivent en moyenne à J+35. À J+90, le système vous appartient.
              </p>
            </div>
          </div>

          <p className="text-[#94a3b8] text-[0.85rem] md:text-[0.9rem] text-center max-w-2xl mx-auto mb-6 leading-relaxed">
            Un échange de 30 minutes. Vous repartez avec une lecture claire de votre situation et une décision, quelle qu'elle soit.
          </p>
          <div className="text-center">
            <a
              href="https://tally.so/r/zx0Nrg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-ink inline-flex px-6 py-[14px] sm:px-14 sm:py-6 rounded-[2px] font-bold text-[12px] sm:text-xs tracking-[0.15em] sm:tracking-luxe uppercase hover:bg-ivory transition-all duration-500 shadow-[var(--shadow-gold)]"
            >
              Réserver un échange
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-secondary/30">
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
                    className={`overflow-hidden transition-all duration-500 ${open ? "max-h-96 pb-6" : "max-h-0"}`}
                  >
                    <p className="text-[#F5F0E8] leading-relaxed text-[13px] md:text-sm">{faq.r}</p>
                  </div>
                </div>
              );
            })}
          </div>
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
