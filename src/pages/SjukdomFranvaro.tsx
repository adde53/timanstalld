import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { FAQSection, FAQItemData } from "@/components/FAQItem";
import { Thermometer } from "lucide-react";
import { Link } from "react-router-dom";

const faqs: FAQItemData[] = [
  {
    question: "Vad är karensdag för timanställda?",
    answer:
      "Karensdag är den första sjukdagen då ingen sjuklön betalas. För timanställda gäller detta endast om du hade ett planerat/schemalagt pass den dagen. Ingen karensdag utgår om du inte skulle ha arbetat. Karensavdraget motsvarar 20% av en genomsnittlig veckolön, och för timanställda beräknas det på det inbokade passet.",
  },
  {
    question: "Hur fungerar sjuklön för timanställda första dagen?",
    answer:
      "Dag 1 är karensdag (0 kr i sjuklön). Från dag 2 till dag 14 har du normalt rätt till cirka 80% av ordinarie lön i sjuklön från arbetsgivaren, förutsatt att du hade ett pass eller kan visa att du skulle ha arbetat. Saknas planerat pass den dagen utgår ingen ersättning.",
  },
  {
    question: "Vilka regler gäller för sjukanmälan som timanställd?",
    answer:
      "Sjukanmäl dig till arbetsgivaren så tidigt som möjligt, helst före passets start, via rutinen som gäller (telefon, SMS eller system). Vid sjukdom över 7 dagar kan läkarintyg krävas. Efter dag 14 ansöker du om sjukpenning hos Försäkringskassan. Dokumentera alltid när och till vem du sjukanmält dig.",
  },
  {
    question: "Hur räknas karensavdraget för timanställda?",
    answer:
      "Karensavdraget är 20% av din genomsnittliga veckolön. För timanställda görs avdraget baserat på planerad arbetstid och timlön inklusive eventuella OB på det inställda passet. Har du ojämna timmar kan arbetsgivaren utgå från ett snitt under en relevant period.",
  },
  {
    question: "Behöver jag läkarintyg och när?",
    answer:
      "Arbetsgivaren kan kräva läkarintyg efter 7 kalenderdagar. Vid återkommande korttidsfrånvaro kan intyg krävas tidigare enligt intern policy. För sjukpenning hos Försäkringskassan krävs läkarintyg efter dag 14.",
  },
  {
    question: "Vad gäller efter dag 14 (sjukpenning)?",
    answer:
      "Efter dag 14 upphör arbetsgivarens sjuklön. Du ansöker själv om sjukpenning hos Försäkringskassan. Ersättningen grundas på din sjukpenninggrundande inkomst (SGI). Som timanställd påverkas SGI av din deklarerade inkomst och anmälda arbetstid.",
  },
  {
    question: "Får jag sjuklön om jag blir sjuk under ett pass?",
    answer:
      "Ja, om du avbryter ett pågående pass på grund av sjukdom kan sjuklön utgå för resterande timmars ordinarie lön (cirka 80%) efter karensavdraget. Rapportera direkt till ansvarig chef och dokumentera tidpunkten.",
  },
  {
    question: "Hur påverkar OB-ersättning sjuklönen?",
    answer:
      "Sjuklön beräknas på ordinarie lön för schemalagt pass. Om passet skulle ha inkluderat OB kan ersättningen beräknas med underlag som visar att OB skulle utgå. Rutiner skiljer sig – fråga lönekontoret vid oklarheter.",
  },
  {
    question: "Gäller sjuklön om jag var bokad som vikarie?",
    answer:
      "Ja, om du hade ett bekräftat vikariatpass gäller samma regler: karens dag 1 och sjuklön dag 2–14 på den timlön som var planerad. Saknas bekräftelse kan ersättning utebli.",
  },
  {
    question: "Hur ansöker jag om sjukpenning som timanställd?",
    answer:
      "Ansök hos Försäkringskassan via Mina sidor. Bifoga läkarintyg och uppgifter som styrker din inkomst (lönespecifikationer, anställningsunderlag). Håll ditt SGI uppdaterat vid förändrade arbetstider.",
  },
  {
    question: "Tips för att undvika fel i sjuklönen",
    answer:
      "Spara schema/passtider, rapportera sjukanmälan i tid, dokumentera vem du kontaktat, och stäm av lönespecen. Vid avvikelse: begär specificering av beräkningen (karensavdrag, timlön, OB) från löneavdelningen.",
  },
];

// Canonical route for Sjuklön-sidan
const SJUKLON_FIRST_DAY_PATH = "/sjuklon-forsta-dagen";

export default function SjukdomFranvaro() {
  return (
    <Layout>
      <PageHeader
        title="Sjukdom & frånvaro"
        description="Karensdag, sjuklön dag 2–14 och sjukanmälan för dig som är timanställd."
        icon={Thermometer}
      />
      <section className="section-padding">
        <div className="container-page">
          <div className="bg-card rounded-xl p-6 sm:p-8 border border-border">
            <FAQSection items={faqs} />
            {/* Internlänk till sidan om sjuklön första dagen */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to={SJUKLON_FIRST_DAY_PATH}
                className="inline-flex items-center justify-center text-sm font-medium px-4 py-2 rounded-full bg-card border border-border shadow-sm hover:border-primary hover:text-primary hover:bg-accent/30 transition-all"
                aria-label="Sjuklön timanställd första dagen"
              >
                Läs också: Sjuklön timanställd första dagen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
