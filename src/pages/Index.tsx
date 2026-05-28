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
  { id: "01", t: "ICP et ciblage", d: "On identifie les dÃÂ©cideurs qui ont un problÃÂ¨me que vous rÃÂ©solvez. Pas de masse, pas de hasard.", icon: Target },
  { id: "02", t: "SystÃÂ¨me outbound complet", d: "Le systÃÂ¨me prospecte, qualifie et relance pendant que vous faites autre chose.", icon: Zap },
  { id: "03", t: "Closing intÃÂ©grÃÂ©", d: "On traite les objections et on accompagne jusqu'ÃÂ  la signature. Vous intervenez quand vous le choisissez.", icon: Users },
  { id: "04", t: "Reporting et pilotage", d: "Chaque semaine : leads qualifiÃÂ©s, deals en cours. Reporting hebdomadaire.", icon: BarChart3 },
];

const tickerItems = [
  "Diagnostic stratÃÂ©gique",
  "SystÃÂ¨me d'acquisition sur-mesure",
  "RÃÂ©munÃÂ©ration ÃÂ  la performance",
  "PropriÃÂ©tÃÂ© intellectuelle prÃÂ©servÃÂ©e",
  "Closing intÃÂ©grÃÂ©",
  "Reporting hebdomadaire",
  "Pipeline prÃÂ©visible",
  "B2B premium uniquement",
];

const problems = [
  { t: "Pipeline irrÃÂ©gulier", d: "Votre flux de prospects dÃÂ©pend du bouche-ÃÂ -oreille ou de l'opportunisme." },
  { t: "Closing alÃÂ©atoire", d: "Des deals qualifiÃÂ©s sont perdus par simple manque de structure de suivi." },
  { t: "CoÃÂ»ts fixes toxiques", d: "Payer des frais d'agence avant d'avoir gÃÂ©nÃÂ©rÃÂ© le moindre euro de profit." },
];

const expertise = [
  { t: "Outbound B2B structurÃÂ©", d: "Construction de systÃÂ¨mes de prospection multicanal : LinkedIn, cold email, sÃÂ©quences automatisÃÂ©es. Ciblage ICP, enrichissement de donnÃÂ©es, A/B test sur les accroches. De zÃÂ©ro ÃÂ  pipeline actif." },
  { t: "Closing et conversion", d: "Qualification des leads entrants, scripts d'argumentation, traitement des objections. Accompagnement jusqu'ÃÂ  la signature et au premier encaissement." },
  { t: "Pilotage orientÃÂ© ROI", d: "Chaque action est tracÃÂ©e, mesurÃÂ©e, ajustÃÂ©e. Reporting hebdomadaire, attribution prÃÂ©cise, optimisation continue. Vous savez exactement d'oÃÂ¹ vient chaque deal." },
];

