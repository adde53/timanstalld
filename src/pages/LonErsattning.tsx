import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { FAQSection, FAQItemData } from "@/components/FAQItem";
import { Banknote } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const faqs: FAQItemData[] = [
  {
    question: "Hur fungerar OB-ersättning för timanställda?",
    answer:
      "OB-ersättning (obekväm arbetstid) är ett tillägg du får när du arbetar på kvällar, nätter, helger eller storhelger. Som timanställd har du samma rätt till OB som fast anställda. Ersättningen varierar beroende på kollektivavtal, men generellt gäller: kvällstillägg på vardagar efter kl 18, nattillägg efter kl 22 eller 23, och högre tillägg på helger. Kontrollera ditt kollektivavtal eller fråga arbetsgivaren om exakta belopp.",
  },
  {
    question: "Hur mycket är semesterersättning i procent för timanställda?",
    answer:
      "Semesterersättningen är normalt 12% av din bruttolön enligt semesterlagen. Detta gäller om du inte har rätt att ta ut betald semester. I vissa kollektivavtal kan procentsatsen vara högre, till exempel 12,5% eller mer. Ersättningen beräknas på din totala lön inklusive OB-tillägg och andra lönetillägg. Den betalas oftast ut samtidigt med lönen, antingen varje månad eller samlat vid anställningens slut.",
  },
  {
    question: "Får timanställda lön på röda dagar?",
    answer:
      "Som timanställd får du bara lön för de timmar du faktiskt arbetar. Om du inte är schemalagd på en röd dag får du ingen lön den dagen. Om du däremot arbetar på en röd dag har du rätt till extra ersättning (storhelgstillägg) utöver din vanliga timlön. Beloppet beror på ditt kollektivavtal. Observera att detta skiljer sig från månadsanställda som ofta får lön även för röda dagar.",
  },
  {
    question: "När ska semesterersättning betalas ut?",
    answer:
      "Semesterersättningen ska enligt lag betalas ut senast en månad efter anställningens slut. Många arbetsgivare väljer dock att betala ut den löpande tillsammans med varje löneutbetalning, vilket är vanligt för timanställda. Om ersättningen inte betalas ut i tid kan du kontakta ditt fackförbund eller Kronofogden. Spara alltid dina lönespecifikationer som bevis.",
  },
  {
    question: "Får jag lön som timanställd om jag är sjuk?",
    answer:
      "Ja, du har rätt till sjuklön om du skulle ha arbetat den dagen du är sjuk. Dag 1 är en karensdag och du får ingen ersättning. Dag 2-14 betalar arbetsgivaren sjuklön på cirka 80% av din lön. För att få sjuklön måste du kunna visa att du var schemalagd eller hade ett inbokat pass. Om du inte var schemalagd får du tyvärr ingen ersättning. Efter dag 14 tar Försäkringskassan över med sjukpenning.",
  },
    {
      question: "När får man lön som timanställd?",
      answer:
        "Som timanställd får du lön efter att du har arbetat dina timmar. Löneutbetalningen sker vanligtvis en gång per månad, ofta i slutet av månaden eller månaden efter att arbetet utförts. Det exakta datumet beror på vad som står i ditt anställningsavtal eller kollektivavtal. Vissa arbetsgivare betalar ut lön månaden efter, medan andra betalar samma månad. På din lönespecifikation ska det framgå vilken period lönen avser, hur många timmar du har arbetat och vilka tillägg som ingår, till exempel OB-ersättning.",
    },
];


function LonErsattning() {
  return (
    <Layout>
      <PageHeader
        title="Lön & ersättning"
        description="Vanliga frågor om lön, OB, semesterersättning och andra tillägg för timanställda."
        icon={Banknote}
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

export default LonErsattning;