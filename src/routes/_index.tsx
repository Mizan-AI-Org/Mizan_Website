import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Star,
  ArrowRight,
  UtensilsCrossed,
  Store,
  Stethoscope,
  Building2,
  Truck,
  Layers,
  Bot,
  MessageCircle,
  BarChart3,
  CalendarClock,
} from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CALENDLY_DEMO_URL } from '../lib/links';
function WaveDivider() {
  return (
    <div className="hero-wave-divider" aria-hidden>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
      >
        <path d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z" fill="#ffffff" />
      </svg>
    </div>
  );
}

const scenarios = [
  {
    id: 'restaurants',
    label: 'Restaurants',
    icon: UtensilsCrossed,
    summary: 'Floor coverage, shift reminders, and no-show reduction from one hub.',
    body: 'Keep FOH and BOH aligned with smart schedules, WhatsApp alerts, and live performance tracking.',
    points: ['AI-assisted shift planning', 'No-show reduction via WhatsApp', 'Live floor and labor visibility'],
    hasVideo: true,
  },
  {
    id: 'retail',
    label: 'Retail',
    icon: Store,
    summary: 'Store schedules, opener/closer handoffs, and team updates in one place.',
    body: 'Coordinate every store team from open to close without spreadsheet chaos or missed handoffs.',
    points: ['Multi-store shift coverage', 'Opener and closer checklists', 'Instant team updates on WhatsApp'],
    hasVideo: false,
  },
  {
    id: 'clinics',
    label: 'Clinics',
    icon: Stethoscope,
    summary: 'Staff availability and day-of operations kept in sync across roles.',
    body: 'Give clinic managers one system for coverage, attendance, and day-of coordination across roles.',
    points: ['Role-based availability', 'Day-of coverage alerts', 'WhatsApp staff coordination'],
    hasVideo: false,
  },
  {
    id: 'hospitality',
    label: 'Hospitality',
    icon: Building2,
    summary: 'Front desk to house teams executing from the same system.',
    body: 'Unify front desk, housekeeping, and ops teams so every shift runs from one execution layer.',
    points: ['Cross-team shift sync', 'Task and handover tracking', 'Performance by location'],
    hasVideo: false,
  },
  {
    id: 'field',
    label: 'Field Teams',
    icon: Truck,
    summary: 'Dispatch, attendance, and WhatsApp coordination while teams are on the move.',
    body: 'Keep field crews connected with schedules, check-ins, and updates that travel with them.',
    points: ['Mobile-friendly scheduling', 'Attendance on the go', 'Dispatch updates via WhatsApp'],
    hasVideo: false,
  },
];

const whatWeProvide = [
  {
    icon: Layers,
    label: 'Hub',
    title: 'A centralized execution hub',
    description:
      'Bring scheduling, communication, tasks, and performance into one system so your team stops jumping between spreadsheets, chats, and disconnected tools.',
  },
  {
    icon: Bot,
    label: 'Automate',
    title: 'Intelligent automation',
    description:
      'Automate the busywork: build smarter schedules, cut no-shows with reminders, and keep day-to-day operations moving without constant manual follow-up.',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    title: 'WhatsApp-native team ops',
    description:
      'Reach staff where they already work. Send schedules, updates, and checklists over WhatsApp and keep everything logged back in the hub.',
  },
  {
    icon: BarChart3,
    label: 'Insights',
    title: 'Performance visibility',
    description:
      'See how teams, shifts, and locations are performing in real time so managers can act fast and owners stay in control.',
  },
];

