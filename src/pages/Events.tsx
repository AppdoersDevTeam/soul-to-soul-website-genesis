
import PageLayout from "@/components/layout/PageLayout";
import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";
import EventCard from "@/components/ui/EventCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <PageLayout>
      <Hero
        title="Upcoming Events"
        subtitle="Join us for transformative experiences and community connection"
        imageUrl="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=1950&q=80"
      />
      
      <Section bgColor="white">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="font-serif text-3xl mb-4 text-soul-stone">Gatherings & Experiences</h2>
          <p className="text-soul-stone/80 text-lg">
            Soul to Soul hosts a variety of events throughout the year to support your growth and foster community.
            From workshops to retreats, our events offer opportunities for learning, connection, and transformation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="animate-fade-in [animation-delay:200ms]">
            <EventCard
              title="Seasonal Renewal Retreat"
              date="Sept 22"
              time="9:00 AM - 4:00 PM"
              location="Harmony Nature Center"
              description="A day-long retreat to align with the changing seasons, release what no longer serves you, and set intentions for the months ahead."
              isVirtual={false}
            />
          </div>
          
          <div className="animate-fade-in [animation-delay:300ms]">
            <EventCard
              title="Mindfulness for Daily Life"
              date="Oct 05"
              time="7:00 PM - 8:30 PM"
              location="Online Workshop"
              description="Learn practical mindfulness techniques you can integrate into your everyday routine to reduce stress and increase presence."
              isVirtual={true}
            />
          </div>
          
          <div className="animate-fade-in [animation-delay:400ms]">
            <EventCard
              title="Body Wisdom Workshop"
              date="Oct 19"
              time="10:00 AM - 12:00 PM"
              location="Wellness Collective Studio"
              description="Explore the wisdom of your body through gentle movement, somatic awareness exercises, and embodied inquiry practices."
              isVirtual={false}
            />
          </div>
          
          <div className="animate-fade-in [animation-delay:500ms]">
            <EventCard
              title="New Moon Intention Circle"
              date="Nov 01"
              time="7:30 PM - 9:00 PM"
              location="Sacred Space Center"
              description="Join our monthly community gathering to reflect, set intentions, and support one another in a safe and nurturing environment."
              isVirtual={false}
            />
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="font-serif text-2xl mb-8 text-soul-stone text-center animate-fade-in">Past Events</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-fade-in [animation-delay:200ms]">
              <EventCard
                title="Summer Solstice Celebration"
                date="Jun 21"
                time="7:00 PM - 9:00 PM"
                location="Riverside Park"
                description="A community gathering to celebrate the longest day of the year with ritual, reflection, and connection."
                isVirtual={false}
                isPast={true}
              />
            </div>
            
            <div className="animate-fade-in [animation-delay:300ms]">
              <EventCard
                title="Introduction to Integrative Coaching"
                date="Aug 12"
                time="6:30 PM - 8:00 PM"
                location="Online Workshop"
                description="Learn about our holistic approach to coaching and how it can support your personal growth journey."
                isVirtual={true}
                isPast={true}
              />
            </div>
          </div>
        </div>
      </Section>
      
      <Section bgColor="cream">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <h2 className="font-serif text-3xl mb-6 text-soul-stone">Stay Connected</h2>
          <p className="text-soul-stone/80 text-lg mb-8">
            Want to be the first to know about upcoming events? Reach out to join our mailing list or follow us on social media.
          </p>
          <Link to="/contact">
            <Button className="bg-soul-sage hover:bg-soul-sage/90 text-white transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
              Join Our Community
            </Button>
          </Link>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Events;
