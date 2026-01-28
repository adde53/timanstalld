import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { FAQSection, FAQItemData } from "@/components/FAQItem";
import { Receipt } from "lucide-react";
import { LoneKalkylator } from "@/components/LoneKalkylator";
import { FAQSchema } from "@/components/SEO/FAQSchema";
import { Link } from "react-router-dom";

const faqs: FAQItemData[] = [
  {
    question: "Hur fungerar preliminär skatt för timanställda?",
    answer:
      "Preliminär skatt är den skatt som dras från din lön varje månad som ett förskott på din slutliga skatt. Som timanställd beräknas skatten på din månadsinkomst multiplicerat med 12 (för att uppskatta årsinkomst). Problem uppstår när dina inkomster varierar mycket – en månad med många timmar kan ge orimligt hög skatt. Du kan ansöka om jämkning hos Skatteverket om du vet att din årsinkomst blir lägre än beräknat.",
  },
  {
    question: "Varför dras så mycket skatt på timlön?",
    answer:
      "Det beror på hur skattetabellen fungerar. Arbetsgivaren tittar på din månadsinkomst och antar att du tjänar lika mycket varje månad. En månad med ovanligt många timmar ger därför hög skatt eftersom systemet tror att du tjänar lika mycket hela året. Om du arbetar oregelbundet kan det löna sig att ansöka om jämkning. Vid deklarationen justeras allt och du får tillbaka för mycket betald skatt.",
  },
  {
    question: "Vad är engångsskatt för timanställda?",
    answer:
      "Engångsskatt (30% eller 25% beroende på situation) används ibland på tillfälliga utbetalningar som retroaktiv lön, bonus eller semesterersättning vid anställningens slut. Den dras när utbetalningen inte ingår i den vanliga månadslönen. Om det blev fel justeras det automatiskt i din deklaration. Du kan också be arbetsgivaren använda din vanliga skattetabell om utbetalningen är del av ordinarie lön.",
  },
  {
    question: "Hur ansöker jag om jämkning?",
    answer:
      "Ansök om jämkning via Skatteverkets e-tjänst 'Jämkning' på skatteverket.se. Du behöver uppskatta din förväntade årsinkomst. Om den är lägre än vad arbetsgivaren räknar med sänks din preliminära skatt. Jämkning är vanligt för studerande, deltidsarbetande och de med oregelbundna inkomster. Beslutet gäller för resten av kalenderåret.",
  },
  {
    question: "Vad är skattetabell och vilken har jag?",
    answer:
      "Skattetabell anger hur mycket skatt som ska dras baserat på din månadsinkomst och bostadskommun. Du får besked om din tabell från arbetsgivaren eller kan kolla på Skatteverket. Vanligast för timanställda är tabell 30-37 beroende på kommun. Om du har flera arbetsgivare ska bara en använda din huvudtabell – övriga ska använda tabell för sidoinkomst.",
  },
  {
    question: "Hur påverkar jobbskatteavdraget min nettolön?",
    answer:
      "Jobbskatteavdraget är ett skatteavdrag som automatiskt minskar skatten på arbetsinkomster. Du får det automatiskt – inget du behöver ansöka om. Avdraget gör att du behåller mer av din lön efter skatt. Det syns inte på lönebeskedet utan justeras i din slutliga skatt vid deklarationen.",
  },
];

export default function SkattUtbetalning() {
  return (
    <Layout>
      <PageHeader
        title="Skatt & utbetalning"
        description="Preliminär skatt, jämkning, engångsskatt och hur du räknar ut nettolön som timanställd."
        icon={Receipt}
      />
      <section className="section-padding">
        <div className="container-page">
          {/* Intro */}
          <div className="bg-card rounded-xl p-6 sm:p-8 border border-border mb-6">
            <h2 className="text-lg font-semibold mb-2">Förstå din skatt som timanställd</h2>
            <p className="text-muted-foreground text-sm">
              Som timanställd kan skatten variera från månad till månad beroende på hur mycket du arbetar. 
              Använd lönekalkylatorn nedan för att räkna ut din nettolön efter skatt.
            </p>
          </div>

          {/* Kalkylator */}
          <LoneKalkylator />

          {/* FAQ */}
          <div className="bg-card rounded-xl p-6 sm:p-8 border border-border mt-6">
            <h2 className="text-lg font-semibold mb-4">Vanliga frågor om skatt</h2>
            <FAQSection items={faqs} />
          </div>

          {/* Relaterade sidor */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/lon-ersattning"
              className="inline-flex items-center justify-center text-sm font-medium px-4 py-2 rounded-full bg-card border border-border shadow-sm hover:border-primary hover:text-primary hover:bg-accent/30 transition-all"
            >
              Lön & ersättning
            </Link>
            <Link
              to="/semester"
              className="inline-flex items-center justify-center text-sm font-medium px-4 py-2 rounded-full bg-card border border-border shadow-sm hover:border-primary hover:text-primary hover:bg-accent/30 transition-all"
            >
              Semesterersättning
            </Link>
            <Link
              to="/pension-formaner"
              className="inline-flex items-center justify-center text-sm font-medium px-4 py-2 rounded-full bg-card border border-border shadow-sm hover:border-primary hover:text-primary hover:bg-accent/30 transition-all"
            >
              Pension & förmåner
            </Link>
          </div>
        </div>
      </section>
      <FAQSchema items={faqs} />
    </Layout>
  );
}
