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
  { q: "C'est quoi le diagnostic stratégique ?", r: "Un audit de votre situation commerciale : ICP, canaux, gaps, plan d'action. 500€, livré en 5 jours. Déductible si vous continuez. Le système est opérationnel sous 30 jours. Les premiers résultats dépendent de votre cycle de vente." },
  { q: "Comment fonctionne la commission ?", r: "Code Kaizen est rémunéré uniquement sur les encaissements générés, pas sur les leads, pas sur les rendez-vous. Si rien ne rentre, rien n'est dû." },
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
            Votre meilleur commercial, c'est encore vous. Ce n'est pas un compliment.
          </h1>
          <p className="text-[#a0aec0] max-w-2xl mx-auto text-[15px] leading-[1.6] sm:text-base sm:leading-relaxed mb-6 md:mb-8">
            Chaque mois sans système d'acquisition, c'est un mois où votre pipeline dépend d'un appel que quelqu'un accepte de vous passer. Code Kaizen construit l'infrastructure qui change ça.
          </p>
          <p className="text-[#a0aec0] max-w-2xl mx-auto text-[15px] leading-[1.6] sm:text-base sm:leading-relaxed mb-8 md:mb-10">
            Vous avez validé votre offre. Ce qui manque, c'est le système qui amène vos clients sans que vous ayez à le chercher vous-même.
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

      {/* VÉRITÉS */}
      <section className="py-16 md:py-32 px-6 md:px-10">
        <div className="max-w-[720px] mx-auto text-center">
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory mb-10 md:mb-16 leading-tight">
            Ce que personne ne dit aux fondateurs B2B
          </h2>
          <div className="space-y-8 md:space-y-10 text-[#f7f7f7] leading-[1.75] text-[0.95rem]">
            <p>
              Votre entreprise tourne. Vos clients sont satisfaits. Et pourtant, chaque nouveau client est le résultat d'un appel, d'une recommandation, d'une rencontre que vous avez provoquée personnellement. Ce modèle n'est pas une force. C'est une fragilité structurelle que vous n'avez pas encore eu à payer au prix fort.
            </p>
            <p>
              Le jour où votre réseau se tait, rien n'arrive. Pas de leads. Pas de séquence active. Juste le silence dans votre pipeline et la question que tout fondateur redoute : d'où vient le prochain client ?
            </p>
            <p>
              La réponse instinctive est de recruter un commercial. C'est la mauvaise réponse. Un commercial sans infrastructure coûte en moyenne 45 000 EUR sur 12 mois pour un résultat aléatoire. Le problème n'est pas le nombre de personnes. C'est l'absence d'infrastructure.
            </p>
          </div>
          <p className="text-[#a0aec0] italic text-center mt-10 md:mt-14 text-[0.875rem]">
            Il existe une alternative à cette dépendance.
          </p>
        </div>
      </section>

      {/* MARCHÉS */}
      <section className="pt-3 pb-12 md:pt-8 md:pb-20 px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-center">
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
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#a0aec0] text-[0.875rem] mb-6 md:mb-8 max-w-3xl mx-auto">
            Code Kaizen construit l'infrastructure d'acquisition que votre entreprise aurait dû avoir dès le premier jour.
          </p>
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
                Zéro coût fixe. 10% sur le CA généré pendant 12 mois. Vous ne payez que les résultats encaissés.
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

      {/* LE DIAGNOSTIC */}
      <section className="py-16 md:py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory mb-10 md:mb-16 leading-tight">
            Le Diagnostic Acquisition — 800 EUR HT
          </h2>
          <div className="max-w-[640px] mx-auto border border-[#c9a24e] rounded-xl p-6 md:p-10 text-left">
            <p className="text-[#F5F0E8] text-[0.95rem] leading-[1.75] mb-5">
              Un engagement de 5 jours ouvrés. Vous recevez un document couvrant la radiographie de votre situation réelle, les freins qui bloquent le scale, et le levier prioritaire avec une projection chiffrée sur 90 jours.
            </p>
            <p className="text-[#F5F0E8] text-[0.95rem] leading-[1.75] mb-5">
              La restitution en call de 45 minutes. Vous repartez avec une décision à prendre, pas un rapport à lire seul.
            </p>
            <p className="text-[#F5F0E8] text-[0.95rem] leading-[1.75] mb-5">
              800 EUR HT. Le coût d'une mauvaise décision de recrutement sur une semaine. Payable à la commande. Aucun engagement sur la suite.
            </p>
            <p className="text-[#F5F0E8] text-[0.95rem] leading-[1.75] mb-8">
              Si le Diagnostic révèle un levier actionnable, suivi à la performance : zéro coût fixe, 10% sur le CA généré pendant 12 mois.
            </p>
            <div className="text-center">
              <button
                onClick={() => scrollTo("formulaire")}
                className="bg-gold text-ink px-6 py-[14px] sm:px-14 sm:py-6 rounded-[2px] font-bold text-[12px] sm:text-xs tracking-[0.15em] sm:tracking-luxe uppercase hover:bg-ivory transition-all duration-500 shadow-[var(--shadow-gold)]"
              >
                Réserver mon Diagnostic — 800 EUR HT
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
          <h2 className="text-[1.3rem] md:text-[1.6rem] text-ivory text-center mb-10 md:mb-16">Ce qu'on nous demande.</h2>
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
      <section id="formulaire" className="py-16 md:py-32 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <div className="gold-line mb-10 md:mb-16 max-w-3xl mx-auto" />
          <div className="text-center mb-10 md:mb-16">
            <div className="text-[10px] tracking-[0.15em] md:tracking-luxe uppercase text-gold mb-6">Diagnostic stratégique · 5 jours · 500€</div>
            <h2 className="text-[1.3rem] md:text-[1.6rem] text-ivory mb-5 md:mb-6 leading-tight">
              Réservez votre Diagnostic
            </h2>
            <p className="text-[#a0aec0] max-w-xl mx-auto leading-[1.75] text-[0.875rem] mb-4">
              Chaque semaine sans système, c'est un deal signé ailleurs.
            </p>
            <p className="font-serif italic text-gold text-[0.875rem] mb-4">Revenue, by system.</p>
            <p className="text-[#F5F0E8] max-w-xl mx-auto leading-[1.75] text-[0.95rem]">
              Le diagnostic stratégique est la première étape. 500€. 5 jours. Un plan d'action précis sur votre situation réelle.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-8">
            <div className="pt-6 flex flex-col items-center gap-4">
              <p className="italic text-ivory text-[0.875rem] leading-[1.75] text-center">
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
          <p className="text-[#a0aec0] text-[0.75rem] tracking-[0.1em] uppercase italic">
            REVENUE, BY SYSTEM.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
