import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Quote, MapPin, ChevronRight } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CALENDLY_DEMO_URL } from '../lib/links';
import { getRouteFromLocation, navigate } from '../lib/routing';

type CaseStudy = {
  id: string;
  business: string;
  location: string;
  industry: string;
  title: string;
  summary: string;
  author: string;
  role: string;
  image: string;
  paragraphs: string[];
  outcomes: { value: string; label: string }[];
  quote: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: 'barometre',
    business: 'Barometre',
    location: 'Marrakesh, Morocco',
    industry: 'Hospitality',
    title: 'How Barometre runs operations with Mizan AI',
    summary:
      'A Marrakesh restaurant replaced spreadsheet chaos and scattered chats with one WhatsApp-connected execution hub.',
    author: 'Hamza Hadni',
    role: 'Owner',
    image: '/images/hamza.png',
    paragraphs: [
      'Before Mizan, building the week meant hours of back-and-forth. Shift changes lived in personal WhatsApp threads. Managers spent more time chasing confirmations than running service.',
      'With Mizan, Barometre moved scheduling, reminders, and team communication into one execution hub. Staff get shifts and updates where they already work, on WhatsApp, while ownership stays visible in one place.',
      'The result: less admin, fewer no-shows, and a team that stays aligned from open to close, without another app to learn.',
    ],
    outcomes: [
      { value: 'Hours → minutes', label: 'Scheduling time' },
      { value: 'WhatsApp-first', label: 'Staff adoption' },
      { value: 'One hub', label: 'Ops + communication' },
    ],
    quote:
      'Mizan completely transformed how we manage operations and staff scheduling. What used to take hours now takes minutes.',
  },
  {
    id: 'coastal-kitchen',
    business: 'Coastal Kitchen',
    location: 'Casablanca, Morocco',
    industry: 'Hospitality',
    title: 'How Coastal Kitchen cut turnover with WhatsApp-first ops',
    summary:
      'A growing hospitality team used Mizan to keep schedules clear, reduce no-shows, and improve retention.',
    author: 'Mohammed Al-Habib',
    role: 'General Manager',
    image: '/images/mohammed.png',
    paragraphs: [
      'Coastal Kitchen was losing time every week to last-minute shift changes and unclear ownership. Staff preferred WhatsApp, but critical updates disappeared into private chats.',
      'Mizan brought scheduling and staff communication into one system. Managers publish shifts once, reminders go out automatically, and the team stays aligned without chasing people down.',
      'Within months, the operation felt calmer: fewer no-shows, clearer handoffs, and a team that actually liked how work updates arrived.',
    ],
    outcomes: [
      { value: '40% lower', label: 'Staff turnover' },
      { value: 'Faster', label: 'Shift confirmations' },
      { value: 'Clearer', label: 'Day-of coordination' },
    ],
    quote:
      'Our staff turnover dropped by 40% since implementing Mizan. The team loves the WhatsApp integration.',
  },
  {
    id: 'ima-restaurant',
    business: 'Ima Restaurant',
    location: 'Benguerir, Morocco',
    industry: 'Hospitality',
    title: 'How Ima Restaurant found ROI in the first month',
    summary:
      'Performance visibility helped leadership spot issues early and turn operations data into action.',
    author: 'Imran Haidar',
    role: 'General Manager',
    image: '/images/imran.png',
    paragraphs: [
      'Ima Restaurant had the talent, but not the visibility. Managers knew something felt off in labor and performance, yet the signals were scattered across tools and conversations.',
      'With Mizan, schedules, attendance, and team performance landed in one place. Leaders could see patterns quickly and act before small issues became expensive ones.',
      'The payoff showed up fast: cleaner scheduling, better follow-through, and decisions based on what was actually happening on the floor.',
    ],
    outcomes: [
      { value: 'Month 1', label: 'ROI realized' },
      { value: 'Clearer', label: 'Performance signals' },
      { value: 'Faster', label: 'Manager decisions' },
    ],
    quote:
      "The performance insights helped us identify and fix issues we didn't even know existed. ROI in the first month.",
  },
];

function getStudyIdFromLocation() {
  const { page, subpath } = getRouteFromLocation();
  if (page === 'case-studies' && subpath) {
    const match = caseStudies.find((study) => study.id === subpath);
    return match?.id ?? caseStudies[0].id;
  }
  return caseStudies[0].id;
}

