import { Layout } from "@/components/layout/Layout";
import { CategoryCard } from "@/components/CategoryCard";
import { Banknote, Thermometer, FileText, Sun, Receipt, HelpCircle, Search, PiggyBank } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { createQuestionSlug } from "@/components/FAQItem";

const categories = [
  {
    title: "Lön & ersättning",
    description: "OB-ersättning, semesterersättning, lön på röda dagar och sjukdagar.",
    href: "/lon-ersattning",
    icon: Banknote,
    questionCount: 5,
  },
  {
    title: "Sjukdom & frånvaro",
    description: "Karensdag, sjuklön första dagen och regler för sjukanmälan.",
    href: "/sjukdom-franvaro",
    icon: Thermometer,
    questionCount: 3,
  },
  {
    title: "Kontrakt & rättigheter",
    description: "Uppsägningstid, tacka nej till pass, arbetstid och rätt till schema.",
    href: "/kontrakt-rattigheter",
    icon: FileText,
    questionCount: 4,
  },
  {
    title: "Semester",
    description: "Beräkning av semesterersättning, handels-regler och semester utan fasta timmar.",
    href: "/semester",
    icon: Sun,
    questionCount: 3,
  },
  {
    title: "Skatt & utbetalning",
    description: "Preliminär skatt, varför så mycket skatt dras och engångsskatt.",
    href: "/skatt-utbetalning",
    icon: Receipt,
    questionCount: 3,
  },
  {
    title: "Praktiska situationer",
    description: "Graviditet som timanställd och hur A-kassa fungerar.",
    href: "/praktiska-situationer",
    icon: HelpCircle,
    questionCount: 2,
  },
  {
    title: "Pension & förmåner",
    description: "Tjänstepension, försäkringar och förmåner som timanställd.",
    href: "/pension-formaner",
    icon: PiggyBank,
    questionCount: 5,
  },
];

