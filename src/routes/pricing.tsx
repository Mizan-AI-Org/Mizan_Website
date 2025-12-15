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
      description: 'Perfect for single-location restaurants getting started',
      monthlyPrice: 99,
      annualPrice: 89,
      maxEmployees: 15,
      employeeLabel: 'Up to 15 employees',
      features: [
        'AI-Powered Scheduling',
        'Employee Availability & Time-Off',
        'Basic Labor Cost Tracking',
        'Mobile App for Staff',
        'Shift Swaps & Covers',
        'Email & SMS Notifications',
        'Email Support (48-hour response)',
      ],
      notIncluded: [
        'Advanced Labor Analytics',
        'Multi-Location Dashboard',
        'API Access',
        'Priority Support',
      ],
      recommended: false,
    },
    {
      name: 'Pro',
      description: 'For growing restaurants that need insights and control',
      monthlyPrice: 189,
      annualPrice: 169,
      maxEmployees: 50,
      employeeLabel: 'Up to 50 employees',
      features: [
        'Everything in Essential',
        'Advanced Labor Analytics',
        'Performance & Sales Integration',
        'Forecast-Based Scheduling',
        'Multi-Location Dashboard (up to 3)',
        'Advanced Compliance',
        'Priority Support (24-hour response)',
        'API Access (Toast, Square, etc.)',
      ],
      notIncluded: [
        'Unlimited Locations',
        'Dedicated Account Manager',
      ],
      recommended: true,
    },
    {
      name: 'Enterprise',
      description: 'For multi-location restaurant groups & franchises',
      monthlyPrice: null,
      annualPrice: null,
      maxEmployees: null,
      employeeLabel: 'Unlimited employees & locations',
      features: [
        'Everything in Pro',
        'Unlimited Locations',
        'Unlimited employees',
        'Consolidated Group Reporting',
        'Custom Integrations',
        'Dedicated Account Manager',
        'Custom Training & Onboarding',
        'SLA Guarantee (99.9% uptime)',
        'Advanced Security & SSO',
      ],
      notIncluded: [],
      recommended: false,
    },
  ];


  const getPrice = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === null) return null;
    return billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;
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
                className={`px-6 py-2 rounded-md transition-colors ${billingCycle === 'monthly'
                  ? 'bg-primary-600 text-white'
                  : 'text-neutral-600 hover:text-neutral-900'
                  }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-2 rounded-md transition-colors ${billingCycle === 'annual'
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
      <section className="pt-3 pb-5 bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-50 rounded-2xl p-6"
            >
              <h3 className="text-neutral-900 mb-6 text-center">How many employees do you have?</h3>

              <div className="space-y-2">
                <div className="relative py-2">
                  <input
                    type="range"
                    min="10"
                    max="200"
                    value={employeeCount}
                    onChange={(e) => setEmployeeCount(parseInt(e.target.value))}
                    className="w-full h-3 rounded-full appearance-none cursor-pointer slider-track"
                    style={{
                      background: `linear-gradient(to right, #10B981 0%, #10B981 ${((employeeCount - 10) / 190) * 100}%, #E5E7EB ${((employeeCount - 10) / 190) * 100}%, #E5E7EB 100%)`
                    }}
                  />
                  <style>{`
                    .slider-track::-webkit-slider-thumb {
                      -webkit-appearance: none;
                      appearance: none;
                      width: 28px;
                      height: 28px;
                      border-radius: 50%;
                      background: linear-gradient(135deg, #10B981 0%, #059669 100%);
                      cursor: pointer;
                      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4), 0 2px 4px rgba(0, 0, 0, 0.1);
                      border: 3px solid white;
                      transition: transform 0.2s ease, box-shadow 0.2s ease;
                    }
                    .slider-track::-webkit-slider-thumb:hover {
                      transform: scale(1.1);
                      box-shadow: 0 6px 16px rgba(16, 185, 129, 0.5), 0 3px 6px rgba(0, 0, 0, 0.15);
                    }
                    .slider-track::-moz-range-thumb {
                      width: 28px;
                      height: 28px;
                      border-radius: 50%;
                      background: linear-gradient(135deg, #10B981 0%, #059669 100%);
                      cursor: pointer;
                      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4), 0 2px 4px rgba(0, 0, 0, 0.1);
                      border: 3px solid white;
                      transition: transform 0.2s ease, box-shadow 0.2s ease;
                    }
                    .slider-track::-moz-range-thumb:hover {
                      transform: scale(1.1);
                      box-shadow: 0 6px 16px rgba(16, 185, 129, 0.5), 0 3px 6px rgba(0, 0, 0, 0.15);
                    }
                  `}</style>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    {employeeCount} employees
                  </div>
                  <p className="text-neutral-600">
                    {employeeCount <= 15
                      ? '→ Starter Plan ($99/mo)'
                      : employeeCount <= 50
                        ? '→ Pro Plan ($189/mo)'
                        : '→ Enterprise Plan (Custom pricing)'}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const price = getPrice(plan);
              const isRecommended = plan.recommended;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-2xl p-8 relative ${isRecommended
                    ? 'border-2 border-primary-600 shadow-xl'
                    : 'border border-neutral-200'
                    }`}
                >
                  {isRecommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      ⭐ Most Popular
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-neutral-900 mb-2">{plan.name}</h3>
                    <p className="text-neutral-600 text-sm">{plan.description}</p>
                  </div>

                  <div className="mb-6">
                    {price !== null ? (
                      <>
                        <div className="flex items-baseline">
                          <span className="text-5xl font-bold text-neutral-900">
                            ${price}
                          </span>
                          <span className="text-neutral-600 ml-2">/month</span>
                        </div>
                        {billingCycle === 'annual' && (
                          <p className="text-sm text-neutral-500 mt-2">
                            Billed annually
                          </p>
                        )}
                        <p className="text-sm text-primary-600 font-medium mt-2">
                          {plan.employeeLabel}
                        </p>
                      </>
                    ) : (
                      <div>
                        <div className="text-3xl font-bold text-neutral-900 mb-2">
                          Custom Pricing
                        </div>
                        <p className="text-neutral-600 text-sm">
                          Tailored to your operations
                        </p>
                        <p className="text-sm text-primary-600 font-medium mt-2">
                          {plan.employeeLabel}
                        </p>
                      </div>
                    )}
                  </div>

                  <a
                    href="#contact"
                    className={`w-full block text-center py-3 rounded-lg transition-colors mb-6 ${isRecommended
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
            className="mt-12 bg-neutral-50 rounded-2xl p-8"
          >
            <h3 className="text-neutral-900 mb-6 text-center">Not sure which plan is right for you?</h3>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl mb-2">🍽️</div>
                <h4 className="text-neutral-900 mb-2">Small Restaurant</h4>
                <p className="text-neutral-600 mb-3">Up to 15 employees</p>
                <p className="text-primary-600 font-medium">→ Essential Plan</p>
              </div>
              <div>
                <div className="text-2xl mb-2">🏪</div>
                <h4 className="text-neutral-900 mb-2">Growing Business</h4>
                <p className="text-neutral-600 mb-3">Up to 50 employees</p>
                <p className="text-primary-600 font-medium">→ Professional Plan</p>
              </div>
              <div>
                <div className="text-2xl mb-2">🏢</div>
                <h4 className="text-neutral-900 mb-2">Restaurant Groups</h4>
                <p className="text-neutral-600 mb-3">50+ employees or multi-location</p>
                <p className="text-primary-600 font-medium">→ Enterprise Plan</p>
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
