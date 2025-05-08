
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position?: string;
  imageUrl?: string;
  className?: string;
}

const TestimonialCard = ({ 
  quote, 
  author, 
  position, 
  imageUrl,
  className 
}: TestimonialCardProps) => {
  return (
    <div className={cn("card-custom flex flex-col h-full", className)}>
      <div className="mb-4 text-soul-sage">
        {/* Quote icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
        </svg>
      </div>
      
      <blockquote className="flex-1">
        <p className="text-soul-stone/80 italic mb-4">{quote}</p>
      </blockquote>
      
      <div className="flex items-center mt-4">
        {imageUrl && (
          <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
            <img src={imageUrl} alt={author} className="w-full h-full object-cover" />
          </div>
        )}
        <div>
          <p className="font-medium text-soul-stone">{author}</p>
          {position && <p className="text-sm text-soul-stone/70">{position}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
