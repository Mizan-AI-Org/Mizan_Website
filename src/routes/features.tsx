import { motion } from 'motion/react';
import {
  TrendingUp,
  DollarSign,
  BarChart3,
  Target,
  AlertTriangle,
  Trash2,
  Calendar,
  Clock,
  AlertCircle,
  MessageSquare,
  CheckCircle,
  Users,
  Award,
  TrendingDown,
  Shield,
  Zap,
  Globe,
  Network,
  Lock,
  ArrowRight,
} from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function Features() {
  const ownerFeatures = [
    {
      category: 'AI-Powered Business Intelligence',
      icon: BarChart3,
      color: 'primary',
      features: [
        {
          name: 'Profitability Dashboard',
          description: 'Real-time view of food cost, labor cost, prime cost.',
        },
        {
          name: 'Menu Engineering',
          description: 'Identifies top & bottom performers by profit and popularity.',
        },
        {
          name: 'Waste Tracking & Prediction',
          description: 'AI forecasts demand to reduce spoilage and over-ordering.',
        },
      ],
      benefit: 'Make data-driven decisions to directly increase margins and reduce loss.',
    },
    {
      category: 'Labor & Cost Optimization',
      icon: DollarSign,
      color: 'secondary',
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
      benefit: 'Control your largest controllable cost. Save management time and avoid costly penalties.',
    },
    {
      category: 'Operational Command Center',
      icon: Target,
      color: 'primary',
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
          name: 'Centralized Document Hub',
          description: 'Store manuals, training videos, and compliance docs.',
        },
      ],
      benefit: 'Replace chaos with clarity. Have a single source of truth for your entire operation.',
    },
  ];

  const staffFeatures = [
    {
      category: 'WhatsApp-First Staff Hub',
      icon: MessageSquare,
      color: 'primary',
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
      benefit: 'Zero training. Use the tool they already have (WhatsApp) to save time and reduce friction.',
    },
    {
      category: 'Intelligent Scheduling & Communication',
      icon: Calendar,
      color: 'secondary',
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
      benefit: 'Empowers staff with clarity, improves team coordination, and reduces miscommunication.',
    },
    {
      category: 'Performance & Engagement',
      icon: Award,
      color: 'primary',
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
      benefit: 'Increases staff satisfaction, motivation, and retention by providing visibility and growth.',
    },
  ];

  const technicalFeatures = [
    {
      icon: Network,
      title: 'POS Agnostic',
      description: 'Works with your existing system (Toast, Square, Clover, etc.).',
    },
    {
      icon: Shield,
      title: 'No Payment Processing',
      description: 'We never touch your payments or compete with your processor.',
    },
    {
      icon: Zap,
      title: 'Open API',
      description: 'Connect to accounting, delivery apps, and other tools.',
    },
    {
      icon: Globe,
      title: 'Multi-Location Management',
      description: 'Control all venues from a single dashboard.',
    },
    {
      icon: Lock,
      title: 'Role-Based Permissions',
      description: 'Granular control over what each user can see and do.',
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'SOC 2, GDPR, and data encryption.',
    },
  ];

  const valueProps = [
    { icon: TrendingDown, text: 'Cut labor costs with AI scheduling' },
    { icon: Trash2, text: 'Reduce waste by 15%+ with predictive ordering' },
    { icon: Users, text: 'Achieve 100% staff adoption with WhatsApp-first interface' },
    { icon: BarChart3, text: 'Make decisions with a unified dashboard, not guesswork' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-neutral-50 to-primary-50/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h1 className="text-neutral-900 mb-6">
              Mizan AI: The Intelligent Operating System for Your Restaurant
            </h1>
            <p className="text-2xl text-neutral-600 mb-8">
              Centralize operations, empower your team, and boost profits with an AI assistant manager that works through WhatsApp.
            </p>

            {/* Core Value Props */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {valueProps.map((prop, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4 border border-neutral-200 shadow-sm"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <prop.icon className="text-primary-600" size={20} />
                    </div>
                    <p className="text-sm text-neutral-700 text-left">{prop.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors"
            >
              <span>Start Free Trial</span>
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Owner/Manager Features */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-4">
              <TrendingUp size={16} />
              <span className="text-sm">For Decision Makers</span>
            </div>
            <h2 className="text-neutral-900 mb-4">
              For Restaurant Owners & General Managers
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Features focused on profitability, control, and growth
            </p>
          </motion.div>

          <div className="space-y-12">
            {ownerFeatures.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
                className="bg-gradient-to-br from-white to-neutral-50 rounded-3xl border border-neutral-200 overflow-hidden shadow-lg"
              >
                <div className="p-8 md:p-10">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-14 h-14 bg-${section.color}-100 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <section.icon className={`text-${section.color}-600`} size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-neutral-900 mb-2">{section.category}</h3>
                      <p className="text-lg text-neutral-600">{section.benefit}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {section.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="bg-white rounded-xl p-6 border border-neutral-200"
                      >
                        <div className="flex items-start space-x-3 mb-3">
                          <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                          <h4 className="text-neutral-900">{feature.name}</h4>
                        </div>
                        <p className="text-neutral-600 text-sm ml-8">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff/Manager Features */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full mb-4">
              <Users size={16} />
              <span className="text-sm">For Daily Users</span>
            </div>
            <h2 className="text-neutral-900 mb-4">
              For Frontline Staff & Managers
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Features focused on simplicity, communication, and empowerment
            </p>
          </motion.div>

          <div className="space-y-12">
            {staffFeatures.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
                className="bg-gradient-to-br from-white to-neutral-50 rounded-3xl border border-neutral-200 overflow-hidden shadow-lg"
              >
                <div className="p-8 md:p-10">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-14 h-14 bg-${section.color}-100 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <section.icon className={`text-${section.color}-600`} size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-neutral-900 mb-2">{section.category}</h3>
                      <p className="text-lg text-neutral-600">{section.benefit}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {section.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="bg-white rounded-xl p-6 border border-neutral-200"
                      >
                        <div className="flex items-start space-x-3 mb-3">
                          <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                          <h4 className="text-neutral-900">{feature.name}</h4>
                        </div>
                        <p className="text-neutral-600 text-sm ml-8">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Foundation */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-neutral-100 text-neutral-700 px-4 py-2 rounded-full mb-4">
              <Shield size={16} />
              <span className="text-sm">Enterprise-Grade Platform</span>
            </div>
            <h2 className="text-neutral-900 mb-4">
              Technical Foundation & Integration
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Built on a secure, scalable infrastructure that integrates seamlessly with your existing tools
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl p-8 border border-neutral-200 hover:shadow-xl hover:border-primary-200 transition-all"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-5">
                  <feature.icon className="text-primary-600" size={24} />
                </div>
                <h4 className="text-neutral-900 mb-3">{feature.title}</h4>
                <p className="text-neutral-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-10 text-center"
          >
            <h3 className="text-neutral-900 mb-4">Seamless Integration</h3>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-6">
              Mizan works with your existing POS systems (Toast, Square, Clover), accounting software, and delivery platforms. We never touch your payments or compete with your processor.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700"
            >
              <span>Request integration details</span>
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4">How It Works</h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Get started with Mizan in three simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                step: '01',
                title: 'Connect Your Systems',
                description: 'Link your POS, payroll, and existing tools. Our team handles the setup.',
              },
              {
                step: '02',
                title: 'Onboard Your Team',
                description: 'Staff receive WhatsApp invites and start using Mizan immediately. Zero training needed.',
              },
              {
                step: '03',
                title: 'Optimize & Grow',
                description: 'Watch real-time insights, reduce costs, and improve operations from day one.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-primary-500 mb-4 opacity-50">
                  {item.step}
                </div>
                <h3 className="text-white mb-3">{item.title}</h3>
                <p className="text-neutral-300">{item.description}</p>
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
            <h2 className="text-white mb-6">Ready to transform your restaurant?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join 500+ restaurants already saving time, reducing costs, and empowering their teams with Mizan AI
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-neutral-100 transition-colors"
              >
                <span>Start Free Trial</span>
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
              >
                Book a Demo
              </a>
            </div>

            <p className="text-primary-100 mt-6">14-day free trial • No credit card required • Cancel anytime</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
