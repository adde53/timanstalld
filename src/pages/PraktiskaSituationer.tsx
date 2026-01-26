import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { FAQSection, FAQItemData } from "@/components/FAQItem";
import { HelpCircle } from "lucide-react";

const faqs: FAQItemData[] = [
  {
    question: "Vilka rättigheter har jag som timanställd om jag blir gravid?",
    answer:
      "Du har samma rättigheter som andra anställda. Arbetsgivaren får inte diskriminera dig på grund av graviditet – det är olagligt. Du har rätt till föräldraledighet och föräldrapenning från Försäkringskassan baserat på din SGI (sjukpenninggrundande inkomst). Eftersom timanställningar kan variera bör du arbeta så mycket som möjligt innan du föder för att bygga upp en bra SGI. Meddela arbetsgivaren om graviditeten i god tid.",
  },
  {
    question: "Hur fungerar A-kassa för timanställda?",
    answer:
      "För att få A-kassa måste du vara medlem i en A-kassa (minst 12 månader) och uppfylla arbetsvillkoret: du ska ha arbetat minst 60 timmar per månad under 6 av de senaste 12 månaderna. Som timanställd kan det vara svårt att uppfylla detta om du arbetar oregelbundet. Ersättningen baseras på din genomsnittliga inkomst. Om du förlorar ditt jobb eller får för få timmar kan du ansöka om ersättning. Kontakta din A-kassa för att kolla dina specifika förutsättningar.",
  },
];

export default function PraktiskaSituationer() {
  return (
    <Layout>
      <PageHeader
        title="Praktiska situationer"
        description="Vad gäller vid graviditet och hur A-kassa fungerar när du är timanställd."
        icon={HelpCircle}
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
