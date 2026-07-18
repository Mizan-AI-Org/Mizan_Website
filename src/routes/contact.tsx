/// <reference types="vite/client" />
import { motion } from 'motion/react';
import { Send, CheckCircle2, Mail, Phone, MapPin, Check } from 'lucide-react';
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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    const form = e.currentTarget;

    if (!locations || !employees || !interest) {
      setErrorMessage('Please fill in all required fields (Number of Locations, Employees, and Interest).');
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(form);

    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      params.append(key, typeof value === 'string' ? value : (value as File).name);
    });

    const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
    const url = formspreeId
      ? `https://formspree.io/f/${formspreeId}`
      : (window.location.pathname || '/');
    const headers: Record<string, string> = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    if (formspreeId) {
      headers['Accept'] = 'application/json';
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body: params.toString(),
      });

      if (response.ok) {
        setShowSuccess(true);
        form.reset();
        setLocations('');
        setEmployees('');
        setInterest('');
      } else {
        const text = await response.text();
        console.error('Form submission failed:', response.status, text);
        setErrorMessage('Something went wrong. Please try again or contact us directly.');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="contact-page">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="contact-page__intro"
          >
            <h1>Let's talk about your business</h1>
            <p>
              Ready for a free trial or a personalized demo? Reach out and we'll help you get started.
            </p>
          </motion.div>

          <div className="contact-page__layout">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="contact-form-panel"
            >
              <h2>Get in touch</h2>

              {showSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="contact-success"
                  aria-live="polite"
                  role="status"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    className="contact-success__icon"
                  >
                    <CheckCircle2 size={36} />
                  </motion.div>
                  <h3>Message sent successfully</h3>
                  <p>
                    Thank you for reaching out. We've received your inquiry and our team will get back
                    to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setShowSuccess(false);
                      setErrorMessage(null);
                    }}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form
                  className="contact-form"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  {errorMessage && (
                    <div className="contact-form__error" role="alert" aria-live="assertive">
                      {errorMessage}
                    </div>
                  )}
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="locations" value={locations} required />
                  <input type="hidden" name="employees" value={employees} required />
                  <input type="hidden" name="interest" value={interest} required />
                  <p hidden>
                    <label>
                      Don't fill this out: <input name="bot-field" />
                    </label>
                  </p>

                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" placeholder="John" required />
                    </div>
                    <div className="contact-form__field">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                    <div className="contact-form__field">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        pattern="^[+()\-\s\d]{7,}$"
                      />
                    </div>
                  </div>

                  <div className="contact-form__field">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input id="businessName" name="businessName" placeholder="Your Business" />
                  </div>

                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <Label htmlFor="locations">Number of Locations</Label>
                      <Select value={locations} onValueChange={setLocations}>
                        <SelectTrigger>
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
                    <div className="contact-form__field">
                      <Label htmlFor="employees">Number of Employees</Label>
                      <Select value={employees} onValueChange={setEmployees}>
                        <SelectTrigger>
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

                  <div className="contact-form__field">
                    <Label htmlFor="interest">What are you interested in?</Label>
                    <Select value={interest} onValueChange={setInterest}>
                      <SelectTrigger>
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

                  <div className="contact-form__field">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your business and what you're looking for..."
                      className="contact-form__message"
                    />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="contact-form__submit">
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    {!isSubmitting && <Send size={18} />}
                  </button>

                  <p className="contact-form__legal">
                    By submitting this form, you agree to our{' '}
                    <a href="#privacy">Privacy Policy</a> and <a href="#terms">Terms of Service</a>.
                  </p>
                </form>
              )}
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="contact-aside"
            >
              <div className="contact-aside__card">
                <h3>Contact information</h3>
                <ul className="contact-aside__list">
                  <li>
                    <span className="contact-aside__icon">
                      <Mail size={18} />
                    </span>
                    <div>
                      <strong>Email</strong>
                      <a href="mailto:sales@heymizan.ai">sales@heymizan.ai</a>
                    </div>
                  </li>
                  <li>
                    <span className="contact-aside__icon">
                      <Phone size={18} />
                    </span>
                    <div>
                      <strong>Phone</strong>
                      <a href="tel:+212784476751">+212 784476751</a>
                      <span>Mon-Fri, 9am-6pm EST</span>
                    </div>
                  </li>
                  <li>
                    <span className="contact-aside__icon">
                      <MapPin size={18} />
                    </span>
                    <div>
                      <strong>Office</strong>
                      <p>Marrakech, Morocco</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="contact-aside__card contact-aside__card--muted">
                <h3>Why choose Mizan?</h3>
                <ul className="contact-aside__benefits">
                  {[
                    '14-day free trial with full features',
                    'Setup and training included',
                    'Dedicated customer success team',
                    'No long-term contracts',
                  ].map((item) => (
                    <li key={item}>
                      <Check size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="contact-aside__card contact-aside__card--accent">
                <h3>Response time</h3>
                <p>
                  We typically respond to all inquiries within 5 minutes during office hours.
                </p>
                <p>
                  Existing customers can reach us 24/7 on{' '}
                  <a href="tel:+212784476751">+212 784476751</a> for urgent support.
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <section className="contact-faq">
        <div className="container-custom">
          <div className="contact-faq__intro">
            <h2>Quick answers</h2>
            <p>Frequently asked questions about getting started</p>
          </div>

          <div className="contact-faq__grid">
            <div>
              <h4>How long does setup take?</h4>
              <p>
                Most businesses are up and running within 30 minutes. We handle the technical setup
                and provide training for your team.
              </p>
            </div>
            <div>
              <h4>Do you integrate with my POS?</h4>
              <p>
                We integrate with major POS systems including Toast, Square, Clover, and more.
                Contact us to confirm your specific system.
              </p>
            </div>
            <div>
              <h4>What if I need help after setup?</h4>
              <p>
                You'll have access to our support team via email, chat, and phone. We also provide
                documentation and training materials.
              </p>
            </div>
            <div>
              <h4>Can I try before committing?</h4>
              <p>
                Yes. Our 14-day free trial gives you full access to all features. No credit card
                required to start.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
