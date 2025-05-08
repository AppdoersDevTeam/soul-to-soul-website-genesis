import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Hero from "@/components/ui/Hero";
import AppdoersCTA from "@/components/layout/AppdoersCTA";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

const ebooks = [
  {
    title: "Mindful Living: A Guide to Inner Peace",
    author: "Jane Doe",
    cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80",
    link: "#",
    price: 0,
    description: "A comprehensive guide to mindfulness practices and techniques for daily life.",
    type: "PDF",
    pages: 120,
  },
  {
    title: "Holistic Wellness Workbook",
    author: "John Smith",
    cover: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    link: "#",
    price: 19.99,
    description: "Interactive exercises and worksheets for personal growth and wellness.",
    type: "PDF",
    pages: 85,
  },
  {
    title: "The Art of Self-Compassion",
    author: "Emily Rose",
    cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    link: "#",
    price: 0,
    description: "Learn to cultivate self-compassion and build a healthier relationship with yourself.",
    type: "PDF",
    pages: 65,
  },
  {
    title: "Transformative Journaling",
    author: "Michael Lee",
    cover: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    link: "#",
    price: 24.99,
    description: "A guided journal with prompts and exercises for personal transformation.",
    type: "PDF",
    pages: 150,
  },
  {
    title: "Meditation Mastery",
    author: "Sarah Wilson",
    cover: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=400&q=80",
    link: "#",
    price: 0,
    description: "Step-by-step meditation techniques for beginners and advanced practitioners.",
    type: "PDF",
    pages: 90,
  },
  {
    title: "Yoga Flow Series",
    author: "David Chen",
    cover: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80",
    link: "#",
    price: 29.99,
    description: "Complete yoga flow series with detailed instructions and illustrations.",
    type: "PDF",
    pages: 200,
  },
];

