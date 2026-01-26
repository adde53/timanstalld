import { Link } from "react-router-dom";
import { Clock } from "lucide-react";

const categories = [
  { name: "Lön & ersättning", href: "/lon-ersattning" },
  { name: "Sjukdom & frånvaro", href: "/sjukdom-franvaro" },
  { name: "Kontrakt & rättigheter", href: "/kontrakt-rattigheter" },
  { name: "Semester", href: "/semester" },
  { name: "Skatt & utbetalning", href: "/skatt-utbetalning" },
  { name: "Praktiska situationer", href: "/praktiska-situationer" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-page section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg hero-gradient">
                <Clock className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-lg text-foreground">
                timanställd.se
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Din guide till allt om timanställning. Snabba, enkla svar på dina frågor om lön, semester, rättigheter och mer.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Kategorier</h3>
            <ul className="space-y-2">
              {categories.slice(0, 3).map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Mer info</h3>
            <ul className="space-y-2">
              {categories.slice(3).map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} timanställd.se. Informationen på denna sida är endast vägledande.
          </p>
        </div>
      </div>
    </footer>
  );
}
