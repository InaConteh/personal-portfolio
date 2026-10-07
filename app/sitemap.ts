import type { MetadataRoute } from 'next'
import { getProjects } from '@/lib/content'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/work', '/about', '/lab', '/contact'].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }))
  const projects = getProjects().map((project) => ({
    url: `${SITE_URL}/work/${project.slug}`,
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }))
  return [...pages, ...projects]
}
