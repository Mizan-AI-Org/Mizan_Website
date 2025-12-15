import "./styles/globals.css";
import { useState, useEffect } from "react";
import Index from "./routes/_index";
import Features from "./routes/features";
import Pricing from "./routes/pricing";
import Contact from "./routes/contact";
import ComingSoon from "./routes/coming-soon";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    // Handle hash-based navigation
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);

      if (hash === "features") {
        setCurrentPage("features");
      } else if (hash === "pricing") {
        setCurrentPage("pricing");
      } else if (hash === "contact") {
        setCurrentPage("contact");
      } else if (hash === "case-studies") {
        setCurrentPage("case-studies");
      } else if (hash === "blog") {
        setCurrentPage("blog");
      } else {
        setCurrentPage("home");
      }

      // Scroll to top when page changes
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener(
        "hashchange",
        handleHashChange,
      );
    };
  }, []);

  // Render appropriate page
  if (currentPage === "features") {
    return <Features />;
  }

  if (currentPage === "pricing") {
    return <Pricing />;
  }

  if (currentPage === "contact") {
    return <Contact />;
  }

  if (currentPage === "case-studies") {
    return (
      <ComingSoon
        title="Case Studies Coming Soon"
        description="We're working hard to bring you inspiring success stories from restaurants that have transformed their operations with Mizan. Check back soon!"
      />
    );
  }

  if (currentPage === "blog") {
    return (
      <ComingSoon
        title="Blog Coming Soon"
        description="Our blog is on its way! Soon you'll find expert insights, industry trends, and best practices for restaurant management. Stay tuned!"
      />
    );
  }

  return <Index />;
}