import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = PropsWithChildren<{
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
}>;

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
}: ButtonLinkProps) {
  const primaryStyle =
    variant === "primary" ? { color: "#0f172a" } : undefined;

  return (
    <a
      href={href}
      style={primaryStyle}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300",
        variant === "primary" &&
          "border border-cyan-300/30 bg-[linear-gradient(135deg,#f8fdff_0%,#c9f7ff_32%,#8ed9ff_100%)] !text-slate-950 shadow-[0_0_40px_rgba(56,189,248,0.22)] hover:-translate-y-0.5 hover:!text-slate-950 hover:shadow-[0_0_60px_rgba(96,165,250,0.26)] [&_*]:!text-slate-950",
        variant === "secondary" &&
          "border border-white/12 bg-white/5 text-white hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.08]",
        className,
      )}
    >
      {children}
    </a>
  );
}
