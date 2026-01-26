import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { FAQSection, FAQItemData } from "@/components/FAQItem";
import { FileText } from "lucide-react";

const faqs: FAQItemData[] = [
  {
    question: "Vilken uppsägningstid har timanställda?",
    answer:
      "Som timanställd beror uppsägningstiden på ditt anställningsavtal och eventuellt kollektivavtal. Om inget är avtalat gäller ofta att du kan säga upp dig när som helst utan uppsägningstid, eftersom du inte har garanterade timmar. Arbetsgivaren kan också sluta ge dig pass utan formell uppsägning. Om du har ett kollektivavtal kan andra regler gälla, så kontrollera alltid ditt avtal eller fråga facket.",
  },
  {
    question: "Kan man tacka nej till pass som timanställd?",
    answer:
      "Ja, som timanställd har du generellt rätt att tacka nej till erbjudna pass, särskilt om anställningsformen är 'vid behov'. Du har ingen skyldighet att acceptera arbete utöver vad som står i ditt avtal. Men tänk på att om du tackar nej ofta kan arbetsgivaren välja att erbjuda pass till andra istället. Läs ditt anställningsavtal noga – ibland kan det finnas krav på tillgänglighet.",
  },
  {
    question: "Hur många timmar får timanställda jobba?",
    answer:
      "Arbetstidslagen sätter gränser för hur mycket du får arbeta. Normalt får du arbeta max 40 timmar i veckan i genomsnitt, och max 48 timmar i veckan inklusive övertid under en beräkningsperiod. Du har också rätt till 11 timmars sammanhängande dygnsvila och 36 timmars veckovila. Kollektivavtal kan ha andra regler. Om du har flera timanställningar räknas timmarna ihop.",
  },
  {
    question: "Har timanställda rätt till schema i förväg?",
    answer:
      "Enligt lag ska du få veta dina arbetstider i så god tid som möjligt. Vad som är 'rimlig tid' kan variera, men generellt bör du få besked minst några dagar i förväg. Vissa kollektivavtal anger specifika regler, exempelvis 2 veckor framförhållning. Om arbetsgivaren ofta ändrar eller schemalägger med kort varsel, ta upp det – du har rätt till förutsägbarhet i ditt arbete.",
  },
];

export default function KontraktRattigheter() {
  return (
    <Layout>
      <PageHeader
        title="Kontrakt & rättigheter"
        description="Dina rättigheter som timanställd – uppsägningstid, arbetstider, schema och möjligheten att tacka nej till pass."
        icon={FileText}
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
