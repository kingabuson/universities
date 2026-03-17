interface SectionLabelProps {
  children: React.ReactNode;
  align?: "center" | "left";
  variant?: "gold" | "blue";
}

export default function SectionLabel({
  children,
  align = "center",
  variant = "gold",
}: SectionLabelProps) {
  return (
    <p
      className={`text-xs font-sans font-semibold tracking-[0.14em] uppercase mb-3 ${
        align === "center" ? "text-center" : "text-left"
      } ${variant === "gold" ? "text-gold" : "text-navy-400"}`}
    >
      {children}
    </p>
  );
}
