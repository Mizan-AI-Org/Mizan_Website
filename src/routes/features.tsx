import type { ComponentType } from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle,
  Sparkles,
  ArrowRight,
  BarChart3,
  CalendarClock,
  Layers,
  MessageCircle,
  Trophy,
  Plug,
  Users,
  TrendingUp,
  Recycle,
} from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { CALENDLY_DEMO_URL } from '../lib/links';

function WhatsAppIcon({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

type FeatureSection = {
  category: string;
  description: string;
  image: string;
  accent: 'emerald' | 'amber';
  Icon: ComponentType<{ size?: number; className?: string }>;
  features: { name: string; description: string }[];
};

export default function Features() {
  const featureSections: FeatureSection[] = [
    {
      category: 'AI-Powered Business Intelligence',
      description: 'Make data-driven decisions to directly increase margins and reduce loss.',
      image: '/images/features/analytics_v2.png',
      accent: 'emerald',
      Icon: BarChart3,
      features: [
        {
          name: 'Profitability Dashboard',
          description: 'Real-time view of food cost, labor cost, prime cost.',
        },
        {
          name: 'Centralized Document Hub',
          description: 'Store manuals, training videos, and compliance docs.',
        },
        {
          name: 'Geolocation Clock-In/Out',
          description: 'Clock-in/out directly with your business location.',
        },
      ],
    },
    {
      category: 'Labor & Cost Optimization',
      description: 'Control your largest controllable cost. Save management time and avoid costly penalties.',
      image: '/images/features/scheduling_v2.png',
      accent: 'amber',
      Icon: CalendarClock,
      features: [
        {
          name: 'AI Staff Scheduling',
          description:
            'Auto-creates optimized schedules considering sales forecasts, staff rules, and labor budgets.',
        },
        {
          name: 'Automated Time & Attendance',
          description: 'Geolocation clock-in/out integrated directly with payroll.',
        },
        {
          name: 'Overtime & Compliance Alerts',
          description: 'Get warnings before labor law violations or budget overruns.',
        },
      ],
    },
    {
      category: 'Operational Command Center',
      description: 'Replace chaos with clarity. Have a single source of truth for your entire operation.',
      image: '/images/features/ops_hub_v2.png',
      accent: 'emerald',
      Icon: Layers,
      features: [
        {
          name: 'Unified Inbox',
          description: 'See all staff communication, incident reports, and supplier updates in one place.',
        },
        {
          name: 'Automated Task & Checklist System',
          description: 'Ensure consistent opening, closing, and safety procedures.',
        },
        {
          name: 'Connect to your Booking system',
          description: 'Sync bookings and reservations directly to your system.',
        },
      ],
    },
    {
      category: 'Performance & Engagement',
      description: 'Increases staff satisfaction, motivation, and retention by providing visibility and growth.',
      image: '/images/features/performance_v2.png',
      accent: 'emerald',
      Icon: Trophy,
      features: [
        {
          name: 'Personal Performance Stats',
          description: 'View own sales, tips, and task completion rates.',
        },
        {
          name: 'Gamification & Recognition',
          description: 'Badges and leaderboards for top performers.',
        },
        {
          name: 'Micro-Training',
          description: 'Receive daily 2-minute skill tips directly in WhatsApp.',
        },
      ],
    },
    {
      category: 'WhatsApp-First Staff Hub',
      description: 'Zero training. Use the tool they already have (WhatsApp) to save time and reduce friction.',
      image: '/images/features/whatsapp_v2.png',
      accent: 'emerald',
      Icon: WhatsAppIcon,
      features: [
        {
          name: 'Clock In/Out via WhatsApp',
          description: 'Simple location-based verification in the app they already use.',
        },
        {
          name: 'Shift Tasks & Checklists',
          description: 'Receive and complete daily tasks directly in chat with photo proof.',
        },
        {
          name: 'Voice-to-Ticket Reporting',
          description: 'Report any issue via a voice note; AI logs it and alerts the right manager.',
        },
      ],
    },
    {
      category: 'Intelligent Scheduling & Communication',
      description: 'Empowers staff with clarity, improves team coordination, and reduces miscommunication.',
      image: '/images/features/scheduling_comm_v2.png',
      accent: 'amber',
      Icon: MessageCircle,
      features: [
        {
          name: 'Personalized Shift Alerts',
          description: 'Get reminders with traffic and prep notes.',
        },
        {
          name: 'In-App Team Chat',
          description: 'Role-based channels without sharing personal numbers.',
        },
        {
          name: 'Smart Shift Handover',
          description: 'Digital pass-down of notes and tasks between shifts.',
        },
      ],
    },
  ];

  const valueProps = [
    { Icon: CalendarClock, text: 'Cut labor costs with AI-optimized scheduling' },
    { Icon: Recycle, text: 'Reduce waste with predictive ordering' },
    { Icon: MessageCircle, text: 'Achieve staff adoption with WhatsApp-first workflows' },
    { Icon: BarChart3, text: 'Make decisions from a unified dashboard, not guesswork' },
  ];

  const steps = [
    {
      step: '1',
      title: 'Connect Your Systems',
      description: 'Link your POS, payroll, and existing tools. Our team handles the setup.',
      Icon: Plug,
    },
    {
      step: '2',
      title: 'Onboard Your Team',
      description: 'Staff receive WhatsApp invites and start using Mizan immediately. Zero training needed.',
      Icon: Users,
    },
    {
      step: '3',
      title: 'Optimize & Grow',
      description: 'Watch real-time insights, reduce costs, and improve operations from day one.',
      Icon: TrendingUp,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="features-page">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="features-page__intro"
          >
            <p className="features-page__eyebrow">
              <Sparkles size={14} aria-hidden />
              Next-Gen Business OS
            </p>
            <h1>
              The Intelligent Operating System for Your Business
            </h1>
            <p className="features-page__lede">
              Automate operations, unify scattered tools into one execution hub, and empower your team
              through WhatsApp.
            </p>
          </motion.div>

          <div className="features-page__values">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.text}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                className="features-page__value"
              >
                <span className="features-page__value-icon">
                  <prop.Icon size={18} aria-hidden />
                </span>
                <p>{prop.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="features-page__grid">
            {featureSections.map((section, sectionIndex) => (
              <motion.article
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(sectionIndex * 0.05, 0.2) }}
                className={`features-block features-block--${section.accent}`}
              >
                <div className="features-block__top">
                  <div className="features-block__copy">
                    <div className="features-block__title-row">
                      <span className="features-block__icon">
                        <section.Icon size={22} aria-hidden />
                      </span>
                      <h2>{section.category}</h2>
                    </div>
                    <p>{section.description}</p>
                  </div>
                  <div className="features-block__media">
                    <img src={section.image} alt="" />
                  </div>
                </div>

                <ul className="features-block__list">
                  {section.features.map((feature) => (
                    <li key={feature.name}>
                      <CheckCircle size={16} aria-hidden />
                      <div>
                        <strong>{feature.name}</strong>
                        <span>{feature.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="features-steps">
        <div className="container-custom">
          <div className="features-steps__intro">
            <h2>How it works</h2>
            <p>Get started with Mizan in three simple steps</p>
          </div>

          <div className="features-steps__grid">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="features-steps__card"
              >
                <span className="features-steps__num">{item.step}</span>
                <span className="features-steps__icon">
                  <item.Icon size={22} aria-hidden />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-cta">
        <div className="container-custom">
          <div className="features-cta__inner">
            <div>
              <h2>See Mizan in action</h2>
              <p>Book a demo and we'll walk you through the OS built for your operations.</p>
            </div>
            <a
              href={CALENDLY_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="features-cta__btn"
            >
              Book a demo
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
