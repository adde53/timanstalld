import { Link } from "react-router-dom";
import { Clock, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Lön & ersättning", href: "/lon-ersattning" },
  { name: "Sjukdom & frånvaro", href: "/sjukdom-franvaro" },
  { name: "Kontrakt & rättigheter", href: "/kontrakt-rattigheter" },
  { name: "Semester", href: "/semester" },
  { name: "Skatt", href: "/skatt-utbetalning" },
  { name: "Praktiska situationer", href: "/praktiska-situationer" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <nav className="container-page">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg hero-gradient">
              <Clock className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg text-foreground">
              timanställd.se
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-3 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
