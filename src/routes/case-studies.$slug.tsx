import { useParams, Link } from '@remix-run/react';
import { motion } from 'motion/react';
import { ArrowLeft, Quote, TrendingUp, Clock, Users, DollarSign } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function CaseStudy() {
  const { slug } = useParams();

  // Mock case study data - in a real app, this would come from a CMS or database
  const caseStudyData: Record<string, any> = {
    'urban-bistro-group': {
      title: 'Urban Bistro Group',
      category: 'Multi-Location',
      tagline: 'How a 3-location restaurant group cut scheduling time by 75%',
      hero: 'https://images.unsplash.com/photo-1685040235380-a42a129ade4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYzNjE4NDI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      stats: [
        { label: 'Scheduling Time Saved', value: '75%', icon: Clock },
        { label: 'Labor Cost Reduction', value: '18%', icon: DollarSign },
        { label: 'Staff Turnover Improvement', value: '40%', icon: Users },
        { label: 'Time to ROI', value: '1 month', icon: TrendingUp },
      ],
      company: {
        name: 'Urban Bistro Group',
        industry: 'Contemporary American Dining',
        locations: 3,
        employees: 85,
        founded: 2018,
      },
      challenge: {
        title: 'The Challenge',
        content: `Urban Bistro Group was rapidly expanding with their third location opening in early 2024. Owner Sarah Chen found herself drowning in spreadsheets, managing schedules for 85 employees across three locations. Each week, she spent over 12 hours creating schedules, resolving conflicts, and dealing with last-minute changes.

The manual process led to frequent scheduling errors, staff frustration, and labor costs that were consistently 3-5% above budget. Communication was fragmented across text messages, emails, and phone calls, making it nearly impossible to keep everyone informed.

"I was spending more time on admin work than actually running my restaurants," Sarah recalls. "Something had to change."`,
      },
      solution: {
        title: 'The Solution',
        content: `Urban Bistro Group implemented Mizan AI in February 2024, starting with a pilot at their flagship location. The AI-powered scheduling system immediately identified optimization opportunities, suggesting schedules that balanced labor costs with coverage needs.

The WhatsApp integration was a game-changer. Instead of chasing down staff via multiple channels, Sarah could push schedules directly to her team's phones. Shift swaps that previously required hours of back-and-forth were resolved in minutes.

Within the first month, the system had paid for itself through labor cost savings alone. The team expanded Mizan to all three locations by month two.`,
      },
      results: {
        title: 'The Results',
        metrics: [
          {
            label: 'Scheduling Time',
            before: '12 hours/week',
            after: '3 hours/week',
            improvement: '75% reduction',
          },
          {
            label: 'Labor Cost %',
            before: '33-35%',
            after: '27-28%',
            improvement: '18% reduction',
          },
          {
            label: 'Staff Turnover',
            before: '65% annually',
            after: '39% annually',
            improvement: '40% improvement',
          },
          {
            label: 'Schedule Conflicts',
            before: '15-20/week',
            after: '2-3/week',
            improvement: '85% reduction',
          },
        ],
      },
      testimonial: {
        quote: "Mizan completely transformed how we manage our restaurants. What used to take me all Sunday afternoon now takes less than an hour. The labor cost savings alone paid for the system in the first month, but the real win is getting my time back to focus on growth.",
        author: 'Sarah Chen',
        role: 'Owner & CEO',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      },
      keyFeatures: [
        {
          title: 'Multi-Location Dashboard',
          description: 'Monitor all three locations from a single view, with real-time labor cost tracking.',
        },
        {
          title: 'WhatsApp Scheduling',
          description: '99% of staff now receive and acknowledge their schedules within 2 hours.',
        },
        {
          title: 'AI Optimization',
          description: 'Automatic schedule suggestions that balance costs, skills, and employee preferences.',
        },
      ],
    },
    'coastal-kitchen': {
      title: 'Coastal Kitchen',
      category: 'Fine Dining',
      tagline: 'Fine dining restaurant improves team satisfaction and reduces turnover',
      hero: 'https://unsplash.com/photos/3d-render-of-luxury-restaurant-interior-V9CVO_cv-78',
      stats: [
        { label: 'Staff Turnover Reduction', value: '45%', icon: Users },
        { label: 'Guest Satisfaction', value: '92%', icon: TrendingUp },
        { label: 'Team Engagement', value: '+35%', icon: TrendingUp },
        { label: 'Schedule Accuracy', value: '98%', icon: Clock },
      ],
      company: {
        name: 'Coastal Kitchen',
        industry: 'Fine Dining - Seafood',
        locations: 1,
        employees: 42,
        founded: 2015,
      },
      challenge: {
        title: 'The Challenge',
        content: `Coastal Kitchen, a Michelin-recommended seafood restaurant, was facing a retention crisis. Despite competitive pay and a strong reputation, the restaurant struggled with 65% annual staff turnover.

General Manager Marcus Rodriguez identified the root cause: inconsistent scheduling and poor communication were creating frustration among the team. Servers and kitchen staff felt their availability preferences were ignored, and last-minute schedule changes were common.

"We had incredibly talented people leaving for competitors, not because of money, but because of scheduling frustration," Marcus explains. "In fine dining, consistency in service is everything, and we were losing that."`,
      },
      solution: {
        title: 'The Solution',
        content: `Coastal Kitchen implemented Mizan with a focus on employee experience. The system's availability management tools allowed staff to set clear preferences, and the AI scheduler respected these while maintaining optimal coverage.

The WhatsApp integration meant no more missed schedule updates. Automatic shift reminders reduced no-shows to near zero. Most importantly, the transparent shift swap system empowered staff to manage their own schedules within guardrails.

Marcus also used Mizan's performance tracking to identify and recognize top performers, creating a data-driven culture of excellence.`,
      },
      results: {
        title: 'The Results',
        metrics: [
          {
            label: 'Staff Turnover',
            before: '65% annually',
            after: '36% annually',
            improvement: '45% reduction',
          },
          {
            label: 'Guest Satisfaction',
            before: '84%',
            after: '92%',
            improvement: '8 point increase',
          },
          {
            label: 'Schedule Changes',
            before: '25/week',
            after: '4/week',
            improvement: '84% reduction',
          },
          {
            label: 'Employee NPS',
            before: '32',
            after: '68',
            improvement: '+36 points',
          },
        ],
      },
      testimonial: {
        quote: "Our staff turnover dropped by 40% since implementing Mizan. The team loves the WhatsApp integration and the ability to manage their own availability. Happy staff means better service, and our guest satisfaction scores prove it.",
        author: 'Marcus Rodriguez',
        role: 'General Manager',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      },
      keyFeatures: [
        {
          title: 'Availability Management',
          description: 'Staff can set preferences and the AI respects them while building schedules.',
        },
        {
          title: 'Performance Tracking',
          description: 'Identify top performers and create recognition programs based on data.',
        },
        {
          title: 'Team Communication',
          description: 'WhatsApp integration keeps everyone informed with 99% message delivery.',
        },
      ],
    },
  };

  const study = slug ? caseStudyData[slug] : null;

  if (!study) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="container-custom py-32 text-center">
          <h1 className="text-neutral-900 mb-4">Case Study Not Found</h1>
          <Link to="/case-studies" className="text-primary-600 hover:text-primary-700">
            ← Back to Case Studies
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container-custom">
          <Link
            to="/case-studies"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Case Studies
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-sm text-primary-600 uppercase tracking-wide mb-4">
              {study.category}
            </div>
            <h1 className="text-neutral-900 mb-6">{study.title}</h1>
            <p className="text-2xl text-neutral-600 mb-8">{study.tagline}</p>
          </motion.div>

          <div className="aspect-video rounded-2xl overflow-hidden mb-12">
            <ImageWithFallback
              src={study.hero}
              alt={study.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {study.stats.map((stat: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-50 rounded-xl p-6 text-center"
              >
                <stat.icon className="text-primary-600 mx-auto mb-3" size={32} />
                <div className="text-3xl font-bold text-neutral-900 mb-2">{stat.value}</div>
                <div className="text-neutral-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="section-padding-sm bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-neutral-900 mb-6">About {study.company.name}</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-neutral-500 mb-1">Industry</div>
                <div className="text-neutral-900">{study.company.industry}</div>
              </div>
              <div>
                <div className="text-neutral-500 mb-1">Locations</div>
                <div className="text-neutral-900">{study.company.locations}</div>
              </div>
              <div>
                <div className="text-neutral-500 mb-1">Employees</div>
                <div className="text-neutral-900">{study.company.employees}</div>
              </div>
              <div>
                <div className="text-neutral-500 mb-1">Founded</div>
                <div className="text-neutral-900">{study.company.founded}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-neutral-900 mb-6">{study.challenge.title}</h2>
            <div className="prose prose-lg max-w-none">
              {study.challenge.content.split('\n\n').map((paragraph: string, index: number) => (
                <p key={index} className="text-neutral-700 mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-neutral-900 mb-6">{study.solution.title}</h2>
            <div className="prose prose-lg max-w-none">
              {study.solution.content.split('\n\n').map((paragraph: string, index: number) => (
                <p key={index} className="text-neutral-700 mb-4">{paragraph}</p>
              ))}
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {study.keyFeatures.map((feature: any, index: number) => (
                <div key={index} className="bg-white rounded-xl p-6">
                  <h4 className="text-neutral-900 mb-2">{feature.title}</h4>
                  <p className="text-neutral-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-neutral-900 mb-12 text-center">{study.results.title}</h2>

            <div className="space-y-6">
              {study.results.metrics.map((metric: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-50 rounded-xl p-6"
                >
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div className="font-semibold text-neutral-900">{metric.label}</div>
                    <div className="text-neutral-600">
                      <span className="text-sm">Before:</span> {metric.before}
                    </div>
                    <div className="text-neutral-600">
                      <span className="text-sm">After:</span> {metric.after}
                    </div>
                    <div className="text-secondary-600 font-semibold">
                      {metric.improvement}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="mx-auto mb-6 text-primary-200" size={48} />
            <blockquote className="text-2xl mb-8 leading-relaxed">
              "{study.testimonial.quote}"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <ImageWithFallback
                src={study.testimonial.image}
                alt={study.testimonial.author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold">{study.testimonial.author}</div>
                <div className="text-primary-100">{study.testimonial.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-neutral-50 to-primary-50/30 rounded-3xl p-12 text-center">
            <h2 className="text-neutral-900 mb-4">Ready to transform your restaurant?</h2>
            <p className="text-xl text-neutral-600 mb-8">
              See how Mizan can help you achieve similar results
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors"
              >
                <span>Start Free Trial</span>
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-neutral-300 text-neutral-900 px-8 py-4 rounded-lg hover:border-primary-600 hover:text-primary-600 transition-colors"
              >
                Read More Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
