import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { FAQSection, FAQItemData } from "@/components/FAQItem";
import { CalendarDays } from "lucide-react";

const faqs: FAQItemData[] = [
  { question: "Får timanställda lön på röda dagar?", answer: "Som huvudregel: endast om du arbetar ett pass på den röda dagen eller har avtal som ger helglön. Kontrollera kollektivavtalet." },
  { question: "Vad gäller vid inställt pass på röd dag?", answer: "Utebliven arbetstid ger normalt ingen lön för timanställda, om inte särskild överenskommelse finns." },
  { question: "Finns OB på röda dagar?", answer: "Ja, ofta högre OB-nivå. Tillämpning och nivåer styrs av kollektivavtal." },
  { question: "Hur ser jag om jag får helglön?", answer: "Läs ditt avtal eller fråga HR/löneavdelningen. Helglön är ovanligt för timanställda men kan förekomma." },
];

export default function LonRodaDagarTimanstalld() {
  return (
    <Layout>
      <PageHeader
        title="Får timanställda lön på röda dagar?"
        description="Regler och undantag för lön på helgdagar för timanställda."
        icon={CalendarDays}
      />
      <section className="section-padding">
        <div className="container-page">
          <div className="bg-card rounded-xl p-6 sm:p-8 border border-border">
            <FAQSection items={faqs} />
          </div>
        </div>
      </section>
    </Layout>
  );
}
