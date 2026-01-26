import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { FAQSection, FAQItemData } from "@/components/FAQItem";
import { Clock } from "lucide-react";

const faqs: FAQItemData[] = [
  { question: "När får man OB?", answer: "Kväll, natt, helg och röda dagar enligt avtal." },
  { question: "Hur räknas OB?", answer: "Timmar × OB-sats (kr/h). Sats varierar per tid och avtal." },
];

export default function OBTimanstalld() {
  return (
    <Layout>
      <PageHeader title="OB-ersättning för timanställda – så funkar det" description="Tider, satser och exempel." icon={Clock} />
      <section className="section-padding">
        <div className="container-page"><div className="bg-card rounded-xl p-6 sm:p-8 border border-border"><FAQSection items={faqs} /></div></div>
      </section>
    </Layout>
  );
}
