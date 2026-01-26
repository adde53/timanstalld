import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function PageHeader({ title, description, icon: Icon }: PageHeaderProps) {
  return (
    <div className="bg-card border-b border-border">
      <div className="container-page py-8 sm:py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          Tillbaka till startsidan
        </Link>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-14 h-14 rounded-xl hero-gradient flex items-center justify-center">
            <Icon className="h-7 w-7 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
              {title}
            </h1>
            <p className="mt-2 text-muted-foreground max-w-2xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
