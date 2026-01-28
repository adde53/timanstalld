import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { FAQSection, FAQItemData } from "@/components/FAQItem";
import { CalendarClock } from "lucide-react";
import { FAQSchema } from "@/components/SEO/FAQSchema";
import { Link } from "react-router-dom";

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
  {
    question: "Vad gör jag om schemat ändras i sista minuten?",
    answer:
      "Om arbetsgivaren ändrar schemat kort tid före passet kan du ha rätt att tacka nej beroende på avtal. Dokumentera ändringen och tidpunkten för beskedet. Om det sker ofta, ta upp frågan med chefen eller skyddsombudet. Vissa avtal ger extra ersättning vid ändringar med kort varsel.",
  },
  {
    question: "Har jag rätt att veta hur många timmar jag får nästa månad?",
    answer:
      "Du har inte automatisk rätt till garanterade timmar som timanställd, men du kan begära en prognos. Om du behöver viss inkomst för att klara ekonomin, diskutera med arbetsgivaren om möjligheten till fler fasta pass eller tydligare framförhållning.",
  },
];

export default function SchemalaggningPlanering() {
  return (
    <Layout>
      <PageHeader
        title="Schemaläggning & planering"
        description="Tillgänglighet, kort varsel, schemakrockar och vila för dig som är timanställd."
        icon={CalendarClock}
      />
      <section className="section-padding">
        <div className="container-page">
          {/* Intro */}
          <div className="bg-card rounded-xl p-6 sm:p-8 border border-border mb-6">
            <h2 className="text-lg font-semibold mb-2">Planera din tid som timanställd</h2>
            <p className="text-muted-foreground text-sm">
              Som timanställd är det viktigt att hålla koll på din tillgänglighet och kommunicera tydligt med arbetsgivaren. 
              Här får du tips på hur du planerar och hanterar varierande arbetstider.
            </p>
          </div>

          {/* FAQ */}
          <div className="bg-card rounded-xl p-6 sm:p-8 border border-border">
            <FAQSection items={faqs} />
          </div>

          {/* Relaterade sidor */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/kontrakt-rattigheter"
              className="inline-flex items-center justify-center text-sm font-medium px-4 py-2 rounded-full bg-card border border-border shadow-sm hover:border-primary hover:text-primary hover:bg-accent/30 transition-all"
            >
              Kontrakt & rättigheter
            </Link>
            <Link
              to="/lon-ersattning"
              className="inline-flex items-center justify-center text-sm font-medium px-4 py-2 rounded-full bg-card border border-border shadow-sm hover:border-primary hover:text-primary hover:bg-accent/30 transition-all"
            >
              Lön & ersättning
            </Link>
            <Link
              to="/arbetsmiljo-sakerhet"
              className="inline-flex items-center justify-center text-sm font-medium px-4 py-2 rounded-full bg-card border border-border shadow-sm hover:border-primary hover:text-primary hover:bg-accent/30 transition-all"
            >
              Arbetsmiljö & säkerhet
            </Link>
          </div>
        </div>
      </section>
      <FAQSchema items={faqs} />
    </Layout>
  );
}
