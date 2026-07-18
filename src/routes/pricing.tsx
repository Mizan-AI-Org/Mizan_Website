import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Check, X, ArrowRight } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { faqJsonLd } from '../lib/seo';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for single-location businesses getting started',
      monthlyPrice: 99,
      annualPrice: 89,
      maxEmployees: 15,
      employeeLabel: 'Up to 15 employees',
      features: [
        'AI-Powered Scheduling',
        'Employee Availability & Time-Off',
        'Basic Labor Cost Tracking',
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
      description: 'For growing businesses that need insights and control',
      monthlyPrice: 189,
      annualPrice: 169,
      maxEmployees: 50,
      employeeLabel: 'Up to 50 employees',
      features: [
        'Everything in Starter',
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
      description: 'For multi-location groups & franchises',
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
      answer: 'All plans include email support. Pro and Enterprise plans get priority support with faster response times. Enterprise customers get a dedicated account manager.',
    },
    {
      question: 'How does Mizan AI help with staff scheduling?',
      answer: 'Mizan AI uses intelligent algorithms to create optimized schedules based on staff availability, skills, labor costs, and historical demand patterns. It can reduce scheduling time by up to 70%.',
    },
    {
      question: 'Can I communicate with my team through WhatsApp?',
      answer: 'Yes! Mizan AI integrates seamlessly with WhatsApp, allowing you to send schedules, shift reminders, and updates directly to your team. It also supports voice notes and interactive checklists.',
    },
    {
      question: 'How does the incident management system work?',
      answer: 'Staff can report incidents through voice notes or text via WhatsApp. The AI transcribes, categorizes, and creates tickets automatically on your manager dashboard for review and action.',
    },
    {
      question: 'How secure is my business data?',
      answer: 'We take security seriously. All data is encrypted in transit and at rest, and we comply with industry-standard security practices to protect your business information.',
    },
  ];

  useEffect(() => {
    const id = 'pricing-faq-jsonld';
    let el = document.getElementById(id) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement('script');
      el.id = id;
      el.type = 'application/ld+json';
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(faqJsonLd(faqs));
    return () => {
      el?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pricing-page">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="pricing-page__intro"
          >
            <h1>Simple, transparent pricing</h1>
            <p>
              Choose the plan that's right for your business. Start with a 14-day free trial.
            </p>

            <div className="pricing-toggle" role="group" aria-label="Billing cycle">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={billingCycle === 'monthly' ? 'is-active' : ''}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('annual')}
                className={billingCycle === 'annual' ? 'is-active' : ''}
              >
                Annual
                <span className="pricing-toggle__save">Save 15%</span>
              </button>
            </div>
          </motion.div>

          <div className="pricing-plans__grid">
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
                  className={`pricing-card ${isRecommended ? 'pricing-card--featured' : ''}`}
                >
                  {isRecommended && (
                    <div className="pricing-card__badge">Most Popular</div>
                  )}

                  <div className="pricing-card__head">
                    <h3>{plan.name}</h3>
                    <p>{plan.description}</p>
                  </div>

                  <div className="pricing-card__price">
                    {price !== null ? (
                      <>
                        <div className="pricing-card__amount">
                          <span className="pricing-card__dollars">${price}</span>
                          <span className="pricing-card__period">/month</span>
                        </div>
                        {billingCycle === 'annual' && (
                          <p className="pricing-card__billed">Billed annually</p>
                        )}
                        <p className="pricing-card__seats">{plan.employeeLabel}</p>
                      </>
                    ) : (
                      <div>
                        <div className="pricing-card__custom">Custom Pricing</div>
                        <p className="pricing-card__custom-note">Tailored to your operations</p>
                        <p className="pricing-card__seats">{plan.employeeLabel}</p>
                      </div>
                    )}
                  </div>

                  <a
                    href="/contact"
                    className={`pricing-card__cta ${isRecommended ? 'pricing-card__cta--primary' : ''}`}
                  >
                    {price !== null ? 'Start Free Trial' : 'Contact Sales'}
                  </a>

                  <div className="pricing-card__features">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="pricing-card__feature">
                        <Check className="pricing-card__check" size={20} />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, idx) => (
                      <div key={idx} className="pricing-card__feature pricing-card__feature--muted">
                        <X className="pricing-card__x" size={20} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pricing-guide"
          >
            <h3>Not sure which plan is right for you?</h3>

            <div className="pricing-guide__grid">
              <div>
                <h4>Small Team</h4>
                <p>Up to 15 employees</p>
                <span>Starter</span>
              </div>
              <div>
                <h4>Growing Business</h4>
                <p>Up to 50 employees</p>
                <span>Pro</span>
              </div>
              <div>
                <h4>Multi-Location Groups</h4>
                <p>50+ employees or multi-location</p>
                <span>Enterprise</span>
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

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white border border-neutral-200 rounded-xl px-6"
                  >
                    <AccordionTrigger className="hover:no-underline">
                      <span className="text-left text-neutral-900 font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-neutral-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="space-y-4">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
                  <AccordionItem
                    key={index + Math.ceil(faqs.length / 2)}
                    value={`item-${index + Math.ceil(faqs.length / 2)}`}
                    className="bg-white border border-neutral-200 rounded-xl px-6"
                  >
                    <AccordionTrigger className="hover:no-underline">
                      <span className="text-left text-neutral-900 font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-neutral-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-neutral-600 mb-4">Still have questions?</p>
            <a
              href="/contact"
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
              href="/contact"
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
