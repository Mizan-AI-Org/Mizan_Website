export const SITE_URL = 'https://heymizan.ai';
export const SITE_NAME = 'Mizan AI';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
export const TWITTER_HANDLE = '@heymizan';

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  keywords?: string[];
};

export const defaultSeo: PageSeo = {
  title: 'Mizan AI | Intelligent Operating System for Business Operations',
  description:
    'Mizan AI is the intelligent OS that automates operations, unifies scattered tools into one execution hub, and runs scheduling, no-shows, and team performance through WhatsApp.',
  path: '/',
  keywords: [
    'Mizan AI',
    'business operating system',
    'staff scheduling software',
    'WhatsApp team communication',
    'operations automation',
    'workforce management',
    'no-show reduction',
    'restaurant management software',
    'multi-location operations',
  ],
};

export const pageSeo: Record<string, PageSeo> = {
  home: defaultSeo,
  features: {
    title: 'Features | Mizan AI Business Operating System',
    description:
      'Explore Mizan AI features: AI scheduling, WhatsApp-first staff ops, labor cost control, performance analytics, and a centralized execution hub for your business.',
    path: '/features',
    keywords: [
      'AI staff scheduling',
      'WhatsApp operations',
      'labor cost optimization',
      'business intelligence dashboard',
      'workforce automation',
    ],
  },
  pricing: {
    title: 'Pricing | Mizan AI Plans & Free Trial',
    description:
      'Simple, transparent Mizan AI pricing. Start a 14-day free trial. Starter, Pro, and Enterprise plans for teams of any size.',
    path: '/pricing',
    keywords: [
      'Mizan AI pricing',
      'staff scheduling pricing',
      'operations software cost',
      'free trial scheduling software',
    ],
  },
  'case-studies': {
    title: 'Case Studies | How Teams Run Operations with Mizan AI',
    description:
      'See how operators use Mizan AI to replace spreadsheet chaos, cut no-shows, and run scheduling and team communication from one WhatsApp-connected hub.',
    path: '/case-studies',
    keywords: [
      'Mizan AI case studies',
      'operations software success stories',
      'WhatsApp scheduling results',
    ],
  },
  contact: {
    title: 'Contact & Book a Demo | Mizan AI',
    description:
      'Talk to the Mizan AI team about a free trial or personalized demo. Based in Marrakech, Morocco. Reach us at sales@heymizan.ai.',
    path: '/contact',
    keywords: ['contact Mizan AI', 'book demo', 'sales heymizan'],
  },
  blog: {
    title: 'Blog | Mizan AI Insights',
    description:
      'Expert insights and best practices for running operations on Mizan AI. Blog coming soon.',
    path: '/blog',
    noindex: true,
  },
  privacy: {
    title: 'Privacy Policy | Mizan AI',
    description:
      'Read the Mizan AI Privacy Policy to learn how we collect, use, and protect your business and personal data.',
    path: '/privacy',
  },
  terms: {
    title: 'Terms of Service | Mizan AI',
    description:
      'Review the Mizan AI Terms of Service governing use of our intelligent operating system and related services.',
    path: '/terms',
  },
};

export function absoluteUrl(path: string) {
  if (path.startsWith('http')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized === '/' ? '/' : normalized}`;
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    email: 'sales@heymizan.ai',
    telephone: '+212784476751',
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Marrakech',
      addressCountry: 'MA',
    },
    sameAs: [
      'https://www.linkedin.com/company/heymizan-ai/',
      'https://x.com/heymizan',
      'https://www.facebook.com/people/Mizan-AI/61584792668416/',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'sales@heymizan.ai',
        telephone: '+212784476751',
        areaServed: 'Worldwide',
        availableLanguage: ['English', 'French', 'Arabic'],
      },
    ],
  };
}

export function softwareApplicationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE_NAME,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, WhatsApp',
    url: SITE_URL,
    description: defaultSeo.description,
    offers: {
      '@type': 'Offer',
      price: '99',
      priceCurrency: 'USD',
      description: 'Starter plan from $99/month with 14-day free trial',
    },
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: defaultSeo.description,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
