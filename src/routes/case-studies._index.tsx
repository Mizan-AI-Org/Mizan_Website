import { useState } from 'react';
import { Link } from '@remix-run/react';
import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function CaseStudiesIndex() {
  const [filter, setFilter] = useState<'all' | 'fine-dining' | 'qsr' | 'multi-location'>('all');

  const caseStudies = [
    {
      id: 'urban-bistro-group',
      title: 'Urban Bistro Group',
      category: 'multi-location',
      tagline: 'How a 3-location restaurant group cut scheduling time by 75%',
      description: 'Learn how Urban Bistro streamlined operations across three locations and reduced labor costs by 18%.',
      image: 'https://images.unsplash.com/photo-1685040235380-a42a129ade4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYzNjE4NDI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      metrics: [
        { label: 'Scheduling Time', value: '75%', suffix: ' reduction' },
        { label: 'Labor Costs', value: '18%', suffix: ' decrease' },
        { label: 'Staff Turnover', value: '40%', suffix: ' improvement' },
      ],
    },
    {
      id: 'coastal-kitchen',
      title: 'Coastal Kitchen',
      category: 'fine-dining',
      tagline: 'Fine dining restaurant improves team satisfaction and reduces turnover',
      description: 'Discover how Coastal Kitchen used Mizan to create happier teams and better service.',
      image: 'https://images.unsplash.com/photo-1762113246607-4299ec3f3214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMHRlYW18ZW58MXx8fHwxNzYzNjE3Nzc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      metrics: [
        { label: 'Staff Turnover', value: '45%', suffix: ' reduction' },
        { label: 'Guest Satisfaction', value: '92%', suffix: ' rating' },
        { label: 'Team Engagement', value: '35%', suffix: ' increase' },
      ],
    },
    {
      id: 'quick-serve-co',
      title: 'Quick Serve Co.',
      category: 'qsr',
      tagline: 'QSR chain manages 200+ employees across 5 locations with ease',
      description: 'See how Quick Serve Co. scaled operations while maintaining quality and efficiency.',
      image: 'https://images.unsplash.com/photo-1658921034679-0d9e999ddc43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjM2NTUzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      metrics: [
        { label: 'Locations Managed', value: '5', suffix: ' locations' },
        { label: 'Employees', value: '200+', suffix: '' },
        { label: 'Time Saved', value: '15', suffix: ' hrs/week' },
      ],
    },
    {
      id: 'the-garden-cafe',
      title: 'The Garden Cafe',
      category: 'fine-dining',
      tagline: 'Farm-to-table restaurant optimizes seasonal staffing',
      description: 'Learn how The Garden Cafe manages fluctuating seasonal demand with intelligent scheduling.',
      image: 'https://images.unsplash.com/photo-1758519289582-398f2d7a4a88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwc3RhZmYlMjBtZWV0aW5nfGVufDF8fHx8MTc2MzcyOTI3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      metrics: [
        { label: 'Seasonal Staffing', value: '60%', suffix: ' easier' },
        { label: 'Labor Budget', value: '12%', suffix: ' savings' },
        { label: 'No-Shows', value: '70%', suffix: ' reduction' },
      ],
    },
    {
      id: 'metro-pizza',
      title: 'Metro Pizza',
      category: 'qsr',
      tagline: 'Pizza chain doubles locations without doubling admin work',
      description: 'Discover how Metro Pizza scaled from 2 to 4 locations with the same management team.',
      image: 'https://images.unsplash.com/photo-1762113246607-4299ec3f3214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwc2VydmljZSUyMHRlYW18ZW58MXx8fHwxNzYzNzI5Mjc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      metrics: [
        { label: 'Locations', value: '2x', suffix: ' growth' },
        { label: 'Admin Time', value: '50%', suffix: ' reduction' },
        { label: 'Profitability', value: '25%', suffix: ' increase' },
      ],
    },
    {
      id: 'fusion-collective',
      title: 'Fusion Collective',
      category: 'multi-location',
      tagline: 'Restaurant group achieves consistent quality across 7 locations',
      description: 'See how Fusion Collective standardized operations while preserving local flavor.',
      image: 'https://images.unsplash.com/photo-1658282514119-65e9920d1e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwbWFuYWdlciUyMHRhYmxldHxlbnwxfHx8fDE3NjM3Mjc5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      metrics: [
        { label: 'Locations', value: '7', suffix: ' managed' },
        { label: 'Consistency', value: '95%', suffix: ' score' },
        { label: 'Reporting Time', value: '80%', suffix: ' faster' },
      ],
    },
  ];

  const filteredStudies = filter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === filter);

  const categoryLabels = {
    'all': 'All',
    'fine-dining': 'Fine Dining',
    'qsr': 'Quick Service',
    'multi-location': 'Multi-Location'
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-neutral-50 to-primary-50/30">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-neutral-900 mb-6">
              Real restaurants, real results
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              See how restaurants of all sizes are using Mizan to streamline operations and grow their business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="section-padding-sm bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {(Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>).map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  filter === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/case-studies/${study.id}`}
                  className="group block bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary-200 transition-all"
                >
                  <div className="aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="text-xs text-primary-600 uppercase tracking-wide mb-2">
                      {categoryLabels[study.category as keyof typeof categoryLabels]}
                    </div>
                    
                    <h3 className="text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {study.title}
                    </h3>
                    
                    <p className="text-neutral-900 mb-4">
                      {study.tagline}
                    </p>
                    
                    <p className="text-neutral-600 mb-6">
                      {study.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-neutral-50 rounded-lg p-3">
                          <div className="text-primary-600 text-sm mb-1">{metric.label}</div>
                          <div className="text-neutral-900">
                            {metric.value}
                            <span className="text-xs text-neutral-500">{metric.suffix}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center text-primary-600 group-hover:text-primary-700">
                      <span>Read case study</span>
                      <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-2">10+</div>
              <div className="text-primary-100">Restaurants using Mizan</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-5xl mb-2">70%</div>
              <div className="text-primary-100">Average time saved</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-5xl mb-2">$2.5M</div>
              <div className="text-primary-100">Labor costs saved</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-5xl mb-2">4.9/5</div>
              <div className="text-primary-100">Customer satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-neutral-50 to-primary-50/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-neutral-900 mb-4">Ready to write your success story?</h2>
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
              Join the hundreds of restaurants already transforming their operations with Mizan
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors"
              >
                <span>Start Free Trial</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-neutral-300 text-neutral-900 px-8 py-4 rounded-lg hover:border-primary-600 hover:text-primary-600 transition-colors"
              >
                Schedule a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