const EBooks = () => {
  const [filter, setFilter] = useState<'all' | 'free' | 'paid'>('all');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [selectedEbook, setSelectedEbook] = useState<typeof ebooks[0] | null>(null);
  const navigate = useNavigate();
  
  const filteredEbooks = ebooks.filter(ebook => {
    if (filter === 'all') return true;
    if (filter === 'free') return ebook.price === 0;
    if (filter === 'paid') return ebook.price > 0;
    return true;
  });

  const handleDownloadClick = (ebook: typeof ebooks[0]) => {
    setSelectedEbook(ebook);
    if (ebook.price === 0) {
      setShowLoginModal(true);
    } else {
      setShowUpgradeModal(true);
    }
  };

  const handleLogin = () => {
    setShowLoginModal(false);
    navigate('/signin');
  };

  const handleContactUpgrade = () => {
    window.location.href = 'mailto:contact@appdoers.co.nz?subject=Upgrade%20to%20Advanced%20Plan';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <PageLayout>
      <Hero
        title="eBook Store"
        subtitle="Curated resources for your journey of growth, mindfulness, and holistic well-being"
        imageUrl="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
      />
      <Section bgColor="cream">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="font-serif text-3xl mb-4 gradient-text">Explore Our eBooks</h2>
          <p className="text-soul-stone/80 text-lg mb-8">
            Discover practical guides, workbooks, and inspiration to support your personal transformation.
          </p>
          
          {/* Filter Buttons */}
          <motion.div 
            className="flex justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button 
              onClick={() => setFilter('all')}
              className={`${filter === 'all' ? 'bg-soul-blue text-white' : 'bg-white text-soul-stone'} hover:bg-soul-blue hover:text-white transition-all transform hover:scale-105 active:scale-95`}
            >
              All Resources
            </Button>
            <Button 
              onClick={() => setFilter('free')}
              className={`${filter === 'free' ? 'bg-soul-blue text-white' : 'bg-white text-soul-stone'} hover:bg-soul-blue hover:text-white transition-all transform hover:scale-105 active:scale-95`}
            >
              Free Resources
            </Button>
            <Button 
              onClick={() => setFilter('paid')}
              className={`${filter === 'paid' ? 'bg-soul-blue text-white' : 'bg-white text-soul-stone'} hover:bg-soul-blue hover:text-white transition-all transform hover:scale-105 active:scale-95`}
            >
              Premium Resources
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredEbooks.map((ebook, idx) => (
            <motion.div
              key={ebook.title}
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredCard(ebook.title)}
              onHoverEnd={() => setHoveredCard(null)}
              className="bg-white rounded-lg shadow-md border border-soul-cream flex flex-col overflow-hidden hover:shadow-lg transition-all hover-lift animate-fade-in"
            >
              <div className="relative overflow-hidden group">
                <motion.img 
                  src={ebook.cover} 
                  alt={ebook.title} 
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.span 
                  className="absolute top-2 right-2 bg-soul-blue text-white px-2 py-1 rounded text-sm"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {ebook.type}
                </motion.span>
                {ebook.price === 0 ? (
                  <motion.span 
                    className="absolute top-2 left-2 bg-green-100 text-green-700 px-2 py-1 rounded text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Free
                  </motion.span>
                ) : (
                  <motion.span 
                    className="absolute top-2 left-2 bg-soul-gold text-white px-2 py-1 rounded text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    ${ebook.price}
                  </motion.span>
                )}
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <motion.h3 
                    className="font-serif text-xl font-semibold mb-2 text-soul-blue"
                    whileHover={{ color: "#3B82F6" }}
                  >
                    {ebook.title}
                  </motion.h3>
                  <p className="text-soul-stone/70 mb-2 text-sm">by {ebook.author}</p>
                  <p className="text-soul-stone/80 mb-4 text-sm">{ebook.description}</p>
                  <div className="flex items-center gap-2 text-soul-stone/60 text-sm mb-4">
                    <span>{ebook.pages} pages</span>
                    <span>•</span>
                    <span>{ebook.type}</span>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    onClick={() => handleDownloadClick(ebook)}
                    className={`${ebook.price === 0 ? 'bg-soul-blue' : 'bg-soul-gold'} hover:bg-opacity-90 text-white w-full mt-auto transform transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]`}
                  >
                    {ebook.price === 0 ? 'Download Free' : 'Purchase Now'}
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>
      
      <Section bgColor="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center animate-fade-in"
        >
          <h2 className="font-serif text-3xl mb-6 gradient-text">Not Sure Where to Start?</h2>
          <p className="text-soul-stone/80 text-lg mb-8">
            Reach out for personalized recommendations or explore our full library of resources.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild className="bg-soul-gold hover:bg-soul-gold-accent text-white px-8 transform transition-all duration-300 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]">
              <a href="/contact">Contact Us</a>
            </Button>
          </motion.div>
        </motion.div>
      </Section>
      <AppdoersCTA />

      <Dialog open={showLoginModal} onOpenChange={setShowLoginModal}>
        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader className="space-y-4">
            <DialogTitle className="text-2xl font-serif text-soul-blue text-center">
              Login Required
            </DialogTitle>
            <DialogDescription className="text-base text-soul-stone/80 text-center">
              To download "{selectedEbook?.title}", please sign in to your account.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-6 py-6">
            <div className="bg-soul-cream/30 rounded-lg p-4">
              <p className="text-soul-stone/70 text-sm text-center">
                Sign in to access our free resources and track your downloads.
              </p>
            </div>
            <div className="flex justify-end gap-3">
              <Button
                variant="outline"
                onClick={() => setShowLoginModal(false)}
                className="border-soul-cream hover:bg-soul-cream/10 text-soul-stone"
              >
                Cancel
              </Button>
              <Button
                onClick={handleLogin}
                className="bg-soul-blue hover:bg-soul-blue-accent text-white transform transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              >
                Login Now
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showUpgradeModal} onOpenChange={setShowUpgradeModal}>
        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader className="space-y-4">
            <DialogTitle className="text-2xl font-serif text-soul-blue text-center">
              Advanced Plan Required
            </DialogTitle>
            <DialogDescription className="text-base text-soul-stone/80 text-center">
              "{selectedEbook?.title}" is available exclusively to Advanced Plan members.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-6 py-6">
            <div className="bg-soul-cream/30 rounded-lg p-4">
              <p className="text-soul-stone/70 text-sm text-center">
                Upgrade your plan to access premium resources, advanced features, and exclusive content.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-center gap-2 text-soul-stone/80 text-sm">
                <span>Contact us at:</span>
                <a 
                  href="mailto:contact@appdoers.co.nz" 
                  className="text-soul-blue hover:text-soul-blue-accent font-medium"
                >
                  contact@appdoers.co.nz
                </a>
              </div>
              <div className="flex justify-end gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowUpgradeModal(false)}
                  className="border-soul-cream hover:bg-soul-cream/10 text-soul-stone"
                >
                  Close
                </Button>
                <Button
                  onClick={handleContactUpgrade}
                  className="bg-soul-gold hover:bg-soul-gold-accent text-white transform transition-all duration-300 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]"
                >
                  Contact to Upgrade
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
};

export default EBooks; 