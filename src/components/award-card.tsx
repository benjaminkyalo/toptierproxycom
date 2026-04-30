import { Link } from "@tanstack/react-router";
import { Award } from "lucide-react";
import type { ReactNode } from "react";

interface AwardCardProps {
  to: string;
  title: string;
  icon?: ReactNode;
}

export function AwardCard({ to, title, icon }: AwardCardProps) {
  return (
    <Link
      to={to}
      className="group flex h-32 flex-col items-center justify-center gap-3 rounded-md bg-card px-4 py-6 text-center shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
    >
      <div className="text-foreground/80 group-hover:text-primary">
        {icon ?? <Award className="h-7 w-7" strokeWidth={1.5} />}
      </div>
      <span className="text-sm font-bold leading-tight text-foreground">{title}</span>
    </Link>
  );
}

export function LogoCard({ to, label, logo }: { to: string; label: string; logo: ReactNode }) {
  return (
    <Link
      to={to}
      className="group flex h-32 flex-col items-center justify-center gap-3 rounded-md bg-card px-4 py-6 text-center shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
    >
      <div className="flex h-10 items-center">{logo}</div>
      <span className="text-sm font-bold leading-tight text-foreground">{label}</span>
    </Link>
  );
}
