
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

const FeatureCard = ({ title, description, icon, className }: FeatureCardProps) => {
  return (
    <div className={cn("card-custom flex flex-col items-center text-center p-6 h-full transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg", className)}>
      {icon && <div className="text-soul-blue mb-4 text-3xl">{icon}</div>}
      <h3 className="text-xl font-serif mb-2">{title}</h3>
      <p className="text-soul-stone/80">{description}</p>
    </div>
  );
};

export default FeatureCard;
