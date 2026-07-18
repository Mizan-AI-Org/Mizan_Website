import "./styles/globals.css";
import { useState, useEffect } from "react";
import Index from "./routes/_index";
import Features from "./routes/features";
import Pricing from "./routes/pricing";
import Contact from "./routes/contact";
import ComingSoon from "./routes/coming-soon";
import CaseStudies from "./routes/case-studies._index";
import Privacy from "./routes/privacy";
import Terms from "./routes/terms";
import { Analytics } from "@vercel/analytics/react";
import React from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    // Handle hash and path-based navigation
    const handleNavigation = () => {
      const hash = window.location.hash.slice(1);

      // Prefer hash (in-app section/page links), then fallback to path
      const baseHash = hash.split("/")[0];

      if (baseHash === "features") {
        setCurrentPage("features");
      } else if (baseHash === "pricing") {
        setCurrentPage("pricing");
      } else if (baseHash === "contact") {
        setCurrentPage("contact");
      } else if (baseHash === "case-studies") {
        setCurrentPage("case-studies");
      } else if (baseHash === "blog") {
        setCurrentPage("blog");
      } else if (baseHash === "privacy") {
        setCurrentPage("privacy");
      } else if (baseHash === "terms") {
        setCurrentPage("terms");
      } else {
        setCurrentPage("home");
      }

      // Scroll to top when switching top-level pages (not between case studies)
      const isCaseStudyDetail = hash.startsWith("case-studies/");
      if (!isCaseStudyDetail) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    // Check initial navigation
    handleNavigation();

    // Listen for hash changes (in-app navigation)
    window.addEventListener("hashchange", handleNavigation);

    return () => {
      window.removeEventListener("hashchange", handleNavigation);
    };
  }, []);

  // Render appropriate page
  const renderPage = () => {
    if (currentPage === "features") {
      return <Features />;
    }

    if (currentPage === "pricing") {
      return <Pricing />;
    }

    if (currentPage === "contact") {
      return <Contact />;
    }

    if (currentPage === "privacy") {
      return <Privacy />;
    }

    if (currentPage === "terms") {
      return <Terms />;
    }

    if (currentPage === "case-studies") {
      return <CaseStudies />;
    }

    if (currentPage === "blog") {
      return (
        <ComingSoon
          title="Blog Coming Soon"
          description="Our blog is on its way! Soon you'll find expert insights, industry trends, and best practices for running operations on Mizan. Stay tuned!"
        />
      );
    }

    return <Index />;
  };

  return (
    <>
      {renderPage()}
      <Analytics />
    </>
  );
}