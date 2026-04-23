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
  { id: "01", t: "Système outbound prêt en 14 jours", icon: Zap },
  { id: "02", t: "Closing intégral pris en charge", icon: Users },
  { id: "03", t: "Zéro coût fixe d'installation", icon: CheckCircle },
  { id: "04", t: "Ciblage ICP ultra-précis (Data-driven)", icon: Target },
  { id: "05", t: "Reporting hebdomadaire transparent", icon: BarChart3 },
  { id: "06", t: "Résultats mesurables et prévisibles", icon: TrendingUp },
];

const problems = [
  { t: "Pipeline irrégulier", d: "Votre flux de prospects dépend du bouche-à-oreille ou de l'opportunisme." },
  { t: "Closing aléatoire", d: "Des deals qualifiés sont perdus par simple manque de structure de suivi." },
  { t: "Coûts fixes toxiques", d: "Payer des frais d'agence avant d'avoir généré le moindre euro de profit." },
];

const steps = [
  { n: "01", t: "Audit Flash", d: "Diagnostic de 30 min pour valider l'adéquation de votre offre avec notre système." },
  { n: "02", t: "Construction", d: "Déploiement de l'infrastructure (CRM, copies, séquences) en moins de 15 jours." },
  { n: "03", t: "Pilotage", d: "On génère les leads, on close les ventes, vous encaissez le chiffre d'affaires." },
];

const cases = [
  { c: "SPECGEN", s: "+2 778 prospects", d: "Système 100% data-driven livré rapidement pour une startup IA B2B." },
  { c: "OC ARCHITECTURE", s: "Scale Digital Complet", d: "Framer + Ads + Acquisition organique opérationnels en un temps record." },
  { c: "MISSIONS B2B", s: "Outbound Masterclass", d: "Séquences email et ciblage ICP sur marchés complexes et saturés." },
];