// Alla sökbara frågor från alla undersidor
const allSearchableQuestions = [
  // Lön & ersättning
  {
    q: "Hur fungerar OB-ersättning för timanställda?",
    href: "/lon-ersattning",
    question: "Hur fungerar OB-ersättning för timanställda?",
  },
  {
    q: "Hur mycket är semesterersättning i procent för timanställda?",
    href: "/lon-ersattning",
    question: "Hur mycket är semesterersättning i procent för timanställda?",
  },
  {
    q: "Får timanställda lön på röda dagar?",
    href: "/lon-ersattning",
    question: "Får timanställda lön på röda dagar?",
  },
  {
    q: "När ska semesterersättning betalas ut?",
    href: "/lon-ersattning",
    question: "När ska semesterersättning betalas ut?",
  },
  {
    q: "Får jag lön som timanställd om jag är sjuk?",
    href: "/lon-ersattning",
    question: "Får jag lön som timanställd om jag är sjuk?",
  },
  { q: "När får man lön som timanställd?", href: "/lon-ersattning", question: "När får man lön som timanställd?" },

  // Sjukdom & frånvaro
  {
    q: "Vad är karensdag för timanställda?",
    href: "/sjukdom-franvaro",
    question: "Vad är karensdag för timanställda?",
  },
  {
    q: "Hur fungerar sjuklön för timanställda första dagen?",
    href: "/sjukdom-franvaro",
    question: "Hur fungerar sjuklön för timanställda första dagen?",
  },
  {
    q: "Vilka regler gäller för sjukanmälan som timanställd?",
    href: "/sjukdom-franvaro",
    question: "Vilka regler gäller för sjukanmälan som timanställd?",
  },
  {
    q: "Hur räknas karensavdraget för timanställda?",
    href: "/sjukdom-franvaro",
    question: "Hur räknas karensavdraget för timanställda?",
  },
  { q: "Behöver jag läkarintyg och när?", href: "/sjukdom-franvaro", question: "Behöver jag läkarintyg och när?" },
  {
    q: "Vad gäller efter dag 14 (sjukpenning)?",
    href: "/sjukdom-franvaro",
    question: "Vad gäller efter dag 14 (sjukpenning)?",
  },
  {
    q: "Får jag sjuklön om jag blir sjuk under ett pass?",
    href: "/sjukdom-franvaro",
    question: "Får jag sjuklön om jag blir sjuk under ett pass?",
  },
  {
    q: "Hur påverkar OB-ersättning sjuklönen?",
    href: "/sjukdom-franvaro",
    question: "Hur påverkar OB-ersättning sjuklönen?",
  },
  {
    q: "Gäller sjuklön om jag var bokad som vikarie?",
    href: "/sjukdom-franvaro",
    question: "Gäller sjuklön om jag var bokad som vikarie?",
  },
  {
    q: "Hur ansöker jag om sjukpenning som timanställd?",
    href: "/sjukdom-franvaro",
    question: "Hur ansöker jag om sjukpenning som timanställd?",
  },
  {
    q: "Tips för att undvika fel i sjuklönen",
    href: "/sjukdom-franvaro",
    question: "Tips för att undvika fel i sjuklönen",
  },

  // Kontrakt & rättigheter
  {
    q: "Vilken uppsägningstid har timanställda?",
    href: "/kontrakt-rattigheter",
    question: "Vilken uppsägningstid har timanställda?",
  },
  {
    q: "Kan man tacka nej till pass som timanställd?",
    href: "/kontrakt-rattigheter",
    question: "Kan man tacka nej till pass som timanställd?",
  },
  {
    q: "Hur många timmar får timanställda jobba?",
    href: "/kontrakt-rattigheter",
    question: "Hur många timmar får timanställda jobba?",
  },
  {
    q: "Har timanställda rätt till schema i förväg?",
    href: "/kontrakt-rattigheter",
    question: "Har timanställda rätt till schema i förväg?",
  },

  // Semester
  {
    q: "Hur räknas semesterersättning ut för timanställda?",
    href: "/semester",
    question: "Hur räknas semesterersättning ut för timanställda?",
  },
  {
    q: "Hur fungerar semester inom Handels för timanställda?",
    href: "/semester",
    question: "Hur fungerar semester inom Handels för timanställda?",
  },
  {
    q: "Hur fungerar semester för timanställda utan fasta timmar?",
    href: "/semester",
    question: "Hur fungerar semester för timanställda utan fasta timmar?",
  },
  {
    q: "Vad är semesterersättning?",
    href: "/semester",
    question: "Vad är semesterersättning?",
  },
  {
    q: "Hur räknar man procenten?",
    href: "/semester",
    question: "Hur räknar man procenten?",
  },
  {
    q: "När betalas semesterersättning ut?",
    href: "/semester",
    question: "När betalas semesterersättning ut?",
  },
  {
    q: "Gäller olika procentsats i olika branscher?",
    href: "/semester",
    question: "Gäller olika procentsats i olika branscher?",
  },

  // Skatt & utbetalning
  {
    q: "Hur fungerar preliminär skatt för timanställda?",
    href: "/skatt-utbetalning",
    question: "Hur fungerar preliminär skatt för timanställda?",
  },
  {
    q: "Varför dras så mycket skatt på timlön?",
    href: "/skatt-utbetalning",
    question: "Varför dras så mycket skatt på timlön?",
  },
  {
    q: "Vad är engångsskatt för timanställda?",
    href: "/skatt-utbetalning",
    question: "Vad är engångsskatt för timanställda?",
  },

  // Praktiska situationer
  {
    q: "Vilka rättigheter har jag som timanställd om jag blir gravid?",
    href: "/praktiska-situationer",
    question: "Vilka rättigheter har jag som timanställd om jag blir gravid?",
  },
  {
    q: "Hur fungerar A-kassa för timanställda?",
    href: "/praktiska-situationer",
    question: "Hur fungerar A-kassa för timanställda?",
  },

  // Pension & förmåner
  { q: "Får timanställda tjänstepension?", href: "/pension-formaner", question: "Får timanställda tjänstepension?" },
  {
    q: "Vilka försäkringar omfattar timanställda?",
    href: "/pension-formaner",
    question: "Vilka försäkringar omfattar timanställda?",
  },
  {
    q: "Hur påverkar varierande inkomst min pension?",
    href: "/pension-formaner",
    question: "Hur påverkar varierande inkomst min pension?",
  },
  {
    q: "Har timanställda rätt till andra förmåner (friskvård, rabatter)?",
    href: "/pension-formaner",
    question: "Har timanställda rätt till andra förmåner (friskvård, rabatter)?",
  },
  {
    q: "Vad ska jag tänka på om jag har flera arbetsgivare?",
    href: "/pension-formaner",
    question: "Vad ska jag tänka på om jag har flera arbetsgivare?",
  },

  // Arbetsmiljö & säkerhet
  {
    q: "Vilka arbetsmiljörättigheter har timanställda?",
    href: "/arbetsmiljo-sakerhet",
    question: "Vilka arbetsmiljörättigheter har timanställda?",
  },
  {
    q: "Hur rapporterar jag en arbetsmiljöincident eller tillbud?",
    href: "/arbetsmiljo-sakerhet",
    question: "Hur rapporterar jag en arbetsmiljöincident eller tillbud?",
  },
  {
    q: "Får jag säga nej till farliga arbetsuppgifter?",
    href: "/arbetsmiljo-sakerhet",
    question: "Får jag säga nej till farliga arbetsuppgifter?",
  },
  {
    q: "Vilken skyddsutrustning har jag rätt till som timanställd?",
    href: "/arbetsmiljo-sakerhet",
    question: "Vilken skyddsutrustning har jag rätt till som timanställd?",
  },
  {
    q: "Hur hanteras hot och våld i arbetet?",
    href: "/arbetsmiljo-sakerhet",
    question: "Hur hanteras hot och våld i arbetet?",
  },

  // Schemaläggning & planering
  {
    q: "Hur kan jag planera min tillgänglighet som timanställd?",
    href: "/schemalaggning-planering",
    question: "Hur kan jag planera min tillgänglighet som timanställd?",
  },
  {
    q: "Vad gäller vid arbete med kort varsel?",
    href: "/schemalaggning-planering",
    question: "Vad gäller vid arbete med kort varsel?",
  },
  {
    q: "Hur undviker jag schemakrockar med flera arbetsgivare?",
    href: "/schemalaggning-planering",
    question: "Hur undviker jag schemakrockar med flera arbetsgivare?",
  },
  { q: "Kan jag kräva schema i förväg?", href: "/schemalaggning-planering", question: "Kan jag kräva schema i förväg?" },
  {
    q: "Hur planerar jag för återhämtning och dygnsvila?",
    href: "/schemalaggning-planering",
    question: "Hur planerar jag för återhämtning och dygnsvila?",
  },

  // Röda dagar
  {
    q: "Får timanställda lön på röda dagar?",
    href: "/lon-ersattning",
    question: "Får timanställda lön på röda dagar?",
  },
  {
    q: "Vad gäller vid inställt pass på röd dag?",
    href: "/lon-ersattning",
    question: "Vad gäller vid inställt pass på röd dag?",
  },
  {
    q: "Finns OB på röda dagar?",
    href: "/lon-ersattning",
    question: "Finns OB på röda dagar?",
  },
  {
    q: "Hur ser jag om jag får helglön?",
    href: "/lon-ersattning",
    question: "Hur ser jag om jag får helglön?",
  },

  // Kalkylatorer (utan hash-navigering)
  { q: "Kalkyl: semesterersättning", href: "/semester" },
  { q: "Kalkyl: skatt & nettolön", href: "/skatt-utbetalning" },
  { q: "Kalkyl: tjänstepension", href: "/pension-formaner" },
];

