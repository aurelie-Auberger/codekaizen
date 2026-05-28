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
  { id: "01", t: "ICP et ciblage", d: "On identifie les dÃ©cideurs qui ont un problÃ¨me que vous rÃ©solvez. Pas de masse, pas de hasard.", icon: Target },
  { id: "02", t: "SystÃ¨me outbound complet", d: "Le systÃ¨me prospecte, qualifie et relance pendant que vous faites autre chose.", icon: Zap },
  { id: "03", t: "Closing intÃ©grÃ©", d: "On traite les objections et on accompagne jusqu'Ã  la signature. Vous intervenez quand vous le choisissez.", icon: Users },
  { id: "04", t: "Reporting et pilotage", d: "Chaque semaine : leads qualifiÃ©s, deals en cours. Reporting hebdomadaire.", icon: BarChart3 },
];

const tickerItems = [
  "Diagnostic stratÃ©gique",
  "SystÃ¨me d'acquisition sur-mesure",
  "RÃ©munÃ©ration Ã  la performance",
  "PropriÃ©tÃ© intellectuelle prÃ©servÃ©e",
  "Closing intÃ©grÃ©",
  "Reporting hebdomadaire",
  "Pipeline prÃ©visible",
  "B2B premium uniquement",
];

const problems = [
  { t: "Pipeline irrÃ©gulier", d: "Votre flux de prospects dÃ©pend du bouche-Ã -oreille ou de l'opportunisme." },
  { t: "Closing alÃ©atoire", d: "Des deals qualifiÃ©s sont perdus par simple manque de structure de suivi." },
  { t: "CoÃ»ts fixes toxiques", d: "Payer des frais d'agence avant d'avoir gÃ©nÃ©rÃ© le moindre euro de profit." },
];

const expertise = [
  { t: "Outbound B2B structurÃ©", d: "Construction de systÃ¨mes de prospection multicanal : LinkedIn, cold email, sÃ©quences automatisÃ©es. Ciblage ICP, enrichissement de donnÃ©es, A/B test sur les accroches. De zÃ©ro Ã  pipeline actif." },
  { t: "Closing et conversion", d: "Qualification des leads entrants, scripts d'argumentation, traitement des objections. Accompagnement jusqu'Ã  la signature et au premier encaissement." },
  { t: "Pilotage orientÃ© ROI", d: "Chaque action est tracÃ©e, mesurÃ©e, ajustÃ©e. Reporting hebdomadaire, attribution prÃ©cise, optimisation continue. Vous savez exactement d'oÃ¹ vient chaque deal." },
];

