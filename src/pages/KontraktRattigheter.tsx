import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { FAQSection, FAQItemData } from "@/components/FAQItem";
import { FileText } from "lucide-react";
import { FAQSchema } from "@/components/SEO/FAQSchema";
import { Link } from "react-router-dom";

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
  {
    question: "Vad ska stå i mitt anställningsavtal?",
    answer:
      "Ditt anställningsavtal ska innehålla: arbetsgivarens och ditt namn, arbetsplats, befattning/arbetsuppgifter, anställningsform (timanställd/vid behov), timlön, eventuella tillägg, semester/semesterersättning, uppsägningstid och kollektivavtal om sådant finns. Har du inget skriftligt avtal – be om ett! Det skyddar båda parter.",
  },
  {
    question: "Har jag rätt till fast anställning efter en tid?",
    answer:
      "Enligt LAS (Lagen om anställningsskydd) kan du ha rätt till tillsvidareanställning om du arbetat som vikarie eller i allmän visstidsanställning i mer än 12 månader under en femårsperiod hos samma arbetsgivare. Reglerna varierar – kontrollera vad som gäller för just din anställningsform och om det finns kollektivavtal.",
  },
  {
    question: "Vad gäller om arbetsgivaren ställer in mitt pass?",
    answer:
      "Om ett pass ställs in med mycket kort varsel kan du ha rätt till ersättning beroende på kollektivavtal och hur sent beskedet kom. Utan kollektivavtal finns ingen lagstadgad rätt till ersättning för inställda pass, men det kan regleras i ditt anställningsavtal. Dokumentera alltid inställda pass och när du fick besked.",
  },
  {
    question: "Har timanställda rätt till facklig representation?",
    answer:
      "Ja, du har alltid rätt att vara med i facket oavsett anställningsform. Facket kan hjälpa dig med frågor om avtal, arbetsvillkor, löner och tvister. De kan också förhandla för bättre villkor för timanställda på din arbetsplats. Kontakta det fackförbund som organiserar din bransch.",
  },
];

export default function KontraktRattigheter() {
  return (
    <Layout>
      <PageHeader
        title="Kontrakt & rättigheter"
        description="Uppsägningstid, arbetstider, anställningsavtal och dina rättigheter som timanställd."
        icon={FileText}
      />
      <section className="section-padding">
        <div className="container-page">
          {/* Intro */}
          <div className="bg-card rounded-xl p-6 sm:p-8 border border-border mb-6">
            <h2 className="text-lg font-semibold mb-2">Dina rättigheter som timanställd</h2>
            <p className="text-muted-foreground text-sm">
              Som timanställd har du samma grundläggande rättigheter som andra anställda, men villkoren kan skilja sig. 
              Här hittar du svar på vanliga frågor om anställningsavtal, uppsägningstid och arbetstider.
            </p>
          </div>

          {/* FAQ */}
          <div className="bg-card rounded-xl p-6 sm:p-8 border border-border">
            <FAQSection items={faqs} />
          </div>

          {/* Relaterade sidor */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/schemalaggning-planering"
              className="inline-flex items-center justify-center text-sm font-medium px-4 py-2 rounded-full bg-card border border-border shadow-sm hover:border-primary hover:text-primary hover:bg-accent/30 transition-all"
            >
              Schemaläggning & planering
            </Link>
            <Link
              to="/arbetsmiljo-sakerhet"
              className="inline-flex items-center justify-center text-sm font-medium px-4 py-2 rounded-full bg-card border border-border shadow-sm hover:border-primary hover:text-primary hover:bg-accent/30 transition-all"
            >
              Arbetsmiljö & säkerhet
            </Link>
            <Link
              to="/lon-ersattning"
              className="inline-flex items-center justify-center text-sm font-medium px-4 py-2 rounded-full bg-card border border-border shadow-sm hover:border-primary hover:text-primary hover:bg-accent/30 transition-all"
            >
              Lön & ersättning
            </Link>
          </div>
        </div>
      </section>
      <FAQSchema items={faqs} />
    </Layout>
  );
}
