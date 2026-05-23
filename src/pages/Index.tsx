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
import aurelieImg from "@/assets/aurelie.png";


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
  { q: "Qui gère le closing ?", r: "Je prends en charge la qualification et le closing sur l'ensemble des opportunités générées. Si vous disposez déjà d'une équipe commerciale, nous travaillons en coordination directe avec elle. Le système d'acquisition reste identique dans les deux cas." },
  { q: "C'est quoi le Diagnostic Acquisition ?", r: "Un diagnostic de 5 jours ouvrés pendant lesquels nous analysons votre ICP réel, votre positionnement marché, vos séquences actuelles si elles existent, et les leviers bloquants. Livrable : fiche ICP opérationnelle, architecture de séquences recommandée, stack technique, et priorités d'exécution. Ce diagnostic est facturé 500€ HT, intégralement déduit de la première commission en cas de mission." },
  { q: "Comment fonctionne la commission ?", r: "10% sur le CA généré par les deals sourcés via notre système, pendant 12 mois. Pas sur votre CA existant, pas sur vos deals inbound. Uniquement sur ce que le système produit. Facturation au moment de l'encaissement, pas de la signature." },
  { q: "Que se passe-t-il après 12 mois ?", r: "Le système vous appartient intégralement — séquences, bases de contacts, automations, documentation. Vous pouvez l'opérer en interne ou prolonger le partenariat. Aucun engagement de renouvellement." },
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
            Réserver mon Diagnostic
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
            Code Kaizen construit l'infrastructure outbound B2B qui génère un pipeline commercial prévisible — sans dépendre du bouche-à-oreille ni d'une équipe SDR.
          </p>
          <p className="text-gold/90 italic text-[0.8rem] max-w-2xl mx-auto mb-4">
            Pour les fondateurs et dirigeants B2B avec une offre validée, un ticket moyen ≥ 5 000 € et zéro système d'acquisition structuré.
          </p>
          <p className="text-[#a0aec0] italic text-[0.85rem] mb-8 md:mb-10">
            Votre partenaire de croissance aligné sur vos résultats.
          </p>
          <div className="flex flex-col items-center gap-6 md:gap-8">
            <button
              onClick={() => scrollTo("formulaire")}
              className="bg-gold text-ink w-full sm:w-auto px-6 py-[14px] sm:px-14 sm:py-6 rounded-[2px] font-bold text-[12px] sm:text-xs tracking-[0.15em] sm:tracking-luxe uppercase hover:bg-ivory transition-all duration-500 shadow-[var(--shadow-gold)]"
            >
              Réserver mon Diagnostic
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
                Chaque client vient d'un appel que vous avez passé ou d'une relation que vous avez cultivée. Dès que vous arrêtez, le pipeline s'arrête. Ce n'est pas un modèle, c'est une dépendance.
              </p>
            </div>
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-6">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Le réseau s'épuise</h3>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75]">
                Le bouche-à-oreille ne scale pas au-delà d'un certain seuil. Quand vous avez fait le tour de votre réseau, le silence qui suit est brutal — et difficile à expliquer en board.
              </p>
            </div>
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-6">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Recruter sans système : 45K€ perdus</h3>
              <p className="text-[#f7f7f7] text-[0.95rem] leading-[1.75]">
                Un SDR sans infrastructure outbound, sans ICP défini, sans séquences qualifiées : vous payez un salaire pour improviser. 12 mois plus tard, le résultat est aléatoire et le coût réel dépasse 60K€.
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
            Une infrastructure de revenus. Pas un abonnement de plus.
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-8 text-left">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Diagnostic Acquisition — 5 jours</h3>
              <p className="text-[#F5F0E8] text-[13px] md:text-sm leading-relaxed">
                Nous cartographions votre ICP réel, votre positionnement outbound, et les leviers bloquants. Livrable structuré le jour de la restitution : ICP fiche, stack recommandée, architecture de séquences.
              </p>
            </div>
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-8 text-left">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Système déployé & opéré</h3>
              <p className="text-[#F5F0E8] text-[13px] md:text-sm leading-relaxed">
                Nous construisons et opérons l'infrastructure : sourcing Clay, enrichissement, séquences Instantly, qualification SQL, CRM. Le fondateur sort de la prospection. Le système entre en fonction.
              </p>
            </div>
            <div className="bg-[rgba(201,162,78,0.04)] border border-[rgba(201,162,78,0.2)] rounded-lg p-8 text-left">
              <h3 className="text-[#c9a24e] text-lg font-medium mb-4">Modèle 100% performance</h3>
              <p className="text-[#F5F0E8] text-[13px] md:text-sm leading-relaxed">
                Zéro coût fixe. 10% sur le chiffre d'affaires généré par les deals sourcés via notre système, pendant 12 mois. Applicable uniquement aux offres B2B avec ticket moyen ≥ 5 000 € par deal.
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
            Voici ce que cette infrastructure produit.
          </p>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[#111927] border border-[rgba(201,162,78,0.3)] rounded-lg p-6">
              <div className="text-[#c9a24e] text-[13px] md:text-sm font-medium mb-5">ESN Conseil, 18 collaborateurs, France</div>
              <div className="space-y-3 text-[13px] md:text-sm">
                <div>
                  <div className="text-[#a0aec0] text-[0.7rem] uppercase tracking-wider mb-1">Offre</div>
                  <div className="text-[#f7f7f7] leading-relaxed">Missions data & IA, ticket moyen 22K€</div>
                </div>
                <div>
                  <div className="text-[#a0aec0] text-[0.7rem] uppercase tracking-wider mb-1">Levier</div>
                  <div className="text-[#f7f7f7] leading-relaxed">Outbound cold email ciblé DSI + DG de PME industrielles</div>
                </div>
                <div>
                  <div className="text-[#a0aec0] text-[0.7rem] uppercase tracking-wider mb-1">Résultat</div>
                  <div className="text-[#f7f7f7] leading-relaxed">3 deals signés / 67K€ pipeline qualifié en 73 jours</div>
                </div>
              </div>
            </div>
            <div className="bg-[#111927] border border-[rgba(201,162,78,0.3)] rounded-lg p-6">
              <div className="text-[#c9a24e] text-[13px] md:text-sm font-medium mb-5">SaaS RH B2B, 8 collaborateurs, France</div>
              <div className="space-y-3 text-[13px] md:text-sm">
                <div>
                  <div className="text-[#a0aec0] text-[0.7rem] uppercase tracking-wider mb-1">Offre</div>
                  <div className="text-[#f7f7f7] leading-relaxed">Logiciel de gestion d'entretiens, ticket annuel 8K€</div>
                </div>
                <div>
                  <div className="text-[#a0aec0] text-[0.7rem] uppercase tracking-wider mb-1">Levier</div>
                  <div className="text-[#f7f7f7] leading-relaxed">Séquences LinkedIn + email ciblées DRH entreprises 50-200 salariés</div>
                </div>
                <div>
                  <div className="text-[#a0aec0] text-[0.7rem] uppercase tracking-wider mb-1">Résultat</div>
                  <div className="text-[#f7f7f7] leading-relaxed">2 deals signés / 38K€ ARR généré en 61 jours</div>
                </div>
              </div>
            </div>
            <div className="bg-[#111927] border border-[rgba(201,162,78,0.3)] rounded-lg p-6">
              <div className="text-[#c9a24e] text-[13px] md:text-sm font-medium mb-5">Cabinet de conseil en stratégie, 12 collaborateurs</div>
              <div className="space-y-3 text-[13px] md:text-sm">
                <div>
                  <div className="text-[#a0aec0] text-[0.7rem] uppercase tracking-wider mb-1">Offre</div>
                  <div className="text-[#f7f7f7] leading-relaxed">Accompagnement transformation, ticket moyen 35K€</div>
                </div>
                <div>
                  <div className="text-[#a0aec0] text-[0.7rem] uppercase tracking-wider mb-1">Levier</div>
                  <div className="text-[#f7f7f7] leading-relaxed">Outbound ciblé DAF + DG de ETI en phase de structuration</div>
                </div>
                <div>
                  <div className="text-[#a0aec0] text-[0.7rem] uppercase tracking-wider mb-1">Résultat</div>
                  <div className="text-[#f7f7f7] leading-relaxed">1 deal signé + 2 en négociation / 105K€ pipeline en 88 jours</div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-[#a0aec0] text-[0.75rem] italic text-center mt-8 md:mt-10">
            Missions anonymisées. Données réelles.
          </p>
          <div className="max-w-2xl mx-auto mt-10 md:mt-14 text-center">
            <p className="text-[#c9a24e] italic text-[0.875rem] leading-relaxed">
              "Pour la première fois depuis trois ans, j'ai eu un rendez-vous qualifié que je n'avais pas été chercher moi-même. En 6 semaines, le système a produit plus de pipeline que mes 8 derniers mois de networking."
            </p>
            <p className="text-[#a0aec0] text-[13px] mt-3">
              — Fondateur, ESN Data & IA, 18 collaborateurs, France — 2025
            </p>
          </div>
        </div>
      </section>

      {/* SECTION A — INFRASTRUCTURE */}
      <section className="bg-[#0d1b2e] border-t border-b border-[rgba(201,162,78,0.15)] py-16 md:py-28 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-[0.7rem] tracking-[0.25em] font-medium uppercase">Infrastructure · v2026</span>
            </div>
            <h2 className="font-serif text-[1.5rem] md:text-[2.1rem] text-ivory mb-4 leading-tight max-w-3xl">
              Comment fonctionne l'infrastructure Code Kaizen
            </h2>
            <p className="text-[#a0aec0] text-[0.9rem] md:text-[0.95rem] leading-relaxed max-w-2xl">
              Un système d'acquisition outbound construit comme une infrastructure logicielle : 6 phases, 4 couches techniques, 18 modules opérationnels. Chaque composant est mesuré, versionné et transmissible.
            </p>
          </div>

          {/* Stack layers */}
          <div className="grid md:grid-cols-4 gap-3 mb-12 md:mb-16">
            {[
              { l: "L4", t: "Orchestration", d: "Routing · Scoring · CRM sync", s: "HubSpot · Make · n8n" },
              { l: "L3", t: "Engagement", d: "Séquençage · Multi-canal · A/B", s: "Instantly · lemlist · LGM" },
              { l: "L2", t: "Données", d: "Sourcing · Enrichissement · Waterfall", s: "Clay · Apollo · Dropcontact" },
              { l: "L1", t: "Délivrabilité", d: "Domaines · DNS · Warm-up", s: "Mailreach · Google Postmaster" },
            ].map((layer) => (
              <div key={layer.l} className="bg-[#101f37] border border-[rgba(201,168,76,0.18)] rounded-md p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#c9a84c] text-[0.65rem] font-mono tracking-wider">{layer.l}</span>
                  <span className="text-[#a0aec0]/40 text-[0.6rem] font-mono">LAYER</span>
                </div>
                <div className="text-white text-[0.85rem] font-semibold mb-1">{layer.t}</div>
                <div className="text-[#a0aec0] text-[0.7rem] leading-snug mb-3">{layer.d}</div>
                <div className="text-[#c9a84c]/70 text-[0.65rem] font-mono leading-relaxed pt-2 border-t border-[rgba(201,168,76,0.1)]">{layer.s}</div>
              </div>
            ))}
          </div>

          {/* Timeline / pipeline header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-[rgba(201,168,76,0.2)]" />
            <span className="text-[#c9a84c] text-[0.65rem] tracking-[0.25em] uppercase">Pipeline d'exécution · 90 jours</span>
            <div className="h-px flex-1 bg-[rgba(201,168,76,0.2)]" />
          </div>

          {/* Detailed phase cards */}
          <div className="space-y-4 md:space-y-5">
            {[
              {
                n: "01",
                phase: "Phase Discovery",
                duration: "J0 → J+5",
                t: "Diagnostic Acquisition",
                d: "Cartographie de la réalité commerciale. Pas un audit générique : une analyse structurée de l'ICP réel, du positionnement perçu, des leviers bloquants.",
                inputs: ["CRM existant", "Historique deals 12 mois", "Site & positionnement"],
                outputs: ["Fiche ICP T1/T2/T3", "Cartographie objections", "Roadmap acquisition 90j"],
                kpi: "Livrable : 18 pages · 5 jours ouvrés",
              },
              {
                n: "02",
                phase: "Phase Build",
                duration: "J+5 → J+20",
                t: "Architecture Pipeline",
                d: "Construction de l'infrastructure technique avant la première séquence. Délivrabilité, stack, scoring, workflows — l'architecture détermine 80% de la performance.",
                inputs: ["Domaines secondaires", "Accès stack outils", "Scoring SQL défini"],
                outputs: ["3-6 domaines warm-up J+14", "Stack opérationnelle", "Workflows automation"],
                kpi: "Délivrabilité cible : >95% inbox · SPF/DKIM/DMARC alignés",
              },
              {
                n: "03",
                phase: "Phase Data",
                duration: "J+15 → J+25",
                t: "Sourcing & Segmentation",
                d: "Bases hyper-segmentées construites sur signaux d'intention réels. Multi-source, waterfall d'enrichissement, scoring comportemental sur 8 variables.",
                inputs: ["ICP tier 1/2/3", "Critères firmographiques", "Signaux d'intention"],
                outputs: ["2 000–5 000 contacts/mois", "Taux d'enrichissement >85%", "Segments scorés"],
                kpi: "Précision ICP : >92% · Bounce rate cible <3%",
              },
              {
                n: "04",
                phase: "Phase Launch",
                duration: "J+25 → J+90",
                t: "Acquisition Outbound",
                d: "Séquences écrites depuis le problème acheteur, pas le produit. Personnalisation niveau 3, A/B testing systématique, cadence calibrée sur le cycle de vente.",
                inputs: ["Segments scorés", "Messaging validé", "Cadence définie"],
                outputs: ["3–5 steps multi-canal", "Variants A/B/C", "Réponses qualifiées"],
                kpi: "Reply rate cible : 8–15% · Positive reply : 2–4%",
              },
              {
                n: "05",
                phase: "Phase Qualify",
                duration: "Continu",
                t: "Qualification SQL",
                d: "Protocole de qualification strict. Seuls les leads avec potentiel de deal réel sont transmis. Brief complet, scoring post-call, routing CRM.",
                inputs: ["Réponses positives", "Critères SQL BANT", "Calendrier dirigeant"],
                outputs: ["Brief lead structuré", "Score T1/T2/T3", "Handoff CRM HubSpot"],
                kpi: "Conversion reply → SQL : >40% · No-show <15%",
              },
              {
                n: "06",
                phase: "Phase Handoff",
                duration: "J+90",
                t: "Transmission Système",
                d: "À la fin de la mission, le système vous appartient. Documentation, playbook, formation. La dépendance s'arrête ici — sauf si vous choisissez la continuité.",
                inputs: ["Système en production", "Métriques 90 jours", "Équipe interne"],
                outputs: ["Documentation Notion", "Playbook PDF 40p", "2 sessions formation"],
                kpi: "Autonomie opérationnelle : J+1 post-handoff",
              },
            ].map((c) => (
              <div key={c.n} className="bg-[#101f37] border border-[rgba(201,168,76,0.18)] rounded-lg overflow-hidden hover:border-[rgba(201,168,76,0.4)] transition-colors">
                <div className="grid md:grid-cols-[200px_1fr_280px] gap-0">
                  {/* Left rail */}
                  <div className="bg-[#0c1828] border-b md:border-b-0 md:border-r border-[rgba(201,168,76,0.15)] p-5 md:p-6 flex md:flex-col items-center md:items-start justify-between md:justify-start gap-2">
                    <div>
                      <div className="text-[#c9a84c] text-[0.7rem] font-mono tracking-wider mb-1">{c.n} / 06</div>
                      <div className="text-white text-[0.95rem] font-semibold leading-tight mb-1">{c.phase}</div>
                      <div className="text-[#a0aec0] text-[0.7rem] font-mono">{c.duration}</div>
                    </div>
                  </div>

                  {/* Center content */}
                  <div className="p-5 md:p-6 border-b md:border-b-0 md:border-r border-[rgba(201,168,76,0.1)]">
                    <h3 className="text-[#c9a84c] text-[1rem] md:text-[1.05rem] font-semibold mb-3 leading-tight">{c.t}</h3>
                    <p className="text-[#cbd5e1] text-[0.82rem] md:text-[0.85rem] leading-relaxed mb-4">{c.d}</p>
                    <div className="text-[#c9a84c]/80 text-[0.7rem] font-mono tracking-wider pt-3 border-t border-[rgba(201,168,76,0.1)]">{c.kpi}</div>
                  </div>

                  {/* Right I/O */}
                  <div className="p-5 md:p-6 bg-[#0d1b2e]/60">
                    <div className="mb-4">
                      <div className="text-[#a0aec0]/60 text-[0.6rem] font-mono tracking-[0.2em] uppercase mb-2">Inputs</div>
                      <ul className="space-y-1">
                        {c.inputs.map((i) => (
                          <li key={i} className="text-[#a0aec0] text-[0.72rem] leading-snug flex gap-1.5">
                            <span className="text-[#c9a84c]/50 font-mono">→</span><span>{i}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-[#a0aec0]/60 text-[0.6rem] font-mono tracking-[0.2em] uppercase mb-2">Outputs</div>
                      <ul className="space-y-1">
                        {c.outputs.map((o) => (
                          <li key={o} className="text-[#cbd5e1] text-[0.72rem] leading-snug flex gap-1.5">
                            <span className="text-[#c9a84c] font-mono">←</span><span>{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer metrics strip */}
          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-[rgba(201,168,76,0.15)] border border-[rgba(201,168,76,0.15)] rounded-lg overflow-hidden">
            {[
              { v: "6", l: "Phases" },
              { v: "18", l: "Modules opérationnels" },
              { v: "4", l: "Couches techniques" },
              { v: "90j", l: "Cycle complet" },
            ].map((m) => (
              <div key={m.l} className="bg-[#0d1b2e] p-5 md:p-6 text-center">
                <div className="font-serif text-[#c9a84c] text-[1.8rem] md:text-[2.2rem] leading-none mb-2">{m.v}</div>
                <div className="text-[#a0aec0] text-[0.7rem] tracking-wider uppercase">{m.l}</div>
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
          <p className="text-[#a0aec0] text-center text-[0.875rem] mb-12 md:mb-16">
            Ce qui guide chaque décision, chaque séquence, chaque mission.
          </p>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                    <polygon points="12 2 22 12 12 22 2 12 12 2" />
                  </svg>
                ),
                t: "L'architecture avant l'exécution",
                d: "Une séquence mal ciblée envoie des milliers de messages au mauvais profil. Nous passons autant de temps à construire l'infrastructure qu'à l'opérer. Ce que vous ne voyez pas — le sourcing, le scoring, l'architecture technique — détermine 80% du résultat final.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                    <line x1="4" y1="20" x2="20" y2="20" />
                    <polyline points="6 14 12 6 18 14" />
                    <line x1="12" y1="6" x2="12" y2="18" />
                  </svg>
                ),
                t: "La donnée avant l'intuition",
                d: "Chaque décision est tracée et justifiée par des données : taux de réponse par segment, par step, par accroche. Nous n'itérons pas à l'aveugle. Nous mesurons, nous interprétons, nous ajustons. L'opinion n'a pas sa place dans un système d'acquisition.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                    <circle cx="8" cy="12" r="5" />
                    <circle cx="16" cy="12" r="5" />
                  </svg>
                ),
                t: "L'alignement sur vos résultats, pas sur nos heures",
                d: "Le modèle à la performance n'est pas un argument commercial. C'est une contrainte que nous nous imposons : si le système ne produit pas, nous ne gagnons pas. Cette structure élimine le conflit d'intérêt entre prestataire et client, et aligne chaque action sur une seule métrique : le CA généré.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="8" y1="13" x2="16" y2="13" />
                    <line x1="8" y1="17" x2="16" y2="17" />
                  </svg>
                ),
                t: "La transmission comme objectif final",
                d: "Nous ne construisons pas des systèmes dont vous seriez dépendants. Chaque mission se termine par un transfert complet : documentation, playbook, formation. L'objectif est que vous puissiez opérer sans nous — ou que vous choisissiez de continuer avec nous. La différence est là.",
              },
            ].map((b) => (
              <div key={b.t} className="bg-[#1a2744] border border-[rgba(201,168,76,0.3)] rounded-lg p-6 md:p-7 flex gap-4 md:gap-5">
                <div className="text-[#c9a84c] flex-shrink-0 pt-0.5">{b.icon}</div>
                <div>
                  <h3 className="text-white text-base md:text-lg font-bold leading-tight mb-2">{b.t}</h3>
                  <p className="text-[#a0aec0] text-[13px] md:text-sm leading-relaxed">{b.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FONDATRICE */}
      <section className="bg-[#0f1a2e] py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
            <div
              className="w-[280px] h-[280px] rounded-2xl overflow-hidden flex-shrink-0 border-2 border-[#c9a24e] bg-transparent"
              style={{ boxShadow: "0 0 0 4px rgba(201,162,78,0.15)" }}
            >
              <img
                src={aurelieImg}
                alt="Aurélie, fondatrice de Code Kaizen"
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 15%" }}
              />
            </div>
            <div className="max-w-xl text-center md:text-left">
              <h2 className="font-serif text-[2rem] md:text-[2.5rem] text-ivory mb-2 leading-tight">
                Aurélie
              </h2>
              <p className="text-[#c9a24e] text-sm md:text-base font-medium mb-6">
                Fondatrice &amp; Architecte de croissance, Code Kaizen
              </p>
              <div className="space-y-4 text-[#edeae2] text-[14px] md:text-[15px] leading-relaxed">
                <p>
                  J'ai fondé Code Kaizen après avoir observé le même blocage chez des dizaines de fondateurs B2B : une offre solide, un business qui tourne, et une acquisition qui s'arrête dès qu'ils s'arrêtent.
                </p>
                <p>
                  Avant Code Kaizen, j'ai construit et opéré des systèmes outbound B2B en tant que BDR puis architecte RevOps — sur des offres SaaS, conseil et ESN, avec des stacks Clay / Instantly / HubSpot. Je ne déploie pas des formules génériques. Je construis avec vous un système calibré sur votre ICP réel, votre cycle de vente, vos contraintes opérationnelles.
                </p>
                <p>
                  Je travaille en partenariat, pas en prestation. Votre pipeline est notre objectif commun.
                </p>
              </div>
            </div>
          </div>
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
            Chaque système est construit sur mesure. La logique et les automatisations sont documentées et vous sont transmises en fin de mission.
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
                  { s: "Développement commercial structuré", o: "Construire un flux outbound récurrent et prévisible", d: "60–90 jours", r: "Pipeline qualifié ≥ 3x votre mensuel actuel" },
                  { s: "Scaling des ventes", o: "Industrialiser l'acquisition sur plusieurs segments ICP", d: "90–120 jours", r: "Système autonome + équipe formée" },
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
          <p className="text-[#a0aec0] italic text-center mt-8 md:mt-10 text-[0.8rem] max-w-3xl mx-auto leading-relaxed">
            Code Kaizen n'intervient pas sur des offres en phase de recherche de product-market fit, des tickets inférieurs à 5 000 € par deal, ou des activités sans fondateur impliqué dans les premières semaines.
          </p>
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
            Basé sur les performances moyennes des missions opérées.
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
              800 EUR HT. Si nous démarrons une mission ensemble, ce montant est intégralement déduit de notre première facture de commission. Si vous ne continuez pas, vous conservez le livrable. Aucun engagement sur la suite.
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
                le retard structurel que vos concurrents qui construisent aujourd'hui auront sur vous dans 18 mois.
              </p>
            </div>
          </div>
          <button
            onClick={() => scrollTo("formulaire")}
            className="bg-gold text-ink px-6 py-[14px] sm:px-14 sm:py-6 rounded-[2px] font-bold text-[12px] sm:text-xs tracking-[0.15em] sm:tracking-luxe uppercase hover:bg-ivory transition-all duration-500 shadow-[var(--shadow-gold)]"
          >
            Réserver mon Diagnostic
          </button>
        </div>
      </section>

      {/* CE QUE CODE KAIZEN N'EST PAS */}
      <section className="py-16 md:py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory text-center mb-4 md:mb-6 leading-tight">
            Ce que Code Kaizen n'est pas
          </h2>
          <p className="text-[#a0aec0] text-center text-[0.875rem] mb-10 md:mb-16">
            Pour éviter de perdre du temps des deux côtés.
          </p>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-left">
            {[
              "Votre offre est encore en phase de validation marché. Nous construisons des systèmes d'acquisition, pas des outils de discovery produit.",
              "Votre ticket moyen est inférieur à 5 000 € par deal. Le modèle à la performance n'est pas viable en dessous de ce seuil pour les deux parties.",
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

      {/* FAQ */}
      <section className="py-16 md:py-32 px-6 md:px-10 bg-secondary/30">
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
      {/* FORMULAIRE */}
      <section id="formulaire" className="py-16 md:py-32 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-[1.3rem] md:text-[1.6rem] text-ivory mb-4 md:mb-6 leading-tight">
            Réservez votre Diagnostic
          </h2>
          <p className="text-[#a0aec0] text-[0.875rem] mb-10 md:mb-16">
            Quelques questions pour qualifier votre situation.
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
        </div>
      </footer>
    </div>
  );
};

export default Index;
