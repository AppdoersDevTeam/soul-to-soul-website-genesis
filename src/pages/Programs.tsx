import PageLayout from "@/components/layout/PageLayout";
import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";
import ProgramCard from "@/components/ui/ProgramCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AppdoersCTA from "@/components/layout/AppdoersCTA";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

const Programs = () => {
  // Modal state
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  // Handler for Learn More
  const handleLearnMore = (programTitle: string) => {
    setSelectedProgram(programTitle);
    setShowUpgradeModal(true);
  };

  return (
    <PageLayout>
      <Hero
        title="Our Programs"
        subtitle="Transformative experiences designed to nurture growth and wholeness"
        imageUrl="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      
      <Section bgColor="white">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="font-serif text-3xl mb-4 text-soul-stone">Pathways to Transformation</h2>
          <p className="text-soul-stone/80 text-lg">
            Soul to Soul offers a variety of programs designed to meet you where you are on your journey.
            Each path provides unique opportunities for growth, healing, and transformation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="animate-fade-in hover-lift"
          >
            <ProgramCard
              title="Individual Coaching"
              description="One-on-one personalized coaching sessions tailored to your specific needs and goals."
              features={[
                "Personalized guidance and support",
                "Customized tools and practices",
                "Flexible scheduling options",
                "In-person or virtual sessions"
              ]}
              onLearnMore={() => handleLearnMore("Individual Coaching")}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="animate-fade-in hover-lift"
          >
            <ProgramCard
              title="Group Workshops"
              description="Collaborative learning experiences in a supportive community environment."
              features={[
                "Themed workshop series",
                "Experiential learning activities",
                "Community connection",
                "Shared wisdom and insights"
              ]}
              onLearnMore={() => handleLearnMore("Group Workshops")}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="animate-fade-in hover-lift"
          >
            <ProgramCard
              title="Seasonal Retreats"
              description="Immersive experiences designed for deep reflection and transformative breakthroughs."
              features={[
                "Nature-based settings",
                "Guided practices and rituals",
                "Nourishing meals included",
                "Small, intimate groups"
              ]}
              onLearnMore={() => handleLearnMore("Seasonal Retreats")}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="animate-fade-in hover-lift"
          >
            <ProgramCard
              title="Mindfulness Training"
              description="Learn and develop practical mindfulness techniques to cultivate presence in daily life."
              features={[
                "Progressive skill building",
                "Daily practice guidance",
                "Stress reduction techniques",
                "Integration into daily routines"
              ]}
              onLearnMore={() => handleLearnMore("Mindfulness Training")}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="animate-fade-in hover-lift"
          >
            <ProgramCard
              title="Life Transitions Support"
              description="Specialized coaching for navigating major life changes with grace and clarity."
              features={[
                "Emotional processing tools",
                "Decision-making frameworks",
                "Identity exploration",
                "New chapter visioning"
              ]}
              onLearnMore={() => handleLearnMore("Life Transitions Support")}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="animate-fade-in hover-lift"
          >
            <ProgramCard
              title="Couples Integration"
              description="Support for couples seeking deeper connection and alignment in their relationship."
              features={[
                "Communication enhancement",
                "Conflict resolution tools",
                "Shared vision development",
                "Intimacy cultivation practices"
              ]}
              comingSoon={true}
            />
          </motion.div>
        </div>
      </Section>
      
      <Section bgColor="cream">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl mb-6 text-soul-stone text-center animate-fade-in"
          >Our Methodology</motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-soul-stone/80 text-lg mb-6 animate-fade-in"
          >At Soul to Soul Integrative Coaching, we combine various evidence-based approaches with traditional wisdom practices. Our methodology draws from:</motion.p>
          
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] animate-fade-in hover-lift"
            >
              <h3 className="text-xl font-serif mb-3 text-soul-sage">Contemporary Coaching</h3>
              <ul className="space-y-2 text-soul-stone/80">
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                  <svg className="h-5 w-5 text-soul-sage mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Positive Psychology</span>
                </li>
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                  <svg className="h-5 w-5 text-soul-sage mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Somatic Awareness</span>
                </li>
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                  <svg className="h-5 w-5 text-soul-sage mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cognitive Behavioral Techniques</span>
                </li>
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                  <svg className="h-5 w-5 text-soul-sage mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Narrative Coaching</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] animate-fade-in hover-lift"
            >
              <h3 className="text-xl font-serif mb-3 text-soul-sage">Traditional Wisdom</h3>
              <ul className="space-y-2 text-soul-stone/80">
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                  <svg className="h-5 w-5 text-soul-sage mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Mindfulness Practices</span>
                </li>
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                  <svg className="h-5 w-5 text-soul-sage mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Breathwork</span>
                </li>
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                  <svg className="h-5 w-5 text-soul-sage mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Nature Connection</span>
                </li>
                <li className="flex items-start transform transition-all duration-300 hover:translate-x-1">
                  <svg className="h-5 w-5 text-soul-sage mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ritual and Ceremony</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-soul-stone/80 text-lg text-center animate-fade-in"
          >We adapt and integrate these approaches based on your individual needs and preferences, creating a holistic framework for growth and transformation.</motion.p>
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
          <h2 className="font-serif text-3xl mb-6 text-soul-stone">Find Your Path</h2>
          <p className="text-soul-stone/80 text-lg mb-8">
            Ready to begin your transformation? Explore our programs or reach out to schedule a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/events">
              <Button className="bg-soul-gold hover:bg-soul-gold-accent text-white px-8 transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                View Events
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

      {/* Intermediate Plan Modal */}
      <Dialog open={showUpgradeModal} onOpenChange={setShowUpgradeModal}>
        <DialogContent className="max-w-md mx-auto rounded-xl p-8 bg-white shadow-xl animate-fade-in">
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-bold text-soul-blue">Intermediate Plan Required</h2>
            <div className="bg-soul-cream/60 rounded-lg p-4">
              <p className="text-soul-stone/90 text-base mb-2">
                Access to this program is only available to members on the <span className="font-semibold text-soul-gold">Intermediate Plan</span>.
              </p>
              {selectedProgram && (
                <p className="text-soul-stone/80 text-sm mb-2">
                  Program: <span className="font-semibold">{selectedProgram}</span>
                </p>
              )}
              <p className="text-soul-stone/70 text-sm">
                To upgrade your plan and unlock this program, please contact us:
              </p>
              <a
                href="mailto:info@appdoers.com?subject=Upgrade%20to%20Intermediate%20Plan"
                className="block mt-2 text-soul-blue underline font-medium"
              >
                info@appdoers.com
              </a>
            </div>
            <div className="flex gap-4 justify-center mt-6">
              <button
                className="px-6 py-2 rounded-lg bg-soul-gold text-white font-semibold shadow hover:bg-soul-gold-accent transition"
                onClick={() => {
                  window.open('mailto:info@appdoers.com?subject=Upgrade%20to%20Intermediate%20Plan', '_blank');
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

      <AppdoersCTA />
    </PageLayout>
  );
};

export default Programs;
