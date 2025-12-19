import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import ReactMarkdown from "react-markdown";
import { Shield } from "lucide-react";
import privacyMarkdown from "../../Mizan AI Privacy Policy.md?raw";

export default function Privacy() {
  const updatedMatch = privacyMarkdown.match(/Last Updated:\s*\[?\*\*(.+?)\*\*\]?/i);
  const lastUpdated = updatedMatch?.[1];
  // Convert standalone bold lines to proper headings for better readability
  const processedMarkdown = privacyMarkdown
    // Numeric sections like **1. Introduction** -> ## 1. Introduction
    .replace(/^\s*\*\*\s*(\d+\.\s+[^*]+)\s*\*\*\s*$/gm, '## $1')
    // Other bold-only lines -> ### Subheading
    .replace(/^\s*\*\*\s*([A-Za-z][^*]+)\s*\*\*\s*$/gm, '### $1');

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Spacer to offset fixed navbar height */}
      <div className="h-16 md:h-20" />

      {/* Hero Header */}
      <section className="pt-12 md:pt-16 pb-10 bg-linear-to-br from-neutral-50 to-primary-50/30">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 bg-secondary-50 text-secondary-700 px-4 py-2 rounded-full mb-5">
            <Shield size={16} />
            <span className="text-sm">Legal</span>
          </div>
          <h1 className="text-neutral-900 mb-2">Privacy Policy</h1>
          {lastUpdated && (
            <p className="text-sm text-neutral-600">Last Updated: {lastUpdated}</p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="container-custom max-w-3xl">
          <div id="privacy-content" className="bg-white border border-neutral-200 rounded-2xl shadow-lg p-8 md:p-12">
            <article className="prose prose-neutral md:prose-lg max-w-none break-words leading-relaxed md:leading-8 prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:text-neutral-900 prose-h1:text-3xl md:prose-h1:text-4xl prose-h2:mt-12 prose-h3:mt-8 prose-p:my-6 md:prose-p:my-7 prose-p:text-base md:prose-p:text-lg prose-li:my-3 md:prose-li:my-4 prose-li:text-base md:prose-li:text-lg prose-ul:ml-6 prose-ol:ml-6 prose-ul:space-y-2 prose-ol:space-y-2 prose-hr:my-10 prose-a:text-primary-600 prose-a:underline-offset-2 hover:prose-a:underline prose-strong:text-neutral-900 prose-table:my-6 select-text">
              <ReactMarkdown>{processedMarkdown}</ReactMarkdown>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
