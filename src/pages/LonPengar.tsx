import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Banknote } from "lucide-react";
import { Link } from "react-router-dom";

export default function LonPengar() {
  return (
    <Layout>
      <PageHeader
        title="Lön & pengar"
        description="Denna sida har slagits ihop med 'Lön & ersättning' för en bättre översikt."
        icon={Banknote}
      />
      <section className="section-padding">
        <div className="container-page">
          <div className="bg-card rounded-xl p-6 sm:p-8 border border-border text-sm">
            <p className="text-muted-foreground">
              Se samlad information om timlön, OB, semesterersättning och röda dagar på{" "}
              <Link to="/lon-ersattning" className="underline hover:text-primary">Lön & ersättning</Link>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
