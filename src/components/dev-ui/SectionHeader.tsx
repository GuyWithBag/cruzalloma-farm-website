import { cn } from "@/lib/utils/utils";

type SectionHeaderProps = {
  eyebrow: string;
  heading: string;
  subHeading: string;
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  heading,
  subHeading,
  className,
}: SectionHeaderProps) {
  return (
    <header className={cn("flex flex-col", className)}>
      <p className="font-display text-[clamp(6px,1.3vw,20px)] md:text-body-medium font-semibold underline leading-[1.5] text-text-primary">
        {eyebrow}
      </p>
      <h2 className="font-display text-[clamp(18px,1.8vw,28px)] md:text-heading-2 font-bold leading-[1.3] text-text-primary">
        {heading}
      </h2>
      <p className="font-sans text-[clamp(8px,1.3vw,20px)] md:text-heading-4 leading-[1.5] text-text-primary">
        {subHeading}
      </p>
    </header>
  );
}
