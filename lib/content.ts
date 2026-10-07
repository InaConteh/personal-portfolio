import 'server-only'
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { z } from 'zod'

export const TAGS = ['code', 'design', 'motion'] as const
export type Tag = (typeof TAGS)[number]

const mediaSchema = z.discriminatedUnion('type', [
  z.object({ type: z.literal('image'), src: z.string(), alt: z.string() }),
  z.object({ type: z.literal('video'), src: z.string(), poster: z.string(), caption: z.string() }),
])

// Project frontmatter, validated at build time (System Plan §3, data model).
const projectSchema = z.object({
  title: z.string(),
  summary: z.string(),
  category: z.string(),
  tags: z.array(z.enum(TAGS)).min(1),
  stack: z.array(z.string()),
  role: z.string().optional(),
  year: z.string().optional(),
  cover: z.string(),
  media: z.array(mediaSchema).default([]),
  link: z.string().url().optional(),
  repo: z.string().url().optional(),
  featured: z.boolean().default(false),
  order: z.number(),
})

export type Media = z.infer<typeof mediaSchema>
export type Project = z.infer<typeof projectSchema> & { slug: string; body: string }

const PROJECTS_DIR = path.join(process.cwd(), 'content', 'projects')

let cache: Project[] | null = null

export function getProjects(): Project[] {
  if (cache) return cache
  cache = fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      const { data, content } = matter(fs.readFileSync(path.join(PROJECTS_DIR, file), 'utf8'))
      const parsed = projectSchema.safeParse(data)
      if (!parsed.success) {
        throw new Error(`Invalid frontmatter in content/projects/${file}:\n${z.prettifyError(parsed.error)}`)
      }
      return { ...parsed.data, slug, body: content }
    })
    .sort((a, b) => a.order - b.order)
  return cache
}

export function getProject(slug: string) {
  return getProjects().find((project) => project.slug === slug)
}

export function getFeaturedProjects() {
  return getProjects().filter((project) => project.featured)
}
