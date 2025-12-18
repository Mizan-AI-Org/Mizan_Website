import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, BookOpen, MessageSquare } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function ThankYou() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            <main className="pt-32 pb-20 md:pt-40 md:pb-25">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        {/* Success Icon Animation */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: 0.1
                            }}
                            className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-8"
                        >
                            <CheckCircle2 className="text-primary-600 w-12 h-12" />
                        </motion.div>

                        {/* Main Content */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                                Thank you! Your message is on its way.
                            </h1>
                            <p className="text-xl text-neutral-600 mb-12">
                                We've received your inquiry and our team is already on it.
                                You can expect a response within <span className="text-primary-600 font-semibold">5 minutes</span> during office hours.
                            </p>
                        </motion.div>

                        {/* What's Next Section */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="grid md:grid-cols-3 gap-6 mb-16"
                        >
                            <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-100 hover:border-primary-200 transition-colors">
                                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                    <BookOpen className="text-primary-600 w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Read Case Studies</h3>
                                <p className="text-neutral-500 text-sm mb-4">See how other restaurants are scaling with Mizan.</p>
                                <a href="/#case-studies" className="text-primary-600 font-medium inline-flex items-center text-sm hover:underline">
                                    Explore <ArrowRight className="ml-1 w-4 h-4" />
                                </a>
                            </div>

                            <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-100 hover:border-primary-200 transition-colors">
                                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                    <MessageSquare className="text-primary-600 w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Live Support</h3>
                                <p className="text-neutral-500 text-sm mb-4">Urgent questions? Reach us directly via phone or chat.</p>
                                <a href="tel:+212784476751" className="text-primary-600 font-medium inline-flex items-center text-sm hover:underline">
                                    +212 784476751 <ArrowRight className="ml-1 w-4 h-4" />
                                </a>
                            </div>

                            <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-100 hover:border-primary-200 transition-colors">
                                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                    <CheckCircle2 className="text-primary-600 w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Free Trial</h3>
                                <p className="text-neutral-500 text-sm mb-4">Ready to dive in? Start your 14-day free trial now.</p>
                                <a href="/#pricing" className="text-primary-600 font-medium inline-flex items-center text-sm hover:underline">
                                    Get Started <ArrowRight className="ml-1 w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>

                        {/* Back to Home Button */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <a
                                href="/"
                                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-all hover:scale-105"
                            >
                                Return to Homepage
                            </a>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}