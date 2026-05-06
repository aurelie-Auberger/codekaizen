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
  ArrowDown,
} from "lucide-react";
import Logo from "@/components/Logo";
import TallyForm from "@/components/TallyForm";

const benefits = [
  { id: "01", t: "Système outbound prêt en 14 jours", d: "Séquences, CRM et scripts opérationnels en 14 jours.", icon: Zap },
  { id: "02", t: "Closing intégral pris en charge", d: "Qualification et négociation jusqu'à la signature.", icon: Users },
  { id: "03", t: "Zéro coût fixe d'installation", d: "Aucun investissement avant les premiers résultats.", icon: CheckCircle },
  { id: "04", t: "Ciblage ICP ultra-précis", d: "Chaque prospect contacté correspond exactement à votre client idéal.", icon: Target },
  { id: "05", t: "Reporting hebdomadaire transparent", d: "Vous voyez exactement ce qui se passe, chaque semaine.", icon: BarChart3 },
  { id: "06", t: "Résultats mesurables et prévisibles", d: "Des indicateurs clairs pour piloter la croissance.", icon: TrendingUp },
];

const problems = [
  { t: "Pipeline irrégulier", d: "Votre flux de prospects dépend du bouche-à-oreille ou de l'opportunisme." },
  { t: "Closing aléatoire", d: "Des deals qualifiés sont perdus par simple manque de structure de suivi." },
  { t: "Coûts fixes toxiques", d: "Payer des frais d'agence avant d'avoir généré le moindre euro de profit." },
];

const steps = [
 { n: "01", t: "Audit Flash gratuit", d: "On commence par 30 minutes ensemble. Pas un appel commercial, un diagnostic réel. On cartographie votre offre, votre cible, ce qui bloque. Vous repartez avec une lecture claire de votre situation, que vous travailliez avec nous ou non." },
 { n: "02", t: "Construction", d: "Si on décide d'avancer, on construit l'infrastructure complète en 14 jours. CRM, séquences de prospection, scripts de qualification et de closing. Tout ce dont vous auriez eu besoin depuis longtemps." },
 { n: "03", t: "Pilotage", d: "On prend en charge l'acquisition de bout en bout. Génération de leads, qualification, closing. Vous vous concentrez sur ce que vous faites le mieux. On s'occupe de remplir votre agenda." },
];

const cases = [
  {
    c: "SPECGEN · 2025",
    s: "+2 778 prospects qualifiés générés",
    d: "Startup IA B2B. Système outbound 100% data-driven : scraping LinkedIn, enrichissement, séquences email. Pipeline actif livré en 14 jours.",
  },
  {
    c: "OC ARCHITECTURE · 2025",
    s: "0 → site + acquisition opérationnelle",
    d: "Agence architecture intérieur. Site Framer, Meta Ads et contenu organique déployés. Base d'acquisition complète opérationnelle en 14 jours.",
  },
  {
    c: "MISSIONS B2B · 2024-2025",
    s: "Plusieurs missions",
    d: "Construction de systèmes outbound sur marchés B2B variés. Ciblage ICP, séquences email, qualification des leads.",
  },
];

