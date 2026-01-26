// src/components/LoneKalkylator.tsx
import { useState } from "react";
import { Input } from "@/components/ui/input";

export function LoneKalkylator() {
  const [timlon, setTimlon] = useState<number>(150);
  const [obTillagg, setObTillagg] = useState<number>(20);
  const [timmar, setTimmar] = useState<number>(160);
  const [skattProcent, setSkattProcent] = useState<number>(30);
  const [jamkningBelopp, setJamkningBelopp] = useState<number>(0);

  const formatter = new Intl.NumberFormat("sv-SE", { style: "currency", currency: "SEK", maximumFractionDigits: 0 });

  const brutto = Math.max(0, timmar * (timlon + obTillagg));
  const prelimSkatt = Math.max(0, brutto * (skattProcent / 100));
  const skattEfterJamkning = Math.max(0, prelimSkatt - (jamkningBelopp || 0));
  const netto = Math.max(0, brutto - skattEfterJamkning);

  return (
    <div className="bg-card rounded-xl p-6 sm:p-8 border border-border">
      <h3 className="text-lg font-semibold">Lönekalkylator för timanställda</h3>
      <p className="text-sm text-muted-foreground mt-1">
        Räkna på timlön, OB per timme och skatt (med valfri jämkning).
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <div>
          <label className="text-sm text-muted-foreground">Timlön (kr)</label>
          <Input
            type="number"
            inputMode="decimal"
            value={timlon}
            onChange={(e) => setTimlon(Number(e.target.value))}
            className="mt-1"
            min={0}
            placeholder="t.ex. 150"
          />
        </div>
        <div>
          <label className="text-sm text-muted-foreground">OB-tillägg per timme (kr)</label>
          <Input
            type="number"
            inputMode="decimal"
            value={obTillagg}
            onChange={(e) => setObTillagg(Number(e.target.value))}
            className="mt-1"
            min={0}
            placeholder="t.ex. 20"
          />
        </div>
        <div>
          <label className="text-sm text-muted-foreground">Antal timmar (månad)</label>
          <Input
            type="number"
            inputMode="numeric"
            value={timmar}
            onChange={(e) => setTimmar(Number(e.target.value))}
            className="mt-1"
            min={0}
            placeholder="t.ex. 160"
          />
        </div>
        <div>
          <label className="text-sm text-muted-foreground">Skatteprocent (%)</label>
          <Input
            type="number"
            inputMode="decimal"
            value={skattProcent}
            onChange={(e) => setSkattProcent(Number(e.target.value))}
            className="mt-1"
            min={0}
            max={60}
            placeholder="t.ex. 30"
          />
        </div>
        <div>
          <label className="text-sm text-muted-foreground">Jämkning (kr/mån)</label>
          <Input
            type="number"
            inputMode="decimal"
            value={jamkningBelopp}
            onChange={(e) => setJamkningBelopp(Number(e.target.value))}
            className="mt-1"
            min={0}
            placeholder="t.ex. 800"
          />
        </div>
      </div>

      <div className="mt-6 bg-muted/40 rounded-lg p-4">
        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <p className="text-sm text-muted-foreground">Bruttolön (inkl. OB)</p>
            <p className="text-xl font-semibold">{formatter.format(brutto)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Preliminär skatt</p>
            <p className="text-xl font-semibold">{formatter.format(prelimSkatt)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Skatt efter jämkning</p>
            <p className="text-xl font-semibold">{formatter.format(skattEfterJamkning)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Nettolön (beräknad)</p>
            <p className="text-2xl font-bold">{formatter.format(netto)}</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-3">
          Förenklad modell: timmar × (timlön + OB) = bruttolön. Skatt = bruttolön × skatteprocent − jämkning.
          Kontrollera din skattetabell och jämkning hos Skatteverket.
        </p>
      </div>
    </div>
  );
}
