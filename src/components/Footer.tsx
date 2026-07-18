import { Facebook, Linkedin } from 'lucide-react';
import { CALENDLY_DEMO_URL } from '../lib/links';

function XIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Footer() {
  const footerLinks = {
    product: [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Book a Demo', href: CALENDLY_DEMO_URL, external: true },
    ],
    company: [
      { name: 'Home', href: '/' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
      { name: 'Start Free Trial', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  };

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <a href="/" className="inline-flex items-center gap-2 mb-4" aria-label="Mizan AI home">
              <img src="/logo.png" alt="Mizan AI" width={32} height={32} />
              <span className="text-white font-semibold">Mizan AI</span>
            </a>
            <p className="text-neutral-400 mb-6 max-w-sm">
              The intelligent operating system that automates business operations and unifies
              scattered tools into one centralized execution hub.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Mizan-AI/61584792668416/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mizan AI on Facebook"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://x.com/heymizan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mizan AI on X"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <XIcon size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/heymizan-ai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mizan AI on LinkedIn"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={`${link.href}-${link.name}`}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                    {...(link.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={`${link.href}-${link.name}`}>
                  <a href={link.href} className="text-neutral-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="text-white mb-4 mt-8">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={`${link.href}-${link.name}`}>
                  <a href={link.href} className="text-neutral-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400">© 2026 Mizan AI. All rights reserved.</p>
            <p className="text-neutral-400">
              Built for operators who want one hub to run their business.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
