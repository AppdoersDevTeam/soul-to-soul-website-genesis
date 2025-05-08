
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
  id?: string;
  bgColor?: string;
}

const Section = ({ title, subtitle, className, children, id, bgColor }: SectionProps) => {
  return (
    <section 
      id={id} 
      className={cn(
        "section",
        bgColor === "cream" && "bg-soul-cream",
        bgColor === "white" && "bg-white",
        bgColor === "blue" && "bg-soul-blue/10",
        bgColor === "gold" && "bg-soul-gold/10",
        className
      )}
    >
      <div className="container-custom">
        {title && <h2 className="section-title text-center">{title}</h2>}
        {subtitle && <p className="section-subtitle text-center">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
};

export default Section;
