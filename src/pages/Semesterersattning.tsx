import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Sun } from "lucide-react";
import { Link } from "react-router-dom";

export default function Semesterersattning() {
  return (
    <Layout>
      <PageHeader
        title="Semesterersättning timanställd"
        description="Denna sida har flyttats till 'Semester' för en bättre översikt."
        icon={Sun}
      />
      <section className="section-padding">
        <div className="container-page">
          <div className="bg-card rounded-xl p-6 sm:p-8 border border-border">
            <p className="text-muted-foreground mb-4">
              Allt om semesterersättning för timanställda – inklusive kalkylator, procentsatser och vanliga frågor – finns nu samlat på sidan Semester.
            </p>
            <Link
              to="/semester"
              className="inline-flex items-center justify-center text-sm font-medium px-5 py-3 rounded-full bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 transition-all"
            >
              Gå till Semester →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
