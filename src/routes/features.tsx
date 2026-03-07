import { motion } from 'motion/react';
import {
  CheckCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

function WhatsAppIcon({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Features() {
  const ownerFeatures = [
    {
      category: 'AI-Powered Business Intelligence',
      description: 'Make data-driven decisions to directly increase margins and reduce loss.',
      emoji: '📊',
      image: '/images/features/analytics_v2.png',
      accentColor: 'emerald',
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
          description: 'Clock-in/out directly with your restaurant location.',
        },
      ],
    },
    {
      category: 'Labor & Cost Optimization',
      description: 'Control your largest controllable cost. Save management time and avoid costly penalties.',
      emoji: '💰',
      image: '/images/features/scheduling_v2.png',
      accentColor: 'amber',
      features: [
        {
          name: 'AI Staff Scheduling',
          description: 'Auto-creates optimized schedules considering sales forecasts, staff rules, and labor budgets.',
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
      emoji: '🎯',
      image: '/images/features/ops_hub_v2.png',
      accentColor: 'emerald',
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
  ];

  const staffFeatures = [
    {
      category: 'WhatsApp-First Staff Hub',
      description: 'Zero training. Use the tool they already have (WhatsApp) to save time and reduce friction.',
      icon: WhatsAppIcon,
      image: '/images/features/whatsapp_v2.png',
      accentColor: 'emerald',
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
      emoji: '📅',
      image: '/images/features/scheduling_comm_v2.png',
      accentColor: 'amber',
      features: [
        {
          name: 'Personalized Shift Alerts',
          description: 'Get reminders with traffic and prep notes.',
        },
        {
          name: 'In-App Team Chat',
          description: 'Role-based channels (Kitchen, Front-of-House) without sharing personal numbers.',
        },
        {
          name: 'Smart Shift Handover',
          description: 'Digital pass-down of notes and tasks between shifts.',
        },
      ],
    },
    {
      category: 'Performance & Engagement',
      description: 'Increases staff satisfaction, motivation, and retention by providing visibility and growth.',
      emoji: '🏆',
      image: '/images/features/performance_v2.png',
      accentColor: 'emerald',
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
  ];

  const combinedFeatures = [
    ownerFeatures[0],
    ownerFeatures[1],
    ownerFeatures[2],
    staffFeatures[2],
    staffFeatures[0],
    staffFeatures[1],
  ];

  const valueProps = [
    { emoji: '💰', text: 'Cut labor costs with AI optimized scheduling' },
    { emoji: '♻️', text: 'Reduce waste with predictive ordering' },
    { emoji: '💬', text: 'Achieve 100% staff adoption with WhatsApp-first interface' },
    { emoji: '📊', text: 'Make decisions with a unified dashboard, not guesswork' },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-primary-500/30">
      <Navigation />

      <main id="features">
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white relative overflow-hidden">
          {/* Premium Mesh Gradients */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                x: [0, 50, 0],
                y: [0, -30, 0]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-[20%] -left-[10%] w-[60%] h-[70%] bg-emerald-100/40 rounded-full blur-[120px]"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
                x: [0, -40, 0],
                y: [0, 60, 0]
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-[10%] -right-[10%] w-[50%] h-[60%] bg-primary-100/30 rounded-full blur-[100px]"
            />
          </div>

          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMDA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" aria-hidden="true" />

          <div className="container-custom max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-primary-200 text-primary-700 px-4 py-2 rounded-full mb-6 text-xs font-bold uppercase tracking-widest shadow-sm">
                <Sparkles size={14} className="text-primary-600" />
                <span>Next-Gen Restaurant OS</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 leading-tight tracking-tighter text-neutral-900">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-emerald-500 to-primary-600 animate-gradient-x">Intelligent Operating System</span> for Your Restaurant
              </h1>
              <p className="text-base md:text-lg text-neutral-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                Centralize operations, empower your team, and boost profits with an AI assistant manager that works through WhatsApp.
              </p>

              {/* Core Value Props */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {valueProps.map((prop, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="bg-white rounded-xl p-4 border border-neutral-200 shadow-sm hover:shadow-md hover:border-primary-200 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-3 leading-5">
                      <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0 text-xl">
                        {prop.emoji}
                      </div>
                      <p className="text-xs text-neutral-700 text-left font-medium">{prop.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>
        </section>

        {/* Platform Features - Owner & Staff */}
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-emerald-50 rounded-full blur-[100px] opacity-60" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-amber-50 rounded-full blur-[100px] opacity-60" />
          <div className="container-custom max-w-7xl relative z-10">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
              {combinedFeatures.map((section, sectionIndex) => (
                <motion.div
                  key={sectionIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: sectionIndex * 0.1, duration: 0.6 }}
                  className="bg-neutral-50/50 rounded-3xl p-6 lg:p-8 border border-neutral-100 shadow-sm min-w-0 h-full flex flex-col"
                >
                  <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 mb-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-12 h-12 ${section.accentColor === 'amber' ? 'bg-amber-100' : 'bg-emerald-100'} rounded-xl flex items-center justify-center flex-shrink-0 ${'icon' in section && section.icon ? '' : 'text-2xl'}`}>
                          {'icon' in section && section.icon ? (
                            <section.icon className={section.accentColor === 'amber' ? 'text-amber-600' : 'text-emerald-600'} size={24} />
                          ) : (
                            section.emoji
                          )}
                        </div>
                        <h3 className="text-xl font-black text-neutral-900 tracking-tight">{section.category}</h3>
                      </div>
                      <p className="text-base text-neutral-600 leading-relaxed mb-4">{section.description}</p>
                    </div>
                    <div className="flex-1 w-full mx-auto lg:mx-0" style={{ maxWidth: '300px' }}>
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-neutral-900/10 border border-white/50 bg-white group/img backdrop-blur-sm">
                          <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
                          <img
                            src={section.image}
                            alt={section.category}
                            className="w-full h-auto object-cover hover:scale-110 transition-transform duration-700 ease-out p-1"
                          />
                      </div>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className={`bg-white rounded-xl p-4 border border-neutral-200/80 shadow-sm flex-1 ${
                      section.accentColor === 'amber' ? 'hover:border-amber-300' : 'hover:border-emerald-300'
                    } transition-colors duration-300`}
                  >
                    <div className="space-y-3">
                      {section.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2.5">
                          <div className={`w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center mt-0.5 ${
                            section.accentColor === 'amber' ? 'bg-amber-100' : 'bg-emerald-100'
                          }`}>
                            <CheckCircle className={
                              section.accentColor === 'amber' ? 'text-amber-600' : 'text-emerald-600'
                            } size={10} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-bold text-neutral-900 text-sm leading-tight">{feature.name}</h4>
                            <p className="text-neutral-500 text-xs leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="pt-30 pb-20 md:pt-40 md:pb-30 bg-white text-neutral-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(0,217,143,0.06),transparent_70%)]" aria-hidden="true" />

          <div className="container-custom max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-2xl md:text-3xl font-black text-neutral-900 mb-4 tracking-tight">
                How It Works
              </h2>
              <p className="text-base text-neutral-600 max-w-2xl mx-auto">
                Get started with Mizan in three simple steps
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-10 relative items-stretch">
              <div className="hidden md:block absolute top-[60px] left-0 right-0 h-0.5 bg-primary-200 pointer-events-none" />

              {[
                {
                  step: '1',
                  title: 'Connect Your Systems',
                  description: 'Link your POS, payroll, and existing tools. Our team handles the setup.',
                  emoji: '🔌',
                },
                {
                  step: '2',
                  title: 'Onboard Your Team',
                  description: 'Staff receive WhatsApp invites and start using Mizan immediately. Zero training needed.',
                  emoji: '👥',
                },
                {
                  step: '3',
                  title: 'Optimize & Grow',
                  description: 'Watch real-time insights, reduce costs, and improve operations from day one.',
                  emoji: '🚀',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative h-full flex"
                >
                  <div className="relative w-full h-full bg-neutral-50 rounded-2xl p-6 md:p-8 border border-neutral-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
                    <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center text-base font-black mb-4">
                      {item.step}
                    </div>
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 text-2xl">
                      {item.emoji}
                    </div>
                    <h3 className="text-base font-bold text-neutral-900 mb-3 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 text-xs leading-relaxed flex-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
