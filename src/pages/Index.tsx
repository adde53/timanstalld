import { Layout } from "@/components/layout/Layout";
import { CategoryCard } from "@/components/CategoryCard";
import {
  Banknote,
  Thermometer,
  FileText,
  Sun,
  Receipt,
  HelpCircle,
  Search,
  PiggyBank,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Lön & ersättning",
    description:
      "OB-ersättning, semesterersättning, lön på röda dagar och sjukdagar.",
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
    description:
      "Uppsägningstid, tacka nej till pass, arbetstid och rätt till schema.",
    href: "/kontrakt-rattigheter",
    icon: FileText,
    questionCount: 4,
  },
  {
    title: "Semester",
    description:
      "Beräkning av semesterersättning, handels-regler och semester utan fasta timmar.",
    href: "/semester",
    icon: Sun,
    questionCount: 3,
  },
  {
    title: "Skatt & utbetalning",
    description:
      "Preliminär skatt, varför så mycket skatt dras och engångsskatt.",
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

const popularQuestions = [
  { q: "OB-ersättning för timanställda – så funkar det", href: "/lon-ersattning" },
  { q: "Semesterersättning timanställd – procent & exempel", href: "/lon-ersattning" },
  { q: "Får timanställda lön på röda dagar?", href: "/lon-ersattning/" },
  { q: "Sjuklön timanställd första dagen", href: "/sjukdom-franvaro" },
  { q: "Kalkyl: semesterersättning", href: "/semester" },
  { q: "Kalkyl: skatt & nettolön", href: "/skatt-utbetalning" },
  { q: "Kalkyl: tjänstepension", href: "/pension-formaner" },
];

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
      cat.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter popular questions
  const filteredQuestions = popularQuestions.filter((q) =>
    q.q.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Sök bland alla ämnen och frågor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-base bg-card border-0 shadow-lg"
              />
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
          <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center">
            Vad innebär timanställning?
          </h2>
          <p className="mt-3 max-w-3xl mx-auto text-sm sm:text-base text-muted-foreground leading-relaxed text-center">
            Timanställning innebär att du får timlön för bekräftade pass i stället för fast månadslön. Som
            timanställd lön påverkas din inkomst av hur många timmar du arbetar och om du har OB-ersättning för
            kväll, helg eller natt. Du får semesterersättning i procent på din bruttolön, normalt 12%, och
            sjuklön vid sjukanmälan för pass enligt lag och avtal. Uppsägningstid kan variera beroende på
            överenskommelse och kollektivavtal. För att få ut rätt lön, se till att stämma av lönespecifikationer,
            förstå skatteavdrag (preliminär skatt och eventuell jämkning) och kontrollera vilka försäkringar och
            förmåner som ingår. Här hittar du tydliga svar om lön, OB, semesterersättning, sjuklön, skatt och
            rättigheter – allt för dig som är timanställd i Sverige.
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
              to="/lon-ersattning/ob-ersattning-timanstalld"
              className="inline-flex items-center justify-center text-sm font-medium px-4 py-2 rounded-full bg-card border border-border shadow-sm hover:border-primary hover:text-primary hover:bg-accent/30 transition-all"
            >
              Läs också: OB-ersättning för timanställda
            </Link>
            <Link
              to="/lon-ersattning/semesterersattning-timanstalld"
              className="inline-flex items-center justify-center text-sm font-medium px-4 py-2 rounded-full bg-card border border-border shadow-sm hover:border-primary hover:text-primary hover:bg-accent/30 transition-all"
            >
              Läs också: Semesterersättning timanställd
            </Link>
          </div>
        </div>
      </section>

      {/* Search Results */}
      {showSearchResults && (
        <section className="bg-secondary/50">
          <div className="container-page py-6">
            {filteredCategories.length === 0 && filteredQuestions.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">
                  Inga resultat hittades för "{searchQuery}"
                </p>
              </div>
            ) : (
              <>
                {filteredCategories.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Kategorier</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filteredCategories.map((category) => (
                        <CategoryCard key={category.title} {...category} />
                      ))}
                    </div>
                  </div>
                )}
                {filteredQuestions.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Frågor</h3>
                    <ul className="space-y-2">
                      {filteredQuestions.map((item) => (
                        <li key={item.q}>
                          <Link
                            to={item.href}
                            className="text-primary hover:underline"
                          >
                            {item.q}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      )}

      {/* Only show rest of the page if not searching */}
      {!showSearchResults && (
        <>
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
                <span className="text-sm font-medium text-muted-foreground">
                  Populära frågor:
                </span>
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
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Välj ett ämne
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Klicka på en kategori för att se alla frågor och svar
                </p>
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
                <h2 className="text-2xl font-bold text-foreground">
                  Varför timanställd.se?
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Som timanställd kan det vara svårt att hitta tydliga svar på
                  frågor om dina rättigheter och skyldigheter. Vi har samlat den
                  viktigaste informationen på ett ställe – enkelt och lättförståeligt.
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="p-4">
                    <div className="text-3xl font-bold text-primary">20+</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      Vanliga frågor besvarade
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-3xl font-bold text-primary">6</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      Olika ämnesområden
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      Gratis att använda
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </Layout>
  );
}

