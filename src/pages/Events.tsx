import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";
import EventCard, { Event } from "@/components/ui/EventCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AppdoersCTA from "@/components/layout/AppdoersCTA";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Get current year and month
const now = new Date();
const currentYear = now.getFullYear();
const currentMonth = now.getMonth(); // 0-indexed

const events: Event[] = [
  // Events for the current month
  {
    id: 101,
    title: "Appdoers Community Meetup",
    date: `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-05`,
    time: "6:00 PM - 8:00 PM",
    location: "Downtown Hub",
    description: "Network and connect with fellow Appdoers in your city!",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000",
    status: "past"
  },
  {
    id: 102,
    title: "Monthly Wellness Webinar",
    date: `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-12`,
    time: "12:00 PM - 1:00 PM",
    location: "Virtual Event",
    description: "Join our expert panel for tips on maintaining work-life balance.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=1000",
    status: "past"
  },
  {
    id: 103,
    title: "Appdoers Product Launch",
    date: `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-20`,
    time: "3:00 PM - 5:00 PM",
    location: "Innovation Center",
    description: "Be the first to experience our latest features and updates!",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1000",
    status: "upcoming"
  },
  {
    id: 104,
    title: "Virtual Coding Jam",
    date: `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-25`,
    time: "7:00 PM - 9:00 PM",
    location: "Online",
    description: "Collaborate and code with the Appdoers community in real time.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1000",
    status: "upcoming"
  },
  {
    id: 1,
    title: "Mindfulness Meditation Workshop",
    date: "2024-03-15",
    time: "10:00 AM - 12:00 PM",
    location: "Virtual Event",
    description: "Join us for a transformative mindfulness meditation workshop. Learn practical techniques to reduce stress and enhance your daily life.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000",
    status: "upcoming"
  },
  {
    id: 2,
    title: "Yoga & Wellness Retreat",
    date: "2024-03-20",
    time: "9:00 AM - 4:00 PM",
    location: "Sunset Beach Resort",
    description: "A full-day retreat combining yoga, meditation, and wellness practices in a serene beach setting.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000",
    status: "upcoming"
  },
  {
    id: 3,
    title: "Stress Management Seminar",
    date: "2024-02-28",
    time: "2:00 PM - 4:00 PM",
    location: "Community Center",
    description: "Learn effective strategies for managing stress in your personal and professional life.",
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80",
    status: "past"
  },
  {
    id: 4,
    title: "Holistic Health Workshop",
    date: "2024-02-15",
    time: "11:00 AM - 1:00 PM",
    location: "Virtual Event",
    description: "Explore the connection between mind, body, and spirit in this comprehensive workshop.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000",
    status: "past"
  }
];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const getEventsForDate = (date: Date) => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === date.getDate() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getFullYear() === date.getFullYear()
      );
    });
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + (direction === 'next' ? 1 : -1));
      return newDate;
    });
    setSelectedDate(null); // Reset selected date when changing month
  };

  const renderCalendarDays = () => {
    const days = [];
    const today = new Date();

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-24" />);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const dayEvents = getEventsForDate(date);
      const isToday = date.toDateString() === today.toDateString();
      const isSelected = selectedDate?.toDateString() === date.toDateString();

      days.push(
        <motion.div
          key={day}
          className={`relative h-24 p-2 border border-soul-cream/20 rounded-lg cursor-pointer hover:bg-soul-cream/5 transition-colors ${
            isToday ? 'bg-soul-cream/10' : ''
          } ${isSelected ? 'ring-2 ring-soul-blue' : ''}`}
          onClick={() => setSelectedDate(date)}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="font-medium text-soul-stone/70 flex items-center justify-between">
            {day}
            {dayEvents.length > 0 && (
              <span className="inline-block ml-1">
                <span className={`w-2 h-2 rounded-full inline-block ${
                  dayEvents.some(e => e.status === 'upcoming')
                    ? 'bg-soul-blue'
                    : 'bg-soul-stone/70'
                }`} />
              </span>
            )}
          </div>
        </motion.div>
      );
    }

    return days;
  };

  // Show events for the selected date
  const selectedDayEvents = selectedDate ? getEventsForDate(selectedDate) : [];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-serif font-semibold text-soul-blue">
          {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigateMonth('prev')}
            className="hover:bg-soul-cream/10"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigateMonth('next')}
            className="hover:bg-soul-cream/10"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-sm font-medium text-soul-stone/70">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {renderCalendarDays()}
      </div>
      {selectedDate && selectedDayEvents.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-soul-blue mb-2 text-center">
            Events on {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </h3>
          <ul className="space-y-3">
            {selectedDayEvents.map(event => (
              <li key={event.id} className="bg-soul-cream/40 rounded-lg p-3 flex flex-col gap-1 shadow animate-fade-in">
                <span className="font-serif font-medium text-soul-blue text-base">{event.title}</span>
                <span className="text-soul-stone/80 text-sm">{event.time} &mdash; {event.location}</span>
                <span className={`text-xs font-semibold ${event.status === 'past' ? 'text-soul-stone/70' : 'text-soul-blue'}`}>{event.status === 'past' ? 'Past Event' : 'Upcoming Event'}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Events = () => {
  const upcomingEvents = events.filter(event => event.status === 'upcoming');
  const pastEvents = events.filter(event => event.status === 'past');

  // Modal state
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Handler for register button
  const handleRegisterClick = (event: Event) => {
    console.log('Register button clicked for event:', event);
    setSelectedEvent(event);
    setShowUpgradeModal(true);
    console.log('showUpgradeModal should now be:', true);
  };

  return (
    <PageLayout>
      <Hero
        title="Upcoming Events"
        subtitle="Join us for transformative workshops, retreats, and seminars designed to nurture your mind, body, and spirit."
        imageUrl="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000"
      />

      <Section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif font-semibold text-soul-blue mb-8">
                Upcoming Events
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingEvents.map(event => (
                  <EventCard key={event.id} event={event} onRegister={handleRegisterClick} />
                ))}
              </div>
            </div>
            <div>
              <Calendar />
            </div>
          </div>

          {pastEvents.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-serif font-semibold text-soul-blue mb-8">
                Past Events
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEvents.map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>

      <AppdoersCTA />

      {/* Upgrade Modal */}
      <Dialog open={showUpgradeModal} onOpenChange={setShowUpgradeModal}>
        <DialogContent className="max-w-md mx-auto rounded-xl p-8 bg-white shadow-xl animate-fade-in">
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-bold text-soul-blue">Advanced Plan Required</h2>
            <div className="bg-soul-cream/60 rounded-lg p-4">
              <p className="text-soul-stone/90 text-base mb-2">
                Registration for events is only available to members on the <span className="font-semibold text-soul-gold">Advanced Plan</span>.
              </p>
              {selectedEvent && (
                <p className="text-soul-stone/80 text-sm mb-2">
                  Event: <span className="font-semibold">{selectedEvent.title}</span>
                </p>
              )}
              <p className="text-soul-stone/70 text-sm">
                To upgrade your plan and unlock event registration, please contact us:
              </p>
              <a
                href="mailto:info@appdoers.com?subject=Upgrade%20to%20Advanced%20Plan"
                className="block mt-2 text-soul-blue underline font-medium"
              >
                info@appdoers.com
              </a>
            </div>
            <div className="flex gap-4 justify-center mt-6">
              <button
                className="px-6 py-2 rounded-lg bg-soul-gold text-white font-semibold shadow hover:bg-soul-gold-accent transition"
                onClick={() => {
                  window.open('mailto:info@appdoers.com?subject=Upgrade%20to%20Advanced%20Plan', '_blank');
                }}
              >
                Contact to Upgrade
              </button>
              <button
                className="px-6 py-2 rounded-lg bg-soul-stone/10 text-soul-stone font-semibold hover:bg-soul-stone/20 transition"
                onClick={() => setShowUpgradeModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
};

export default Events;
