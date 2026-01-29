import { Link } from "react-router-dom";
import { Clock } from "lucide-react";

const categories = [
  { name: "Lön & ersättning", href: "/lon-ersattning" },
  { name: "Sjukdom & frånvaro", href: "/sjukdom-franvaro" },
  { name: "Kontrakt & rättigheter", href: "/kontrakt-rattigheter" },
  { name: "Semester", href: "/semester" },
  { name: "Skatt & utbetalning", href: "/skatt-utbetalning" },
  { name: "Praktiska situationer", href: "/praktiska-situationer" },
  { name: "Pension & förmåner", href: "/pension-formaner" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-page py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary">
                <Clock className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-background font-display">
                timanställd.se
              </span>
            </Link>
            <p className="text-sm text-background/70 leading-relaxed max-w-xs">
              Din guide till allt om timanställning. Snabba, enkla svar på dina frågor om lön, semester och rättigheter.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-background mb-4 font-display">Kategorier</h3>
            <ul className="space-y-2">
              {categories.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-background mb-4 font-display">Mer info</h3>
            <ul className="space-y-2">
              {categories.slice(4).map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/gdpr"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  Integritetspolicy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} timanställd.se. Informationen är endast vägledande.
          </p>
          <a
            href="mailto:info@timanstalld.se"
            className="text-sm text-background/60 hover:text-background transition-colors"
          >
            info@timanstalld.se
          </a>
        </div>
      </div>
    </footer>
  );
}
