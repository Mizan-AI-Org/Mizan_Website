import { useParams, Link } from '@remix-run/react';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Input } from '../components/ui/input';

export default function BlogPost() {
  const { slug } = useParams();

  // Mock blog post data
  const post = {
    title: 'The Complete Guide to Restaurant Scheduling in 2025',
    excerpt: 'Learn the strategies top restaurants use to create efficient schedules that balance labor costs, employee satisfaction, and customer service.',
    author: {
      name: 'Jennifer Park',
      role: 'Operations Director at Mizan AI',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    },
    date: 'November 15, 2025',
    readTime: '12 min read',
    category: 'Best Practices',
    image: 'https://images.unsplash.com/photo-1658282514119-65e9920d1e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwbWFuYWdlciUyMHRhYmxldHxlbnwxfHx8fDE3NjM3Mjc5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  };

  const relatedPosts = [
    {
      id: 'reduce-labor-costs',
      title: 'How to Reduce Labor Costs Without Sacrificing Service Quality',
      category: 'Labor Management',
    },
    {
      id: 'staff-retention-strategies',
      title: '10 Proven Strategies to Reduce Restaurant Staff Turnover',
      category: 'HR & Culture',
    },
    {
      id: 'restaurant-analytics-kpis',
      title: 'Restaurant Analytics: The KPIs Every Manager Should Track',
      category: 'Analytics',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Article Header */}
      <article className="pt-32 pb-20 md:pt-40">
        <div className="container-custom max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-sm text-primary-600 uppercase tracking-wide mb-4">
              {post.category}
            </div>

            <h1 className="text-neutral-900 mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <ImageWithFallback
                  src={post.author.image}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-neutral-900">{post.author.name}</div>
                  <div className="text-sm text-neutral-500">{post.author.role}</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-sm text-neutral-500">
                <div className="flex items-center space-x-1">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="ml-auto flex items-center space-x-2">
                <button className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition-colors">
                  <Twitter size={18} className="text-neutral-600" />
                </button>
                <button className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition-colors">
                  <Linkedin size={18} className="text-neutral-600" />
                </button>
                <button className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition-colors">
                  <Facebook size={18} className="text-neutral-600" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Featured Image */}
          <div className="aspect-video rounded-2xl overflow-hidden mb-12">
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-neutral-700 leading-relaxed mb-6">
              Restaurant scheduling is one of the most challenging aspects of restaurant management. 
              Get it right, and you'll have happy staff, controlled labor costs, and excellent service. 
              Get it wrong, and you'll face high turnover, budget overruns, and frustrated customers.
            </p>

            <p className="text-neutral-700 mb-6">
              In this comprehensive guide, we'll walk you through everything you need to know about 
              modern restaurant scheduling, from foundational principles to cutting-edge AI-powered tools.
            </p>

            <h2 className="text-neutral-900 mt-12 mb-6">Why Restaurant Scheduling Matters</h2>
            
            <p className="text-neutral-700 mb-6">
              Labor costs typically represent 25-35% of a restaurant's total costs, making it one of your 
              largest expenses. But it's not just about the numbers—poor scheduling affects every aspect 
              of your business:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="text-neutral-700">
                <strong>Service Quality:</strong> Understaffing leads to overwhelmed teams and poor guest experiences
              </li>
              <li className="text-neutral-700">
                <strong>Employee Morale:</strong> Inconsistent schedules and last-minute changes drive turnover
              </li>
              <li className="text-neutral-700">
                <strong>Profitability:</strong> Overstaffing eats into your margins unnecessarily
              </li>
              <li className="text-neutral-700">
                <strong>Compliance:</strong> Scheduling errors can lead to labor law violations and penalties
              </li>
            </ul>

            <h2 className="text-neutral-900 mt-12 mb-6">The 7 Principles of Effective Restaurant Scheduling</h2>

            <h3 className="text-neutral-900 mt-8 mb-4">1. Start with Accurate Forecasting</h3>
            <p className="text-neutral-700 mb-6">
              The foundation of great scheduling is knowing how busy you'll be. Use historical sales data, 
              reservation systems, and local event calendars to predict traffic. Most modern POS systems 
              can generate these forecasts automatically.
            </p>

            <h3 className="text-neutral-900 mt-8 mb-4">2. Know Your Labor Cost Targets</h3>
            <p className="text-neutral-700 mb-6">
              Establish clear labor cost percentage targets for different dayparts. Fine dining might run 
              30-35%, while quick service should aim for 25-30%. Track sales per labor hour (SPLH) as your 
              primary efficiency metric.
            </p>

            <h3 className="text-neutral-900 mt-8 mb-4">3. Cross-Train Your Team</h3>
            <p className="text-neutral-700 mb-6">
              The more skills your team members have, the more flexible your scheduling becomes. A server 
              who can also bartend or a line cook who can work multiple stations gives you crucial 
              scheduling options.
            </p>

            <h3 className="text-neutral-900 mt-8 mb-4">4. Respect Employee Availability</h3>
            <p className="text-neutral-700 mb-6">
              Consistently ignoring availability preferences is a fast track to turnover. Use scheduling 
              software that captures and respects availability while still meeting business needs.
            </p>

            <h3 className="text-neutral-900 mt-8 mb-4">5. Build Schedules in Advance</h3>
            <p className="text-neutral-700 mb-6">
              Publish schedules at least two weeks in advance. This shows respect for your team's time 
              and dramatically reduces no-shows and last-minute conflicts.
            </p>

            <h3 className="text-neutral-900 mt-8 mb-4">6. Make Shift Swaps Easy</h3>
            <p className="text-neutral-700 mb-6">
              Life happens. Having a simple, transparent process for shift swaps empowers your team and 
              reduces your management burden. Modern tools like WhatsApp integration make this seamless.
            </p>

            <h3 className="text-neutral-900 mt-8 mb-4">7. Track and Optimize Continuously</h3>
            <p className="text-neutral-700 mb-6">
              Review your scheduling performance weekly. Compare actual labor costs to targets, track 
              overtime, monitor no-show rates, and adjust your approach based on data.
            </p>

            <h2 className="text-neutral-900 mt-12 mb-6">Common Scheduling Mistakes to Avoid</h2>

            <div className="bg-neutral-50 rounded-xl p-8 my-8">
              <ul className="space-y-4">
                <li className="text-neutral-700">
                  <strong>Scheduling by habit instead of data:</strong> Just because you've always had three servers on Tuesday lunch doesn't mean you need three servers
                </li>
                <li className="text-neutral-700">
                  <strong>Ignoring employee preferences:</strong> This is the #1 cause of preventable turnover
                </li>
                <li className="text-neutral-700">
                  <strong>Last-minute schedule changes:</strong> Emergencies happen, but chronic last-minute changes destroy morale
                </li>
                <li className="text-neutral-700">
                  <strong>Unclear shift swap policies:</strong> Without clear rules, you'll spend hours mediating disputes
                </li>
                <li className="text-neutral-700">
                  <strong>Not tracking no-shows:</strong> Patterns exist, but you can't fix what you don't measure
                </li>
              </ul>
            </div>

            <h2 className="text-neutral-900 mt-12 mb-6">The Role of Technology in Modern Scheduling</h2>

            <p className="text-neutral-700 mb-6">
              While manual scheduling with spreadsheets might work for very small operations, technology 
              dramatically improves efficiency and accuracy for most restaurants. Modern scheduling tools offer:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="text-neutral-700">AI-powered schedule optimization based on forecasts and constraints</li>
              <li className="text-neutral-700">Automatic conflict detection and resolution suggestions</li>
              <li className="text-neutral-700">Mobile apps for schedule viewing and shift swap requests</li>
              <li className="text-neutral-700">WhatsApp or SMS notifications to reduce no-shows</li>
              <li className="text-neutral-700">Real-time labor cost tracking against budgets</li>
              <li className="text-neutral-700">Integration with POS and payroll systems</li>
            </ul>

            <h2 className="text-neutral-900 mt-12 mb-6">Getting Started: Your Action Plan</h2>

            <p className="text-neutral-700 mb-6">
              Ready to improve your restaurant scheduling? Here's your roadmap:
            </p>

            <ol className="space-y-4 mb-8 list-decimal pl-6">
              <li className="text-neutral-700">
                <strong>Audit your current process:</strong> How long does scheduling take? What's your labor cost %? What's your turnover rate?
              </li>
              <li className="text-neutral-700">
                <strong>Set clear targets:</strong> Define acceptable ranges for labor cost percentage and SPLH
              </li>
              <li className="text-neutral-700">
                <strong>Gather employee availability:</strong> Create a simple system for staff to communicate their preferences
              </li>
              <li className="text-neutral-700">
                <strong>Evaluate scheduling tools:</strong> Look for solutions with forecasting, optimization, and mobile features
              </li>
              <li className="text-neutral-700">
                <strong>Create a shift swap policy:</strong> Define rules and communicate them clearly
              </li>
              <li className="text-neutral-700">
                <strong>Publish schedules consistently:</strong> Aim for 2+ weeks in advance
              </li>
              <li className="text-neutral-700">
                <strong>Track and refine:</strong> Review performance weekly and adjust your approach
              </li>
            </ol>

            <div className="bg-primary-50 border-l-4 border-primary-600 rounded-r-xl p-8 my-12">
              <h3 className="text-neutral-900 mb-4">Key Takeaway</h3>
              <p className="text-neutral-700">
                Great restaurant scheduling isn't about perfection—it's about having a systematic approach 
                that balances business needs with employee wellbeing. The restaurants that get this right 
                enjoy lower turnover, better service, and healthier profit margins.
              </p>
            </div>

            <p className="text-neutral-700">
              If you're ready to transform your scheduling process, modern tools like Mizan AI can help you 
              implement these best practices automatically, saving you hours each week while improving both 
              labor efficiency and employee satisfaction.
            </p>
          </div>

          {/* Author Bio */}
          <div className="bg-neutral-50 rounded-2xl p-8 mt-16">
            <div className="flex items-start space-x-4">
              <ImageWithFallback
                src={post.author.image}
                alt={post.author.name}
                className="w-20 h-20 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <h4 className="text-neutral-900 mb-1">About {post.author.name}</h4>
                <p className="text-neutral-600 mb-4">
                  Jennifer is the Operations Director at Mizan AI with over 15 years of experience in 
                  restaurant management. She's helped hundreds of restaurants optimize their operations 
                  and has a passion for data-driven decision making.
                </p>
                <div className="flex space-x-3">
                  <button className="text-primary-600 hover:text-primary-700">
                    <Twitter size={20} />
                  </button>
                  <button className="text-primary-600 hover:text-primary-700">
                    <Linkedin size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-neutral-900 mb-8">Related Articles</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                to={`/blog/${relatedPost.id}`}
                className="block bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg hover:border-primary-200 transition-all"
              >
                <div className="text-xs text-primary-600 uppercase tracking-wide mb-2">
                  {relatedPost.category}
                </div>
                <h4 className="text-neutral-900 mb-3">{relatedPost.title}</h4>
                <div className="flex items-center text-primary-600">
                  <span className="text-sm">Read more</span>
                  <ArrowRight size={16} className="ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-white mb-4">Get more insights like this</h2>
            <p className="text-xl text-primary-100 mb-8">
              Join 5,000+ restaurant operators receiving weekly tips and strategies
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
