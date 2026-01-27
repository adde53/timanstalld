import { useState } from "react";
import { Input } from "@/components/ui/input";

export function SemesterKalkylator() {
  const [bruttoLon, setBruttoLon] = useState<number>(25000);
  const [procent, setProcent] = useState<number>(12);

  const formatter = new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
    maximumFractionDigits: 0,
  });

  const semesterersattning = Math.max(0, (bruttoLon || 0) * ((procent || 0) / 100));
  const totalLon = (bruttoLon || 0) + semesterersattning;

  return (
    <div className="bg-muted/30 rounded-xl p-6 sm:p-8 border border-border mt-8">
      <h3 className="text-lg font-semibold text-foreground">
        Räkna ut din semesterersättning
      </h3>
      <p className="text-sm text-muted-foreground mt-1">
        Ange din bruttolön och procentsats för att se din semesterersättning.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        <div>
          <label className="text-sm text-muted-foreground">
            Bruttolön (kr/månad)
          </label>
          <Input
            type="number"
            inputMode="decimal"
            value={bruttoLon}
            onChange={(e) => setBruttoLon(Number(e.target.value))}
            className="mt-1"
            min={0}
            placeholder="t.ex. 25000"
          />
        </div>
        <div>
          <label className="text-sm text-muted-foreground">
            Semesterersättning (%)
          </label>
          <Input
            type="number"
            inputMode="decimal"
            value={procent}
            onChange={(e) => setProcent(Number(e.target.value))}
            className="mt-1"
            min={0}
            max={25}
            placeholder="t.ex. 12"
          />
          <p className="text-xs text-muted-foreground mt-1">
            Lagstadgat minimum är 12%. Kan vara högre enligt kollektivavtal.
          </p>
        </div>
      </div>

      <div className="mt-6 bg-card rounded-lg p-4 border border-border">
        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Bruttolön</p>
            <p className="text-xl font-semibold">{formatter.format(bruttoLon || 0)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Semesterersättning</p>
            <p className="text-xl font-semibold text-primary">
              {formatter.format(semesterersattning)}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total lön (inkl. semester)</p>
            <p className="text-2xl font-bold">{formatter.format(totalLon)}</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          Semesterersättning beräknas på din bruttolön inklusive OB och tillägg. 
          Om du arbetar varierande timmar, räkna på genomsnittlig månadslön.
        </p>
      </div>
    </div>
  );
}