export default function CaseStudiesIndex() {
  const [activeId, setActiveId] = useState(caseStudies[0].id);

  useEffect(() => {
    const sync = () => setActiveId(getStudyIdFromLocation());
    sync();
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

  const activeStudy = useMemo(
    () => caseStudies.find((study) => study.id === activeId) ?? caseStudies[0],
    [activeId]
  );

  const activeIndex = caseStudies.findIndex((study) => study.id === activeStudy.id);
  const prevStudy = caseStudies[(activeIndex - 1 + caseStudies.length) % caseStudies.length];
  const nextStudy = caseStudies[(activeIndex + 1) % caseStudies.length];

  const selectStudy = (id: string) => {
    setActiveId(id);
    navigate(`/case-studies/${id}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="case-studies-page">
        <div className="case-studies-page__intro">
          <p className="case-studies-page__eyebrow">Case studies</p>
          <h1>Real operators. Real results.</h1>
          <p className="case-studies-page__lede">
            Explore how teams use Mizan as their operating system for scheduling, communication, and
            daily execution.
          </p>
        </div>

        <div className="case-studies-layout">
          {/* Navigation / list */}
          <aside className="case-studies-nav" aria-label="Case studies">
            <p className="case-studies-nav__label">All stories</p>
            <div className="case-studies-nav__list">
              {caseStudies.map((study) => {
                const isActive = study.id === activeStudy.id;
                return (
                  <button
                    key={study.id}
                    type="button"
                    onClick={() => selectStudy(study.id)}
                    className={`case-studies-nav__item ${isActive ? 'is-active' : ''}`}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    <ImageWithFallback
                      src={study.image}
                      alt=""
                      className="case-studies-nav__thumb"
                    />
                    <span className="case-studies-nav__copy">
                      <span className="case-studies-nav__business">{study.business}</span>
                      <span className="case-studies-nav__meta">
                        {study.industry} · {study.location.split(',')[0]}
                      </span>
                    </span>
                    <ChevronRight size={16} className="case-studies-nav__chevron" aria-hidden />
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Active case study */}
          <div className="case-studies-detail" id="case-study-detail">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeStudy.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <div className="case-studies-detail__header">
                  <div className="case-studies-detail__identity">
                    <div className="case-studies-detail__avatar">
                      <ImageWithFallback
                        src={activeStudy.image}
                        alt={activeStudy.author}
                        className="case-studies-detail__avatar-img"
                      />
                    </div>
                    <div>
                      <p className="case-studies-detail__author">{activeStudy.author}</p>
                      <p className="case-studies-detail__role">
                        {activeStudy.role}, {activeStudy.business}
                      </p>
                      <p className="case-studies-detail__location">
                        <MapPin size={14} aria-hidden />
                        {activeStudy.location}
                      </p>
                    </div>
                  </div>
                  <span className="case-studies-detail__badge">{activeStudy.industry}</span>
                </div>

                <h2 className="case-studies-detail__title">{activeStudy.title}</h2>
                <p className="case-studies-detail__summary">{activeStudy.summary}</p>

                <div className="case-studies-detail__outcomes">
                  {activeStudy.outcomes.map((item) => (
                    <div key={item.label} className="case-studies-detail__outcome">
                      <p className="case-studies-detail__outcome-value">{item.value}</p>
                      <p className="case-studies-detail__outcome-label">{item.label}</p>
                    </div>
                  ))}
                </div>

                <div className="case-studies-detail__article">
                  {activeStudy.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>

                <blockquote className="case-studies-detail__quote">
                  <Quote size={24} aria-hidden />
                  <p>{activeStudy.quote}</p>
                  <footer>
                    {activeStudy.author}, {activeStudy.role} of {activeStudy.business}
                  </footer>
                </blockquote>

                <div className="case-studies-detail__pager">
                  <button type="button" onClick={() => selectStudy(prevStudy.id)}>
                    <span>Previous</span>
                    <strong>{prevStudy.business}</strong>
                  </button>
                  <button type="button" onClick={() => selectStudy(nextStudy.id)}>
                    <span>Next</span>
                    <strong>{nextStudy.business}</strong>
                  </button>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>

        <div className="case-studies-cta">
          <div>
            <h2>Want results like these?</h2>
            <p>See how Mizan can become the operating system for your team.</p>
          </div>
          <a
            href={CALENDLY_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="case-studies-cta__btn"
          >
            Book a demo
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
