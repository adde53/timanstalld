import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

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
      className="group block bg-card rounded-xl p-6 card-elevated border border-border"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            {questionCount} vanliga frågor
          </p>
        </div>
      </div>
    </Link>
  );
}