const faqs = [
  { q: "Qui gÃ¨re le closing ?", r: "Le closing reste entre vos mains. Vous connaissez votre marchÃ©, vos clients, vos relations : c'est votre actif. Notre rÃ´le s'arrÃªte au rendez-vous qualifiÃ©. Nous vous livrons un brief complet sur chaque prospect (budget, autoritÃ© de dÃ©cision, urgence, contexte) pour que votre premiÃ¨re conversation soit commerciale, pas exploratoire. Vous gardez le contrÃ´le de votre relation commerciale. Nous la rendons plus prÃ©visible." },
  { q: "C'est quoi le Diagnostic Acquisition ?", r: "5 jours ouvrÃ©s pendant lesquels nous analysons votre ICP rÃ©el, votre positionnement marchÃ©, vos sÃ©quences actuelles si elles existent, et les leviers bloquants. La restitution se fait en call de 45 minutes. Vous repartez avec une dÃ©cision claire, pas un rapport Ã  lire seul. Livrable : fiche ICP opÃ©rationnelle, architecture de sÃ©quences recommandÃ©e, stack technique adaptÃ©e Ã  votre secteur, et prioritÃ©s d'exÃ©cution. FacturÃ© 1 500 â¬ HT, intÃ©gralement dÃ©duit si une mission de construction dÃ©marre." },
  { q: "Comment fonctionne la tarification ?", r: "La tarification est dÃ©finie au cas par cas lors du Diagnostic â c'est prÃ©cisÃ©ment l'objet de la restitution. Le diagnostic est facturÃ© 1 500 â¬ HT, intÃ©gralement dÃ©duit si une mission dÃ©marre. La construction et le pilotage sont calibrÃ©s selon la complexitÃ© de votre marchÃ© et le pÃ©rimÃ¨tre dÃ©fini ensemble. Pas de commission sur votre CA, pas de coÃ»ts variables cachÃ©s." },
  { q: "Que se passe-t-il aprÃ¨s 12 mois ?", r: "Le systÃ¨me vous appartient intÃ©gralement : sÃ©quences, bases de contacts, automatisations, documentation. Vous pouvez l'opÃ©rer en interne ou prolonger le partenariat. Aucun engagement de renouvellement." },
  { q: "Quel est le dÃ©lai pour voir les premiers rÃ©sultats ?", r: "Les premiers RDV qualifiÃ©s arrivent gÃ©nÃ©ralement entre J+21 et J+35 aprÃ¨s le lancement du systÃ¨me. Le pipeline significatif se construit entre J+45 et J+90 selon le secteur et le ticket moyen de votre offre." },
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
          <h1 className="text-5xl md:text-6xl text-ivory mb-8">C'est notÃ©.</h1>
          <p className="text-[#F5F0E8] mb-12 leading-relaxed">
            Vous recevrez une confirmation par email. On se retrouve Ã  l'heure convenue.
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
            RÃ©server mon Diagnostic
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-20 sm:pt-24 md:pt-28 pb-4 sm:pb-8 md:pb-12 px-5 sm:px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-serif text-[1.6rem] leading-[1.15] md:text-[2.2rem] md:leading-[1.1] text-ivory mb-5 md:mb-10 tracking-tight">
            Votre offre est solide. Votre pipeline, lui, dÃ©pend encore de vous.
          </h1>
          <p className="text-[#94a3b8] max-w-2xl mx-auto text-[0.95rem] leading-[1.75] mb-4">
            Code Kaizen installe l'infrastructure commerciale qui permet Ã  votre entreprise de gÃ©nÃ©rer un pipeline prÃ©visible sans dÃ©pendre de vous. Vous gardez le contrÃ´le stratÃ©gique. Le systÃ¨me opÃ¨re sans vous.
          </p>
          <p className="inline-block border border-[rgba(201,162,78,0.4)] bg-[rgba(201,162,78,0.08)] rounded-lg px-4 py-2 text-sm text-[#c9a84c] not-italic mx-auto">
            Pour les fondateurs et dirigeants d'entreprises B2B founder-led avec une offre validÃ©e, un ticket â¥ 5 000 â¬ et une croissance encore dÃ©pendante du rÃ©seau du fondateur.
          </p>
          <p className="text-[#94a3b8] italic text-[0.85rem] mb-6 md:mb-8">
            Le Diagnostic prend 5 jours. Ce qu'il rÃ©vÃ¨le change la trajectoire.
          </p>
          <div className="flex flex-col items-center gap-6 md:gap-8">
            <a
              href="https://tally.so/r/zx0Nrg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-ink mx-auto inline-flex w-auto px-12 py-4 rounded-[2px] font-bold text-[12px] sm:text-xs tracking-[0.15em] sm:tracking-luxe uppercase hover:bg-ivory transition-all duration-500 shadow-[var(--shadow-gold)]"
            >
              RÃ©server mon Diagnostic
            </a>
          </div>
        </div>
      </section>










      {/* VÃRITÃS */}
      <section className="py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-[720px] mx-auto text-center">
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory mb-10 md:mb-16 leading-tight">
            Ce que personne ne dit aux fondateurs B2B
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-left">
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-6">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Pipeline otage</h3>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75]">
                Chaque client vient d'un appel que vous avez passÃ© ou d'une relation que vous avez cultivÃ©e. DÃ¨s que vous arrÃªtez, le pipeline s'arrÃªte. Ce n'est pas un modÃ¨le, c'est une dÃ©pendance.
              </p>
            </div>
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-6">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Le rÃ©seau s'Ã©puise</h3>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75]">
                Le bouche-Ã -oreille ne passe pas un certain seuil. Quand vous avez fait le tour de votre rÃ©seau, le silence qui suit est brutal, et difficile Ã  expliquer en board.
              </p>
            </div>
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-6">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Recruter un SDR sans systÃ¨me : ce que Ã§a coÃ»te vraiment</h3>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75]">
                Un SDR sans infrastructure outbound, sans ICP dÃ©fini, sans sÃ©quences qualifiÃ©es : vous payez un salaire pour improviser. Douze mois plus tard, le rÃ©sultat est alÃ©atoire et le coÃ»t rÃ©el dÃ©passe 60 000 â¬.
              </p>
            </div>
          </div>
          <p className="text-[#94a3b8] italic text-center mt-10 md:mt-14 text-[0.875rem]">
            Il existe une alternative Ã  cette dÃ©pendance.
          </p>
        </div>
      </section>


      {/* PREUVES MISSIONS */}
      <section className="py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory mb-10 md:mb-16 leading-tight">
            Ce que ces missions ont dÃ©montrÃ©
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-left">
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-6 md:p-8">
              <div className="bg-white rounded-md inline-flex items-center justify-center px-4 py-2 mb-5">
                <img src={logoSpecgen} alt="Logo Specgen" className="h-8 w-auto" />
              </div>
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Specgen, SaaS IA appels d'offres</h3>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75] mb-5">
                StratÃ©gie d'acquisition construite de zÃ©ro pour une startup sans infrastructure outbound : ICP dÃ©fini, base de 5 000 contacts scrapÃ©s et enrichis sur LinkedIn, campagne email dÃ©ployÃ©e.
              </p>
              <p className="text-[#c9a84c] text-sm font-medium leading-relaxed">
                794 emails Â· 55 % d'ouverture Â· 46 % de clics Â· 17 inscrits au webinaire
              </p>
            </div>
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-6 md:p-8">
              <div className="mb-5">
                <img src={logoIsssa} alt="Logo Issa" className="h-12 w-12 rounded-full object-cover" />
              </div>
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Issa, start-up RSE (Nice)</h3>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75] mb-5">
                SystÃ¨me de prospection LinkedIn et emailing multicanal construit sur un marchÃ© B2B local. ICP, sÃ©quences, A/B testing, workflow automatisÃ©.
              </p>
              <p className="text-[#c9a84c] text-sm font-medium leading-relaxed">
                160 leads construits Â· 51,9 % d'ouverture email Â· 21,5 % de taux de rÃ©ponse
              </p>
            </div>
          </div>
          <p className="text-[#94a3b8] italic text-center mt-10 md:mt-14 text-[0.875rem] max-w-2xl mx-auto">
            Ces missions ont Ã©tÃ© conduites avant la crÃ©ation formelle de Code Kaizen â missions terrain, non rÃ©munÃ©rÃ©es. Les systÃ¨mes, les outils et les rÃ©sultats sont rÃ©els.
          </p>
        </div>
      </section>

      {/* SIGNATURE FONDATRICE */}
      <section className="py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto grid md:grid-cols-[180px_1fr] gap-8 md:gap-12 items-center">
          <img
            src={aurelieImg}
            alt="AurÃ©lie Auberger, fondatrice de Code Kaizen"
            className="w-[160px] h-[160px] md:w-[180px] md:h-[180px] rounded-full object-cover object-top mx-auto md:mx-0 border border-[rgba(201,162,78,0.25)]"
          />
          <div className="text-center md:text-left">
            <h2 className="font-serif text-[#c9a84c] text-[1.4rem] md:text-[1.6rem] leading-tight">
              AurÃ©lie Auberger â Fondatrice de Code Kaizen
            </h2>

            
            <p className="text-[#f7f7f7] text-[1rem] leading-[1.85] my-4 text-center max-w-xl mx-auto md:mx-0">
              Beaucoup d'entreprises B2B ont une offre solide, mais une acquisition encore trop dÃ©pendante du fondateur.
            </p>
            <p className="text-[#f7f7f7] text-[1rem] leading-[1.85] my-4 text-center max-w-xl mx-auto md:mx-0">
              Code Kaizen aide les entreprises founder-led Ã  structurer une infrastructure commerciale capable de gÃ©nÃ©rer un pipeline plus prÃ©visible, plus stable et transmissible.
            </p>
            <p className="text-[#f7f7f7] text-[1rem] leading-[1.85] my-4 text-center max-w-xl mx-auto md:mx-0">
              L'objectif n'est pas de multiplier les actions. L'objectif est de construire un systÃ¨me de croissance qui fonctionne durablement.
            </p>
            <a
              href="https://www.linkedin.com/company/code-kaizen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#c9a84c] text-sm hover:text-ivory transition-colors"
            >
              â Profil LinkedIn Code Kaizen
            </a>
          </div>
        </div>
      </section>



      {/* NOTRE HISTOIRE */}
      <section className="py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-[760px] mx-auto">

          <div className="space-y-10 md:space-y-14">
            <div>
              <h3 className="font-serif text-[#c9a24e] text-xl md:text-2xl mb-5">
                Ce que je construis
              </h3>
              <p className="text-[#f7f7f7] text-[1rem] md:text-[1.05rem] leading-[1.85]">
                Chaque mission produit une infrastructure documentÃ©e, transmissible, opÃ©rable sans nous Ã  l'issue de la mission.
              </p>
            </div>

            <div className="border-t border-[rgba(201,162,78,0.2)] pt-10 md:pt-14">
              <p className="text-[#f7f7f7] text-[1rem] md:text-[1.05rem] leading-[1.85]">
                Vous n'achetez pas une prestation. Vous acquÃ©rez un actif commercial qui tourne sans vous.
              </p>
              <p className="text-[#c9a24e] italic text-center mt-8 font-serif text-lg">
                Revenue, by system.
              </p>
            </div>
          </div>
        </div>
      </section>


      <PipelineChart />

      {/* SECTION B â PRINCIPES */}
      <section className="bg-[#0d1b2e] border-b border-[rgba(201,162,78,0.15)] py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory text-center mb-3 md:mb-4 leading-tight">
            Nos principes
          </h2>
          <p className="text-[#94a3b8] text-center text-[0.875rem] mb-12 md:mb-16">
            Ce qui guide chaque dÃ©cision, chaque sÃ©quence, chaque mission.
          </p>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {[
              { t: "On construit avant d'envoyer", s: "L'infrastructure avant les sÃ©quences. Ce que vous ne voyez pas dÃ©termine 80 % du rÃ©sultat.", d: "Une sÃ©quence mal ciblÃ©e envoie des milliers de messages au mauvais profil. Nous passons autant de temps Ã  construire l'infrastructure qu'Ã  l'opÃ©rer. Ce que vous ne voyez pas (le sourcing, le scoring, l'architecture technique) dÃ©termine 80 % du rÃ©sultat final." },
              { t: "On mesure tout, on dÃ©cide sur les donnÃ©es", s: "Chaque dÃ©cision est tracÃ©e et justifiÃ©e par des donnÃ©es. L'opinion n'a pas sa place.", d: "Chaque dÃ©cision est tracÃ©e et justifiÃ©e par des donnÃ©es : taux de rÃ©ponse par segment, par Ã©tape, par accroche. Nous n'itÃ©rons pas Ã  l'aveugle. Nous mesurons, nous interprÃ©tons, nous ajustons. L'opinion n'a pas sa place dans un systÃ¨me d'acquisition." },
              { t: "AlignÃ©s sur vos rÃ©sultats, pas sur nos heures", s: "On facture ce qu'on livre, pas le temps passÃ©. Nos intÃ©rÃªts sont alignÃ©s sur vos rÃ©sultats.", d: "Nous ne facturons pas du temps passÃ©. Nous facturons ce que nous livrons : un diagnostic, un systÃ¨me dÃ©ployÃ©, un pilotage mensuel. Cette structure Ã©limine le conflit d'intÃ©rÃªt classique entre prestataire et client. Nous avons autant intÃ©rÃªt que vous Ã  ce que le systÃ¨me produise des rÃ©sultats rÃ©els." },
              { t: "On vous rend indÃ©pendant", s: "Chaque mission se termine par un transfert complet. Vous opÃ©rez sans nous si vous le souhaitez.", d: "Nous ne construisons pas des systÃ¨mes dont vous seriez dÃ©pendants. Chaque mission se termine par un transfert complet : documentation, playbook, formation. L'objectif est que vous puissiez opÃ©rer sans nous, ou que vous choisissiez de continuer avec nous. La diffÃ©rence est lÃ ." },
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

      {/* BÃNÃFICES */}
      <section className="py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory mb-10 md:mb-16 leading-tight">
            Trois niveaux d'intervention. Un seul objectif : que votre croissance ne dÃ©pende plus de vous.
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-8 text-left">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Diagnostic Acquisition : 5 jours</h3>
              <p className="text-[#F5F0E8] text-[13px] md:text-sm leading-relaxed">
                Nous cartographions votre ICP rÃ©el, votre positionnement outbound, et les leviers bloquants. Livrable structurÃ© le jour de la restitution : Fiche ICP, stack recommandÃ©e, architecture de sÃ©quences.
              </p>
              <p className="mt-6 text-center text-[#c9a24e] text-[13px] tracking-[0.1em] uppercase font-medium">
                Diagnostic Ã  1 500 â¬ HT Â· DÃ©duit intÃ©gralement si une mission dÃ©marre.
              </p>
            </div>
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-8 text-left">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">SystÃ¨me dÃ©ployÃ© & opÃ©rÃ©</h3>
              <p className="text-[#F5F0E8] text-[13px] md:text-sm leading-relaxed">
                Nous construisons et opÃ©rons l'infrastructure : sourcing Clay, enrichissement, sÃ©quences Instantly, qualification SQL, CRM. Le fondateur sort de la prospection. Le systÃ¨me entre en fonction.
              </p>
              <p className="mt-6 text-center text-[#c9a24e] text-[13px] tracking-[0.1em] uppercase font-medium">
                Tarification sur mesure, dÃ©finie Ã  l'issue du Diagnostic.
              </p>
            </div>
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-8 text-left">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Pilotage mensuel</h3>
              <p className="text-[#F5F0E8] text-[13px] md:text-sm leading-relaxed">
                Nous opÃ©rons le systÃ¨me : sourcing continu, optimisation des campagnes, qualification des rÃ©ponses, reporting hebdomadaire. Vous recevez des prospects qualifiÃ©s avec un brief complet (budget, autoritÃ©, urgence, contexte). Vous closez.
              </p>
              <p className="mt-6 text-center text-[#c9a24e] text-[13px] tracking-[0.1em] uppercase font-medium">
                Tarification sur mesure, dÃ©finie Ã  l'issue du Diagnostic.
              </p>
            </div>
          </div>
          <p className="text-center text-[#94a3b8] text-xs mt-8">
            <a href="#phases" className="text-[#c9a24e] hover:underline">Voir comment Ã§a marche â</a>
          </p>
        </div>
      </section>

      {/* SECTION A â INFRASTRUCTURE */}
      <section id="phases" className="bg-[#0d1b2e] border-t border-b border-[rgba(201,162,78,0.15)] py-16 md:py-28 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-[1.5rem] md:text-[2.1rem] text-ivory mb-4 leading-tight">
              Comment fonctionne l'infrastructure Code Kaizen
            </h2>
            <p className="text-[#94a3b8] text-[0.9rem] md:text-[0.95rem] leading-relaxed">
              Un systÃ¨me en 3 Ã©tapes, documentÃ© et transmissible.
            </p>
          </div>

          {/* BLOC 1 â Timeline 6 phases */}
          <div className="mb-16 md:mb-24 max-w-2xl mx-auto">
            <PhasesTimeline />
          </div>



        </div>
      </section>




      {/* CE QUE CODE KAIZEN N'EST PAS */}
      <section className="py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory text-center mb-4 md:mb-6 leading-tight">
            Ce que Code Kaizen n'est pas
          </h2>
          <p className="text-[#f7f7f7] text-center text-[0.95rem] md:text-[1rem] leading-[1.75] max-w-3xl mx-auto">
            Pas fait pour vous si votre offre est encore en validation, si votre ticket moyen est infÃ©rieur Ã  5 000 â¬, ou si vous cherchez une dÃ©lÃ©gation totale sans implication.
          </p>
        </div>
      </section>

      {/* COÃT DE L'ATTENTE */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-[rgba(201,162,78,0.05)] border-t border-b border-[rgba(201,162,78,0.15)]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#94a3b8] italic text-[0.875rem] mb-4 md:mb-6">
            Pourquoi dÃ©marrer maintenant
          </p>
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory mb-6 md:mb-8 leading-tight">
            Ce que vous gagnez en dÃ©marrant maintenant
          </h2>
          <p className="text-[#94a3b8] text-[0.85rem] md:text-[0.9rem] max-w-2xl mx-auto mb-10 md:mb-14 leading-relaxed">
            Les missions actives sont limitÃ©es Ã  3 simultanÃ©ment. Quand les crÃ©neaux sont pris, les nouvelles missions dÃ©marrent en liste d'attente.
          </p>
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
                DÃ©lai moyen pour les premiers rendez-vous qualifiÃ©s aprÃ¨s le lancement des campagnes.
              </p>
            </div>
            <div>
              <div className="text-[#c9a24e] text-[2rem] md:text-[2.5rem] font-bold leading-tight mb-4">J+90</div>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75]">
                Date Ã  laquelle le systÃ¨me vous appartient intÃ©gralement, sans condition, sans surcoÃ»t.
              </p>
            </div>
          </div>
          <p className="text-[#94a3b8] italic text-[0.85rem] md:text-[0.9rem] max-w-2xl mx-auto mb-6">
            Pas d'engagement. Pas de pitch commercial. Un diagnostic, un livrable, une dÃ©cision.
          </p>
          <a
            href="https://tally.so/r/zx0Nrg"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-ink inline-flex px-6 py-[14px] sm:px-14 sm:py-6 rounded-[2px] font-bold text-[12px] sm:text-xs tracking-[0.15em] sm:tracking-luxe uppercase hover:bg-ivory transition-all duration-500 shadow-[var(--shadow-gold)]"
          >
            RÃ©server mon Diagnostic
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[1.3rem] md:text-[1.6rem] text-ivory text-center mb-10 md:mb-16">Questions frÃ©quentes</h2>
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
            <a href="#" className="hover:text-gold transition-colors">Mentions lÃ©gales</a>
            <a href="#" className="hover:text-gold transition-colors">ConfidentialitÃ©</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;
