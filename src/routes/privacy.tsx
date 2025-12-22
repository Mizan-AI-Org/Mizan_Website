import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import ReactMarkdown from "react-markdown";
import { Shield } from "lucide-react";
import privacyMarkdown from "../../Mizan AI Privacy Policy.md?raw";

export default function Privacy() {
  const updatedMatch = privacyMarkdown.match(/Last Updated:\s*\[?\*\*(.+?)\*\*\]?/i);
  const lastUpdated = updatedMatch?.[1];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Spacer to offset fixed navbar height */}
      <div className="h-16 md:h-20" />

      {/* Hero Header */}
      <section className="mt-16 md:mt-20 mb-16 md:mb-20 pt-12 md:pt-16 pb-10 bg-gradient-to-br from-neutral-50 to-primary-50/30">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 bg-secondary-50 text-secondary-700 px-4 py-2 rounded-full mb-5">
            <Shield size={16} />
            <span className="text-sm">Legal</span>
          </div>
          <h1 className="text-neutral-900 mb-3">Privacy Policy</h1>
          {lastUpdated && (
            <p className="text-neutral-600">Last Updated: {lastUpdated}</p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="container-custom max-w-4xl">
          <div className="bg-white border border-neutral-200 rounded-2xl shadow-md p-6 md:p-10">
            <article className="prose prose-neutral max-w-none break-words">
              <ReactMarkdown>{privacyMarkdown}</ReactMarkdown>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}