import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Flame } from 'lucide-react';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Menu', 'Events', 'Contact'];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-charcoal/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Flame className="w-8 h-8 text-mutedGold" />
            <span className="text-2xl font-serif font-bold text-warmWhite">Savoria</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.div key={link} className="relative" whileHover="hover">
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-stone-50/90 hover:text-amber-400 transition-colors duration-300 text-sm tracking-wide"
                >
                  {link}
                </a>
                <motion.div
                  className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-mutedGold origin-center"
                  variants={{
                    initial: { scaleX: 0 },
                    hover: { scaleX: 1 },
                  }}
                  initial="initial"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              scale: [1, 1.03, 1],
              boxShadow: [
                "0 0 0px rgba(251, 191, 36, 0)",
                "0 0 15px rgba(251, 191, 36, 0.4)",
                "0 0 0px rgba(251, 191, 36, 0)"
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:block px-6 py-2 bg-amber-600/20 border border-amber-600 text-amber-400 rounded-full hover:bg-amber-600 hover:text-charcoal transition-all duration-300"
          >
            View Menu
          </motion.button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-warmWhite"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block py-2 text-warmWhite/90 hover:text-mutedGold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;