import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { FAQSection, FAQItemData } from "@/components/FAQItem";
import { ShieldAlert } from "lucide-react";

const faqs: FAQItemData[] = [
  {
    question: "Vilka arbetsmiljörättigheter har timanställda?",
    answer:
      "Du har samma rätt till en säker och hälsosam arbetsmiljö som alla andra anställda. Arbetsgivaren ska riskbedöma arbetsplatsen, tillhandahålla skyddsutrustning och utbildning, samt förebygga stress och belastning. Timanställning påverkar inte dessa rättigheter – du ska få instruktioner, introduktion och kunna säga till om risker. Skyddsombud och Arbetsmiljöverket är stöd vid problem.",
  },
  {
    question: "Hur rapporterar jag en arbetsmiljöincident eller tillbud?",
    answer:
      "Rapportera omedelbart till arbetsledare enligt företagets rutiner (system, blankett eller e-post). Beskriv vad som hände, var, när och vilka risker som finns. Tillbud ska utredas av arbetsgivaren och åtgärder ska dokumenteras. Vid allvarlig olycka ska arbetsgivaren omgående anmäla till Arbetsmiljöverket och Försäkringskassan. Spara kopior på dina rapporter.",
  },
  {
    question: "Får jag säga nej till farliga arbetsuppgifter?",
    answer:
      "Ja. Du har rätt att avbryta arbete som innebär omedelbar och allvarlig fara för liv eller hälsa. Kontakta ansvarig chef eller skyddsombud och förklara situationen. Arbetsgivaren får inte bestraffa dig för att du värnar säkerheten. Vid upprepad risk utan åtgärd, vänd dig till skyddsombud som kan lägga skyddsstopp.",
  },
  {
    question: "Vilken skyddsutrustning har jag rätt till som timanställd?",
    answer:
      "Arbetsgivaren ska tillhandahålla personlig skyddsutrustning (t.ex. handskar, hörselskydd, hjälm, skyddsskor) utan kostnad när arbetet kräver det. Du ska få instruktioner om hur utrustningen används och underhålls. Om du saknar utrustning – meddela arbetsgivaren och arbeta inte i riskmiljö utan rätt skydd.",
  },
  {
    question: "Hur hanteras hot och våld i arbetet?",
    answer:
      "Arbetsgivaren ska ha rutiner för att förebygga, hantera och rapportera hot och våld (t.ex. larmrutiner, bemanning, utbildning i bemötande). Efter incident ska du få stöd och uppföljning. Dokumentera händelsen noggrant, gör tillbudsanmälan och begär åtgärder. Vid allvarlig händelse: polisanmäl och kontakta arbetsmiljöansvarig.",
  },
];

export default function ArbetsmiljoSakerhet() {
  return (
    <Layout>
      <PageHeader
        title="Arbetsmiljö & säkerhet"
        description="Dina rättigheter, hur du rapporterar tillbud och hanterar risker som timanställd."
        icon={ShieldAlert}
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
