import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { FAQSection, FAQItemData } from "@/components/FAQItem";
import { Thermometer } from "lucide-react";

const faqs: FAQItemData[] = [
  { question: "Karensavdrag", answer: "Karensavdrag görs på sjuklön enligt regler; timanställda omfattas vid bekräftade pass." },
  { question: "Sjukanmälan", answer: "Följ arbetsgivarens rutiner och meddela innan passet börjar." },
];

export default function KarensdagTimanstalld() {
  return (
    <Layout>
      <PageHeader title="Karensdag för timanställda – vad gäller?" description="Karens, sjuklön och rutiner." icon={Thermometer} />
      <section className="section-padding">
        <div className="container-page"><div className="bg-card rounded-xl p-6 sm:p-8 border border-border"><FAQSection items={faqs} /></div></div>
      </section>
    </Layout>
  );
}
