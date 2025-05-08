
import PageLayout from "@/components/layout/PageLayout";
import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
    <PageLayout>
      <Hero
        title="Success Stories"
        subtitle="Hear from those who have experienced transformation through our coaching"
        imageUrl="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      
      <Section bgColor="white">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="font-serif text-3xl mb-4 text-soul-stone">Transformative Journeys</h2>
          <p className="text-soul-stone/80 text-lg">
            These stories reflect the diverse experiences of our clients. While each journey is unique,
            they share the common thread of growth, healing, and positive transformation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="animate-fade-in [animation-delay:200ms]">
            <TestimonialCard 
              quote="Soul to Soul Coaching provided me with the guidance I needed during a difficult transition in my life. The holistic approach helped me reconnect with myself and find clarity when I needed it most. I'm now moving forward with a renewed sense of purpose and confidence."
              author="Sarah J."
              position="Artist & Educator"
            />
          </div>
          
          <div className="animate-fade-in [animation-delay:300ms]">
            <TestimonialCard 
              quote="The integrated coaching approach was exactly what I needed. It wasn't just about setting goals, but about aligning my whole self with my purpose. Through our work together, I've developed practices that support my wellbeing on all levels. Truly transformative."
              author="Michael T."
              position="Financial Analyst"
            />
          </div>
          
          <div className="animate-fade-in [animation-delay:400ms]">
            <TestimonialCard 
              quote="I was skeptical at first about the mind-body-spirit approach, but after just a few sessions, I began to experience shifts in how I related to my challenges. The tools I gained have been invaluable in both my personal and professional life."
              author="Leila H."
              position="Healthcare Professional"
            />
          </div>
          
          <div className="animate-fade-in [animation-delay:500ms]">
            <TestimonialCard 
              quote="The seasonal retreat was a turning point for me. In that supportive environment, I was able to gain insights that had eluded me for years. The community aspect combined with personalized guidance created the perfect conditions for growth."
              author="Daniel W."
              position="Software Engineer"
            />
          </div>
          
          <div className="animate-fade-in [animation-delay:600ms]">
            <TestimonialCard 
              quote="Working with Soul to Soul helped me navigate a career change with integrity and alignment. Instead of just jumping to the next opportunity, I was able to clarify my values and make choices that truly resonated with my authentic self."
              author="Grace P."
              position="Nonprofit Director"
            />
          </div>
          
          <div className="animate-fade-in [animation-delay:700ms]">
            <TestimonialCard 
              quote="The group workshops provided not just insight and tools, but a community of like-minded individuals on similar journeys. The connections I made continue to support my growth even months after the program ended."
              author="Thomas R."
              position="Teacher"
            />
          </div>
        </div>
      </Section>
      
      <Section bgColor="cream">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="font-serif text-3xl mb-6 text-soul-stone">Share Your Story</h2>
          <p className="text-soul-stone/80 text-lg mb-8">
            Have you experienced transformation through our work together? We'd love to hear about your journey.
            Contact us to share your testimonial.
          </p>
          <Link to="/contact">
            <Button className="bg-soul-sage hover:bg-soul-sage/90 text-white transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
              Contact Us
            </Button>
          </Link>
        </div>
      </Section>
      
      <Section bgColor="white">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="font-serif text-3xl mb-6 text-soul-stone">Begin Your Journey</h2>
          <p className="text-soul-stone/80 text-lg mb-8">
            Ready to write your own success story? Explore our programs or reach out to schedule a consultation.
            Your transformation journey begins with a single step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/programs">
              <Button className="bg-soul-sage hover:bg-soul-sage/90 text-white transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                Explore Programs
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-soul-sage text-soul-sage hover:bg-soul-sage hover:text-white transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Testimonials;
