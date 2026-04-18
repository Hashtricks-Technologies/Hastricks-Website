import { cn } from "@/lib/utils";

type Props = {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  size?: "md" | "lg";
  className?: string;
  action?: React.ReactNode;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  size = "lg",
  className,
  action,
}: Props) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start";
  const titleCls = size === "lg" ? "text-display-lg" : "text-display-md";
  const maxWidthCls = align === "center" ? "mx-auto" : "";

  return (
    <div
      className={cn(
        "flex flex-col gap-6 reveal",
        align === "center" ? "items-center text-center" : "",
        className,
      )}
    >
      <div className={cn("flex w-full gap-6 flex-wrap", alignCls)}>
        <div className={cn("flex flex-col gap-4 max-w-3xl", maxWidthCls)}>
          <span className="eyebrow">
            {index && <span className="text-numeral text-[var(--color-primary)]">{index}</span>}
            <span className="eyebrow-rule" />
            <span>{eyebrow}</span>
          </span>
          <h2 className={cn(titleCls, "text-[var(--color-neutral)]")}>{title}</h2>
          {description && (
            <p className="text-base md:text-lg text-[var(--color-neutral)]/70 leading-relaxed">
              {description}
            </p>
          )}
        </div>
        {action && <div className="ml-auto self-end">{action}</div>}
      </div>
      <div className="horizon-line w-full max-w-2xl" />
    </div>
  );
}
