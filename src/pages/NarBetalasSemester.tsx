import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { FAQSection, FAQItemData } from "@/components/FAQItem";
import { CalendarCheck2 } from "lucide-react";

const faqs: FAQItemData[] = [
  { question: "Utbetalning", answer: "Ofta i samband med lön eller vid avslut av anställning. Kolla rutin hos arbetsgivaren." },
  { question: "Specifikation", answer: "Ska framgå separat på lönespecifikationen." },
];

export default function NarBetalasSemester() {
  return (
    <Layout>
      <PageHeader title="När betalas semesterersättning ut?" description="Tidpunkter och rutiner." icon={CalendarCheck2} />
      <section className="section-padding">
        <div className="container-page"><div className="bg-card rounded-xl p-6 sm:p-8 border border-border"><FAQSection items={faqs} /></div></div>
      </section>
    </Layout>
  );
}
