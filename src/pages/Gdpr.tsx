import { Layout } from "@/components/layout/Layout";

export default function GDPRPage() {
  return (
    <Layout>
      <div className="container-page section-padding">
        <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">GDPR & Cookies</h1>
        <p className="text-muted-foreground leading-relaxed">
          Vi använder cookies för att förbättra din upplevelse på webbplatsen. Ingen personlig information lagras utan ditt samtycke. Läs mer om hur vi hanterar data och dina rättigheter på denna sida.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Vilka cookies används?</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Sessionscookies för att förbättra navigationen</li>
          <li>Analyscookies (t.ex. Google Analytics) för anonym statistik</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Dina rättigheter</h2>
        <p className="text-muted-foreground leading-relaxed">
          Du kan när som helst återkalla ditt samtycke till cookies genom att rensa din webbläsares cookies.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Kontakt</h2>
        <p className="text-muted-foreground">
          Vid frågor, kontakta oss på{" "}
          <a
            href="mailto:info@timanstalld.se"
            className="hover:text-foreground underline-offset-4 hover:underline"
          >
            info@timanstalld.se
          </a>
          .
        </p>
      </div>
    </Layout>
  );
}

