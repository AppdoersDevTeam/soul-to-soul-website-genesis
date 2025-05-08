
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ProgramCardProps {
  title: string;
  description: string;
  features?: string[];
  imageUrl?: string;
  comingSoon?: boolean;
  className?: string;
}

const ProgramCard = ({
  title,
  description,
  features = [],
  imageUrl,
  comingSoon = false,
  className,
}: ProgramCardProps) => {
  return (
    <div className={cn("overflow-hidden rounded-lg border border-soul-cream bg-white shadow-md transition-all hover:shadow-lg", className)}>
      {imageUrl && (
        <div className="h-48 w-full">
          <img 
            src={imageUrl} 
            alt={title} 
            className="h-full w-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-serif font-medium mb-2">{title}</h3>
        
        <p className="text-soul-stone/80 mb-4">{description}</p>
        
        {features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-5 w-5 text-soul-sage mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        {comingSoon ? (
          <div className="inline-block bg-soul-sand/30 text-soul-stone px-4 py-2 rounded text-sm font-medium">
            Coming Soon
          </div>
        ) : (
          <Link to="/contact">
            <Button className="bg-soul-sage hover:bg-soul-sage/90 text-white">
              Learn More
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProgramCard;
