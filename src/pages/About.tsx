import PageLayout from "@/components/layout/PageLayout";
import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AppdoersCTA from "@/components/layout/AppdoersCTA";
import { motion } from "framer-motion";

const About = () => {
  return (
    <PageLayout>
      <Hero
        title="About Soul to Soul"
        subtitle="Our mission, vision, and approach to integrative coaching"
        imageUrl="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      
      <Section bgColor="white">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h2 className="font-serif text-3xl mb-6 text-soul-stone">Our Mission</h2>
          <p className="text-soul-stone/80 text-lg leading-relaxed mb-8">
            Soul to Soul Integrative Coaching is dedicated to empowering individuals on their journey to wholeness. 
            We believe in the transformative power of integrating mind, body, and spirit to create meaningful and lasting change.
            Our approach combines traditional coaching methodologies with holistic practices to address all aspects of your being.
          </p>
          
          <p className="text-soul-stone/80 text-lg leading-relaxed mb-8">
            We recognize that each individual's path is unique, and we honor your personal journey by providing customized
            support and guidance that aligns with your values, goals, and authentic self. Our mission is to create a safe
            and nurturing space where you can explore, grow, and evolve.
          </p>
        </div>
      </Section>
      
      <Section bgColor="cream">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="animate-fade-in"
          >
            <h2 className="font-serif text-3xl mb-6 text-soul-stone">Our Approach</h2>
            <p className="text-soul-stone/80 mb-4">
              At Soul to Soul, we believe in a holistic approach that addresses all aspects of your being:
            </p>
            
            <ul className="space-y-4 mb-6">
              <li className="flex transform transition-all duration-300 hover:translate-x-1">
                <span className="text-soul-sage mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span>
                  <strong className="font-medium">Mind:</strong> Exploring thought patterns, beliefs, and mental frameworks that shape your experience.
                </span>
              </li>
              <li className="flex transform transition-all duration-300 hover:translate-x-1">
                <span className="text-soul-sage mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span>
                  <strong className="font-medium">Body:</strong> Connecting with physical wisdom and developing embodied awareness.
                </span>
              </li>
              <li className="flex transform transition-all duration-300 hover:translate-x-1">
                <span className="text-soul-sage mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span>
                  <strong className="font-medium">Spirit:</strong> Nurturing your connection to purpose, meaning, and the larger context of your life.
                </span>
              </li>
              <li className="flex transform transition-all duration-300 hover:translate-x-1">
                <span className="text-soul-sage mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span>
                  <strong className="font-medium">Integration:</strong> Bringing all aspects of yourself into alignment for wholeness and harmony.
                </span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-[1.02] animate-fade-in [animation-delay:400ms] hover-lift"
          >
            <img 
              src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="Peaceful natural setting" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </Section>
      
      <Section bgColor="white">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl mb-6 text-soul-stone text-center animate-fade-in"
          >Our Values</motion.h2>
          
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {["Authenticity", "Integration", "Compassion", "Transformation"].map((value, idx) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.2 }}
                className="border border-soul-cream rounded-lg p-6 bg-white shadow-sm transform transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] animate-fade-in hover-lift"
              >
                <h3 className="text-xl font-serif mb-3 text-soul-sage">{value}</h3>
                <p className="text-soul-stone/80">
                  {value === "Authenticity" && "We believe in honoring your true self and creating space for genuine expression and growth."}
                  {value === "Integration" && "We support the harmonious alignment of all aspects of your being: mind, body, and spirit."}
                  {value === "Compassion" && "We approach all interactions with kindness, understanding, and deep respect for your journey."}
                  {value === "Transformation" && "We believe in your capacity for positive change and growth throughout your life's journey."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      
      <Section bgColor="cream">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto animate-fade-in"
        >
          <h2 className="font-serif text-3xl mb-6 text-soul-stone">Ready to Begin Your Journey?</h2>
          <p className="text-soul-stone/80 text-lg mb-8">
            We invite you to take the first step towards transformation. Explore our programs or reach out to schedule a consultation.
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

      <AppdoersCTA />
    </PageLayout>
  );
};

export default About;
