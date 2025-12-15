import { motion } from 'motion/react';
import { Construction } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

interface ComingSoonProps {
  title: string;
  description: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  const handleBackToHome = () => {
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGetNotified = () => {
    window.location.hash = 'contact';
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-primary-100 rounded-full mb-8">
              <Construction className="w-12 h-12 text-primary-600" />
            </div>
            
            <h1 className="text-neutral-900 mb-4">
              {title}
            </h1>
            
            <p className="text-neutral-600 mb-8 text-xl">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                onClick={handleBackToHome}
              >
                Back to Home
              </a>
              
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
                onClick={handleGetNotified}
              >
                Get Notified
              </a>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}