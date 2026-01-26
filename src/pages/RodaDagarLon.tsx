import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { FAQSection, FAQItemData } from "@/components/FAQItem";
import { CalendarDays } from "lucide-react";

const faqs: FAQItemData[] = [
  { question: "Röda dagar", answer: "Timanställda får normalt lön endast för arbetade timmar. OB kan gälla på röda dagar." },
  { question: "Avtal", answer: "Vissa avtal har helgdagsersättning. Kontrollera kollektivavtalet." },
];

export default function RodaDagarLon() {
  return (
    <Layout>
      <PageHeader title="Får timanställda lön på röda dagar?" description="Vad gäller och vad säger avtalen?" icon={CalendarDays} />
      <section className="section-padding">
        <div className="container-page"><div className="bg-card rounded-xl p-6 sm:p-8 border border-border"><FAQSection items={faqs} /></div></div>
      </section>
    </Layout>
  );
}