const faqs = [
  { q: "Qui gÃÂ¨re le closing ?", r: "Le closing reste entre vos mains. Vous connaissez votre marchÃÂ©, vos clients, vos relations : c'est votre actif. Notre rÃÂ´le s'arrÃÂªte au rendez-vous qualifiÃÂ©. Nous vous livrons un brief complet sur chaque prospect (budget, autoritÃÂ© de dÃÂ©cision, urgence, contexte) pour que votre premiÃÂ¨re conversation soit commerciale, pas exploratoire. Vous gardez le contrÃÂ´le de votre relation commerciale. Nous la rendons plus prÃÂ©visible." },
  { q: "Qu'est-ce que le Diagnostic Acquisition ?", r: "5 jours ouvrÃÂ©s pendant lesquels nous analysons votre ICP rÃÂ©el, votre positionnement marchÃÂ©, vos sÃÂ©quences actuelles si elles existent, et les leviers bloquants. La restitution se fait en call de 45 minutes. Vous repartez avec une dÃÂ©cision claire, pas un rapport ÃÂ  lire seul. Livrable : fiche ICP opÃÂ©rationnelle, architecture de sÃÂ©quences recommandÃÂ©e, stack technique adaptÃÂ©e ÃÂ  votre secteur, et prioritÃÂ©s d'exÃÂ©cution. FacturÃÂ© 1 500 Ã¢ÂÂ¬ HT, intÃÂ©gralement dÃÂ©duit si une mission de construction dÃÂ©marre." },
  { q: "Comment fonctionne la tarification ?", r: "La tarification est dÃÂ©finie au cas par cas lors du Diagnostic Ã¢ÂÂ c'est prÃÂ©cisÃÂ©ment l'objet de la restitution. Le diagnostic est facturÃÂ© 1 500 Ã¢ÂÂ¬ HT, intÃÂ©gralement dÃÂ©duit si une mission dÃÂ©marre. La construction et le pilotage sont calibrÃÂ©s selon la complexitÃÂ© de votre marchÃÂ© et le pÃÂ©rimÃÂ¨tre dÃÂ©fini ensemble. Pas de commission sur votre CA, pas de coÃÂ»ts variables cachÃÂ©s." },
  { q: "Que se passe-t-il aprÃÂ¨s 12 mois ?", r: "Le systÃÂ¨me vous appartient intÃÂ©gralement : sÃÂ©quences, bases de contacts, automatisations, documentation. Vous pouvez l'opÃÂ©rer en interne ou prolonger le partenariat. Aucun engagement de renouvellement." },
  { q: "Quel est le dÃÂ©lai pour voir les premiers rÃÂ©sultats ?", r: "Les premiers RDV qualifiÃÂ©s arrivent gÃÂ©nÃÂ©ralement entre J+21 et J+35 aprÃÂ¨s le lancement du systÃÂ¨me. Le pipeline significatif se construit entre J+45 et J+90 selon le secteur et le ticket moyen de votre offre." },
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
          <h1 className="text-5xl md:text-6xl text-ivory mb-8">C'est notÃÂ©.</h1>
          <p className="text-[#F5F0E8] mb-12 leading-relaxed">
            Vous recevrez une confirmation par email. On se retrouve ÃÂ  l'heure convenue.
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
            RÃÂ©server mon Diagnostic
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-20 sm:pt-24 md:pt-28 pb-4 sm:pb-8 md:pb-12 px-5 sm:px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-serif text-[1.6rem] leading-[1.15] md:text-[2.2rem] md:leading-[1.1] text-ivory mb-5 md:mb-10 tracking-tight">
            Votre offre est solide. Votre pipeline, lui, dÃÂ©pend encore de vous.
          </h1>
          <p className="text-[#94a3b8] max-w-2xl mx-auto text-[0.95rem] leading-[1.75] mb-4">
            Code Kaizen installe l'infrastructure commerciale qui permet ÃÂ  votre entreprise de gÃÂ©nÃÂ©rer un pipeline prÃÂ©visible sans dÃÂ©pendre de vous. Vous gardez le contrÃÂ´le stratÃÂ©gique. Le systÃÂ¨me opÃÂ¨re sans vous.
          </p>
          <p className="inline-block border border-[rgba(201,162,78,0.4)] bg-[rgba(201,162,78,0.08)] rounded-lg px-4 py-2 text-sm text-[#c9a84c] not-italic mx-auto">
            Pour les fondateurs et dirigeants d'entreprises B2B founder-led avec une offre validÃÂ©e, un ticket Ã¢ÂÂ¥ 5 000 Ã¢ÂÂ¬ et une croissance encore dÃÂ©pendante du rÃÂ©seau du fondateur.
          </p>
          <p className="text-[#94a3b8] italic text-[0.85rem] mb-6 md:mb-8">
            Le Diagnostic prend 5 jours. Ce qu'il rÃÂ©vÃÂ¨le change la trajectoire.
          </p>
          <div className="flex flex-col items-center gap-6 md:gap-8">
            <a
              href="https://tally.so/r/zx0Nrg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-ink mx-auto inline-flex w-auto px-12 py-4 rounded-[2px] font-bold text-[12px] sm:text-xs tracking-[0.15em] sm:tracking-luxe uppercase hover:bg-ivory transition-all duration-500 shadow-[var(--shadow-gold)]"
            >
              RÃÂ©server mon Diagnostic
            </a>
          </div>
        </div>
      </section>










      {/* VÃÂRITÃÂS */}
      <section className="py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-[720px] mx-auto text-center">
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory mb-10 md:mb-16 leading-tight">
            Ce que personne ne dit aux fondateurs B2B
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-left">
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-6">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Pipeline otage</h3>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75]">
                Chaque client vient d'un appel que vous avez passÃÂ© ou d'une relation que vous avez cultivÃÂ©e. DÃÂ¨s que vous arrÃÂªtez, le pipeline s'arrÃÂªte. Ce n'est pas un modÃÂ¨le, c'est une dÃÂ©pendance.
              </p>
            </div>
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-6">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Le rÃÂ©seau s'ÃÂ©puise</h3>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75]">
                Le bouche-ÃÂ -oreille ne passe pas un certain seuil. Quand vous avez fait le tour de votre rÃÂ©seau, le silence qui suit est brutal, et difficile ÃÂ  expliquer en board.
              </p>
            </div>
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-6">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Recruter un SDR sans systÃÂ¨me : ce que ÃÂ§a coÃÂ»te vraiment</h3>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75]">
                Un SDR sans infrastructure outbound, sans ICP dÃÂ©fini, sans sÃÂ©quences qualifiÃÂ©es : vous payez un salaire pour improviser. Douze mois plus tard, le rÃÂ©sultat est alÃÂ©atoire et le coÃÂ»t rÃÂ©el dÃÂ©passe 60 000 Ã¢ÂÂ¬.
              </p>
            </div>
          </div>
          <p className="text-[#94a3b8] italic text-center mt-10 md:mt-14 text-[0.875rem]">
            Il existe une alternative ÃÂ  cette dÃÂ©pendance.
          </p>
        </div>
      </section>


      {/* PREUVES MISSIONS */}
      <section className="py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory mb-10 md:mb-16 leading-tight">
            Ce que ces missions ont dÃÂ©montrÃÂ©
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-left">
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-6 md:p-8">
              <div className="bg-white rounded-md inline-flex items-center justify-center px-4 py-2 mb-5">
                <img src={logoSpecgen} alt="Logo Specgen" className="h-8 w-auto" />
              </div>
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">SpecGen, SaaS IA appels d'offres</h3>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75] mb-5">
                StratÃÂ©gie d'acquisition construite de zÃÂ©ro pour une startup sans infrastructure outbound : ICP dÃÂ©fini, base de 5 000 contacts extraits et enrichis sur LinkedIn, campagne email dÃÂ©ployÃÂ©e.
              </p>
              <p className="text-[#c9a84c] text-sm font-medium leading-relaxed">
                794 emails ÃÂ· 55 % d'ouverture ÃÂ· 46 % de clics ÃÂ· 17 inscrits au webinaire
              </p>
            </div>
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-6 md:p-8">
              <div className="mb-5">
                <img src={logoIsssa} alt="Logo Issa" className="h-12 w-12 rounded-full object-cover" />
              </div>
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Issa, startup RSE (Nice)</h3>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75] mb-5">
                SystÃÂ¨me de prospection LinkedIn et emailing multicanal construit sur un marchÃÂ© B2B local. ICP, sÃÂ©quences, A/B testing, workflow automatisÃÂ©.
              </p>
              <p className="text-[#c9a84c] text-sm font-medium leading-relaxed">
                160 leads construits ÃÂ· 51,9 % d'ouverture email ÃÂ· 21,5 % de taux de rÃÂ©ponse
              </p>
            </div>
          </div>
          <p className="text-[#94a3b8] italic text-center mt-10 md:mt-14 text-[0.875rem] max-w-2xl mx-auto">
            Ces missions ont ÃÂ©tÃÂ© conduites avant la crÃÂ©ation formelle de Code Kaizen Ã¢ÂÂ missions terrain, non rÃÂ©munÃÂ©rÃÂ©es. Les systÃÂ¨mes, les outils et les rÃÂ©sultats sont rÃÂ©els.
          </p>
        </div>
      </section>

      {/* SIGNATURE FONDATRICE */}
      <section className="py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto grid md:grid-cols-[180px_1fr] gap-8 md:gap-12 items-center">
          <img
            src={aurelieImg}
            alt="AurÃÂ©lie Auberger, fondatrice de Code Kaizen"
            className="w-[160px] h-[160px] md:w-[180px] md:h-[180px] rounded-full object-cover object-top mx-auto md:mx-0 border border-[rgba(201,162,78,0.25)]"
          />
          <div className="text-center md:text-left">
            <h2 className="font-serif text-[#c9a84c] text-[1.4rem] md:text-[1.6rem] leading-tight">
              AurÃÂ©lie Auberger Ã¢ÂÂ Fondatrice de Code Kaizen
            </h2>

            
            <p className="text-[#f7f7f7] text-[1rem] leading-[1.85] my-4 text-center max-w-xl mx-auto md:mx-0">
              Beaucoup d'entreprises B2B ont une offre solide, mais une acquisition encore trop dÃÂ©pendante du fondateur.
            </p>
            <p className="text-[#f7f7f7] text-[1rem] leading-[1.85] my-4 text-center max-w-xl mx-auto md:mx-0">
              Code Kaizen aide les entreprises founder-led ÃÂ  structurer une infrastructure commerciale capable de gÃÂ©nÃÂ©rer un pipeline plus prÃÂ©visible, plus stable et transmissible.
            </p>
            <p className="text-[#f7f7f7] text-[1rem] leading-[1.85] my-4 text-center max-w-xl mx-auto md:mx-0">
              L'objectif n'est pas de multiplier les actions. L'objectif est de construire un systÃÂ¨me de croissance qui fonctionne durablement.
            </p>
            <a
              href="https://www.linkedin.com/company/code-kaizen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#c9a84c] text-sm hover:text-ivory transition-colors"
            >
              Ã¢ÂÂ Profil LinkedIn Code Kaizen
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
                Chaque mission produit une infrastructure documentÃÂ©e, transmissible, opÃÂ©rable sans nous ÃÂ  l'issue de la mission.
              </p>
            </div>

            <div className="border-t border-[rgba(201,162,78,0.2)] pt-10 md:pt-14">
              <p className="text-[#f7f7f7] text-[1rem] md:text-[1.05rem] leading-[1.85]">
                Vous n'achetez pas une prestation. Vous acquÃÂ©rez un actif commercial qui tourne sans vous.
              </p>
              <p className="text-[#c9a24e] italic text-center mt-8 font-serif text-lg">
                Revenue, by system.
              </p>
            </div>
          </div>
        </div>
      </section>


      <PipelineChart />

      {/* SECTION B Ã¢ÂÂ PRINCIPES */}
      <section className="bg-[#0d1b2e] border-b border-[rgba(201,162,78,0.15)] py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory text-center mb-3 md:mb-4 leading-tight">
            Nos principes
          </h2>
          <p className="text-[#94a3b8] text-center text-[0.875rem] mb-12 md:mb-16">
            Ce qui guide chaque dÃÂ©cision, chaque sÃÂ©quence, chaque mission.
          </p>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {[
              { t: "On construit avant d'envoyer", s: "L'infrastructure avant les sÃÂ©quences. Ce que vous ne voyez pas dÃÂ©termine 80 % du rÃÂ©sultat.", d: "Une sÃÂ©quence mal ciblÃÂ©e envoie des milliers de messages au mauvais profil. Nous passons autant de temps ÃÂ  construire l'infrastructure qu'ÃÂ  l'opÃÂ©rer. Ce que vous ne voyez pas (le sourcing, le scoring, l'architecture technique) dÃÂ©termine 80 % du rÃÂ©sultat final." },
              { t: "On mesure tout, on dÃÂ©cide sur les donnÃÂ©es", s: "Chaque dÃÂ©cision est tracÃÂ©e et justifiÃÂ©e par des donnÃÂ©es. L'opinion n'a pas sa place.", d: "Chaque dÃÂ©cision est tracÃÂ©e et justifiÃÂ©e par des donnÃÂ©es : taux de rÃÂ©ponse par segment, par ÃÂ©tape, par accroche. Nous n'itÃÂ©rons pas ÃÂ  l'aveugle. Nous mesurons, nous interprÃÂ©tons, nous ajustons. L'opinion n'a pas sa place dans un systÃÂ¨me d'acquisition." },
              { t: "AlignÃÂ©s sur vos rÃÂ©sultats, pas sur nos heures", s: "On facture ce qu'on livre, pas le temps passÃÂ©. Nos intÃÂ©rÃÂªts sont alignÃÂ©s sur vos rÃÂ©sultats.", d: "Nous ne facturons pas du temps passÃÂ©. Nous facturons ce que nous livrons : un diagnostic, un systÃÂ¨me dÃÂ©ployÃÂ©, un pilotage mensuel. Cette structure ÃÂ©limine le conflit d'intÃÂ©rÃÂªt classique entre prestataire et client. Nous avons autant intÃÂ©rÃÂªt que vous ÃÂ  ce que le systÃÂ¨me produise des rÃÂ©sultats rÃÂ©els." },
              { t: "On vous rend indÃÂ©pendant", s: "Chaque mission se termine par un transfert complet. Vous opÃÂ©rez sans nous si vous le souhaitez.", d: "Nous ne construisons pas des systÃÂ¨mes dont vous seriez dÃÂ©pendants. Chaque mission se termine par un transfert complet : documentation, playbook, formation. L'objectif est que vous puissiez opÃÂ©rer sans nous, ou que vous choisissiez de continuer avec nous. La diffÃÂ©rence est lÃÂ ." },
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

      {/* BÃÂNÃÂFICES */}
      <section className="py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory mb-10 md:mb-16 leading-tight">
            Trois niveaux d'intervention. Un seul objectif : que votre croissance ne dÃÂ©pende plus de vous.
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-8 text-left">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Diagnostic Acquisition : 5 jours</h3>
              <p className="text-[#F5F0E8] text-[13px] md:text-sm leading-relaxed">
                Nous cartographions votre ICP rÃÂ©el, votre positionnement outbound, et les leviers bloquants. Livrable structurÃÂ© le jour de la restitution : Fiche ICP, stack recommandÃÂ©e, architecture de sÃÂ©quences.
              </p>
              <p className="mt-6 text-center text-[#c9a24e] text-[13px] tracking-[0.1em] uppercase font-medium">
                Diagnostic ÃÂ  1 500 Ã¢ÂÂ¬ HT ÃÂ· DÃÂ©duit intÃÂ©gralement si une mission dÃÂ©marre.
              </p>
            </div>
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-8 text-left">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">SystÃÂ¨me dÃÂ©ployÃÂ© & opÃÂ©rÃÂ©</h3>
              <p className="text-[#F5F0E8] text-[13px] md:text-sm leading-relaxed">
                Nous construisons et opÃÂ©rons l'infrastructure : sourcing Clay, enrichissement, sÃÂ©quences Instantly, qualification SQL, CRM. Le fondateur sort de la prospection. Le systÃÂ¨me entre en fonction.
              </p>
              <p className="mt-6 text-center text-[#c9a24e] text-[13px] tracking-[0.1em] uppercase font-medium">
                Tarification sur mesure, dÃÂ©finie ÃÂ  l'issue du Diagnostic.
              </p>
            </div>
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-8 text-left">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Pilotage mensuel</h3>
              <p className="text-[#F5F0E8] text-[13px] md:text-sm leading-relaxed">
                Nous opÃÂ©rons le systÃÂ¨me : sourcing continu, optimisation des campagnes, qualification des rÃÂ©ponses, reporting hebdomadaire. Vous recevez des prospects qualifiÃÂ©s avec un brief complet (budget, autoritÃÂ©, urgence, contexte). Vous closez.
              </p>
              <p className="mt-6 text-center text-[#c9a24e] text-[13px] tracking-[0.1em] uppercase font-medium">
                Tarification sur mesure, dÃÂ©finie ÃÂ  l'issue du Diagnostic.
              </p>
            </div>
          </div>
          <p className="text-center text-[#94a3b8] text-xs mt-8">
            <a href="#phases" className="text-[#c9a24e] hover:underline">Voir comment ÃÂ§a marche Ã¢ÂÂ</a>
          </p>
        </div>
      </section>

      {/* SECTION A Ã¢ÂÂ INFRASTRUCTURE */}
      <section id="phases" className="bg-[#0d1b2e] border-t border-b border-[rgba(201,162,78,0.15)] py-16 md:py-28 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-[1.5rem] md:text-[2.1rem] text-ivory mb-4 leading-tight">
              Comment fonctionne l'infrastructure Code Kaizen
            </h2>
            <p className="text-[#94a3b8] text-[0.9rem] md:text-[0.95rem] leading-relaxed">
              Un systÃÂ¨me en 3 ÃÂ©tapes, documentÃÂ© et transmissible.
            </p>
          </div>

          {/* BLOC 1 Ã¢ÂÂ Timeline 6 phases */}
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
            Pas fait pour vous si votre offre est encore en validation, si votre ticket moyen est infÃÂ©rieur ÃÂ  5 000 Ã¢ÂÂ¬, ou si vous cherchez une dÃÂ©lÃÂ©gation totale sans implication.
          </p>
        </div>
      </section>

      {/* COÃÂT DE L'ATTENTE */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-[rgba(201,162,78,0.05)] border-t border-b border-[rgba(201,162,78,0.15)]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#94a3b8] italic text-[0.875rem] mb-4 md:mb-6">
            Pourquoi dÃÂ©marrer maintenant
          </p>
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory mb-6 md:mb-8 leading-tight">
            Ce que vous gagnez en dÃÂ©marrant maintenant
          </h2>
          <p className="text-[#94a3b8] text-[0.85rem] md:text-[0.9rem] max-w-2xl mx-auto mb-10 md:mb-14 leading-relaxed">
            Les missions actives sont limitÃÂ©es ÃÂ  3 simultanÃÂ©ment. Quand les crÃÂ©neaux sont pris, les nouvelles missions dÃÂ©marrent en liste d'attente.
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
                DÃÂ©lai moyen pour les premiers rendez-vous qualifiÃÂ©s aprÃÂ¨s le lancement des campagnes.
              </p>
            </div>
            <div>
              <div className="text-[#c9a24e] text-[2rem] md:text-[2.5rem] font-bold leading-tight mb-4">J+90</div>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75]">
                Date ÃÂ  laquelle le systÃÂ¨me vous appartient intÃÂ©gralement, sans condition, sans surcoÃÂ»t.
              </p>
            </div>
          </div>
          <p className="text-[#94a3b8] italic text-[0.85rem] md:text-[0.9rem] max-w-2xl mx-auto mb-6">
            Pas d'engagement. Pas de pitch commercial. Un diagnostic, un livrable, une dÃÂ©cision.
          </p>
          <a
            href="https://tally.so/r/zx0Nrg"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-ink inline-flex px-6 py-[14px] sm:px-14 sm:py-6 rounded-[2px] font-bold text-[12px] sm:text-xs tracking-[0.15em] sm:tracking-luxe uppercase hover:bg-ivory transition-all duration-500 shadow-[var(--shadow-gold)]"
          >
            RÃÂ©server mon Diagnostic
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[1.3rem] md:text-[1.6rem] text-ivory text-center mb-10 md:mb-16">Questions frÃÂ©quentes</h2>
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
            <a href="#" className="hover:text-gold transition-colors">Mentions lÃÂ©gales</a>
            <a href="#" className="hover:text-gold transition-colors">ConfidentialitÃÂ©</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;
