import { useParams } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AppdoersCTA from "@/components/layout/AppdoersCTA";
import { motion } from "framer-motion";

// Program data - in a real app, this would come from an API or database
const programs = {
  "individual-coaching": {
    title: "Individual Coaching",
    description: "One-on-one personalized coaching sessions tailored to your specific needs and goals.",
    longDescription: "Our Individual Coaching program offers a deeply personalized approach to your personal growth journey. Through one-on-one sessions, we create a safe and supportive space for you to explore your challenges, set meaningful goals, and develop practical strategies for transformation.",
    features: [
      "Personalized guidance and support",
      "Customized tools and practices",
      "Flexible scheduling options",
      "In-person or virtual sessions"
    ],
    benefits: [
      "Tailored approach to your unique needs",
      "Focused attention on your specific goals",
      "Flexible scheduling to fit your lifestyle",
      "Deep dive into personal challenges",
      "Ongoing support and accountability"
    ],
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  "group-workshops": {
    title: "Group Workshops",
    description: "Collaborative learning experiences in a supportive community environment.",
    longDescription: "Our Group Workshops bring together like-minded individuals in a collaborative learning environment. Through shared experiences and collective wisdom, participants gain new perspectives and practical tools for personal growth.",
    features: [
      "Themed workshop series",
      "Experiential learning activities",
      "Community connection",
      "Shared wisdom and insights"
    ],
    benefits: [
      "Learn from others' experiences",
      "Build a supportive community",
      "Cost-effective personal development",
      "Regular group accountability",
      "Diverse perspectives and insights"
    ],
    imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  "seasonal-retreats": {
    title: "Seasonal Retreats",
    description: "Immersive experiences designed for deep reflection and transformative breakthroughs.",
    longDescription: "Our Seasonal Retreats offer immersive experiences in nature, designed to facilitate deep reflection and transformative breakthroughs. These carefully curated retreats combine guided practices, community connection, and natural settings to create powerful opportunities for growth.",
    features: [
      "Nature-based settings",
      "Guided practices and rituals",
      "Nourishing meals included",
      "Small, intimate groups"
    ],
    benefits: [
      "Deep immersion in personal growth",
      "Connection with nature",
      "Intensive transformation experience",
      "Community building",
      "Renewal and rejuvenation"
    ],
    imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  "mindfulness-training": {
    title: "Mindfulness Training",
    description: "Learn and develop practical mindfulness techniques to cultivate presence in daily life.",
    longDescription: "Our Mindfulness Training program helps you develop practical mindfulness techniques that can be integrated into your daily life. Through progressive skill-building and guided practice, you'll learn to cultivate presence, reduce stress, and enhance your overall well-being.",
    features: [
      "Progressive skill building",
      "Daily practice guidance",
      "Stress reduction techniques",
      "Integration into daily routines"
    ],
    benefits: [
      "Reduced stress and anxiety",
      "Improved focus and clarity",
      "Better emotional regulation",
      "Enhanced self-awareness",
      "Practical daily tools"
    ],
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  "life-transitions": {
    title: "Life Transitions Support",
    description: "Specialized coaching for navigating major life changes with grace and clarity.",
    longDescription: "Our Life Transitions Support program provides specialized guidance for navigating major life changes. Whether you're facing career shifts, relationship changes, or personal transformation, we offer tools and support to help you move through transitions with grace and clarity.",
    features: [
      "Emotional processing tools",
      "Decision-making frameworks",
      "Identity exploration",
      "New chapter visioning"
    ],
    benefits: [
      "Clear direction during change",
      "Emotional support",
      "Practical transition tools",
      "Identity clarity",
      "Future vision development"
    ],
    imageUrl: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  }
};

const ProgramDetails = () => {
  const { programId } = useParams();
  const program = programs[programId as keyof typeof programs];

  if (!program) {
    return (
      <PageLayout>
        <Section bgColor="white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-3xl mb-4 text-soul-stone">Program Not Found</h1>
            <p className="text-soul-stone/80 mb-8">The program you're looking for doesn't exist.</p>
            <Link to="/programs">
              <Button className="bg-soul-blue hover:bg-soul-blue-accent text-white">
                Back to Programs
              </Button>
            </Link>
          </div>
        </Section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <Hero
        title={program.title}
        subtitle={program.description}
        imageUrl={program.imageUrl}
      />
      
      <Section bgColor="white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-soul-stone/80 text-lg mb-8">{program.longDescription}</p>
            
            <h2 className="font-serif text-2xl mb-4 text-soul-stone">Program Features</h2>
            <ul className="space-y-2 mb-8">
              {program.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-soul-sage mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <h2 className="font-serif text-2xl mb-4 text-soul-stone">Benefits</h2>
            <ul className="space-y-2 mb-8">
              {program.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-soul-sage mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      <Section bgColor="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <Button className="bg-soul-gold hover:bg-soul-gold-accent text-white px-12 py-6 text-lg transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]">
            Book Now
          </Button>
        </motion.div>
      </Section>

      <Section bgColor="cream">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-serif text-3xl mb-6 text-soul-stone">Ready to Begin?</h2>
          <p className="text-soul-stone/80 text-lg mb-8">
            Take the first step towards transformation. Contact us to learn more or schedule a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-soul-gold hover:bg-soul-gold-accent text-white px-8 transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                Contact Us
              </Button>
            </Link>
            <Link to="/programs">
              <Button className="bg-soul-blue hover:bg-soul-blue-accent text-white px-8 transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                View All Programs
              </Button>
            </Link>
          </div>
        </motion.div>
      </Section>

      <AppdoersCTA />
    </PageLayout>
  );
};

export default ProgramDetails; 