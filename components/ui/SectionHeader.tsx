type SectionHeaderProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
  eyebrow?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeader({
  title,
  description,
  align = "left",
  eyebrow,
  titleClassName = "",
  descriptionClassName = ""
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={alignment}>
      {eyebrow ? (
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-cocoa/48">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-4xl leading-[0.94] sm:text-5xl lg:text-[4.4rem] ${titleClassName}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl text-sm leading-7 text-cocoa/68 sm:text-base sm:leading-8 ${descriptionClassName}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
