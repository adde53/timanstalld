import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { FAQSection, FAQItemData } from "@/components/FAQItem";
import { Sun } from "lucide-react";
import { SemesterKalkylator } from "@/components/SemesterKalkylator";

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
];

export default function Semester() {
  return (
    <Layout>
      <PageHeader
        title="Semester"
        description="Hur semesterersättning beräknas, regler inom Handels och semester när du inte har fasta arbetstider."
        icon={Sun}
      />
      <section className="section-padding">
        <div className="container-page">
          <div className="bg-card rounded-xl p-6 sm:p-8 border border-border">
            <FAQSection items={faqs} />
            <SemesterKalkylator />
          </div>
        </div>
      </section>
    </Layout>
  );
}
