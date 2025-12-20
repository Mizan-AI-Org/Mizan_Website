/// <reference types="vite/client" />
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { useState } from 'react';

export default function Contact() {
  const [locations, setLocations] = useState('');
  const [employees, setEmployees] = useState('');
  const [interest, setInterest] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  // Inline error feedback instead of browser alert popups
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Clear any previous error when starting a new submission
    setErrorMessage(null);
    setIsSubmitting(true);

    // Build application/x-www-form-urlencoded from current form values
    const formData = new FormData(e.currentTarget);
    const urlEncoded = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
      urlEncoded.append(key, value.toString());
    }

    // Local test: avoid network call and simulate success
    // Rationale:
    // - Netlify intercepts POSTs in production, but locally there's no endpoint
    //   for '/'. Using a mock makes local testing smooth.
    if (import.meta.env.DEV) {
      await new Promise((r) => setTimeout(r, 600)); // simulate latency
      setShowSuccess(true);
      setErrorMessage(null);
      setIsSubmitting(false);
      // Reset the form and controlled select values
      (e.currentTarget as HTMLFormElement).reset();
      setLocations('');
      setEmployees('');
      setInterest('');
      console.info('[DEV] Mocked Netlify form submission:', Object.fromEntries(formData.entries()));
      return;
    }

    try {
      // Production: Netlify will parse this POST and create a submission
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: urlEncoded.toString(),
      });

      // Netlify Forms often respond with 200 or a 302/303 redirect.
      // Treat 200, 302, and 303 as success for SPA UX.
      const isSuccess = response.ok || response.status === 302 || response.status === 303;
      if (isSuccess) {
        
        setShowSuccess(true);
        setErrorMessage(null);
        // Optional: reset after success
        (e.currentTarget as HTMLFormElement).reset();
        setLocations('');
        setEmployees('');
        setInterest('');
      } else {
        console.error('Form submission failed', response.status);
        setErrorMessage('Something went wrong. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessage('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-25 bg-gradient-to-br from-neutral-50 to-primary-50/30">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-neutral-900 mb-6">Let's talk about your restaurant</h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Whether you're ready to start a free trial or want to see a personalized demo, we're here to help
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              >
              <h2 className="text-neutral-900 mb-6">Get in touch</h2>

              {showSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-primary-50 border border-primary-100 rounded-2xl p-8 text-center"
                  aria-live="polite" role="status"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="text-primary-600 w-10 h-10" />
                  </motion.div>
                  <h3 className="text-neutral-900 mb-4">Message Sent Successfully!</h3>
                  <p className="text-neutral-600 mb-6">
                    Thank you for reaching out. We've received your inquiry and our team will get back to you within 5 minutes.
                  </p>
                  <button
                    onClick={() => {
                      setShowSuccess(false);
                      setErrorMessage(null);
                    }}
                    className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form
                  className="space-y-6"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  // IMPORTANT for Netlify Forms:
                  // - name must match the hidden form in index.html
                  // - include a hidden input `form-name` with the same value
                  // - data-netlify attribute enables Netlify parsing
                  // - honeypot helps block simple bots
                  onSubmit={handleSubmit}
                >
                  {/* Inline error banner shown when submission fails */}
                  {errorMessage && (
                    <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-red-700" role="alert" aria-live="assertive">
                      {errorMessage}
                    </div>
                  )}
                  <input type="hidden" name="form-name" value="contact" />
                  {/* These hidden inputs mirror custom Selects so Netlify receives real values */}
                  <input type="hidden" name="locations" value={locations} required />
                  <input type="hidden" name="employees" value={employees} required />
                  <input type="hidden" name="interest" value={interest} required />
                  {/* Honeypot */}
                  <p hidden>
                    <label>Don’t fill this out: <input name="bot-field" /></label>
                  </p>

                  {/* Optional anti-spam: enable reCAPTCHA in Netlify site settings and uncomment below */}
                  {/* <div data-netlify-recaptcha="true"></div> */}

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" placeholder="John" className="mt-2" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" placeholder="Doe" className="mt-2" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="john@restaurant.com" className="mt-2" required />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    {/* Basic pattern to nudge valid numbers; not strict to allow intl formats */}
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="mt-2"
                      pattern="^[+()\-\s\d]{7,}$"
                    />
                  </div>

                  <div>
                    <Label htmlFor="restaurantName">Restaurant Name</Label>
                    <Input id="restaurantName" name="restaurantName" placeholder="Your Restaurant" className="mt-2" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="locations">Number of Locations</Label>
                      {/* Custom Select keeps value in state; hidden input above is the actual form field */}
                      <Select value={locations} onValueChange={setLocations}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 location</SelectItem>
                          <SelectItem value="2-3">2-3 locations</SelectItem>
                          <SelectItem value="4-10">4-10 locations</SelectItem>
                          <SelectItem value="11+">11+ locations</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="employees">Number of Employees</Label>
                      <Select value={employees} onValueChange={setEmployees}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-20">1-20 employees</SelectItem>
                          <SelectItem value="21-50">21-50 employees</SelectItem>
                          <SelectItem value="51-100">51-100 employees</SelectItem>
                          <SelectItem value="101+">101+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="interest">What are you interested in?</Label>
                    <Select value={interest} onValueChange={setInterest}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="trial">Start a free trial</SelectItem>
                        <SelectItem value="demo">Schedule a demo</SelectItem>
                        <SelectItem value="pricing">Discuss pricing</SelectItem>
                        <SelectItem value="integration">Integration questions</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your restaurant and what you're looking for..."
                      className="mt-2 min-h-[120px]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors inline-flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    {!isSubmitting && <Send size={20} />}
                  </button>

                  <p className="text-sm text-neutral-500 text-center">
                    By submitting this form, you agree to our privacy policy
                  </p>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-neutral-900 mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary-600" size={20} />
                    </div>
                    <div>
                      <h4 className="text-neutral-900 mb-1">Email</h4>
                      {/* Display email address. Note: changing this does not affect Netlify form recipients; configure notifications in Netlify or use a function to forward submissions. */}
                      <p className="text-neutral-600">sales@heymizan.ai</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary-600" size={20} />
                    </div>
                    <div>
                      <h4 className="text-neutral-900 mb-1">Phone</h4>
                      <p className="text-neutral-600">+212 784476751</p>
                      <p className="text-sm text-neutral-500">Mon-Fri, 9am-6pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary-600" size={20} />
                    </div>
                    <div>
                      <h4 className="text-neutral-900 mb-1">Office</h4>
                      <p className="text-neutral-600">
                        Marrakech, Morocco
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-neutral-50 to-primary-50/30 rounded-2xl p-8">
                <h4 className="text-neutral-900 mb-4">Why choose Mizan?</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-neutral-700">14-day free trial with full features</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-neutral-700">Setup and training included</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-neutral-700">Dedicated customer success team</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-neutral-700">No long-term contracts</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary-600 rounded-2xl p-8 text-white">
                <h4 className="text-white mb-2">Response Time</h4>
                <p className="text-primary-100 mb-4">
                  We typically respond to all inquiries within 5 minutes during office hours.
                </p>
                <p className="text-primary-100">
                  For urgent support needs, existing customers can reach us 24/7 on +212 784476751.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-neutral-900 mb-4">Quick Answers</h2>
            <p className="text-xl text-neutral-600">
              Frequently asked questions about getting started
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h4 className="text-neutral-900 mb-2">How long does setup take?</h4>
              <p className="text-neutral-600">
                Most restaurants are up and running within 24-48 hours. We handle the technical setup and provide training for your team.
              </p>
            </div>
            <div>
              <h4 className="text-neutral-900 mb-2">Do you integrate with my POS?</h4>
              <p className="text-neutral-600">
                We integrate with major POS systems including Toast, Square, Clover, and more. Contact us to confirm your specific system.
              </p>
            </div>
            <div>
              <h4 className="text-neutral-900 mb-2">What if I need help after setup?</h4>
              <p className="text-neutral-600">
                You'll have access to our support team via email, chat, and phone. We also provide comprehensive documentation and training materials.
              </p>
            </div>
            <div>
              <h4 className="text-neutral-900 mb-2">Can I try before committing?</h4>
              <p className="text-neutral-600">
                Yes! Our 14-day free trial gives you full access to all features. No credit card required to start.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