const faqs = [
  { q: "Comment vous rémunérez-vous ?", r: "Nous prélevons une commission uniquement sur le CA encaissé via notre système. Aucun frais fixe, aucun risque pour vous." },
  { q: "Qui gère le closing ?", r: "Nos équipes s'occupent de tout : qualification, argumentation et signature. Vous n'intervenez que pour la livraison du service." },
  { q: "Est-ce adapté aux offres complexes ?", r: "C'est notre spécialité. Plus l'offre est premium et technique, plus notre système est performant." },
  { q: "En combien de temps voit-on des ventes ?", r: "Le système est prêt en 15 jours. Les premières ventes surviennent généralement rapidement après le lancement." },
  { q: "Le système m'appartient-il ?", r: "Oui. Vous pouvez racheter l'intégralité du workflow et de la data à tout moment pour 5 000€." },
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
          <p className="text-muted-foreground mb-12 leading-relaxed">
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
            className={`border border-gold text-gold px-6 py-2.5 text-[10px] tracking-luxe uppercase font-semibold hover:bg-gold hover:text-ink transition-all duration-500 ${
              scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            Audit Flash
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-48 pb-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-10 flex justify-center">
            <Logo />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-ivory leading-[1.05] mb-10">
            Un système d'acquisition complet.
            <br />
            <span className="italic text-gold-soft">Zéro coût fixe.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed font-light">
            On construit votre machine de vente. On la pilote.
            <br />
            Vous payez sur les résultats uniquement.
          </p>
          <div className="flex flex-col items-center gap-8">
            <button
              onClick={() => scrollTo("conversion")}
              className="bg-gold text-ink px-14 py-6 rounded-[2px] font-bold text-xs tracking-luxe uppercase hover:bg-ivory transition-all duration-500 shadow-[var(--shadow-gold)]"
            >
              Réserver mon Audit Flash
            </button>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
              <span className="flex items-center gap-2">
                <Clock className="w-3 h-3 text-gold" /> Système opérationnel sous 2 semaines
              </span>
              <span className="flex items-center gap-2">
                <Zap className="w-3 h-3 text-gold" /> Premiers résultats en 60 jours
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-line max-w-5xl mx-auto" />

      {/* PROBLÈME */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl text-ivory mb-8 leading-tight">
              Vous avez une offre premium.
              <br />
              <span className="italic text-gold-soft">Vous n'avez pas de système.</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              La croissance erratique est le symptôme d'une architecture de vente inexistante. Nous remplaçons le hasard par un workflow rigoureux.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {problems.map((p, i) => (
              <div key={i} className="bg-background p-10">
                <div className="text-gold text-xs tracking-luxe mb-6">0{i + 1}</div>
                <h3 className="text-2xl text-ivory mb-4">{p.t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMESSE */}
      <section className="py-32 px-6 md:px-10 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="gold-line mb-16" />
          <div className="text-[10px] tracking-luxe uppercase text-gold mb-8">
            Modèle 100% Performance
          </div>
          <h2 className="text-5xl md:text-7xl text-ivory mb-10 leading-tight">
            Un système complet.
            <br />
            <span className="italic text-gold-soft">Aucun coût fixe.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Commission déclenchée uniquement sur encaissement effectif.
            <br />
            Nous prenons le risque financier à notre charge.
          </p>
          <div className="gold-line mt-16" />
        </div>
      </section>

      {/* BÉNÉFICES */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {benefits.map(({ id, t, icon: Icon }) => (
            <div key={id} className="bg-background p-10 group hover:bg-secondary/30 transition-colors">
              <div className="flex items-start justify-between mb-8">
                <span className="text-gold text-xs tracking-luxe">{id}</span>
                <Icon className="w-5 h-5 text-gold/60 group-hover:text-gold transition-colors" strokeWidth={1.2} />
              </div>
              <h3 className="text-xl text-ivory leading-snug">{t}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section className="py-32 px-6 md:px-10 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-[10px] tracking-luxe uppercase text-gold mb-6">Méthode</div>
            <h2 className="text-4xl md:text-6xl text-ivory">Comment ça marche</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                <div className="text-gold text-xs tracking-luxe mb-6">{s.n}</div>
                <h3 className="text-3xl text-ivory mb-4">{s.t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.d}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-2 -right-6 w-12 h-px bg-gold/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREUVES SOCIALES */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-[10px] tracking-luxe uppercase text-gold mb-6">Études de cas</div>
            <h2 className="text-4xl md:text-6xl text-ivory">Des résultats, pas des promesses.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((card, i) => (
              <article key={i} className="border border-border p-10 hover:border-gold/50 transition-colors">
                <div className="mb-6">
                  <div className="text-[10px] tracking-luxe uppercase text-muted-foreground mb-3">{card.c} · 2025</div>
                  <h3 className="text-2xl text-gold-soft">{card.s}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.d}</p>
              </article>
            ))}
          </div>
          <p className="text-center text-[10px] tracking-luxe uppercase text-muted-foreground mt-12">
            Études de cas réalisées en contexte réel
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 md:px-10 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-ivory text-center mb-16">Questions fréquentes</h2>
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((faq, i) => {
              const open = openFaq.includes(i);
              return (
                <div key={i}>
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full py-6 flex justify-between items-center text-left hover:text-gold transition-colors group"
                  >
                    <span className="text-lg text-ivory group-hover:text-gold transition-colors pr-6">{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gold flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${open ? "max-h-40 pb-6" : "max-h-0"}`}
                  >
                    <p className="text-muted-foreground leading-relaxed text-sm">{faq.r}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONVERSION */}
      <section id="conversion" className="py-32 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="gold-line mb-16" />
          <div className="text-[10px] tracking-luxe uppercase text-gold mb-6">Audit Flash · 30 min</div>
          <h2 className="text-4xl md:text-6xl text-ivory mb-6">Réservez votre Audit Flash</h2>
          <p className="text-muted-foreground mb-14 leading-relaxed">
            Diagnostic stratégique gratuit de 30 minutes.
          </p>

          <div className="border border-border p-10 mb-10 text-left bg-secondary/20">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[10px] tracking-luxe uppercase text-muted-foreground mb-2">Nom</label>
                <input className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-ivory transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] tracking-luxe uppercase text-muted-foreground mb-2">Email pro</label>
                <input type="email" className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-ivory transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] tracking-luxe uppercase text-muted-foreground mb-2">Votre offre en une phrase</label>
              <input className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-ivory transition-colors" />
            </div>
          </div>

          <p className="text-[10px] tracking-luxe uppercase text-muted-foreground mb-8">
            Confidentialité garantie · Aucun démarchage
          </p>
          <button
            onClick={() => setCurrentPage("merci")}
            className="bg-gold text-ink px-16 py-7 rounded-[2px] font-bold text-xs tracking-luxe uppercase hover:bg-ivory transition-all shadow-[var(--shadow-gold)]"
          >
            Confirmer ma demande de RDV
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
          <Logo />
          <nav className="flex flex-wrap justify-center gap-8 text-[10px] tracking-luxe uppercase text-muted-foreground">
            <span>SASU Code Kaizen</span>
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
