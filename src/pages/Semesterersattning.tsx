import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function Semesterersattning() {
// Semesterersättning kalkylator
const [hours, setHours] = useState<number>(160);
const [hourlyWage, setHourlyWage] = useState<number>(140);
const [obHours, setObHours] = useState<number>(0);
const [ob, setOb] = useState<number>(25);
const [semesterPercent, setSemesterPercent] = useState<number>(12);
const [taxPercent, setTaxPercent] = useState<number>(30);
const [adjustment, setAdjustment] = useState<number>(0);

const base = (hours * hourlyWage) + (obHours * ob);
const semesterersattning = base * (semesterPercent / 100);
const gross = base + semesterersattning;
const tax = Math.max(0, (gross * (taxPercent / 100)) - adjustment);
const net = gross - tax;

return (
  <Layout>
    <PageHeader
      title="Semesterersättning timanställd – procent & exempel"
      description="Denna sida har slagits ihop med 'Lön & ersättning' för en bättre översikt."
      icon={Sun}
    />
    <section className="section-padding">
      <div className="container-page">
        <div className="bg-card rounded-xl p-6 sm:p-8 border border-border text-sm">
          <p className="text-muted-foreground">
            Innehållet och kalkylatorn för semesterersättning finns nu på sidan{" "}
            <Link to="/lon-ersattning" className="underline hover:text-primary">Lön & ersättning</Link>.
          </p>
        </div>
      </div>
    </section>

    {/* Kalkylator: räkna ut lön inkl. semesterersättning */}
    <section className="section-padding">
      <div className="container-page">
        <div className="bg-card rounded-xl p-6 sm:p-8 border border-border">
          <h2 className="text-lg font-semibold mb-4">Räkna ut lön för timanställd inkl. semesterersättning</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="text-sm text-muted-foreground">Antal timmar</label>
              <Input
                type="number"
                value={hours}
                onChange={e => setHours(Number(e.target.value))}
                className="mt-1"
                min={0}
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Timlön (kr)</label>
              <Input
                type="number"
                value={hourlyWage}
                onChange={e => setHourlyWage(Number(e.target.value))}
                className="mt-1"
                min={0}
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">OB-timmar</label>
              <Input
                type="number"
                value={obHours}
                onChange={e => setObHours(Number(e.target.value))}
                className="mt-1"
                min={0}
                max={hours}
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">OB-tillägg (kr/timme)</label>
              <Input
                type="number"
                value={ob}
                onChange={e => setOb(Number(e.target.value))}
                className="mt-1"
                min={0}
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Semesterersättning (%)</label>
              <Input
                type="number"
                value={semesterPercent}
                onChange={e => setSemesterPercent(Number(e.target.value))}
                className="mt-1"
                min={0}
                max={100}
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Skatt (%)</label>
              <Input
                type="number"
                value={taxPercent}
                onChange={e => setTaxPercent(Number(e.target.value))}
                className="mt-1"
                min={0}
                max={100}
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Skattejustering (kr)</label>
              <Input
                type="number"
                value={adjustment}
                onChange={e => setAdjustment(Number(e.target.value))}
                className="mt-1"
                min={0}
              />
            </div>
          </div>
          <div className="mt-6 bg-muted/40 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">Semesterersättning</p>
            <p className="text-xl font-bold">
              {new Intl.NumberFormat("sv-SE", { style: "currency", currency: "SEK", maximumFractionDigits: 0 }).format(semesterersattning)}
            </p>
            <p className="text-sm text-muted-foreground mt-2">Bruttolön inkl. semesterersättning</p>
            <p className="text-xl font-bold">
              {new Intl.NumberFormat("sv-SE", { style: "currency", currency: "SEK", maximumFractionDigits: 0 }).format(gross)}
            </p>
            <p className="text-sm text-muted-foreground mt-2">Skatt: {new Intl.NumberFormat("sv-SE", { style: "currency", currency: "SEK", maximumFractionDigits: 0 }).format(tax)}</p>
            <p className="text-sm text-muted-foreground">Nettolön</p>
            <p className="text-2xl font-bold">
              {new Intl.NumberFormat("sv-SE", { style: "currency", currency: "SEK", maximumFractionDigits: 0 }).format(net)}
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);
}