const faqs = [
  { q: "Comment vous rémunérez-vous ?", r: "Commission uniquement sur le chiffre d'affaires encaissé via notre système. Aucun frais fixe, aucun abonnement, aucun risque de votre côté. On gagne quand vous gagnez, c'est aussi simple que ça." },
  { q: "Qui gère le closing ?", r: "Nous. De la qualification jusqu'à la signature. Vous n'avez pas à vous impliquer dans le processus commercial si vous ne le souhaitez pas." },
  { q: "Est-ce adapté aux offres complexes ?", r: "C'est précisément là qu'on est le plus utiles. Les offres premium avec un cycle de décision long et un interlocuteur exigeant, c'est notre terrain." },
  { q: "En combien de temps voit-on des résultats ?", r: "Ça dépend de votre cycle de vente habituel. Le système outbound est opérationnel en 14 jours. Les premiers leads qualifiés arrivent rapidement. Les premières ventes, elles, suivent le rythme naturel de votre marché. On vous donne une projection réaliste dès l'Audit Flash, pas une promesse à l'aveugle." },
  { q: "Le système m'appartient-il ?", r: "Il reste la propriété de Code Kaizen pendant le partenariat. Après 6 mois vous avez une option de rachat à prix fixe, workflow complet, formation et documentation inclus. Vous gardez tout." },
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
      <section className="min-h-screen flex items-center pt-32 sm:pt-36 md:pt-40 pb-20 md:pb-28 px-5 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto text-center w-full">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4rem] leading-[1.1] text-ivory mb-8 md:mb-12 tracking-tight max-w-5xl mx-auto">
            Vous vendez du service premium.
            <br className="hidden md:block" />{" "}
            Votre acquisition repose encore sur votre réseau.
            <span className="italic text-gold-soft block mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.06em]">
              On construit le système qui remplace le réseau. Rémunéré uniquement sur ce qu’on génère.
            </span>
          </h1>
          <div className="flex flex-col items-center gap-6 md:gap-8">
            <p className="max-w-3xl text-center text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground px-2">
              Commission pure. Zéro frais fixe. Le système est prêt en 14 jours.
            </p>
            <button
              onClick={() => scrollTo("conversion")}
              className="bg-gold text-ink px-8 sm:px-12 py-4 sm:py-5 rounded-[2px] font-bold text-[11px] sm:text-xs tracking-luxe uppercase hover:bg-ivory transition-all duration-500 shadow-[var(--shadow-gold)]"
            >
              Réserver mon Audit Flash
            </button>
            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-x-8 gap-y-3 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
              <span className="flex items-center justify-center gap-2">
                <Clock className="w-3 h-3 text-gold flex-shrink-0" /> Système actif en 14 jours
              </span>
              <span className="flex items-center justify-center gap-2">
                <Zap className="w-3 h-3 text-gold flex-shrink-0" /> Zéro frais fixe
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-line max-w-5xl mx-auto" />

      {/* PROBLÈME / PROMESSE — 2 colonnes */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-ivory text-center mb-14 leading-tight tracking-wide font-serif">
            Sans système. <span className="italic text-gold-soft">Avec système.</span>
          </h2>

          <div className="relative grid grid-cols-2 gap-0">
            {/* Ligne verticale dorée */}
            <div
              aria-hidden
              className="absolute left-1/2 top-0 bottom-0 w-px"
              style={{ backgroundColor: "#c9a24e", opacity: 0.3 }}
            />

            {/* Colonne gauche — Le hasard */}
            <div className="pr-4 sm:pr-8 md:pr-16 py-8 md:py-10 pl-4 sm:pl-8 md:px-10" style={{ backgroundColor: "#0a1018" }}>
              <h3
                className="text-lg sm:text-2xl md:text-3xl mb-8 md:mb-12 font-serif tracking-wide"
                style={{ color: "#edeae2" }}
              >
                Sans système
              </h3>
              <ul className="space-y-6 sm:space-y-8 md:space-y-10">
                {[
                  { t: "Revenus imprévisibles", d: "Ce mois est bon. Le suivant, vous ne savez pas. Votre chiffre d'affaires dépend de votre réseau, pas de votre valeur." },
                  { t: "Des deals qui disparaissent", d: "Vous avez des prospects intéressés. Sans suivi structuré, ils signent ailleurs. Pas parce qu'ils ne voulaient pas, mais parce que personne n'était là pour closer." },
                  { t: "Vous payez avant de gagner", d: "Agences, freelances, outils. La facture arrive avant les résultats." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-4 md:gap-5">
                    <span
                      className="text-lg sm:text-2xl leading-none mt-0.5 flex-shrink-0 font-light"
                      style={{ color: "#8b3a3a" }}
                      aria-hidden
                    >
                      ×
                    </span>
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg text-ivory mb-1 sm:mb-2 font-sans font-medium leading-snug">{item.t}</h4>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne droite — Le système */}
            <div className="pl-4 sm:pl-8 md:pl-16 py-8 md:py-10 pr-4 sm:pr-8 md:px-10">
              <h3
                className="text-lg sm:text-2xl md:text-3xl mb-8 md:mb-12 font-serif tracking-wide"
                style={{ color: "#c9a24e" }}
              >
                Avec système
              </h3>
              <ul className="space-y-6 sm:space-y-8 md:space-y-10">
                {[
                  { t: "Un pipeline actif, chaque mois", d: "Des entreprises ciblées, contactées, qualifiées. Votre agenda se remplit, sans hasard." },
                  { t: "Closing intégral pris en charge", d: "Zéro deal perdu faute de suivi." },
                  { t: "Vous payez quand ça génère", d: "Aucun frais fixe. Commission uniquement sur les ventes encaissées." },
                  { t: "Un partenaire rémunéré sur vos résultats", d: "Pas d’agence, pas de freelance qui facture à l’heure. On gagne quand vous gagnez." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-4 md:gap-5">
                    <span
                      className="text-lg sm:text-2xl leading-none mt-0.5 flex-shrink-0 font-light"
                      style={{ color: "#c9a24e" }}
                      aria-hidden
                    >
                      ✓
                    </span>
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg text-ivory mb-1 sm:mb-2 font-sans font-medium leading-snug">{item.t}</h4>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Signal de crédibilité */}
          <p className="mt-12 text-center text-[11px] sm:text-xs tracking-[0.18em] uppercase text-muted-foreground/80">
            Cadre contractuel SASU · Propriété intellectuelle protégée · Paiement déclenché à l'encaissement uniquement
          </p>

          {/* Badge bas */}
          <div className="flex justify-center mt-10">
            <span className="inline-block border border-gold text-gold text-[10px] tracking-luxe uppercase px-6 py-2.5 rounded-full">
              Rémunération sur résultats uniquement
            </span>
          </div>
        </div>
      </section>

      {/* BÉNÉFICES */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="border-2 border-gold p-8 md:p-14">
            <h2 className="text-3xl md:text-5xl text-ivory text-center mb-12 leading-tight font-serif">
              Ingénierie d'acquisition,
              <br />
              <span className="italic text-gold-soft">ce que vous obtenez.</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/30">
              {benefits.map(({ id, t, d, icon: Icon }) => (
                <div key={id} className="bg-background p-8 group hover:bg-secondary/30 transition-colors">
                  <Icon className="w-6 h-6 text-gold mb-6 group-hover:text-gold-soft transition-colors" strokeWidth={1.2} />
                  <h3 className="text-lg text-ivory leading-snug mb-3">{t}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section className="py-20 px-6 md:px-10 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] tracking-luxe uppercase text-gold mb-6">Méthode</div>
            <h2 className="text-3xl md:text-5xl text-ivory leading-tight font-serif">Ce qui se passe concrètement</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                <div className="font-serif text-gold text-2xl mb-6 tracking-wide leading-none">{s.n}</div>
                <h3 className="text-3xl text-ivory mb-4">{s.t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREUVES SOCIALES */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[10px] tracking-luxe uppercase text-gold mb-6">Études de cas</div>
            <h2 className="text-3xl md:text-5xl text-ivory leading-tight font-serif">Des résultats, pas des promesses.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((card, i) => (
              <article key={i} className="border border-border p-10 hover:border-gold/50 transition-colors">
                <div className="mb-6">
                  <div className="text-[10px] tracking-luxe uppercase text-muted-foreground mb-3">{card.c}</div>
                  <h3 className="text-2xl text-gold-soft">{card.s}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.d}</p>
              </article>
            ))}
          </div>

          <div className="mt-20 flex flex-col items-center gap-6 md:gap-8">
            <button
              onClick={() => scrollTo("conversion")}
              className="bg-gold text-ink w-full sm:w-auto px-8 sm:px-14 py-5 sm:py-6 rounded-[2px] font-bold text-[11px] sm:text-xs tracking-luxe uppercase hover:bg-ivory transition-all duration-500 shadow-[var(--shadow-gold)]"
            >
              Réserver mon Audit Flash
            </button>
            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-x-8 gap-y-3 text-xs sm:text-sm tracking-[0.2em] uppercase text-ivory/80 font-semibold">
              <span className="flex items-center justify-center gap-2.5">
                <Clock className="w-4 h-4 text-gold flex-shrink-0" /> Système actif en 14 jours
              </span>
              <span className="flex items-center justify-center gap-2.5">
                <Zap className="w-4 h-4 text-gold flex-shrink-0" /> Zéro frais fixe
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 md:px-10 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-ivory text-center mb-12 leading-tight font-serif">Questions fréquentes</h2>
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
      <section id="conversion" className="py-20 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <div className="gold-line mb-12 max-w-3xl mx-auto" />
          <div className="text-center mb-12">
            <div className="text-[10px] tracking-luxe uppercase text-gold mb-6">Audit Flash · 30 min · Gratuit</div>
            <h2 className="text-3xl md:text-5xl text-ivory mb-6 leading-tight font-serif">
              Vous voulez savoir si ça peut marcher <span className="italic text-gold-soft">pour vous</span> ?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              En 30 minutes, vous repartez avec un diagnostic clair de ce qui bloque votre acquisition — que vous travailliez avec nous ou non.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
            {/* Assurances */}
            <aside className="lg:sticky lg:top-32 space-y-8 lg:py-4">
              {[
                { t: "Ce que vous obtenez", d: "On analyse votre offre, votre cible, et ce qui freine votre acquisition aujourd'hui. Vous repartez avec un diagnostic concret, pas un pitch." },
                { t: "Sans engagement", d: "Si on n'est pas le bon fit, on vous le dit directement. Le temps est la seule chose qu'on ne peut pas se rembourser." },
                
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gold" />
                  <div>
                    <h3 className="text-ivory text-base mb-1.5 font-sans font-medium">{item.t}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </aside>

            {/* Form card */}
            <div className="relative">
              <div className="absolute -inset-px bg-gradient-to-br from-gold/40 via-transparent to-gold/10 rounded-[3px] pointer-events-none" />
              <div className="relative bg-background border border-border p-6 sm:p-10 rounded-[2px]">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
                  <div>
                    <div className="text-[10px] tracking-luxe uppercase text-gold mb-1">Formulaire sécurisé</div>
                    <div className="text-ivory text-sm font-sans">Quelques informations pour préparer l'échange.</div>
                  </div>
                  <div className="hidden sm:flex items-end gap-[3px] h-5">
                    <span className="block w-[2px] h-2 bg-gold/60" />
                    <span className="block w-[2px] h-3 bg-gold/80" />
                    <span className="block w-[2px] h-5 bg-gold" />
                  </div>
                </div>
                <TallyForm />
              </div>
              <p className="text-[10px] tracking-luxe uppercase text-muted-foreground mt-6 text-center">
                Vos données restent confidentielles. Aucun démarchage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-16 px-6 md:px-10">
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
