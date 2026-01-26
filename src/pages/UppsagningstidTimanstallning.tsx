import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { FAQSection, FAQItemData } from "@/components/FAQItem";
import { FileText } from "lucide-react";

const faqs: FAQItemData[] = [
  { question: "Uppsägningstid", answer: "Beror på avtal och överenskommelser. Saknas ofta vid rena extra-pass." },
  { question: "Rekommendation", answer: "Skriv tydlig överenskommelse om avbokning av pass för att undvika tvist." },
];

export default function UppsagningstidTimanstallning() {
  return (
    <Layout>
      <PageHeader title="Uppsägningstid vid timanställning" description="Vad som gäller och hur du undviker problem." icon={FileText} />
      <section className="section-padding">
        <div className="container-page"><div className="bg-card rounded-xl p-6 sm:p-8 border border-border"><FAQSection items={faqs} /></div></div>
      </section>
    </Layout>
  );
}
