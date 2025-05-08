import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
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
    { to: "/events", label: "Events" },
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
          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutDropdown(true)}
            onMouseLeave={() => setAboutDropdown(false)}
            onFocus={() => setAboutDropdown(true)}
            onBlur={() => setAboutDropdown(false)}
            tabIndex={0}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/about"
                className={`relative px-2 py-1 ${
                  scrolled 
                    ? "text-white hover:text-soul-gold-light" 
                    : "text-soul-stone hover:text-soul-blue"
                } transition-colors flex items-center gap-1`}
              >
                About
                <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </Link>
            </motion.div>
            <AnimatePresence>
              {aboutDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-soul-cream"
                >
                  <Link to="/about" className="block px-4 py-2 text-soul-stone hover:bg-soul-blue/10 hover:text-soul-blue transition-colors">About</Link>
                  <Link to="/testimonials" className="block px-4 py-2 text-soul-stone hover:bg-soul-blue/10 hover:text-soul-blue transition-colors">Success Stories</Link>
                  <Link to="/programs" className="block px-4 py-2 text-soul-stone hover:bg-soul-blue/10 hover:text-soul-blue transition-colors">Programs</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* End About Dropdown */}
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
