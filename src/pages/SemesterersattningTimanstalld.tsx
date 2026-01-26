import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { FAQSection, FAQItemData } from "@/components/FAQItem";
import { Sun } from "lucide-react";

const faqs: FAQItemData[] = [
  { question: "Vad är semesterersättning?", answer: "Ersättning i procent av din intjänade lön (vanligtvis 12%) som betalas ut när ledighet inte tas ut i dagar." },
  { question: "Hur räknar man procenten?", answer: "Bruttolön × procentsats (t.ex. 12%). Procentsatsen kan variera mellan avtal." },
  { question: "När betalas semesterersättning ut?", answer: "Ofta vid varje löneutbetalning eller i samband med avslut av anställning, enligt avtal." },
  { question: "Gäller olika procentsats i olika branscher?", answer: "Ja, kontrollera kollektivavtalet (Handel, Vård, Restaurang m.fl.) för exakta nivåer." },
];

export default function SemesterersattningTimanstalld() {
  return (
    <Layout>
      <PageHeader
        title="Semesterersättning timanställd – procent & exempel"
        description="Procentsats, beräkning och vanliga frågor för timanställda."
        icon={Sun}
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
