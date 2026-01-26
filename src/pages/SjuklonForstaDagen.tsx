import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { FAQSection, FAQItemData } from "@/components/FAQItem";
import { HeartPulse } from "lucide-react";

const faqs: FAQItemData[] = [
  { question: "Sjuklön dag 1", answer: "Karensavdrag dras; därefter sjuklön enligt avtal/lagen för inbokade pass." },
  { question: "Underlag", answer: "Behåll läkarintyg efter längre frånvaro enligt rutiner." },
];

export default function SjuklonForstaDagen() {
  return (
    <Layout>
      <PageHeader title="Sjuklön timanställd första dagen" description="Hur sjuklönen beräknas och vad du behöver göra." icon={HeartPulse} />
      <section className="section-padding">
        <div className="container-page"><div className="bg-card rounded-xl p-6 sm:p-8 border border-border"><FAQSection items={faqs} /></div></div>
      </section>
    </Layout>
  );
}
