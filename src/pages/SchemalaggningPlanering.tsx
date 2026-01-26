import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { FAQSection, FAQItemData } from "@/components/FAQItem";
import { CalendarClock } from "lucide-react";

const faqs: FAQItemData[] = [
  {
    question: "Hur kan jag planera min tillgänglighet som timanställd?",
    answer:
      "Sätt tydliga tillgänglighetsfönster i arbetsgivarens system, uppdatera dem regelbundet och kommunicera i god tid vid ändringar. Ha en veckoplan med fasta tider du kan arbeta, och blockera studier/andra åtaganden. Be om återkommande pass om möjligt för stabilitet. Dokumentera bekräftade pass och spara scheman.",
  },
  {
    question: "Vad gäller vid arbete med kort varsel?",
    answer:
      "Du kan tacka ja eller nej till pass med kort varsel. Vissa avtal ger extra ersättning vid inhopp med mycket kort framförhållning. Om kort varsel är återkommande, diskutera med chefen om planering, bemanning och rimlig framförhållning. Du har rätt till vila enligt arbetstidslagen oavsett varsel.",
  },
  {
    question: "Hur undviker jag schemakrockar med flera arbetsgivare?",
    answer:
      "Samla alla pass i en kalender, använd påminnelser och synka appar. Kommunicera din tillgänglighet till varje arbetsgivare och undvik dubbelbokningar. Lägg in rese- och vilotid mellan pass. Vid krock: meddela i tid, prioritera bekräftade pass och följ avtalade rutiner för avbokning.",
  },
  {
    question: "Kan jag kräva schema i förväg?",
    answer:
      "Du kan begära skälig framförhållning och förutsägbarhet. Flera kollektivavtal anger minst 2 veckors schema i förväg. Om arbetsgivaren återkommande schemalägger sent, ta upp det skriftligt och hänvisa till avtalet. Skyddsombud/fack kan stödja kravet på bättre planering.",
  },
  {
    question: "Hur planerar jag för återhämtning och dygnsvila?",
    answer:
      "Lägg in 11 timmars dygnsvila och 36 timmars veckovila. Undvik många sena kvällar följt av tidiga morgnar. Planera mat, sömn och pendling. Vid obekväma pass – se till att OB ersättning utgår enligt avtal och att vilan respekteras även vid inhopp.",
  },
];

export default function SchemalaggningPlanering() {
  return (
    <Layout>
      <PageHeader
        title="Schemaläggning & planering"
        description="Praktiska råd om tillgänglighet, kort varsel, krockar och vila för timanställda."
        icon={CalendarClock}
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
