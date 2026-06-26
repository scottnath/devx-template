/**
 * Default SEO configuration for devx-template.
 */
export const seoConfig = {
  baseURL: 'https://scottnath.github.io/devx-template',
  description: 'Node 24 Astro + Storybook starter using @scottnath/devx.',
  type: 'website' as const,
  image: {
    url: '/favicon.svg',
    alt: 'devx-template',
    width: 500,
    height: 500,
  },
  siteName: 'devx-template',
  twitter: {
    card: 'summary' as const,
  },
};

/** Absolute URL for an OG image path (`public/…`, `/…`, or full URL). */
export function resolveOgImage(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const pathname = path.replace(/^public\//, '/').replace(/^(?!\/)/, '/');
  return `${seoConfig.baseURL.replace(/\/$/, '')}${pathname}`;
}
