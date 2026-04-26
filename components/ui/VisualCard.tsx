type VisualCardProps = {
  title: string;
  subtitle?: string;
  tone: string;
  compact?: boolean;
  imageUrl?: string;
};

export function VisualCard({
  title,
  subtitle,
  tone,
  compact = false,
  imageUrl
}: VisualCardProps) {
  return (
    <div
      className={`relative aspect-square overflow-hidden rounded-[1.75rem] ${
        compact ? "sm:min-h-[220px]" : "sm:min-h-[300px]"
      }`}
      aria-hidden="true"
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          className="fade-media absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${tone}`} />
      )}
    </div>
  );
}
