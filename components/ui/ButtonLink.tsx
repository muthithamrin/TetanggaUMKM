import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-cocoa text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#3f291d]",
  secondary:
    "border border-cocoa/10 bg-white/70 text-cocoa hover:-translate-y-0.5 hover:bg-white",
  ghost:
    "text-cocoa/78 underline decoration-cocoa/20 underline-offset-[10px] hover:text-cocoa hover:decoration-cocoa/55"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.02em] transition duration-300 ${variants[variant]} ${className}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}
