import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { FAQSection, FAQItemData } from "@/components/FAQItem";
import { Home } from "lucide-react";

const faqs: FAQItemData[] = [
  { question: "Allt timanställda behöver veta", answer: "Snabb översikt över rättigheter, ersättningar, schema och verktyg." },
  { question: "Hur navigerar jag innehållet?", answer: "Välj kategori eller använd söket. Kolla Verktyg för kalkylatorer." },
];

export default function KarnStartsida() {
  return (
    <Layout>
      <PageHeader
        title="Allt timanställda behöver veta – enkelt förklarat"
        description="Kärnsidor och praktiska verktyg samlade på ett ställe."
        icon={Home}
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
