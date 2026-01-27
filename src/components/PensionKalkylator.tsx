import { useState } from "react";
import { Input } from "@/components/ui/input";

export function PensionKalkylator() {
  const [monthlyIncome, setMonthlyIncome] = useState<number>(24000);
  const [tjanstePercent, setTjanstePercent] = useState<number>(4.5);
  const [ownSaving, setOwnSaving] = useState<number>(500);

  const formatter = new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
    maximumFractionDigits: 0,
  });

  const yearlyIncome = (monthlyIncome || 0) * 12;
  const yearlyTjanste = (yearlyIncome * (tjanstePercent || 0)) / 100;
  const yearlyOwn = (ownSaving || 0) * 12;
  const totalYearly = yearlyTjanste + yearlyOwn;

  return (
    <div className="bg-muted/30 rounded-xl p-6 sm:p-8 border border-border mt-8">
      <h3 className="text-lg font-semibold text-foreground">
        Räkna ut din tjänstepension
      </h3>
      <p className="text-sm text-muted-foreground mt-1">
        Se hur mycket som avsätts årligen till din tjänstepension och eget sparande.
      </p>

      <div className="grid sm:grid-cols-3 gap-4 mt-6">
        <div>
          <label className="text-sm text-muted-foreground">
            Månadsinkomst (kr)
          </label>
          <Input
            type="number"
            inputMode="decimal"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(Number(e.target.value))}
            className="mt-1"
            min={0}
            placeholder="t.ex. 24000"
          />
        </div>
        <div>
          <label className="text-sm text-muted-foreground">
            Tjänstepension (%)
          </label>
          <Input
            type="number"
            inputMode="decimal"
            value={tjanstePercent}
            onChange={(e) => setTjanstePercent(Number(e.target.value))}
            className="mt-1"
            min={0}
            max={30}
            step={0.1}
            placeholder="t.ex. 4.5"
          />
          <p className="text-xs text-muted-foreground mt-1">
            Vanligt är 4,5% enligt SAF-LO-avtal.
          </p>
        </div>
        <div>
          <label className="text-sm text-muted-foreground">
            Eget sparande (kr/mån)
          </label>
          <Input
            type="number"
            inputMode="decimal"
            value={ownSaving}
            onChange={(e) => setOwnSaving(Number(e.target.value))}
            className="mt-1"
            min={0}
            placeholder="t.ex. 500"
          />
        </div>
      </div>

      <div className="mt-6 bg-card rounded-lg p-4 border border-border">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Årsinkomst</p>
            <p className="text-xl font-semibold">{formatter.format(yearlyIncome)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Tjänstepension/år</p>
            <p className="text-xl font-semibold text-primary">
              {formatter.format(yearlyTjanste)}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Eget sparande/år</p>
            <p className="text-xl font-semibold">{formatter.format(yearlyOwn)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Totalt pensionssparande/år</p>
            <p className="text-2xl font-bold">{formatter.format(totalYearly)}</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          Beräkningen visar tjänstepension via arbetsgivaren plus eventuellt eget sparande. 
          Allmän pension (via Pensionsmyndigheten) tillkommer utöver detta.
        </p>
      </div>
    </div>
  );
}
