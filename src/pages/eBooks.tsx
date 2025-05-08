import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ebooks = [
  {
    title: "Mindful Living: A Guide to Inner Peace",
    author: "Jane Doe",
    cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80",
    link: "#",
  },
  {
    title: "Holistic Wellness Workbook",
    author: "John Smith",
    cover: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    link: "#",
  },
  {
    title: "The Art of Self-Compassion",
    author: "Emily Rose",
    cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    link: "#",
  },
  {
    title: "Transformative Journaling",
    author: "Michael Lee",
    cover: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    link: "#",
  },
];

const EBooks = () => {
  return (
    <PageLayout>
      <Section bgColor="cream">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h1 className="font-serif text-4xl mb-4 gradient-text">eBook Store</h1>
          <p className="text-soul-stone/80 text-lg">
            Explore our curated collection of eBooks to support your journey of growth, mindfulness, and holistic well-being.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {ebooks.map((ebook, idx) => (
            <motion.div
              key={ebook.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-lg shadow-md border border-soul-cream flex flex-col overflow-hidden hover:shadow-lg transition-all"
            >
              <img src={ebook.cover} alt={ebook.title} className="h-56 w-full object-cover" />
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="font-serif text-xl font-semibold mb-2 text-soul-blue">{ebook.title}</h2>
                  <p className="text-soul-stone/70 mb-4 text-sm">by {ebook.author}</p>
                </div>
                <Button asChild className="bg-soul-blue hover:bg-soul-blue-accent text-white w-full mt-auto">
                  <a href={ebook.link} target="_blank" rel="noopener noreferrer">View Details</a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
};

export default EBooks; 