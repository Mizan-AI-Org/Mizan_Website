import React from 'react';
import { motion } from 'motion/react';
import {
  Star,
  ArrowRight
} from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

// Wave Divider Component - Concave elliptical style (INEO-inspired)
function WaveDivider() {
  return (
    <div className="wave-divider">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1400 80"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 Q720,200 1440,0 L1440,200 L0,200 Z"
          className="shape-fill"
        />
      </svg>
    </div>
  );
}

// All-In-One Platform Hub Component - EXACT INEO MATCH (ineo.ma)
// Updated with premium images and animated connections
// All-In-One Platform Hub Component
function AllInOnePlatform() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0066cc] mb-6">An All-In-One Platform</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Everything you need to run your restaurant operations, connected through one intelligent system
          </p>
        </motion.div>

        {/* Mizan AI Hub GIF */}
        <div className="relative w-full flex justify-center items-center py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl shadow-[0_50px_100px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-neutral-100"
          >
            <img
              src="/gif.gif"
              alt="Mizan AI All-In-One Platform"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// FAQ Accordion Component

export default function Index() {
  const features = [
    {
      image: '/images/features/scheduling.png',
      title: 'Smart Scheduling',
      description: 'AI-powered scheduling that considers availability, skills, and labor costs. Cut scheduling time by 70%.',
    },
    {
      image: '/images/features/whatsapp.png',
      title: 'WhatsApp Integration',
      description: 'Communicate with your team where they already are. Send schedules, updates, and reminders instantly.',
    },
    {
      image: '/images/features/analytics.png',
      title: 'Performance Analytics',
      description: 'Track KPIs, sales per labor hour, and team performance. Make data-driven decisions that boost profitability.',
    },
  ];

  const stats = [
    { value: 10, suffix: '+', label: 'Restaurants using Mizan' },
    { value: 70, suffix: '%', label: 'Reduction in scheduling time' },
    { value: 35, suffix: '%', label: 'Decrease in staff turnover' },
    { value: 99, suffix: '%', label: 'WhatsApp message delivery rate' },
  ];

  const testimonials = [
    {
      quote: "Mizan completely transformed how we manage our restaurant operations and staff scheduling. What used to take hours now takes minutes.",
      author: "Hamza Hadni",
      role: "Owner, Barometře, Marrakesh",
      image: "/images/hamza.png"
    },
    {
      quote: "Our staff turnover dropped by 40% since implementing Mizan. The team loves the WhatsApp integration.",
      author: "Mohammed Al-Habib",
      role: "General Manager, Coastal Kitchen",
      image: "/images/mohammed.png"
    },
    {
      quote: "The performance insights helped us identify and fix issues we didn't even know existed. ROI in the first month.",
      author: "Imran Haidar",
      role: "General Manager, Ima Restaurant, Benguerir",
      image: "/images/imran.png"
    },
  ];

  const valueProps = [
    {
      icon: '🔗',
      title: 'Connected',
      description: 'Real-time sync across all your restaurant operations',
    },
    {
      icon: '✨',
      title: 'Intuitive',
      description: 'User-friendly interface that your team will love',
    },
    {
      icon: '🔒',
      title: 'Secure',
      description: 'Enterprise-grade security for your data',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-pattern relative pt-32 pb-80 md:pt-40 md:pb-[400px] overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl uppercase font-extrabold">
                The Operating System Your Restaurant Actually Needs
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
                Mizan streamlines scheduling, reduces no-shows, and boosts team performance through intelligent automation and WhatsApp integration
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="bg-white text-primary-600 px-8 py-4 rounded-full hover:bg-neutral-100 transition-all duration-300 text-center inline-flex items-center justify-center space-x-2 font-semibold shadow-lg hover:shadow-xl"
                >
                  <span>Get Started</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 max-w-3xl mx-auto z-20 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm p-2">
              <video
                src="/mizan_ad.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-xl max-h-[400px] object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <WaveDivider />
      </section>

      {/* Stats Section */}
      <section className="section-padding-sm bg-primary-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
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

      {/* All-In-One Platform Section */}
      <AllInOnePlatform />

      {/* Features Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-neutral-900 mb-4">Everything you need to run a better restaurant</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Powerful features designed specifically for the unique challenges of restaurant operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
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
                  <h3 className="text-neutral-900 mb-4 text-2xl font-bold tracking-tight">{feature.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Cards */}
      <section className="section-padding-sm bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8"
              >
                <div className="text-5xl mb-4">{prop.icon}</div>
                <h3 className="text-neutral-900 mb-2 text-xl font-semibold">{prop.title}</h3>
                <p className="text-neutral-600">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-neutral-900 mb-4">Loved by restaurant operators across MENA</h2>
            <p className="text-xl text-neutral-600">
              Join hundreds of restaurants already saving time and money with Mizan AI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
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


      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-6">Ready to transform your restaurant operations?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join 10+ restaurants already saving time and boosting profits with Mizan AI
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-white text-primary-600 px-8 py-4 rounded-full hover:bg-neutral-100 transition-colors inline-flex items-center justify-center space-x-2 font-semibold"
              >
                <span>Book a Demo</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
