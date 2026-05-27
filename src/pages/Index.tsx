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
  { q: "C'est quoi le Diagnostic Acquisition ?", r: "5 jours ouvrés pendant lesquels nous analysons votre ICP réel, votre positionnement marché, vos séquences actuelles si elles existent, et les leviers bloquants. La restitution se fait en call de 45 minutes. Vous repartez avec une décision claire, pas un rapport à lire seul. Livrable : fiche ICP opérationnelle, architecture de séquences recommandée, stack technique adaptée à votre secteur, et priorités d'exécution. Facturé 500 € HT, intégralement déduit si une mission de construction démarre." },
  { q: "Comment fonctionne la tarification ?", r: "Le diagnostic est facturé 500 € HT, déduit si une mission démarre. La construction du système est facturée à l'acte selon la complexité. Le pilotage est facturé mensuellement, sans engagement de durée. Pas de commission sur votre CA, pas de coûts variables cachés : vous savez exactement ce que vous payez et pourquoi." },
  { q: "Que se passe-t-il après 12 mois ?", r: "Le système vous appartient intégralement : séquences, bases de contacts, automations, documentation. Vous pouvez l'opérer en interne ou prolonger le partenariat. Aucun engagement de renouvellement." },
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
            Réserver mon Diagnostic
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-24 sm:pt-28 md:pt-36 pb-12 sm:pb-16 md:pb-24 px-5 sm:px-6 md:px-10 overflow-hidden">
        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,78,0.10),transparent_60%)]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201,162,78,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,78,0.6) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Eyebrow */}
          <div className="flex justify-center mb-6 md:mb-8 animate-fade-in">
            <span className="inline-flex items-center gap-2 border border-[rgba(201,162,78,0.3)] bg-[rgba(201,162,78,0.06)] rounded-full px-4 py-1.5 text-[10px] tracking-luxe uppercase text-[#c9a84c]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c9a84c] opacity-60"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#c9a84c]"></span>
              </span>
              Infrastructure outbound B2B
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-center text-[2rem] leading-[1.05] sm:text-[2.6rem] md:text-[3.6rem] md:leading-[1.02] text-ivory tracking-tight max-w-4xl mx-auto animate-fade-in">
            Votre pipeline ne devrait pas
            <br className="hidden sm:block" />{" "}
            <span className="italic text-[#e8d8a8]">dépendre du fondateur.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 md:mt-8 text-center text-[#cbd5e1] max-w-2xl mx-auto text-[1rem] md:text-[1.15rem] leading-[1.7] animate-fade-in">
            Nous construisons des systèmes outbound B2B qui génèrent des
            rendez-vous qualifiés, de manière prévisible.
          </p>

          {/* Audience */}
          <p className="mt-4 text-center text-[#94a3b8] text-sm md:text-[0.95rem] max-w-xl mx-auto animate-fade-in">
            Pour les agences, ESN et sociétés de services B2B avec une offre validée.
          </p>

          {/* CTAs */}
          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <a
              href="https://tally.so/r/zx0Nrg"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gold text-ink inline-flex items-center gap-2 px-8 py-4 rounded-[2px] font-bold text-[11px] tracking-luxe uppercase hover:bg-ivory transition-all duration-500 shadow-[var(--shadow-gold)]"
            >
              Construire mon système outbound
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
            <button
              onClick={() => scrollTo("phases")}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-[2px] text-ivory/80 text-[11px] tracking-luxe uppercase border border-border hover:border-gold hover:text-gold transition-all duration-500"
            >
              Voir comment ça marche
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Trust strip */}
          <div className="mt-14 md:mt-20">
            <p className="text-center text-[10px] tracking-luxe uppercase text-[#64748b] mb-6">
              Opérateurs et partenaires
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-70">
              <img src={logoSpecgen} alt="Specgen" className="h-7 md:h-8 object-contain grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition" />
              <img src={logoIsssa} alt="ISSSA" className="h-7 md:h-8 object-contain grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition" />
            </div>
          </div>

          {/* Pipeline flow */}
          <div className="mt-16 md:mt-24">
            <div className="relative rounded-lg border border-[rgba(201,162,78,0.18)] bg-[rgba(15,23,42,0.6)] backdrop-blur-sm p-5 md:p-8 shadow-[var(--shadow-gold)]">
              {/* Window chrome */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#334155]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#334155]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#334155]" />
                </div>
                <span className="text-[9px] tracking-luxe uppercase text-[#64748b]">
                  Pipeline · Live
                </span>
              </div>

              {/* Flow */}
              <div className="grid grid-cols-2 md:grid-cols-7 gap-3 md:gap-2 items-stretch">
                {[
                  "Comptes cibles",
                  "Sourcing",
                  "Enrichissement",
                  "Outreach",
                  "Qualification",
                  "SQL",
                  "RDV sales",
                ].map((step, i, arr) => (
                  <div key={step} className="flex items-center">
                    <div className="flex-1 text-center px-2 py-3 md:py-4 rounded-md border border-border bg-[rgba(201,162,78,0.04)] hover:border-gold/60 transition-colors">
                      <div className="text-[9px] tracking-luxe uppercase text-[#64748b] mb-1">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="text-[11px] md:text-[12px] text-ivory font-medium leading-tight">
                        {step}
                      </div>
                    </div>
                    {i < arr.length - 1 && (
                      <ArrowRight className="hidden md:block w-3 h-3 text-gold/40 mx-0.5 shrink-0" />
                    )}
                  </div>
                ))}
              </div>

              {/* Mini metrics */}
              <div className="mt-6 grid grid-cols-3 gap-3 md:gap-6 pt-6 border-t border-border/60">
                <div>
                  <div className="text-[9px] tracking-luxe uppercase text-[#64748b]">Comptes ciblés</div>
                  <div className="text-ivory font-serif text-xl md:text-2xl">2 400</div>
                </div>
                <div>
                  <div className="text-[9px] tracking-luxe uppercase text-[#64748b]">Taux de réponse</div>
                  <div className="text-ivory font-serif text-xl md:text-2xl">12,4 %</div>
                </div>
                <div>
                  <div className="text-[9px] tracking-luxe uppercase text-[#64748b]">RDV / mois</div>
                  <div className="text-gold font-serif text-xl md:text-2xl">24</div>
                </div>
              </div>
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
            className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full object-cover object-top mx-auto md:mx-0 border border-[rgba(201,162,78,0.25)]"
          />
          <div className="text-center md:text-left">
            <h2 className="font-serif text-[#c9a84c] text-[1.4rem] md:text-[1.6rem] leading-tight">
              Aurélie Auberger
            </h2>
            <p className="text-[#94a3b8] text-sm mt-1">Fondatrice, Code Kaizen</p>
            <p className="text-[#f7f7f7] text-[1rem] leading-[1.85] my-4 text-center max-w-xl mx-auto md:mx-0">
              Je construis des systèmes d'acquisition outbound pour des fondateurs dont l'offre est réelle mais le pipeline reste dépendant d'eux. Pas de théorie. Du déploiement.
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
            Ce que ces missions ont démontré
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-left">
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-6 md:p-8">
              <div className="bg-white rounded-md inline-flex items-center justify-center px-4 py-2 mb-5">
                <img src={logoSpecgen} alt="Logo Specgen" className="h-8 w-auto" />
              </div>
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Specgen, SaaS IA appels d'offres</h3>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75] mb-5">
                Stratégie d'acquisition construite de zéro pour une startup sans infrastructure outbound : ICP défini, base de 5 000 contacts scrapés et enrichis sur LinkedIn, campagne email déployée.
              </p>
              <p className="text-[#c9a84c] text-sm font-medium leading-relaxed">
                794 emails · 55 % d'ouverture · 46 % de clics · 17 inscrits au webinaire
              </p>
            </div>
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-6 md:p-8">
              <div className="mb-5">
                <img src={logoIsssa} alt="Logo Isssa" className="h-12 w-12 rounded-full object-cover" />
              </div>
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Isssa, start-up RSE (Nice)</h3>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75] mb-5">
                Système de prospection LinkedIn et emailing multicanal construit sur un marché B2B local. ICP, séquences, A/B testing, workflow automatisé.
              </p>
              <p className="text-[#c9a84c] text-sm font-medium leading-relaxed">
                160 leads construits · 51,9 % d'ouverture email · 21,5 % de taux de réponse
              </p>
            </div>
          </div>
          <p className="text-[#94a3b8] italic text-center mt-10 md:mt-14 text-[0.875rem] max-w-2xl mx-auto">
            Ces missions ont été conduites avant la création formelle de Code Kaizen, non rémunérées, dans le cadre de ma formation. Les systèmes, les outils et les résultats sont réels. Code Kaizen formalise aujourd'hui cette exécution avec un cadre contractuel et une priorité unique : votre pipeline.
          </p>
        </div>
      </section>

      {/* NOTRE HISTOIRE */}
      <section className="py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-[760px] mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-[1.6rem] md:text-[2rem] text-ivory leading-tight">
              Notre histoire
            </h2>
            <p className="text-[#c9a24e] font-serif text-lg md:text-xl mt-2">
              Code Kaizen
            </p>
          </div>

          <div className="space-y-10 md:space-y-14">
            <div>
              <h3 className="font-serif text-[#c9a24e] text-xl md:text-2xl mb-5">
                Ce que je construis
              </h3>
              <p className="text-[#f7f7f7] text-[1rem] md:text-[1.05rem] leading-[1.85]">
                Pas de campagnes. Pas de hacks. Des systèmes. Un système d'acquisition, c'est une architecture : ICP défini avec précision, personas construits sur des comportements réels, séquences multicanal calibrées, personnalisation au niveau du signal, relances automatisées, pipeline qualifié. Chaque composant est pensé pour fonctionner avec les autres, et pour durer sans moi. La philosophie Kaizen, c'est l'amélioration continue appliquée à l'exécution. Ce n'est pas un positionnement marketing. C'est la manière dont je travaille : mesurer, itérer, affiner. Jamais figer. Jamais improviser. Je ne suis pas une agence. Je suis l'architecte du pipeline.
              </p>
            </div>

            <div className="border-t border-[rgba(201,162,78,0.2)] pt-10 md:pt-14">
              <p className="text-[#f7f7f7] text-[1rem] md:text-[1.05rem] leading-[1.85]">
                Chaque mission est construite sur mesure, documentée en temps réel, et transmise intégralement à la fin. Vous n'achetez pas une prestation. Vous acquérez une infrastructure : scalable, opérable, transmissible. Ce qui reste quand la mission se termine, c'est un système qui tourne sans vous.
              </p>
              <p className="text-[#c9a24e] italic text-center mt-8 font-serif text-lg">
                Revenue, by system.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* BÉNÉFICES */}
      <section className="py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory mb-10 md:mb-16 leading-tight">
            Une infrastructure d'acquisition. Construite, pilotée, transmise.
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-8 text-left">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Diagnostic Acquisition : 5 jours</h3>
              <p className="text-[#F5F0E8] text-[13px] md:text-sm leading-relaxed">
                Nous cartographions votre ICP réel, votre positionnement outbound, et les leviers bloquants. Livrable structuré le jour de la restitution : Fiche ICP, stack recommandée, architecture de séquences.
              </p>
              <p className="mt-6 text-center text-[#c9a24e] text-[11px] tracking-[0.15em] uppercase font-medium">
                Diagnostic à 500 € HT · Déduit intégralement si une mission démarre.
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
                Nous opérons le système : sourcing continu, optimisation des campagnes, qualification des réponses, reporting hebdomadaire. Vous recevez des prospects qualifiés avec un brief complet (budget, autorité, urgence, contexte). Vous closez.
              </p>
            </div>
          </div>
          <p className="text-center text-[#94a3b8] text-xs mt-8">
            <a href="#phases" className="text-[#c9a24e] hover:underline">Voir comment ça marche →</a>
          </p>
        </div>
      </section>

      {/* SECTION A — INFRASTRUCTURE */}
      <section id="phases" className="bg-[#0d1b2e] border-t border-b border-[rgba(201,162,78,0.15)] py-16 md:py-28 px-6 md:px-10">
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


      {/* CAS CLIENTS */}
      <section className="py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory text-center mb-4 md:mb-6 leading-tight">
            Ce que vous recevez à la fin
          </h2>
          <p className="text-[#94a3b8] text-center text-[0.875rem] mb-10 md:mb-16">
            Les livrables concrets de chaque mission : documentés, transmissibles, opérables sans nous.
          </p>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                t: "Fiche ICP opérationnelle",
                d: "Définition précise de votre client idéal : secteur, taille, poste, déclencheurs d'achat, objections récurrentes, cycle de décision. La base sur laquelle tout le système est construit. Pas un persona marketing, mais un outil d'exécution.",
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

      {/* CE QUE CODE KAIZEN N'EST PAS */}
      <section className="py-16 md:py-20 px-6 md:px-10">
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
              "Votre ticket moyen est inférieur à 5 000 € par deal. Le pilotage mensuel n'est pas rentable en dessous de ce seuil, ni pour vous, ni pour nous.",
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
      <section className="py-16 md:py-20 px-6 md:px-10 bg-[rgba(201,162,78,0.05)] border-t border-b border-[rgba(201,162,78,0.15)]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#94a3b8] italic text-[0.875rem] mb-4 md:mb-6">
            Pourquoi démarrer maintenant
          </p>
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory mb-6 md:mb-8 leading-tight">
            Ce que vous gagnez en démarrant maintenant
          </h2>
          <p className="text-[#94a3b8] text-[0.85rem] md:text-[0.9rem] max-w-2xl mx-auto mb-10 md:mb-14 leading-relaxed">
            Les missions actives sont limitées à 3 simultanément. Quand les créneaux sont pris, les nouvelles missions démarrent en liste d'attente.
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
                Délai moyen pour les premiers rendez-vous qualifiés après le lancement des campagnes.
              </p>
            </div>
            <div>
              <div className="text-[#c9a24e] text-[2rem] md:text-[2.5rem] font-bold leading-tight mb-4">J+90</div>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75]">
                Date à laquelle le système vous appartient intégralement, sans condition, sans surcoût.
              </p>
            </div>
          </div>
          <p className="text-[#94a3b8] italic text-[0.85rem] md:text-[0.9rem] max-w-2xl mx-auto mb-6">
            Pas d'engagement. Pas de pitch commercial. Un diagnostic, un livrable, une décision.
          </p>
          <a
            href="https://tally.so/r/zx0Nrg"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-ink inline-flex px-6 py-[14px] sm:px-14 sm:py-6 rounded-[2px] font-bold text-[12px] sm:text-xs tracking-[0.15em] sm:tracking-luxe uppercase hover:bg-ivory transition-all duration-500 shadow-[var(--shadow-gold)]"
          >
            Réserver mon Diagnostic
          </a>
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
