import { Layout } from "@/components/layout/Layout";
import { CategoryCard } from "@/components/CategoryCard";
import { Banknote, Thermometer, FileText, Sun, Receipt, HelpCircle, Search, PiggyBank, ShieldCheck, ArrowRight, Calculator, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { createQuestionSlug } from "@/components/FAQItem";

const categories = [
  {
    title: "Lön & ersättning",
    description: "OB-ersättning, semesterersättning, timlön och lön på röda dagar.",
    href: "/lon-ersattning",
    icon: Banknote,
    questionCount: 8,
  },
  {
    title: "Sjukdom & frånvaro",
    description: "Karensdag, sjuklön, sjukanmälan och sjukpenning.",
    href: "/sjukdom-franvaro",
    icon: Thermometer,
    questionCount: 11,
  },
  {
    title: "Kontrakt & rättigheter",
    description: "Uppsägningstid, anställningsavtal, arbetstider och schema.",
    href: "/kontrakt-rattigheter",
    icon: FileText,
    questionCount: 8,
  },
  {
    title: "Semester",
    description: "Semesterersättning, procentsatser och kalkylator.",
    href: "/semester",
    icon: Sun,
    questionCount: 7,
  },
  {
    title: "Skatt & utbetalning",
    description: "Preliminär skatt, jämkning, lönekalkylator.",
    href: "/skatt-utbetalning",
    icon: Receipt,
    questionCount: 6,
  },
  {
    title: "Praktiska situationer",
    description: "Graviditet, A-kassa, SGI och studier.",
    href: "/praktiska-situationer",
    icon: HelpCircle,
    questionCount: 7,
  },
  {
    title: "Pension & förmåner",
    description: "Tjänstepension, försäkringar och pensionskalkylator.",
    href: "/pension-formaner",
    icon: PiggyBank,
    questionCount: 5,
  },
];

// Alla sökbara frågor från alla undersidor
const allSearchableQuestions = [
  // Lön & ersättning
  { q: "Hur fungerar OB-ersättning för timanställda?", href: "/lon-ersattning", question: "Hur fungerar OB-ersättning för timanställda?" },
  { q: "Hur mycket är semesterersättning i procent för timanställda?", href: "/lon-ersattning", question: "Hur mycket är semesterersättning i procent för timanställda?" },
  { q: "Får timanställda lön på röda dagar?", href: "/lon-ersattning", question: "Får timanställda lön på röda dagar?" },
  { q: "När ska semesterersättning betalas ut?", href: "/lon-ersattning", question: "När ska semesterersättning betalas ut?" },
  { q: "Får jag lön som timanställd om jag är sjuk?", href: "/lon-ersattning", question: "Får jag lön som timanställd om jag är sjuk?" },
  { q: "När får man lön som timanställd?", href: "/lon-ersattning", question: "När får man lön som timanställd?" },
  { q: "Hur mycket OB får jag på kvällar och helger?", href: "/lon-ersattning", question: "Hur mycket OB får jag på kvällar och helger?" },
  { q: "Har jag rätt till övertidsersättning som timanställd?", href: "/lon-ersattning", question: "Har jag rätt till övertidsersättning som timanställd?" },

  // Sjukdom & frånvaro
  { q: "Vad är karensdag för timanställda?", href: "/sjukdom-franvaro", question: "Vad är karensdag för timanställda?" },
  { q: "Hur fungerar sjuklön för timanställda första dagen?", href: "/sjukdom-franvaro", question: "Hur fungerar sjuklön för timanställda första dagen?" },
  { q: "Vilka regler gäller för sjukanmälan som timanställd?", href: "/sjukdom-franvaro", question: "Vilka regler gäller för sjukanmälan som timanställd?" },
  { q: "Hur räknas karensavdraget för timanställda?", href: "/sjukdom-franvaro", question: "Hur räknas karensavdraget för timanställda?" },
  { q: "Behöver jag läkarintyg och när?", href: "/sjukdom-franvaro", question: "Behöver jag läkarintyg och när?" },
  { q: "Vad gäller efter dag 14 (sjukpenning)?", href: "/sjukdom-franvaro", question: "Vad gäller efter dag 14 (sjukpenning)?" },
  { q: "Får jag sjuklön om jag blir sjuk under ett pass?", href: "/sjukdom-franvaro", question: "Får jag sjuklön om jag blir sjuk under ett pass?" },
  { q: "Hur påverkar OB-ersättning sjuklönen?", href: "/sjukdom-franvaro", question: "Hur påverkar OB-ersättning sjuklönen?" },
  { q: "Gäller sjuklön om jag var bokad som vikarie?", href: "/sjukdom-franvaro", question: "Gäller sjuklön om jag var bokad som vikarie?" },
  { q: "Hur ansöker jag om sjukpenning som timanställd?", href: "/sjukdom-franvaro", question: "Hur ansöker jag om sjukpenning som timanställd?" },
  { q: "Tips för att undvika fel i sjuklönen", href: "/sjukdom-franvaro", question: "Tips för att undvika fel i sjuklönen" },

  // Kontrakt & rättigheter
  { q: "Vilken uppsägningstid har timanställda?", href: "/kontrakt-rattigheter", question: "Vilken uppsägningstid har timanställda?" },
  { q: "Kan man tacka nej till pass som timanställd?", href: "/kontrakt-rattigheter", question: "Kan man tacka nej till pass som timanställd?" },
  { q: "Hur många timmar får timanställda jobba?", href: "/kontrakt-rattigheter", question: "Hur många timmar får timanställda jobba?" },
  { q: "Har timanställda rätt till schema i förväg?", href: "/kontrakt-rattigheter", question: "Har timanställda rätt till schema i förväg?" },
  { q: "Vad ska stå i mitt anställningsavtal?", href: "/kontrakt-rattigheter", question: "Vad ska stå i mitt anställningsavtal?" },
  { q: "Har jag rätt till fast anställning efter en tid?", href: "/kontrakt-rattigheter", question: "Har jag rätt till fast anställning efter en tid?" },
  { q: "Vad gäller om arbetsgivaren ställer in mitt pass?", href: "/kontrakt-rattigheter", question: "Vad gäller om arbetsgivaren ställer in mitt pass?" },
  { q: "Har timanställda rätt till facklig representation?", href: "/kontrakt-rattigheter", question: "Har timanställda rätt till facklig representation?" },

  // Semester
  { q: "Hur räknas semesterersättning ut för timanställda?", href: "/semester", question: "Hur räknas semesterersättning ut för timanställda?" },
  { q: "Hur fungerar semester inom Handels för timanställda?", href: "/semester", question: "Hur fungerar semester inom Handels för timanställda?" },
  { q: "Hur fungerar semester för timanställda utan fasta timmar?", href: "/semester", question: "Hur fungerar semester för timanställda utan fasta timmar?" },
  { q: "När betalas semesterersättningen ut?", href: "/semester", question: "När betalas semesterersättningen ut?" },
  { q: "Kan jag ta ut betald semester som timanställd?", href: "/semester", question: "Kan jag ta ut betald semester som timanställd?" },
  { q: "Hur påverkar OB och andra tillägg semesterersättningen?", href: "/semester", question: "Hur påverkar OB och andra tillägg semesterersättningen?" },
  { q: "Vad händer med semesterersättningen om jag slutar?", href: "/semester", question: "Vad händer med semesterersättningen om jag slutar?" },

  // Skatt & utbetalning
  { q: "Hur fungerar preliminär skatt för timanställda?", href: "/skatt-utbetalning", question: "Hur fungerar preliminär skatt för timanställda?" },
  { q: "Varför dras så mycket skatt på timlön?", href: "/skatt-utbetalning", question: "Varför dras så mycket skatt på timlön?" },
  { q: "Vad är engångsskatt för timanställda?", href: "/skatt-utbetalning", question: "Vad är engångsskatt för timanställda?" },
  { q: "Hur ansöker jag om jämkning?", href: "/skatt-utbetalning", question: "Hur ansöker jag om jämkning?" },
  { q: "Vad är skattetabell och vilken har jag?", href: "/skatt-utbetalning", question: "Vad är skattetabell och vilken har jag?" },
  { q: "Hur påverkar jobbskatteavdraget min nettolön?", href: "/skatt-utbetalning", question: "Hur påverkar jobbskatteavdraget min nettolön?" },

  // Praktiska situationer
  { q: "Vilka rättigheter har jag som timanställd om jag blir gravid?", href: "/praktiska-situationer", question: "Vilka rättigheter har jag som timanställd om jag blir gravid?" },
  { q: "Hur fungerar A-kassa för timanställda?", href: "/praktiska-situationer", question: "Hur fungerar A-kassa för timanställda?" },
  { q: "Vad är SGI och hur påverkar det mig?", href: "/praktiska-situationer", question: "Vad är SGI och hur påverkar det mig?" },
  { q: "Kan jag få bostadsbidrag som timanställd?", href: "/praktiska-situationer", question: "Kan jag få bostadsbidrag som timanställd?" },
  { q: "Hur påverkar timanställning min pension?", href: "/praktiska-situationer", question: "Hur påverkar timanställning min pension?" },
  { q: "Vad händer om jag blir arbetslös som timanställd?", href: "/praktiska-situationer", question: "Vad händer om jag blir arbetslös som timanställd?" },
  { q: "Kan jag studera och jobba som timanställd samtidigt?", href: "/praktiska-situationer", question: "Kan jag studera och jobba som timanställd samtidigt?" },

  // Pension & förmåner
  { q: "Får timanställda tjänstepension?", href: "/pension-formaner", question: "Får timanställda tjänstepension?" },
  { q: "Vilka försäkringar omfattar timanställda?", href: "/pension-formaner", question: "Vilka försäkringar omfattar timanställda?" },
  { q: "Hur påverkar varierande inkomst min pension?", href: "/pension-formaner", question: "Hur påverkar varierande inkomst min pension?" },
  { q: "Har timanställda rätt till andra förmåner (friskvård, rabatter)?", href: "/pension-formaner", question: "Har timanställda rätt till andra förmåner (friskvård, rabatter)?" },
  { q: "Vad ska jag tänka på om jag har flera arbetsgivare?", href: "/pension-formaner", question: "Vad ska jag tänka på om jag har flera arbetsgivare?" },

  // Arbetsmiljö & säkerhet
  { q: "Vilka arbetsmiljörättigheter har timanställda?", href: "/arbetsmiljo-sakerhet", question: "Vilka arbetsmiljörättigheter har timanställda?" },
  { q: "Hur rapporterar jag en arbetsmiljöincident eller tillbud?", href: "/arbetsmiljo-sakerhet", question: "Hur rapporterar jag en arbetsmiljöincident eller tillbud?" },
  { q: "Får jag säga nej till farliga arbetsuppgifter?", href: "/arbetsmiljo-sakerhet", question: "Får jag säga nej till farliga arbetsuppgifter?" },
  { q: "Vilken skyddsutrustning har jag rätt till som timanställd?", href: "/arbetsmiljo-sakerhet", question: "Vilken skyddsutrustning har jag rätt till som timanställd?" },
  { q: "Hur hanteras hot och våld i arbetet?", href: "/arbetsmiljo-sakerhet", question: "Hur hanteras hot och våld i arbetet?" },
  { q: "Vad gör jag om arbetsgivaren ignorerar arbetsmiljöproblem?", href: "/arbetsmiljo-sakerhet", question: "Vad gör jag om arbetsgivaren ignorerar arbetsmiljöproblem?" },
  { q: "Har jag rätt till introduktion och utbildning?", href: "/arbetsmiljo-sakerhet", question: "Har jag rätt till introduktion och utbildning?" },

  // Schemaläggning & planering
  { q: "Hur kan jag planera min tillgänglighet som timanställd?", href: "/schemalaggning-planering", question: "Hur kan jag planera min tillgänglighet som timanställd?" },
  { q: "Vad gäller vid arbete med kort varsel?", href: "/schemalaggning-planering", question: "Vad gäller vid arbete med kort varsel?" },
  { q: "Hur undviker jag schemakrockar med flera arbetsgivare?", href: "/schemalaggning-planering", question: "Hur undviker jag schemakrockar med flera arbetsgivare?" },
  { q: "Kan jag kräva schema i förväg?", href: "/schemalaggning-planering", question: "Kan jag kräva schema i förväg?" },
  { q: "Hur planerar jag för återhämtning och dygnsvila?", href: "/schemalaggning-planering", question: "Hur planerar jag för återhämtning och dygnsvila?" },
  { q: "Vad gör jag om schemat ändras i sista minuten?", href: "/schemalaggning-planering", question: "Vad gör jag om schemat ändras i sista minuten?" },
  { q: "Har jag rätt att veta hur många timmar jag får nästa månad?", href: "/schemalaggning-planering", question: "Har jag rätt att veta hur många timmar jag får nästa månad?" },

  // Kalkylatorer
  { q: "Lönekalkylator för timanställda", href: "/skatt-utbetalning" },
  { q: "Semesterersättningskalkylator", href: "/semester" },
  { q: "Pensionskalkylator", href: "/pension-formaner" },
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
      <section className="hero-gradient relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        <div className="container-page py-20 sm:py-28 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground animate-slide-up leading-tight">
              Allt timanställda behöver veta
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-primary-foreground/85 max-w-2xl mx-auto animate-slide-up leading-relaxed">
              Lön, OB, semester, sjukdom, skatt och rättigheter – enkelt förklarat för dig som jobbar timmar.
            </p>

            {/* Search */}
            <div id="sok" className="mt-10 max-w-xl mx-auto animate-fade-in">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" />
                <Input
                  type="search"
                  placeholder="Sök bland alla frågor..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-base bg-card border-0 shadow-lg rounded-xl"
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
                                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-secondary transition-colors"
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
                                className="block px-3 py-2 rounded-lg hover:bg-secondary transition-colors text-sm"
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
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 animate-fade-in">
              <Link
                to="/skatt-utbetalning"
                className="btn-primary gap-2"
              >
                <Calculator className="h-4 w-4" />
                Lönekalkylator
              </Link>
              <Link
                to="/kontrakt-rattigheter"
                className="inline-flex items-center justify-center text-sm font-medium px-5 py-2.5 rounded-lg bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/20 shadow-sm transition-all hover:bg-primary-foreground/25 gap-2"
              >
                <BookOpen className="h-4 w-4" />
                Dina rättigheter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tools Section */}
      <section className="bg-card border-b border-border">
        <div className="container-page py-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm text-muted-foreground mr-1">Kalkylatorer:</span>
            <Link to="/skatt-utbetalning" className="chip gap-1.5">
              <Calculator className="h-3.5 w-3.5" />
              Nettolön
            </Link>
            <Link to="/semester" className="chip gap-1.5">
              <Sun className="h-3.5 w-3.5" />
              Semesterersättning
            </Link>
            <Link to="/pension-formaner" className="chip gap-1.5">
              <PiggyBank className="h-3.5 w-3.5" />
              Tjänstepension
            </Link>
          </div>
        </div>
      </section>

      {/* SEO text section: Vad innebär timanställning? */}
      <section className="bg-secondary/30">
        <div className="container-page py-10 sm:py-12">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center">Vad innebär timanställning?</h2>
          <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base text-muted-foreground leading-relaxed text-center">
            Timanställning innebär att du får timlön för bekräftade pass i stället för fast månadslön. Som timanställd
            påverkas din inkomst av hur många timmar du arbetar och om du har OB-ersättning för kväll, helg eller
            natt. Du får semesterersättning i procent på din bruttolön, normalt 12%, och sjuklön vid sjukanmälan för
            pass enligt lag och avtal.
          </p>
          {/* Internlänkar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <Link to="/lon-ersattning" className="chip">
              Lön & ersättning
            </Link>
            <Link to="/semester" className="chip">
              Semesterersättning
            </Link>
            <Link to="/sjukdom-franvaro" className="chip">
              Sjuklön & frånvaro
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      <section className="bg-card border-y border-border">
        <div className="container-page py-8">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide text-center mb-4">Populära frågor</h3>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {popularQuestions.slice(0, 6).map((item) => (
              <Link
                key={item.q}
                to={item.href}
                className="chip"
              >
                {item.q}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Välj ett ämne</h2>
            <p className="mt-2 text-muted-foreground">Klicka på en kategori för att se alla frågor och svar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-secondary/30 border-t border-border">
        <div className="container-page section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground">Varför timanställd.se?</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Som timanställd kan det vara svårt att hitta tydliga svar på frågor om dina rättigheter och skyldigheter.
              Vi har samlat den viktigaste informationen på ett ställe – enkelt och lättförståeligt.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <div className="text-3xl font-bold text-primary font-display">50+</div>
                <div className="mt-2 text-sm text-muted-foreground">Vanliga frågor besvarade</div>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <div className="text-3xl font-bold text-primary font-display">7</div>
                <div className="mt-2 text-sm text-muted-foreground">Olika ämnesområden</div>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <div className="text-3xl font-bold text-primary font-display">100%</div>
                <div className="mt-2 text-sm text-muted-foreground">Gratis att använda</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
