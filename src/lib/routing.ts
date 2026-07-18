export type AppPage =
  | 'home'
  | 'features'
  | 'pricing'
  | 'contact'
  | 'case-studies'
  | 'blog'
  | 'privacy'
  | 'terms';

const PAGE_SEGMENTS: AppPage[] = [
  'features',
  'pricing',
  'contact',
  'case-studies',
  'blog',
  'privacy',
  'terms',
];

export function normalizePath(pathname: string) {
  if (!pathname || pathname === '/') return '/';
  return pathname.replace(/\/+$/, '') || '/';
}

export function getRouteFromLocation(): { page: AppPage; subpath: string } {
  const path = normalizePath(window.location.pathname);
  const segments = path.split('/').filter(Boolean);
  const first = segments[0] as AppPage | undefined;

  if (first && PAGE_SEGMENTS.includes(first)) {
    return {
      page: first,
      subpath: segments.slice(1).join('/'),
    };
  }

  return { page: 'home', subpath: '' };
}

/** Migrate legacy hash routes (#features) to path routes (/features). */
export function migrateLegacyHashRoutes() {
  const hash = window.location.hash.replace(/^#/, '');
  if (!hash) return;

  const [first, ...rest] = hash.split('/');
  const isPage = PAGE_SEGMENTS.includes(first as AppPage) || first === 'home';

  if (!isPage) {
    // Keep in-page anchors like #what-we-provide on the homepage.
    if (window.location.pathname !== '/' && window.location.pathname !== '') {
      return;
    }
    return;
  }

  if (first === 'home') {
    window.history.replaceState(null, '', '/');
    return;
  }

  const nextPath = `/${[first, ...rest].filter(Boolean).join('/')}`;
  window.history.replaceState(null, '', nextPath);
}

export function navigate(path: string) {
  const next = path.startsWith('/') ? path : `/${path}`;
  if (normalizePath(window.location.pathname) === normalizePath(next) && !window.location.hash) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  window.history.pushState(null, '', next);
  window.dispatchEvent(new PopStateEvent('popstate'));
}
