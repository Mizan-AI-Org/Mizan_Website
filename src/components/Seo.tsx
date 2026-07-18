import { useEffect } from 'react';
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  TWITTER_HANDLE,
  absoluteUrl,
  organizationJsonLd,
  softwareApplicationJsonLd,
  websiteJsonLd,
  type PageSeo,
} from '../lib/seo';

type SeoProps = PageSeo & {
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(id: string, data: Record<string, unknown> | Record<string, unknown>[]) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function Seo({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  noindex = false,
  keywords = [],
  jsonLd,
}: SeoProps) {
  useEffect(() => {
    const canonical = absoluteUrl(path);
    const ogImage = image.startsWith('http') ? image : absoluteUrl(image);

    document.title = title;
    document.documentElement.lang = 'en';

    upsertMeta('name', 'description', description);
    upsertMeta(
      'name',
      'robots',
      noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'
    );
    upsertMeta(
      'name',
      'googlebot',
      noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'
    );
    upsertMeta('name', 'author', SITE_NAME);
    upsertMeta('name', 'application-name', SITE_NAME);
    upsertMeta('name', 'theme-color', '#00d98f');
    if (keywords.length) {
      upsertMeta('name', 'keywords', keywords.join(', '));
    }

    upsertLink('canonical', canonical);

    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:locale', 'en_US');
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:image', ogImage);
    upsertMeta('property', 'og:image:alt', title);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:site', TWITTER_HANDLE);
    upsertMeta('name', 'twitter:creator', TWITTER_HANDLE);
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', ogImage);

    if (jsonLd) {
      upsertJsonLd('page-jsonld', Array.isArray(jsonLd) ? jsonLd : [jsonLd]);
    }
  }, [title, description, path, image, type, noindex, keywords, jsonLd]);

  return null;
}

export function SiteJsonLd() {
  useEffect(() => {
    upsertJsonLd('org-jsonld', [
      organizationJsonLd(),
      softwareApplicationJsonLd(),
      websiteJsonLd(),
    ]);
  }, []);

  return null;
}