export default function Index() {
  const [activeScenario, setActiveScenario] = useState(scenarios[0]);

  const capabilities = [
    {
      image: '/images/features/scheduling.png',
      icon: CalendarClock,
      title: 'Smart Scheduling',
      description:
        'AI-assisted schedules based on availability, skills, and labor needs so managers spend minutes, not hours, building the week.',
    },
    {
      image: '/images/features/whatsapp.png',
      icon: MessageCircle,
      title: 'WhatsApp Integration',
      description:
        'Push schedules, reminders, and updates to your team on WhatsApp. Reduce no-shows and keep everyone aligned without another app.',
    },
    {
      image: '/images/features/analytics.png',
      icon: BarChart3,
      title: 'Performance Analytics',
      description:
        'Track team performance and operational KPIs from one dashboard so decisions are based on data, not guesswork.',
    },
  ];

  const stats = [
    { value: 10, suffix: '+', label: 'Businesses running on Mizan' },
    { value: 70, suffix: '%', label: 'Less time spent scheduling' },
    { value: 35, suffix: '%', label: 'Lower staff turnover' },
    { value: 99, suffix: '%', label: 'WhatsApp delivery rate' },
  ];

  const testimonials = [
    {
      quote:
        'Mizan completely transformed how we manage operations and staff scheduling. What used to take hours now takes minutes.',
      author: 'Hamza Hadni',
      role: 'Owner, Barometře, Marrakesh',
      image: '/images/hamza.png',
    },
    {
      quote:
        'Our staff turnover dropped by 40% since implementing Mizan. The team loves the WhatsApp integration.',
      author: 'Mohammed Al-Habib',
      role: 'General Manager, Coastal Kitchen',
      image: '/images/mohammed.png',
    },
    {
      quote:
        "The performance insights helped us identify and fix issues we didn't even know existed. ROI in the first month.",
      author: 'Imran Haidar',
      role: 'General Manager, Ima Restaurant, Benguerir',
      image: '/images/imran.png',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main id="main-content">

      {/* Hero: full-bleed green, text left + floating phone right */}
      <section className="hero-pattern relative" aria-label="Hero">
        <div className="container-custom relative z-10 pt-32 pb-44 md:pt-40 md:pb-52 lg:pt-44 lg:pb-56">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 lg:gap-16 items-center">
            {/* Left: copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <h1 className="mb-6 uppercase font-extrabold leading-[1.02] text-white text-[clamp(2.5rem,5.5vw,4.75rem)]">
                Automate Operations.
                <br />
                Unify Your Tools.
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-white/95 mb-10 max-w-lg leading-relaxed">
                The intelligent OS that unifies your tools into one hub, and runs scheduling, no-shows,
                and team performance through WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a href="/contact" className="hero-cta hero-cta-primary">
                  <span>Get Started</span>
                  <ArrowRight size={20} strokeWidth={2.5} className="hero-cta-icon" />
                </a>
                <a href="#what-we-provide" className="hero-cta hero-cta-secondary">
                  See what you get
                </a>
              </div>
            </motion.div>

            {/* Right: transparent WhatsApp phone */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative z-10 flex justify-center md:justify-end self-center"
            >
              <motion.div
                className="relative pt-2 pb-4"
                animate={{ y: [0, -14, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <motion.div
                  className="absolute left-1/2 bottom-1 -translate-x-1/2 w-[70%] h-10 rounded-full bg-black/20 blur-2xl pointer-events-none"
                  aria-hidden
                  animate={{ opacity: [0.35, 0.18, 0.35], scaleX: [1, 0.88, 1] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <img
                  src="/images/features/whatsapp-hero.png"
                  alt="Staff WhatsApp-first experience: schedule updates and shift coordination in chat"
                  className="relative block w-[300px] sm:w-[340px] md:w-[370px] lg:w-[420px] xl:w-[470px] h-auto drop-shadow-[0_32px_56px_rgba(0,0,0,0.38)] select-none"
                  width={367}
                  height={572}
                  decoding="async"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <WaveDivider />
      </section>

      {/* What we provide */}
      <section id="what-we-provide" className="provide-section">
        <div className="container-custom">
          <div className="provide-section__layout">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="provide-section__intro"
            >
              <p className="provide-section__eyebrow">The operating layer</p>
              <h2>What Mizan provides</h2>
              <p className="provide-section__lede">
                Not another point tool. An operating layer for how your business actually runs, day
                in and day out.
              </p>

              <div className="provide-section__visual">
                <ImageWithFallback
                  src="/images/features/ops_hub_v2.png"
                  alt="Mizan execution hub"
                  className="provide-section__image"
                />
                <div className="provide-section__glow" aria-hidden />
              </div>
            </motion.div>

            <div className="provide-section__list">
              {whatWeProvide.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="provide-item"
                  >
                    <div className="provide-item__rail" aria-hidden>
                      <span className="provide-item__dot" />
                      {index < whatWeProvide.length - 1 && (
                        <span className="provide-item__line" />
                      )}
                    </div>
                    <div className="provide-item__body">
                      <div className="provide-item__meta">
                        <span className="provide-item__icon">
                          <Icon size={20} aria-hidden />
                        </span>
                        <span className="provide-item__label">{item.label}</span>
                        <span className="provide-item__num">0{index + 1}</span>
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding-sm bg-primary-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-primary-100 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-neutral-900 mb-4">Core capabilities</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              The practical tools inside the OS, built for any team that needs reliable schedules,
              clear communication, and measurable performance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {capabilities.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="feature-card bg-white border border-neutral-100 rounded-[2rem] p-0 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-50 relative">
                    <ImageWithFallback
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                  </div>
                  <div className="p-8">
                    <div className="inline-flex items-center gap-2 text-primary-700 mb-3">
                      <Icon size={20} />
                      <span className="text-sm font-semibold uppercase tracking-wide">Capability</span>
                    </div>
                    <h3 className="text-neutral-900 mb-4 text-2xl font-bold tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <h2 className="text-neutral-900 mb-4">One OS. Many industries.</h2>
            <p className="text-xl text-neutral-600">
              Mizan is not built for a single vertical. Explore how the same operating system powers
              different teams. Restaurants are just one example.
            </p>
          </motion.div>

          <div className="industry-tabs mb-10" role="tablist" aria-label="Industries">
            {scenarios.map((scenario) => {
              const Icon = scenario.icon;
              const isActive = activeScenario.id === scenario.id;
              return (
                <button
                  key={scenario.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveScenario(scenario)}
                  className={`industry-tab ${isActive ? 'industry-tab--active' : ''}`}
                >
                  <Icon size={18} className="industry-tab__icon" />
                  <span>{scenario.label}</span>
                </button>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScenario.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl overflow-hidden border border-neutral-200 shadow-[0_24px_60px_rgba(15,23,42,0.08)] bg-white"
              >
                {activeScenario.hasVideo ? (
                  <div className="grid md:grid-cols-2">
                    <div className="relative bg-neutral-900 min-h-[280px] md:min-h-[360px]">
                      <video
                        src="/mizan_ad.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-8 md:p-10 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/15 mb-5">
                        <UtensilsCrossed size={24} className="text-white" />
                      </div>
                      <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">
                        {activeScenario.label}
                      </h3>
                      <p className="text-white text-base md:text-lg leading-relaxed mb-6 opacity-90">
                        {activeScenario.body}
                      </p>
                      <ul className="space-y-3 mb-6">
                        {activeScenario.points.map((point) => (
                          <li key={point} className="flex items-start gap-3 text-white/95">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-white/80 text-sm md:text-base">{activeScenario.summary}</p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white p-8 md:p-12 min-h-[320px] md:min-h-[360px] flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
                    <div className="md:w-[42%]">
                      {(() => {
                        const Icon = activeScenario.icon;
                        return (
                          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/15 mb-5">
                            <Icon size={28} className="text-white" />
                          </div>
                        );
                      })()}
                      <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">
                        {activeScenario.label}
                      </h3>
                      <p className="text-white text-lg leading-relaxed opacity-90">
                        {activeScenario.body}
                      </p>
                    </div>
                    <div className="md:w-[58%] md:border-l md:border-white/20 md:pl-12">
                      <p className="text-white/80 text-sm font-semibold uppercase tracking-[0.18em] mb-4">
                        What Mizan runs
                      </p>
                      <ul className="space-y-4 mb-6">
                        {activeScenario.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
                            <span className="text-white text-lg leading-snug">{point}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-white/85 text-base md:text-lg leading-relaxed">
                        {activeScenario.summary}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-neutral-900 mb-4">Trusted by operators who needed one system</h2>
            <p className="text-xl text-neutral-600">
              Teams already cutting admin time and running cleaner operations with Mizan AI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-neutral-200 rounded-2xl p-8"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-secondary-500 fill-secondary-500" />
                  ))}
                </div>
                <p className="text-neutral-700 mb-6">{testimonial.quote}</p>
                <div className="flex items-center space-x-3">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-neutral-900">{testimonial.author}</div>
                    <div className="text-sm text-neutral-500">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-6">Ready to run your business from one hub?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              See how Mizan automates operations, unifies your tools, and puts execution in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CALENDLY_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 px-8 py-4 rounded-full hover:bg-neutral-100 transition-colors inline-flex items-center justify-center space-x-2 font-semibold"
              >
                <span>Book a Demo</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
