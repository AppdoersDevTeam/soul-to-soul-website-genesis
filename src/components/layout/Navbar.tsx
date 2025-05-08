import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/programs", label: "Programs" },
    { to: "/events", label: "Events" },
    { to: "/testimonials", label: "Success Stories" },
    { to: "/ebooks", label: "eBooks" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-gradient-to-r from-soul-blue to-soul-blue-accent shadow-lg" 
          : "bg-white shadow-sm"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-20">
        {/* Logo */}
        <motion.div 
          className="flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link to="/" className="flex items-center font-serif text-2xl font-bold text-soul-blue hover:text-soul-blue-accent transition-colors p-2">
            <img src="/logo.png" alt="Soul to Soul Logo" className="h-10 w-auto" />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.div
              key={link.to}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={link.to}
                className={`relative px-2 py-1 ${
                  scrolled 
                    ? "text-white hover:text-soul-gold-light" 
                    : "text-soul-stone hover:text-soul-blue"
                } transition-colors`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-soul-blue to-soul-gold"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/signin">
              <Button className={`${
                scrolled
                  ? "bg-soul-gold text-white hover:bg-soul-gold-accent"
                  : "bg-soul-blue text-white hover:bg-soul-blue-accent"
              }`}>
                Get Started
              </Button>
            </Link>
          </motion.div>
        </nav>

        {/* Mobile menu button */}
        <motion.div 
          className="md:hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <button
            type="button"
            className={scrolled ? "text-white" : "text-soul-stone"}
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
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gradient-to-b from-soul-blue to-soul-blue-accent"
        >
          <div className="container-custom py-4 space-y-2">
            {navLinks.map((link) => (
              <motion.div
                key={link.to}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.to}
                  className={`block py-2 ${
                    location.pathname === link.to
                      ? "text-soul-gold-light font-medium"
                      : "text-white hover:text-soul-gold-light"
                  }`}
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/signin" onClick={toggleMenu}>
                <Button className="w-full bg-soul-gold text-white hover:bg-soul-gold-accent">
                  Get Started
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
