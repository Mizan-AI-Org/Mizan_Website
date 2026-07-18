import "./styles/globals.css";
import { useState, useEffect, useMemo } from "react";
import Index from "./routes/_index";
import Features from "./routes/features";
import Pricing from "./routes/pricing";
import Contact from "./routes/contact";
import ComingSoon from "./routes/coming-soon";
import CaseStudies from "./routes/case-studies._index";
import Privacy from "./routes/privacy";
import Terms from "./routes/terms";
import { Analytics } from "@vercel/analytics/react";
import { Seo, SiteJsonLd } from "./components/Seo";
import {
  breadcrumbJsonLd,
  pageSeo,
  defaultSeo,
} from "./lib/seo";
import {
  getRouteFromLocation,
  migrateLegacyHashRoutes,
  type AppPage,
} from "./lib/routing";

export default function App() {
  const [page, setPage] = useState<AppPage>("home");
  const [subpath, setSubpath] = useState("");

  useEffect(() => {
    const sync = () => {
      migrateLegacyHashRoutes();
      const route = getRouteFromLocation();
      setPage(route.page);
      setSubpath(route.subpath);

      const isCaseStudyDetail =
        route.page === "case-studies" && Boolean(route.subpath);
      if (!isCaseStudyDetail) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    sync();
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);

  const seo = useMemo(() => {
    const base = pageSeo[page] ?? defaultSeo;
    if (page === "case-studies" && subpath) {
      const pretty = subpath
        .split("-")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");
      return {
        ...base,
        title: `${pretty} Case Study | Mizan AI`,
        description: `See how ${pretty} uses Mizan AI to automate operations, schedule staff, and run team communication through WhatsApp.`,
        path: `/case-studies/${subpath}`,
        type: "article" as const,
      };
    }
    return base;
  }, [page, subpath]);

  const jsonLd = useMemo(() => {
    const crumbs = [{ name: "Home", path: "/" }];
    if (page === "case-studies") {
      crumbs.push({ name: "Case Studies", path: "/case-studies" });
      if (subpath) {
        crumbs.push({
          name: seo.title.split("|")[0].trim(),
          path: seo.path,
        });
      }
    } else if (page !== "home") {
      crumbs.push({ name: seo.title.split("|")[0].trim(), path: seo.path });
    }
    return breadcrumbJsonLd(crumbs);
  }, [page, seo, subpath]);

  const renderPage = () => {
    if (page === "features") return <Features />;
    if (page === "pricing") return <Pricing />;
    if (page === "contact") return <Contact />;
    if (page === "privacy") return <Privacy />;
    if (page === "terms") return <Terms />;
    if (page === "case-studies") return <CaseStudies />;
    if (page === "blog") {
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
      <SiteJsonLd />
      <Seo {...seo} jsonLd={jsonLd} />
      {renderPage()}
      <Analytics />
    </>
  );
}
