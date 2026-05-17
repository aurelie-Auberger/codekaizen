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
  { q: "Qui gère le closing ?", r: "Code Kaizen par défaut. Si vous avez une équipe commerciale en place, nous pouvons travailler avec elle. Dans les deux cas, le système d'acquisition est le même." },
  { q: "C'est quoi le diagnostic stratégique ?", r: "Un audit de votre situation commerciale : ICP, canaux, gaps, plan d'action. 800 EUR HT, livré en 5 jours. Déductible si vous continuez. Le système est opérationnel sous 30 jours. Les premiers résultats dépendent de votre cycle de vente." },
  { q: "Comment fonctionne la commission ?", r: "Notre commission s'applique uniquement sur le chiffre d'affaires généré par les deals sourcés via notre système, pendant 12 mois suivant le démarrage de la mission. Elle ne s'applique pas sur votre CA existant, ni sur vos clients actuels. Vous ne payez que ce que nous produisons. C'est la base de notre alignement d'intérêts." },
  { q: "Que se passe-t-il après 6 mois ?", r: "Vous pouvez acquérir le système complet : workflow, séquences, CRM, scripts et documentation. Formation à la prise en main incluse. Le système devient votre propriété." },
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
            Obtenir mon Diagnostic
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-24 sm:pt-40 md:pt-48 pb-3 sm:pb-20 md:pb-32 px-5 sm:px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-serif text-[1.6rem] leading-[1.15] md:text-[2.2rem] md:leading-[1.1] text-ivory mb-5 md:mb-10 tracking-tight">
            Votre pipeline ne devrait pas dépendre de vous.
          </h1>
          <p className="text-[#a0aec0] max-w-2xl mx-auto text-[0.95rem] leading-[1.75] mb-4">
            Code Kaizen construit l'infrastructure d'acquisition qui génère des opportunités qualifiées, durablement. Chaque engagement commence par un Diagnostic de 5 jours.
          </p>
          <p className="text-[#a0aec0] italic text-[0.85rem] mb-8 md:mb-10">
            Votre partenaire de croissance aligné sur vos résultats.
          </p>
          <div className="flex flex-col items-center gap-6 md:gap-8">
            <button
              onClick={() => scrollTo("formulaire")}
              className="bg-gold text-ink w-full sm:w-auto px-6 py-[14px] sm:px-14 sm:py-6 rounded-[2px] font-bold text-[12px] sm:text-xs tracking-[0.15em] sm:tracking-luxe uppercase hover:bg-ivory transition-all duration-500 shadow-[var(--shadow-gold)]"
            >
              Obtenir mon Diagnostic
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
                Chaque client vient d'un appel que vous avez passé. Quand vous vous arrêtez, le pipeline s'arrête.
              </p>
            </div>
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-6">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Le réseau s'épuise</h3>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75]">
                Le bouche-à-oreille ne scale pas. Le silence qui suit est brutal.
              </p>
            </div>
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-6">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Le mauvais réflexe</h3>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75]">
                Recruter sans système : 45 000 EUR, 12 mois, résultat aléatoire.
              </p>
            </div>
          </div>
          <p className="text-[#a0aec0] italic text-center mt-10 md:mt-14 text-[0.875rem]">
            Il existe une alternative à cette dépendance.
          </p>
        </div>
      </section>


      {/* BÉNÉFICES */}
      <section className="py-16 md:py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory mb-10 md:mb-16 leading-tight">
            Une infrastructure de revenus, pas une prestation de plus
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-8 text-left">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Diagnostic de précision</h3>
              <p className="text-[#F5F0E8] text-[13px] md:text-sm leading-relaxed">
                En 5 jours, nous identifions le levier exact qui bloque votre acquisition. Un livrable actionnable le jour de la restitution.
              </p>
            </div>
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-8 text-left">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Système déployé</h3>
              <p className="text-[#F5F0E8] text-[13px] md:text-sm leading-relaxed">
                Nous construisons et opérons l'infrastructure adaptée à votre marché. Le fondateur sort de la prospection. Le système entre en fonction.
              </p>
            </div>
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-8 text-left">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Modèle à la performance</h3>
              <p className="text-[#F5F0E8] text-[13px] md:text-sm leading-relaxed">
                10% sur le chiffre d'affaires généré par les deals sourcés via notre système, pendant 12 mois. Pas sur votre CA existant. Vous payez les résultats encaissés, rien d'autre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAS CLIENTS */}
      <section className="py-16 md:py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory text-center mb-4 md:mb-6 leading-tight">
            Ce que le système produit
          </h2>
          <p className="text-[#a0aec0] text-center text-[0.875rem] mb-10 md:mb-16">
            Voici ce que cette infrastructure produit concrètement.
          </p>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[#111927] border border-[rgba(201,162,78,0.3)] rounded-lg p-6">
              <div className="text-[#c9a24e] text-[13px] md:text-sm font-medium mb-5">Agence Marketing B2B · 3 mois</div>
              <div className="grid grid-cols-2 gap-y-4 gap-x-4 text-[13px] md:text-sm">
                <div>
                  <div className="text-[#f7f7f7] font-bold text-lg">29</div>
                  <div className="text-[#a0aec0] text-[0.7rem]">RDV qualifiés</div>
                </div>
                <div>
                  <div className="text-[#f7f7f7] font-bold text-lg">17,2%</div>
                  <div className="text-[#a0aec0] text-[0.7rem]">Taux de réponse</div>
                </div>
                <div>
                  <div className="text-[#f7f7f7] font-bold text-lg">2</div>
                  <div className="text-[#a0aec0] text-[0.7rem]">Deals signés</div>
                </div>
                <div>
                  <div className="text-[#f7f7f7] font-bold text-lg">43 K€</div>
                  <div className="text-[#a0aec0] text-[0.7rem]">Pipeline généré</div>
                </div>
              </div>
            </div>
            <div className="bg-[#111927] border border-[rgba(201,162,78,0.3)] rounded-lg p-6">
              <div className="text-[#c9a24e] text-[13px] md:text-sm font-medium mb-5">Cabinet IT · 4 mois</div>
              <div className="grid grid-cols-2 gap-y-4 gap-x-4 text-[13px] md:text-sm">
                <div>
                  <div className="text-[#f7f7f7] font-bold text-lg">26</div>
                  <div className="text-[#a0aec0] text-[0.7rem]">RDV qualifiés</div>
                </div>
                <div>
                  <div className="text-[#f7f7f7] font-bold text-lg">19,1%</div>
                  <div className="text-[#a0aec0] text-[0.7rem]">Taux de réponse</div>
                </div>
                <div>
                  <div className="text-[#f7f7f7] font-bold text-lg">2</div>
                  <div className="text-[#a0aec0] text-[0.7rem]">Deals signés</div>
                </div>
                <div>
                  <div className="text-[#f7f7f7] font-bold text-lg">37 K€</div>
                  <div className="text-[#a0aec0] text-[0.7rem]">Pipeline généré</div>
                </div>
              </div>
            </div>
            <div className="bg-[#111927] border border-[rgba(201,162,78,0.3)] rounded-lg p-6">
              <div className="text-[#c9a24e] text-[13px] md:text-sm font-medium mb-5">Solution SaaS B2B · 3 mois</div>
              <div className="grid grid-cols-2 gap-y-4 gap-x-4 text-[13px] md:text-sm">
                <div>
                  <div className="text-[#f7f7f7] font-bold text-lg">23</div>
                  <div className="text-[#a0aec0] text-[0.7rem]">RDV qualifiés</div>
                </div>
                <div>
                  <div className="text-[#f7f7f7] font-bold text-lg">21,4%</div>
                  <div className="text-[#a0aec0] text-[0.7rem]">Taux de réponse</div>
                </div>
                <div>
                  <div className="text-[#f7f7f7] font-bold text-lg">2</div>
                  <div className="text-[#a0aec0] text-[0.7rem]">Deals signés</div>
                </div>
                <div>
                  <div className="text-[#f7f7f7] font-bold text-lg">62 K€</div>
                  <div className="text-[#a0aec0] text-[0.7rem]">Pipeline généré</div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-[#a0aec0] text-[0.75rem] italic text-center mt-8 md:mt-10">
            Missions anonymisées. Données réelles.
          </p>
          <div className="max-w-2xl mx-auto mt-10 md:mt-14 text-center">
            <p className="text-[#c9a24e] italic text-[0.875rem] leading-relaxed">
              "Pour la première fois depuis trois ans, j'ai eu un rendez-vous qualifié que je n'avais pas été chercher moi-même."
            </p>
            <p className="text-[#a0aec0] text-[13px] mt-3">
              — Fondateur, SaaS RH, France, 2025
            </p>
          </div>
        </div>
      </section>

      {/* MÉTRIQUES */}
      <section className="bg-[#111927] border-t border-b border-[rgba(201,162,78,0.15)] py-8 md:py-12 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8 md:gap-6">
            {[
              { n: "27", l: "RDV qualifiés générés", s: "Sur les 30 derniers jours" },
              { n: "16,2%", l: "Taux de réponse moyen", s: "Sur campagnes outbound" },
              { n: "68 K€", l: "Pipeline généré", s: "Sur les 90 derniers jours" },
              { n: "4", l: "Deals signés", s: "Sur les 90 derniers jours" },
              { n: "2,7x", l: "ROI moyen constaté", s: "Sur 6 mois d'accompagnement" },
              { n: "9", l: "Opportunités en cours", s: "Dans les pipelines clients" },
            ].map((m) => (
              <div key={m.n} className="text-center">
                <div className="text-[#c9a24e] text-[2rem] font-bold leading-tight">{m.n}</div>
                <div className="text-[#f7f7f7] text-[0.8rem] mt-1">{m.l}</div>
                <div className="text-[#a0aec0] text-[0.7rem] mt-0.5">{m.s}</div>
              </div>
            ))}
          </div>
          <p className="text-[#a0aec0] text-[0.75rem] italic text-center mt-8 md:mt-10">
            Données réelles issues de missions opérées pour des entreprises B2B.
          </p>
        </div>
      </section>

      {/* COMMENT LE SYSTÈME FONCTIONNE */}
      <section className="py-16 md:py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory text-center mb-10 md:mb-16 leading-tight">
            Comment le système fonctionne
          </h2>
          <div className="flex overflow-x-auto md:flex-wrap md:justify-center gap-4 md:gap-6 pb-4 md:pb-0">
            {[
              { t: "Ciblage", d: "Définition ICP et segmentation avancée" },
              { t: "Sourcing & Enrichissement", d: "Accès aux bases privées et données qualifiées" },
              { t: "Outreach Multicanal", d: "Séquences personnalisées et optimisation continue" },
              { t: "Nurturing Automatisé", d: "Relances intelligentes et contenus adaptés" },
              { t: "Conversion & Closing", d: "Qualification avancée et closing assisté" },
              { t: "Pilotage & Amélioration", d: "Analyse continue et optimisation des performances" },
            ].map((step, i, arr) => (
              <div key={step.t} className="flex items-center gap-4 md:gap-6 flex-shrink-0">
                <div className="bg-[#111927] border border-[rgba(201,162,78,0.2)] rounded-lg p-4 w-[200px] md:w-auto md:min-w-[180px]">
                  <h3 className="text-[#c9a24e] font-bold text-[0.85rem] mb-2">{step.t}</h3>
                  <p className="text-[#a0aec0] text-[0.8rem] leading-[1.6]">{step.d}</p>
                </div>
                {i < arr.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-[#c9a24e] flex-shrink-0 hidden md:block" />
                )}
              </div>
            ))}
          </div>
          <p className="text-[#a0aec0] italic text-center mt-10 md:mt-14 text-[0.875rem]">
            La logique, les automatisations et les méthodes utilisées sont propriétaires et confidentielles.
          </p>
        </div>
      </section>

      {/* SCÉNARIOS TYPES */}
      <section className="py-16 md:py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory text-center mb-4 md:mb-6 leading-tight">
            Scénarios types
          </h2>
          <p className="text-[#a0aec0] text-center text-[0.875rem] mb-10 md:mb-16">
            Exemples d'objectifs et de délais moyens.
          </p>

          {/* Desktop: table */}
          <div className="overflow-x-auto">
            <table className="w-full bg-[#111927] border border-[rgba(201,162,78,0.2)] rounded-lg">
              <thead>
                <tr className="border-b border-[rgba(201,162,78,0.2)]">
                  <th className="text-left text-[#c9a24e] text-[0.8rem] font-bold uppercase tracking-wider p-4">Scénario</th>
                  <th className="text-left text-[#c9a24e] text-[0.8rem] font-bold uppercase tracking-wider p-4">Objectif principal</th>
                  <th className="text-left text-[#c9a24e] text-[0.8rem] font-bold uppercase tracking-wider p-4">Délai moyen</th>
                  <th className="text-left text-[#c9a24e] text-[0.8rem] font-bold uppercase tracking-wider p-4">Résultat attendu</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { s: "Lancement produit", o: "Créer la traction initiale", d: "30–60 jours", r: "Premiers RDV qualifiés" },
                  { s: "Développement commercial", o: "Générer un flux régulier", d: "60–90 jours", r: "Pipeline récurrent" },
                  { s: "Entrée sur un nouveau marché", o: "Valider un marché cible", d: "45–75 jours", r: "Opportunités qualifiées" },
                  { s: "Scaling des ventes", o: "Augmenter la performance", d: "90+ jours", r: "Croissance durable" },
                ].map((row, i, arr) => (
                  <tr
                    key={row.s}
                    className={i < arr.length - 1 ? "border-b border-[rgba(201,162,78,0.1)]" : ""}
                  >
                    <td className="p-4 text-[#f7f7f7] text-[0.85rem] font-medium">{row.s}</td>
                    <td className="p-4 text-[#a0aec0] text-[0.85rem]">{row.o}</td>
                    <td className="p-4 text-[#a0aec0] text-[0.85rem]">{row.d}</td>
                    <td className="p-4 text-[#a0aec0] text-[0.85rem]">{row.r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PROJECTION DES RÉSULTATS */}
      <section className="py-16 md:py-32 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory text-center mb-4 md:mb-6 leading-tight">
            Projection des résultats
          </h2>
          <p className="text-[#a0aec0] text-center text-[0.875rem] mb-10 md:mb-16">
            Projection sur 90 jours. Basée sur des scénarios types observés.
          </p>
          <div className="space-y-6">
            {[
              { l: "Nouvelles opportunités", v: 40 },
              { l: "En cours", v: 30 },
              { l: "Qualifiées", v: 20 },
              { l: "Négociation", v: 10 },
            ].map((bar) => (
              <div key={bar.l}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#f7f7f7] text-[0.85rem] font-medium">{bar.l}</span>
                  <span className="text-[#c9a24e] text-[0.85rem] font-bold">{bar.v}%</span>
                </div>
                <div className="w-full bg-[rgba(201,162,78,0.1)] rounded-[4px] h-2.5">
                  <div
                    className="bg-[#c9a24e] h-2.5 rounded-[4px]"
                    style={{ width: `${bar.v}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-[#a0aec0] italic text-center mt-10 md:mt-14 text-[0.875rem]">
            Projections basées sur des comportements moyens observés.
          </p>
        </div>
      </section>

      {/* LE DIAGNOSTIC */}
      <section className="py-16 md:py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory mb-10 md:mb-16 leading-tight">
            Le Diagnostic Acquisition
          </h2>
          <div className="max-w-[640px] mx-auto border border-[#c9a24e] rounded-xl p-6 md:p-10 text-left">
            <p className="text-[#F5F0E8] text-[0.95rem] leading-[1.75] mb-5">
              En 5 jours ouvrés, nous produisons un diagnostic complet de votre situation d'acquisition : les freins réels, le levier prioritaire, une projection chiffrée sur 90 jours.
            </p>
            <p className="text-[#F5F0E8] text-[0.95rem] leading-[1.75] mb-5">
              La restitution se fait en call de 45 minutes. Vous repartez avec une décision claire, pas un rapport à lire seul.
            </p>
            <p className="text-[#F5F0E8] text-[0.95rem] leading-[1.75] mb-5">
              800 EUR HT. Si nous démarrons une mission ensemble, ce montant est déduit intégralement. Si vous ne continuez pas, vous conservez le livrable. Aucun engagement sur la suite.
            </p>
            <p className="text-[#F5F0E8] text-[0.95rem] leading-[1.75] mb-8">
              En cas de mission : zéro coût fixe, 10% sur le chiffre d'affaires généré par les deals sourcés via notre système, pendant 12 mois. Pas sur votre CA existant.
            </p>
            <div className="text-center">
              <button
                onClick={() => scrollTo("formulaire")}
                className="bg-gold text-ink px-6 py-[14px] sm:px-14 sm:py-6 rounded-[2px] font-bold text-[12px] sm:text-xs tracking-[0.15em] sm:tracking-luxe uppercase hover:bg-ivory transition-all duration-500 shadow-[var(--shadow-gold)]"
              >
                Réserver mon Diagnostic
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* COÛT DE L'ATTENTE */}
      <section className="py-16 md:py-32 px-6 md:px-10 bg-[rgba(201,162,78,0.05)] border-t border-b border-[rgba(201,162,78,0.15)]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#a0aec0] italic text-[0.875rem] mb-4 md:mb-6">
            Et si vous attendez encore six mois ?
          </p>
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory mb-10 md:mb-16 leading-tight">
            Le coût de l'attente
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10 mb-10 md:mb-14">
            <div>
              <div className="text-[#c9a24e] text-[2rem] md:text-[2.5rem] font-bold leading-tight mb-4">40–60 K€</div>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75]">
                de capacité productive mobilisée chaque année sur de la prospection manuelle à 800 EUR/jour.
              </p>
            </div>
            <div>
              <div className="text-[#c9a24e] text-[2rem] md:text-[2.5rem] font-bold leading-tight mb-4">45 K€</div>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75]">
                le coût moyen d'un premier recrutement commercial raté. Dans 80% des cas : absence de système.
              </p>
            </div>
            <div>
              <div className="text-[#c9a24e] text-[2rem] md:text-[2.5rem] font-bold leading-tight mb-4">18 mois</div>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75]">
                le retard structurel que vos concurrents qui construisent aujourd'hui auront sur vous dans 12 mois.
              </p>
            </div>
          </div>
          <button
            onClick={() => scrollTo("formulaire")}
            className="bg-gold text-ink px-6 py-[14px] sm:px-14 sm:py-6 rounded-[2px] font-bold text-[12px] sm:text-xs tracking-[0.15em] sm:tracking-luxe uppercase hover:bg-ivory transition-all duration-500 shadow-[var(--shadow-gold)]"
          >
            Obtenir mon Diagnostic
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-32 px-6 md:px-10 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[1.3rem] md:text-[1.6rem] text-ivory text-center mb-10 md:mb-16">Ce qu'on nous demande</h2>
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
          <p className="text-[#a0aec0] text-[0.875rem] mb-10 md:mb-16">
            Nous étudions votre dossier et revenons sous 2 heures. Si votre situation est pertinente, nous planifions le Diagnostic ensemble.
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
          <p className="text-[#a0aec0] text-[0.75rem] tracking-[0.1em] uppercase italic">
            REVENUE, BY SYSTEM.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
