import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionTitle({
  title,
  subtitle,
  children,
  align = "center",
  light = false,
  titleClassName,
  subtitleClassName,
}: SectionTitleProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2
        className={`section-title transition-all duration-700 ${titleClassName} ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        } ${light ? "text-primary-foreground" : ""}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`section-subtitle mt-4 transition-all duration-700 delay-100 ${subtitleClassName} ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } ${light ? "text-primary-foreground/80" : ""} ${align === "center" ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
