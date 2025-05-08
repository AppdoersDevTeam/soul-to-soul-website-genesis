import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import AppdoersCTA from "@/components/layout/AppdoersCTA";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We'll get back to you soon!",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <PageLayout>
      <Hero
        title="Contact Us"
        subtitle="Reach out to begin your journey or learn more about our programs"
        imageUrl="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        className="animate-fade-in"
      />
      
      <Section bgColor="white">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in [animation-delay:200ms]">
            <h2 className="font-serif text-3xl mb-6 text-soul-stone">Get in Touch</h2>
            <p className="text-soul-stone/80 mb-8">
              Whether you're ready to begin your journey or simply have questions about our programs,
              we're here to support you. Fill out the form, and we'll respond promptly.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                <div className="bg-soul-cream p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-soul-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-soul-stone">Email</h3>
                  <p className="text-soul-stone/70">info@soul2soulcoaching.com</p>
                </div>
              </div>
              
              <div className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                <div className="bg-soul-cream p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-soul-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-soul-stone">Phone</h3>
                  <p className="text-soul-stone/70">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                <div className="bg-soul-cream p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-soul-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-soul-stone">Location</h3>
                  <p className="text-soul-stone/70">San Francisco, CA</p>
                  <p className="text-soul-stone/70">(Virtual sessions available worldwide)</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-soul-cream pt-6">
              <h3 className="font-serif text-xl mb-4 text-soul-stone">Connect With Us</h3>
              <div className="flex space-x-4">
                {/* Social icons with hover effects */}
                <a href="#" className="bg-soul-cream hover:bg-soul-sand p-3 rounded-full text-soul-stone transition-colors transform hover:scale-110 transition-transform duration-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="bg-soul-cream hover:bg-soul-sand p-3 rounded-full text-soul-stone transition-colors transform hover:scale-110 transition-transform duration-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-soul-cream animate-fade-in [animation-delay:400ms] hover:shadow-lg transition-all duration-300">
            <h2 className="font-serif text-2xl mb-6 text-soul-stone">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-4">
                <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
                  <label htmlFor="name" className="block text-sm font-medium text-soul-stone mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full transition-all duration-300 focus:border-soul-sage focus:ring-soul-sage"
                  />
                </div>
                
                <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
                  <label htmlFor="email" className="block text-sm font-medium text-soul-stone mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full transition-all duration-300 focus:border-soul-sage focus:ring-soul-sage"
                  />
                </div>
                
                <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
                  <label htmlFor="phone" className="block text-sm font-medium text-soul-stone mb-1">
                    Phone (optional)
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="w-full transition-all duration-300 focus:border-soul-sage focus:ring-soul-sage"
                  />
                </div>
                
                <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
                  <label htmlFor="subject" className="block text-sm font-medium text-soul-stone mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                    className="w-full transition-all duration-300 focus:border-soul-sage focus:ring-soul-sage"
                  />
                </div>
                
                <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
                  <label htmlFor="message" className="block text-sm font-medium text-soul-stone mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about what you're looking for..."
                    required
                    rows={4}
                    className="w-full transition-all duration-300 focus:border-soul-sage focus:ring-soul-sage"
                  />
                </div>
                
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full bg-soul-sage hover:bg-soul-sage/90 text-white transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Section>
      
      <Section bgColor="cream">
        <div className="text-center max-w-3xl mx-auto animate-fade-in [animation-delay:600ms]">
          <h2 className="font-serif text-3xl mb-4 text-soul-stone">Frequently Asked Questions</h2>
          <p className="text-soul-stone/80 mb-8">
            Find answers to our most commonly asked questions below. If you don't see what you're looking for,
            please don't hesitate to reach out.
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-soul-cream/30 transition-colors">
                <h3 className="text-lg font-medium text-left">How do I know if coaching is right for me?</h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-soul-stone/80 text-left animate-fade-in">
                Coaching is ideal if you're seeking growth, facing transitions, or looking to create positive change in your life. We offer a free initial consultation to explore if our approach aligns with your needs.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-soul-cream/30 transition-colors">
                <h3 className="text-lg font-medium text-left">What's the difference between coaching and therapy?</h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-soul-stone/80 text-left animate-fade-in">
                While therapy often focuses on healing past wounds, coaching is primarily future-focused and action-oriented. Our integrative approach acknowledges the whole person while maintaining a growth and development perspective.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-soul-cream/30 transition-colors">
                <h3 className="text-lg font-medium text-left">How long do coaching relationships typically last?</h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-soul-stone/80 text-left animate-fade-in">
                This varies based on individual needs and goals. Some clients work with us for 3-6 months on specific objectives, while others engage in ongoing coaching as they navigate different life phases and aspirations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      <Section bgColor="cream">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <h2 className="font-serif text-3xl mb-6 text-soul-stone">Ready to Connect?</h2>
          <p className="text-soul-stone/80 text-lg mb-8">
            We're here to answer your questions and help you take the next step in your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/programs">
              <Button className="bg-soul-gold hover:bg-soul-gold-accent text-white px-8 transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                Explore Programs
              </Button>
            </Link>
            <Link to="/events">
              <Button className="bg-soul-blue hover:bg-soul-blue-accent text-white px-8 transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                View Events
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      <AppdoersCTA />
    </PageLayout>
  );
};

export default Contact;
