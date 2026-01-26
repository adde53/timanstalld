import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { FAQSection, FAQItemData } from "@/components/FAQItem";
import { Info } from "lucide-react";

const faqs: FAQItemData[] = [
  { question: "Definition", answer: "Timanställning innebär ersättning per arbetad timme och varierande schemaläggning." },
  { question: "Vanliga avtalsdelar", answer: "Timlön, OB, semesterersättning, sjukanmälan och uppsägningstid." },
];

export default function VadArTimanstallning() {
  return (
    <Layout>
      <PageHeader title="Vad är timanställning?" description="Grunderna – villkor, lön och vanliga frågor." icon={Info} />
      <section className="section-padding">
        <div className="container-page"><div className="bg-card rounded-xl p-6 sm:p-8 border border-border"><FAQSection items={faqs} /></div></div>
      </section>
    </Layout>
  );
}