// Populära frågor för visning på startsidan
const popularQuestions = allSearchableQuestions.slice(0, 10);

// Helper to build href with optional hash
const buildQuestionHref = (item: { href: string; question?: string }) => {
  if (item.question) {
    return `${item.href}#${createQuestionSlug(item.question)}`;
  }
  return item.href;
};

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");

  const relatedLinks = [
    { q: "Lön & pengar – översikt", href: "/lon-ersattning" },
    { q: "OB-ersättning – så funkar det", href: "/lon-ersattning" },
    { q: "Semesterersättning – procent & exempel", href: "/lon-ersattning" },
  ];

  // Filter categories
  const filteredCategories = categories.filter(
    (cat) =>
      cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Filter all searchable questions
  const filteredQuestions = allSearchableQuestions.filter((q) => q.q.toLowerCase().includes(searchQuery.toLowerCase()));

  const showSearchResults = searchQuery.length > 0;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient">
        <div className="container-page py-16 sm:py-24 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground animate-slide-up">
            Allt timanställda behöver veta – enkelt förklarat
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto animate-slide-up">
            Lön, OB, semester, sjukdom, skatt och rättigheter för dig som är timanställd i Sverige.
          </p>

          {/* CTA buttons */}
          <div className="mt-6 flex items-center justify-center gap-3 animate-fade-in">
            <a
              href="#sok"
              className="
                inline-flex items-center justify-center
                text-sm font-medium
                px-5 py-3 rounded-full
                bg-card border border-border
                shadow-sm
                hover:border-primary hover:text-primary hover:bg-accent/30
                focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background
                active:scale-[0.98]
                transition-all
              "
            >
              Sök bland vanliga frågor
            </a>
            <Link
              to="/lon-ersattning"
              className="
                inline-flex items-center justify-center
                text-sm font-medium
                px-5 py-3 rounded-full
                bg-primary text-primary-foreground
                shadow-sm
                hover:bg-primary/90
                focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background
                active:scale-[0.98]
                transition-all
              "
            >
              Räkna ut din ersättning
            </Link>
          </div>

          {/* Search */}
          <div id="sok" className="mt-8 max-w-xl mx-auto animate-fade-in">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" />
              <Input
                type="search"
                placeholder="Sök bland alla ämnen och frågor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-base bg-card border-0 shadow-lg"
              />
              {/* Search Results Dropdown */}
              {showSearchResults && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-xl z-50 max-h-80 overflow-y-auto">
                  {filteredCategories.length === 0 && filteredQuestions.length === 0 ? (
                    <div className="p-4 text-center text-muted-foreground">
                      Inga resultat hittades för "{searchQuery}"
                    </div>
                  ) : (
                    <div className="p-2">
                      {filteredCategories.length > 0 && (
                        <div className="mb-2">
                          <div className="px-3 py-1 text-xs font-semibold text-muted-foreground uppercase">
                            Kategorier
                          </div>
                          {filteredCategories.map((category) => (
                            <Link
                              key={category.title}
                              to={category.href}
                              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent/50 transition-colors"
                              onClick={() => setSearchQuery("")}
                            >
                              <category.icon className="h-4 w-4 text-primary" />
                              <div>
                                <div className="font-medium text-sm">{category.title}</div>
                                <div className="text-xs text-muted-foreground line-clamp-1">{category.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                      {filteredQuestions.length > 0 && (
                        <div>
                          <div className="px-3 py-1 text-xs font-semibold text-muted-foreground uppercase">Frågor</div>
                          {filteredQuestions.map((item) => (
                            <Link
                              key={item.q}
                              to={buildQuestionHref(item)}
                              className="block px-3 py-2 rounded-lg hover:bg-accent/50 transition-colors text-sm"
                              onClick={() => setSearchQuery("")}
                            >
                              {item.q}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Snabbverktyg: direkt under sökfältet */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/skatt-utbetalning"
                className="
                  inline-flex items-center justify-center
                  text-sm font-medium
                  px-5 py-3 rounded-full
                  bg-primary text-primary-foreground
                  shadow-sm
                  hover:bg-primary/90
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background
                  active:scale-[0.98]
                  transition-all
                "
                aria-label="Öppna lönekalkylatorn (nett﻿olön)"
              >
                Öppna lönekalkylatorn
              </Link>
              <Link
                to="/semester"
                className="
                  inline-flex items-center justify-center
                  text-sm font-medium
                  px-5 py-3 rounded-full
                  bg-card border border-border
                  shadow-sm
                  hover:border-primary hover:text-primary hover:bg-accent/30
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background
                  active:scale-[0.98]
                  transition-all
                "
                aria-label="Räkna ut semesterersättning"
              >
                Räkna ut semesterersättning
              </Link>
              <Link
                to="/pension-formaner"
                className="
                  inline-flex items-center justify-center
                  text-sm font-medium
                  px-5 py-3 rounded-full
                  bg-card border border-border
                  shadow-sm
                  hover:border-primary hover:text-primary hover:bg-accent/30
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background
                  active:scale-[0.98]
                  transition-all
                "
                aria-label="Räkna ut tjänstepension"
              >
                Räkna ut tjänstepension
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO text section: Vad innebär timanställning? */}
      <section className="bg-card border-t border-border">
        <div className="container-page py-8">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center">Vad innebär timanställning?</h2>
          <p className="mt-3 max-w-3xl mx-auto text-sm sm:text-base text-muted-foreground leading-relaxed text-center">
            Timanställning innebär att du får timlön för bekräftade pass i stället för fast månadslön. Som timanställd
            lön påverkas din inkomst av hur många timmar du arbetar och om du har OB-ersättning för kväll, helg eller
            natt. Du får semesterersättning i procent på din bruttolön, normalt 12%, och sjuklön vid sjukanmälan för
            pass enligt lag och avtal. Uppsägningstid kan variera beroende på överenskommelse och kollektivavtal. För
            att få ut rätt lön, se till att stämma av lönespecifikationer, förstå skatteavdrag (preliminär skatt och
            eventuell jämkning) och kontrollera vilka försäkringar och förmåner som ingår. Här hittar du tydliga svar om
            lön, OB, semesterersättning, sjuklön, skatt och rättigheter – allt för dig som är timanställd i Sverige.
          </p>
          {/* Internlänkar: pillar + relaterade */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/lon-ersattning"
              className="inline-flex items-center justify-center text-sm font-medium px-4 py-2 rounded-full bg-card border border-border shadow-sm hover:border-primary hover:text-primary hover:bg-accent/30 transition-all"
            >
              Läs också: Lön & ersättning
            </Link>
            <Link
              to="/lon-ersattning"
              className="inline-flex items-center justify-center text-sm font-medium px-4 py-2 rounded-full bg-card border border-border shadow-sm hover:border-primary hover:text-primary hover:bg-accent/30 transition-all"
            >
              Läs också: OB-ersättning för timanställda
            </Link>
            <Link
              to="/semester"
              className="inline-flex items-center justify-center text-sm font-medium px-4 py-2 rounded-full bg-card border border-border shadow-sm hover:border-primary hover:text-primary hover:bg-accent/30 transition-all"
            >
              Läs också: Semesterersättning timanställd
            </Link>
          </div>
        </div>
      </section>

      {/* Snabbverktyg: lönekalkylator mm */}
      <section className="bg-card border-t border-border">
        <div className="container-page py-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/skatt-utbetalning"
              className="
                    inline-flex items-center justify-center
                    text-sm font-medium
                    px-5 py-3 rounded-full
                    bg-primary text-primary-foreground
                    shadow-sm
                    hover:bg-primary/90
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background
                    active:scale-[0.98]
                    transition-all
                  "
              aria-label="Räkna ut nettolön (skatt)"
            >
              Räkna ut nettolön (skatt)
            </Link>
            <Link
              to="/semester"
              className="
                    inline-flex items-center justify-center
                    text-sm font-medium
                    px-5 py-3 rounded-full
                    bg-card border border-border
                    shadow-sm
                    hover:border-primary hover:text-primary hover:bg-accent/30
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background
                    active:scale-[0.98]
                    transition-all
                  "
              aria-label="Räkna ut semesterersättning"
            >
              Räkna ut semesterersättning
            </Link>
            <Link
              to="/pension-formaner"
              className="
                    inline-flex items-center justify-center
                    text-sm font-medium
                    px-5 py-3 rounded-full
                    bg-card border border-border
                    shadow-sm
                    hover:border-primary hover:text-primary hover:bg-accent/30
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background
                    active:scale-[0.98]
                    transition-all
                  "
              aria-label="Räkna ut tjänstepension"
            >
              Räkna ut tjänstepension
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      <section className="bg-secondary/50">
        <div className="container-page py-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">Populära frågor:</span>
            {popularQuestions.map((item) => (
              <Link
                key={item.q}
                to={item.href}
                className="
                      inline-flex items-center justify-center
                      text-sm font-medium
                      px-4 py-2 rounded-full
                      bg-card border border-border
                      shadow-sm
                      hover:border-primary hover:text-primary hover:bg-accent/30
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background
                      active:scale-[0.98]
                      transition-all
                    "
                aria-label={item.q}
              >
                {item.q}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Välj ett ämne</h2>
            <p className="mt-2 text-muted-foreground">Klicka på en kategori för att se alla frågor och svar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold text-foreground text-center">
              Relaterade frågor timanställda ofta googlar
            </h3>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              {relatedLinks.map((item) => (
                <Link
                  key={item.q}
                  to={item.href}
                  className="
                        inline-flex items-center justify-center
                        text-sm font-medium
                        px-4 py-2 rounded-full
                        bg-card border border-border
                        shadow-sm
                        hover:border-primary hover:text-primary hover:bg-accent/30
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background
                        active:scale-[0.98]
                        transition-all
                      "
                  aria-label={item.q}
                >
                  {item.q}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-card border-t border-border">
        <div className="container-page section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground">Varför timanställd.se?</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Som timanställd kan det vara svårt att hitta tydliga svar på frågor om dina rättigheter och skyldigheter.
              Vi har samlat den viktigaste informationen på ett ställe – enkelt och lättförståeligt.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-4">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="mt-1 text-sm text-muted-foreground">Vanliga frågor besvarade</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-primary">6</div>
                <div className="mt-1 text-sm text-muted-foreground">Olika ämnesområden</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="mt-1 text-sm text-muted-foreground">Gratis att använda</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
