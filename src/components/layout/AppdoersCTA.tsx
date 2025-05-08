import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const AppdoersCTA = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-blue-100 to-green-50">
      <div className="max-w-3xl mx-auto text-center px-4">
        <div className="flex items-center justify-center gap-2 mb-6">
          <img src="/favicon.png" alt="Appdoers Logo" className="h-8 w-8" />
          <span className="text-gray-500 font-medium text-lg">This template was designed by Appdoers</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Want something like this for your business?</h2>
        <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Transform your online presence with a custom website that converts visitors into customers.<br />
          Our expert team will help you stand out in the digital landscape.
        </p>
        <Button asChild size="lg" className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-3 text-lg font-medium rounded-md shadow-md transition-all">
          <Link to="https://appdoers.co.nz/contact" target="_blank" rel="noopener noreferrer">
            Book a Free Consultation
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default AppdoersCTA; 