import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { FAQSection, FAQItemData } from "@/components/FAQItem";
import { HelpCircle } from "lucide-react";
import { FAQSchema } from "@/components/SEO/FAQSchema";
import { Link } from "react-router-dom";

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
  {
    question: "Vad är SGI och hur påverkar det mig?",
    answer:
      "SGI (sjukpenninggrundande inkomst) är den inkomst som Försäkringskassan utgår från vid beräkning av sjukpenning, föräldrapenning och andra ersättningar. Som timanställd påverkas din SGI av hur mycket och regelbundet du arbetar. Arbeta kontinuerligt och anmäl förändringar i arbetstid till Försäkringskassan för att hålla din SGI uppdaterad.",
  },
  {
    question: "Kan jag få bostadsbidrag som timanställd?",
    answer:
      "Ja, du kan ha rätt till bostadsbidrag baserat på din inkomst, boendesituation och eventuella barn. Ansök hos Försäkringskassan och uppge din beräknade årsinkomst. Som timanställd med varierande inkomst är det viktigt att uppdatera uppgifterna om inkomsten ändras, så att du inte behöver betala tillbaka i efterhand.",
  },
  {
    question: "Hur påverkar timanställning min pension?",
    answer:
      "All beskattad inkomst ger allmän pension – även oregelbundna timlöner. Tjänstepension beror på om arbetsgivaren har kollektivavtal. Varierande inkomst kan ge lägre snitt och därmed lägre pensionsavsättning över tid. Överväg eget pensionssparande om du saknar tjänstepension.",
  },
  {
    question: "Vad händer om jag blir arbetslös som timanställd?",
    answer:
      "Om du förlorar dina timmar eller arbetsgivaren slutar ge dig pass kan du ha rätt till A-kassa, förutsatt att du uppfyller medlems- och arbetsvillkoret. Anmäl dig som arbetssökande hos Arbetsförmedlingen och kontakta din A-kassa för att starta din ansökan. Du behöver visa att du inte längre erbjuds timmar.",
  },
  {
    question: "Kan jag studera och jobba som timanställd samtidigt?",
    answer:
      "Ja, timanställning är flexibelt och passar ofta studenter. Du tackar ja till pass när du har tid och nej när du studerar. Tänk på att din A-kassa och SGI påverkas av hur mycket du arbetar. Om du har studiemedel finns inkomstgränser – kolla med CSN vad som gäller.",
  },
];

export default function PraktiskaSituationer() {
  return (
    <Layout>
      <PageHeader
        title="Praktiska situationer"
        description="Graviditet, A-kassa, SGI, bostadsbidrag och andra livssituationer för timanställda."
        icon={HelpCircle}
      />
      <section className="section-padding">
        <div className="container-page">
          {/* Intro */}
          <div className="bg-card rounded-xl p-6 sm:p-8 border border-border mb-6">
            <h2 className="text-lg font-semibold mb-2">Livet som timanställd</h2>
            <p className="text-muted-foreground text-sm">
              Här hittar du svar på vanliga frågor om hur timanställning påverkar olika livssituationer – 
              från graviditet och föräldrapenning till A-kassa och studier.
            </p>
          </div>

          {/* FAQ */}
          <div className="bg-card rounded-xl p-6 sm:p-8 border border-border">
            <FAQSection items={faqs} />
          </div>

          {/* Relaterade sidor */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/pension-formaner"
              className="inline-flex items-center justify-center text-sm font-medium px-4 py-2 rounded-full bg-card border border-border shadow-sm hover:border-primary hover:text-primary hover:bg-accent/30 transition-all"
            >
              Pension & förmåner
            </Link>
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
          </div>
        </div>
      </section>
      <FAQSchema items={faqs} />
    </Layout>
  );
}
