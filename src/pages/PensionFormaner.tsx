import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { FAQSection, FAQItemData } from "@/components/FAQItem";
import { PiggyBank } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { FAQSchema } from "@/components/SEO/FAQSchema";
import { Link } from "react-router-dom";

const faqs: FAQItemData[] = [
  {
    question: "Får timanställda tjänstepension?",
    answer:
      "Om arbetsgivaren har kollektivavtal tillkommer normalt tjänstepension (t.ex. Avtalspension SAF-LO). Utan kollektivavtal kan arbetsgivaren frivilligt betala tjänstepension, men det är inte givet. Kontrollera ditt anställningsavtal och fråga HR. Statlig allmän pension tjänas in på all deklarerad lön oavsett timanställning.",
  },
  {
    question: "Vilka försäkringar omfattar timanställda?",
    answer:
      "Med kollektivavtal ingår ofta arbetsskadeförsäkring, sjukförsäkring, TFA/TGL m.m. Arbetsgivaren ska också ha försäkring för olyckor i tjänsten. Utan avtal – fråga vilka försäkringar som gäller och överväg egna kompletteringar. Kontrollera även om du omfattas av fackets gruppförsäkringar.",
  },
  {
    question: "Hur påverkar varierande inkomst min pension?",
    answer:
      "Allmän pension grundas på beskattad inkomst. Oregelbundna timmar ger ofta lägre snittinkomst och därmed lägre pensionsavsättning. Försök jämna ut inkomsten och arbeta fler timmar när det är möjligt. Om du saknar tjänstepension: överväg eget sparande (ISK eller fond) och sätt upp automatiskt månadsspar.",
  },
  {
    question: "Har timanställda rätt till andra förmåner (friskvård, rabatter)?",
    answer:
      "Många arbetsgivare erbjuder friskvårdsbidrag, personalrabatter och utbildningar även för timanställda. Rätten beror på policy och avtal. Fråga HR vilka förmåner som gäller och hur du ansöker. Spara kvitton och följ rutiner för utlägg.",
  },
  {
    question: "Vad ska jag tänka på om jag har flera arbetsgivare?",
    answer:
      "Samla lönespecifikationer, kontrollera att rätt skatt dras (ev. jämkning), och följ upp att tjänstepension och försäkringar sköts hos varje arbetsgivare. Se över dubbel försäkring och att förmåner utnyttjas enligt respektive policy.",
  },
];

export default function PensionFormaner() {
  const [monthlyIncome, setMonthlyIncome] = useState<number>(24000);
  const [tjanstePercent, setTjanstePercent] = useState<number>(4.5);
  const [ownSaving, setOwnSaving] = useState<number>(500);

  const yearlyIncome = (monthlyIncome || 0) * 12;
  const yearlyTjanste = (yearlyIncome * (tjanstePercent || 0)) / 100;
  const yearlyOwn = (ownSaving || 0) * 12;
  const totalYearly = yearlyTjanste + yearlyOwn;

  return (
    <Layout>
      <PageHeader
        title="Pension & förmåner"
        description="Tjänstepension, försäkringar och förmåner för dig som är timanställd."
        icon={PiggyBank}
      />
      <section className="section-padding">
        <div className="container-page">
          {/* Intro – svar direkt på frågan */}
          <div className="bg-card rounded-xl p-6 sm:p-8 border border-border mb-6">
            <p className="text-muted-foreground">
              Som timanställd tjänar du alltid in allmän pension på din beskattade inkomst. Tjänstepension
              tillkommer normalt med kollektivavtal (t.ex. SAF-LO) och kan variera. Förmåner som försäkringar
              och friskvård beror på arbetsgivarens policy och avtal.
            </p>
          </div>

          {/* Vad gäller enligt lag? */}
          <div className="bg-card rounded-xl p-6 sm:p-8 border border-border mb-6">
            <h3 className="text-lg font-semibold">Vad gäller enligt lag?</h3>
            <ul className="mt-2 text-sm text-muted-foreground list-disc pl-5">
              <li>Allmän pension: tjänas in via inkomstskatt på din lön (ingår alltid).</li>
              <li>Tjänstepension: beror på kollektivavtal/överenskommelser.</li>
              <li>Försäkringar: arbetsskade- och sjukförsäkring kan ingå med avtal.</li>
            </ul>
          </div>

          {/* Vanliga missförstånd */}
          <div className="bg-card rounded-xl p-6 sm:p-8 border border-border mb-6">
            <h3 className="text-lg font-semibold">Vanliga missförstånd</h3>
            <ul className="mt-2 text-sm text-muted-foreground list-disc pl-5">
              <li>“Timanställda får aldrig tjänstepension” – stämmer inte om kollektivavtal finns.</li>
              <li>“Förmåner gäller bara heltidsanställda” – många arbetsgivare ger förmåner även till timanställda.</li>
              <li>“Varierande timmar ger ingen pension” – all beskattad timlön ger allmän pension.</li>
            </ul>
          </div>

          {/* Exempel (med siffror) */}
          <div className="bg-card rounded-xl p-6 sm:p-8 border border-border mb-6">
            <h3 className="text-lg font-semibold">Exempel</h3>
            <p className="text-sm text-muted-foreground">
          Månadsinkomst 24 000 kr och tjänstepension 4,5% → 24 000 × 12 = 288 000 kr/år.
                        Tjänstepension: 288 000 × 4,5% = 12 960 kr/år. Eget sparande 500 kr/mån = 6 000 kr/år.
                      </p>
                    </div>

                    {/* FAQ */}
                    <div className="bg-card rounded-xl p-6 sm:p-8 border border-border mb-6">
                      <FAQSection items={faqs} />
                    </div>
                  </div>
                </section>
                <FAQSchema items={faqs} />
              </Layout>
            );
          }