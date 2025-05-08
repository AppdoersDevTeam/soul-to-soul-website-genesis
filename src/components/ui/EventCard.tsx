
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EventCardProps {
  title: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  imageUrl?: string;
  isVirtual?: boolean;
  isPast?: boolean;
  className?: string;
}

const EventCard = ({
  title,
  date,
  time,
  location,
  description,
  imageUrl,
  isVirtual = false,
  isPast = false,
  className,
}: EventCardProps) => {
  return (
    <div className={cn("overflow-hidden rounded-lg border border-soul-cream bg-white shadow-md hover:shadow-lg transition-all", className)}>
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
        <div className="mb-3 flex items-center">
          <div className="bg-soul-cream rounded-md p-2 mr-3 text-center w-14">
            <div className="text-xs uppercase text-soul-stone/70">
              {date.split(" ")[0]}
            </div>
            <div className="font-medium text-xl text-soul-stone">
              {date.split(" ")[1]}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-serif font-medium">{title}</h3>
            <div className="text-sm text-soul-stone/70 mt-1">
              {isVirtual ? (
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Virtual Event • {time}
                </span>
              ) : (
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {location} • {time}
                </span>
              )}
            </div>
          </div>
        </div>
        
        <p className="text-soul-stone/80 mb-5">{description}</p>
        
        <div className="mt-4">
          {isPast ? (
            <div className="text-sm text-soul-stone/70 italic">This event has ended</div>
          ) : (
            <Button variant="outline" className="border-soul-sage text-soul-sage hover:bg-soul-sage hover:text-white">
              {/* Coming Soon - RSVP placeholder */}
              RSVP Coming Soon
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
