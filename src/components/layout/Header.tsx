import { Link } from "react-router-dom";
import { Clock, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Lön & ersättning", href: "/lon-ersattning" },
  { name: "Sjukdom", href: "/sjukdom-franvaro" },
  { name: "Kontrakt", href: "/kontrakt-rattigheter" },
  { name: "Semester", href: "/semester" },
  { name: "Skatt", href: "/skatt-utbetalning" },
  { name: "Praktiskt", href: "/praktiska-situationer" },
  { name: "Pension", href: "/pension-formaner" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/60">
      <nav className="container-page">
        <div className="flex h-14 items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="flex items-center justify-center w-8 h-8 rounded-md hero-gradient">
              <Clock className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground font-display">
              timanställd.se
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-0.5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 rounded-md transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden h-9 w-9"
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
          <div className="lg:hidden py-3 border-t border-border/60 animate-fade-in">
            <div className="flex flex-col gap-0.5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 rounded-md transition-colors"
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
