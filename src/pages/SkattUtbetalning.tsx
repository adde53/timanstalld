import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { FAQSection, FAQItemData } from "@/components/FAQItem";
import { Receipt } from "lucide-react";
import { LoneKalkylator } from "@/components/LoneKalkylator";

const faqs: FAQItemData[] = [
  {
    question: "Hur fungerar preliminär skatt för timanställda?",
    answer:
      "Preliminär skatt är den skatt som dras från din lön varje månad som ett förskott på din slutliga skatt. Som timanställd beräknas skatten på din månadsinkomst multiplicerat med 12 (för att uppskatta årsinkomst). Problem uppstår när dina inkomster varierar mycket – en månad med många timmar kan ge orimligt hög skatt. Du kan ansöka om jämkning hos Skatteverket om du vet att din årsinkomst blir lägre än beräknat.",
  },
  {
    question: "Varför dras så mycket skatt på timlön?",
    answer:
      "Det beror på hur skattetabellen fungerar. Arbetsgivaren tittar på din månadsinkomst och antar att du tjänar lika mycket varje månad. En månad med ovanligt många timmar ger därför hög skatt eftersom systemet tror att du tjänar lika mycket hela året. Om du arbetar oregelbundet kan det löna sig att ansöka om jämkning. Vid deklarationen justeras allt och du får tillbaka för mycket betald skatt.",
  },
  {
    question: "Vad är engångsskatt för timanställda?",
    answer:
      "Engångsskatt (30% eller 25% beroende på situation) används ibland på tillfälliga utbetalningar som retroaktiv lön, bonus eller semesterersättning vid anställningens slut. Den dras när utbetalningen inte ingår i den vanliga månadslönen. Om det blev fel justeras det automatiskt i din deklaration. Du kan också be arbetsgivaren använda din vanliga skattetabell om utbetalningen är del av ordinarie lön.",
  },
];

export default function SkattUtbetalning() {
  return (
    <Layout>
      <PageHeader
        title="Skatt & utbetalning"
        description="Förstå preliminär skatt, varför det dras så mycket skatt och hur engångsskatt fungerar."
        icon={Receipt}
      />
      <section className="section-padding">
        <div className="container-page">
          <div className="bg-card rounded-xl p-6 sm:p-8 border border-border">
            <FAQSection items={faqs} />
            <LoneKalkylator />
          </div>
        </div>
      </section>
    </Layout>
  );
}
