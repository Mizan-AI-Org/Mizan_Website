import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CALENDLY_DEMO_URL } from '../lib/links';
import { getRouteFromLocation } from '../lib/routing';

function isHomeRoute() {
  return getRouteFromLocation().page === 'home';
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const syncRoute = () => setIsHome(isHomeRoute());
    const onScroll = () => setIsScrolled(window.scrollY > 24);

    syncRoute();
    onScroll();

    window.addEventListener('popstate', syncRoute);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('popstate', syncRoute);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const useHeroNav = isHome && !isScrolled;

  const navLinks = [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav
      className={`site-nav ${useHeroNav ? 'site-nav--top' : 'site-nav--scrolled'}`}
      aria-label="Primary"
    >
      <div className="container-custom">
        <div className="site-nav__inner">
          <a href="/" className="site-nav__brand" aria-label="Mizan AI home">
            <img
              src={useHeroNav ? '/logo-white.png' : '/logo.png'}
              alt="Mizan AI logo"
              width={36}
              height={36}
              className="site-nav__logo"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/logo.png';
              }}
            />
            <span className="site-nav__brand-text">Mizan AI</span>
          </a>

          <div className="site-nav__links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="site-nav__link">
                {link.name}
              </a>
            ))}
          </div>

          <div className="site-nav__actions">
            <a
              href={CALENDLY_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="site-nav__demo"
            >
              Book Demo
            </a>
            <a href="/contact" className="site-nav__trial">
              Start Free Trial
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="site-nav__menu-btn"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="site-nav__mobile"
          >
            <div className="container-custom site-nav__mobile-inner">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="site-nav__mobile-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="site-nav__mobile-actions">
                <a
                  href={CALENDLY_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-nav__demo"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Demo
                </a>
                <a
                  href="/contact"
                  className="site-nav__trial"
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
