import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/content/site';

export const dynamic = 'force-static';

const routes = ['', 'about', 'manifesto', 'wallets', 'earn', 'messaging', 'get-ccx', 'roadmap', 'team', 'community', 'labs', 'media', 'donate', 'branding', 'terms', 'privacy'];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((r) => ({ url: `${SITE_URL}/${r}${r ? '/' : ''}`, lastModified, changeFrequency: r === '' ? 'weekly' : 'monthly', priority: r === '' ? 1 : 0.7 }));
}
