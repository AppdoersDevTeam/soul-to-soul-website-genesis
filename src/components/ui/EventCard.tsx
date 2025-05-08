import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  status: 'upcoming' | 'past';
}

interface EventCardProps {
  event: Event;
  onRegister?: (event: Event) => void;
}

const EventCard = ({ event, onRegister }: EventCardProps) => {
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md border border-soul-cream overflow-hidden hover:shadow-lg transition-all hover-lift animate-fade-in"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-48">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        {event.status === 'past' && (
          <div className="absolute top-2 right-2 bg-soul-stone/80 text-white px-2 py-1 rounded text-sm">
            Past Event
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-serif text-xl font-semibold mb-2 text-soul-blue">
          {event.title}
        </h3>
        <div className="space-y-2 text-soul-stone/70 text-sm mb-4">
          <p className="flex items-center gap-2">
            <span className="font-medium">Date:</span>
            {formattedDate}
          </p>
          <p className="flex items-center gap-2">
            <span className="font-medium">Time:</span>
            {event.time}
          </p>
          <p className="flex items-center gap-2">
            <span className="font-medium">Location:</span>
            {event.location}
          </p>
        </div>
        <p className="text-soul-stone/80 mb-4">{event.description}</p>
        <Button
          className={`w-full ${
            event.status === 'past'
              ? 'bg-soul-stone/20 text-soul-stone/70 cursor-not-allowed'
              : 'bg-soul-blue hover:bg-soul-blue-accent text-white'
          }`}
          disabled={event.status === 'past'}
          onClick={event.status === 'upcoming' && onRegister ? () => onRegister(event) : undefined}
        >
          {event.status === 'past' ? 'Event Ended' : 'Register Now'}
        </Button>
      </div>
    </motion.div>
  );
};

export default EventCard;
