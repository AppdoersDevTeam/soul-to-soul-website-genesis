import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";
import FeatureCard from "@/components/ui/FeatureCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { motion } from "framer-motion";
import AppdoersCTA from "@/components/layout/AppdoersCTA";

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <Hero
        title="Transform Your Journey"
        subtitle="Holistic coaching for mind, body, and spirit integration"
        imageUrl="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in [animation-delay:300ms]">
          <Link to="/programs">
            <Button className="bg-soul-gold hover:bg-soul-gold-accent text-white px-8 py-6 transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]">
              Explore Programs
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-soul-gold text-white hover:bg-soul-gold hover:text-white px-8 py-6 transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_15px_rgba(234,179,8,0.2)]">
              Contact Us
            </Button>
          </Link>
        </div>
      </Hero>

      {/* Mission Statement */}
      <Section bgColor="white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl mb-4 gradient-text">Your Journey to Wholeness</h2>
          <p className="text-soul-stone/80 text-lg leading-relaxed mb-6">
            Soul to Soul Integrative Coaching offers transformative guidance to help you discover your authentic self. Through personalized coaching, we support you in integrating mind, body, and spirit to create meaningful change in your life.
          </p>
          <Link to="/about">
            <Button className="bg-soul-gold hover:bg-soul-gold-accent text-white transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]">
              Learn About Our Mission
            </Button>
          </Link>
        </motion.div>
      </Section>

      {/* Services Preview */}
      <Section title="Our Programs" subtitle="Discover pathways to transformation" bgColor="cream">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FeatureCard 
              title="Personal Coaching" 
              description="One-on-one sessions tailored to your unique journey and goals."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-10 w-10 animate-float text-soul-blue">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              }
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FeatureCard 
              title="Group Workshops" 
              description="Collaborative learning experiences to foster community and shared growth."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-10 w-10 animate-float text-soul-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <FeatureCard 
              title="Retreats" 
              description="Immersive experiences for deep reflection and transformative breakthroughs."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-10 w-10 animate-float text-soul-blue-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Link to="/programs">
            <Button className="bg-soul-gold hover:bg-soul-gold-accent text-white transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]">
              View All Programs
            </Button>
          </Link>
        </motion.div>
      </Section>

      {/* Testimonials */}
      <Section title="Success Stories" bgColor="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TestimonialCard 
              quote="Soul to Soul Coaching provided me with the guidance I needed during a difficult transition in my life. The holistic approach helped me reconnect with myself and find clarity."
              author="Sarah J."
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TestimonialCard 
              quote="The integrated coaching approach was exactly what I needed. It wasn't just about setting goals, but about aligning my whole self with my purpose. Truly transformative."
              author="Michael T."
            />
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link to="/testimonials">
            <Button className="bg-soul-gold hover:bg-soul-gold-accent text-white transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]">
              Read More Stories
            </Button>
          </Link>
        </motion.div>
      </Section>

      {/* Begin Your Journey Section */}
      <Section bgColor="cream">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl mb-6 gradient-text">Begin Your Journey</h2>
          <p className="text-soul-stone/80 text-lg mb-8">
            Ready to write your own success story? Explore our programs or reach out to schedule a consultation.
            Your transformation journey begins with a single step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/programs">
              <Button className="bg-soul-gold hover:bg-soul-gold-accent text-white px-8 transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                Explore Programs
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-soul-blue hover:bg-soul-blue-accent text-white px-8 transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </Section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-soul-blue to-soul-blue-accent text-white py-16"
      >
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Begin Your Transformation Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Take the first step on your journey to wholeness. Reach out to schedule a consultation.
          </p>
          <Link to="/contact">
            <Button className="bg-soul-gold text-white hover:bg-soul-gold-accent transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]">
              Contact Us
            </Button>
          </Link>
        </div>
      </motion.section>

      <AppdoersCTA />
    </PageLayout>
  );
};

export default Index;
