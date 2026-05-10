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
  { id: "01", t: "ICP et ciblage", d: "Identification précise de vos prospects idéaux. Chaque contact ciblé correspond à un décideur qui a une raison réelle d'acheter ce que vous vendez.", icon: Target },
  { id: "02", t: "Système outbound complet", d: "Séquences multicanal, scripts de qualification, CRM opérationnel. Une infrastructure commerciale qui travaille indépendamment de votre agenda.", icon: Zap },
  { id: "03", t: "Closing intégré", d: "Qualification, traitement des objections, accompagnement jusqu'à la signature. Vous gardez la relation client. On prend en charge la conversion.", icon: Users },
  { id: "04", t: "Reporting et pilotage", d: "Vous voyez exactement ce qui se passe chaque semaine : taux d'ouverture, leads qualifiés, deals en cours. Aucune boîte noire.", icon: BarChart3 },
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

const steps = [
  { n: "01", t: "Audit Flash gratuit", d: "Diagnostic gratuit de 30 min pour valider l'adéquation de votre offre avec notre système." },
  { n: "02", t: "Construction", d: "Déploiement de l'infrastructure (CRM, copies, séquences) en moins de 15 jours." },
  { n: "03", t: "Pilotage", d: "On génère les leads, on close les ventes, vous encaissez le chiffre d'affaires." },
];

const expertise = [
  { t: "Outbound B2B structuré", d: "Construction de systèmes de prospection multicanal : LinkedIn, cold email, séquences automatisées. Ciblage ICP, enrichissement de données, A/B test sur les accroches. De zéro à pipeline actif." },
  { t: "Closing et conversion", d: "Qualification des leads entrants, scripts d'argumentation, traitement des objections. Accompagnement jusqu'à la signature et au premier encaissement." },
  { t: "Pilotage orienté ROI", d: "Chaque action est tracée, mesurée, ajustée. Reporting hebdomadaire, attribution précise, optimisation continue. Vous savez exactement d'où vient chaque deal." },
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
            Réserver mon diagnostic
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-32 sm:pt-40 md:pt-48 pb-20 md:pb-32 px-5 sm:px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 md:mb-10 flex justify-center">
            <Logo />
          </div>
          <h1 className="font-serif text-[1.75rem] leading-[1.15] sm:text-4xl md:text-6xl lg:text-7xl md:leading-[1.1] text-ivory mb-6 md:mb-10 tracking-tight">
            Votre meilleur commercial, c'est encore vous. Et votre pipeline le sait.
            <br className="hidden sm:block" />
            <span className="italic text-gold-soft block sm:inline mt-3 sm:mt-0">
              Le système. Pas l'effort.
            </span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-sm sm:text-base mb-8 md:mb-10">
            Vous avez une offre qui fonctionne. Peut-être même des commerciaux. Ce qui manque, c'est la mécanique qui alimente tout ça sans dépendre de vous. Code Kaizen construit ce système — et se rémunère uniquement sur ce qui rentre.
          </p>
          <div className="flex flex-col items-center gap-6 md:gap-8">
            <button
              onClick={() => scrollTo("conversion")}
              className="bg-gold text-ink w-full sm:w-auto px-8 sm:px-14 py-5 sm:py-6 rounded-[2px] font-bold text-[11px] sm:text-xs tracking-luxe uppercase hover:bg-ivory transition-all duration-500 shadow-[var(--shadow-gold)]"
            >
              Réserver mon diagnostic stratégique
            </button>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="border-y border-gold/30 bg-background overflow-hidden py-4">
        <div className="flex whitespace-nowrap animate-ticker">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="flex items-center text-[10px] sm:text-[11px] tracking-luxe uppercase text-gold/80 px-6"
            >
              {item}
              <span className="ml-12 text-gold/40">·</span>
            </span>
          ))}
        </div>
      </div>

      <div className="gold-line max-w-5xl mx-auto" />

      {/* PROBLÈME / PROMESSE — 2 colonnes */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-ivory text-center mb-20 leading-tight tracking-wide font-serif">
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
                  { t: "Revenus imprévisibles", d: "Ce mois est bon. Le suivant, vous ne savez pas. Votre chiffre d'affaires dépend de votre réseau pas de votre valeur." },
                  { t: "Des deals qui disparaissent", d: "Vous avez des prospects intéressés. Sans suivi structuré, ils signent ailleurs. Pas parce qu'ils ne voulaient pas parce que personne n'était là pour closer." },
                  { t: "Vous payez avant de gagner", d: "Agences, freelances, outils, la facture arrive avant les résultats." },
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
                  { t: "Système outbound opérationnel en 2 semaines", d: "Pipeline actif, closing piloté." },
                  { t: "Closing intégral pris en charge", d: "Zéro deal perdu faute de suivi." },
                  { t: "Rémunération à la performance", d: "Vous payez sur ce qui rentre, pas sur des promesses." },
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

          {/* Badge bas */}
          <div className="flex justify-center mt-20">
            <span className="inline-block border border-gold text-gold text-[10px] tracking-luxe uppercase px-6 py-2.5 rounded-full">
              Rémunération sur résultats uniquement
            </span>
          </div>
        </div>
      </section>

      {/* BÉNÉFICES */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="border-2 border-gold p-8 md:p-14">
            <h2 className="text-3xl md:text-5xl text-ivory text-center mb-12 leading-tight">
              Ce que Code Kaizen <span className="italic text-gold-soft">construit pour vous.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-px bg-gold/30">
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

      {/* LE MODÈLE */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-[10px] tracking-luxe uppercase text-gold mb-6">Le modèle</div>
            <h2 className="font-serif text-3xl md:text-5xl text-ivory leading-tight">
              Un modèle aligné sur vos résultats.
              <br />
              <span className="italic text-gold-soft">Vous ne payez que ce qui produit.</span>
            </h2>
          </div>

          <ol className="relative space-y-12 md:space-y-16 border-l border-gold/30 pl-8 md:pl-12">
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
                <h3 className="font-serif text-xl md:text-2xl text-ivory mb-3 leading-snug">
                  {step.t}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {step.d}
                </p>
              </li>
            ))}
          </ol>
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
                <ArrowDown className="text-gold w-6 h-6 mb-6" strokeWidth={1.5} />
                <h3 className="text-3xl text-ivory mb-4">{s.t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTRE EXPERTISE */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-[10px] tracking-luxe uppercase text-gold mb-6">Notre expertise</div>
            <h2 className="text-4xl md:text-6xl text-ivory">Trois savoir-faire, un système.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((card, i) => (
              <article key={i} className="border border-border p-10 hover:border-gold/50 transition-colors">
                <h3 className="text-2xl text-gold-soft mb-6">{card.t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.d}</p>
              </article>
            ))}
          </div>
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
      <section id="conversion" className="py-32 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <div className="gold-line mb-16 max-w-3xl mx-auto" />
          <div className="text-center mb-16">
            <div className="text-[10px] tracking-luxe uppercase text-gold mb-6">Audit Flash · 30 min · Gratuit</div>
            <h2 className="text-4xl md:text-6xl text-ivory mb-6 leading-tight">
              Réservez votre <span className="italic text-gold-soft">Audit Flash</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              30 minutes. Gratuit. Sans engagement.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
            {/* Assurances */}
            <aside className="lg:sticky lg:top-32 space-y-8 lg:py-4">
              {[
                { t: "Confidentialité totale", d: "Vos informations restent strictement entre nous. Aucun partage, aucun démarchage." },
                { t: "Sans engagement", d: "L'audit est offert. Vous repartez avec un diagnostic actionnable, même sans collaboration." },
                
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
