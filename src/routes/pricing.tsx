import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, X, ArrowRight, HelpCircle } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

export default function Pricing() {
  const [employeeCount, setEmployeeCount] = useState(25);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for single-location restaurants',
      basePrice: 79,
      pricePerEmployee: 2,
      maxEmployees: 30,
      features: [
        'Smart scheduling',
        'WhatsApp integration',
        'Basic analytics',
        'Mobile apps',
        'Email support',
        'Up to 30 employees',
      ],
      notIncluded: [
        'Multi-location support',
        'Advanced analytics',
        'Custom integrations',
        'Dedicated account manager',
      ],
      recommended: false,
    },
    {
      name: 'Professional',
      description: 'For growing restaurant businesses',
      basePrice: 149,
      pricePerEmployee: 3,
      maxEmployees: 100,
      features: [
        'Everything in Starter',
        'Advanced analytics & reports',
        'Performance tracking',
        'Labor cost optimization',
        'Priority support',
        'Up to 100 employees',
        'API access',
        'Custom reporting',
      ],
      notIncluded: [
        'Multi-location support',
        'Dedicated account manager',
      ],
      recommended: true,
    },
    {
      name: 'Enterprise',
      description: 'For multi-location operators',
      basePrice: null,
      pricePerEmployee: null,
      maxEmployees: null,
      features: [
        'Everything in Professional',
        'Multi-location management',
        'Consolidated reporting',
        'Custom integrations',
        'Dedicated account manager',
        'Unlimited employees',
        'SLA guarantee',
        'Custom training',
        'Advanced security',
      ],
      notIncluded: [],
      recommended: false,
    },
  ];

  const calculatePrice = (plan: typeof plans[0]) => {
    if (plan.basePrice === null) return null;
    
    const employees = Math.min(employeeCount, plan.maxEmployees || employeeCount);
    const monthlyPrice = plan.basePrice + (employees * plan.pricePerEmployee);
    
    if (billingCycle === 'annual') {
      return Math.floor(monthlyPrice * 12 * 0.85); // 15% discount
    }
    
    return monthlyPrice;
  };

  const faqs = [
    {
      question: 'How does the 14-day free trial work?',
      answer: 'Start using Mizan immediately with full access to all features. No credit card required. After 14 days, choose a plan that fits your needs or continue with our free tier.',
    },
    {
      question: 'Can I change plans later?',
      answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any charges.',
    },
    {
      question: 'What counts as an employee?',
      answer: 'An employee is any team member who needs to be scheduled, tracked, or managed in the system. This includes full-time, part-time, and seasonal staff.',
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees, ever. We include onboarding and training with all plans to ensure your success.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express) and ACH/bank transfers for annual plans.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time. No long-term contracts or cancellation fees. Your data is always yours to export.',
    },
    {
      question: 'Do you offer discounts for annual billing?',
      answer: 'Yes! Save 15% when you pay annually. That\'s like getting almost 2 months free.',
    },
    {
      question: 'What kind of support is included?',
      answer: 'All plans include email support. Professional and Enterprise plans get priority support with faster response times. Enterprise customers get a dedicated account manager.',
    },
  ];

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
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
              Choose the plan that's right for your restaurant. Start with a 14-day free trial.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-md transition-colors ${
                  billingCycle === 'monthly'
                    ? 'bg-primary-600 text-white'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-2 rounded-md transition-colors ${
                  billingCycle === 'annual'
                    ? 'bg-primary-600 text-white'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Annual
                <span className="ml-2 text-xs bg-secondary-100 text-secondary-700 px-2 py-1 rounded">
                  Save 15%
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="section-padding-sm bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-50 rounded-2xl p-8"
            >
              <h3 className="text-neutral-900 mb-6 text-center">How many employees do you have?</h3>
              
              <div className="space-y-4">
                <input
                  type="range"
                  min="5"
                  max="150"
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-primary-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                />
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    {employeeCount} employees
                  </div>
                  <p className="text-neutral-600">
                    Slide to estimate your monthly cost
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const price = calculatePrice(plan);
              const isRecommended = plan.recommended;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-2xl p-8 relative ${
                    isRecommended
                      ? 'border-2 border-primary-600 shadow-xl'
                      : 'border border-neutral-200'
                  }`}
                >
                  {isRecommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-neutral-900 mb-2">{plan.name}</h3>
                    <p className="text-neutral-600">{plan.description}</p>
                  </div>

                  <div className="mb-6">
                    {price !== null ? (
                      <>
                        <div className="flex items-baseline">
                          <span className="text-5xl font-bold text-neutral-900">
                            ${billingCycle === 'annual' ? Math.floor(price / 12) : price}
                          </span>
                          <span className="text-neutral-600 ml-2">/month</span>
                        </div>
                        {billingCycle === 'annual' && (
                          <p className="text-sm text-neutral-500 mt-2">
                            ${price}/year (billed annually)
                          </p>
                        )}
                        <p className="text-sm text-neutral-500 mt-2">
                          For {employeeCount <= (plan.maxEmployees || 999) ? employeeCount : plan.maxEmployees} employees
                        </p>
                      </>
                    ) : (
                      <div>
                        <div className="text-3xl font-bold text-neutral-900 mb-2">
                          Custom Pricing
                        </div>
                        <p className="text-neutral-600">
                          Tailored to your needs
                        </p>
                      </div>
                    )}
                  </div>

                  <a
                    href="#contact"
                    className={`w-full block text-center py-3 rounded-lg transition-colors mb-6 ${
                      isRecommended
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'border-2 border-neutral-300 text-neutral-900 hover:border-primary-600'
                    }`}
                  >
                    {price !== null ? 'Start Free Trial' : 'Contact Sales'}
                  </a>

                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Check className="text-primary-600 flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-neutral-700">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3 opacity-50">
                        <X className="text-neutral-400 flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-neutral-500">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Restaurant Size Recommendations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-neutral-50 rounded-2xl p-8"
          >
            <h3 className="text-neutral-900 mb-6 text-center">Not sure which plan is right for you?</h3>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl mb-2">🍽️</div>
                <h4 className="text-neutral-900 mb-2">Single Location</h4>
                <p className="text-neutral-600 mb-3">Under 30 employees</p>
                <p className="text-primary-600">→ Starter Plan</p>
              </div>
              <div>
                <div className="text-2xl mb-2">🏪</div>
                <h4 className="text-neutral-900 mb-2">Growing Business</h4>
                <p className="text-neutral-600 mb-3">30-100 employees</p>
                <p className="text-primary-600">→ Professional Plan</p>
              </div>
              <div>
                <div className="text-2xl mb-2">🏢</div>
                <h4 className="text-neutral-900 mb-2">Multi-Location</h4>
                <p className="text-neutral-600 mb-3">100+ employees</p>
                <p className="text-primary-600">→ Enterprise Plan</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-neutral-900 mb-4">Frequently asked questions</h2>
            <p className="text-xl text-neutral-600">
              Everything you need to know about pricing and billing
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border border-neutral-200 rounded-xl px-6"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <span className="text-left text-neutral-900">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-neutral-600 mb-4">Still have questions?</p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700"
            >
              <span>Contact our sales team</span>
              <ArrowRight size={20} />
            </a>
          </motion.div>
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
            <h2 className="text-white mb-6">Ready to get started?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Start your 14-day free trial today. No credit card required.
            </p>
            
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-neutral-100 transition-colors"
            >
              <span>Start Free Trial</span>
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
