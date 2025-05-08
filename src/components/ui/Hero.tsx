
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle?: string;
  className?: string;
  imageUrl?: string;
  children?: ReactNode;
  overlay?: boolean;
}

const Hero = ({ 
  title, 
  subtitle, 
  className, 
  imageUrl,
  children,
  overlay = true
}: HeroProps) => {
  return (
    <section 
      className={cn(
        "relative flex flex-col items-center justify-center text-center px-4 py-24 md:py-32",
        imageUrl ? "text-white" : "text-soul-stone",
        className
      )}
      style={imageUrl ? { backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
    >
      {imageUrl && overlay && (
        <div className="absolute inset-0 bg-soul-stone/50" aria-hidden="true"></div>
      )}
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="font-serif text-3xl md:text-5xl font-medium mb-4">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
};

export default Hero;
