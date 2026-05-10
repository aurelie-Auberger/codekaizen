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
  { q: "Pour qui est-ce fait ?", r: "Pour les fondateurs et dirigeants B2B dont l'offre est validée, le ticket supérieur à 5 000€, et la croissance encore dépendante du réseau ou de l'effort individuel. Pas pour ceux qui cherchent une agence prestataire classique." },
  { q: "Qui gère le closing ?", r: "Code Kaizen par défaut. Si vous avez une équipe commerciale en place, nous pouvons travailler avec elle. Dans les deux cas, le système d'acquisition est le même." },
  { q: "C'est quoi le diagnostic stratégique ?", r: "Un audit de votre situation commerciale : qui cibler, par quel canal, avec quel message, et ce qui bloque aujourd'hui. Livrable structuré en 5 jours. 500€, déductibles si vous continuez avec Code Kaizen." },
  { q: "Comment fonctionne la commission ?", r: "Code Kaizen est rémunéré uniquement sur les encaissements générés, pas sur les leads, pas sur les rendez-vous. Si rien ne rentre, rien n'est dû." },
  { q: "Que se passe-t-il après 6 mois ?", r: "Vous pouvez acquérir le système complet : workflow, séquences, CRM, scripts et documentation. Formation à la prise en main incluse. Le système devient votre propriété." },
  { q: "Quels sont les délais réalistes ?", r: "Le diagnostic est livré en 5 jours. Le système est opérationnel sous 30 jours. Les premiers résultats dépendent de votre cycle de vente, du ticket et du marché." },
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
            onClick={() => scrollTo("conversion")}
            className={`whitespace-nowrap border border-gold text-gold px-3 py-2 sm:px-6 sm:py-2.5 text-[11px] tracking-[0.15em] sm:tracking-luxe uppercase font-semibold hover:bg-gold hover:text-ink transition-all duration-500 ${
              scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            Évaluer mon éligibilité
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-24 sm:pt-40 md:pt-48 pb-3 sm:pb-20 md:pb-32 px-5 sm:px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-serif text-[2rem] leading-[1.15] sm:text-4xl md:text-6xl lg:text-7xl md:leading-[1.1] text-ivory mb-5 md:mb-10 tracking-tight">
            Votre pipeline ne devrait pas dépendre de vous.
          </h1>
          <p className="text-[#F5F0E8] max-w-2xl mx-auto text-[15px] leading-[1.6] sm:text-base sm:leading-relaxed mb-8 md:mb-10">
            Vous avez une offre. Ce qui manque, c'est le système qui la vend sans que vous soyez dans chaque deal.
          </p>
          <div className="flex flex-col items-center gap-6 md:gap-8">
            <button
              onClick={() => scrollTo("conversion")}
              className="bg-gold text-ink w-full sm:w-auto px-6 py-[14px] sm:px-14 sm:py-6 rounded-[2px] font-bold text-[12px] sm:text-xs tracking-[0.15em] sm:tracking-luxe uppercase hover:bg-ivory transition-all duration-500 shadow-[var(--shadow-gold)]"
            >
              Évaluer mon éligibilité
            </button>
          </div>
        </div>
      </section>

      {/* MARCHÉS */}
      <section className="pt-3 pb-12 md:pt-8 md:pb-20 px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-serif italic text-[#F5F0E8] text-[15px] md:text-[17px] mb-6 md:mb-8">
            Déjà opéré sur des marchés B2B premium.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {["SaaS", "Fintech", "ESN / IT", "SaaS IA", "Formation B2B", "Architecture", "Logiciel"].map((tag) => (
              <span
                key={tag}
                className="border border-gold/40 text-gold-soft px-4 py-2 text-[10px] tracking-[0.15em] md:tracking-luxe uppercase rounded-[2px] hover:border-gold/70 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-line max-w-5xl mx-auto" />

      {/* BÉNÉFICES */}
      <section className="py-16 md:py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="border-gold p-8 md:p-14" style={{ borderWidth: '0.5px' }}>
            <h2 className="text-[26px] md:text-5xl text-ivory text-center mb-8 md:mb-12 leading-tight">
              Ce que Code Kaizen <span className="italic text-gold-soft">construit pour vous.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-[0.5px] bg-gold/30">
              {benefits.map(({ id, t, d, icon: Icon }) => (
                <div key={id} className="bg-background p-6 md:p-8 group hover:bg-secondary/30 transition-colors">
                  <Icon className="w-6 h-6 text-gold mb-5 md:mb-6 group-hover:text-gold-soft transition-colors" strokeWidth={1.2} />
                  <h3 className="text-[18px] md:text-lg text-gold leading-snug mb-2 md:mb-3 font-medium">{t}</h3>
                  <p className="text-[#F5F0E8] text-[13px] md:text-sm leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LE MODÈLE */}
      <section className="py-16 md:py-32 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-20">
            <div className="text-[10px] tracking-[0.15em] md:tracking-luxe uppercase text-gold mb-6">Le modèle</div>
            <h2 className="font-serif text-[26px] md:text-5xl text-ivory leading-tight">
              Un modèle aligné sur vos résultats.
              <br />
              <span className="italic text-gold-soft">Vous ne payez que ce qui produit.</span>
            </h2>
          </div>

          <ol className="relative space-y-8 md:space-y-16 border-l border-gold/30 pl-8 md:pl-12">
            {[
              {
                n: "01",
                t: "Diagnostic stratégique · 500€",
                d: "Un audit de votre situation commerciale actuelle : ICP, canaux, gaps du système, plan d'action chiffré. Livré en 5 jours. Déductible si vous continuez.",
              },
              {
                n: "02",
                t: "Système d'acquisition · Commission uniquement",
                d: "Construction et opération complète du système. Séquences, CRM, closing. Code Kaizen se rémunère uniquement sur les encaissements générés. Aucun coût fixe.",
              },
              {
                n: "03",
                t: "Option de rachat · À partir de 6 mois",
                d: "Après 6 mois, vous pouvez acquérir le système complet : workflow, scripts, CRM documenté, formation à la prise en main. Le moteur devient le vôtre.",
              },
            ].map((step) => (
              <li key={step.n} className="relative">
                <span
                  className="absolute -left-[3.05rem] md:-left-[4.05rem] top-0 flex items-center justify-center w-10 h-10 rounded-full border border-gold bg-background text-gold text-[10px] tracking-luxe"
                >
                  {step.n}
                </span>
                <h3 className="font-serif text-[20px] md:text-2xl text-gold mb-2 md:mb-3 leading-snug">
                  {step.t}
                </h3>
                <p className="text-[#F5F0E8] text-[13px] md:text-base leading-relaxed">
                  {step.d}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-32 px-6 md:px-10 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[26px] md:text-5xl text-ivory text-center mb-10 md:mb-16">Ce qu'on nous demande.</h2>
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

      {/* CONVERSION */}
      <section id="conversion" className="py-16 md:py-32 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <div className="gold-line mb-10 md:mb-16 max-w-3xl mx-auto" />
          <div className="text-center mb-10 md:mb-16">
            <div className="text-[10px] tracking-[0.15em] md:tracking-luxe uppercase text-gold mb-6">Diagnostic stratégique · 5 jours · 500€</div>
            <h2 className="text-[26px] md:text-6xl text-ivory mb-5 md:mb-6 leading-tight">
              Chaque semaine sans système, <span className="italic text-gold-soft">c'est un deal signé ailleurs.</span>
            </h2>
            <p className="font-serif italic text-gold text-[18px] md:text-xl mb-4">Revenue, by system.</p>
            <p className="text-[#F5F0E8] max-w-xl mx-auto leading-relaxed text-[13px] md:text-base">
              Le diagnostic stratégique est la première étape. 500€. 5 jours. Un plan d'action précis sur votre situation réelle.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-8">
            <div className="pt-6 flex flex-col items-center gap-4">
              <p className="italic text-ivory text-[14px] leading-relaxed text-center">
                Discrétion totale. Nous ne divulguons jamais l'identité de nos partenaires.
              </p>
              <a
                href="https://calendly.com/aurelie-codekaizen/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-ink px-6 py-[14px] sm:px-14 sm:py-6 rounded-[2px] font-bold text-[12px] sm:text-xs tracking-[0.15em] sm:tracking-luxe uppercase hover:bg-ivory transition-all duration-500 shadow-[var(--shadow-gold)]"
              >
                Évaluer mon éligibilité
              </a>
            </div>
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
          <p className="text-[10px] tracking-luxe uppercase text-gold/60 italic font-serif text-base">
            Revenue, by system.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
