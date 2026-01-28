import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { FAQSection, FAQItemData } from "@/components/FAQItem";
import { Sun } from "lucide-react";
import { SemesterKalkylator } from "@/components/SemesterKalkylator";
import { FAQSchema } from "@/components/SEO/FAQSchema";
import { Link } from "react-router-dom";

const faqs: FAQItemData[] = [
  {
    question: "Hur räknas semesterersättning ut för timanställda?",
    answer:
      "Semesterersättningen beräknas som en procentsats av din bruttolön. Enligt lag är den 12%, men kan vara högre enligt kollektivavtal. Beräkningen: din totala bruttolön (inklusive OB och andra tillägg) × 12% = din semesterersättning. Om du till exempel tjänat 50 000 kr brutto under året blir ersättningen 6 000 kr. Många arbetsgivare betalar ut detta löpande varje månad.",
  },
  {
    question: "Hur fungerar semester inom Handels för timanställda?",
    answer:
      "Inom Handelsavtalet har timanställda rätt till semesterersättning på minst 12% av lönen. Du tjänar in rätt till semesterdagar baserat på hur mycket du arbetat under intjänandeåret (1 april - 31 mars). För att få full semester (25 dagar) ska du ha arbetat hela intjänandeåret. Annars får du dagar i proportion till arbetad tid. Kontakta Handelsanställdas förbund för detaljerad info.",
  },
  {
    question: "Hur fungerar semester för timanställda utan fasta timmar?",
    answer:
      "Även utan fasta timmar har du rätt till semesterersättning på din intjänade lön. Eftersom du inte har garanterade timmar kan det vara svårt att ta ut betald semester på specifika dagar – du har helt enkelt inga 'vanliga' arbetspass att vara ledig från. Istället får du semesterersättning (12% eller mer) utbetald, antingen löpande eller när anställningen avslutas. Det är din ekonomiska kompensation för semester.",
  },
  {
    question: "När betalas semesterersättningen ut?",
    answer:
      "Semesterersättningen ska enligt lag betalas ut senast en månad efter anställningens slut. Många arbetsgivare väljer dock att betala ut den löpande med varje löneutbetalning, vilket är vanligt för timanställda. Kolla din lönespecifikation för att se om semesterersättning ingår varje månad.",
  },
  {
    question: "Kan jag ta ut betald semester som timanställd?",
    answer:
      "Det beror på din anställningsform. Om du har garanterade timmar kan du ofta ta ut betalda semesterdagar. Men om du arbetar 'vid behov' utan fasta timmar får du normalt semesterersättning utbetald istället för lediga dagar med lön. Prata med din arbetsgivare om vad som gäller för dig.",
  },
  {
    question: "Hur påverkar OB och andra tillägg semesterersättningen?",
    answer:
      "Semesterersättningen beräknas på din totala bruttolön, inklusive OB-tillägg, övertidsersättning och andra lönetillägg. Detta innebär att om du ofta jobbar obekväma arbetstider får du högre semesterersättning. Kontrollera att alla tillägg finns med i underlaget.",
  },
  {
    question: "Vad händer med semesterersättningen om jag slutar?",
    answer:
      "När anställningen avslutas ska all intjänad men ännu ej utbetald semesterersättning betalas ut. Detta ska ske senast en månad efter sista arbetsdagen. Spara dina lönespecifikationer så att du kan kontrollera att rätt belopp betalas ut.",
  },
];

export default function Semester() {
  return (
    <Layout>
      <PageHeader
        title="Semester & semesterersättning"
        description="Hur semesterersättning beräknas, procentsatser, utbetalning och regler för timanställda."
        icon={Sun}
      />
      <section className="section-padding">
        <div className="container-page">
          {/* Intro */}
          <div className="bg-card rounded-xl p-6 sm:p-8 border border-border mb-6">
            <h2 className="text-lg font-semibold mb-2">Så fungerar semester för timanställda</h2>
            <p className="text-muted-foreground text-sm">
              Som timanställd har du alltid rätt till semesterersättning – minst 12% av din bruttolön enligt lagen. 
              Ersättningen betalas ofta ut löpande varje månad eller samlat när anställningen upphör. 
              Använd kalkylatorn nedan för att räkna ut din semesterersättning.
            </p>
          </div>

          {/* Kalkylator */}
          <SemesterKalkylator />

          {/* FAQ */}
          <div className="bg-card rounded-xl p-6 sm:p-8 border border-border mt-6">
            <h2 className="text-lg font-semibold mb-4">Vanliga frågor om semester</h2>
            <FAQSection items={faqs} />
          </div>

          {/* Relaterade sidor */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/lon-ersattning"
              className="inline-flex items-center justify-center text-sm font-medium px-4 py-2 rounded-full bg-card border border-border shadow-sm hover:border-primary hover:text-primary hover:bg-accent/30 transition-all"
            >
              Lön & ersättning
            </Link>
            <Link
              to="/skatt-utbetalning"
              className="inline-flex items-center justify-center text-sm font-medium px-4 py-2 rounded-full bg-card border border-border shadow-sm hover:border-primary hover:text-primary hover:bg-accent/30 transition-all"
            >
              Skatt & utbetalning
            </Link>
          </div>
        </div>
      </section>
      <FAQSchema items={faqs} />
    </Layout>
  );
}
