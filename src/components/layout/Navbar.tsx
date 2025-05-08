
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container-custom flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center">
            <span className="font-serif text-2xl font-bold text-soul-sage">Soul to Soul</span>
            <span className="text-soul-stone text-xs ml-2 mt-2">Integrative Coaching</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-soul-stone hover:text-soul-sage transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-soul-stone hover:text-soul-sage transition-colors">
            About
          </Link>
          <Link to="/programs" className="text-soul-stone hover:text-soul-sage transition-colors">
            Programs
          </Link>
          <Link to="/events" className="text-soul-stone hover:text-soul-sage transition-colors">
            Events
          </Link>
          <Link to="/testimonials" className="text-soul-stone hover:text-soul-sage transition-colors">
            Success Stories
          </Link>
          <Link to="/contact" className="text-soul-stone hover:text-soul-sage transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-soul-stone"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-soul-cream">
          <div className="container-custom py-4 space-y-2">
            <Link to="/" className="block py-2 text-soul-stone hover:text-soul-sage" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className="block py-2 text-soul-stone hover:text-soul-sage" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/programs" className="block py-2 text-soul-stone hover:text-soul-sage" onClick={toggleMenu}>
              Programs
            </Link>
            <Link to="/events" className="block py-2 text-soul-stone hover:text-soul-sage" onClick={toggleMenu}>
              Events
            </Link>
            <Link to="/testimonials" className="block py-2 text-soul-stone hover:text-soul-sage" onClick={toggleMenu}>
              Success Stories
            </Link>
            <Link to="/contact" className="block py-2 text-soul-stone hover:text-soul-sage" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
