import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white shadow-md'
        : 'bg-gradient-to-r from-primary-600 to-primary-700'
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2" onClick={handleLogoClick}>
            <img
              src={isScrolled ? "/logo.png" : "/logo-white.png"}
              alt="Mizan"
              className="h-10 w-auto"
              onError={(e) => {
                // Fallback to regular logo if white version doesn't exist
                (e.target as HTMLImageElement).src = "/logo.png";
              }}
            />
            <span className="font-bold text-xl text-neutral-900">
              Mizan AI
            </span>
          </a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors font-medium ${isScrolled
                  ? 'text-neutral-600 hover:text-primary-600'
                  : 'text-white/90 hover:text-white'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact"
              className={`transition-colors font-medium ${isScrolled
                ? 'text-neutral-600 hover:text-primary-600'
                : 'text-white/90 hover:text-white'
                }`}
            >
              Book Demo
            </a>
            <a
              href="#contact"
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${isScrolled
                ? 'bg-primary-600 text-white hover:bg-primary-700'
                : 'bg-white text-primary-600 hover:bg-neutral-100'
                }`}
            >
              Start Free Trial
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-neutral-900' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t ${isScrolled
              ? 'bg-white border-neutral-200'
              : 'bg-primary-700 border-white/20'
              }`}
          >
            <div className="container-custom py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`block transition-colors py-2 ${isScrolled
                    ? 'text-neutral-600 hover:text-primary-600'
                    : 'text-white/90 hover:text-white'
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className={`pt-4 space-y-3 border-t ${isScrolled ? 'border-neutral-200' : 'border-white/20'
                }`}>
                <a
                  href="#contact"
                  className={`block text-center transition-colors py-2 ${isScrolled
                    ? 'text-neutral-600 hover:text-primary-600'
                    : 'text-white/90 hover:text-white'
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Demo
                </a>
                <a
                  href="#contact"
                  className={`block text-center px-6 py-2.5 rounded-full font-semibold transition-colors ${isScrolled
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-white text-primary-600 hover:bg-neutral-100'
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}