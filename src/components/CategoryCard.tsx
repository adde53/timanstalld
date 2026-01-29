import { Link } from "react-router-dom";
import { LucideIcon, ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  questionCount: number;
}

export function CategoryCard({
  title,
  description,
  href,
  icon: Icon,
  questionCount,
}: CategoryCardProps) {
  return (
    <Link
      to={href}
      className="group block bg-card rounded-xl p-5 card-elevated border border-border hover:border-primary/30"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors font-display">
            {title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          {questionCount} vanliga frågor
        </p>
        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
      </div>
    </Link>
  );
}
