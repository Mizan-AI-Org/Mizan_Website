import { Link } from '@remix-run/react';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Input } from '../components/ui/input';

export default function BlogIndex() {
  const featuredPost = {
    id: 'restaurant-scheduling-best-practices',
    title: 'The Complete Guide to Restaurant Scheduling in 2025',
    excerpt: 'Learn the strategies top restaurants use to create efficient schedules that balance labor costs, employee satisfaction, and customer service.',
    author: 'Jennifer Park',
    date: 'November 15, 2025',
    readTime: '12 min read',
    category: 'Best Practices',
    image: 'https://images.unsplash.com/photo-1658282514119-65e9920d1e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwbWFuYWdlciUyMHRhYmxldHxlbnwxfHx8fDE3NjM3Mjc5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  };

  const posts = [
    {
      id: 'reduce-labor-costs',
      title: 'How to Reduce Labor Costs Without Sacrificing Service Quality',
      excerpt: 'Discover proven strategies to optimize your labor spend while maintaining exceptional guest experiences.',
      author: 'Marcus Chen',
      date: 'November 10, 2025',
      readTime: '8 min read',
      category: 'Labor Management',
      image: 'https://images.unsplash.com/photo-1762113246607-4299ec3f3214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMHRlYW18ZW58MXx8fHwxNzYzNjE3Nzc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'whatsapp-restaurant-communication',
      title: 'Why WhatsApp Is Revolutionizing Restaurant Team Communication',
      excerpt: 'Explore how forward-thinking restaurants are using WhatsApp to improve staff engagement and reduce no-shows.',
      author: 'Sarah Rodriguez',
      date: 'November 5, 2025',
      readTime: '6 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1758519289582-398f2d7a4a88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwc3RhZmYlMjBtZWV0aW5nfGVufDF8fHx8MTc2MzcyOTI3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'staff-retention-strategies',
      title: '10 Proven Strategies to Reduce Restaurant Staff Turnover',
      excerpt: 'Staff turnover is expensive. Learn how to keep your best employees happy and reduce recruitment costs.',
      author: 'David Kim',
      date: 'October 28, 2025',
      readTime: '10 min read',
      category: 'HR & Culture',
      image: 'https://images.unsplash.com/photo-1658921034679-0d9e999ddc43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjM2NTUzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'restaurant-analytics-kpis',
      title: 'Restaurant Analytics: The KPIs Every Manager Should Track',
      excerpt: 'From labor cost percentage to sales per labor hour, master the metrics that matter most.',
      author: 'Jennifer Park',
      date: 'October 20, 2025',
      readTime: '9 min read',
      category: 'Analytics',
      image: 'https://images.unsplash.com/photo-1685040235380-a42a129ade4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYzNjE4NDI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'multi-location-management',
      title: 'Managing Multiple Restaurant Locations: A Complete Guide',
      excerpt: 'Scale your restaurant group without losing your mind. Expert tips for multi-location success.',
      author: 'Carlos Martinez',
      date: 'October 12, 2025',
      readTime: '11 min read',
      category: 'Growth',
      image: 'https://images.unsplash.com/photo-1762113246607-4299ec3f3214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwc2VydmljZSUyMHRlYW18ZW58MXx8fHwxNzYzNzI5Mjc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'seasonal-staffing-tips',
      title: 'Seasonal Staffing: How to Prepare for Peak Restaurant Seasons',
      excerpt: 'Get ahead of busy seasons with smart staffing strategies that ensure you're never over or understaffed.',
      author: 'Emily Thompson',
      date: 'October 5, 2025',
      readTime: '7 min read',
      category: 'Operations',
      image: 'https://images.unsplash.com/photo-1762113246607-4299ec3f3214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMHRlYW18ZW58MXx8fHwxNzYzNjE3Nzc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const categories = ['All', 'Best Practices', 'Labor Management', 'Technology', 'HR & Culture', 'Analytics', 'Growth', 'Operations'];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-neutral-50 to-primary-50/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-neutral-900 mb-6">Restaurant Operations Insights</h1>
            <p className="text-xl text-neutral-600 mb-8">
              Expert guides, tips, and strategies to help you run a better restaurant
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-12 h-12"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding-sm bg-white border-b border-neutral-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg bg-neutral-100 text-neutral-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding-sm bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to={`/blog/${featuredPost.id}`}
              className="group grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-neutral-50 to-primary-50/30 rounded-2xl overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="aspect-video md:aspect-square overflow-hidden">
                <ImageWithFallback
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="text-sm text-primary-600 uppercase tracking-wide mb-3">
                  Featured • {featuredPost.category}
                </div>
                <h2 className="text-neutral-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-neutral-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm text-neutral-500 mb-6">
                  <span>{featuredPost.author}</span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{featuredPost.date}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <div className="inline-flex items-center text-primary-600 group-hover:text-primary-700">
                  <span>Read article</span>
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-neutral-900 mb-12">Latest Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/blog/${post.id}`}
                  className="group block bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary-200 transition-all"
                >
                  <div className="aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="text-xs text-primary-600 uppercase tracking-wide mb-3">
                      {post.category}
                    </div>
                    
                    <h3 className="text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-neutral-600 mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center space-x-3 text-sm text-neutral-500 mb-4">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <div className="flex items-center text-primary-600 group-hover:text-primary-700">
                      <span>Read more</span>
                      <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-white mb-4">Never miss an update</h2>
            <p className="text-xl text-primary-100 mb-8">
              Get the latest restaurant operations insights delivered to your inbox every week
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 bg-white"
              />
              <button className="bg-secondary-600 text-white px-6 py-3 rounded-lg hover:bg-secondary-700 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>

            <p className="text-sm text-primary-100 mt-4">
              Join 5,000+ restaurant operators. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
