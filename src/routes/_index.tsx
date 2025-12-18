import { motion } from 'motion/react';
import { 
  Calendar, 
  MessageSquare, 
  BarChart3, 
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Index() {
  const features = [
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'AI-powered scheduling that considers availability, skills, and labor costs. Cut scheduling time by 70%.',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Integration',
      description: 'Communicate with your team where they already are. Send schedules, updates, and reminders instantly.',
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Track KPIs, sales per labor hour, and team performance. Make data-driven decisions that boost profitability.',
    },
  ];

  const stats = [
    { value: 500, suffix: '+', label: 'Restaurants using Mizan' },
    { value: 70, suffix: '%', label: 'Reduction in scheduling time' },
    { value: 35, suffix: '%', label: 'Decrease in staff turnover' },
    { value: 99, suffix: '%', label: 'WhatsApp message delivery rate' },
  ];

  const testimonials = [
    {
      quote: "Mizan completely transformed how we manage our three locations. What used to take hours now takes minutes.",
      author: "Hamza Hadni",
      role: "Owner, Barometře, Marrakesh",
      image: ""
    },
    {
      quote: "Our staff turnover dropped by 40% since implementing Mizan. The team loves the WhatsApp integration.",
      author: "Mohammed Al-Habib",
      role: "General Manager, Coastal Kitchen",
      image: ""
    },
    {
      quote: "The performance insights helped us identify and fix issues we didn't even know existed. ROI in the first month.",
      author: "Ali Haidar",
      role: "General Manager, Ima Restaurant, Benguerir",
      image: ""
    },
  ];

  const benefits = [
    'Reduce scheduling conflicts',
    'Improve team communication',
    'Track labor costs in real-time',
    'Reduce no-shows by 60%',
    'Automated shift reminders',
    'Performance-based insights',
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-neutral-50 to-primary-50/30 overflow-hidden">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-secondary-50 text-secondary-700 px-4 py-2 rounded-full mb-6">
                <Star size={16} fill="currentColor" />
                <span className="text-sm">Trusted by 10+ restaurants</span>
              </div>
              
              <h1 className="text-neutral-900 mb-6">
                The operating system your restaurant actually needs
              </h1>
              
              <p className="text-xl text-neutral-600 mb-8">
                Mizan streamlines scheduling, reduces no-shows, and boosts team performance through intelligent automation and WhatsApp integration
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#contact"
                  className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors text-center inline-flex items-center justify-center space-x-2"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight size={20} />
                </a>
                <a
                  href="#contact"
                  className="border-2 border-neutral-300 text-neutral-900 px-8 py-4 rounded-lg hover:border-primary-600 hover:text-primary-600 transition-colors text-center"
                >
                  Book a Demo
                </a>
              </div>

              <div className="flex items-center space-x-6 text-sm text-neutral-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-secondary-600" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-secondary-600" />
                  <span>No credit card required</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Restaurant manager using Mizan on tablet"
                  className="w-full h-auto"
                />
                
                {/* Floating Dashboard Preview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute bottom-4 left-4 right-4 bg-white rounded-xl shadow-xl p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-neutral-600">Today's Overview</span>
                    <div className="flex items-center space-x-1 text-primary-600">
                      <TrendingUp size={16} />
                      <span className="text-sm">+12%</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-neutral-50 rounded-lg p-2">
                      <div className="text-xs text-neutral-500">Staff</div>
                      <div className="font-bold text-neutral-900">24</div>
                    </div>
                    <div className="bg-neutral-50 rounded-lg p-2">
                      <div className="text-xs text-neutral-500">Hours</div>
                      <div className="font-bold text-neutral-900">186</div>
                    </div>
                    <div className="bg-neutral-50 rounded-lg p-2">
                      <div className="text-xs text-neutral-500">Labor %</div>
                      <div className="font-bold text-neutral-900">28.4</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
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
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
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

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-xl hover:border-primary-200 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="text-primary-600" size={24} />
                </div>
                <h3 className="text-neutral-900 mb-4">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-neutral-900 mb-6">Built for the way restaurants actually work</h2>
              <p className="text-lg text-neutral-600 mb-8">
                We understand the complexity of restaurant operations. Mizan adapts to your workflow, not the other way around.
              </p>

              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="text-secondary-600 flex-shrink-0" size={20} />
                    <span className="text-neutral-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <a
                href="#features"
                className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mt-8"
              >
                <span>Explore all features</span>
                <ArrowRight size={20} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <ImageWithFallback
              src='https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt="Restaurant staff team working together"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-neutral-900 mb-4">Loved by restaurant operators worldwide</h2>
            <p className="text-xl text-neutral-600">
              Join hundreds of restaurants already saving time and money with Mizan
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
              Join 10+ restaurants already saving time and boosting profits with Mizan
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-neutral-100 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight size={20} />
              </a>
              <a
                href="#pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
              >
                View Pricing
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